export function unit(title, weeks, parts) {
  return {
    title,
    weeks,
    sections: parts.map(({ title: sectionTitle, paragraphs, example }) => ({
      title: sectionTitle,
      paragraphs,
      example,
    })),
    questions: parts.flatMap((part, section) =>
      part.questions.map(([q, options, answer, why]) => ({
        q,
        options,
        answer,
        why,
        section,
      })),
    ),
  }
}
