import { DurableObject } from "cloudflare:workers"
import { mergeStore } from "./server/merge.mjs"

const EMPTY = { accounts: [], answers: {}, streaks: {}, threads: [], trials: {}, deleted: [] }

function normalize(parsed) {
  if (!parsed || typeof parsed !== "object") return { ...EMPTY, threads: [], accounts: [] }
  return {
    accounts: Array.isArray(parsed.accounts) ? parsed.accounts : [],
    answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {},
    streaks: parsed.streaks && typeof parsed.streaks === "object" ? parsed.streaks : {},
    threads: Array.isArray(parsed.threads) ? parsed.threads : [],
    trials: parsed.trials && typeof parsed.trials === "object" ? parsed.trials : {},
    deleted: Array.isArray(parsed.deleted) ? parsed.deleted.filter((id) => typeof id === "string" && id) : [],
  }
}

function saved(merged) {
  return {
    accounts: merged.accounts,
    answers: merged.answers,
    streaks: merged.streaks,
    threads: merged.threads,
    trials: merged.trials,
    deleted: Array.isArray(merged.deleted) ? merged.deleted : [],
  }
}

export class SiraStore extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env)
    this.ready = ctx.blockConcurrencyWhile(() => this.seed())
  }

  async seed() {
    const existing = await this.ctx.storage.get("store")
    if (existing) return
    const parsed = await this.env.SIRA.get("store", "json")
    if (parsed) await this.ctx.storage.put("store", normalize(parsed))
  }

  async load() {
    await this.ready
    return normalize(await this.ctx.storage.get("store"))
  }

  async fetch(request) {
    const url = new URL(request.url)
    if (url.pathname !== "/api/sira") return new Response("", { status: 404 })
    if (request.method === "GET") {
      const store = await this.load()
      return Response.json({ ...store, remap: {} })
    }
    if (request.method !== "POST") return new Response("", { status: 405 })
    let body = {}
    try {
      body = await request.json()
    } catch {
      body = {}
    }
    const merged = mergeStore(await this.load(), body)
    await this.ctx.storage.put("store", saved(merged))
    return Response.json(merged)
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.pathname === "/api/sira") {
      const id = env.SIRA_ROOM.idFromName("sira")
      return env.SIRA_ROOM.get(id).fetch(request)
    }
    return env.ASSETS.fetch(request)
  },
}
