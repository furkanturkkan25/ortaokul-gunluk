import fs from "node:fs"
import http from "node:http"
import path from "node:path"
import { mergeStore, readStore, writeStore } from "./server/store.mjs"

const PORT = Number(process.env.PORT) || 8080
const DIST = path.resolve("dist")
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
}

function send(res, status, body, type) {
  res.writeHead(status, { "content-type": type })
  res.end(body)
}

function handleApi(req, res) {
  if (req.method === "GET") {
    send(res, 200, JSON.stringify({ ...readStore(), remap: {} }), "application/json")
    return
  }
  if (req.method !== "POST") {
    send(res, 405, "", "text/plain")
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
    send(res, 200, JSON.stringify(merged), "application/json")
  })
}

function handleFile(req, res) {
  const url = new URL(req.url, "http://localhost")
  const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "")
  let file = path.resolve(DIST, rel)
  if (!file.startsWith(DIST)) {
    send(res, 403, "no", "text/plain")
    return
  }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(DIST, "index.html")
  const ext = path.extname(file)
  send(res, 200, fs.readFileSync(file), TYPES[ext] || "application/octet-stream")
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost")
  if (url.pathname === "/api/sira") {
    handleApi(req, res)
    return
  }
  handleFile(req, res)
})

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Sıra ${PORT} portunda`)
})
