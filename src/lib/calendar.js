export const HOLIDAYS = {
  "2026-10-29": "Cumhuriyet Bayramı",
  "2027-04-23": "Ulusal Egemenlik ve Çocuk Bayramı",
}

const BREAKS = [
  ["2026-11-16", "2026-11-20", "Ara tatil"],
  ["2027-01-25", "2027-02-05", "Yarıyıl tatili"],
  ["2027-03-08", "2027-03-12", "Ara tatil"],
]

/** MEB 2026-2027 taslak çerçeve planındaki ders haftaları. */
export const WEEK_RANGES = [
  ["2026-09-14", "2026-09-18"],
  ["2026-09-21", "2026-09-25"],
  ["2026-09-28", "2026-10-02"],
  ["2026-10-05", "2026-10-09"],
  ["2026-10-12", "2026-10-16"],
  ["2026-10-19", "2026-10-23"],
  ["2026-10-26", "2026-10-30"],
  ["2026-11-02", "2026-11-06"],
  ["2026-11-09", "2026-11-13"],
  ["2026-11-23", "2026-11-27"],
  ["2026-11-30", "2026-12-04"],
  ["2026-12-07", "2026-12-11"],
  ["2026-12-14", "2026-12-18"],
  ["2026-12-21", "2026-12-25"],
  ["2026-12-28", "2026-12-31"],
  ["2027-01-04", "2027-01-08"],
  ["2027-01-11", "2027-01-15"],
  ["2027-01-18", "2027-01-22"],
  ["2027-02-08", "2027-02-12"],
  ["2027-02-15", "2027-02-19"],
  ["2027-02-22", "2027-02-26"],
  ["2027-03-01", "2027-03-05"],
  ["2027-03-15", "2027-03-19"],
  ["2027-03-22", "2027-03-26"],
  ["2027-03-29", "2027-04-02"],
  ["2027-04-05", "2027-04-09"],
  ["2027-04-12", "2027-04-16"],
  ["2027-04-19", "2027-04-22"],
  ["2027-04-26", "2027-04-30"],
  ["2027-05-03", "2027-05-07"],
  ["2027-05-10", "2027-05-14"],
  ["2027-05-20", "2027-05-21"],
  ["2027-05-24", "2027-05-28"],
  ["2027-05-31", "2027-06-04"],
  ["2027-06-07", "2027-06-11"],
  ["2027-06-14", "2027-06-18"],
  ["2027-06-21", "2027-06-25"],
]

const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
const WEEKDAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

export function parseISO(iso) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export function formatISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function formatLong(iso) {
  const date = parseISO(iso)
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${WEEKDAYS[date.getDay()]}`
}

function datesBetween(start, end) {
  const out = []
  const cursor = parseISO(start)
  const last = parseISO(end)
  while (cursor <= last) {
    const day = cursor.getDay()
    if (day !== 0 && day !== 6) out.push(formatISO(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return out
}

export const SCHOOL_DAYS = WEEK_RANGES.flatMap(([start, end], index) =>
  datesBetween(start, end)
    .filter((iso) => !HOLIDAYS[iso])
    .map((iso) => ({ iso, week: index + 1 })),
)

const DAY_INDEX = new Map(SCHOOL_DAYS.map((day, index) => [day.iso, index]))

export function schoolDay(iso) {
  const index = DAY_INDEX.get(iso)
  return index === undefined ? null : SCHOOL_DAYS[index]
}

export function shiftSchoolDay(iso, direction) {
  const index = DAY_INDEX.get(iso)
  if (index === undefined) return null
  const next = SCHOOL_DAYS[index + direction]
  return next ? next.iso : null
}

export function nearestSchoolDay(from = new Date()) {
  const iso = formatISO(from)
  if (DAY_INDEX.has(iso)) return iso
  const next = SCHOOL_DAYS.find((day) => day.iso > iso)
  if (next) return next.iso
  return SCHOOL_DAYS[SCHOOL_DAYS.length - 1].iso
}

export function describeOffDay(iso) {
  if (HOLIDAYS[iso]) return HOLIDAYS[iso]
  const date = parseISO(iso)
  const day = date.getDay()
  if (day === 0 || day === 6) return "Hafta sonu"
  for (const [start, end, name] of BREAKS) {
    if (iso >= start && iso <= end) return name
  }
  if (iso < SCHOOL_DAYS[0].iso) return "Ders yılı henüz başlamadı"
  if (iso > SCHOOL_DAYS[SCHOOL_DAYS.length - 1].iso) return "Ders yılı bitti"
  if (iso === "2027-05-19") return "19 Mayıs"
  return "Bu tarihte ders yok"
}
