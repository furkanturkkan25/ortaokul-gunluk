import { mathLesson } from "./math.js"
import { fenLesson } from "./fen.js"
import { turkceLesson } from "./turkce.js"
import { sosyalLesson } from "./sosyal.js"

const builders = {
  Matematik: mathLesson,
  Fen: fenLesson,
  Türkçe: turkceLesson,
  Sosyal: sosyalLesson,
  İnkılap: sosyalLesson,
}

export function lessonsForUnit(grade, subject, title, dayCount) {
  const build = builders[subject]
  if (!build) throw new Error(`ders yok: ${subject}`)
  const lessons = build(grade, title, dayCount)
  if (!lessons || lessons.length !== dayCount) {
    throw new Error(`${grade}. sınıf ${subject} / ${title}: ${lessons?.length ?? 0} gün üretildi, ${dayCount} gerekli`)
  }
  return lessons
}
