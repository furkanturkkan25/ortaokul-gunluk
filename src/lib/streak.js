import { SCHOOL_DAYS, formatISO, schoolDay } from "./calendar.js"

const KEY = "sira-streak"

function read(accountId) {
  if (!accountId) return { last: "", streak: 0 }
  try {
    const parsed = JSON.parse(localStorage.getItem(`${KEY}-${accountId}`) || "{}")
    const streak = Number.isInteger(parsed.streak) && parsed.streak > 0 ? parsed.streak : 0
    const last = typeof parsed.last === "string" ? parsed.last : ""
    const setAt = Number(parsed.setAt) || 0
    return { last, streak, setAt }
  } catch {
    return { last: "", streak: 0, setAt: 0 }
  }
}

function write(accountId, state) {
  localStorage.setItem(`${KEY}-${accountId}`, JSON.stringify(state))
  import("./sync.js").then((mod) => mod.schedulePush()).catch(() => {})
}

function dueIndex(today) {
  let index = -1
  for (let i = 0; i < SCHOOL_DAYS.length; i += 1) {
    if (SCHOOL_DAYS[i].iso <= today) index = i
    else break
  }
  return index
}

export function liveStreak(accountId, today = formatISO(new Date())) {
  const stored = read(accountId)
  if ((!stored.streak && !stored.setAt) || !stored.last) return 0
  const index = dueIndex(today)
  if (index < 0) return 0
  const due = SCHOOL_DAYS[index].iso
  if (stored.last === due) return stored.streak
  const todayIsSchool = due === today
  if (todayIsSchool && index > 0 && stored.last === SCHOOL_DAYS[index - 1].iso) return stored.streak
  return 0
}

export function recordVisit(accountId, today = formatISO(new Date())) {
  if (!accountId || !schoolDay(today)) return liveStreak(accountId, today)
  const stored = read(accountId)
  if (stored.last === today && (stored.streak > 0 || stored.setAt)) return stored.streak
  const index = dueIndex(today)
  const prev = index > 0 ? SCHOOL_DAYS[index - 1].iso : ""
  const streak = stored.last === prev && stored.streak > 0 ? stored.streak + 1 : 1
  write(accountId, { last: today, streak, setAt: stored.setAt || 0 })
  return streak
}
