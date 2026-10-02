import { grade5 } from "../data/grade5.js"
import { grade6 } from "../data/grade6.js"
import { grade7 } from "../data/grade7.js"
import { grade8 } from "../data/grade8.js"
import { formatISO } from "./calendar.js"
import { lessonOn } from "./select.js"

const TRACKS = { 5: grade5, 6: grade6, 7: grade7, 8: grade8 }
const ANSWER_KEY = "sira-answers"

export const POINT = 10

export function readAnswers(accountId) {
  try {
    const parsed = JSON.parse(localStorage.getItem(`${ANSWER_KEY}-${accountId}`) || "{}")
    return parsed && typeof parsed === "object" ? parsed : {}
  } catch {
    return {}
  }
}

export function tally(answers, today = formatISO(new Date())) {
  const groups = new Map()
  for (const [key, picked] of Object.entries(answers || {})) {
    if (!Number.isInteger(picked)) continue
    const parts = key.split("|")
    if (parts.length < 4) continue
    const [date, grade, subject] = parts
    const id = parts.slice(3).join("|")
    const bucket = `${date}|${grade}|${subject}`
    const list = groups.get(bucket) || []
    list.push({ id, picked })
    groups.set(bucket, list)
  }

  let correct = 0
  let todayCorrect = 0
  for (const [bucket, picks] of groups) {
    const [date, grade, subject] = bucket.split("|")
    const track = TRACKS[grade]?.[subject]
    if (!track) continue
    const lesson = lessonOn(track, date, { grade: Number(grade), subject })
    if (!lesson) continue
    for (const pick of picks) {
      const question = lesson.questions.find((item) => item.id === pick.id)
      if (!question || question.answer !== pick.picked) continue
      correct += 1
      if (date === today) todayCorrect += 1
    }
  }

  return { total: correct * POINT, today: todayCorrect * POINT }
}
