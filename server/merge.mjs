function sameName(left, right) {
  return String(left || "").trim().toLocaleLowerCase("tr") === String(right || "").trim().toLocaleLowerCase("tr")
}

function cleanEmail(value) {
  return String(value || "").trim().toLowerCase()
}

function cleanCode(value) {
  return String(value || "").trim().toUpperCase()
}

function isCode(value) {
  return /^[A-Z0-9]{6}$/.test(value)
}

function mergeAttempt(prev, next) {
  if (!next || typeof next !== "object") return prev
  if (!prev || typeof prev !== "object") return next
  if (prev.finished) return prev
  if (next.finished) return next
  return { picks: { ...(next.picks || {}), ...(prev.picks || {}) } }
}

function mergeTrials(current, incoming, point) {
  const trials = { ...(current || {}) }
  for (const [id, value] of Object.entries(incoming || {})) {
    const key = point(id)
    const prev = trials[key] && typeof trials[key] === "object" ? trials[key] : {}
    const next = value && typeof value === "object" ? value : {}
    const merged = { ...prev }
    for (const attemptKey of new Set([...Object.keys(prev), ...Object.keys(next)])) {
      merged[attemptKey] = mergeAttempt(prev[attemptKey], next[attemptKey])
    }
    trials[key] = merged
  }
  return trials
}

function mergeThreads(current, incoming, point) {
  const map = new Map()
  for (const raw of [...(current || []), ...(incoming || [])]) {
    if (!raw?.id) continue
    const fromId = point(raw.fromId)
    const toId = point(raw.toId)
    const messages = (raw.messages || []).map((message) => ({
      ...message,
      fromId: point(message.fromId),
    })).filter((message) => message.id && message.text)
    const prev = map.get(raw.id)
    if (!prev) {
      map.set(raw.id, { ...raw, fromId, toId, messages })
      continue
    }
    const byId = new Map()
    for (const message of [...prev.messages, ...messages]) byId.set(message.id, message)
    prev.messages = [...byId.values()].sort((left, right) => left.at - right.at)
  }
  return [...map.values()]
}

function idList(value) {
  if (!Array.isArray(value)) return []
  return value.filter((id) => typeof id === "string" && id)
}

export function mergeStore(current, incoming) {
  const deleted = new Set([...idList(current.deleted), ...idList(incoming.deleted)])
  const accounts = current.accounts.filter((account) => account?.id && !deleted.has(account.id)).map((account) => ({
    ...account,
    aliases: Array.isArray(account.aliases) ? account.aliases : [],
    passwordHashes: Array.isArray(account.passwordHashes) ? account.passwordHashes : [account.passwordHash].filter(Boolean),
    friends: Array.isArray(account.friends) ? account.friends : [],
    outgoing: Array.isArray(account.outgoing) ? account.outgoing : [],
  }))
  const remap = {}
  for (const raw of incoming.accounts || []) {
    if (!raw || typeof raw.name !== "string" || !raw.id || deleted.has(raw.id)) continue
    const match = accounts.find((account) => account.id === raw.id)
      || accounts.find((account) => sameName(account.name, raw.name))
    if (!match) {
      accounts.push({
        ...raw,
        aliases: Array.isArray(raw.aliases) ? raw.aliases : [],
        passwordHashes: Array.isArray(raw.passwordHashes) ? raw.passwordHashes : [raw.passwordHash].filter(Boolean),
        friends: Array.isArray(raw.friends) ? raw.friends : [],
        outgoing: Array.isArray(raw.outgoing) ? raw.outgoing : [],
      })
      continue
    }
    if (raw.id && raw.id !== match.id) remap[raw.id] = match.id
    const codes = new Set([match.code, ...(match.aliases || []), raw.code, ...(raw.aliases || [])].map(cleanCode).filter(isCode))
    if (match.code) codes.delete(cleanCode(match.code))
    match.aliases = [...codes]
    const incomingPasswordRev = Number(raw.passwordRev) || 0
    const currentPasswordRev = Number(match.passwordRev) || 0
    if (incomingPasswordRev > currentPasswordRev) {
      const hashes = (Array.isArray(raw.passwordHashes) ? raw.passwordHashes : [raw.passwordHash]).filter(Boolean)
      match.passwordHash = raw.passwordHash || hashes[0]
      match.passwordHashes = hashes
      match.passwordRev = incomingPasswordRev
    } else if (incomingPasswordRev === currentPasswordRev) {
      match.passwordHashes = [...new Set([...(match.passwordHashes || []), raw.passwordHash, ...(raw.passwordHashes || [])].filter(Boolean))]
    }
    const incomingPointRev = Number(raw.pointRev) || 0
    if (incomingPointRev > (Number(match.pointRev) || 0)) {
      match.pointAdjust = Number(raw.pointAdjust) || 0
      match.pointRev = incomingPointRev
    }
    const incomingProfileRev = Number(raw.profileRev) || 0
    if (incomingProfileRev > (Number(match.profileRev) || 0)) {
      if (typeof raw.displayName === "string" && raw.displayName.trim()) match.displayName = raw.displayName.trim()
      if (raw.avatar && typeof raw.avatar === "object") match.avatar = { ...raw.avatar }
      if (raw.avatarSet === true) match.avatarSet = true
      match.profileRev = incomingProfileRev
    }
    const incomingEmailRev = Number(raw.emailRev) || 0
    if (incomingEmailRev > (Number(match.emailRev) || 0)) {
      const email = cleanEmail(raw.email)
      const taken = accounts.some((account) => account !== match && (cleanEmail(account.email) === email || cleanEmail(account.name) === email))
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !taken) {
        if (String(match.name).includes("@")) match.name = email
        match.email = email
        match.emailRev = incomingEmailRev
      }
    }
    match.friends = [...new Set([...(match.friends || []), ...(raw.friends || [])])]
    match.outgoing = [...new Set([...(match.outgoing || []), ...(raw.outgoing || [])])]
  }
  const point = (id) => remap[id] || id
  for (const account of accounts) {
    const ids = new Set(accounts.map((item) => item.id))
    account.friends = [...new Set(account.friends.map(point))].filter((id) => id !== account.id && ids.has(id))
    account.outgoing = [...new Set(account.outgoing.map(point))].filter((id) => id !== account.id && ids.has(id) && !account.friends.includes(id))
  }
  const answers = { ...(current.answers || {}) }
  for (const [id, value] of Object.entries(incoming.answers || {})) {
    const key = point(id)
    const extra = value && typeof value === "object" ? value : {}
    answers[key] = { ...extra, ...(answers[key] || {}) }
  }
  const streaks = { ...(current.streaks || {}) }
  for (const [id, value] of Object.entries(incoming.streaks || {})) {
    const key = point(id)
    const next = value && typeof value === "object" ? value : {}
    const prev = streaks[key] && typeof streaks[key] === "object"
      ? { last: streaks[key].last || "", streak: Number(streaks[key].streak) || 0, setAt: Number(streaks[key].setAt) || 0 }
      : null
    const incoming = { last: next.last || "", streak: Number(next.streak) || 0, setAt: Number(next.setAt) || 0 }
    if (!prev || incoming.setAt > prev.setAt) streaks[key] = incoming
    else if (incoming.setAt === prev.setAt && incoming.streak > prev.streak) streaks[key] = { ...incoming, setAt: prev.setAt }
  }
  const threads = mergeThreads(current.threads, incoming.threads, point)
    .filter((thread) => !deleted.has(thread.fromId) && !deleted.has(thread.toId))
  const trials = mergeTrials(current.trials, incoming.trials, point)
  for (const id of deleted) {
    delete answers[id]
    delete streaks[id]
    delete trials[id]
  }
  return { accounts, answers, streaks, threads, trials, deleted: [...deleted], remap }
}
