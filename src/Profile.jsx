import { useEffect, useId, useMemo, useRef, useState } from "react"
import {
  AVATAR_PERSONS,
  AVATAR_EYES,
  hairChoices,
  hairFor,
  AVATAR_HAIR_COLORS,
  AVATAR_MOUTHS,
  AVATAR_SHIRTS,
  AVATAR_SKINS,
  defaultAvatar,
  acceptFriend,
  cancelRequest,
  declineFriend,
  removeFriend,
  requestFriend,
  socialBoard,
  updateProfile,
} from "./lib/accounts.js"
import { grade5 } from "./data/grade5.js"
import { grade6 } from "./data/grade6.js"
import { grade7 } from "./data/grade7.js"
import { grade8 } from "./data/grade8.js"
import { readAnswers, tally } from "./lib/points.js"
import { scoreTrials } from "./lib/trial.js"
import { liveStreak } from "./lib/streak.js"

const TRACKS = { 5: grade5, 6: grade6, 7: grade7, 8: grade8 }

const SKIN = { acik: "#ffd0ae", bugday: "#f0b27a", esmer: "#c47a45", koyu: "#7a4630" }
const SKIN_LIGHT = { acik: "#fff1e4", bugday: "#ffd7b0", esmer: "#e29a66", koyu: "#a86a4c" }
const SKIN_DEEP = { acik: "#e8b08c", bugday: "#d08a52", esmer: "#a56232", koyu: "#4e2816" }
const BLUSH = { acik: "#ff9b8a", bugday: "#ee7d62", esmer: "#d26548", koyu: "#b85a48" }
const HAIR = { siyah: "#2a2a2a", kahve: "#6a3b24", sari: "#f2c14b", kizil: "#d24b28" }
const HAIR_DEEP = { siyah: "#161616", kahve: "#4a2818", sari: "#d4a43a", kizil: "#a33a1c" }
const HAIR_LIGHT = { siyah: "#6a6a6a", kahve: "#a56a48", sari: "#ffe7a8", kizil: "#ffb08a" }
const SHIRT = { mavi: "#1cb0f6", yesil: "#58cc02", turuncu: "#ff9600", kirmizi: "#ff4b4b" }
const SHIRT_DEEP = { mavi: "#1899d6", yesil: "#58a700", turuncu: "#e07d00", kirmizi: "#ea2b2b" }
const SHIRT_LIGHT = { mavi: "#8ad8ff", yesil: "#b6f26a", turuncu: "#ffd08a", kirmizi: "#ffb0b0" }

export function Avatar({ avatar, large = false }) {
  const look = avatar || {}
  const skin = SKIN[look.skin] || SKIN.bugday
  const light = SKIN_LIGHT[look.skin] || SKIN_LIGHT.bugday
  const deep = SKIN_DEEP[look.skin] || SKIN_DEEP.bugday
  const blush = BLUSH[look.skin] || BLUSH.bugday
  const hair = HAIR[look.hairColor] || HAIR.kahve
  const scarf = HAIR_DEEP[look.hairColor] || HAIR_DEEP.kahve
  const shine = HAIR_LIGHT[look.hairColor] || HAIR_LIGHT.kahve
  const shirt = SHIRT[look.shirt] || SHIRT.mavi
  const cloth = SHIRT_LIGHT[look.shirt] || SHIRT_LIGHT.mavi
  const style = hairFor(look.person === "kiz" ? "kiz" : "erkek", look.hair)
  const girl = look.person === "kiz"
  const covered = style === "kapali"
  const uid = useId().replace(/:/g, "")
  const face = `face-${uid}`
  const tone = `tone-${uid}`
  return (
    <svg className={large ? "avatar avatar-lg" : "avatar"} viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <radialGradient id={tone} cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor={light} />
          <stop offset="62%" stopColor={skin} />
          <stop offset="100%" stopColor={deep} />
        </radialGradient>
        <mask id={face}>
          <rect width="80" height="80" fill="#fff" />
          <ellipse cx="40" cy="34" rx="19.2" ry="21.2" fill="#000" />
        </mask>
      </defs>
      {(style === "uzun" || covered) && (
        <>
          <path d="M18 42c-6 10-8 24-4 38h12c-2-12 0-24 4-34-4-1-8-2-12-4z" fill={hair} />
          <path d="M62 42c6 10 8 24 4 38H54c2-12 0-24-4-34 4-1 8-2 12-4z" fill={hair} />
        </>
      )}
      <path d="M12 80c2-18 14-28 28-28s26 10 28 28z" fill={shirt} />
      <path d="M22 72c8-3.2 20-2.4 32 2" fill="none" stroke={cloth} strokeWidth="2.6" strokeLinecap="round" opacity="0.7" />
      <path d="M31 48h18c.6 8-.4 14-2 18H33c-1.6-4-2.6-10-2-18z" fill={`url(#${tone})`} />
      <path d="M32.5 57c1.6 5.2 4 7.4 7.5 7.4s5.9-2.2 7.5-7.4c-2 2.6-4.6 3.8-7.5 3.8s-5.5-1.2-7.5-3.8z" fill={skin} />
      {!covered && style !== "uzun" && (
        <>
          <ellipse cx="18.2" cy="36" rx="3.3" ry="4.4" fill={skin} />
          <ellipse cx="61.8" cy="36" rx="3.3" ry="4.4" fill={skin} />
          <ellipse cx="18.6" cy="36.4" rx="1.5" ry="2.4" fill={deep} />
          <ellipse cx="61.4" cy="36.4" rx="1.5" ry="2.4" fill={deep} />
        </>
      )}
      {covered && (
        <>
          <path d="M8 66c8-16 16-10 32-8 16-2 24-8 32 8l2 14H6z" fill={hair} />
          <path d="M15 38C15 14 24 4 40 4s25 10 25 34c0 14-8 24-25 28C23 62 15 52 15 38z" fill={hair} />
          <path d="M24 14c6-5 18-4 26 3" fill="none" stroke={shine} strokeWidth="2.2" strokeLinecap="round" opacity="0.75" />
        </>
      )}
      <ellipse cx="40" cy="34" rx={girl ? 19.4 : 20} ry={girl ? 21.6 : 20.8} fill={`url(#${tone})`} />
      <ellipse cx="28" cy="42" rx="3.3" ry="1.8" fill={blush} opacity={girl ? 0.85 : 0.45} />
      <ellipse cx="52" cy="42" rx="3.3" ry="1.8" fill={blush} opacity={girl ? 0.85 : 0.45} />
      {!covered && style !== "yok" && (
        <g mask={`url(#${face})`}>
          {style === "kisa" && (girl
            ? <ellipse cx="40" cy="36" rx="26" ry="27" fill={hair} />
            : <ellipse cx="40" cy="24" rx="25" ry="18" fill={hair} />)}
          {style === "firca" && <ellipse cx="40" cy="20" rx="23" ry="14" fill={hair} />}
          {style === "diken" && <ellipse cx="40" cy="24" rx="24" ry="16" fill={hair} />}
          {style === "uzun" && <ellipse cx="40" cy="30" rx="27" ry="24" fill={hair} />}
          {style === "topuz" && <ellipse cx="40" cy="26" rx="25" ry="18" fill={hair} />}
          <path d="M24 18c6 4 16 4 24-1" fill="none" stroke={shine} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        </g>
      )}
      {girl && (style === "kisa" || style === "uzun" || style === "topuz") && (
        <path d="M24 18c2 5.2 8 7.2 16 6.2 6-.8 12-3 16-7.2-4.2 2.2-10 3.4-16 2.6-5.2-.6-12-.8-16-1.6z" fill={hair} />
      )}
      {style === "diken" && (
        <>
          <ellipse cx="27" cy="14" rx="4.2" ry="7.2" fill={hair} transform="rotate(-24 27 14)" />
          <ellipse cx="40" cy="9" rx="4.4" ry="8" fill={hair} />
          <ellipse cx="53" cy="14" rx="4.2" ry="7.2" fill={hair} transform="rotate(24 53 14)" />
        </>
      )}
      {style === "topuz" && (
        <>
          <circle cx="40" cy="8.5" r={girl ? 8.2 : 5.4} fill={hair} />
          <ellipse cx="40" cy="8" rx="3" ry="1.6" fill={shine} opacity="0.8" />
        </>
      )}
      {style === "yok" && (
        <path d="M28 16c4-3 14-3.2 20 1" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="2.4" strokeLinecap="round" />
      )}
      {covered && (
        <path d="M26 57c4 7 24 7 28 0l-2 4c-5 6-19 6-24 0z" fill={scarf} />
      )}
      <path
        d={girl
          ? "M23.5 28c4-3.6 8.4-3.6 11.6 0M44.8 28c3.2-3.6 8-3.6 11.6 0"
          : "M23.2 28.8c4.2-2.2 8.2-2.2 11.8 0M44.8 28.8c3.2-2.2 8-2.2 11.8 0"}
        fill="none"
        stroke={deep}
        strokeWidth={girl ? 1.7 : 2.3}
        strokeLinecap="round"
      />
      <Eyes look={look.eyes} girl={girl} />
      <path d="M40 41.5c1.5 2.6 1.3 4 0 4.6" fill="none" stroke={deep} strokeWidth="1.7" strokeLinecap="round" />
      <Mouth kind={look.mouth} skin={look.skin} />
    </svg>
  )
}

function Eyes({ look, girl }) {
  if (look === "kapali") {
    return (
      <path d="M24.5 35.5c2.4 3.2 7 3.2 9.4 0M46 35.5c2.4 3.2 7 3.2 9.4 0" fill="none" stroke="#2c2c2c" strokeWidth="2.3" strokeLinecap="round" />
    )
  }
  const small = look === "nokta"
  const rx = small ? 3.5 : 6.5
  const ry = small ? 4.1 : 7.3
  const iris = small ? 2 : 3.55
  return (
    <>
      <ellipse cx="31" cy="35" rx={rx} ry={ry} fill="#fff" />
      <ellipse cx="49" cy="35" rx={rx} ry={ry} fill="#fff" />
      <circle cx="31.6" cy="35.6" r={iris} fill="#6a3d22" />
      <circle cx="49.6" cy="35.6" r={iris} fill="#6a3d22" />
      <circle cx="31.6" cy="35.6" r={small ? 1.05 : 1.85} fill="#1b1b1b" />
      <circle cx="49.6" cy="35.6" r={small ? 1.05 : 1.85} fill="#1b1b1b" />
      <circle cx="30.2" cy="33.6" r={small ? 0.7 : 1.35} fill="#fff" />
      <circle cx="48.2" cy="33.6" r={small ? 0.7 : 1.35} fill="#fff" />
      {!small && (
        <>
          <circle cx="33" cy="36.8" r="0.55" fill="#fff" opacity="0.85" />
          <circle cx="51" cy="36.8" r="0.55" fill="#fff" opacity="0.85" />
          {girl && (
            <path d="M23.6 33.4l.8-2.2M49.2 31.4l1.2 2" fill="none" stroke="#2a2a2a" strokeWidth="1.2" strokeLinecap="round" />
          )}
        </>
      )}
    </>
  )
}

const LIP = { acik: "#e2788c", bugday: "#d86b80", esmer: "#c45d70", koyu: "#a84d62" }
const LIP_DEEP = { acik: "#b44a62", bugday: "#a44358", esmer: "#8c3a4c", koyu: "#6e3044" }
const LIP_LIGHT = { acik: "#ffd0d6", bugday: "#f7b8c4", esmer: "#e8a0ae", koyu: "#d48a9a" }

function Mouth({ kind, skin }) {
  const lip = LIP[skin] || LIP.bugday
  const deep = LIP_DEEP[skin] || LIP_DEEP.bugday
  const light = LIP_LIGHT[skin] || LIP_LIGHT.bugday
  const smile = kind !== "duz"
  const open = kind === "acik"
  const left = 32.5
  const right = 47.5
  const corner = smile ? 49.4 : 52.2
  const seam = smile ? 53.1 : 52.45
  const lowerTop = open ? seam + 2.3 : seam
  const lowerBottom = open ? 58.2 : 56.6
  const upper = smile ? 51.2 : 51.5
  return (
    <>
      {open && (
        <>
          <path d={`M${left + 0.3} ${seam - 0.2} Q40 ${lowerTop + 0.8} ${right - 0.3} ${seam - 0.2} Q40 ${lowerTop - 0.2} ${left + 0.3} ${seam - 0.2} Z`} fill="#3a2228" />
          <path d={`M${left + 1.4} ${seam} Q40 ${seam + 1.35} ${right - 1.4} ${seam} Q40 ${seam + 0.45} ${left + 1.4} ${seam} Z`} fill="#fffdf8" />
        </>
      )}
      <path d={`M${left} ${corner} Q40 ${lowerBottom} ${right} ${corner} Q40 ${lowerTop} ${left} ${corner} Z`} fill={lip} />
      <path d={`M36.4 ${lowerTop + 1.15} Q40 ${lowerTop + 2.05} 43.6 ${lowerTop + 1.15} Q40 ${lowerTop + 1.45} 36.4 ${lowerTop + 1.15} Z`} fill={light} opacity="0.55" />
      <path d={`M${left} ${corner} Q40 ${upper} ${right} ${corner} Q40 ${seam} ${left} ${corner} Z`} fill={deep} />
      <path d={`M${left + 0.6} ${corner + 0.25} Q40 ${seam - 0.05} ${right - 0.6} ${corner + 0.25}`} fill="none" stroke={deep} strokeWidth="0.65" strokeLinecap="round" />
    </>
  )
}

export function ProfileDesk({ account, streak, onAccount, onClose, setup = false }) {
  const [displayName, setDisplayName] = useState(account.displayName || account.name)
  const [avatar, setAvatar] = useState(() => account.avatar || defaultAvatar())
  const [friendCode, setFriendCode] = useState("")
  const [copied, setCopied] = useState(false)
  const [board, setBoard] = useState(() => socialBoard(account.id))
  const [error, setError] = useState("")
  const [note, setNote] = useState("")
  const [page, setPage] = useState(setup ? "avatar" : "account")
  const [part, setPart] = useState("yuz")
  const trayRef = useRef(null)

  function apply(result) {
    if (result.error) {
      setError(result.error)
      setNote("")
      return
    }
    setError("")
    setNote(result.note || "")
    if (result.account) onAccount(result.account)
    setBoard(socialBoard(account.id))
  }

  function saveName(event) {
    event.preventDefault()
    apply(updateProfile(account.id, { displayName, avatar: account.avatar }))
  }

  function openAvatar() {
    setAvatar(account.avatar || defaultAvatar())
    setError("")
    setNote("")
    setPage("avatar")
  }

  function saveAvatar(event) {
    event.preventDefault()
    const person = avatar.person || "erkek"
    const result = updateProfile(account.id, {
      displayName: account.displayName || account.name,
      avatar: { ...avatar, person, hair: hairFor(person, avatar.hair) },
    })
    apply(result)
    if (!result.error && !setup) setPage("account")
  }

  function sendRequest(event) {
    event.preventDefault()
    const result = requestFriend(account.id, friendCode)
    apply(result)
    if (!result.error) setFriendCode("")
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(account.code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const ranks = useMemo(() => {
    const me = {
      id: account.id,
      code: account.code,
      name: account.name,
      displayName: account.displayName || account.name,
      grade: account.grade,
      avatar: account.avatar,
      pointAdjust: Number(account.pointAdjust) || 0,
    }
    const people = [me, ...board.friends.filter((person) => person.id !== me.id)]
    return people
      .map((person) => {
        const score = tally(readAnswers(person.id))
        const run = person.id === account.id ? streak : liveStreak(person.id)
        const trials = TRACKS[person.grade] ? scoreTrials(person.id, person.grade, TRACKS[person.grade]) : 0
        const adjust = Number(person.pointAdjust) || 0
        return { ...person, today: score.today, streak: run, total: score.total + run + trials + adjust }
      })
      .sort((left, right) => right.total - left.total || left.displayName.localeCompare(right.displayName, "tr"))
  }, [account, board.friends, streak])

  const mine = ranks.find((person) => person.id === account.id)
  const personId = avatar.person || "erkek"
  const hairId = hairFor(personId, avatar.hair)
  const tabs = [
    ["yuz", "Yüz"],
    ["ten", "Ten"],
    ["sac", "Saç"],
    ["renk", hairId === "kapali" ? "Örtü" : "Renk"],
    ["goz", "Göz"],
    ["agiz", "Ağız"],
    ["tisort", "Tişört"],
  ]
  const group = {
    yuz: {
      legend: "Yüz",
      options: AVATAR_PERSONS,
      selected: personId,
      onPick: (person) => setAvatar((current) => ({ ...current, person, hair: hairFor(person, current.hair) })),
      preview: (person) => ({ ...avatar, person, hair: hairFor(person, avatar.hair) }),
    },
    ten: {
      legend: "Ten",
      options: AVATAR_SKINS,
      selected: avatar.skin,
      onPick: (skin) => setAvatar((current) => ({ ...current, skin })),
      preview: (skin) => ({ ...avatar, skin }),
    },
    sac: {
      legend: "Saç",
      options: hairChoices(personId),
      selected: hairId,
      onPick: (hair) => setAvatar((current) => ({ ...current, hair })),
      preview: (hair) => ({ ...avatar, hair }),
    },
    renk: {
      legend: hairId === "kapali" ? "Örtü" : "Renk",
      options: AVATAR_HAIR_COLORS,
      selected: avatar.hairColor,
      onPick: (hairColor) => setAvatar((current) => ({ ...current, hairColor })),
      preview: (hairColor) => ({ ...avatar, hairColor }),
    },
    goz: {
      legend: "Göz",
      options: AVATAR_EYES,
      selected: avatar.eyes,
      onPick: (eyes) => setAvatar((current) => ({ ...current, eyes })),
      preview: (eyes) => ({ ...avatar, eyes }),
    },
    agiz: {
      legend: "Ağız",
      options: AVATAR_MOUTHS,
      selected: avatar.mouth,
      onPick: (mouth) => setAvatar((current) => ({ ...current, mouth })),
      preview: (mouth) => ({ ...avatar, mouth }),
    },
    tisort: {
      legend: "Tişört",
      options: AVATAR_SHIRTS,
      selected: avatar.shirt,
      onPick: (shirt) => setAvatar((current) => ({ ...current, shirt })),
      preview: (shirt) => ({ ...avatar, shirt }),
    },
  }[part]

  useEffect(() => {
    if (trayRef.current) trayRef.current.scrollLeft = 0
  }, [part])

  return (
    <section className="desk">
      <div className="desk-head">
        {setup ? null : page === "account" ? (
          <button className="press" type="button" onClick={onClose}>Derse dön</button>
        ) : (
          <button className="press" type="button" onClick={() => setPage("account")}>Hesaba dön</button>
        )}
      </div>

      {page === "avatar" ? (
        <form className="account-form desk-form studio" onSubmit={saveAvatar}>
          <div
            className="studio-stage"
            data-color={avatar.shirt}
            key={`${avatar.person}-${avatar.skin}-${avatar.hair}-${avatar.hairColor}-${avatar.eyes}-${avatar.mouth}-${avatar.shirt}`}
          >
            <Avatar avatar={avatar} large />
          </div>
          <h1>{setup ? "Avatarını oluştur" : "Avatar"}</h1>
          <p className="fine">{setup ? "Kaydet deyince dersin açılır." : "Parçayı seç, yüz hemen değişir."}</p>
          <div className="studio-tabs" role="tablist">
            {tabs.map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={part === id}
                className={part === id ? "is-on" : ""}
                onClick={() => setPart(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="studio-tray" ref={trayRef} role="tabpanel">
            <AvatarChoices {...group} />
          </div>
          <button className="next" type="submit">Kaydet</button>
        </form>
      ) : (
      <>
      <div className="identity" data-color={account.avatar?.shirt}>
        <Avatar avatar={account.avatar} large />
        <div>
          <h1>{displayName || account.name}</h1>
          <p>{account.grade}. sınıf · seri {streak} · {mine?.total ?? streak} puan</p>
          <p className="identity-id">
            <span>ID</span>
            <strong>{account.code}</strong>
            <button className="press" type="button" onClick={copyCode}>{copied ? "Kopyalandı" : "Kopyala"}</button>
          </p>
        </div>
      </div>

      <form className="account-form desk-form" onSubmit={saveName}>
        <label>
          Görünen ad
          <input
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            maxLength={24}
            required
          />
        </label>
        <p className="fine">Arkadaşların seni bu ID ile ekler.</p>
        <div className="friend-row">
          <button className="press" type="button" onClick={openAvatar}>Avatarı düzenle</button>
          <button className="next" type="submit">Kaydet</button>
        </div>
      </form>
      </>
      )}

      {(error || note) && (
        error
          ? <p className="form-error" role="alert">{error}</p>
          : <p className="form-note" role="status">{note}</p>
      )}

      {page === "account" && <div className="friends">
        <h2>Sıralama</h2>
        <p className="fine">Doğru cevap 10 puan. Her ders günü seriye 1 eklenir; girmediğin gün seri ve o puanlar silinir.</p>
        <ol className="ranks">
          {ranks.map((person, index) => (
            <li key={person.id} className={person.id === account.id ? "rank is-me" : "rank"}>
              <span className="rank-place">{index + 1}</span>
              <Avatar avatar={person.avatar} />
              <div>
                <strong>{person.displayName}</strong>
                <p>ID {person.code} · {person.grade}. sınıf · bugün {person.today} · seri {person.streak}</p>
              </div>
              {person.id !== account.id && (
                <button className="press" type="button" onClick={() => apply(removeFriend(account.id, person.id))}>
                  Çıkar
                </button>
              )}
              <strong className="rank-points">{person.total}<span>puan</span></strong>
            </li>
          ))}
        </ol>
        {board.friends.length === 0 && (
          <p className="fine">Arkadaş ekleyince sıra burada büyür.</p>
        )}

        {board.incoming.length > 0 && (
          <>
            <h2>Gelen istekler</h2>
            <ul className="people">
              {board.incoming.map((person) => (
                <Person key={person.id} person={person}>
                  <button className="press" type="button" onClick={() => apply(acceptFriend(account.id, person.id))}>
                    Kabul et
                  </button>
                  <button className="press" type="button" onClick={() => apply(declineFriend(account.id, person.id))}>
                    Geri çevir
                  </button>
                </Person>
              ))}
            </ul>
          </>
        )}

        {board.outgoing.length > 0 && (
          <>
            <h2>Gönderdiğin istekler</h2>
            <ul className="people">
              {board.outgoing.map((person) => (
                <Person key={person.id} person={person}>
                  <button className="press" type="button" onClick={() => apply(cancelRequest(account.id, person.id))}>
                    Geri al
                  </button>
                </Person>
              ))}
            </ul>
          </>
        )}

        <form className="account-form friend-add" onSubmit={sendRequest}>
          <h2>Arkadaş ekle</h2>
          <div className="friend-row">
            <label>
              ID
              <input
                value={friendCode}
                onChange={(event) => setFriendCode(event.target.value.toUpperCase())}
                maxLength={6}
                autoCapitalize="characters"
                autoComplete="off"
                spellCheck="false"
                required
              />
            </label>
            <button className="next" type="submit">İstek gönder</button>
          </div>
        </form>
        <p className="fine">Aynı isimli hesaplar bu bilgisayarda birleşir. Eski ID’ler de geçerlidir.</p>
      </div>}
    </section>
  )
}

function AvatarChoices({ legend, options, selected, onPick, preview }) {
  return (
    <fieldset className="grade-field">
      <legend>{legend}</legend>
      <div className="swatches">
        {options.map((item) => (
          <button
            key={item.id}
            type="button"
            className={selected === item.id ? "swatch is-on" : "swatch"}
            aria-pressed={selected === item.id}
            onClick={() => onPick(item.id)}
          >
            <Avatar avatar={preview(item.id)} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  )
}

function Person({ person, children }) {
  return (
    <li className="person">
      <Avatar avatar={person.avatar} />
      <div>
        <strong>{person.displayName}</strong>
        <p>ID {person.code} · {person.grade}. sınıf</p>
      </div>
      <div className="person-actions">{children}</div>
    </li>
  )
}
