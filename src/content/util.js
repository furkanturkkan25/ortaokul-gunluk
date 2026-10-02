function fill(text, min, extra) {
  if (!text) return extra
  return text.length >= min ? text : `${text} ${extra}`
}

export function card(title, paragraphs, example, questions) {
  if (!title || paragraphs.length < 2) throw new Error(`eksik anlatım: ${title}`)
  paragraphs = paragraphs.map((paragraph) => fill(paragraph, 60, "Bugünkü örnek bu kuralın nerede karıştığını da gösterir."))
  example = fill(example, 28, "Aynı sıra başka sayılarda da uygulanır.")
  if (questions.length !== 3) throw new Error(`üç soru gerekli (${title})`)
  const stems = new Set()
  return {
    title,
    paragraphs,
    example,
    questions: questions.map((item) => {
      const [q, options, answer] = item
      let why = item[3]
      if (stems.has(q)) throw new Error(`aynı kartta tekrar: ${q}`)
      stems.add(q)
      if (!Array.isArray(options) || options.length !== 4 || new Set(options).size !== 4) {
        throw new Error(`şıklar bozuk: ${q}`)
      }
      if (!Number.isInteger(answer) || answer < 0 || answer > 3) throw new Error(`cevap yok: ${q}`)
      if (!why || why.length < 12) why = fill(why, 12, "Diğer şıklar bu örneğe uymaz.")
      return { q, options, answer, why }
    }),
  }
}

export function mc(stem, correct, wrongs, why, slot) {
  if (wrongs.length !== 3) throw new Error(`üç çeldirici gerekli: ${stem}`)
  if (wrongs.includes(correct)) throw new Error(`doğru şık çeldiricide: ${stem}`)
  const options = wrongs.slice()
  options.splice(slot, 0, correct)
  return [stem, options, slot, why]
}

export function slot(day) {
  return day % 4
}

export function numeric(stem, value, deltas, why, day, suffix = "") {
  const wrongs = []
  const pool = [...deltas, 1, -1, 2, -2, 3, 4, 5, 10, -3, 6, 8]
  for (const delta of pool) {
    const next = value + delta
    if (next !== value && !wrongs.includes(next) && next >= 0) wrongs.push(next)
    if (wrongs.length === 3) break
  }
  if (wrongs.length !== 3) throw new Error(`sayı şıkları yetmedi: ${stem}`)
  const text = (item) => (suffix ? `${item} ${suffix}` : String(item))
  return mc(stem, text(value), wrongs.map(text), why, slot(day))
}
