import { SCHOOL_DAYS } from "./calendar.js"
import { lessonsForUnit } from "../content/lessonFor.js"

const cache = new Map()

function stemId(text) {
  let hash = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

function hintFrom(text) {
  const nums = text.match(/\d+(?:[.,/]\d+)?/g)
  if (nums && nums.length) return nums.slice(0, 3).join(" ve ")
  return text.replace(/\?$/, "").split(/\s+/).slice(0, 6).join(" ")
}

function stampTrack(lessonsByTopic, topics) {
  const buckets = new Map()
  for (const topic of topics) {
    for (const lesson of lessonsByTopic.get(topic.title)) {
      for (const question of lesson.questions) {
        const list = buckets.get(question.q) || []
        list.push(question)
        buckets.set(question.q, list)
      }
    }
  }
  for (const [stem, questions] of buckets) {
    if (questions.length < 2) continue
    const used = new Set()
    for (const question of questions) {
      const lesson = question.lesson
      let next = `${lesson.title}. ${stem}`
      if (used.has(next) || next === stem) {
        next = `${lesson.title} (${hintFrom(lesson.questions[0].q)}). ${stem}`
      }
      used.add(next)
      question.q = next
    }
  }
}

function dailyLessons(grade, subject, topic, track) {
  const key = `${grade}|${subject}|${topic.title}`
  if (!cache.has(key)) {
    const lessonsByTopic = new Map()
    for (const item of track) {
      const dayCount = SCHOOL_DAYS.filter((day) => item.weeks.includes(day.week)).length
      const lessons = lessonsForUnit(grade, subject, item.title, dayCount).map((lesson) => ({
        ...lesson,
        questions: lesson.questions.map((question) => ({ ...question, lesson: null })),
      }))
      for (const lesson of lessons) {
        for (const question of lesson.questions) question.lesson = lesson
      }
      lessonsByTopic.set(item.title, lessons)
    }
    stampTrack(lessonsByTopic, track)
    for (const lessons of lessonsByTopic.values()) {
      for (const lesson of lessons) {
        for (const question of lesson.questions) delete question.lesson
      }
    }
    for (const item of track) cache.set(`${grade}|${subject}|${item.title}`, lessonsByTopic.get(item.title))
  }
  return cache.get(key)
}

export function lessonOn(track, iso, meta) {
  const day = SCHOOL_DAYS.find((item) => item.iso === iso)
  if (!day) return null
  const topic = track.find((item) => item.weeks.includes(day.week))
  if (!topic) return null

  const topicDays = SCHOOL_DAYS.filter((item) => topic.weeks.includes(item.week))
  const index = topicDays.findIndex((item) => item.iso === iso)
  const lesson = dailyLessons(meta.grade, meta.subject, topic, track)[index]

  return {
    topic,
    section: {
      title: lesson.title,
      paragraphs: lesson.paragraphs,
      example: lesson.example,
    },
    questions: lesson.questions.map((question, questionIndex) => ({
      ...question,
      id: `${index}-${questionIndex}-${stemId(question.q)}`,
    })),
    dayIndex: index + 1,
    dayCount: topicDays.length,
    week: day.week,
  }
}
