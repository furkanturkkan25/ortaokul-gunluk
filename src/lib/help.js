import { schedulePush } from "./sync.js"

const KEY = "sira-threads"

const SEEN_KEY = "sira-mail-seen"

export function mailSeen(accountId) {
  const value = Number(localStorage.getItem(`${SEEN_KEY}-${accountId}`))
  return Number.isFinite(value) ? value : 0
}

export function markMailSeen(accountId) {
  localStorage.setItem(`${SEEN_KEY}-${accountId}`, String(Date.now()))
}

export function incomingNews(accountId) {
  const seen = mailSeen(accountId)
  const news = []
  for (const thread of readThreads()) {
    if (thread.fromId !== accountId && thread.toId !== accountId) continue
    if (thread.toId === accountId && thread.createdAt > seen) {
      news.push({
        id: `thread-${thread.id}`,
        fromId: thread.fromId,
        at: thread.createdAt,
        text: thread.kind === "soru" ? thread.question?.q : thread.topic,
      })
    }
    for (const message of thread.messages || []) {
      if (message.fromId !== accountId && message.at > seen) {
        news.push({ id: message.id, fromId: message.fromId, at: message.at, text: message.text })
      }
    }
  }
  return news.sort((left, right) => right.at - left.at)
}

export function readThreads() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]")
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeThreads(threads) {
  localStorage.setItem(KEY, JSON.stringify(threads))
  window.dispatchEvent(new Event("sira-sync"))
  schedulePush()
}

function pairKey(left, right) {
  return [left, right].sort().join("|")
}

export function sendHelp({ fromId, toId, item }) {
  const threads = readThreads()
  const stamp = item.kind === "soru" ? item.question?.q : item.topic
  const found = threads.find((thread) => (
    pairKey(thread.fromId, thread.toId) === pairKey(fromId, toId)
    && thread.kind === item.kind
    && thread.date === item.date
    && thread.subject === item.subject
    && (thread.kind === "soru" ? thread.question?.q === stamp : thread.topic === stamp)
  ))
  if (found) return found
  const thread = {
    id: crypto.randomUUID(),
    fromId,
    toId,
    kind: item.kind,
    subject: item.subject,
    grade: item.grade,
    date: item.date,
    topic: item.topic,
    section: item.section,
    paragraphs: item.paragraphs || [],
    example: item.example || "",
    question: item.question || null,
    messages: [],
    createdAt: Date.now(),
  }
  writeThreads([thread, ...threads])
  return thread
}

export function postMessage(threadId, fromId, raw) {
  const text = String(raw || "").trim()
  if (!text) return { error: "Bir şey yaz." }
  if (text.length > 400) return { error: "Mesaj en fazla 400 karakter olsun." }
  const threads = readThreads()
  const thread = threads.find((item) => item.id === threadId)
  if (!thread) return { error: "Bu konuşma yok." }
  if (thread.fromId !== fromId && thread.toId !== fromId) return { error: "Bu konuşma senin değil." }
  thread.messages = [...(thread.messages || []), {
    id: crypto.randomUUID(),
    fromId,
    text,
    at: Date.now(),
  }]
  writeThreads(threads)
  return { thread }
}
