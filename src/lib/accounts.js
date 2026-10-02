const ACCOUNTS_KEY = "sira-accounts"
const SESSION_KEY = "sira-session"

export const AVATAR_PERSONS = [
  { id: "kiz", label: "Kız" },
  { id: "erkek", label: "Erkek" },
]

export const AVATAR_SKINS = [
  { id: "acik", label: "Açık" },
  { id: "bugday", label: "Buğday" },
  { id: "esmer", label: "Esmer" },
  { id: "koyu", label: "Koyu" },
]

export const AVATAR_HAIR = [
  { id: "kisa", label: "Kısa" },
  { id: "uzun", label: "Uzun" },
  { id: "firca", label: "Fırça" },
  { id: "diken", label: "Diken" },
  { id: "topuz", label: "Topuz" },
  { id: "kapali", label: "Kapalı" },
  { id: "yok", label: "Yok" },
]

const BOY_HAIR = ["kisa", "uzun", "firca", "diken", "yok"]
const GIRL_HAIR = ["kisa", "uzun", "topuz", "kapali", "yok"]

export function hairChoices(person) {
  const ids = person === "erkek" ? BOY_HAIR : GIRL_HAIR
  return ids.map((id) => AVATAR_HAIR.find((item) => item.id === id))
}

export function hairFor(person, hair) {
  const ids = person === "erkek" ? BOY_HAIR : GIRL_HAIR
  return ids.includes(hair) ? hair : "kisa"
}

export const AVATAR_HAIR_COLORS = [
  { id: "siyah", label: "Siyah" },
  { id: "kahve", label: "Kahve" },
  { id: "sari", label: "Sarı" },
  { id: "kizil", label: "Kızıl" },
]

export const AVATAR_EYES = [
  { id: "buyuk", label: "Büyük" },
  { id: "nokta", label: "Nokta" },
  { id: "kapali", label: "Kapalı" },
]

export const AVATAR_MOUTHS = [
  { id: "gulumseme", label: "Gülüş" },
  { id: "duz", label: "Düz" },
  { id: "acik", label: "Açık" },
]

export const AVATAR_SHIRTS = [
  { id: "mavi", label: "Mavi" },
  { id: "yesil", label: "Yeşil" },
  { id: "turuncu", label: "Turuncu" },
  { id: "kirmizi", label: "Kırmızı" },
]

const GRADE_COLOR = { 5: "turuncu", 6: "mavi", 7: "yesil", 8: "kirmizi" }

function pickId(value, options, fallback) {
  return options.some((item) => item.id === value) ? value : fallback
}

export function defaultAvatar(shirt = "mavi") {
  return {
    person: "erkek",
    skin: "bugday",
    hair: "kisa",
    hairColor: "kahve",
    eyes: "buyuk",
    mouth: "gulumseme",
    shirt: pickId(shirt, AVATAR_SHIRTS, "mavi"),
  }
}

export function sanitizeAvatar(avatar, shirt) {
  const base = defaultAvatar(shirt)
  const source = avatar && typeof avatar === "object" ? avatar : {}
  return {
    person: pickId(source.person, AVATAR_PERSONS, base.person),
    skin: pickId(source.skin, AVATAR_SKINS, base.skin),
    hair: pickId(source.hair, AVATAR_HAIR, base.hair),
    hairColor: pickId(source.hairColor, AVATAR_HAIR_COLORS, base.hairColor),
    eyes: pickId(source.eyes, AVATAR_EYES, base.eyes),
    mouth: pickId(source.mouth, AVATAR_MOUTHS, base.mouth),
    shirt: pickId(source.shirt, AVATAR_SHIRTS, base.shirt),
  }
}

function hashPassword(password) {
  let hash = 2166136261
  const text = `sira:${password}`
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

function readAccounts() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]")
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
  import("./sync.js").then((mod) => mod.schedulePush()).catch(() => {})
}

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

function sameName(left, right) {
  return left.trim().toLocaleLowerCase("tr") === right.trim().toLocaleLowerCase("tr")
}

function cleanEmail(value) {
  return String(value || "").trim().toLowerCase()
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function nameFromEmail(email) {
  const local = email.split("@")[0].replace(/[._+-]+/g, " ").trim().slice(0, 24)
  return local.length >= 2 ? local : "Öğrenci"
}

function cleanCode(value) {
  return String(value || "").trim().toUpperCase()
}

function isPublicCode(value) {
  return /^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}$/.test(value)
}

function makeCode(taken) {
  const bytes = new Uint8Array(6)
  for (let attempt = 0; attempt < 12; attempt += 1) {
    crypto.getRandomValues(bytes)
    const code = [...bytes].map((byte) => CODE_ALPHABET[byte % CODE_ALPHABET.length]).join("")
    if (!taken.has(code)) return code
  }
  return makeCode(taken)
}

function normalize(account) {
  const friends = Array.isArray(account.friends) ? account.friends.filter((id) => id !== account.id) : []
  const outgoing = Array.isArray(account.outgoing) ? account.outgoing.filter((id) => id !== account.id) : []
  return {
    ...account,
    displayName: typeof account.displayName === "string" && account.displayName.trim()
      ? account.displayName.trim()
      : account.name,
    avatar: sanitizeAvatar(account.avatar, account.color || GRADE_COLOR[account.grade]),
    friends,
    outgoing,
  }
}

function withCodes(accounts) {
  const taken = new Set()
  let dirty = false
  const next = accounts.map((account) => {
    const code = cleanCode(account.code)
    if (isPublicCode(code) && !taken.has(code)) {
      taken.add(code)
      return account.code === code ? account : { ...account, code }
    }
    dirty = true
    const fresh = makeCode(taken)
    taken.add(fresh)
    return { ...account, code: fresh }
  })
  if (dirty) writeAccounts(next)
  return next
}

function load() {
  return withCodes(readAccounts().map(normalize))
}

function prune(accounts) {
  const ids = new Set(accounts.map((account) => account.id))
  return accounts.map((account) => {
    const friends = account.friends.filter((id) => ids.has(id))
    return {
      ...account,
      friends,
      outgoing: account.outgoing.filter((id) => ids.has(id) && !friends.includes(id)),
    }
  })
}

function commit(accounts) {
  const next = prune(accounts)
  writeAccounts(next)
  return next
}

function present(account) {
  return {
    id: account.id,
    code: account.code,
    name: account.name,
    displayName: account.displayName,
    grade: account.grade,
    avatar: account.avatar,
    pointAdjust: Number(account.pointAdjust) || 0,
  }
}

export function currentAccount() {
  const id = localStorage.getItem(SESSION_KEY)
  if (!id) return null
  return load().find((item) => item.id === id) || null
}

export function logoutAccount() {
  localStorage.removeItem(SESSION_KEY)
}

export function createAccount({ email, password, grade }) {
  const clean = cleanEmail(email)
  if (!isEmail(clean)) return { error: "Geçerli bir e-posta yaz." }
  if (password.length < 4) return { error: "Şifre en az dört karakter olsun." }
  if (![5, 6, 7, 8].includes(grade)) return { error: "Sınıfını seç." }
  const accounts = load()
  if (accounts.some((account) => cleanEmail(account.email) === clean || sameName(account.name, clean))) {
    return { error: "Bu e-posta ile bir hesap var. Giriş yap." }
  }
  const account = normalize({
    id: crypto.randomUUID(),
    name: clean,
    email: clean,
    passwordHash: hashPassword(password),
    grade,
    displayName: nameFromEmail(clean),
    avatar: defaultAvatar(GRADE_COLOR[grade]),
    avatarSet: false,
    code: makeCode(new Set(accounts.map((item) => item.code))),
    friends: [],
    outgoing: [],
  })
  commit([...accounts, account])
  localStorage.setItem(SESSION_KEY, account.id)
  return { account }
}

export function loginAccount({ email, name, password }) {
  const typed = String(email || name || "").trim()
  const mail = cleanEmail(typed)
  const account = load().find((item) => (
    (item.email && cleanEmail(item.email) === mail)
    || sameName(item.name, typed)
    || sameName(item.displayName || "", typed)
  ))
  const hashes = account?.passwordHashes?.length ? account.passwordHashes : [account?.passwordHash]
  if (!account || !hashes.includes(hashPassword(password))) {
    return { error: "E-posta veya şifre uyuşmuyor." }
  }
  localStorage.setItem(SESSION_KEY, account.id)
  return { account }
}

export function updateProfile(id, { displayName, avatar }) {
  const clean = (displayName || "").trim()
  if (clean.length < 2) return { error: "Görünen ad en az iki harf olsun." }
  if (clean.length > 24) return { error: "Görünen ad en fazla 24 karakter olsun." }
  const accounts = load()
  const me = accounts.find((account) => account.id === id)
  if (!me) return { error: "Hesap bulunamadı." }
  me.displayName = clean
  me.avatar = sanitizeAvatar(avatar, me.avatar?.shirt)
  me.avatarSet = true
  me.profileRev = Date.now()
  const next = commit(accounts)
  return { account: next.find((account) => account.id === id), note: "Kaydedildi." }
}

export function socialBoard(id) {
  const accounts = load()
  const me = accounts.find((account) => account.id === id)
  if (!me) return { friends: [], incoming: [], outgoing: [] }
  const byId = new Map(accounts.map((account) => [account.id, present(account)]))
  const take = (list) => list.map((item) => byId.get(item)).filter(Boolean)
  return {
    friends: take(me.friends),
    incoming: accounts
      .filter((account) => account.outgoing.includes(id) && !me.friends.includes(account.id))
      .map(present),
    outgoing: take(me.outgoing),
  }
}

function linkFriends(accounts, id, otherId, note) {
  for (const account of accounts) {
    if (account.id !== id && account.id !== otherId) continue
    const peer = account.id === id ? otherId : id
    account.friends = [...new Set([...account.friends, peer])]
    account.outgoing = account.outgoing.filter((item) => item !== peer)
  }
  const next = commit(accounts)
  return { account: next.find((account) => account.id === id), note }
}

export function requestFriend(id, rawCode) {
  const accounts = load()
  const me = accounts.find((account) => account.id === id)
  if (!me) return { error: "Hesap bulunamadı." }
  const code = cleanCode(rawCode)
  const other = accounts.find((account) => account.code === code || (account.aliases || []).map(cleanCode).includes(code))
  if (!other) return { error: "Bu ID ile hesap yok." }
  if (other.id === me.id) return { error: "Kendine istek gönderemezsin." }
  if (me.friends.includes(other.id)) return { error: "Zaten arkadaşsınız." }
  if (me.outgoing.includes(other.id)) return { error: "İstek zaten duruyor." }
  if (other.outgoing.includes(me.id)) {
    return linkFriends(accounts, me.id, other.id, "Sana istek atmıştı. Artık arkadaşsınız.")
  }
  me.outgoing = [...me.outgoing, other.id]
  const next = commit(accounts)
  return { account: next.find((account) => account.id === id), note: "İstek gönderildi." }
}

export function acceptFriend(id, otherId) {
  const accounts = load()
  const other = accounts.find((account) => account.id === otherId)
  const me = accounts.find((account) => account.id === id)
  if (!me || !other) return { error: "Hesap bulunamadı." }
  if (!other.outgoing.includes(id)) return { error: "Bu istek artık yok." }
  return linkFriends(accounts, id, otherId, "Artık arkadaşsınız.")
}

export function declineFriend(id, otherId) {
  const accounts = load()
  const other = accounts.find((account) => account.id === otherId)
  if (!other) return { error: "Hesap bulunamadı." }
  other.outgoing = other.outgoing.filter((item) => item !== id)
  const next = commit(accounts)
  return { account: next.find((account) => account.id === id), note: "İstek geri çevrildi." }
}

export function cancelRequest(id, otherId) {
  const accounts = load()
  const me = accounts.find((account) => account.id === id)
  if (!me) return { error: "Hesap bulunamadı." }
  me.outgoing = me.outgoing.filter((item) => item !== otherId)
  const next = commit(accounts)
  return { account: next.find((account) => account.id === id), note: "İstek geri alındı." }
}

export function removeFriend(id, otherId) {
  const accounts = load()
  for (const account of accounts) {
    if (account.id === id) account.friends = account.friends.filter((item) => item !== otherId)
    if (account.id === otherId) account.friends = account.friends.filter((item) => item !== id)
  }
  const next = commit(accounts)
  return { account: next.find((account) => account.id === id), note: "Arkadaşlık bitti." }
}
