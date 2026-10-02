const ACCOUNTS_KEY = "sira-accounts"
const SESSION_KEY = "sira-session"
const ANSWER_KEY = "sira-answers"
const STREAK_KEY = "sira-streak"
const THREAD_KEY = "sira-threads"
const TRIAL_KEY = "sira-trials"

let pushing = false
let timer = 0

function snapshot() {
  const answers = {}
  const streaks = {}
  const trials = {}
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i)
    try {
      if (key.startsWith(`${ANSWER_KEY}-`)) answers[key.slice(ANSWER_KEY.length + 1)] = JSON.parse(localStorage.getItem(key) || "{}")
      if (key.startsWith(`${STREAK_KEY}-`)) streaks[key.slice(STREAK_KEY.length + 1)] = JSON.parse(localStorage.getItem(key) || "{}")
      if (key.startsWith(`${TRIAL_KEY}-`)) trials[key.slice(TRIAL_KEY.length + 1)] = JSON.parse(localStorage.getItem(key) || "{}")
    } catch {
      continue
    }
  }
  return {
    accounts: JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]"),
    answers,
    streaks,
    trials,
    threads: JSON.parse(localStorage.getItem(THREAD_KEY) || "[]"),
  }
}

function apply(data) {
  const remap = data.remap || {}
  const localAccounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]")
  const localById = new Map(localAccounts.map((account) => [account.id, account]))
  let newerProfile = false
  const accounts = (data.accounts || []).map((account) => {
    const mine = localById.get(account.id)
    if (!mine || Number(mine.profileRev) <= Number(account.profileRev)) return account
    newerProfile = true
    return {
      ...account,
      displayName: mine.displayName,
      avatar: mine.avatar,
      profileRev: mine.profileRev,
      avatarSet: mine.avatarSet === true ? true : account.avatarSet,
    }
  })
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
  for (const [id, value] of Object.entries(data.answers || {})) {
    localStorage.setItem(`${ANSWER_KEY}-${id}`, JSON.stringify(value))
  }
  for (const [id, value] of Object.entries(data.streaks || {})) {
    localStorage.setItem(`${STREAK_KEY}-${id}`, JSON.stringify(value))
  }
  for (const [id, value] of Object.entries(data.trials || {})) {
    localStorage.setItem(`${TRIAL_KEY}-${id}`, JSON.stringify(value))
  }
  if (Array.isArray(data.threads)) localStorage.setItem(THREAD_KEY, JSON.stringify(data.threads))
  window.dispatchEvent(new Event("sira-sync"))
  if (newerProfile) schedulePush()
  const session = localStorage.getItem(SESSION_KEY)
  if (session && remap[session]) localStorage.setItem(SESSION_KEY, remap[session])
  for (const [from, to] of Object.entries(remap)) {
    if (!localStorage.getItem(`${ANSWER_KEY}-${to}`) && localStorage.getItem(`${ANSWER_KEY}-${from}`)) {
      localStorage.setItem(`${ANSWER_KEY}-${to}`, localStorage.getItem(`${ANSWER_KEY}-${from}`))
    }
  }
}

export function schedulePush() {
  window.clearTimeout(timer)
  timer = window.setTimeout(() => {
    push().catch(() => {})
  }, 250)
}

export async function push() {
  if (pushing) {
    schedulePush()
    return null
  }
  pushing = true
  try {
    const response = await fetch("/api/sira", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(snapshot()),
    })
    if (!response.ok) return null
    const data = await response.json()
    apply(data)
    return data
  } finally {
    pushing = false
  }
}
