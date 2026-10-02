import { useEffect, useMemo, useState } from "react"
import { grade5 } from "./data/grade5.js"
import { grade6 } from "./data/grade6.js"
import { grade7 } from "./data/grade7.js"
import { grade8 } from "./data/grade8.js"
import {
  describeOffDay,
  formatISO,
  formatLong,
  nearestSchoolDay,
  schoolDay,
  shiftSchoolDay,
} from "./lib/calendar.js"
import { createAccount, currentAccount, loginAccount, logoutAccount, socialBoard } from "./lib/accounts.js"
import { lessonOn } from "./lib/select.js"
import { POINT, tally } from "./lib/points.js"
import { scoreTrials } from "./lib/trial.js"
import { Trials } from "./Trials.jsx"
import { liveStreak, recordVisit } from "./lib/streak.js"
import { Avatar, ProfileDesk } from "./Profile.jsx"
import { AskFriend, MailBox } from "./Help.jsx"
import { incomingNews, markMailSeen } from "./lib/help.js"
import { push, schedulePush } from "./lib/sync.js"

const TRACKS = { 5: grade5, 6: grade6, 7: grade7, 8: grade8 }
const LETTERS = ["A", "B", "C", "D"]
const SUBJECT_KEY = "sira-subject"
const ANSWER_KEY = "sira-answers"

function loadAnswers(accountId) {
  try {
    return JSON.parse(localStorage.getItem(`${ANSWER_KEY}-${accountId}`) || "{}")
  } catch {
    return {}
  }
}

export default function App() {
  const today = formatISO(new Date())
  const [account, setAccount] = useState(currentAccount)
  const grade = account?.grade ?? null
  const [subject, setSubject] = useState(() => {
    const saved = currentAccount()
    if (!saved) return "Matematik"
    return localStorage.getItem(`${SUBJECT_KEY}-${saved.id}`) || "Matematik"
  })
  const [date, setDate] = useState(() => nearestSchoolDay(new Date()))
  const [answers, setAnswers] = useState(() => {
    const saved = currentAccount()
    return saved ? loadAnswers(saved.id) : {}
  })
  const [desk, setDesk] = useState(false)
  const [mail, setMail] = useState(false)
  const [trials, setTrials] = useState(false)
  const [menu, setMenu] = useState(false)
  const [mailTick, setMailTick] = useState(0)
  const [trialTick, setTrialTick] = useState(0)
  const [streak, setStreak] = useState(0)
  const points = useMemo(() => tally(answers), [answers])
  const trialPoints = useMemo(
    () => (account && TRACKS[account.grade] ? scoreTrials(account.id, account.grade, TRACKS[account.grade]) : 0),
    [account, trialTick],
  )

  useEffect(() => {
    let cancel = false
    push().then(() => {
      if (cancel) return
      const saved = currentAccount()
      if (!saved) return
      setAccount(saved)
      setAnswers(loadAnswers(saved.id))
    }).catch(() => {})
    return () => {
      cancel = true
    }
  }, [])

  useEffect(() => {
    if (!account) return undefined
    const refresh = () => {
      setMailTick((value) => value + 1)
      setTrialTick((value) => value + 1)
      const saved = currentAccount()
      if (!saved) return
      setStreak(liveStreak(saved.id))
      setAccount((current) => {
        if (!current || current.id !== saved.id) return current
        if (Number(current.profileRev) > Number(saved.profileRev)) {
          return {
            ...saved,
            displayName: current.displayName,
            avatar: current.avatar,
            profileRev: current.profileRev,
            avatarSet: current.avatarSet === true ? true : saved.avatarSet,
          }
        }
        if (Number(current.pointAdjust) === Number(saved.pointAdjust) && Number(current.passwordRev) === Number(saved.passwordRev) && Number(current.profileRev) === Number(saved.profileRev)) return current
        return saved
      })
    }
    window.addEventListener("sira-sync", refresh)
    const timer = window.setInterval(() => {
      push().catch(() => {})
    }, 1500)
    return () => {
      window.removeEventListener("sira-sync", refresh)
      window.clearInterval(timer)
    }
  }, [account])

  useEffect(() => {
    if (!account) return
    setStreak(recordVisit(account.id))
    if (!account.code) {
      const saved = currentAccount()
      if (saved?.code) setAccount(saved)
    }
  }, [account])

  useEffect(() => {
    if (!account) return
    localStorage.setItem(`${SUBJECT_KEY}-${account.id}`, subject)
  }, [account, subject])

  useEffect(() => {
    if (!account) return
    localStorage.setItem(`${ANSWER_KEY}-${account.id}`, JSON.stringify(answers))
    schedulePush()
  }, [account, answers])

  function enter(next) {
    setAccount(next)
    setDesk(false)
    setTrials(false)
    setMail(false)
    setAnswers(loadAnswers(next.id))
    setSubject(localStorage.getItem(`${SUBJECT_KEY}-${next.id}`) || "Matematik")
  }

  function logout() {
    logoutAccount()
    setDesk(false)
    setTrials(false)
    setMail(false)
    setAccount(null)
  }

  if (!account || !TRACKS[grade]) {
    return (
      <div className="app app-pick">
        <AccountGate onEnter={enter} />
      </div>
    )
  }

  if (account.avatarSet === false) {
    return (
      <div className="app">
        <main>
          <ProfileDesk setup account={account} streak={streak} onAccount={setAccount} onClose={() => {}} />
        </main>
      </div>
    )
  }

  const subjects = Object.keys(TRACKS[grade])
  const activeSubject = subjects.includes(subject) ? subject : subjects[0]
  const lesson = lessonOn(TRACKS[grade][activeSubject], date, { grade, subject: activeSubject })
  const todayIsSchool = Boolean(schoolDay(today))
  const openedFallback = !todayIsSchool && date === nearestSchoolDay(new Date())

  function pickAnswer(question, option) {
    const key = `${date}|${grade}|${activeSubject}|${question.id}`
    setAnswers((current) => (key in current ? current : { ...current, [key]: option }))
  }

  const checked = lesson
    ? lesson.questions.map((question) => {
        const key = `${date}|${grade}|${activeSubject}|${question.id}`
        return { question, picked: answers[key] }
      })
    : []
  const answered = checked.filter((item) => item.picked !== undefined)
  const correctCount = answered.filter((item) => item.picked === item.question.answer).length
  const subjectIndex = subjects.indexOf(activeSubject)
  const nextSubject = subjects[subjectIndex + 1]
  const news = account ? incomingNews(account.id) : []
  const names = new Map((socialBoard(account?.id).friends || []).map((person) => [person.id, person.displayName]))
  void mailTick

  return (
    <div className="app" data-subject={activeSubject}>
    <main>
      <header className="top">
        <button type="button" className="brand" aria-label="Sıra, ana sayfa" onClick={() => { setDesk(false); setMail(false); setTrials(false); setMenu(false) }}>
          <LogoMark />
          Sıra
        </button>
        <div className="who">
          <span className="who-grade">{grade}. sınıf</span>
          <span className="who-streak">seri {streak}</span>
          <span className="who-score">{points.total + streak + trialPoints + (Number(account.pointAdjust) || 0)} puan</span>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menu}
            aria-label="Menü"
            onClick={() => setMenu((open) => !open)}
          >
            <span className="menu-bars" aria-hidden="true"><i /><i /><i /></span>
            {news.length > 0 && <span className="mail-badge">{news.length}</span>}
          </button>
          {menu && (
            <div className="menu-sheet">
              <button
                type="button"
                className="mail-tab"
                aria-pressed={mail}
                onClick={() => {
                  markMailSeen(account.id)
                  setMailTick((value) => value + 1)
                  setDesk(false)
                  setTrials(false)
                  setMail(true)
                  setMenu(false)
                }}
              >
                Mesajlar
                {news.length > 0 && <span className="mail-badge">{news.length}</span>}
              </button>
              <button
                type="button"
                className="trial-tab"
                aria-pressed={trials}
                onClick={() => {
                  setDesk(false)
                  setMail(false)
                  setTrials(true)
                  setMenu(false)
                }}
              >
                Denemeler
              </button>
              <button
                type="button"
                className="who-name"
                aria-pressed={desk}
                onClick={() => {
                  setMail(false)
                  setTrials(false)
                  setDesk(true)
                  setMenu(false)
                }}
              >
                <Avatar avatar={account.avatar} />
                <span>{account.displayName || account.name}</span>
              </button>
              <button type="button" className="exit-tab" onClick={logout}>
                Çıkış
              </button>
            </div>
          )}
        </div>
      </header>

      {!mail && news[0] && (
        <button
          type="button"
          className="mail-note"
          onClick={() => {
            markMailSeen(account.id)
            setMailTick((value) => value + 1)
            setDesk(false)
            setTrials(false)
            setMail(true)
          }}
        >
          <strong>{names.get(news[0].fromId) || "Arkadaş"}</strong>
          <span>{news[0].text}</span>
        </button>
      )}

      {mail && (
        <section className="desk">
          <MailBox account={account} people={[account, ...socialBoard(account.id).friends]} />
        </section>
      )}

      {trials && !desk && !mail && (
        <Trials
          account={account}
          tracks={TRACKS[grade]}
          onScored={() => setTrialTick((value) => value + 1)}
        />
      )}

      {desk && (
        <ProfileDesk account={account} streak={streak} onAccount={setAccount} onClose={() => setDesk(false)} />
      )}

      {!desk && !mail && !trials && <section className="daybar">
        <button
          className="day-nav"
          type="button"
          aria-label="Önceki gün"
          onClick={() => setDate(shiftSchoolDay(date, -1))}
          disabled={!shiftSchoolDay(date, -1)}
        >
          <span aria-hidden="true">←</span>
          Önceki
        </button>
        <div className="day-center">
          <p className="date">{formatLong(date)}</p>
          {openedFallback && (
            <p className="banner">
              Bugün ders yok: {describeOffDay(today)}. Sıradaki ders günü açık.
            </p>
          )}
          {todayIsSchool && date !== today && (
            <button className="today" type="button" onClick={() => setDate(today)}>
              Bugüne dön
            </button>
          )}
        </div>
        <button
          className="day-nav"
          type="button"
          aria-label="Sonraki gün"
          onClick={() => setDate(shiftSchoolDay(date, 1))}
          disabled={!shiftSchoolDay(date, 1)}
        >
          Sonraki
          <span aria-hidden="true">→</span>
        </button>
      </section>}

      {!desk && !mail && !trials && <nav className="subjects" aria-label="Ders">
        {subjects.map((item) => (
          <button
            key={item}
            type="button"
            className={item === activeSubject ? "is-on" : ""}
            aria-pressed={item === activeSubject}
            onClick={() => setSubject(item)}
          >
            {item}
          </button>
        ))}
      </nav>}

      {!desk && !mail && !trials && lesson && (
        <article className="lesson" key={`${date}-${activeSubject}`}>
          <p className="kicker">
            {lesson.week}. hafta · bu konunun {lesson.dayIndex}. günü
          </p>
          <h1>
            <span className="mark">{lesson.topic.title}</span>
          </h1>
          <AskFriend
            me={account.id}
            friends={socialBoard(account.id).friends}
            label="Anlamadım"
            item={{
              kind: "konu",
              subject: activeSubject,
              grade,
              date,
              topic: lesson.topic.title,
              section: lesson.section.title,
              paragraphs: lesson.section.paragraphs,
              example: lesson.section.example,
            }}
          />
          <h2>{lesson.section.title}</h2>
          {lesson.section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {lesson.section.example && (
            <p className="example">
              <span>Örnek. </span>
              {lesson.section.example}
            </p>
          )}

          <div className="round">
            <h3>Soru turu</h3>
            <Pips checked={checked} />
          </div>
          <ol className="questions">
            {checked.map(({ question, picked }, index) => (
              <li key={question.id}>
                <div className="q-head">
                  <span className="q-num">{index + 1}</span>
                  <p>{question.q}</p>
                </div>
                <div className="options">
                  {question.options.map((option, optionIndex) => {
                    const state =
                      picked === undefined
                        ? ""
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
                        disabled={picked !== undefined}
                        onClick={() => pickAnswer(question, optionIndex)}
                      >
                        <span className="letter">{LETTERS[optionIndex]}</span>
                        <span className="opt-text">{option}</span>
                        {picked !== undefined && optionIndex === question.answer && (
                          <span className="tag">Doğru</span>
                        )}
                        {picked !== undefined && optionIndex === picked && optionIndex !== question.answer && (
                          <span className="tag">Yanlış</span>
                        )}
                      </button>
                    )
                  })}
                </div>
                {picked !== undefined && (
                  <p className={picked === question.answer ? "why is-right" : "why is-wrong"}>{question.why}</p>
                )}
                <AskFriend
                  me={account.id}
                  friends={socialBoard(account.id).friends}
                  label="Arkadaşına at"
                  item={{
                    kind: "soru",
                    subject: activeSubject,
                    grade,
                    date,
                    topic: lesson.topic.title,
                    section: lesson.section.title,
                    question: {
                      q: question.q,
                      options: question.options,
                      picked: picked ?? null,
                    },
                  }}
                />
              </li>
            ))}
          </ol>
          {answered.length === checked.length && (
            <div className={`result result-${correctCount}`} role="status">
              <Pips checked={checked} />
              <p>{scoreLine(correctCount, checked.length)}</p>
            </div>
          )}
          {nextSubject ? (
            <button className="next" type="button" onClick={() => setSubject(nextSubject)}>
              Devam: {nextSubject}
            </button>
          ) : (
            <button
              className="next"
              type="button"
              onClick={() => {
                const next = shiftSchoolDay(date, 1)
                if (next) {
                  setDate(next)
                  setSubject(subjects[0])
                }
              }}
              disabled={!shiftSchoolDay(date, 1)}
            >
              Yarınki tura geç
            </button>
          )}
        </article>
      )}
      {!desk && !mail && !trials && (
        <footer>
          2026-2027 MEB taslak çerçeve yıllık planına göre. Okulundaki zümre haftayı biraz kaydırabilir.
        </footer>
      )}
    </main>
    </div>
  )
}

function scoreLine(correct, total) {
  const gain = correct > 0 ? ` ${correct * POINT} puan.` : ""
  if (total === 3) {
    if (correct === 0) return "Tur bitti. Bu sefer olmadı."
    if (correct === 1) return `Tur bitti. Biri doğru.${gain}`
    if (correct === 2) return `Tur bitti. İkisi doğru.${gain}`
    return `Tur bitti. Üçü de doğru.${gain}`
  }
  return `${total} sorunun ${correct} tanesi doğru.${gain}`
}

function Pips({ checked }) {
  return (
    <div className="pips" aria-hidden="true">
      {checked.map((item) => {
        const state =
          item.picked === undefined ? "is-wait" : item.picked === item.question.answer ? "is-hit" : "is-miss"
        return <span key={item.question.id} className={`pip ${state}`} />
      })}
    </div>
  )
}

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="6" y="10" width="52" height="50" rx="18" fill="#58a700" />
      <rect x="6" y="4" width="52" height="50" rx="18" fill="#58cc02" />
      <circle cx="32" cy="28" r="16" fill="#fff" />
      <ellipse cx="26" cy="26" rx="3.2" ry="4.1" fill="#3c3c3c" />
      <ellipse cx="38" cy="26" rx="3.2" ry="4.1" fill="#3c3c3c" />
      <circle cx="27.1" cy="24.6" r="1.15" fill="#fff" />
      <circle cx="39.1" cy="24.6" r="1.15" fill="#fff" />
      <path d="M25 33.5c2.2 3.2 11.8 3.2 14 0" fill="none" stroke="#3c3c3c" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M46 12.5c2.4 1.2 3.2 3.6 2.2 6.2-1.6-1.4-3.4-1.6-5.2-.4 1.7-2.4 2-4.2 3-5.8z" fill="#ff9600" />
    </svg>
  )
}

function AccountGate({ onEnter }) {
  const [mode, setMode] = useState("create")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [grade, setGrade] = useState(null)
  const [error, setError] = useState("")

  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const typedEmail = String(data.get("email") || email).trim()
    const typedPassword = String(data.get("password") || password)
    const result = mode === "create"
      ? createAccount({ email: typedEmail, password: typedPassword, grade })
      : loginAccount({ email: typedEmail, password: typedPassword })
    if (result.error) {
      setError(result.error)
      return
    }
    onEnter(result.account)
  }

  function switchMode(next) {
    setMode(next)
    setError("")
    setPassword("")
  }

  return (
    <main className="gate">
      <div className="gate-copy">
        <p className="brand-hero">
          <LogoMark />
          Sıra
        </p>
        <h1>Her gün bir konu.</h1>
        <p className="lead">Beşten sekize, bugünün dersi sırayla açılır.</p>
      </div>
      <div className="gate-panel">
      <p className="gate-kicker">{mode === "create" ? "Hesabını aç" : "Hesabına gir"}</p>
      <form className="account-form" onSubmit={submit}>
        <label>
          E-posta
          <input
            name="email"
            type={mode === "create" ? "email" : "text"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            inputMode="email"
            maxLength={80}
            required
          />
        </label>
        <label>
          Şifre
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete={mode === "create" ? "new-password" : "current-password"}
            minLength={4}
            required
          />
        </label>
        {mode === "create" && (
          <fieldset className="grade-field">
            <legend>Sınıfın</legend>
            <div className="grade-choices compact">
              {[5, 6, 7, 8].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`g${item}${grade === item ? " is-on" : ""}`}
                  aria-pressed={grade === item}
                  onClick={() => setGrade(item)}
                >
                  <strong>{item}</strong>
                  <span>{grade === item ? "seçildi" : "sınıf"}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="next" type="submit">
          {mode === "create" ? "Hesabı aç" : "Giriş yap"}
        </button>
      </form>
      <p className="mode-switch">
        {mode === "create" ? (
          <>
            Hesabın var mı?{" "}
            <button type="button" onClick={() => switchMode("login")}>Giriş yap</button>
          </>
        ) : (
          <>
            Hesabın yok mu?{" "}
            <button type="button" onClick={() => switchMode("create")}>Hesap oluştur</button>
          </>
        )}
      </p>
      <p className="fine">Hesap bu cihazda durur.</p>
      </div>
    </main>
  )
}
