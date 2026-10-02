import { card, mc, numeric, slot } from "./util.js"
import { upperMath } from "./upper-math.js"

function sequence(count, maker) {
  return Array.from({ length: count }, (_, day) => maker(day))
}

function others(name, group) {
  return group.filter((item) => item !== name)
}

const ANGLE_NAMES = ["dar", "dik", "geniş", "doğru"]

function angleKind(degree) {
  if (degree === 90) return "dik"
  if (degree === 180) return "doğru"
  if (degree < 90) return "dar"
  return "geniş"
}

export function mathLesson(grade, title, dayCount) {
  const build = MATH[`${grade}|${title}`] || upperMath[`${grade}|${title}`]
  if (!build) throw new Error(`Matematik eksik: ${grade}. sınıf ${title}`)
  const lessons = build(dayCount)
  if (lessons.length !== dayCount) throw new Error(`${title} gün sayısı ${lessons.length}`)
  return lessons
}

const MATH = {
  "5|Temel geometrik çizimler"(n) {
    return g5Draw().slice(0, n)
  },
  "5|Açı ölçme"(n) {
    const degrees = [35, 90, 120, 180, 15, 89, 91, 150, 10, 170]
    const notes = [
      "Açıölçerin merkezi köşeye, sıfır çizgisi kollardan birine oturur. Diğer kolun hizasındaki sayı ölçüdür.",
      "Açıölçerde iki sayı sırası vardır. Kol 0’dan açıldıysa aynı yöndeki sıra okunur.",
      "Dar açı 0° ile 90° arasındadır. 90° dar değildir; tam dik açıdır.",
      "Dik açı tam 90°’dir. Bir derece eksik olsa dar, bir derece fazla olsa geniş olur.",
      "Geniş açı 90° ile 180° arasındadır. 180° geniş değil, doğru açıdır.",
      "Doğru açı 180°’dir. Tam tur 360° olduğu için doğru açı bir turun yarısıdır.",
      "Kolları uzun çizmek açıyı büyütmez. Açıölçer açıklığı okur, çizginin santimini değil.",
      "Bir doğru üzerinde komşu iki açının toplamı 180°’dir. Biri bilinirse diğeri çıkarma ile bulunur.",
      "Dik açıyı ikiye bölmek 45° verir. Doğru açıyı ikiye bölmek ise 90° verir.",
      "Küçük derece, ışınlar uzun çizilmiş olsa bile daha dar açıklıktır.",
    ]
    return sequence(n, (day) => {
      const degree = degrees[day]
      const kind = angleKind(degree)
      return card(
        `${degree}° hangi açıdır?`,
        [
          notes[day],
          `${degree}° şöyle adlandırılır: 90’dan küçükse dar, 90 ise dik, 90 ile 180 arasında ise geniş, 180 ise doğru. Bu ölçü ${kind} açıdır.`,
        ],
        `Bir kapı ${degree}° aralanırsa açıklığın adı ${kind} açıdır. Kapının boyu ölçüyü değiştirmez.`,
        [
          mc(`${degree}°’lik açı nasıldır?`, kind, others(kind, ANGLE_NAMES), `${degree}° ${kind} açı sınıfına girer.`, slot(day)),
          numeric(`${degree}°’lik açının kolları uzatılırsa ölçü kaç derece olur?`, degree, [15, -8, 40], "Kolun çizim boyu açıklığı değiştirmez.", day + 1),
          mc(`${degree}° ölçülürken ters skala okunursa ne olur?`, "Açının 180°’ye tamamlayanı okunur", ["Ölçü santimetre olur", "Köşe kaybolur", "Açı doğruya döner"], "İki skala birbirini 180°’ye tamamlar. Yanlış sıra, açının bütünleyenini verir.", slot(day + 2)),
        ],
      )
    })
  },
  "5|Çokgenler ve çember"(n) {
    return sequence(n, (day) => polygonDay(day))
  },
  "5|Çok basamaklı sayıları okuma ve yazma"(n) {
    const nums = [1408, 3050, 12760, 40002, 250419]
    return sequence(n, (day) => {
      const value = nums[day]
      const text = readTr(value)
      return card(
        `${value} nasıl okunur?`,
        [
          "Çok basamaklı sayıda her rakamın yeri bir basamaktır. Okurken binlik ve yüzlük grupları ayırırız; içi boş basamaklara sıfır koyarız ama sıfırı ‘yüz’ diye okumayız.",
          `${value} sayısı «${text}» diye okunur. Sıfır, o basamakta bir şey olmadığını söyler ve yanındaki basamağın yerini kaydırmaz.`,
        ],
        `«${text}» yazılırken rakamlar soldan, en büyük basamaktan dizilir: ${value}.`,
        [
          mc(`${value} nasıl okunur?`, text, wrongReads(value), "Sıfırlar atlanır ama basamak sırası korunur.", slot(day)),
          mc(`«${text}» rakamla hangisidir?`, String(value), wrongDigits(value), "Okunuştaki binlik ve yüzlük, rakamların yerine karşılık gelir.", slot(day + 1)),
          mc(`${value} sayısındaki 0 basamağı okunurken söylenir mi?`, "Hayır, yer tutar ama adı söylenmez", ["Evet, ‘sıfır yüz’ denir", "Evet, sayıyı böler", "Sayı silinir"], "0, solundaki rakamın basamağını korur; kendi adı okunmaz.", slot(day + 2)),
        ],
      )
    })
  },
  "5|Basamak değeri"(n) {
    const nums = [4826, 9071, 3504, 6280, 15439]
    const places = [
      [1000, "binler"],
      [100, "yüzler"],
      [10, "onlar"],
      [1, "birler"],
      [1000, "binler"],
    ]
    return sequence(n, (day) => {
      const value = nums[day]
      const [place, name] = places[day]
      const digit = Math.floor(value / place) % 10
      const worth = digit * place
      return card(
        `${value} sayısında ${name} basamağı`,
        [
          "Rakam, yazılan semboldür. Basamak değeri, o rakamın bulunduğu yere göre ettiği sayıdır. 4 ile 400 aynı sembol değildir; 4 birler basamağındaysa 4, yüzler basamağındaysa 400 eder.",
          `${value} sayısında ${name} basamağındaki rakam ${digit}’dir. Değeri ${digit} × ${place} = ${worth} eder.`,
        ],
        `${digit} rakamı ${name} basamağında ${worth} değerindedir. Yanındaki basamağa kaydırmak bu değeri on kat değiştirir.`,
        [
          numeric(`${value} sayısında ${name} basamağının değeri kaçtır?`, worth, [digit - worth, place, -place], `${digit} × ${place} = ${worth}. Rakamın kendisi ile değerini karıştırma.`, day),
          numeric(`${value} sayısında ${name} basamağında yazan rakam kaçtır?`, digit, [1, -1, 2], "Rakam, o basamakta gördüğün tek semboldür. Değer, rakamın basamakla çarpımıdır.", day + 1),
          mc(`${value} sayısında rakam ile basamak değeri aynı şey midir?`, "Hayır", ["Evet", "Yalnız 0 için", "Yalnız birler için"], "Rakam semboldür. Değer, sembolün konumundan gelir.", slot(day + 2)),
        ],
      )
    })
  },
  "5|Doğal sayılarla problem çözme"(n) {
    return sequence(n, (day) => wordProblem(day))
  },
  "5|Dikdörtgenin çevresi ve alanı"(n) {
    return sequence(n, (day) => rectDay(day))
  },
  "5|Kesirlerin gösterimleri"(n) {
    return sequence(n, (day) => fractionShow(day))
  },
  "5|Kesirleri karşılaştırma"(n) {
    return sequence(n, (day) => fractionCompare(day))
  },
  "5|Kategorik veri"(n) {
    return sequence(n, (day) => categoryDay(day))
  },
  "5|İşlem özellikleri ve örüntü"(n) {
    return sequence(n, (day) => patternDay(day))
  },
  "5|Öznel olasılık"(n) {
    return sequence(n, (day) => chanceDay(day))
  },
  "5|Yıl sonu tekrarı"(n) {
    return sequence(n, (day) => review5(day))
  },
}

function g5Draw() {
  return [
    card(
      "Nokta bir konumdur",
      [
        "Nokta yalnızca bir yeri gösterir. Uzunluğu, alanı ve kalınlığı yoktur. Noktaları karıştırmamak için büyük harfle adlandırırız.",
        "A ve B farklı yerlerdeyse iki ayrı noktadır. Aralarındaki uzaklık noktanın kendisi değil, sonradan çizeceğin doğru parçasının uzunluğudur.",
      ],
      "Defterde A diye işaretlediğin yer bir noktadır. Kalemi bastırınca oluşan leke, noktaya alan kazandırmaz.",
      [
        mc("Nokta ne belirtir?", "Yalnızca bir konum", ["Bir uzunluk", "Bir alan", "Bir açı"], "Noktanın ölçüsü yoktur. Ölçülen şey, noktalar arasına çizilen parçadır.", 0),
        mc("Noktalar nasıl adlandırılır?", "Büyük harfle", ["Yalnız rakamla", "Küçük harfle zorunlu", "Hiç adlandırılmaz"], "A, B, C büyük harfleri noktayı konuşurken ayırt eder.", 1),
        mc("Aynı yeri gösteren iki işaret nedir?", "Aynı noktadır", ["Bir doğrudur", "Bir açıdır", "Bir çemberdir"], "Konum aynıysa nokta aynıdır.", 2),
      ],
    ),
    card(
      "Doğru iki yöne sonsuz gider",
      [
        "Doğrunun ucu yoktur. Çizimin iki yanındaki oklar, kâğıt bitsin diye doğrunun bitmediğini söyler.",
        "A ve B’den geçen doğru bu iki noktada durmaz. A’nın gerisinde ve B’nin ötesinde de noktalar vardır.",
      ],
      "Cetvelle çektiğin çizgi kâğıtta biter. Doğru modeli, çizginin iki yöne de sürdüğünü kabul eder.",
      [
        mc("Doğru için hangisi doğrudur?", "İki yöne sonsuz uzar", ["İki ucu bellidir", "Tek yöne gider", "Yalnız iki nokta içerir"], "Ucu olmayan çizgi doğrudur.", 0),
        mc("Kâğıda kısa çizmek doğruyu kısaltır mı?", "Hayır, o bir modeldir", ["Evet", "Evet, ışın olur", "Evet, nokta olur"], "Model, sonsuz doğrunun görünen kısmıdır.", 3),
        mc("A ve B’den geçen doğru nerede biter?", "Bitmez", ["A’da", "B’de", "İkisinin ortasında"], "A ve B doğrunun üzerindeki iki noktadır, uçları değildir.", 1),
      ],
    ),
    card(
      "Doğru parçasının iki ucu vardır",
      [
        "Doğru parçası, doğrunun iki nokta arasında kalan sonlu kısmıdır. AB denince A ve B uçları da parçaya dâhildir.",
        "Uzunluk ancak doğru parçasında söylenir. Doğrunun uzunluğu yoktur; çünkü uçları yoktur.",
      ],
      "Kapıdan tahtaya kadar olan kenar bir doğru parçasıdır. Kapı ve tahta iki uçtur.",
      [
        mc("AB doğru parçası nedir?", "A ile B arasındaki sonlu parça", ["A’dan sonsuza giden ışın", "İki yöne sonsuz doğru", "Yalnız A"], "İki uç belli ise parça ölçülebilir.", 2),
        mc("Hangisinin uzunluğu cetvelle bulunur?", "Doğru parçası", ["Doğru", "Nokta", "Düzlem"], "Cetvel iki uç arasındaki uzaklığı ölçer.", 0),
        mc("Uçlar parçaya dâhil midir?", "Evet, ikisi de", ["Hayır", "Yalnız biri", "Yalnız orta nokta"], "AB parçası A’da başlar ve B’de biter.", 1),
      ],
    ),
    card(
      "Işın bir noktadan başlar",
      [
        "Işının bir başlangıcı vardır ve yalnız bir yöne sonsuz gider. Başlangıcın gerisi ışına dâhil değildir.",
        "AB ışını A’da başlar, B yönünde gider. BA ışını B’de başlar. Aynı çizgi üzerinde durmaları aynı ışın oldukları anlamına gelmez.",
      ],
      "Fener ışığı bir noktadan çıkıp koridorda tek yöne gider. Bu, ışın modeline benzer.",
      [
        mc("Işın nasıl tanımlanır?", "Bir başlangıcı vardır, bir yöne sonsuzdur", ["İki ucu bellidir", "İki yöne sonsuzdur", "Hiç noktası yoktur"], "Tek başlangıç, ışını doğrudan ayırır.", 0),
        mc("AB ışını ile BA ışını neden karışır?", "Başlangıçları farklı olabilir", ["İkisi de noktadır", "İkisinin uzunluğu vardır", "İkisi de kapalıdır"], "Adın ilk harfi başlangıçtır. Yön tersine döner.", 2),
        mc("Işın başlangıcın gerisine gider mi?", "Hayır", ["Evet", "Yalnız ölçülünce", "Yalnız doğru parçasıysa"], "Işın tek yönlüdür.", 3),
      ],
    ),
    card(
      "Üç çizimi ayırmak",
      [
        "Sorulacak tek şey vardır: uç var mı, kaç tane? İki uç doğru parçası, bir başlangıç ışın, hiç uç yoksa doğrudur.",
        "Krokide ok iki taraftaysa doğru, tek taraftaysa ışın, iki nokta sınırı çizilmiş ve ok yoksa doğru parçasıdır.",
      ],
      "İki ağaç arasına gerilen ipin iki ucu bağlıysa doğru parçasıdır. İpin uçları serbest ve sonsuz düşünülürse doğru modeli olur.",
      [
        mc("İki oku olan çizim hangisidir?", "Doğru", ["Işın", "Doğru parçası", "Nokta"], "İki yön de sınırsızsa doğru çizilir.", 1),
        mc("Tek başlangıcı olan hangisidir?", "Işın", ["Doğru", "Doğru parçası", "Çember"], "Tek yön, ışının işaretidir.", 0),
        mc("Cetvelle uzunluğu bulunan hangisidir?", "Doğru parçası", ["Doğru", "Işın", "Nokta"], "Ölçmek için iki uç şarttır.", 2),
      ],
    ),
    card(
      "Açı bir açıklıktır",
      [
        "Açı, aynı noktadan çıkan iki ışının arasındaki açıklıktır. Işınları uzun çizmek açıyı büyütmez.",
        "Kapıyı az aralamak küçük, çok aralamak büyük açıklık verir. Kapının eni aynı kalır.",
      ],
      "Makasın kolları ortak vidadan çıkar. Kollar uzamaz, araları açılır. O ara açıdır.",
      [
        mc("Açıyı ne belirler?", "İki ışın arasındaki açıklık", ["Işınların çizim boyu", "Kâğıdın kenarı", "Kalemin rengi"], "Işınlar sonsuz sayılır. Ölçülen açıklıktır.", 0),
        mc("Açı nasıl oluşur?", "Ortak başlangıçlı iki ışınla", ["İki ayrı noktayla", "Tek ışınla", "Bir kirişle"], "Kolların başlangıcı aynı köşedir.", 1),
        mc("Kolları uzun çizmek açıyı büyütür mü?", "Hayır", ["Evet, iki kat", "Evet, doğru olur", "Yalnız cetvelle"], "Uzun çizmek modeli değiştirir, açıklığı değil.", 3),
      ],
    ),
    card(
      "Köşe ve kollar",
      [
        "Kolların ortak başlangıcına köşe denir. Köşe bir noktadır. Kollar o noktadan çıkan ışınlardır.",
        "BAC açısında orta harf köşedir: A. Kollar AB ve AC ışınlarıdır. Harflerin yerini değiştirmek başka köşeyi gösterir.",
      ],
      "BAC yazılırken A ortaya gelir. B ve C kolların üzerinde alınan noktalardır.",
      [
        mc("BAC açısının köşesi hangisidir?", "A", ["B", "C", "BC’nin ortası"], "Üç harfli adda ortadaki harf köşedir.", 0),
        mc("Açının kolları nedir?", "Köşeden çıkan iki ışın", ["İki köşe", "Bir kiriş", "Çember yayı"], "Kol ışındır. Köşe onların ortak noktasıdır.", 2),
        mc("Köşe nedir?", "Bir nokta", ["Bir uzunluk", "Bir alan", "Bir çember"], "Köşenin ölçüsü yoktur.", 1),
      ],
    ),
    card(
      "Yarıçap ve çap",
      [
        "Çember, merkeze eşit uzaklıktaki noktalardır. Bu uzaklığa yarıçap denir. Çap, merkezden geçen kiriştir ve iki yarıçap uzunluğundadır.",
        "Yarıçap 6 cm ise çap 12 cm’dir. Çapı ikiye bölmek yarıçapı verir. Yarıçapı yeniden ikiye bölmek sık yapılan hatadır.",
      ],
      "Tekerleğin merkezinden lastiğe 6 cm varsa, merkezden geçerek karşı lastiğe 12 cm vardır.",
      [
        numeric("Yarıçapı 6 cm olan çemberin çapı kaç cm’dir?", 12, [-6, 6, -9], "Çap = 2 × 6 = 12. 6 yarıçapın kendisidir.", 0, "cm"),
        numeric("Çapı 14 cm olan çemberin yarıçapı kaç cm’dir?", 7, [7, 21, -2], "Yarıçap = 14 ÷ 2 = 7.", 1, "cm"),
        mc("Çap nedir?", "Merkezden geçen kiriş", ["Merkeze değmeyen kiriş", "Bir nokta", "Bir açı"], "Çapın iki ucu çemberdedir ve orta noktası merkezdir.", 2),
      ],
    ),
    card(
      "Kiriş",
      [
        "İki ucu da çember üzerinde olan doğru parçasına kiriş denir. Merkezden geçmesi şart değildir. Geçenine çap denir ve o en uzun kiriştir.",
        "Merkeze yaklaşan kiriş uzar. Ucu çemberin içinde kalan parça kiriş olmaz.",
      ],
      "Pizzayı kenardan kenara, merkezden saparak kesmek bir kiriştir. Bıçak merkezden geçerse kesim çaptır.",
      [
        mc("Kirişin uçları nerededir?", "İkisi de çemberde", ["İkisi de merkezde", "Biri dışarıda", "İkisi de iç bölgede"], "Kiriş çemberin iki noktasını birleştirir.", 0),
        mc("En uzun kiriş hangisidir?", "Çap", ["Yarıçap", "Merkeze en uzak kiriş", "Teğet"], "Merkezden geçen kiriş en uzundur.", 1),
        mc("Merkezden çembere çizilen parça nedir?", "Yarıçap", ["Çap", "Kiriş", "Teğet"], "Yarıçapın bir ucu merkezdir. Kirişin iki ucu da çemberdedir.", 3),
      ],
    ),
    card(
      "Dikme",
      [
        "Bir doğruya dik inen doğru, kesişme yerinde 90° oluşturur. Pergel veya gönye bu dikmeyi kurmak için kullanılır.",
        "Gönye’nin dik köşesi 90°’dir. Sivri köşeyi dayamak dikme çizmez.",
      ],
      "Yere dik duran kapı pervazı, yer çizgisiyle 90° yapar. Eğik değnek dikme değildir.",
      [
        numeric("Dikmenin oluşturduğu açı kaç derecedir?", 90, [-45, 90, -90], "Dik kesişmenin ölçüsü 90°’dir.", 0),
        mc("Gönye ne işe yarar?", "90° çizmek", ["Çap ölçmek", "Nokta adlandırmak", "Doğruyu kısaltmak"], "Gönye dik açıyı kâğıda taşır.", 2),
        mc("Her kesişen doğru dik midir?", "Hayır, açı 90° olmalıdır", ["Evet", "Evet, kısa iseler", "Evet, doğru oldukları için"], "Dikme, dik açılı kesişmedir.", 1),
      ],
    ),
  ]
}

function polygonDay(day) {
  if (day < 5) {
    const sides = [3, 4, 5, 6, 8][day]
    const name = ["üçgen", "dörtgen", "beşgen", "altıgen", "sekizgen"][day]
    return card(
      `${name} kapalı bir çokgendir`,
      [
        "Çokgen, doğru parçalarının uç uca kapanmasıyla oluşur. Kenar sayısı köşe sayısına eşittir. Bir kenarı açık kalan çizim çokgen değildir.",
        `${name} ${sides} kenarlı ve ${sides} köşelidir. Kenarı bir eksik saymak, köşelerden birini atlamaktır.`,
      ],
      `${name} çizerken ${sides} doğru parçasını ilk köşeye geri döndürerek kapatırsın.`,
      [
        numeric(`${name} kaç kenarlıdır?`, sides, [1, -1, 2], "Ad, kenar sayısını söyler.", day),
        numeric(`${name} kaç köşelidir?`, sides, [-1, 1, 3], "Her kenar bir köşede biter. Sayılar eşittir.", day + 1),
        mc(`${name} çiziminin kapanması ne demektir?`, "Son kenar ilk köşeye döner", ["Bir kenar açık kalır", "Şekil çember olur", "Yalnız iki noktası kalır"], "Açık çizim çokgen sayılmaz. Son doğru parçası ilk köşeye bağlanır.", slot(day + 2)),
      ],
    )
  }
  if (day === 5) {
    return card(
      "Kare düzgün dörtgendir",
      [
        "Düzgün çokgende bütün kenarlar ve bütün iç açılar eşittir. Kare bu iki şartı da sağlar. Dikdörtgenin açıları dik olabilir ama komşu kenarları eşit değilse düzgün değildir.",
        "Kenarları 5 cm, 5 cm, 8 cm, 8 cm olan dörtgenin açıları dik olsa bile kare olmaz. Karede dört kenar da aynı uzunluktadır.",
      ],
      "Yer karosu kareyse dört kenar da aynı kesilir ve köşeler 90° olur.",
      [
        mc("Kare neden düzgündür?", "Dört kenarı ve dört açısı eşittir", ["Yalnız renkleri aynıdır", "Yalnız iki kenarı eşittir", "Açıları yoktur"], "Düzgünlük hem kenarda hem iç açıda eşitlik ister.", 0),
        mc("Kenarları eşit olmayan dikdörtgen düzgün müdür?", "Hayır", ["Evet", "Yalnız büyükse", "Yalnız kâğıttaysa"], "Açıları eşit olsa da kenarlar eşit değilse düzgün sayılmaz.", 1),
        mc("Düzgün çokgende neler eşittir?", "Kenarlar ve iç açılar", ["Yalnız alanı", "Yalnız çevresi", "Yalnız rengi"], "Şekil döndürülünce kenar ve açı ayırt edilmez.", 2),
      ],
    )
  }
  if (day < 9) {
    const rows = [
      [[5, 5, 5], "eşkenar"],
      [[6, 6, 10], "ikizkenar"],
      [[3, 4, 5], "çeşitkenar"],
    ][day - 6]
    const [a, b, c] = rows[0]
    const name = rows[1]
    return card(
      `${a}, ${b} ve ${c} cm’lik üçgen`,
      [
        "Kenarlarına göre üçgen eşkenar, ikizkenar veya çeşitkenar olur. Üç kenar eşitse eşkenar, tam iki kenar eşitse ikizkenar, üçü de farklıysa çeşitkenardır.",
        `${a} cm, ${b} cm ve ${c} cm kenarlı üçgen ${name} üçgendir. Eşkenar üçgenin her açısı 60°’dir; bir açısı 90° ise üç kenar eşit olamaz.`,
      ],
      "6, 6 ve 6 cm eşkenardır. 6, 6 ve 10 cm ikizkenardır. 3, 4 ve 5 cm çeşitkenardır.",
      [
        mc(`Kenarları ${a}, ${b} ve ${c} cm olan üçgen nasıldır?`, name, others(name, ["eşkenar", "ikizkenar", "çeşitkenar", "kenarları eşit olmayan kare"]), "Eşit kenar sayısına bak: üçü eşitse eşkenar, ikisi eşitse ikizkenar.", slot(day)),
        mc(`${a}-${b}-${c} cm üçgen eşkenar olsaydı her açı kaç derece olurdu?`, "60", ["90", "45", "180"], "Üç eşit açı 180°’yi paylaşır: 180 ÷ 3 = 60.", slot(day + 1)),
        mc(`${a}, ${b} ve ${c} cm kenarlı üçgenin bir açısı 90° ise eşkenar olabilir mi?`, "Hayır", ["Evet", "Yalnız küçükse", "Yalnız ikizkenarsa"], "Eşkenarda açılar 60°’dir. 90°’lik açı üç kenarın eşit olmasına izin vermez.", slot(day + 2)),
      ],
    )
  }
  if (day < 12) {
    const rows = [
      [90, "dik açılı", "Bir açı tam 90°’dir."],
      [120, "geniş açılı", "Bir açı 90°’den büyüktür."],
      [60, "dar açılı", "Üç açı da 90°’den küçüktür."],
    ][day - 9]
    return card(
      rows[1],
      [
        "Açılarına göre üçgen dar açılı, dik açılı veya geniş açılı olur. Bir üçgende en fazla bir geniş ya da bir dik açı bulunabilir; çünkü iç açılar toplamı 180°’dir.",
        `${rows[0]}°’lik bir açısı olan üçgen ${rows[1]} üçgendir. ${rows[2]}`,
      ],
      "30-60-90 üçgeni dik açılıdır. 20-30-130 üçgeni geniş açılıdır. 50-60-70 üçgeni dar açılıdır.",
      [
        mc(`${rows[0]}°’lik açısı olan üçgen nasıldır?`, rows[1], others(rows[1], ["dar açılı", "dik açılı", "geniş açılı", "eşkenar"]), rows[2], slot(day)),
        numeric(`${rows[0]}°’lik açısı olan üçgende iç açılar toplamı kaç derecedir?`, 180, [-90, 90, -60], "Hangi üçgen olursa olsun üç iç açının toplamı 180°’dir.", day),
        mc(`${rows[0]}° dışında ikinci bir dik açı daha sığar mı?`, "Hayır, toplam 180°’yi aşar", ["Evet", "Yalnız eşkenarda", "Yalnız büyük çizimde"], "90 + 90 = 180 eder ve üçüncü açıya yer kalmaz.", slot(day + 1)),
      ],
    )
  }
  if (day === 12) {
    return card(
      "Kesişen eş çemberler",
      [
        "İki çemberin yarıçapı eşit ve merkezler arası uzaklık da bu yarıçapa eşitse, iki merkez ile bir kesişim noktası eşkenar üçgen kurar. Üç kenar da aynı yarıçaptır.",
        "Yarıçap 4 cm ve merkezler arası 4 cm ise oluşan üçgenin her kenarı 4 cm’dir. Merkezler arası yarıçaptan farklıysa üçgen eşkenar olmaz.",
      ],
      "Pergeli 4 cm açıp iki merkezi de 4 cm aralıkla seçmek, kesişimde 4-4-4 üçgeni verir.",
      [
        mc("Merkezler ve kesişim neden eşkenar üçgen olur?", "Üç kenar da yarıçapa eşittir", ["Üç açı 90°’dir", "Kenarlar çaptır", "Şekil karedir"], "Merkezler arası ve iki yarıçap aynı uzunluktadır.", 0),
        numeric("Yarıçap 4 cm ve merkezler arası 4 cm ise üçgenin bir kenarı kaç cm’dir?", 4, [2, 4, 8], "Kenar yarıçapa eşittir. 8 çap olurdu.", 1, "cm"),
        mc("Merkezler arası uzaklık yarıçaptan büyükse üçgen eşkenar mıdır?", "Hayır", ["Evet", "Yalnız kesişirlerse evet", "Her zaman"], "Eşkenarlık üç kenarın eşitliğini ister.", 2),
      ],
    )
  }
  const radius = 11 + (day - 13)
  const diameter = radius * 2
  return card(
    `Yarıçap ${radius} cm`,
    [
      "Çemberde yarıçap merkezden çembere, çap merkezden geçerek iki yöne birer yarıçaptır. Kirişin iki ucu çemberdedir; merkezden geçmiyorsa çaptan kısadır.",
      `Yarıçap ${radius} cm ise çap ${diameter} cm’dir. Çapı yarıçap sanmak, ikiyle çarpmayı unutmaktır.`,
    ],
    `${radius} cm yarıçaplı bir saat kadranının çapı ${diameter} cm’dir.`,
    [
      numeric(`Yarıçapı ${radius} cm olan çemberin çapı kaç cm’dir?`, diameter, [-radius, radius, radius * 2], `Çap = 2 × ${radius} = ${diameter}.`, day, "cm"),
      numeric(`Çapı ${diameter} cm olan çemberin yarıçapı kaç cm’dir?`, radius, [radius, diameter, -1], `Yarıçap = ${diameter} ÷ 2 = ${radius}.`, day + 1, "cm"),
      mc(`Yarıçapı ${radius} cm olan çemberde merkezden geçmeyen kiriş çap olabilir mi?`, "Hayır", ["Evet", "Yalnız uzunsa", "Yalnız yataysa"], "Çap, merkezden geçen kiriştir. Merkeze uğramayan parça daha kısadır.", slot(day)),
    ],
  )
}

function readTr(value) {
  const ones = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"]
  const tens = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"]
  function under1000(num, thousands) {
    const hundred = Math.floor(num / 100)
    const ten = Math.floor((num % 100) / 10)
    const one = num % 10
    const parts = []
    if (hundred) parts.push(hundred === 1 && !thousands ? "yüz" : `${ones[hundred]} yüz`.trim())
    if (ten) parts.push(tens[ten])
    if (one) parts.push(one === 1 && thousands ? "" : ones[one])
    return parts.filter(Boolean).join(" ")
  }
  if (value < 1000) return under1000(value, false)
  const thousand = Math.floor(value / 1000)
  const rest = value % 1000
  const left = thousand === 1 ? "bin" : `${under1000(thousand, true)} bin`
  return rest ? `${left} ${under1000(rest, false)}` : left
}

function fractionWrongs(correct, candidates) {
  const wrongs = []
  for (const item of candidates) {
    const text = String(item)
    if (text !== String(correct) && !wrongs.includes(text)) wrongs.push(text)
    if (wrongs.length === 3) break
  }
  if (wrongs.length !== 3) throw new Error(`kesir şıkları yetmedi: ${correct}`)
  return wrongs
}

function wrongReads(value) {
  const correct = readTr(value)
  const wrongs = []
  for (const item of [value + 10, value + 100, value + 1000, value - 10, value + 11, value + 2000]) {
    if (item <= 0) continue
    const text = readTr(item)
    if (text !== correct && !wrongs.includes(text)) wrongs.push(text)
    if (wrongs.length === 3) return wrongs
  }
  throw new Error(`okunuş şıkları yetmedi: ${value}`)
}

function wrongDigits(value) {
  return [String(value + 10), String(value + 100), String(value + 1000)]
}

function wordProblem(day) {
  const problems = [
    () => {
      const a = 28
      const b = 17
      return pack("Toplam kilo", `${a} kilo elma ve ${b} kilo armut satıldı.`, a + b, "Toplama", `${a} + ${b}`, "kilo", day)
    },
    () => pack("Kalan kasa", "64 kasadan 19’u satıldı.", 64 - 19, "Çıkarma", "64 − 19", "kasa", day),
    () => pack("Kutu sayısı", "Bir rafta 8 sıra ve her sırada 6 kutu var.", 8 * 6, "Çarpma", "8 × 6", "kutu", day),
    () => pack("Paylaştırma", "36 kalem 4 öğrenciye eşit paylaştırılıyor.", 36 / 4, "Bölme", "36 ÷ 4", "kalem", day),
    () => pack("İki adım", "Ali’nin 45 lirası vardı. 18 lira harcadı, sonra 12 lira daha buldu.", 45 - 18 + 12, "Önce çıkarma, sonra toplama", "45 − 18 + 12", "lira", day),
    () => pack("Fark", "Bir rafta 52, diğerinde 37 kitap var.", 52 - 37, "Çok olanın farkı", "52 − 37", "kitap", day),
    () => pack("İkiye bölmek", "48 elma iki sepete eşit konuyor.", 24, "Yarısı", "48 ÷ 2", "elma", day),
    () => pack("İki kat", "Bir fidan 9 cm. İki katı isteniyor.", 18, "İkiyle çarpma", "9 × 2", "cm", day),
    () => pack("Grup", "7 paketin her birinde 5 defter var.", 35, "Çarpma", "7 × 5", "defter", day),
    () => {
      const boxes = Math.floor(47 / 5)
      const left = 47 % 5
      return card(
        "Kalanlı paylaştırma",
        [
          "Eşit paylaştırınca artan oluyorsa hem bölüm hem kalan yazılır. Kalan, bölen kadar veya ondan büyük olamaz.",
          "47 kalem 5’erli kutuya konursa 9 kutu dolar ve 2 kalem artar. Çünkü 5 × 9 = 45 ve 47 − 45 = 2.",
        ],
        "Kalan 5 veya daha büyük çıksaydı bir kutu daha doldurulurdu.",
        [
          numeric("47 kalem 5’erli kutuya konursa kaç kutu dolar?", boxes, [1, -1, left], "5 × 9 = 45. 47’ye en yakın dolu grup 9 kutudur.", day),
          numeric("Kaç kalem artar?", left, [5, 3, -2], "47 − 45 = 2. Kalan bölenden küçük olmalıdır.", day + 1),
          mc("Kalan bölene eşit çıkarsa ne yapılır?", "Bir grup daha sayılır, kalan 0 olur", ["Kalan silinir", "Bölme durur", "Sayı ikiye katlanır"], "Kalan bölenden küçük değilse bölüm eksiktir.", slot(day)),
        ],
      )
    },
    () => pack("Para üstü", "100 liralıkla 64 liralık alışveriş yapıldı.", 36, "Para üstü çıkarmadır", "100 − 64", "lira", day),
    () => pack("Dakika", "Bir iş 25 dakika, diğeri 40 dakika sürüyor.", 65, "Süreler toplanır", "25 + 40", "dakika", day),
    () => pack("Üç gün", "Pazartesi 18, salı 21, çarşamba 16 ekmek satıldı.", 18 + 21 + 16, "Üç günün toplamı", "18 + 21 + 16", "ekmek", day),
    () => pack("Eksik toplanan", "Bir sayıya 27 eklenince 80 oluyor.", 80 - 27, "Eksiği bulmak çıkarmadır", "80 − 27", "", day),
    () =>
      card(
        "Sonucu kontrol",
        [
          "İşlem bitince sorunun sorduğu birime ve büyüklüğe bak. 20 kişilik bir sınıfta ‘200 sıra kaldı’ diyorsan işlem değil, problem seçimi yanlıştır.",
          "48 − 19 = 29. 29, 48’den küçük olmalıdır; çıkarma sonucu başlangıçtan büyük çıkıyorsa işaret ters alınmıştır.",
        ],
        "Toplama sonucu parçalardan büyük, çıkarma sonucu eksilen sayıdan küçüktür.",
        [
          mc("48’den 19 çıkarılınca sonuç 48’den büyük olabilir mi?", "Hayır", ["Evet", "Yalnız ondalıkta", "Yalnız sıfırda"], "Çıkarma, eksileni küçültür.", 0),
          numeric("48 − 19 kaçtır?", 29, [10, -10, 19], "48 − 19 = 29. 67 toplama olurdu.", day),
          mc("Problemin birimi neden kontrol edilir?", "Sorulan nicelikle aynı mı diye", ["İşlem uzasın diye", "Rakam silinsin diye", "Sıfır eklensin diye"], "Kilo sorulmuşsa cevap lira olamaz.", 1),
        ],
      ),
  ]
  return problems[day]()
}

function pack(title, story, value, name, expr, suffix, day) {
  const shown = suffix ? `${value} ${suffix}` : String(value)
  return card(
    title,
    [
      "Problemde önce sorulan niceliği, sonra hangi işlemin onu verdiğini seç. Toplama birleştirir, çıkarma farkı veya kalanı, çarpma eşit grupları, bölme eşit paylaştırmayı verir.",
      `${story} Burada ${name.toLocaleLowerCase("tr")} işlemi gerekir: ${expr} = ${shown}.`,
    ],
    `${expr} = ${shown}. Sorulan birim ${suffix || "adet"} ile yazılır.`,
    [
          numeric(`${story} Sonuç kaçtır?`, value, [10, -5, value], `${name} işleminin sonucu ${expr} = ${value} eder.`, day, suffix),
      mc(`«${story}» cümlesinde asıl işlem hangisidir?`, name, others(name, ["Toplama", "Çıkarma", "Çarpma", "Bölme", "Önce çıkarma, sonra toplama", "Yarısı", "İkiyle çarpma", "Çok olanın farkı", "Para üstü çıkarmadır", "Süreler toplanır", "Üç günün toplamı", "Eksiği bulmak çıkarmadır"]).slice(0, 3), "İşlem, hikâyedeki birleştirme, ayırma veya grup ilişkisine göre seçilir.", slot(day + 1)),
      mc(`«${story}» sonucunu nasıl kontrol edersin?`, "Sorulan birimle ve büyüklükle karşılaştırırım", ["Yalnız ilk sayıyı yazarım", "İşlemi silerim", "Birimi değiştiririm"], "Cevap, sorunun istediği nicelikten mantıksız derecede uzaksa işlem seçimi yanlıştır.", slot(day + 2)),
    ],
  )
}

function rectDay(day) {
  const pairs = [
    [8, 3], [6, 4], [10, 2], [7, 5], [9, 4], [12, 3], [5, 5], [11, 4], [15, 2], [6, 6], [9, 7], [14, 5],
    [8, 5], [13, 4], [7, 7], [16, 3], [10, 6], [9, 3], [12, 5], [8, 8], [11, 6], [15, 4], [20, 5], [18, 6],
  ]
  const [length, width] = pairs[day]
  const perimeter = 2 * (length + width)
  const area = length * width
  const mode = day % 3
  const title = mode === 0 ? "Çevre kenarların toplamıdır" : mode === 1 ? "Alan içi kaplar" : "Çit çevre, halı alandır"
  const ask = mode === 0 ? perimeter : mode === 1 ? area : perimeter
  const unit = mode === 1 ? "cm²" : "cm"
  const expr = mode === 1 ? `${length} × ${width}` : `2 × (${length} + ${width})`
  return card(
    title,
    [
      "Çevre, dikdörtgenin dört kenarının toplamıdır: 2 × (uzun + kısa). Alan, içinin kaç birim kare kapladığıdır: uzun × kısa. Aynı sayılar iki farklı nicelik verir.",
      `${length} cm ve ${width} cm kenarlı dikdörtgende çevre ${perimeter} cm, alan ${area} cm²’dir. ${expr} işlemi ${mode === 1 ? "alanı" : "çevreyi"} verir.`,
    ],
    mode === 1
      ? `${length} × ${width} = ${area} cm². Bu sayı halının kapladığı yerdir, çitin boyu değil.`
      : `2 × (${length} + ${width}) = ${perimeter} cm. Bu sayı çitin boyudur, halının alanı değil.`,
    [
      numeric(`${length} cm ve ${width} cm kenarlı dikdörtgenin ${mode === 1 ? "alanı" : "çevresi"} kaçtır?`, ask, [length + width, area - perimeter, length * 2], `${expr} = ${ask}. Çevre ile alanı karıştırma.`, day, unit),
      numeric(`${length} cm ve ${width} cm kenarlı dikdörtgenin ${mode === 1 ? "çevresi" : "alanı"} kaçtır?`, mode === 1 ? perimeter : area, [10, -4, length], mode === 1 ? `Çevre 2 × (${length} + ${width}) = ${perimeter} cm eder.` : `Alan ${length} × ${width} = ${area} cm² eder.`, day + 1, mode === 1 ? "cm" : "cm²"),
      mc(`${length} cm’ye ${width} cm’lik bahçenin çiti hangi ölçüdür?`, "Çevre", ["Alan", "Yarıçap", "Hacim"], "Çit kenar boyunca gider. Halı ve boya ise alanı kaplar.", slot(day)),
    ],
  )
}

function fractionShow(day) {
  const dens = [2, 3, 4, 5, 6, 8, 3, 4, 5, 6, 8, 10, 4, 5, 8]
  const nums = [1, 1, 1, 1, 1, 1, 2, 3, 2, 5, 3, 7, 5, 3, 7]
  const den = dens[day]
  const num = nums[day]
  const whole = num >= den
  return card(
    whole ? "Tam sayılı kesir" : "Pay ve payda",
    [
      "Paydadaki sayı, bütünün kaç eş parçaya bölündüğünü söyler. Pay, bu parçalardan kaçının alındığını söyler. Payda büyüdükçe, bütün aynı kaldığı için her parça küçülür.",
      `${num}/${den} kesrinde bütün ${den} eş parçadır ve ${num} parça seçilmiştir. ${whole ? "Pay paydadan küçük olmadığı için bu kesir bir bütünü geçer." : "Pay paydadan küçük olduğu için kesir bir bütünden azdır."}`,
    ],
    `${den} dilime bölünmüş bir pizzadan ${num} dilim almak ${num}/${den} kesridir.`,
    [
          mc(`${num}/${den} kesrinde bütün kaç eş parçadır?`, String(den), fractionWrongs(den, [num, den + num, den * 2, num + den + 1]), "Paydaya bakılır. Pay, seçilen parça sayısını söyler.", slot(day)),
          mc(`${num}/${den} kesrinde kaç parça alınmıştır?`, String(num), fractionWrongs(num, [den, num + den, 0, num + 2]), "Pay, seçilen dilim sayısıdır.", slot(day + 1)),
          mc(`${num}/${den} kesrinde payda büyür, bütün aynı kalırsa her parça ne olur?`, "Küçülür", ["Büyür", "Değişmez", "Yok olur"], "Aynı bütün daha çok parçaya bölününce her parça azalır.", slot(day + 2)),
    ],
  )
}

function fractionCompare(day) {
  const pairs = [
    [3, 8, 5, 8],
    [2, 5, 4, 5],
    [1, 6, 5, 6],
    [2, 7, 2, 3],
    [3, 8, 3, 4],
    [1, 2, 1, 5],
    [5, 6, 1, 6],
    [4, 9, 7, 9],
    [2, 3, 2, 9],
    [3, 10, 7, 10],
    [1, 4, 3, 4],
    [5, 8, 5, 12],
    [2, 5, 3, 5],
    [4, 7, 4, 5],
    [1, 3, 1, 8],
    [6, 7, 2, 7],
    [3, 4, 3, 10],
    [2, 9, 8, 9],
    [1, 2, 2, 2],
    [5, 12, 5, 6],
  ]
  const [a, b, c, d] = pairs[day]
  const left = a / b
  const right = c / d
  const sameDen = b === d
  const winner = left === right ? "eşittir" : left > right ? `${a}/${b}` : `${c}/${d}`
  const rule = sameDen
    ? "Paydalar aynıysa bütün aynı sayıda parçaya bölünmüştür; payı büyük olan kesir daha çok parça aldığı için büyüktür."
    : a === c
      ? "Paylar aynıysa paydası küçük olan kesir büyüktür; çünkü aynı bütün daha az parçaya bölününce her parça büyür."
      : "Kesirler aynı bütüne göre karşılaştırılır. Payda farklıyken yalnızca paya bakmak yanlış karar verdirir."
  return card(
    `${a}/${b} ile ${c}/${d}`,
    [
      rule,
      `${a}/${b} ile ${c}/${d} karşılaştırılınca büyük olan ${winner}. Payda aynı değilken yalnızca paya bakmak hatadır.`,
    ],
    sameDen
      ? `${b} dilimlik pizzada ${a} dilim, ${c} dilimden ${a > c ? "fazladır" : "azdır"}.`
      : `Aynı pay ${a} iken daha az parçaya bölünen bütünün dilimi daha büyüktür.`,
    [
      mc(`${a}/${b} ile ${c}/${d} arasındaki büyük kesir hangisidir?`, winner === "eşittir" ? `${a}/${b}` : winner, winner === `${a}/${b}` ? [`${c}/${d}`, "ikisi de sıfır", "karşılaştırılamaz"] : [`${a}/${b}`, "ikisi de sıfır", "karşılaştırılamaz"], rule, slot(day)),
      mc(sameDen ? `${a}/${b} ve ${c}/${d} paydaları eşitse neye bakılır?` : `${a}/${b} ve ${c}/${d} payları eşitse neye bakılır?`, sameDen ? "Büyük paya" : "Küçük paydaya", sameDen ? ["Küçük paya", "Yalnız paydaya", "Hiçbirine"] : ["Büyük paydaya", "Yalnız paya", "Hiçbirine"], rule, slot(day + 1)),
      mc(`${a}/${b} ile ${c}/${d} karşılaştırılırken 1/2 mi yoksa 1/8 mi daha büyük parçadır?`, "1/2", ["1/8", "Eşittir", "İkisi de 1’dir"], "Paylar 1. Paydası küçük olan 1/2, daha büyük parçadır. Bu, bugünkü kesir çiftinden bağımsız bir modeldir.", slot(day + 2)),
    ],
  )
}

function categoryDay(day) {
  const names = ["elma", "armut", "muz", "çilek"]
  const base = [4 + day, 6 + (day % 3), 2 + (day % 5), 3 + day]
  const maxIndex = base.indexOf(Math.max(...base))
  const total = base.reduce((sum, item) => sum + item, 0)
  return card(
    "Sütun grafiğini okumak",
    [
      "Kategorik veride her sütun bir türü, sütunun yüksekliği o türün sayısını gösterir. Grafiğin dikey ekseni sıfırdan başlamalıdır; yoksa farklar olduğundan büyük görünür.",
      `Bugünkü sayılar: elma ${base[0]}, armut ${base[1]}, muz ${base[2]}, çilek ${base[3]}. En yüksek sütun ${names[maxIndex]}. Toplam ${total}.`,
    ],
    "En uzun sütun en sık seçilendir. İki sütunun farkı, ‘kaç kişi daha fazla’ sorusunun cevabıdır.",
    [
      mc(`Elma ${base[0]}, armut ${base[1]}, muz ${base[2]}, çilek ${base[3]}. En çok seçilen hangisidir?`, names[maxIndex], others(names[maxIndex], names), "En büyük sayıya karşılık gelen kategori alınır.", slot(day)),
      numeric(`Elma ${base[0]}, armut ${base[1]}, muz ${base[2]} ve çilek ${base[3]} toplam kaçtır?`, total, [base[0], -base[3], 5], `${base.join(" + ")} = ${total}.`, day),
      mc(`${names[maxIndex]} sütunu ${base[maxIndex]} iken grafik sıfırdan başlamazsa ne olur?`, "Farklar abartılı görünür", ["Toplam değişmez ve sorun yoktur", "Kategoriler silinir", "Grafik daire olur"], "Ekseni kesmek, küçük farkı büyük gösterir.", slot(day + 1)),
    ],
  )
}

function patternDay(day) {
  if (day < 6) {
    const left = 8 + day
    const add = 3 + (day % 4)
    return card(
      "Eşitliğin iki yanı",
      [
        "Bir eşitliğin iki yanına aynı sayı eklenir, çıkarılır, çarpılır veya sıfır dışında aynı sayıya bölünürse eşitlik bozulmaz. Yalnız bir yanı değiştirmek teraziyi devirir.",
        `${left} = ${left} eşitliğinin iki yanına ${add} eklenirse ${left + add} = ${left + add} olur. Yalnız soldan eklemek eşitliği bozar.`,
      ],
      `Terazi ${left} ve ${left} iken iki kefeye de ${add} koyarsan denge sürer.`,
      [
        numeric(`${left} = ${left} iken iki yana ${add} eklenirse bir yan kaç olur?`, left + add, [add, -add, left], `İki yana da aynı sayı eklenir: ${left} + ${add} = ${left + add}.`, day),
        mc(`${left} = ${left} eşitliğinde yalnız bir yana ${add} eklenirse ne olur?`, "Eşitlik bozulur", ["Eşitlik korunur", "Sayı sıfırlanır", "Terazi iki kat olur"], "İki yan aynı değişmelidir. Tek kefe dengeyi bozar.", 1),
        mc(`${left} = ${left} eşitliğinin iki yanını 0’a bölmek olur mu?`, "Hayır", ["Evet", "Yalnız doğal sayıda", "Yalnız çıkarırken"], "Sıfıra bölme tanımlı değildir. Eşitlik kuralı 0’ı bölen yapmaz.", 2),
      ],
    )
  }
  if (day < 12) {
    const a = 3 + (day % 5)
    const b = 4 + (day % 3)
    const c = 2 + (day % 4)
    const value = a * (b + c)
    return card(
      "Dağılma",
      [
        "Çarpma toplama üzerine dağılır: a × (b + c) = a × b + a × c. Parantezi dağıtmadan yalnızca a ile b’yi çarpmak c’yi dışarıda bırakır.",
        `${a} × (${b} + ${c}) = ${a} × ${b + c} = ${value}. Dağıtarak da ${a * b} + ${a * c} = ${value} bulunur.`,
      ],
      `${a} paketin her birinde ${b} kırmızı ve ${c} mavi bilye varsa toplam bilye ${value}’dir.`,
      [
        numeric(`${a} × (${b} + ${c}) kaçtır?`, value, [a * b, a + b + c, -a], `Önce parantez: ${b} + ${c} = ${b + c}. Sonra ${a} × ${b + c} = ${value}.`, day),
        numeric(`${a} × ${b} + ${a} × ${c} kaçtır?`, value, [a * b, c, a], "Dağılma aynı sonucu verir.", day + 1),
        mc(`${a} × (${b} + ${c}) işleminde yalnız ${b} çarpılırsa neden eksik kalır?`, "Diğer terim dışarıda kalır", ["Sonuç iki kat olur", "Toplama çarpmaya döner", "Sayı sıfır olur"], `${c} de ${a} ile çarpılmalıdır. Tek terim dağıtmayı yarım bırakır.`, slot(day)),
      ],
    )
  }
  const start = 4 + (day % 6)
  const step = 3 + (day % 4)
  const fifth = start + 4 * step
  return card(
    "Örüntünün kuralı",
    [
      "Sayı örüntüsünde önce kural bulunur: her adımda sabit bir sayı ekleniyor mu, çarpılıyor mu? Kuralı bulmadan sonraki terimi tahmin etmek, deseni değil tek sayıyı ezberlemektir.",
      `${start}’ten başlayıp her seferinde ${step} eklenen örüntünün beşinci terimi ${fifth}’tir. Birinci terim ${start}, artış dört kez uygulanır.`,
    ],
    `Dizi ${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}, ${fifth} diye gider. Beşinci terim, ilk terime artışın dört kez eklenmesidir.`,
    [
      numeric(`Örüntü ${start} ile başlıyor ve her adımda ${step} artıyor. 5. terim kaçtır?`, fifth, [step, start, -step], `${start} + 4 × ${step} = ${fifth}.`, day),
      numeric(`${start} ile başlayan ve ${step} artan örüntüde bir adımdaki artış kaçtır?`, step, [start, fifth - start, 1], "Komşu iki terimin farkı kuraldır.", day + 1),
      mc(`${start}’ten ${step} artarak giden örüntüde kural bir adımda değişirse sonraki terim nasıl bulunur?`, "Her adımın kendi kuralı ayrıca incelenir", ["İlk terim yazılır", "Son terim ikiye katlanır", "Örüntü silinir"], "Sabit fark yoksa çarpma ya da değişen artış aranır.", slot(day)),
    ],
  )
}

function chanceDay(day) {
  const rows = [
    ["Yarın Güneş doğudan doğar.", "kesin", "Doğuş yönü bu gözlemde değişmez."],
    ["Bir tavuk bugün uçarak okula gelir.", "olanaksız", "Tavuk bu biçimde uçmaz."],
    ["Bu akşam yağmur yağabilir.", "olası", "İki seçenek var diye olasılık 1/2 değildir; hava bilgisi gerekir."],
    ["Zar atınca 7 gelir.", "olanaksız", "Standart zarda 7 yüzü yoktur."],
    ["Doğru bir madeni parada tura gelmesi.", "eşit olasılıklı iki sonuçtan biri", "Para hilesizse yazı ve tura aynı şansa yakındır. Bu, her olay için geçerli değildir."],
    ["Bugün ödevini yapan bir öğrenci yarın da yapar.", "kesin değildir", "Geçmiş bir gün, yarını zorunlu kılmaz."],
    ["Boş bir torbadan kırmızı top çekmek.", "olanaksız", "Torbada top yoksa kırmızı da yoktur."],
    ["İçinde 9 kırmızı ve 1 mavi top olan torbadan kırmızı çekmek.", "maviden daha olası", "Çok olan renk daha sık gelir. Kesin değildir."],
    ["Bir yılın yarın perşembe olması.", "ya kesindir ya olanaksız", "Yarının günü takvimde bellidir; şansa kalmış değildir."],
    ["Hiç çalışmadan sınavdan her soruyu bilmek.", "pek olası değil", "İmkânsız demek için mantıken imkânsız olmalıdır. Burada ihtimal çok düşüktür."],
  ]
  const [event, name, why] = rows[day]
  return card(
    "Olabilirliği adlandırmak",
    [
      "Öznel olasılıkta olay kesin, olası veya olanaksız diye ayrılır. İki sonuç var diye olasılık her zaman yarım değildir. Kesin olay mutlaka olur, olanaksız olay ise koşullar değişmedikçe olmaz.",
      `${event} Bu durum için doğru ad: ${name}. ${why}`,
    ],
    "Zarda 7 olanaksızdır. Yağmur ise hava bilgisi olmadan ‘yarım olasılık’ diye kestirilemez.",
    [
      mc(`«${event}» için en uygun yargı hangisidir?`, name, others(name, ["kesin", "olanaksız", "olası", "kesin değildir", "eşit olasılıklı iki sonuçtan biri", "pek olası değil", "maviden daha olası", "ya kesindir ya olanaksız"]).slice(0, 3), why, slot(day)),
      mc(`«${event}» iki uçlu diye olasılığı her zaman 1/2 sayılır mı?`, "Hayır", ["Evet", "Yalnız zar atınca", "Yalnız yağmurda"], "Seçeneklerin eşit şanslı olması ayrıca gerekir. İki sözcük, eşit olasılık demek değildir.", 1),
      mc(`«${event}» olanaksız bir olaya benziyorsa ölçüt nedir?`, "Koşullar aynıyken gerçekleşmeyen", ["Sık gerçekleşen", "Kesin gerçekleşen", "Sayısı bilinmeyen"], "Olanaksız, şansı az olan değil, bu durumda yolu olmayan olaydır.", 2),
    ],
  )
}

function review5(day) {
  const prompts = [
    () => card(
      "Yıl sonu: çevre",
      [
        "Çevre, dikdörtgenin kenarlarını dolaşan uzunluktur. Alan ise içini kaplayan bölgedir. Yıl sonunda bu ikisi hâlâ en çok karışan çifttir.",
        "9 cm ve 4 cm kenarlı bir tepsinin çevresi 2 × (9 + 4) = 26 cm, alanı 9 × 4 = 36 cm²’dir.",
      ],
      "Tepsiye şerit yapıştırmak çevredir. Tepsinin tabanına kâğıt kesmek alandır.",
      [
        numeric("9 cm ve 4 cm kenarlı tepsinin çevresi kaç cm’dir?", 26, [5, -4, 10], "Çevre 2 × (9 + 4) = 26 cm eder.", 0, "cm"),
        numeric("Aynı tepsinin alanı kaç cm²’dir?", 36, [8, -6, 26], "Alan 9 × 4 = 36 cm² eder.", 1, "cm²"),
        mc("Tepsinin kenarına şerit hangi ölçüdür?", "Çevre", ["Alan", "Yarıçap", "Hacim"], "Şerit kenar boyunca gider.", 2),
      ],
    ),
    () => card(
      "Yıl sonu: kesir",
      [
        "Paydalar aynıysa büyük pay büyük kesirdir. Paylar aynıysa küçük payda büyük kesirdir. Bu iki kuralı yer değiştirmek karşılaştırmayı ters çevirir.",
        "3/8 ile 5/8 arasında 5/8 büyüktür. 2/3 ile 2/9 arasında 2/3 büyüktür.",
      ],
      "Aynı pastadan 5 dilim, 3 dilimden fazladır. Pasta 8 dilimse payda ortaktır.",
      [
        mc("3/8 ile 5/8 arasında büyük olan hangisidir?", "5/8", ["3/8", "Eşittir", "1"], "Paydalar 8. Payı büyük olan 5/8’dir.", 0),
        mc("2/3 ile 2/9 arasında büyük olan hangisidir?", "2/3", ["2/9", "Eşittir", "0"], "Paylar eşit. Paydası küçük olan parça daha büyüktür.", 1),
        mc("Paydalar aynıyken yalnız paydaya bakmak olur mu?", "Hayır, paya bakılır", ["Evet", "Yalnız 1/2’de", "Yalnız tam sayıda"], "Payda ortaksa farkı pay yaratır.", 2),
      ],
    ),
    () => card(
      "Yıl sonu: işlem seçmek",
      [
        "Problemde eşit grup varsa çarpma, eşit paylaştırma varsa bölme, birleştirme varsa toplama, eksilme varsa çıkarma kullanılır.",
        "6 rafta 8’er kitap varsa 6 × 8 = 48 kitap vardır. 48 kitabı 6 rafa eşit dizmek ise 48 ÷ 6 = 8 eder.",
      ],
      "Çarpma grupları birleştirir. Bölme ise toplamı gruplara ayırır.",
      [
        numeric("6 rafta 8’er kitap varsa kaç kitap vardır?", 48, [6, -8, 10], "Eşit gruplar çarpılır: 6 × 8 = 48.", 0),
        numeric("48 kitap 6 rafa eşit dizilirse bir rafta kaç kitap olur?", 8, [6, 4, -2], "Eşit paylaştırma bölmedir: 48 ÷ 6 = 8.", 1),
        mc("48 ÷ 6 işlemi hangi hikâyeye uyar?", "48 kitabı 6 rafa eşit dizmek", ["6 rafa 8’er kitap koymak", "48 kitaba 6 eklemek", "6 kitabı silmek"], "Bölme, toplamı eşit parçalara ayırır.", 2),
      ],
    ),
    () => card(
      "Yıl sonu: çember",
      [
        "Çap, yarıçapın iki katıdır. Yarıçapı ikiye bölmek, çapı bulmanın değil daha küçük bir parçanın hesabıdır.",
        "Yarıçapı 9 cm olan dairesel havuzun çapı 18 cm’dir. Çapı 18 cm ise yarıçap yeniden 9 cm’dir.",
      ],
      "Havuzun merkezinden kenara 9 cm yürümek yarıçaptır. Karşı kenara merkezden geçerek varmak çaptır.",
      [
        numeric("Yarıçapı 9 cm olan havuzun çapı kaç cm’dir?", 18, [-9, 9, -6], "Çap = 2 × 9 = 18 cm.", 0, "cm"),
        numeric("Çapı 18 cm olan havuzun yarıçapı kaç cm’dir?", 9, [9, 18, -3], "Yarıçap = 18 ÷ 2 = 9 cm.", 1, "cm"),
        mc("Merkezden geçmeyen kiriş çap mıdır?", "Hayır", ["Evet", "Yalnız uzunsa", "Yalnız dikeyse"], "Çap merkezden geçen kiriştir.", 2),
      ],
    ),
    () => card(
      "Yıl sonu: olabilirlik",
      [
        "Kesin olay kaçınılmazdır, olanaksız olayın bu koşullarda yolu yoktur, olası olay ikisinin arasında kalır. İki sözcük görmek olasılığı otomatik olarak 1/2 yapmaz.",
        "Standart bir zarda 9 gelmesi olanaksızdır. Yarın yağmur yağması ise hava bilgisi olmadan kesin ya da yarım diye adlandırılmaz.",
      ],
      "Zarda 1’den 6’ya kadar yüz vardır. 9 bu yüzlerden biri değildir.",
      [
        mc("Standart zarda 9 gelmesi nasıldır?", "olanaksız", ["kesin", "eşit olasılıklı", "zorunlu"], "Zarda 9 yüzü yoktur.", 0),
        mc("Yarın yağmur yağmasını, bakmadan 1/2 saymak doğru mudur?", "Hayır", ["Evet", "Yalnız yazın", "Yalnız zarda"], "İki ihtimal eşit şanslı olmak zorunda değildir.", 1),
        mc("Kesin olay hangisine benzer?", "Koşullar değişmeden mutlaka olan", ["Hiç olmayan", "Nadir olan", "Sayısı bilinmeyen"], "Kesin, ihtimalli olan değil, kaçınılmaz olandır.", 2),
      ],
    ),
  ]
  return prompts[day]()
}

void g5Draw
