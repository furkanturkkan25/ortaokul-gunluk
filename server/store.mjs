import fs from "node:fs"
import path from "node:path"
import { mergeStore } from "./merge.mjs"

export { mergeStore }

function storeFile() {
  const dir = process.env.DATA_DIR || path.resolve("data")
  return path.join(dir, "sira.json")
}

export function readStore() {
  try {
    const parsed = JSON.parse(fs.readFileSync(storeFile(), "utf8"))
    return {
      accounts: Array.isArray(parsed.accounts) ? parsed.accounts : [],
      answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
      streaks: parsed.streaks && typeof parsed.streaks === "object" ? parsed.streaks : {},
      threads: Array.isArray(parsed.threads) ? parsed.threads : [],
      trials: parsed.trials && typeof parsed.trials === "object" ? parsed.trials : {},
      deleted: Array.isArray(parsed.deleted) ? parsed.deleted.filter((id) => typeof id === "string" && id) : [],
    }
  } catch {
    return { accounts: [], answers: {}, streaks: {}, threads: [], trials: {}, deleted: [] }
  }
}

export function writeStore(store) {
  const file = storeFile()
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, JSON.stringify(store))
}
