import { card, mc, numeric, slot } from "./util.js"

export function seq(count, maker) {
  return Array.from({ length: count }, (_, day) => maker(day))
}

export function lesson(title, teach, watch, example, questions) {
  return card(title, [teach, watch], example, questions)
}

export function ask(stem, correct, a, b, c, why, day) {
  return mc(stem, String(correct), [String(a), String(b), String(c)], why, slot(day))
}

export function num(stem, value, wrongs, why, day, suffix = "") {
  return numeric(stem, value, wrongs.map((item) => item - value), why, day, suffix)
}

export { mc, numeric, slot }
