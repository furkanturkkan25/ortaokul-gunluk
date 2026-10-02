import { useEffect, useState } from "react"
import { Avatar } from "./Profile.jsx"
import { postMessage, readThreads, sendHelp } from "./lib/help.js"

const LETTERS = ["A", "B", "C", "D"]

export function AskFriend({ me, friends, label, item }) {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState("")

  function send(friend) {
    sendHelp({ fromId: me, toId: friend.id, item })
    setOpen(false)
    setNote(`${friend.displayName} görsün diye gönderildi.`)
  }

  return (
    <div className="ask">
      <button className="press" type="button" onClick={() => setOpen((value) => !value)}>{label}</button>
      {note && <p className="form-note">{note}</p>}
      {open && (
        <div className="ask-box">
          {friends.length === 0 ? (
            <p className="fine">Önce hesaptan bir arkadaş ekle.</p>
          ) : friends.map((friend) => (
            <button className="press" type="button" key={friend.id} onClick={() => send(friend)}>
              {friend.displayName}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function clock(at) {
  return new Date(at).toLocaleTimeString("tr", { hour: "2-digit", minute: "2-digit" })
}

function chatsFor(threads, account, people) {
  const groups = new Map()
  for (const thread of threads) {
    if (thread.fromId !== account.id && thread.toId !== account.id) continue
    const otherId = thread.fromId === account.id ? thread.toId : thread.fromId
    const group = groups.get(otherId) || []
    group.push(thread)
    groups.set(otherId, group)
  }
  return [...groups.entries()].map(([otherId, group]) => {
    const ordered = [...group].sort((left, right) => left.createdAt - right.createdAt)
    const lastThread = ordered[ordered.length - 1]
    const lastMessage = ordered.flatMap((thread) => thread.messages || []).sort((left, right) => left.at - right.at).at(-1)
    return {
      otherId,
      person: people.find((person) => person.id === otherId),
      threads: ordered,
      at: lastMessage?.at || lastThread.createdAt,
      preview: lastMessage?.text || (lastThread.kind === "soru" ? lastThread.question?.q : lastThread.topic),
    }
  }).sort((left, right) => right.at - left.at)
}

export function MailBox({ account, people }) {
  const [threads, setThreads] = useState(readThreads)
  const [openId, setOpenId] = useState(null)
  const chats = chatsFor(threads, account, people)
  const open = chats.find((chat) => chat.otherId === openId) || null

  useEffect(() => {
    const refresh = () => setThreads(readThreads())
    window.addEventListener("sira-sync", refresh)
    return () => window.removeEventListener("sira-sync", refresh)
  }, [])

  if (open) {
    return <Talk chat={open} account={account} onBack={() => setOpenId(null)} />
  }

  return (
    <div className="mail">
      <h1>Mesajlar</h1>
      {chats.length === 0 ? (
        <p className="fine">Henüz bir şey yok. Derste «Anlamadım» veya «Arkadaşına at» de.</p>
      ) : (
        <ul className="chats">
          {chats.map((chat) => (
            <li key={chat.otherId}>
              <button className="chat-row" type="button" onClick={() => setOpenId(chat.otherId)}>
                <Avatar avatar={chat.person?.avatar} />
                <span className="chat-copy">
                  <strong>{chat.person?.displayName || "Arkadaş"}</strong>
                  <span>{chat.preview}</span>
                </span>
                <time>{clock(chat.at)}</time>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Talk({ chat, account, onBack }) {
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const person = chat.person
  const latest = chat.threads[chat.threads.length - 1]

  function send(event) {
    event.preventDefault()
    const result = postMessage(latest.id, account.id, text)
    if (result.error) {
      setError(result.error)
      return
    }
    setText("")
    setError("")
  }

  return (
    <div className="talk">
      <header className="chat-head">
        <button className="press" type="button" onClick={onBack} aria-label="Mesajlara dön">←</button>
        <Avatar avatar={person?.avatar} />
        <div>
          <strong>{person?.displayName || "Arkadaş"}</strong>
          <p>{person?.grade ? `${person.grade}. sınıf` : "Arkadaşın"}</p>
        </div>
      </header>
      <div className="talk-log">
        {chat.threads.map((thread) => (
          <div key={thread.id} className="talk-block">
            <ThreadCard thread={thread} account={account} person={person} />
            {(thread.messages || []).map((message) => (
              <p key={message.id} className={message.fromId === account.id ? "bubble is-mine" : "bubble"}>
                {message.text}
                <time>{clock(message.at)}</time>
              </p>
            ))}
          </div>
        ))}
        {chat.threads.every((thread) => !(thread.messages || []).length) && (
          <p className="fine">İlk notu sen yaz.</p>
        )}
      </div>
      <form className="composer" onSubmit={send}>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          maxLength={400}
          placeholder={`${person?.displayName || "Arkadaşına"} yaz`}
          rows={1}
          required
        />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="next" type="submit">Gönder</button>
      </form>
    </div>
  )
}

function ThreadCard({ thread, account, person }) {
  const mine = thread.fromId === account.id
  const name = person?.displayName || "Arkadaşın"
  const what = thread.kind === "soru" ? "soruyu" : "konuyu"
  const heading = mine ? `Bu ${what} sen attın` : `${name} bu ${what} attı`
  const place = [thread.subject, thread.topic, thread.section].filter(Boolean)
  return (
    <article className={mine ? "talk-question is-mine" : "talk-question"}>
      <p className="talk-from">{heading}</p>
      <p className="fine">{place.join(" · ")}</p>
      {thread.kind === "soru" ? (
        <>
          <p>{thread.question?.q}</p>
          <ol>
            {(thread.question?.options || []).map((option, index) => (
              <li key={option} className={thread.question?.picked === index ? "is-picked" : ""}>
                {LETTERS[index]}. {option}
                {thread.question?.picked === index ? " · işaretlediği" : ""}
              </li>
            ))}
          </ol>
        </>
      ) : (
        (thread.paragraphs || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      )}
      {thread.example && (
        <p className="example"><span>Örnek. </span>{thread.example}</p>
      )}
      <time>{clock(thread.createdAt)}</time>
    </article>
  )
}
