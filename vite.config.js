import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { mergeStore, readStore, writeStore } from "./server/store.mjs"

function siraStore() {
  return {
    name: "sira-store",
    configureServer(server) {
      server.middlewares.use("/api/sira", (req, res) => {
        if (req.method === "GET") {
          res.setHeader("content-type", "application/json")
          res.end(JSON.stringify({ ...readStore(), remap: {} }))
          return
        }
        if (req.method !== "POST") {
          res.statusCode = 405
          res.end()
          return
        }
        const chunks = []
        req.on("data", (chunk) => chunks.push(chunk))
        req.on("end", () => {
          let body = {}
          try {
            body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}")
          } catch {
            body = {}
          }
          const merged = mergeStore(readStore(), body)
          writeStore({
            accounts: merged.accounts,
            answers: merged.answers,
            streaks: merged.streaks,
            threads: merged.threads,
            trials: merged.trials,
            deleted: merged.deleted,
          })
          res.setHeader("content-type", "application/json")
          res.end(JSON.stringify(merged))
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), siraStore()],
  server: { port: 5173, strictPort: true },
})
