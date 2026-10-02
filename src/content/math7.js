import { ask, lesson, num, seq } from "./make.js"

function signed(day) {
  if (day === 0) {
    return lesson(
      "Sayı doğrusu",
      "Tam sayılar …, -3, -2, -1, 0, 1, 2, 3… diye iki yöne uzanır. Pozitifler 0’ın sağında, negatifler solundadır. -4, -1’den daha soldadır; yani daha küçüktür.",
      "«Eksi işaret sayı büyütür» yanlıştır. Borç veya sıfırın altındaki sıcaklık, sayı doğrusunda sola gittikçe küçülür.",
      "0’ın 4 birim solundaki nokta -4’tür. Aynı uzaklığın sağındaki nokta +4’tür. İkisinin işareti ters, uzaklığı aynıdır.",
      [
        ask("-4 ile -1 için doğru sıra hangisidir?", "-4 < -1", "-4 > -1", "Eşittir", "-4 pozitiftir", "Soldaki sayı daha küçüktür. -4, -1’in solundadır.", 0),
        ask("0’ın solunda hangi sayılar vardır?", "Negatif tam sayılar", "Pozitif tam sayılar", "Yalnız kesirler", "Yalnız 1", "Negatif yön sola doğrudur.", 1),
        ask("+5 ile -5’in ortak yanı nedir?", "0’a uzaklıkları 5’tir", "İkisi de pozitiftir", "İkisi de 0’dan küçüktür", "Toplamları 5’tir", "İşaretler ters, uzaklık aynıdır. Toplamları 0’dır.", 2),
      ],
    )
  }
  if (day < 6) {
    const pairs = [
      [-4, -3, "aynı işaret"],
      [-8, 5, "farklı işaret"],
      [6, -9, "farklı işaret"],
      [-2, -7, "aynı işaret"],
      [4, -4, "farklı işaret"],
    ]
    const [a, b] = pairs[day - 1]
    const sum = a + b
    return lesson(
      "Tam sayılarda toplama",
      `${a} + (${b}) işleminde işaretler ${a < 0 && b < 0 ? "aynıdır; mutlak değerler toplanır ve sonuç negatif kalır" : "farklıdır; mutlak değerlerin farkı alınır ve sonuç, mutlak değeri büyük olanın işaretini taşır"}. Sonuç ${sum}.`,
      "Eksi ile eksiyi her zaman artı yapmak çarpmanın kuralıdır. Toplamada aynı yönlü iki eksi birbirini büyütür, sönümlendirmez.",
      `${a} + (${b}) = ${sum}. Sayı doğrusunda ${a} noktasından ${b < 0 ? "sola" : "sağa"} ${Math.abs(b)} adım gidilir.`,
      [
        ask(`${a} + (${b}) kaçtır?`, String(sum), String(sum + 3), String(sum - 4), String(a * b), `İşaret kuralı toplama içindir. ${a} + (${b}) = ${sum}.`, day),
        ask("Toplamada (-) + (-) ne verir?", "Negatif", "Her zaman pozitif", "Her zaman 0", "Kesir", "Aynı yöndeki iki borç toplanınca borç artar.", day + 1),
        ask(`${a} noktasından ${b < 0 ? "sola" : "sağa"} gitmek hangi işleme karşılık gelir?`, `${b} eklemek`, `${b} ile çarpmak`, "Paydayı büyütmek", "Mutlak değeri silmek", "Pozitif ekleme sağa, negatif ekleme sola gider.", day + 2),
      ],
    )
  }
  if (day === 6) {
    return lesson(
      "Çıkarma, tersini eklemektir",
      "Bir tam sayıyı çıkarmak, onun ters işaretlisini eklemektir. 3 − 8 = 3 + (-8) = -5. Eksili çıkarmak ise artıya döner: 4 − (-2) = 4 + 2 = 6.",
      "4 − (-2) işlemini 4 − 2 = 2 yapmak, eksi işaretini yok saymaktır. İki eksi yan yana gelince toplama olur.",
      "3 − 8 sayı doğrusunda 3’ten sola 8 adımdır, -5’te durulur. 4 − (-2) sağa 2 adımdır.",
      [
        ask("3 − 8 kaçtır?", "-5", "5", "-11", "11", "3 + (-8) = -5. 8, 3’ten büyük olduğu için sonuç negatiftir.", 6),
        ask("4 − (-2) kaçtır?", "6", "2", "-2", "8", "Eksiyi çıkarmak, +2 eklemektir. 4 + 2 = 6.", 7),
        ask("Çıkarma toplama diline nasıl çevrilir?", "Çıkanın işareti değiştirilip toplanır", "İki sayı da pozitif yapılır", "Küçük olan silinir", "Sonuç her zaman negatiftir", "a − b = a + (-b).", 8),
      ],
    )
  }
  if (day === 7) {
    return lesson(
      "Rasyonel sayı",
      "Rasyonel sayı, paydası sıfır olmayan iki tam sayının bölümü olarak yazılabilen sayıdır. 3/4, -2/5 ve 7 = 7/1 rasyoneldir. Tam sayılar da rasyoneldir; payda 1 seçilir.",
      "«Kesir varsa sayı tam sayı olamaz» diye 7/1’i tam sayıdan ayrı bir tür sanmak yanlıştır. 7/1, 7’nin kendisidir. Payda 0 ise, 5/0 gibi bir yazım sayı değildir.",
      "-2/5, bir bütünün beş eş parçasından ikisinin eksi yöndeki halidir. 0,5 = 1/2 olduğu için 0,5 de rasyoneldir.",
      [
        ask("7 rasyonel midir?", "Evet, 7/1 biçiminde yazılır", "Hayır, kesir değildir", "Yalnız negatifse", "Yalnız payda 7 ise", "Her tam sayı, paydası 1 olan bir kesirdir.", 7),
        ask("Hangisi rasyonel sayı değildir?", "5/0", "-2/5", "3/4", "0/8", "Paydayı 0 yapmak bölme değildir. 0/8 = 0’dır ve tanımlıdır.", 8),
        ask("-2/5 için doğru olan hangisidir?", "Negatif bir rasyonel sayıdır", "Payda negatif olduğu için pozitiftir", "Tam sayıdır", "0’dan büyüktür", "Pay negatif, payda pozitiftir. Sonuç 0’ın solundadır.", 9),
      ],
    )
  }
  if (day < 12) {
    const rows = [
      ["1/2", "0 ile 1’in ortası", "0,5"],
      ["-1/2", "0’ın solu, -1’in sağı", "-0,5"],
      ["3/2", "1 ile 2 arasında", "1,5"],
      ["-4/2", "-2 noktası", "-2"],
    ]
    const [frac, place, decimal] = rows[day - 8]
    return lesson(
      "Rasyoneli yerleştirmek",
      `${frac} sayısı sayı doğrusunda ${place}na düşer. Ondalık karşılığı ${decimal}’dir. Kesir, bölme olduğu için pay paydaya bölünerek yeri bulunur.`,
      "Payı paydadan büyük diye kesri 0’ın soluna atmak yanlıştır. İşaret sola iter; payın büyük olması sayıyı 1’in sağına taşır.",
      `${frac} = ${decimal}. Bu değer, komşu tam sayıların arasında tek bir noktadır.`,
      [
        ask(`${frac} sayısı nereye daha yakındır?`, place, "her zaman paydaya", "yalnız pozitiflere", "0 ile 1 arasına zorunlu", `${frac} = ${decimal}. Yer, bu değere göre seçilir.`, day),
        ask(`${frac} ondalık olarak hangisidir?`, decimal, "0", "10", frac === "3/2" ? "0,5" : "3", "Pay paydaya bölünür.", day + 1),
        ask("Bir kesrin 1’den büyük olması neyi gerektirir?", "Payın mutlak değeri paydadan büyüktür", "Payda 1’dir", "Sayı negatiftir", "Payda paydan büyüktür", "3/2 > 1 çünkü 3 > 2. İşaret ayrı bakılır.", day + 2),
      ],
    )
  }
  if (day < 16) {
    const temps = [
      [-3, -5, -8],
      [2, -6, -4],
      [-7, 4, -3],
      [-1, -1, -2],
    ]
    const [start, change, end] = temps[day - 12]
    return lesson(
      "Sıcaklık ve borç",
      `Termometre ${start}°C iken ${change}°C değişirse yeni sıcaklık ${start} + (${change}) = ${end}°C olur. Negatif değişim, havanın soğumasıdır.`,
      "Eksi sıcaklığa eksi ekleyince sonucu artı yapmak, çarpma kuralını buraya taşır. Toplama, yönleri ayrı izler.",
      `${start}°C noktasından ${change < 0 ? "aşağı" : "yukarı"} ${Math.abs(change)} derece gidilir, ${end}°C okunur.`,
      [
        ask(`${start}°C sıcaklık ${change}°C değişirse kaç derece olur?`, `${end}°C`, `${end + 4}°C`, `${end - 6}°C`, `${change}°C değişimin kendisi`, `${start} + (${change}) = ${end}. İşaretler toplanırken çarpma kuralı kullanılmaz.`, day),
        ask("Sıcaklık düşünce sayı doğrusunda ne olur?", "Sola gidilir", "Her zaman sağa gidilir", "0 silinir", "Kesir zorunlu olur", "Soğuma negatif yöndür.", day + 1),
        ask(`${end}°C, 0’ın neresindedir?`, end < 0 ? "Solunda" : end > 0 ? "Sağında" : "Üzerinde", end < 0 ? "Sağında" : "Solunda", "Her zaman sağında", "Tanımsız", "İşaret, 0’a göre tarafı söyler.", day + 2),
      ],
    )
  }
  const values = [-9, 6, -2, 0]
  const value = values[day - 16]
  const abs = Math.abs(value)
  return lesson(
    "Mutlak değer",
    `Bir sayının mutlak değeri, o sayının 0’a uzaklığıdır ve hiç negatif olmaz. |${value}| = ${abs}. İşaret atılır, uzaklık kalır.`,
    "Mutlak değeri sayının tersi sanmak | -9 | = -9 bırakır. Uzaklık eksi yazılmaz.",
    `${value} noktası 0’dan ${abs} birim uzaktadır. Karşı yöndeki ${value === 0 ? "0" : -value} da aynı uzaklıktadır.`,
    [
      ask(`|${value}| kaçtır?`, String(abs), String(abs + 4), String(value === 0 ? -3 : -abs), "uzaklık değil, işaret", `Mutlak değer uzaklıktır. ${value} sayısı 0’dan ${abs} birimdedir. Eksi yazılmaz.`, day),
      ask("Mutlak değer negatif olabilir mi?", "Hayır", "Evet, sayı negatifse", "Yalnız kesirde", "Yalnız 0’da", "Uzaklık 0 ya da pozitiftir.", day + 1),
      ask(`0’a uzaklığı ${abs} olan negatif tam sayı hangisidir?`, abs === 0 ? "böyle bir negatif sayı yoktur, yalnız 0’dır" : value < 0 ? String(value) : String(-abs), String(abs + 3), String(-(abs + 5)), "uzaklık işaret taşımaz", "Negatif yön sola gider. Uzaklık aynı kalır. 0’ın negatifi yine 0’dır.", day + 2),
    ],
  )
}

function order(day) {
  const cards = [
    () => lesson(
      "Aynı payda",
      "Paydaları eşit kesirlerde büyük olan, payı büyük olandır. 3/8 < 5/8 < 7/8. Parça sayısı artmış, parça boyu değişmemiştir.",
      "Paydaya bakıp büyük paydası olanı büyük sanmak bu grupta işe yaramaz; paydalar zaten aynıdır.",
      "Bir pastanın 8 diliminden 3’ü, 5’inden azdır. 7 dilim ikisinden de çoktur.",
      [
        ask("3/8, 5/8 ve 7/8 için doğru sıra hangisidir?", "3/8 < 5/8 < 7/8", "7/8 < 5/8 < 3/8", "Eşittir", "5/8 en küçüktür", "Payda 8 sabit. Pay büyüdükçe kesir büyür.", 0),
        ask("4/9 ile 7/9 hangisi büyüktür?", "7/9", "4/9", "Eşittir", "Payda büyük olan", "7 > 4 ve paydalar aynı.", 1),
        ask("Aynı paydada karşılaştırma nereye bakar?", "Paya", "Yalnız tam kısmına", "Virgülden sonraki sıfıra", "İşarete bakılmaz", "Pay, alınan eş parça sayısıdır.", 2),
      ],
    ),
    () => lesson(
      "Aynı pay",
      "Payları eşit ve pozitif kesirlerde payda büyüdükçe parça küçülür. 2/3 > 2/7. İki pay da 2’dir; 3’e bölünen bütün daha büyük parça verir.",
      "2/7’yi büyük sanmak, 7’yi 3’ten büyük görmektir. Payda, bölen gibidir; büyük bölen küçük parça üretir.",
      "Bir ekmeğin 1/3’ü, 1/7’sinden büyüktür. İki payda da bir dilim alınır.",
      [
        ask("2/3 ile 2/7 hangisi büyüktür?", "2/3", "2/7", "Eşittir", "Paydası büyük olan", "Aynı payda payda küçüldükçe kesir büyür.", 0),
        ask("1/4 ile 1/9 hangisi küçüktür?", "1/9", "1/4", "Eşittir", "1/4, çünkü 4 < 9", "9 daha çok parçaya böler, bir parça daha küçük kalır.", 1),
        ask("Pay eşitken payda büyürse kesir ne olur?", "Küçülür", "Büyür", "Tam sayı olur", "Negatif olur", "Bütün daha ince dilimlere ayrılır.", 2),
      ],
    ),
    () => lesson(
      "Ortak payda",
      "1/2 ile 2/5 karşılaştırılırken paydalar 10’da eşitlenir. 1/2 = 5/10, 2/5 = 4/10. 5/10 > 4/10 olduğu için 1/2 > 2/5.",
      "Paylara bakıp 2 > 1 diye 2/5’i büyük ilan etmek, paydaları yok sayar.",
      "5 − 4 = 1. Fark 1/10’dur. Yarım, beşte ikiden bir onda bir büyüktür.",
      [
        ask("1/2 ile 2/5 hangisi büyüktür?", "1/2", "2/5", "Eşittir", "Karşılaştırılamaz", "1/2 = 5/10 ve 2/5 = 4/10.", 0),
        ask("2/3 ile 3/4 ortak paydada nasıl yazılır?", "8/12 ve 9/12", "2/12 ve 3/12", "6/12 ve 6/12", "8/12 ve 8/12", "Paydaların çarpımı 12’dir. 2/3 = 8/12, 3/4 = 9/12.", 1),
        ask("3/4, 2/3’ten büyük müdür?", "Evet", "Hayır", "Eşittir", "Yalnız negatifse", "9/12 > 8/12.", 2),
      ],
    ),
    () => lesson(
      "Negatif kesir",
      "Negatif kesirlerde 0’a yakın olan daha büyüktür. -1/2 = -0,5 ve -1/5 = -0,2. -0,2, -0,5’ten büyüktür çünkü sıfıra daha yakındır. Yani -1/5 > -1/2.",
      "Pozitif alışkanlıkla 1/2 > 1/5 deyip eksileri aynı sırada bırakmak işareti unutmaktır. Eksi, sırayı ters çevirir.",
      "Sayı doğrusunda -1/2 daha soldadır. Sağdaki -1/5 daha büyüktür.",
      [
        ask("-1/5 ile -1/2 hangisi büyüktür?", "-1/5", "-1/2", "Eşittir", "İkisi de 1’den büyüktür", "-1/5, 0’a daha yakındır. Soldaki daha küçüktür.", 0),
        ask("-3/4 ile -1/4 hangisi küçüktür?", "-3/4", "-1/4", "Eşittir", "-1/4, çünkü pay küçük", "Paydalar aynı ve ikisi de negatif. Payın mutlak değeri büyük olan daha soldadır.", 1),
        ask("İki negatif sayıdan 0’a yakın olan nasıldır?", "Daha büyüktür", "Daha küçüktür", "Pozitiftir", "Paydası 0’dır", "Sayı doğrusunda sağa yaklaşmak büyümktir.", 2),
      ],
    ),
    () => lesson(
      "Karışık sıra",
      "-1, -2/3, 0, 1/4 ve 2 aynı doğrultuda sıralanır. Negatifler solda, 0 ortada, pozitifler sağdadır. -1 < -2/3 çünkü -1 = -3/3 ve -3/3 < -2/3.",
      "Kesri görüp -2/3’ü -1’in soluna koymak, payı tam sayıdan büyük sanmaktır. -2/3, -1 ile 0 arasındadır.",
      "Sıra: -1, -2/3, 0, 1/4, 2. Her adım sağa doğru büyür.",
      [
        ask("-1 ile -2/3 için doğru olan hangisidir?", "-1 < -2/3", "-1 > -2/3", "Eşittir", "-2/3 tam sayıdır", "-1 = -3/3 ve -3 < -2.", 0),
        ask("0, bu beş sayıda nerede durur?", "-2/3 ile 1/4 arasında", "En solda", "En sağda", "1/4’ten sonra", "Negatifler 0’ın solunda, pozitifler sağındadır.", 1),
        ask("1/4 ile 2 hangisi büyüktür?", "2", "1/4", "Eşittir", "1/4, payda küçük diye", "2 = 8/4. 8/4 > 1/4.", 2),
      ],
    ),
  ]
  return cards[day]()
}

function operate(day) {
  const rows = [
    ["1/7 + 3/7", "4/7", "2/7", "4/14", "3/7", "Paylar toplanır, payda 7 kalır. 1 + 3 = 4."],
    ["5/9 − 2/9", "3/9", "7/9", "3/18", "2/9", "Paylar çıkarılır: 5 − 2 = 3. Payda aynıdır."],
    ["1/2 + 1/4", "3/4", "2/6", "1/8", "2/4", "1/2 = 2/4. 2/4 + 1/4 = 3/4."],
    ["2/3 − 1/6", "1/2", "1/3", "1/6", "3/6", "2/3 = 4/6. 4/6 − 1/6 = 3/6 = 1/2."],
    ["3/5 + 1/2", "11/10", "4/7", "4/10", "8/10", "Ortak payda 10. 6/10 + 5/10 = 11/10."],
    ["2/3 × 4/5", "8/15", "8/8", "6/15", "6/8", "Pay payla, payda paydayla çarpılır. 2 × 4 = 8, 3 × 5 = 15."],
    ["3/4 × 2/9", "1/6", "6/36", "5/13", "6/13", "3/4 × 2/9 = 6/36 = 1/6. Sadeleştirme değeri değiştirmez."],
    ["4/5 ÷ 2/3", "6/5", "8/15", "2/5", "4/15", "Bölme, ikinci kesrin tersiyle çarpmaktır. 4/5 × 3/2 = 12/10 = 6/5."],
    ["1/2 ÷ 3/4", "2/3", "3/8", "4/6", "1/2", "1/2 × 4/3 = 4/6 = 2/3."],
    ["-1/4 + 3/4", "1/2", "-1/2", "2/8", "4/4", "Paylar -1 + 3 = 2. 2/4 = 1/2."],
    ["-2/5 − 1/5", "-3/5", "-1/5", "3/5", "-2/10", "Aynı yöndeki eksiler toplanır. -2 − 1 = -3."],
    ["(-2/3) × (1/4)", "-2/12", "2/12", "-3/7", "2/7", "Eksi ile artının çarpımı eksidir. -2/12 = -1/6."],
    ["(2/3) × (-3/4)", "-1/2", "1/2", "-6/7", "5/7", "2/3 × 3/4 = 6/12 = 1/2. İşaret negatiftir: -1/2."],
    ["(-1/2) ÷ (-1/4)", "2", "-2", "1/8", "-1/8", "Eksi eksiyi artı yapar. 1/2 × 4/1 = 2."],
  ]
  const [expr, correct, w1, w2, w3, why] = rows[day]
  return lesson(
    "Rasyonelde işlem",
    `${expr} işleminin sonucu ${correct} olur. Toplama ve çıkarmada paydalar eşitlenir. Çarpmada pay payla, payda paydayla çarpılır. Bölmede ikinci kesir ters çevrilip çarpılır.`,
    `İşlem türünü karıştırmak başka bir kesir üretir. ${w1} veya ${w2} gibi sonuçlar, paydaları toplamaktan ya da ters çevirmeyi unutmaktan çıkar.`,
    `${expr} = ${correct}. ${why}`,
    [
      ask(`${expr} kaçtır?`, correct, w1, w2, w3, why, day),
      ask(
        `${expr} işleminde hangi kural kullanılır?`,
        expr.includes("÷") ? "İkinci kesir ters çevrilip çarpılır" : expr.includes("×") ? "Paylar ve paydalar kendi aralarında çarpılır" : "Paydalar eşitlenir, paylar işleme girer",
        "Her zaman paydalar toplanır",
        "Payda her zaman 1 yapılır",
        "İşaretler silinir",
        why,
        day + 1,
      ),
      ask(
        "Bulunan kesri sadeleştirmek değeri değiştirir mi?",
        "Hayır",
        "Evet, her zaman küçültür",
        "Yalnız toplamada",
        "Yalnız negatifte",
        "Pay ve payda aynı sayıyla bölünürse kesir aynı noktayı gösterir.",
        day + 2,
      ),
    ],
  )
}

function prism(day) {
  if (day < 10) {
    const l = 3 + (day % 5)
    const w = 2 + (day % 3)
    const h = 4
    const volume = l * w * h
    return lesson(
      "Dikdörtgenler prizmasının hacmi",
      `Hacim, cismin kapladığı yerdir. Ayrıtları ${l} cm, ${w} cm ve ${h} cm olan dikdörtgenler prizmasının hacmi ${l} × ${w} × ${h} = ${volume} cm³ olur. Üç ayrıt da çarpılır.`,
      `Yalnız tabanı çarpıp ${l * w} cm² bulmak alan bırakır. Yükseklik üçüncü çarpandır; onsuz birim cm³ olmaz.`,
      `${l} × ${w} = ${l * w}. ${l * w} × ${h} = ${volume}. Birim santimetreküptür.`,
      [
        num(`Ayrıtları ${l} cm, ${w} cm ve ${h} cm olan prizmanın hacmi kaç cm³’tür?`, volume, [l * w, l * w * h + h, (l + w) * h], `${l} × ${w} × ${h} = ${volume}.`, day, "cm³"),
        ask("Hacim birimi hangisidir?", "cm³", "cm²", "cm", "derece", "Üç uzunluk çarpıldığı için küp birimi kullanılır.", day + 1),
        ask(`${l} × ${w} çarpımı bu prismada neyi eksik bırakır?`, "Yüksekliği", "Birimi", "Tabanı", "Köşeyi", `${h} cm’lik üçüncü ayrıt çarpıma girmelidir.`, day + 2),
      ],
    )
  }
  const l = 5
  const w = 2 + (day - 10)
  const h = 3
  const surface = 2 * (l * w + l * h + w * h)
  return lesson(
    "Yüzey alanı",
    `Dikdörtgenler prizmasının 6 yüzü vardır. İkişer yüz eşittir. Ayrıtlar ${l} cm, ${w} cm ve ${h} cm ise yüzey alanı 2 × (${l}×${w} + ${l}×${h} + ${w}×${h}) = ${surface} cm² olur.`,
    "Hacmi yüzey alanı diye yazmak birimi ve işlemi karıştırır. Hacim üç çarpım, yüzey ise üç farklı dikdörtgenin ikişer kez toplanmasıdır.",
    `${l}×${w} = ${l * w}, ${l}×${h} = ${l * h}, ${w}×${h} = ${w * h}. Toplam ${l * w + l * h + w * h}, iki katı ${surface}.`,
    [
      num(`Ayrıtları ${l}, ${w} ve ${h} cm olan prizmanın yüzey alanı kaç cm²’dir?`, surface, [l * w * h, l * w + l * h + w * h, 2 * l * w], `2 × (${l * w} + ${l * h} + ${w * h}) = ${surface}.`, day, "cm²"),
      ask("Eşit yüzler neden 2 ile çarpılır?", "Karşılıklı yüzler aynıdır", "Hacim istendiği için", "π yerine geçer", "Yükseklik ikiye bölünsün diye", "Üst ile alt, ön ile arka, sağ ile sol eşittir.", day + 1),
      ask("Yüzey alanı ile hacmi ayıran birim hangisidir?", "cm² ve cm³", "İkisi de cm", "İkisi de cm³", "İkisi de derecedir", "Yüzey örtülür, hacim doldurulur.", day + 2),
    ],
  )
}

function data(day) {
  if (day < 8) {
    const a = 2 + day
    const b = 4 + day
    const c = 6 + day
    const d = 8 + day
    const mean = (a + b + c + d) / 4
    return lesson(
      "Aritmetik ortalama",
      `${a}, ${b}, ${c} ve ${d} verilerinin ortalaması toplamın 4’e bölümüdür. Toplam ${a + b + c + d}, ortalama ${mean}. Ortalama, verilerin dengelendiği tek sayıdır.`,
      `En büyük değeri ortalama sanmak ${d} cevabını verir. ${d} bir uçtur; dört sayının paylaşılmış hali ${mean}’dir.`,
      `${a} + ${b} + ${c} + ${d} = ${a + b + c + d}. ${a + b + c + d} ÷ 4 = ${mean}.`,
      [
        num(`${a}, ${b}, ${c}, ${d} ortalaması kaçtır?`, mean, [d, a + b + c + d, a], `Toplam ${a + b + c + d} dört veriye bölünür.`, day),
        ask(`${a}, ${b}, ${c}, ${d} dizisinde ortalama ile en büyük değer aynı mıdır?`, "Hayır", "Evet", "Yalnız çift sayıda", "Ortalama her zaman en büyüktür", `Ortalama ${mean}, en büyük ${d}.`, day + 1),
        ask("Bir veri ortalamadan çok büyükse ortalama ne olur?", "Yukarı çekilir", "Değişmez", "Her zaman o veriye eşit olur", "Negatif olur", "Toplam büyür, bölüm de büyür.", day + 2),
      ],
    )
  }
  if (day < 16) {
    const mid = 3 + day
    const list = [mid - 4, mid - 1, mid, mid + 2, mid + 6]
    return lesson(
      "Ortanca",
      `Ortanca, sıralanmış verinin tam ortasındaki değerdir. ${list.join(", ")} dizisi küçükten büyüğe dizilidir. Beş verinin ortancası üçüncüsü, yani ${mid}’dir.`,
      "Ortancayı ortalama sanmak toplamı 5’e bölmeyi gerektirir. Ortanca işlemden önce sıraya bakar, ortaya düşen sayıyı alır.",
      `Ortadaki veri ${mid}. İki yanda ikişer sayı vardır. Çift sayıda veride ortadaki iki sayının ortalaması alınır; burada veri tek.`,
      [
        ask(`${list.join(", ")} dizisinin ortancası kaçtır?`, String(mid), String(list[0]), String(list[4]), String(list[1]), "Sıralı beş veride üçüncü değer ortancadır.", day),
        ask("Ortanca bulunmadan önce ne yapılır?", "Veriler küçükten büyüğe dizilir", "Veriler çarpılır", "En büyük silinir", "Birim değiştirilir", "Sırasız dizinin ortası ortanca değildir.", day + 1),
        ask(`${list.join(", ")} dizisinde en büyük ile ortanca aynı mıdır?`, "Hayır", "Evet", "Yalnız ortanca 0 ise", "Her zaman", `En büyük ${list[4]}, ortanca ${mid}.`, day + 2),
      ],
    )
  }
  const low = 5
  const high = 12 + day
  const range = high - low
  return lesson(
    "Açıklık",
    `Açıklık, en büyük değer ile en küçük değerin farkıdır. ${low} ile ${high} arasındaki açıklık ${high} − ${low} = ${range} olur. Dağılımın ne kadar yayıldığını söyler.`,
    `Uçları toplamak ${low + high} verir. Bu bir toplamdır, yayılım değildir.`,
    `En küçük ${low}, en büyük ${high}. Fark ${range}. Aradaki veriler açıklığı değiştirmez.`,
    [
      num(`En küçük ${low}, en büyük ${high} ise açıklık kaçtır?`, range, [low + high, high, low], `${high} − ${low} = ${range}.`, day),
      ask(`${low} ve ${high} uçlu dağılımda açıklık neden farktır?`, "Yayılım, iki uç arasındaki uzaklıktır", "Toplam daha kolaydır", "Ortanca farktır", "Ortalama her zaman farka eşittir", "Uçlar birbirinden uzaksa veri dağınıktır.", day + 1),
      ask("En büyük artar, en küçük aynı kalırsa açıklık ne olur?", "Artar", "Azalır", "Ortalamaya eşitlenir", "Sıfır olur", "Farkın büyük ucu büyür.", day + 2),
    ],
  )
}

function reflect(day) {
  const cards = [
    () => lesson(
      "X eksenine göre yansıma",
      "Bir nokta x eksenine göre yansıyınca apsis aynı kalır, ordinat işaret değiştirir. A(3, 2) noktasının görüntüsü A'(3, -2)’dir. Eksen, kâğıdın kat yeridir.",
      "İki koordinatı birden ters çevirmek orijine göre simetri verir: (-3, -2). Bu, x ekseni yansıması değildir.",
      "2 birim yukarıdaki nokta, eksenin 2 birim altına iner. Sağa 3 birimlik uzaklık bozulmaz.",
      [
        ask("A(3, 2) noktasının x eksenine göre görüntüsü nedir?", "(3, -2)", "(-3, 2)", "(-3, -2)", "(2, 3)", "Yatay eksende y koordinatı işaret değiştirir.", 0),
        ask("B(-4, 1) x ekseninde nereye gider?", "(-4, -1)", "(4, 1)", "(4, -1)", "(-1, -4)", "x = -4 kalır, y = 1 yerine -1 olur.", 1),
        ask("Yansıma bir uzunluğu değiştirir mi?", "Hayır, uzaklıklar korunur", "Evet, iki katına çıkar", "Yalnız x değişirse", "Her zaman küçültür", "Yansıma bir eşlik dönüşümüdür.", 2),
      ],
    ),
    () => lesson(
      "Y eksenine göre yansıma",
      "Y eksenine göre yansımada ordinat kalır, apsis işaret değiştirir. C(5, -3) noktası C'(-5, -3) olur. Dikey katlama, sağı sola taşır.",
      "Y’yi de ters çevirmek yine orijin simetrisidir. Y ekseninde yalnız x değişir.",
      "5 birim sağdaki nokta 5 birim sola geçer. Aşağıdaki 3 birim yerinde durur.",
      [
        ask("C(5, -3) noktasının y eksenine göre görüntüsü nedir?", "(-5, -3)", "(5, 3)", "(-5, 3)", "(-3, 5)", "Dikey eksende x işareti değişir, y kalır.", 0),
        ask("D(-2, 6) y ekseninde nereye gider?", "(2, 6)", "(-2, -6)", "(2, -6)", "(6, -2)", "x = -2 yerine 2 olur. y = 6 aynıdır.", 1),
        ask("Hangi koordinat y ekseninde sabit kalır?", "Ordinat", "Apsis", "İkisi birden", "İkisi de değişir", "Ordinat, y değeridir.", 2),
      ],
    ),
    () => lesson(
      "Açıortay",
      "Açıortay, açıyı ölçüleri eşit iki açıya bölen ışındır. 80°’lik bir açının açıortayı 40° ve 40° oluşturur. Köşeden çıkar.",
      "80’i 10’a bölüp 8° bulmak keyfi bir bölmedir. Açıortay tam yarımdır.",
      "40 + 40 = 80. İki yeni açı eşittir, toplam eski açıyı verir.",
      [
        ask("80°’lik açının açıortayı her bir parçayı kaç derece yapar?", "40", "20", "80", "160", "80 ÷ 2 = 40.", 0),
        ask("64°’lik açının açıortayı bir parçayı kaç derece yapar?", "32", "16", "64", "128", "64 ÷ 2 = 32.", 1),
        ask("Açıortay üzerinde alınan bir noktadan açının kollarına inen dikmeler nasıldır?", "Eşittir", "Biri iki katıdır", "Biri sıfırdır", "Toplamları 180°’dir", "Açıortay, kollara eşit uzaklıkta noktaların kümesidir.", 2),
      ],
    ),
    () => lesson(
      "Orta dikme",
      "Bir doğru parçasının orta dikmesi, parçayı ortasından dik kesen doğrudur. AB = 10 cm ise orta, A’dan 5 cm ileridedir ve doğru parçasına 90° durur.",
      "Ortadan geçen her doğru orta dikme değildir. Eğik kesen orta noktadan geçse bile dikme adını almaz.",
      "5 + 5 = 10. Dik açı 90°’dir. Orta dikme üzerindeki her nokta A ve B’ye eşit uzaklıktadır.",
      [
        ask("10 cm’lik doğru parçasının ortası uçtan kaç cm uzaktadır?", "5", "10", "20", "90", "Orta, uzunluğun yarısıdır. 10 ÷ 2 = 5.", 0),
        ask("Orta dikme doğru parçasıyla kaç derecelik açı yapar?", "90", "45", "180", "30", "Dikme, 90° demektir.", 1),
        ask("Orta dikme üzerindeki bir nokta için doğru olan hangisidir?", "İki uca uzaklığı eşittir", "Yalnız bir uca uzaktır", "Parçanın uzunluğunu değiştirir", "Her zaman parçanın üstündedir", "Eşit uzaklık, orta dikmenin tanımıdır.", 2),
      ],
    ),
    () => lesson(
      "İkisini ayırmak",
      "Açıortay bir açının içinde, orta dikme bir doğru parçasının üzerinde konuşulur. Biri açıyı, öteki parçayı iki eşit duruma böler. İkisi de «ortadan» geçebilir ama böldükleri şey farklıdır.",
      "Her 90°’lik çizgiye açıortay demek, dik açıyı açıortay sanmaktır. Açıortay, verilen açının yarısını alır; açı 90° olmak zorunda değildir.",
      "60°’lik açının açıortayı 30°’lik iki açı bırakır. 8 cm’lik parçanın orta dikmesi 4 cm’den 90° çıkar.",
      [
        ask("60°’lik açının açıortayı parçaları kaç derece yapar?", "30", "90", "60", "120", "60 ÷ 2 = 30. Burada dik açı gerekmez.", 0),
        ask("8 cm’lik parçanın orta dikmesi uçtan kaç cm geçer?", "4", "8", "16", "90", "8 ÷ 2 = 4.", 1),
        ask("Açıortay ile orta dikmeyi ayıran yargı hangisidir?", "Biri açıya, öteki doğru parçasına aittir", "İkisi de her zaman 45°’dir", "Orta dikme açıyı böler", "Açıortay uzunluğu ikiye böler", "Adlar, bölünen nesneyi söyler.", 2),
      ],
    ),
  ]
  return cards[day]()
}

function helpers(day) {
  const cards = [
    () => lesson(
      "Kenarortay",
      "Kenarortay, bir köşeyi karşı kenarın orta noktasına birleştiren doğru parçasıdır. Karşı kenar 12 cm ise kenarortay o kenarı 6 cm ve 6 cm diye böler. Üçgenin alanını ikiye bölmek zorunda değildir; kenarı ikiye böler.",
      "Kenarortayı yüksekliğe dik sanmak her üçgende doğru değildir. Yükseklik diktir, kenarortay orta noktaya gider. Eşkenar üçgende çakışırlar.",
      "12 ÷ 2 = 6. Orta nokta iki eşit kenar parçası bırakır.",
      [
        ask("12 cm’lik kenarı kenarortay kaç cm’den böler?", "6 ve 6", "4 ve 8", "12 ve 0", "3 ve 9", "Orta nokta kenarı iki eşit parçaya ayırır.", 0),
        ask("Kenarortay neyi birleştirir?", "Köşeyi karşı kenarın ortasına", "İki kenarın ortasını", "Yalnız yüksekliği", "Açının kollarını", "Tanım, köşe ile orta nokta arasındadır.", 1),
        ask("Her kenarortay yükseklik midir?", "Hayır", "Evet", "Yalnız geniş açıda", "Yalnız dik kenarda", "İkisi eşkenar ve ikizkenar üçgenin tepe kenarortayında çakışabilir.", 2),
      ],
    ),
    () => lesson(
      "Açıortay doğru parçası",
      "Üçgendeki açıortay, bir açının açıortayı olup karşı kenarı kesen doğru parçasıdır. 70°’lik açıyı 35° ve 35° diye böler. Kestiği kenarı eşit bölmek zorunda değildir.",
      "Açıortayın kenarı da her zaman ikiye böldüğünü sanmak kenarortayla karışmaktır. Eşit olan, açılardır.",
      "35 + 35 = 70. Karşı kenardaki parçalar ancak özel üçgenlerde eşit olur.",
      [
        ask("70°’lik tepeyi açıortay nasıl böler?", "35° ve 35°", "Kenarı 35 cm diye", "20° ve 50°", "70° ve 70°", "Açı iki eşit ölçüye ayrılır.", 0),
        ask("Açıortayın eşit böldüğü şey nedir?", "Açı", "Her zaman karşı kenar", "Çevre", "Alan", "Eşitlik açı ölçülerindedir.", 1),
        ask("Kenarortay ile açıortayın ayrımı nedir?", "Biri kenarın ortasına, öteki açının yarısına gider", "İkisi aynı doğru olmak zorundadır", "İkisi de 90°’dir", "İkisi de alanı eşit böler", "Gittikleri hedef farklıdır.", 2),
      ],
    ),
    () => lesson(
      "Yükseklik",
      "Yükseklik, bir köşeden karşı kenara veya onun uzantısına inen dik doğru parçasıdır. Dik olduğu için karşı kenarla 90° yapar. Alan hesabında kullanılan dikme budur.",
      "Eğik kenarı yükseklik sanmak alanı büyütür. Yükseklik en kısa dik uzaklıktır.",
      "Geniş açılı üçgende yükseklik dışarı düşer; yine 90°’dir. Dar üçgende içeride kalır.",
      [
        ask("Yükseklik karşı kenarla kaç derece yapar?", "90", "45", "60", "180", "Dikme, 90° demektir.", 0),
        ask("Geniş açılı üçgende yükseklik nerede olabilir?", "Üçgenin dışında", "Her zaman içeride", "Yoktur", "Kenarın ortasındadır", "Geniş açının karşısındaki dikme dışarı çıkar.", 1),
        ask("Alan formülündeki h hangisidir?", "Yükseklik", "Herhangi bir yan kenar", "Kenarortayın uzunluğu", "Çevre", "Alan, taban çarpı dik yüksekliktir.", 2),
      ],
    ),
    () => lesson(
      "Üçünü birden",
      "Aynı üçgende kenarortay kenarın ortasına, açıortay açının yarısına, yükseklik dik olarak karşı kenara gider. Eşkenar üçgende bir köşeden çizilen üç doğru çakışır. Çeşitkenar üçgende üçü ayrıdır.",
      "Bir çizgiyi görüp üçünün de çizildiğini söylemek, hedefe bakmamaktır.",
      "Eşkenar üçgende kenarlar eşit, açılar 60°’dir. Ortadan inen dikme hem kenarı hem açıyı böler.",
      [
        ask("Eşkenar üçgende bir köşeden inen dikme aynı zamanda nedir?", "Kenarortay ve açıortay", "Yalnız çevre", "Yalnız dış açı", "Hiçbiri", "Simetri, üç görevi bir doğruda toplar.", 0),
        ask("Çeşitkenar üçgende üç yardımcı eleman çakışır mı?", "Genelde hayır", "Her zaman", "Yalnız yükseklik 45° ise", "Kenarlar farklı diye evet", "Eşitlik olmadan üç hedef aynı noktaya düşmez.", 1),
        ask("90° yapan yardımcı eleman hangisidir?", "Yükseklik", "Her kenarortay", "Her açıortay", "Çevre", "Dik olma koşulu yüksekliğe aittir.", 2),
      ],
    ),
    () => lesson(
      "Çizmeden önce sormak",
      "Bir doğru parçası çizilecekse önce soru şudur: kenarın ortasına mı gidiyor, açıyı mı yarıyor, yoksa 90° mi iniyor? 10 cm’lik kenarın ortasına giden 5 cm’den böler. 50°’lik açıyı yarıyan 25° bırakır.",
      "Cetvelle gelişigüzel bir çizgi çekip ad vermek ölçüyü bozar. Ad, özelliği taşımıyorsa çizim o eleman değildir.",
      "10 ÷ 2 = 5 ve 50 ÷ 2 = 25. İki sayı iki ayrı elemana aittir.",
      [
        ask("10 cm’lik kenarın ortasına inen çizgi kenarı nasıl böler?", "5 cm ve 5 cm", "25° ve 25°", "10° ve 80°", "90° ve 0°", "Bu, kenarortayın işidir.", 0),
        ask("50°’lik açıyı iki eşit açıya bölen çizgi nedir?", "Açıortay", "Yükseklik", "Kenarortay", "Orta dikme", "50 ÷ 2 = 25. Eşitlenen şey açıdır.", 1),
        ask("Karşı kenara 90° inen çizgi nedir?", "Yükseklik", "Her zaman kenarortay", "Dış açı", "Çap", "90°, yüksekliğin koşuludur.", 2),
      ],
    ),
  ]
  return cards[day]()
}

function ratio(day) {
  const left = 2 + (day % 4)
  const right = left + 1 + (day % 3)
  const mul = 2 + (day % 5)
  const a = left * mul
  const b = right * mul
  return lesson(
    "Oran ve doğru orantı",
    `${left} kaleme ${a} lira ödeniyorsa birim fiyat ${a} ÷ ${left} = ${mul} liradır. ${right} kalem ${right} × ${mul} = ${b} lira eder. İki çokluk aynı çarpanla büyüyorsa doğru orantı vardır: ${left}/${a} = ${right}/${b}.`,
    `${left} ile ${right}’i toplayıp fiyat sanmak orantıyı toplama yapar. Fiyat, adetle çarpılır.`,
    `${mul} lira bir kalemdir. ${b} ÷ ${right} yine ${mul} verir. Birim fiyat sabitse orantı bozulmaz.`,
    [
      num(`${left} kalem ${a} lira ise ${right} kalem kaç liradır?`, b, [a + right, a * right, left * right], `Birim fiyat ${mul}. ${right} × ${mul} = ${b}.`, day),
      ask(`${left}/${a} oranı sadeleşince ne olur?`, `1/${mul}`, `${mul}/1`, `${left}/${right}`, "0", `${a} ÷ ${left} = ${mul}, yani 1 kalem ${mul} liradır. Oran 1/${mul} diye de yazılır.`, day + 1),
      ask("Doğru orantıda biri iki katına çıkınca öteki ne olur?", "İki katına çıkar", "Aynı kalır", "Yarıya iner", "Bir eklenir", "Çarpan ortaktır.", day + 2),
    ],
  )
}

function chance(day) {
  const events = [
    ["standart bir zarda 6 gelme", "1/6", "1/2", "6/1", "0", "Altı yüzden biri 6’dır."],
    ["standart bir zarda çift gelme", "3/6", "1/6", "2/6", "6/6", "2, 4 ve 6 vardır. Üç yüz altı yüzdür."],
    ["standart bir zarda 7 gelme", "0", "1/6", "7/6", "1", "Zarda 7 yoktur. Olanaksız olayın olasılığı 0’dır."],
    ["standart bir zarda 1’den büyük gelme", "5/6", "1/6", "1", "0", "2, 3, 4, 5 ve 6 uygundur. 1 uygun değildir."],
    ["düzgün bir madeni parada tura gelme", "1/2", "1/6", "2/1", "0", "İki yüz vardır, biri turadır."],
    ["içinde 3 kırmızı ve 1 mavi bilye olan torbadan mavi çekme", "1/4", "1/3", "3/4", "1/2", "Dört bilyeden biri mavidir."],
    ["aynı torbadan kırmızı çekme", "3/4", "1/4", "3/1", "1/2", "Dört bilyeden üçü kırmızıdır."],
    ["iki çocuklu bir ailede sıra önemliyken iki kız olma, eşit şansla", "1/4", "1/2", "1/3", "3/4", "KK, KE, EK, EE. Dört sonuçtan biri iki kızdır."],
    ["1’den 5’e kadar eşit olasılıklı bir sayıda 5 gelme", "1/5", "1/6", "5/1", "1/2", "Beş sayıdan biri 5’tir."],
    ["aynı sayıda 3’ten büyük gelme", "2/5", "3/5", "1/5", "4/5", "4 ve 5 uygundur. 1, 2 ve 3 uygun değildir."],
  ]
  const [event, correct, w1, w2, w3, why] = events[day]
  return lesson(
    "Teorik olasılık",
    `Teorik olasılık, eşit şanslı sonuçlar varken istenen sonuç sayısının tüm sonuç sayısına bölümüdür. ${event} olayının olasılığı ${correct}’dir. Deney yapmadan, sonuçların listesinden bulunur.`,
    "İstenen her şeye 1/2 yazmak, iki sonuç varmış gibi davranmaktır. Sonuç sayısı olayın kümesine bağlıdır.",
    `${why} Pay, uygun sonuç; payda, mümkün olan bütün sonuçlardır.`,
    [
      ask(`${event} olasılığı kaçtır?`, correct, w1, w2, w3, why, day),
      ask(`${event} olayında pay neyi sayar?`, "İstenen sonuçları", "Bütün renkleri keyfî", "Yalnız 1’i", "Deneme sayısını", "Payda bütün eşit sonuçları sayar.", day + 1),
      ask("Olanaksız bir olayın teorik olasılığı nedir?", "0", "1", "1/2", "Sonuç sayısına eşit", "İstenen sonuç yoksa pay 0’dır.", day + 2),
    ],
  )
}

function algebra(day) {
  const a = 4 + (day % 6)
  const b = 1 + (day % 5)
  if (day < 8) {
    const left = a + b
    return lesson(
      "Benzer terim",
      `${a}x + ${b}x = ${left}x. Harf aynıysa katsayılar toplanır. ${a}x + ${b} ise toplanmaz; ${b} sabit terimdir, yanında x yoktur.`,
      `${a}x + ${b}x = ${a * b}x yazmak çarpmadır. Toplama katsayıları toplar.`,
      `${a} tane x ile ${b} tane x, ${left} tane x eder.`,
      [
        ask(`${a}x + ${b}x hangisine eşittir?`, `${left}x`, `${a * b}x`, `${left}`, `${a}x + ${b}`, `${a} + ${b} = ${left}. Harf korunur.`, day),
        ask(`${a}x + ${b} sadeleşir mi?`, "Hayır", `Evet, ${left}x olur`, "Evet, katsayılar çarpılır", "Yalnız x pozitifse", "Sabit terim ile x terimi benzer değildir.", day + 1),
        ask(`${a}x − ${b}x kaçtır?`, `${a - b}x`, `${a + b}x`, `${a * b + 3}x`, `${a + b + 7}`, `${a} − ${b} = ${a - b}. Sonuç ${a - b}x olur, sabit sayı değil.`, day + 2),
      ],
    )
  }
  const n = 2 + (day % 4)
  const value = n * (a + 3)
  return lesson(
    "Dağılma",
    `${n}(x + 3) = ${n}x + ${n * 3}. Parantezin dışındaki çarpan, içerideki her terime dağılır. x yerine ${a} konursa ${n}(${a} + 3) = ${n} × ${a + 3} = ${value}.`,
    `Yalnız ilk terimi çarpıp ${n}x + 3 bırakmak, 3’e dağıtmayı unutur. Sonuç ${n * a + 3} olur, ${value} değil.`,
    `${n} × ${a} + ${n * 3} = ${n * a + n * 3} = ${value}.`,
    [
      ask(`x = ${a} konmadan önce ${n}(x + 3) açılırsa hangisi çıkar?`, `${n}x + ${n * 3}`, `${n}x + 3`, `${n}x + ${n + 3}`, `x + ${n * 3}`, `${n}, hem x’e hem 3’e çarpılır.`, day),
      num(`x = ${a} iken ${n}(x + 3) kaçtır?`, value, [n * a + 3, n + a + 3, a + 3], `${n} × ${a + 3} = ${value}.`, day + 1),
      ask("Dağılma hangi işlemin kısayoludur?", "Çarpmanın toplama üzerine", "Toplamanın çıkarma üzerine", "Bölmenin üs üzerine", "Yalnız sayı doğrusunun", "a(b + c) = ab + ac.", day + 2),
    ],
  )
}

function equation(day) {
  if (day < 12) {
    const coef = 2 + (day % 4)
    const x = 3 + (day % 5)
    const extra = 1 + (day % 3)
    const total = coef * x + extra
    return lesson(
      "Birinci dereceden denklem",
      `${coef}x + ${extra} = ${total} denkleminde önce ${extra} karşıya çıkar: ${coef}x = ${total - extra}. Sonra ${coef}’e bölünür: x = ${x}. Bilinmeyenin üssü 1’dir.`,
      `${total} − ${coef} yapmak, katsayıyı çıkan sanmaktır. Katsayı bölünerek ayrılır, çıkarılmaz.`,
      `Sağlama: ${coef} × ${x} + ${extra} = ${coef * x} + ${extra} = ${total}.`,
      [
        num(`${coef}x + ${extra} = ${total} ise x kaçtır?`, x, [total - coef, total + extra, coef], `${total} − ${extra} = ${coef * x}, sonra ${coef * x} ÷ ${coef} = ${x}.`, day),
        ask("Eşitliğin bir yanındaki sabit karşıya nasıl geçer?", "İşareti değişerek", "Katsayı olarak", "Silinerek", "Üs olarak", "Toplama karşıya çıkarma diye geçer.", day + 1),
        ask(`${coef} × ${x} + ${extra} toplamı ${total} değilse ne yapılır?`, "Çözüm baştan kontrol edilir", "x sıfır kabul edilir", "Katsayı atılır", "Denklem kesire çevrilmeden bırakılır", "Sağlama tutmuyorsa adımlardan biri bozuktur.", day + 2),
      ],
    )
  }
  const add = 2 + (day - 12)
  const bound = 9 + day
  const limit = bound - add
  return lesson(
    "Eşitsizlik",
    `x + ${add} < ${bound} eşitsizliğinde ${add} karşıya çıkar, yön korunur: x < ${limit}. Yön, yalnız negatif bir sayıyla çarpılır veya bölünürse ters döner. Burada bölünen negatif değildir.`,
    `${bound} + ${add}’i sınır sanmak eşitsizliği toplama çevirir. Sabit karşıya geçerken çıkarılır.`,
    `${limit} + ${add} = ${bound}. ${limit} sınırın kendisi çözüme girmez çünkü işaret küçüktür, küçük eşittir değildir.`,
    [
      ask(`x + ${add} < ${bound} çözümünde x nasıldır?`, `${limit} sayısından küçük`, `${limit} sayısına eşit`, `${bound} sayısından büyük`, `${add} sayısına eşit`, `${bound} − ${add} = ${limit}. Eşitlik yoktur.`, day),
      ask("Pozitif sayıyla bölünce eşitsizlik yönü ne olur?", "Aynı kalır", "Her zaman döner", "Silinir", "Küçük eşite döner", "Yönü negatif çarpan döndürür.", day + 1),
      ask(`${limit}, x + ${add} < ${bound} eşitsizliğinin çözümü müdür?`, "Hayır", "Evet", "Yalnız ${add} çiftse", "Yalnız tam sayıda", `${limit} + ${add} = ${bound}. Küçüktür işareti eşitliği almaz.`, day + 2),
    ],
  )
}

function algorithm(day) {
  if (day === 0) {
    return lesson(
      "İşlem sırası",
      "8 + 4 × 3 işleminde önce çarpma yapılır: 4 × 3 = 12. Sonra toplama: 8 + 12 = 20. Parantez olsaydı o önce gelirdi. Soldan sağa her işlemi aynı anda yapmak 36 verir ve yanlıştır.",
      "8 + 4 = 12 deyip 12 × 3 = 36 bulmak, çarpmanın önceliğini atlar.",
      "Çarpma 12, toplama 20. Adımlar ayrı yazılırsa ara sonuç karışmaz.",
      [
        ask("8 + 4 × 3 kaçtır?", "20", "36", "15", "32", "4 × 3 = 12, 8 + 12 = 20.", 0),
        ask("(8 + 4) × 3 kaçtır?", "36", "20", "15", "24", "Parantez önce biter: 12 × 3 = 36.", 1),
        ask("Öncelik sırası nasıldır?", "Parantez, çarpma-bölme, toplama-çıkarma", "Her zaman soldan sağa, tür fark etmez", "Toplama her şeyden önce", "Üs en sonda", "Parantez bir grubu öne alır.", 2),
      ],
    )
  }
  return lesson(
    "Çözümü kontrol",
    "2x + 5 = 17 denkleminde x = 6 bulunur: 2 × 6 + 5 = 17. Kontrol, bulunan sayıyı yerine koymaktır. 6 yerine 7 konursa 2 × 7 + 5 = 19 olur, eşitlik bozulur.",
    "Denklemi çözdüm diye yerine koymamak, işaret hatasını gizler. 19, 17’ye eşit değildir.",
    "12 + 5 = 17. Sağlama tuttuğu için x = 6 doğrudur.",
    [
      ask("2x + 5 = 17 denkleminin çözümü hangisidir?", "6", "7", "12", "11", "2 × 6 + 5 = 17.", 0),
      ask("x = 7 konursa 2x + 5 ne olur?", "19", "17", "14", "9", "14 + 5 = 19. Eşitlik tutmaz.", 1),
      ask("Kontrol neyi kanıtlar?", "Bulunan değer eşitliği sağlıyor mu", "Katsayı asal mı", "x her zaman 1’dir", "İşlem sırası yoktur", "Yerine koyma, çözümün denklemle barışık olduğunu gösterir.", 2),
    ],
  )
}

function region(day) {
  if (day < 8) {
    const r = 2 + day
    const area = 3 * r * r
    return lesson(
      "Dairenin alanı",
      `Dairenin alanı π × r²’dir. Bu hesapta π = 3 alınır. Yarıçap ${r} cm ise alan 3 × ${r} × ${r} = ${area} cm² olur. Çevre değil, içteki bölge istenir.`,
      `Yarıçapı ikiyle çarpıp 3 ile çarpmak çevreyi verir: 2 × 3 × ${r} = ${6 * r}. Alan, yarıçapın karesini kullanır.`,
      `${r}² = ${r * r}. 3 × ${r * r} = ${area}.`,
      [
        num(`π = 3 ve yarıçap ${r} cm ise dairenin alanı kaç cm²’dir?`, area, [6 * r, 3 * r, r * r], `3 × ${r}² = ${area}.`, day, "cm²"),
        ask(`Yarıçapı ${r} cm olan bu dairenin çevresi π = 3 iken kaç cm’dir?`, String(6 * r), `${area} cm²`, String(r), String(3 * r + 1), `2 × 3 × ${r} = ${6 * r}. ${area} cm² alandır, çevre değildir.`, day + 1),
        ask("Alan formülünde r² ne demektir?", "Yarıçapın kendisiyle çarpımı", "Çap", "Yarıçapın iki katı", "Merkez açı", "r × r, karedir.", day + 2),
      ],
    )
  }
  if (day < 14) {
    const a = 6 + (day - 8)
    const c = 10
    const h = 4
    const area = ((a + c) * h) / 2
    return lesson(
      "Yamuk",
      `Yamuğun alanı, paralel kenarların toplamının yükseklikle çarpımının yarısıdır. Paralel kenarlar ${a} cm ve ${c} cm, yükseklik ${h} cm ise alan (${a} + ${c}) × ${h} ÷ 2 = ${area} cm² olur.`,
      `Yarıyı unutmak ${(a + c) * h} cm² verir. Bu, yamuğu iki kat sayar.`,
      `${a} + ${c} = ${a + c}. ${a + c} × ${h} = ${(a + c) * h}. Yarısı ${area}.`,
      [
        num(`Paralel kenarları ${a} cm ve ${c} cm, yüksekliği ${h} cm olan yamuğun alanı kaç cm²’dir?`, area, [(a + c) * h, a * c, a + c + h], `(${a} + ${c}) × ${h} ÷ 2 = ${area}.`, day, "cm²"),
        ask("Yamukta hangi kenarlar formüle girer?", "Paralel olan iki kenar", "Yalnız eğik kenarlar", "Dört kenarın toplamı", "Köşegenler", "Yükseklik, paraleller arasındaki dik uzaklıktır.", day + 1),
        ask("÷ 2 neden vardır?", "Ortalama taban kullanılır", "Çevre iki kez yazılır", "π = 2 kabul edilir", "Yükseklik yarıya iner", "İki paralel kenarın ortalaması (a + c) / 2’dir.", day + 2),
      ],
    )
  }
  const d1 = 6 + (day - 14)
  const d2 = 8
  const area = (d1 * d2) / 2
  return lesson(
    "Eşkenar dörtgen",
    `Eşkenar dörtgenin alanı, köşegenlerin çarpımının yarısıdır. Köşegenler ${d1} cm ve ${d2} cm ise alan (${d1} × ${d2}) ÷ 2 = ${area} cm² olur. Dört kenar eşittir ama alan kenar çarpı kenar değildir.`,
    `Kenarlar 5 cm diye 25 cm² demek kare formülünü buraya taşır. Köşegenler dik kesişir, alan onların yarım çarpımıdır.`,
    `${d1} × ${d2} = ${d1 * d2}. Yarısı ${area}.`,
    [
      num(`Köşegenleri ${d1} cm ve ${d2} cm olan eşkenar dörtgenin alanı kaç cm²’dir?`, area, [d1 * d2, d1 + d2, 5 * 5], `(${d1} × ${d2}) ÷ 2 = ${area}.`, day, "cm²"),
      ask("Eşkenar dörtgende eşit olan nedir?", "Dört kenar", "Her zaman dört açı", "Köşegenler", "Yalnız bir kenar", "Açılar ancak karede dörtten 90° olur.", day + 1),
      ask("Köşegenler birbiriyle nasıl kesişir?", "Dik ve birbirini ortalar", "Her zaman eşit uzunluktadır", "Kenara paraleldir", "Kesişmez", "Eşkenar dörtgende köşegenler 90° kesişir.", day + 2),
    ],
  )
}

function review(day) {
  const cards = [
    () => lesson(
      "Borç ve uzaklık",
      "Bir hesap -12 liradan başlayıp 5 lira tahsilat görünce -12 + 5 = -7 olur. Mutlak değer | -7 | = 7’dir. Borç küçülmüştür ama hâlâ negatiftir.",
      "-12 + 5 = 17 yapmak işaretleri yok sayar. Toplama, 12’den 5 çıkarır ve eksi kalır.",
      "12 − 5 = 7. İşaret eksidir: -7. 0’a uzaklık 7’dir.",
      [
        ask("-12 + 5 kaçtır?", "-7", "7", "-17", "17", "Mutlak değerler çıkarılır, büyük olanın işareti kalır.", 0),
        ask("| -7 | kaçtır?", "7", "-7", "0", "12", "Uzaklık pozitiftir.", 1),
        ask("-7, 0’dan küçük müdür?", "Evet", "Hayır", "Mutlak değer alınca büyür diye hayır", "Yalnız paydayla", "Negatif sayılar 0’ın solundadır.", 2),
      ],
    ),
    () => lesson(
      "Kesir karşılaştırması",
      "5/6 ile 7/8 ortak paydada yazılır. Paydaların çarpımı 48’dir. 5/6 = 40/48, 7/8 = 42/48. 42 > 40 olduğu için 7/8 daha büyüktür.",
      "6 < 8 diye 5/6’yı büyük sanmak payı unutur. İki kesir de 1’e yakındır; hangisinin eksiği küçükse o büyüktür.",
      "1 − 5/6 = 1/6, 1 − 7/8 = 1/8. 1/8 < 1/6 olduğu için 7/8, 1’e daha yakındır.",
      [
        ask("5/6 ile 7/8 hangisi büyüktür?", "7/8", "5/6", "Eşittir", "5/6, payda küçük", "40/48 < 42/48.", 0),
        ask("5/6 hangi kesre eşittir?", "40/48", "35/48", "42/48", "5/48", "5/6 = (5 × 8)/(6 × 8) = 40/48.", 1),
        ask("1’e daha yakın olan hangisidir?", "7/8", "5/6", "İkisi de aynı uzaklıkta", "0", "Eksikleri 1/8 ve 1/6’dır. 1/8 daha küçüktür.", 2),
      ],
    ),
    () => lesson(
      "Prizma ve daire",
      "Ayrıtları 4 cm, 3 cm ve 2 cm olan prizmanın hacmi 4 × 3 × 2 = 24 cm³’tür. Yarıçapı 5 cm ve π = 3 olan dairenin alanı 3 × 25 = 75 cm²’dir. Biri hacim, biri alandır.",
      "24 ile 75’i toplayıp tek bir büyüklük yapmak birimleri siler.",
      "4 × 3 = 12, 12 × 2 = 24. 5² = 25, 3 × 25 = 75.",
      [
        ask("4 × 3 × 2 prizmanın hacmi kaç cm³’tür?", "24", "9", "14", "75", "Üç ayrıt çarpılır.", 0),
        ask("π = 3 ve r = 5 ise daire alanı kaç cm²’dir?", "75", "30", "15", "24", "3 × 5² = 75.", 1),
        ask("24 cm³ ile 75 cm² toplanabilir mi?", "Hayır, birimler farklı", "Evet, ikisi de  sayıdır", "Yalnız π = 3 ise", "Toplam 99 cm olur", "Hacim ile alan aynı tür değildir.", 2),
      ],
    ),
    () => lesson(
      "Orantı",
      "4 otobüs 120 yolcu taşıyorsa bir otobüs 30 yolcu alır. 7 otobüs 7 × 30 = 210 yolcu alır. Bu, doğru orantıdır.",
      "120’ye 3 ekleyip 123 demek, üç otobüsü üç yolcu sanmaktır.",
      "120 ÷ 4 = 30. 30 × 7 = 210.",
      [
        ask("4 otobüs 120 yolcu ise 7 otobüs kaç yolcu alır?", "210", "123", "150", "90", "120 ÷ 4 = 30 ve 30 × 7 = 210.", 0),
        ask("Bir otobüsün payı kaç yolcudur?", "30", "4", "7", "120", "120 ÷ 4 = 30.", 1),
        ask("Yolcu sayısı otobüsle doğru orantılıysa otobüs yarıya inerse yolcu ne olur?", "Yarıya iner", "Aynı kalır", "İkiye katlanır", "Sıfır olur", "Çarpan ortaktır.", 2),
      ],
    ),
    () => lesson(
      "Denklem",
      "3x − 4 = 11 denkleminde 4 karşıya toplanır: 3x = 15. x = 5. Sağlama 3 × 5 − 4 = 11.",
      "11 − 3 = 8 deyip x = 8 bulmak katsayıyı çıkan sayar.",
      "15 ÷ 3 = 5. 15 − 4 = 11. Eşitlik tutar.",
      [
        ask("3x − 4 = 11 ise x kaçtır?", "5", "8", "15", "7", "3x = 15, x = 5.", 0),
        ask("x = 5 için 3x − 4 kaçtır?", "11", "15", "19", "1", "15 − 4 = 11.", 1),
        ask("4 karşıya geçerken hangi işleme döner?", "Toplamaya", "Çarpmaya", "Bölmeye", "Üsse", "Çıkarma karşıya toplama olarak geçer.", 2),
      ],
    ),
  ]
  return cards[day]()
}

export const g7 = {
  "7|Tam sayılar ve rasyonel sayılar": (n) => seq(n, signed),
  "7|Rasyonel sayılarda sıralama": (n) => seq(n, order),
  "7|Rasyonel sayılarla işlem": (n) => seq(n, operate),
  "7|Dikdörtgenler prizması": (n) => seq(n, prism),
  "7|Veri dağılımları": (n) => seq(n, data),
  "7|Yansıma ve açıortay": (n) => seq(n, reflect),
  "7|Üçgende yardımcı elemanlar": (n) => seq(n, helpers),
  "7|Oran ve orantı": (n) => seq(n, ratio),
  "7|Teorik olasılık": (n) => seq(n, chance),
  "7|Cebirsel ifadelerle işlem": (n) => seq(n, algebra),
  "7|Denklem ve eşitsizlik": (n) => seq(n, equation),
  "7|Cebirsel algoritma": (n) => seq(n, algorithm),
  "7|Daire ve dörtgen alanı": (n) => seq(n, region),
  "7|Yıl sonu tekrarı": (n) => seq(n, review),
}
