import { SCHOOL_DAYS, WEEK_RANGES, schoolDay, nearestSchoolDay } from "./calendar.js"
import { lessonOn } from "./select.js"
import { POINT } from "./points.js"
import { schedulePush } from "./sync.js"

const KEY = "sira-trials"

export function readTrials(accountId) {
  try {
    const parsed = JSON.parse(localStorage.getItem(`${KEY}-${accountId}`) || "{}")
    return parsed && typeof parsed === "object" ? parsed : {}
  } catch {
    return {}
  }
}

export function writeTrials(accountId, trials) {
  localStorage.setItem(`${KEY}-${accountId}`, JSON.stringify(trials))
  schedulePush()
}

export function attemptKey(grade, week, subject) {
  return `${grade}|${week}|${subject}`
}

export function currentWeek(today = nearestSchoolDay(new Date())) {
  return schoolDay(today)?.week || 1
}

export function weekLabel(week) {
  const range = WEEK_RANGES[week - 1]
  if (!range) return `${week}. hafta`
  const start = range[0].slice(8).replace(/^0/, "")
  const end = range[1].slice(8).replace(/^0/, "")
  const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
  const month = months[Number(range[0].slice(5, 7)) - 1]
  const endMonth = months[Number(range[1].slice(5, 7)) - 1]
  const span = month === endMonth ? `${start}–${end} ${month}` : `${start} ${month} – ${end} ${endMonth}`
  return { title: `${week}. hafta`, span }
}

function stemId(text) {
  let hash = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

function place(options, correct, slot) {
  const rest = options.filter((item) => item !== correct)
  rest.splice(slot % 4, 0, correct)
  return { options: rest, answer: slot % 4 }
}

function verbalSubject(subject) {
  return subject === "Türkçe" || subject === "Sosyal" || subject === "İnkılap"
}

function passageOf(lesson, subject, right) {
  const paragraphs = lesson.section.paragraphs || []
  const verbal = verbalSubject(subject)
  const source = verbal
    ? `${paragraphs[0] || ""} ${paragraphs[1] || ""}`.trim()
    : subject === "Matematik"
      ? lesson.section.example
      : paragraphs[0] || lesson.section.example
  const bare = String(right).replace(/[«»]/g, "").slice(0, 28).trim()
  if (bare.length < 8 || !source.includes(bare)) return source
  const kept = source
    .split(/(?<=\.)\s+/)
    .filter((sentence) => !sentence.includes(bare))
  return kept.join(" ") || source
}

function rightLine(question) {
  if (/^(Yanlış|Diğer şık)/.test(question.why)) return question.options[question.answer]
  return question.why
}

function lgsItem(lesson, question, subject, salt) {
  const verbal = verbalSubject(subject)
  const wrongs = question.options.filter((_, index) => index !== question.answer)
  const shared = {
    date: lesson.date,
    topic: lesson.topic.title,
    section: lesson.section.title,
    paragraphs: lesson.section.paragraphs,
    example: lesson.section.example,
  }
  const negative = /hangisi yanlıştır|hangi özet reddedil|hangi bilgi yoktur|uymayan başlık|kaçındığı tutum|anlamsızdır|çelişen yargı/.test(question.q)
  const asks = negative
    ? [
      verbal
        ? "Bu metne göre aşağıdakilerden hangisi söylenemez?"
        : "Buna göre aşağıdakilerden hangisi söylenemez?",
    ]
    : verbal
      ? [
        "Bu metinde asıl anlatılmak istenen aşağıdakilerden hangisidir?",
        "Bu metne göre aşağıdakilerden hangisine ulaşılır?",
        "Bu parçadan çıkarılabilecek yargı aşağıdakilerden hangisidir?",
      ]
      : [
        "Buna göre aşağıdakilerden hangisi kesinlikle doğrudur?",
        "Buna göre aşağıdaki yargılardan hangisine ulaşılır?",
        "Buna göre bu durumla ilgili aşağıdakilerden hangisi söylenebilir?",
      ]
  const right = negative ? question.options[question.answer] : rightLine(question)
  const passage = passageOf(lesson, subject, right)
  const stem = `${passage} ${asks[salt % asks.length]}`
  const others = wrongs.slice(0, 3)
  const laid = place([right, ...others], right, salt)
  return {
    ...shared,
    id: `${lesson.date}|deneme-${stemId(stem + right)}`,
    q: stem,
    options: laid.options,
    answer: laid.answer,
    why: question.why,
  }
}

export function weekTest(track, week, meta) {
  const days = SCHOOL_DAYS.filter((day) => day.week === week)
  const cards = []
  const topics = []
  for (const day of days) {
    const lesson = lessonOn(track, day.iso, meta)
    if (!lesson) continue
    if (!topics.includes(lesson.topic.title)) topics.push(lesson.topic.title)
    cards.push({ ...lesson, date: day.iso })
  }
  const lessonStems = new Set(cards.flatMap((lesson) => lesson.questions.map((question) => question.q)))
  const pools = []
  const seenStems = new Set()
  cards.forEach((lesson, dayIndex) => {
    const made = []
    lesson.questions.forEach((question, index) => {
      const item = lgsItem(lesson, question, meta.subject, dayIndex * 3 + index)
      if (lessonStems.has(item.q) || seenStems.has(item.q)) return
      if (new Set(item.options).size !== 4) return
      seenStems.add(item.q)
      made.push(item)
    })
    pools.push(made)
  })
  const questions = []
  const queues = pools.map((list) => [...list])
  while (questions.length < 12 && queues.some((queue) => queue.length)) {
    for (const queue of queues) {
      if (questions.length >= 12) break
      const question = queue.shift()
      if (question) questions.push(question)
    }
  }
  return { week, topics, questions }
}

export function gradeAttempt(test, attempt) {
  const picks = attempt?.picks || {}
  let correct = 0
  const wrongTopics = []
  const seen = new Set()
  for (const question of test.questions) {
    const picked = picks[question.id]
    if (picked === question.answer) {
      correct += 1
      continue
    }
    const stamp = `${question.topic}|${question.section}`
    if (seen.has(stamp)) continue
    seen.add(stamp)
    wrongTopics.push({
      topic: question.topic,
      section: question.section,
      paragraphs: question.paragraphs,
      example: question.example,
    })
  }
  return { correct, total: test.questions.length, points: correct * POINT, wrongTopics }
}

export function scoreTrials(accountId, grade, tracks) {
  const saved = readTrials(accountId)
  let points = 0
  for (const [key, attempt] of Object.entries(saved)) {
    if (!attempt?.finished) continue
    const [savedGrade, week, subject] = key.split("|")
    if (Number(savedGrade) !== grade) continue
    const track = tracks[subject]
    if (!track) continue
    const test = weekTest(track, Number(week), { grade, subject })
    points += gradeAttempt(test, attempt).points
  }
  return points
}
