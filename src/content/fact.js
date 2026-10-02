import { ask, lesson } from "./make.js"

export function fact(day, item) {
  const [title, teach, watch, example, question, correct, w1, w2, w3, why] = item
  const reason = why
  return lesson(title, teach, watch, example, [
    ask(question, correct, w1, w2, w3, reason, day),
    ask(`«${title}» konusunda hangisi yanlıştır?`, w1, correct, w2, w3, `«${w1}» yanlıştır. Doğru yargı: ${correct}. ${reason}`, day + 1),
    ask(`«${title}» örneğine göre hangisi doğrudur?`, correct, w1, w2, w3, reason, day + 2),
  ])
}

export function pack(n, items, label) {
  if (items.length < n) throw new Error(`${label} için ${items.length} anlatım var, ${n} gün gerek`)
  return items.slice(0, n).map((item, day) => fact(day, item))
}
