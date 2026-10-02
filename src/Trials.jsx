import { useState } from "react"
import { POINT } from "./lib/points.js"
import {
  attemptKey,
  currentWeek,
  gradeAttempt,
  readTrials,
  weekLabel,
  weekTest,
  writeTrials,
} from "./lib/trial.js"

const LETTERS = ["A", "B", "C", "D"]

export function Trials({ account, tracks, onScored }) {
  const grade = account.grade
  const subjects = Object.keys(tracks)
  const openWeek = currentWeek()
  const [pick, setPick] = useState(null)
  const saved = readTrials(account.id)

  if (pick) {
    const track = tracks[pick.subject]
    const test = weekTest(track, pick.week, { grade, subject: pick.subject })
    const attempt = saved[attemptKey(grade, pick.week, pick.subject)] || { picks: {} }
    return (
      <TrialRun
        test={test}
        subject={pick.subject}
        attempt={attempt}
        onBack={() => setPick(null)}
        storageKey={attemptKey(grade, pick.week, pick.subject)}
        accountId={account.id}
        onSave={(next) => {
          const all = readTrials(account.id)
          const key = attemptKey(grade, pick.week, pick.subject)
          all[key] = next
          writeTrials(account.id, all)
          onScored()
        }}
      />
    )
  }

  const weeks = []
  for (let week = openWeek; week >= 1; week -= 1) weeks.push(week)

  return (
    <section className="trials">
      <h1>Denemeler</h1>
      <p className="fine">Her ders, o haftanın konularından 12 soru. Doğru cevap 10 puan.</p>
      {weeks.map((week) => {
        const label = weekLabel(week)
        return (
          <div key={week} className="trial-week">
            <h2>{label.title}</h2>
            <p className="fine">{label.span}</p>
            <div className="trial-list">
              {subjects.map((subject) => {
                const test = weekTest(tracks[subject], week, { grade, subject })
                const attempt = saved[attemptKey(grade, week, subject)]
                const result = attempt?.finished ? gradeAttempt(test, attempt) : null
                return (
                  <button
                    key={subject}
                    type="button"
                    className="trial-row"
                    onClick={() => setPick({ week, subject })}
                  >
                    <strong>{subject}</strong>
                    <span>{test.topics.join(", ")}</span>
                    <em>{result ? `${result.correct}/${result.total} · ${result.points} puan` : `${test.questions.length} soru`}</em>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}

function TrialRun({ test, subject, attempt, storageKey, accountId, onBack, onSave }) {
  const finished = Boolean(attempt.finished)
  const picks = attempt.picks || {}
  const answered = test.questions.filter((question) => Number.isInteger(picks[question.id])).length
  const result = finished ? gradeAttempt(test, attempt) : null

  function fresh() {
    return readTrials(accountId)[storageKey] || { picks: {} }
  }

  function choose(question, option) {
    const current = fresh()
    if (current.finished || Number.isInteger(current.picks?.[question.id])) return
    onSave({ ...current, picks: { ...(current.picks || {}), [question.id]: option } })
  }

  function finish() {
    const current = fresh()
    const done = test.questions.every((question) => Number.isInteger(current.picks?.[question.id]))
    if (!done || current.finished) return
    onSave({ picks: current.picks, finished: Date.now() })
  }

  return (
    <section className="trials">
      <button className="press" type="button" onClick={onBack}>Haftalara dön</button>
      <p className="kicker">{subject}</p>
      <h1>{weekLabel(test.week).title}</h1>
      <p className="fine">{test.topics.join(" · ")} · {test.questions.length} soru</p>
      {result && (
        <div className="result" role="status">
          <p>{result.correct} doğru. {result.points} puan.</p>
        </div>
      )}
      {result && (
        <div className="trial-misses">
          <h2>Yanlışların konuları</h2>
          {result.wrongTopics.length === 0 ? (
            <p>Hepsi doğru. Eksik konu yok.</p>
          ) : result.wrongTopics.map((item) => (
            <article key={`${item.topic}|${item.section}`}>
              <h3>{item.topic} · {item.section}</h3>
              {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {item.example && <p className="example"><span>Örnek. </span>{item.example}</p>}
            </article>
          ))}
        </div>
      )}
      <ol className="questions">
        {test.questions.map((question, index) => {
          const picked = picks[question.id]
          return (
            <li key={question.id}>
              <div className="q-head">
                <span className="q-num">{index + 1}</span>
                <p>{question.q}</p>
              </div>
              {finished && <p className="fine">{question.topic} · {question.section}</p>}
              <div className="options">
                {question.options.map((option, optionIndex) => {
                  const state = !finished || picked === undefined
                    ? picked === optionIndex ? "is-on" : ""
                    : optionIndex === question.answer
                      ? "is-right"
                      : optionIndex === picked
                        ? "is-wrong"
                        : ""
                  return (
                    <button
                      key={`${question.id}-${optionIndex}`}
                      type="button"
                      className={state}
                      disabled={finished || picked !== undefined}
                      onClick={() => choose(question, optionIndex)}
                    >
                      <span className="letter">{LETTERS[optionIndex]}</span>
                      <span className="opt-text">{option}</span>
                      {finished && optionIndex === question.answer && <span className="tag">Doğru</span>}
                      {finished && optionIndex === picked && optionIndex !== question.answer && <span className="tag">Yanlış</span>}
                    </button>
                  )
                })}
              </div>
              {finished && picked !== undefined && (
                <p className={picked === question.answer ? "why is-right" : "why is-wrong"}>{question.why}</p>
              )}
            </li>
          )
        })}
      </ol>
      {!finished && (
        <button className="next" type="button" disabled={answered !== test.questions.length} onClick={finish}>
          {answered === test.questions.length ? "Testi bitir" : `${answered}/${test.questions.length} işaretlendi`}
        </button>
      )}
      {finished && <p className="fine">Her doğru {POINT} puan. Bu deneme bir kez sayılır.</p>}
    </section>
  )
}
