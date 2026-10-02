import { ask, lesson, num, seq } from "./make.js"

function factors(day) {
  const cards = [
    () => lesson(
      "EBOB",
      "En büyük ortak bölen, iki sayıyı da kalansız bölen en büyük doğal sayıdır. 12 ve 18’in ortak bölenleri 1, 2, 3 ve 6’dır. En büyüğü 6’dır. 12 ÷ 6 = 2 ve 18 ÷ 6 = 3.",
      "Çarpımı 216’yı EBOB sanmak EKOK ile karışmaktır. Bölen, sayılardan büyük olamaz.",
      "12 = 2 × 2 × 3, 18 = 2 × 3 × 3. Ortak olan 2 × 3 = 6.",
      [
        ask("12 ve 18’in EBOB’u kaçtır?", "6", "36", "2", "216", "Ortak asal çarpanlar 2 ve 3’tür. 2 × 3 = 6.", 0),
        ask("36, 12 ve 18 için nedir?", "Ortak kat", "EBOB", "Asal çarpan", "Bölen", "36, ikisinden de büyüktür ve ikisine bölünür.", 1),
        ask("EBOB sayılardan büyük olabilir mi?", "Hayır", "Evet", "Yalnız çift sayılarda", "Yalnız aralarında asal ise", "Bölen, böldüğü sayıdan büyük olamaz.", 2),
      ],
    ),
    () => lesson(
      "Asal çarpanlarla EBOB",
      "24 = 2³ × 3 ve 36 = 2² × 3². EBOB’ta her asaldan küçük kuvvet alınır: 2² × 3 = 4 × 3 = 12. Büyük kuvvet EKOK’ta kalır.",
      "Kuvvetleri toplayıp 2⁵ × 3³ yazmak EKOK kuralı bile değildir; EKOK en büyük kuvveti alır, toplamaz.",
      "24 ÷ 12 = 2, 36 ÷ 12 = 3. 12’den büyük ortak bölen yoktur.",
      [
        ask("24 ve 36’nın EBOB’u kaçtır?", "12", "72", "6", "4", "2² × 3 = 12. Ortak olan en küçük kuvvetlerdir.", 0),
        ask("EBOB’ta kuvvetler nasıl seçilir?", "Her asaldan küçük olan", "Kuvvetler toplanır", "Her asaldan büyük olan", "Yalnız tek kuvvetler", "Küçük kuvvet, her iki sayıda da bulunan çarpandır.", 1),
        ask("24 = 2³ × 3 ayrımında 2’nin kuvveti kaçtır?", "3", "2", "8", "1", "2 × 2 × 2 = 8, kuvvet 3’tür.", 2),
      ],
    ),
    () => lesson(
      "Aralarında asal",
      "9 ve 16’nın 1’den başka ortak böleni yoktur. EBOB 1’dir. Bu iki sayı aralarında asaldır. 9 = 3², 16 = 2⁴. Ortak asal yoktur.",
      "Biri asal değil diye EBOB 1 olamaz sanmak yanlıştır. 9 ve 16 asal değildir ama ortak bölenleri yalnız 1’dir.",
      "9’un bölenleri 1, 3, 9. 16’nın bölenleri 1, 2, 4, 8, 16. Kesişim 1’dir.",
      [
        ask("9 ve 16’nın EBOB’u kaçtır?", "1", "3", "2", "144", "Ortak asal çarpan yoktur.", 0),
        ask("9 ve 16 aralarında asal mıdır?", "Evet", "Hayır, ikisi de asal değil", "Hayır, toplamları çift", "Yalnız EBOB 9 ise", "EBOB 1 ise sayılar aralarında asaldır.", 1),
        ask("16 = 2⁴ ifadesinde 4 neyi söyler?", "2’nin kaç kez çarpıldığını", "Sayının 4’e bölündüğünü zorunlu olarak EBOB’ta", "9 ile ortak kuvveti", "EKOK’u", "2⁴ = 2 × 2 × 2 × 2 = 16.", 2),
      ],
    ),
    () => lesson(
      "Fayans",
      "48 cm’ye 36 cm’lik bir dikdörtgen, kenarları bozmadan eşit karelere ayrılacaksa karenin bir kenarı 48 ve 36’nın ortak böleni olmalıdır. En büyük kare için EBOB alınır: 12 cm.",
      "Kenarları çarpıp 1728 cm’lik bir kare aramak alanı sorar. Soru, tekrar eden karenin kenarını sorar.",
      "48 ÷ 12 = 4, 36 ÷ 12 = 3. Dörtgen 4’e 3 karelik bir ızgara olur.",
      [
        ask("48 ve 36’nın EBOB’u kaçtır?", "12", "6", "144", "4", "12 = 2² × 3. Her iki sayıda da vardır.", 0),
        ask("En büyük kare fayansın kenarı bu problemde kaç cm’dir?", "12", "48", "36", "1728", "Kenar, iki kenarın EBOB’udur.", 1),
        ask("48 cm’lik kenara kaç tane 12 cm’lik fayans sığar?", "4", "3", "12", "2", "48 ÷ 12 = 4.", 2),
      ],
    ),
    () => lesson(
      "EKOK’un anlamı",
      "En küçük ortak kat, verilen sayıların ortak katları içindeki en küçük pozitif sayıdır. 4 ve 6 için 12, 24, 36… ortak katlardır. En küçüğü 12’dir.",
      "EBOB 2’yi EKOK sanmak bölen ile katı karıştırır. 2, ikisini de böler; katları değildir.",
      "12 ÷ 4 = 3 ve 12 ÷ 6 = 2. 12’den küçük pozitif ortak kat yoktur.",
      [
        ask("4 ve 6’nın EKOK’u kaçtır?", "12", "2", "24", "8", "12, her ikisinin de katı olan en küçük sayıdır.", 0),
        ask("24, 4 ve 6 için nedir?", "Ortak kat ama en küçüğü değil", "EKOK", "EBOB", "Asal", "24 de ortak kattır. En küçük olan 12’dir.", 1),
        ask("EKOK, sayılardan küçük olabilir mi?", "Hayır", "Evet", "Yalnız biri asal ise", "Yalnız toplam çiftse", "Bir sayının pozitif katı, kendisinden küçük olamaz.", 2),
      ],
    ),
    () => lesson(
      "Kuvvetle EKOK",
      "8 = 2³ ve 12 = 2² × 3. EKOK’ta her asaldan büyük kuvvet alınır: 2³ × 3 = 8 × 3 = 24. 3, yalnız 12’de olsa da ortak kata girer.",
      "Küçük kuvveti seçmek EBOB üretir: 2² = 4. 4, 12’nin katı değildir.",
      "24 ÷ 8 = 3, 24 ÷ 12 = 2. İkisi de kalansızdır.",
      [
        ask("8 ve 12’nin EKOK’u kaçtır?", "24", "4", "96", "2", "2³ × 3 = 24.", 0),
        ask("EKOK’ta 3 neden vardır?", "12’nin asal çarpanıdır ve ortak kat onu da içermelidir", "8, 3’e bölünür", "EBOB kuralı toplama ister", "3, 8’in çarpanıdır", "Ortak kat, her iki sayının bütün asal çarpanlarını taşır.", 1),
        ask("8 ve 12’nin EBOB’u kaçtır?", "4", "24", "2", "96", "Ortak kuvvet 2² = 4’tür.", 2),
      ],
    ),
    () => lesson(
      "Aynı anda kalkış",
      "Bir duraktan bir otobüs 12 dakikada bir, öteki 18 dakikada bir kalkıyor. İkisi birlikte 08.00’de kalktıysa yeniden aynı anda kalkmaları 12 ve 18’in EKOK’u kadar sürer. EKOK 36 dakikadır. Saat 08.36 olur.",
      "12 + 18 = 30 demek iki süreyi toplamaktır. Ortak an, toplam değil, ortak kattır.",
      "12 = 2² × 3, 18 = 2 × 3². EKOK = 2² × 3² = 4 × 9 = 36.",
      [
        ask("12 ve 18 dakikalık seferlerin EKOK’u kaç dakikadır?", "36", "6", "30", "216", "2² × 3² = 36.", 7),
        ask("08.00’den sonra ilk ortak kalkış hangisidir?", "08.36", "08.30", "08.06", "08.12", "36 dakika sonra ikisi de döner. 12 ve 18, 36’nın bölenidir.", 8),
        ask("6 bu problemde nedir?", "EBOB, ortak kalkış aralığı değil", "EKOK", "İki sürenin toplamı", "Saat", "6 ikisini de böler ama 6 dakikada 18’lik sefer henüz dönmemiştir.", 9),
      ],
    ),
    () => lesson(
      "Çarpım bağıntısı",
      "İki doğal sayıda EBOB × EKOK, sayıların çarpımına eşittir. 12 ve 18 için EBOB 6, EKOK 36’dır. 6 × 36 = 216 ve 12 × 18 = 216.",
      "6 × 18 = 108’i çarpım sanmak bir sayıyı EBOB’un yerine koyar. Bağıntı iki ayrı değeri kullanır.",
      "Bölenlerden biri biliniyorsa öteki 216 ÷ bilinen diye bulunur. 216 ÷ 6 = 36.",
      [
        ask("12 × 18 kaçtır?", "216", "30", "6", "36", "12 × 18 = 216. EBOB ile EKOK’un çarpımı da 216’dır.", 0),
        ask("EBOB 6 ise EKOK kaçtır?", "36", "12", "18", "216", "216 ÷ 6 = 36.", 1),
        ask("Bağıntı hangi sayılar için kullanılır?", "İki doğal sayı", "Üçgenin açıları", "Her ondalık", "Yalnız asal çiftler ve toplamları", "EBOB × EKOK = sayıların çarpımı.", 2),
      ],
    ),
    () => lesson(
      "Şerit",
      "20 cm ve 30 cm’lik iki şerit, kesilmeden eşit boylarda ve en kısa ortak uzunlukta uç uca eklenecekse EKOK aranır. 20 = 2² × 5, 30 = 2 × 3 × 5. EKOK = 2² × 3 × 5 = 60.",
      "EBOB 10’u cevap yapmak, şeritleri 10 cm’lik parçalara kesmektir. Soru kesmeden ortak uzunluk istiyor.",
      "60 ÷ 20 = 3, 60 ÷ 30 = 2. Üç kısa şerit ile iki uzun şerit aynı boya gelir.",
      [
        ask("20 ve 30’un EKOK’u kaçtır?", "60", "10", "600", "50", "2² × 3 × 5 = 60.", 0),
        ask("Bu şerit probleminde 10 cm neye yarar?", "Parçalara ayırma sorusuna, ortak boy sorusuna değil", "EKOK’tur", "Toplamdır", "Hiçbirine", "10, EBOB’tur. Kesmeden eklemek EKOK ister.", 1),
        ask("60 cm’lik ortak boyda 20 cm’lik şerit kaç kez kullanılır?", "3", "2", "6", "10", "60 ÷ 20 = 3.", 2),
      ],
    ),
    () => lesson(
      "Hangi problemi seçmeli",
      "28 kişilik iki grup ortak bir sıraya, kimse dışarıda kalmadan dizilecekse EKOK aranır. 28 = 2² × 7. İki grubun da katı olan en küçük sayı 28’dir; gruplar zaten eşit. Farklı bir örnek: 12’lik ve 16’lık gruplarda EKOK 48’dir. EBOB ise 4’tür ve o, sırayı değil, eşit küçük takımları böler.",
      "Her paylaşım sorusuna EBOB demek, artansız dizmeyi bölen sanmaktır. Artmasın ve kısa olsun deniyorsa EKOK, eşit küçük parça isteniyorsa EBOB.",
      "12 = 2² × 3, 16 = 2⁴. EKOK = 2⁴ × 3 = 48. EBOB = 2² = 4.",
      [
        ask("12 ve 16’nın EKOK’u kaçtır?", "48", "4", "192", "28", "2⁴ × 3 = 48.", 0),
        ask("12 ve 16’nın EBOB’u kaçtır?", "4", "48", "2", "8", "Ortak kuvvet 2² = 4.", 1),
        ask("Kutular artmasın ve ilk ortak dolum istensin, hangi kavram kullanılır?", "EKOK", "EBOB", "Karekök", "Eğim", "Ortak kat, iki grubun da tamamlandığı ilk andır.", 2),
      ],
    ),
  ]
  return cards[day]()
}

function powers(day) {
  const rows = [
    ["2³", "8", "6", "9", "5", "2³ = 2 × 2 × 2 = 8. Üs, 2’yi 3 ile çarpmak değildir."],
    ["5²", "25", "10", "7", "52", "5² = 5 × 5 = 25."],
    ["10³", "1000", "30", "100", "13", "10³ = 10 × 10 × 10 = 1000."],
    ["3⁴", "81", "12", "64", "27", "3⁴ = 81. 3³ = 27, bir 3 daha 81 eder."],
    ["2⁵", "32", "10", "25", "16", "2⁵ = 32. 2⁴ = 16’nın iki katıdır."],
    ["7⁰", "1", "0", "7", "70", "Sıfırdan farklı bir sayının sıfırıncı kuvveti 1’dir."],
    ["2³ × 2²", "32", "2⁵ diye yazılır ama 10’dur", "12", "2⁶", "Taban aynıysa üsler toplanır: 2⁵ = 32. Üsler çarpılmaz."],
    ["3⁵ ÷ 3²", "27", "3³ diye 9", "3⁷", "6", "Bölmede üsler çıkarılır: 3³ = 27."],
    ["(2³)²", "64", "2⁵", "12", "32", "Kuvvetin kuvvetinde üsler çarpılır: 2⁶ = 64."],
    ["(10²)³", "1000000", "10⁵", "1000", "600", "2 × 3 = 6. 10⁶ = 1 000 000."],
    ["5⁻¹", "1/5", "−5", "5", "1/25", "Negatif üs, sayıyı paydada bırakır. 5⁻¹ = 1/5."],
    ["2⁻³", "1/8", "−8", "−6", "8", "2⁻³ = 1/2³ = 1/8. Sonuç negatif değildir."],
    ["4,2 × 10³", "4200", "42", "4,2000", "4210", "10³ virgülü üç basamak sağa taşır."],
    ["6,04 × 10²", "604", "60,4", "6040", "6,04", "İki basamak sağa: 604."],
    ["3,5 × 10⁻²", "0,035", "350", "3,5", "0,35", "Negatif üs virgülü sola taşır. İki basamak: 0,035."],
  ]
  const [expr, correct, w1, w2, w3, why] = rows[day]
  const teach = expr.includes("× 10")
    ? `${expr} bir bilimsel gösterimdir. Sonuç ${correct} olur. 10’un üssü, virgülün kaç basamak ve hangi yöne gideceğini söyler.`
    : `${expr} ifadesinin değeri ${correct}’dir. Taban kendisiyle çarpılır; üs, kaç kez çarpılacağını söyler. Aynı tabanda çarpmada üsler toplanır, bölmede çıkarılır, kuvvetin kuvvetinde çarpılır.`
  return lesson(
    "Üslü ifade",
    teach,
    why,
    `${expr} = ${correct}. ${why}`,
    [
      ask(`${expr} kaçtır?`, correct, w1, w2, w3, why, day),
      ask(
        `${expr} hesaplanırken üs ne işe yarar?`,
        "Tabanın kaç kez çarpılacağını söyler",
        "Tabanla toplanır",
        "Sonucu her zaman negatif yapar",
        "Virgülü siler",
        `${expr} ifadesinde üs, çarpma sayısıdır. ${why}`,
        day + 1,
      ),
      ask(
        `${expr} sonucunu 0 sanmak hangi sayıda doğru olabilirdi?`,
        "Hiçbirinde; sıfırdan farklı tabanın kuvveti 0 değildir",
        "Yalnız üs 0 ise sonuç 0’dır",
        "Yalnız taban 10 ise",
        "Her negatif üste",
        "a⁰ = 1’dir, 0 değil. Negatif üs de sayıyı negatife çevirmez, paya alır.",
        day + 2,
      ),
    ],
  )
}

function roots(day) {
  if (day < 8) {
    const n = 2 + day
    const square = n * n
    return lesson(
      "Karekök",
      `${square} sayısının karekökü ${n}’dir çünkü ${n} × ${n} = ${square}. Karekök, karesi verilen sayıya eşit olan pozitif sayıdır. √${square} = ${n}.`,
      `${square} ÷ 2 = ${square / 2} yapmak karekök değildir. Kök, iki eşit çarpan arar.`,
      `${n}² = ${square}. Bu yüzden √${square} tam sayıdır.`,
      [
        num(`√${square} kaçtır?`, n, [square / 2, n + 1, square], `${n} × ${n} = ${square}.`, day),
        ask(`${n}² kaçtır?`, String(square), String(square + n), String(n + 1), "0", `${n} × ${n} = ${square}. İki kat almak kare değildir.`, day + 1),
        ask("Karekök negatif seçilir mi?", "Asıl kök pozitiftir", "Her zaman negatif", "0’dır", "Kesir olamaz", "√ işareti, pozitif kökü verir.", day + 2),
      ],
    )
  }
  if (day < 20) {
    const k = 2 + (day - 8)
    const inside = k * k * 2
    return lesson(
      "Kökte sadeleştirme",
      `√${inside} = √(${k * k} × 2) = ${k}√2. Tam kare çarpan kökün dışına katsayı olarak çıkar. İçeride karesi alınamayan 2 kalır.`,
      `√${inside} = ${inside / 2} yazmak ikiye bölmektir. ${k}² kök dışına çıkar, yok olmaz.`,
      `${k}√2’nin karesi ${k * k} × 2 = ${inside} olur. Sağlama tutar.`,
      [
        ask(`√${inside} sadeleşince hangisidir?`, `${k}√2`, String(inside), `√${k}`, `${k + 1}√2`, `${inside} = ${k * k} × 2. Kare, kök dışına ${k} diye çıkar.`, day),
        ask(`${k}√2’nin karesi kaçtır?`, String(inside), String(k * 2 + 1), "yalnız 2", String(k + inside), `(${k})² × 2 = ${inside}. Katsayıyı ikiyle çarpmak yetmez.`, day + 1),
        ask("Tam kare çarpan kök içinde bırakılırsa ne olur?", "Eşitlik bozulmaz ama sade değildir", "Sayı büyür", "Kök negatif olur", "Katsayı silinir", "√(k² × 2) ile k√2 aynı sayıdır.", day + 2),
      ],
    )
  }
  const rows = [
    ["√12 + √3", "3√3", "√15", "√36", "4√3", "√12 = 2√3. 2√3 + √3 = 3√3."],
    ["√18 − √8", "√2", "√10", "5√2", "√26", "√18 = 3√2, √8 = 2√2. 3√2 − 2√2 = √2."],
    ["√50 + √18", "8√2", "√68", "5√2", "√32", "√50 = 5√2, √18 = 3√2. Toplam 8√2."],
    ["√27 − √12", "√3", "√15", "5√3", "√39", "√27 = 3√3, √12 = 2√3. Fark √3."],
  ]
  const [expr, correct, w1, w2, w3, why] = rows[day - 20]
  return lesson(
    "Benzer kökler",
    `${expr} = ${correct}. Köklerin içi aynı sayıya indirilmeden toplanmaz. Önce tam kareler dışarı alınır, sonra katsayılar işleme girer.`,
    "Köklerin içini toplayıp tek köke almak yanlıştır. √a + √b, √(a + b) değildir.",
    why,
    [
      ask(`${expr} hangisine eşittir?`, correct, w1, w2, w3, why, day),
      ask("√a + √b her zaman √(a + b) midir?", "Hayır", "Evet", "Yalnız a = b ise evet", "Yalnız tam karede hayır", "√9 + √16 = 3 + 4 = 7, √25 = 5. Eşit değildir.", day + 1),
      ask("Katsayılar neden toplanabildi?", "Kökün içi aynı kaldı", "İçler toplandı", "Katsayılar her zaman 1’dir", "Kökler silindi", "Benzer köklerde iç aynıysa dışarıdaki sayılar işleme girer.", day + 2),
    ],
  )
}

function stats(day) {
  if (day < 5) {
    const extra = day
    const list = [2 + extra, 4 + extra, 4 + extra, 4 + extra, 11 + extra]
    const mean = (list[0] + list[1] + list[2] + list[3] + list[4]) / 5
    return lesson(
      "Üç ölçü",
      `${list.join(", ")} verilerinde tepe değer 3 kez tekrar eden ${4 + extra}’dir. Sıralı dizinin ortancası da ${4 + extra}’dir. Ortalama toplam ${list.reduce((s, n) => s + n, 0)} ÷ 5 = ${mean} olur.`,
      "Tepe değeri en büyük sanmak uç değeri seçer. Tepe, en sık olandır.",
      `Toplam ${list.reduce((s, n) => s + n, 0)}. Beş veri var. Ortadaki sıradaki sayı ${4 + extra}.`,
      [
        ask(`${list.join(", ")} dizisinin tepe değeri kaçtır?`, String(4 + extra), String(list[4]), String(list[0]), String(mean), "Üç kez görünen değer tepedir.", day),
        ask("Aynı dizinin ortancası kaçtır?", String(4 + extra), String(list[0]), String(list[4]), String(mean), "Beş sıralı verinin üçüncüsü ortancadır.", day + 1),
        num("Bu beş verinin ortalaması kaçtır? " + list.join("-"), mean, [4 + extra, list[4], list[0]], `Toplam ${list.reduce((s, n) => s + n, 0)} ÷ 5 = ${mean}.`, day + 2),
      ],
    )
  }
  const shown = 20 + day * 3
  const real = shown + 15
  return lesson(
    "Grafik ekseni",
    `Bir sütun grafiği ${shown} değerinden başlıyorsa kısa sütun ile uzun sütun arasındaki fark abartılır. Gerçek değer ${real} ise eksen 0’dan başlamadığı için göz, farkı olduğundan büyük görür.`,
    "Eksenin başladığı sayıyı sıfır sanmak yorumu bozar. Önce eksenin alt sınırı okunur.",
    `Görünen yükseklik ${shown} ile ${real} arasındadır. Fark ${real - shown}’dir. Grafik bu farkı bütün çubuk gibi çizebilir.`,
    [
      ask(`Eksen ${shown}’den başlıyorsa sütunun gerçek değeri ${real} ise eksik gösterilen kısım kaçtır?`, String(shown), String(real), "0", String(real - shown), `0’dan ${shown}’e kadar olan bölüm çizilmemiştir.`, day),
      ask("Sütun grafiği yorumlanırken ilk bakılacak yer neresidir?", "Eksenin hangi değerden başladığı", "Sütunun rengi", "Başlıkta kaç kelime olduğu", "Kâğıdın boyu", "Kırık eksen farkı büyütür.", day + 1),
      ask(`${shown} başlangıçlı grafikte ${real} değeri sıfırdan mı ölçülmüştür?`, "Hayır", "Evet", "Yalnız çift sayıda", "Renk koyuysa evet", "Eksen 0 değilse çubuk, değerin tamamı değildir.", day + 2),
    ],
  )
}

function probability(day) {
  const rows = [
    ["bir zarda 5 gelme", "1/6", "5/6", "1/2", "5/1"],
    ["bir zarda 4’ten büyük gelme", "2/6", "4/6", "1/6", "5/6"],
    ["bir zarda asal gelme", "3/6", "1/6", "4/6", "2/6"],
    ["bir zarda kare sayı gelme", "2/6", "1/6", "3/6", "4/6"],
    ["5 kırmızı ve 3 mavi bilyeden kırmızı çekme", "5/8", "3/8", "5/3", "1/2"],
    ["aynı torbadan mavi çekme", "3/8", "5/8", "3/5", "1/8"],
    ["aynı torbadan kırmızı gelmeme", "3/8", "5/8", "0", "1"],
    ["iki para atışında iki tura, sıra ile", "1/4", "1/2", "2/4 diye 1/3", "1/6"],
    ["1’den 10’a kadar bir sayıda 10’un katı gelme", "1/10", "1/2", "10/1", "0"],
    ["aynı aralıkta tek gelme", "5/10", "1/10", "4/10", "9/10"],
  ]
  const [event, correct, w1, w2, w3] = rows[day]
  return lesson(
    "Basit olay",
    `${event} olayının olasılığı ${correct}’dir. Pay istenen sonuçların sayısı, payda eşit şanslı bütün sonuçların sayısıdır. Tümleyen, 1’den bu olasılığın çıkarılmasıdır.`,
    "İstenen sayıyı payda diye yazmak kesri ters çevirir. 5 gelme 5/1 değil, 1/6’dır.",
    `Uygun sonuçlar sayılır, liste kapanınca payda belli olur. ${correct} bu listedir.`,
    [
      ask(`${event} olasılığı kaçtır?`, correct, w1, w2, w3, `İstenenler pay, bütün eşit sonuçlar paydadır: ${correct}.`, day),
      ask(`${event} olayının tümleyeni nasıl bulunur?`, "1’den olasılık çıkarılır", "Payda ile pay toplanır", "Olasılık ikiye katlanır", "Payda silinir", "Bir olay ile tümleyeni 1’e tamamlanır.", day + 1),
      ask("Kesin olayın olasılığı kaçtır?", "1", "0", "1/2", "Sonuç sayısına eşit bir tam sayı, 1 değil", "Bütün sonuçlar istenene uyuyorsa pay = payda.", day + 2),
    ],
  )
}

function identity(day) {
  if (day < 7) {
    const a = 2 + day
    const b = 3
    const sum = a + b
    const square = sum * sum
    const expand = a * a + 2 * a * b + b * b
    return lesson(
      "Kare özdeşliği",
      `(${a} + ${b})² = ${a}² + 2×${a}×${b} + ${b}². Sayılar yerine konursa ${a * a} + ${2 * a * b} + ${b * b} = ${expand}. Toplamın karesi ${sum}² = ${square} ile aynıdır.`,
      `(${a} + ${b})² = ${a}² + ${b}² demek ortadaki 2ab terimini siler. Eksik kalan ${2 * a * b}’dir.`,
      `${sum} × ${sum} = ${square}. Açılım da ${expand} verir.`,
      [
        num(`(${a} + ${b})² kaçtır?`, square, [a * a + b * b, a * a + b, sum * 2], `${sum}² = ${square}. Açılımda 2ab unutulursa ${a * a + b * b} kalır.`, day),
        ask(`(${a} + ${b})² açılımında ortadaki terim nedir?`, String(2 * a * b), String(a * b), String(a + b), String(a * a + b + 1), `2 × ${a} × ${b} = ${2 * a * b}. a² tek başına ortadaki terim değildir.`, day + 1),
        ask("a² + 2ab + b² hangi özdeşliktir?", "(a + b)²", "(a − b)²", "a² − b²", "yalnız 2ab", "Artı işaretli iki katlı çarpım, toplamın karesidir.", day + 2),
      ],
    )
  }
  const a = 4 + (day - 7)
  const diff = a * a - 9
  return lesson(
    "İki kare farkı",
    `${a}² − 3² = (${a} − 3)(${a} + 3). Çarpım ${a - 3} × ${a + 3} = ${diff} olur. ${a}² − 9 ifadesi de aynıdır çünkü 3² = 9.`,
    `${a}² − 9 = (${a} − 9)² yapmak sabit sayıyı olduğu gibi paranteze taşır. 9, bir karenin kendisidir, 3 olarak ayrılır.`,
    `${a - 3} × ${a + 3} = ${diff}. ${a}² = ${a * a}, ${a * a} − 9 = ${diff}.`,
    [
      ask(`${a}² − 9 çarpanlarına nasıl ayrılır?`, `(${a} − 3)(${a} + 3)`, `(${a} − 9)(${a} + 9)`, `(${a} − 9)²`, `(${a} − 3)²`, "x² − a² = (x − a)(x + a). Burada a = 3.", day),
      num(`${a}² − 9 kaçtır?`, diff, [a * a, (a - 9) * (a - 9), a - 9], `${a * a} − 9 = ${diff}.`, day + 1),
      ask("İki kare farkında ortadaki terim neden yoktur?", "Toplam ile farkın çarpımında ara terimler birbirini götürür", "Üsler toplanır", "3 asal olduğu için", "Karekök alınır", "(a − b)(a + b) = a² − b².", day + 2),
    ],
  )
}

function lines(day) {
  if (day % 2 === 0) {
    const m = 2 + (day % 5)
    const c = 1 + (day % 4)
    const x = 3 + (day % 3)
    const y = m * x + c
    return lesson(
      "Doğrunun denklemi",
      `y = ${m}x + ${c} doğrusunda eğim ${m}, y eksenini kestiği nokta ${c}’dir. x = ${x} iken y = ${m} × ${x} + ${c} = ${y}. Eğim, x bir artınca y’nin ne kadar değiştiğidir.`,
      `x ile ${c}’yi toplayıp eğimle çarpmamak, önce toplamayı seçer. Çarpma x’in üzerindedir.`,
      `${m} × ${x} = ${m * x}. ${m * x} + ${c} = ${y}.`,
      [
        num(`y = ${m}x + ${c} ve x = ${x} ise y kaçtır?`, y, [m * (x + c), m + x + c, x + c], `${m} × ${x} + ${c} = ${y}.`, day),
        ask(`y = ${m}x + ${c} doğrusunun eğimi kaçtır?`, String(m), `kesişim ${c}`, String(y), String(m + y + x), "x’in katsayısı eğimdir. Sabit terim kesişimdir.", day + 1),
        ask(`y = ${m}x + ${c} doğrusunda x bir artınca y ne kadar artar?`, String(m), String(y), String(m + x + y), String(c + y + 1), `Eğim ${m} ise artış ${m}’dir. ${c} kesişimdir, eğim değildir.`, day + 2),
      ],
    )
  }
  const s = 14 + day
  const d = 3
  const x = (s + d) / 2
  const y = (s - d) / 2
  return lesson(
    "Denklem sistemi",
    `x + y = ${s} ve x − y = ${d} sisteminde iki denklem toplanırsa 2x = ${s + d}, x = ${x}. Sonra y = ${s} − ${x} = ${y}. Toplama, y’yi yok eder.`,
    "İki denklemi ayrı ayrı aynı sanmak x’i buldurmaz. Biri toplam, öteki farktır.",
    `Sağlama: ${x} + ${y} = ${s}, ${x} − ${y} = ${d}.`,
    [
      num(`x + y = ${s} ve x − y = ${d} ise x kaçtır?`, x, [s, d, y], `2x = ${s + d}, x = ${x}.`, day),
      num(`Aynı sistemde y kaçtır?`, y, [x, s, d], `${s} − ${x} = ${y}.`, day + 1),
      ask("İki denklem neden toplandı?", "y’nin katsayıları +1 ve −1 olduğu için birbirini götürsün", "Eğim bulunsun", "EKOK istensin", "Karekök alınsın", "Toplamda y düşer, 2x kalır.", day + 2),
    ],
  )
}

function inequality(day) {
  if (day < 8) {
    const a = 3 + (day % 4)
    const limit = 6 + day
    const bound = limit + a
    return lesson(
      "Eşitsizliğin yönü",
      `x + ${a} > ${bound} ise x > ${limit}. Pozitif bir sayıyla işlem yönü korur. ${limit} sınırdır ve «büyüktür» işaretinde çözüme dahil edilmez.`,
      `${bound} − x diye bırakmak bilinmeyeni yalnız bırakmaz. Sabit karşıya geçer.`,
      `${limit} + ${a} = ${bound}. Bir büyük sayı, örneğin ${limit + 1}, eşitsizliği sağlar.`,
      [
        ask(`x + ${a} > ${bound} ise x nasıldır?`, `${limit}’ten büyük`, `${limit}’e eşit`, `${bound}’ten küçük`, `${a}’ya eşit`, `${bound} − ${a} = ${limit}. Yön korunur.`, day),
        ask(`${limit} bu eşitsizliğin çözümü müdür?`, "Hayır", "Evet", "Yalnız a çiftse", "Yalnız grafik çizilirse", "Eşitlik, büyüktür işaretine uymaz.", day + 1),
        ask("Pozitif sayıyla bölünce yön ne olur?", "Değişmez", "Döner", "Küçük eşite döner", "Silinir", "Yönü negatif çarpan değiştirir.", day + 2),
      ],
    )
  }
  const rows = [
    ["-2x < 8", "x > -4", "x < -4", "x < 4", "x > 4", "Negatife bölünce yön döner. 8 ÷ -2 = -4, küçük işareti büyüğe döner."],
    ["-3x > 12", "x < -4", "x > -4", "x > 4", "x < 4", "-3’e bölününce yön döner. 12 / -3 = -4."],
    ["-x ≤ 5", "x ≥ -5", "x ≤ -5", "x ≤ 5", "x ≥ 5", "-1’e bölmek yönü çevirir. Küçük eşit, büyük eşit olur."],
    ["-4x ≥ 20", "x ≤ -5", "x ≥ -5", "x ≥ 5", "x ≤ 5", "20 / -4 = -5. Yön döner."],
    ["-2x ≤ -6", "x ≥ 3", "x ≤ 3", "x ≤ -3", "x ≥ -3", "İki taraf da negatif. Bölünce yön döner: x ≥ 3."],
    ["-5x < -15", "x > 3", "x < 3", "x < -3", "x > -3", "-15 / -5 = 3. Küçük, büyüğe döner."],
    ["4 − x > 1", "x < 3", "x > 3", "x > -3", "x < 1", "−x > -3. −1’e bölününce x < 3."],
  ]
  const [expr, correct, w1, w2, w3, why] = rows[day - 8]
  return lesson(
    "Negatif çarpan",
    `${expr} eşitsizliğinde bilinmeyenin katsayısı negatiftir. İki taraf bu katsayıya bölününce eşitsizlik yönü değişir. Çözüm ${correct}.`,
    "Yönü olduğu gibi bırakmak, pozitif bölmenin alışkanlığıdır. Negatif, sayı doğrusunun tarafını çevirir.",
    why,
    [
      ask(`${expr} çözümünde x nasıldır?`, correct, w1, w2, w3, why, day),
      ask("Yön hangi durumda döner?", "Negatif sayıyla çarpma veya bölmede", "Her çıkarmada", "Pozitif toplamada", "EBOB alınca", "Negatif çarpan sırayı ters çevirir.", day + 1),
      ask("x > 3 ile x ≥ 3 arasındaki fark nedir?", "3, yalnız ikinciye dahildir", "Hiç fark yoktur", "Birincisi negatiftir", "İkincisi çözümsüzdür", "Eşit çizgisi, sınırı içeri alır.", day + 2),
    ],
  )
}

function triangles(day) {
  if (day < 8) {
    const a = 40 + day * 3
    const b = 55
    const c = 180 - a - b
    return lesson(
      "Üçgende açı",
      `Üçgenin iç açıları toplamı 180°’dir. ${a}° ve ${b}° verildiyse üçüncü açı ${c}°’dir. Bir dış açı, komşu olmayan iki iç açının toplamına eşittir.`,
      `${a + b}°’yi üçüncü açı sanmak toplamı 180’den çıkarmamaktır.`,
      `${a} + ${b} + ${c} = 180. Dış açı örneği: ${a}° + ${b}° = ${a + b}°.`,
      [
        num(`İç açılar ${a}° ve ${b}° ise üçüncü kaç derecedir?`, c, [a + b, 90, a], `180 − ${a} − ${b} = ${c}.`, day),
        num(`${a}° ve ${b}°’nin komşusu olmayan dış açı kaç derecedir?`, a + b, [c, 180, a], `Dış açı, uzak iki iç açının toplamıdır: ${a + b}.`, day + 1),
        ask("İki dik açı bir üçgende olur mu?", "Hayır", "Evet", "Yalnız ikizkenarda", "Yalnız büyük kenarda", "90 + 90 = 180, üçüncü açıya yer kalmaz.", day + 2),
      ],
    )
  }
  const triples = [
    [3, 4, 5],
    [5, 12, 13],
    [6, 8, 10],
    [8, 15, 17],
    [7, 24, 25],
    [9, 12, 15],
    [9, 40, 41],
    [20, 21, 29],
    [12, 16, 20],
    [12, 35, 37],
    [15, 20, 25],
  ]
  const [a, b, c] = triples[day - 8]
  return lesson(
    "Pisagor",
    `Dik üçgende hipotenüsün karesi, dik kenarların kareleri toplamıdır. ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c} = ${c}². Hipotenüs ${c} birimdir.`,
    `${a} + ${b} = ${a + b} demek Pisagor değildir. Kareler toplanır, sonra köke gidilir.`,
    `${a * a} + ${b * b} = ${c * c}. √${c * c} = ${c}.`,
    [
      num(`Dik kenarları ${a} ve ${b} olan üçgenin hipotenüsü kaçtır?`, c, [a + b, c + 1, a * b], `${a}² + ${b}² = ${c}².`, day),
      ask(`${a}² + ${b}² kaçtır?`, String(c * c), String(a + b), String(c), String(a * a + b), `${a * a} + ${b * b} = ${c * c}.`, day + 1),
      ask("Pisagor hangi üçgende kullanılır?", "Dik üçgende", "Her üçgende", "Yalnız eşkenarda", "Yalnız geniş açılıda", "90° yoksa kareler toplamı hipotenüsü vermez.", day + 2),
    ],
  )
}

function similar(day) {
  const cards = [
    () => lesson(
      "Eşlik",
      "İki üçgen, karşılıklı kenarları ve açıları eşitse eştir. KKK, KAK ve AÇA eşlik koşullarıdır. Aynı kenar uzunlukları yer değiştirerek çizilse de üçgenler eş kalır.",
      "Yalnız açıları eşit diye eş demek benzerliği eşlik sanmaktır. Açılar eşit, kenarlar orantılıysa üçgenler benzerdir, eş olmayabilir.",
      "3 cm, 4 cm, 5 cm kenarlı iki üçgen KKK ile eştir. Biri döndürülmüş olsa da kenarlar birebir eşleşir.",
      [
        ask("Kenarları 3, 4 ve 5 cm olan iki üçgen için hangisi kesindir?", "KKK ile eştirler", "Yalnız benzerler, eş olamazlar", "Açıları 90° olmak zorunda değildir diye eş değiller", "Çevreleri farklıdır", "Üç kenar karşılıklı eşitse üçgenler eştir.", 0),
        ask("Yalnız üç açısı eşit olan üçgenler her zaman eş midir?", "Hayır", "Evet", "Yalnız dik üçgende hayır", "Yalnız çevre 10 ise", "Açılar eşitse benzerlik vardır. Kenarlar kısa kalabilir.", 1),
        ask("KAK neyi eşit ister?", "İki kenar ve aralarındaki açıyı", "Üç açıyı", "Yalnız hipotenüsü", "Köşegenleri", "Açı, eşitlenen iki kenarın arasında olmalıdır.", 2),
      ],
    ),
    () => lesson(
      "AÇA",
      "AÇA eşliğinde iki açı ve bu açıların arasındaki kenar karşılıklı eşittir. Açılar 40° ve 70° ise üçüncü 70° değil, 180 − 110 = 70° olur; aradaki kenar ayrıca ölçülür.",
      "İki açı eşit diye üçüncü kendiliğinden eşittir, bu doğru. Eşlik için bir kenarın da eşleşmesi gerekir. Açı tek başına eşlik vermez.",
      "40 + 70 = 110. 180 − 110 = 70. Üçüncü açılar da eşit çıkar ama kenar verilmeden boyut belli olmaz.",
      [
        ask("40° ve 70° verilen üçgende üçüncü açı kaç derecedir?", "70", "110", "40", "180", "180 − 110 = 70.", 0),
        ask("AÇA’da kenar nerede durmalıdır?", "Eşitlenen iki açının arasında", "Herhangi bir yerde, bakılmaz", "Yalnız hipotenüste", "Üçgenin dışında", "Ara kenar, açıların kollarının ortak parçasıdır.", 1),
        ask("Üç açı eşit, kenar verilmemişse üçgenler nasıldır?", "Benzerdir, eş olduğu söylenemez", "Kesin eştir", "Eşsizdir", "Diktir", "Boyut serbest kalır.", 2),
      ],
    ),
    () => lesson(
      "Benzerlik oranı",
      "Benzer üçgenlerde açılar eşittir, kenarlar orantılıdır. 3-4-5 üçgeni ile 6-8-10 üçgeninin oranı 2’dir. 3 × 2 = 6, 4 × 2 = 8, 5 × 2 = 10.",
      "3 + 3 = 6 diye toplamla büyütmek oranı bozar. Her kenar aynı çarpanla çarpılır.",
      "6/3 = 8/4 = 10/5 = 2. Oran tek sayıdır.",
      [
        ask("3-4-5 üçgeninin 2 katı hangi kenarlardır?", "6, 8 ve 10", "5, 6 ve 7", "6, 7 ve 8", "9, 12 ve 20", "Her kenar 2 ile çarpılır.", 0),
        ask("6/3 oranı kaçtır?", "2", "3", "1/2", "9", "6 ÷ 3 = 2.", 1),
        ask("Benzer üçgenlerde eşit olan nedir?", "Karşılıklı açılar", "Her zaman kenarlar", "Çevreler", "Alanlar", "Kenarlar eşit değil, orantılıdır.", 2),
      ],
    ),
    () => lesson(
      "Eksik kenar",
      "İki benzer üçgende kenarlar 4 cm ve 6 cm karşılıklı, küçük üçgenin başka bir kenarı 10 cm ise büyükteki karşılığı 10 × 6/4 = 15 cm’dir.",
      "10 + 2 = 12 yapmak farkı ekler. Benzerlikte çarpan kullanılır: 6/4 = 1,5.",
      "10 × 1,5 = 15. 4 × 1,5 = 6. Aynı oran iki kenarda da vardır.",
      [
        ask("4’e 6 oranı varken 10 cm’nin karşılığı kaç cm’dir?", "15", "12", "16", "8", "10 × 6/4 = 15.", 0),
        ask("Benzerlik oranı 6/4 sadeleşince kaçtır?", "3/2", "2/3", "10", "24", "6/4 = 3/2.", 1),
        ask("Küçükten büyüğe geçerken oran nasıl uygulanır?", "Büyük/küçük ile çarpılır", "Fark eklenir", "Karekök alınır", "180’den çıkarılır", "6/4 > 1 olduğu için kenar uzar.", 2),
      ],
    ),
    () => lesson(
      "Alan oranı",
      "Benzerlikte kenar oranı 3 ise alan oranı 3² = 9’dur. Küçük üçgenin alanı 5 cm² ise büyük 45 cm² olur. Uzunluk iki kat, alan dört kat büyür; burada üç kat, dokuz kat.",
      "Alanı da 3 ile çarpıp 15 cm² bulmak kenar oranını alana taşır. Alan, oranın karesiyle çarpılır.",
      "3² = 9. 5 × 9 = 45.",
      [
        ask("Kenar oranı 3, küçük alan 5 cm² ise büyük alan kaç cm²’dir?", "45", "15", "25", "8", "5 × 9 = 45.", 0),
        ask("Kenar oranı 2 ise alan oranı kaçtır?", "4", "2", "8", "6", "2² = 4.", 1),
        ask("Neden kare vardır?", "Alan iki uzunluğun çarpımıdır", "Çevre iki kez yazılır", "Açı 90°’dir", "π = 3’tür", "Her iki boyut da oranla uzar.", 2),
      ],
    ),
    () => lesson(
      "Eş ile benzer",
      "Eş üçgenlerde kenar oranı 1’dir. Benzer üçgenlerde oran 1 olmak zorunda değildir. Oran 1 ise benzerlik eşliğe döner. 5 cm’lik kenarlar birebir örtüşüyorsa üçgenler eştir.",
      "Her benzer çifti eş sanmak, fotokopinin büyütmesini aslıyla aynı boy saymaktır.",
      "Oran 5/5 = 1. Alan oranı da 1’dir. Çevreler eşit kalır.",
      [
        ask("Kenar oranı 1 ise üçgenler nasıldır?", "Eştir", "Yalnız benzer, eş olamaz", "Açıları farklıdır", "Alan oranı 2’dir", "Oran 1, kenarları eşitler.", 0),
        ask("Kenar oranı 4 ise üçgenler eş midir?", "Hayır", "Evet", "Yalnız dikse", "Yalnız alan 4 ise", "Biri dört kat uzundur.", 1),
        ask("Eş üçgenlerin alan oranı kaçtır?", "1", "2", "0", "Kenar oranının kendisi, karesi değil, her zaman 2", "Aynı boy, aynı alan demektir.", 2),
      ],
    ),
    () => lesson(
      "Üçüncü kenar",
      "Benzer iki üçgende oran 5/2’dir. Küçük kenar 8 cm ise büyük karşılığı 8 × 5/2 = 20 cm’dir. Açıların eşit olduğu ayrıca verilmiştir.",
      "8 × 5 = 40 yapmak paydayı unutur. Oran bir kesirdir.",
      "8 × 5 = 40, 40 ÷ 2 = 20. 2 × 5 = 10 değil; 8’in beş yarısı 20’dir.",
      [
        ask("Oran 5/2 ve kenar 8 cm ise karşılığı kaç cm’dir?", "20", "40", "10", "13", "8 × 5/2 = 20.", 0),
        ask("5/2 oranı 1’den büyük müdür?", "Evet", "Hayır", "Eşittir", "Negatiftir", "5/2 = 2,5 > 1. Büyük üçgene geçilir.", 1),
        ask("Açılar eşit değilse bu çarpım yapılır mı?", "Hayır, önce benzerlik gerekir", "Evet, her üçgende", "Yalnız 8 çiftse", "Pisagor yeter", "Oran, benzerlikte tanımlıdır.", 2),
      ],
    ),
  ]
  return cards[day]()
}

function transform(day) {
  const cards = [
    ["Öteleme", "A(2, 1) noktası 4 birim sağa ve 3 birim yukarı ötelenirse görüntü (6, 4) olur. Öteleme şekli döndürmez, yalnız kaydırır.", "(2, 1) + (4, 3) = (6, 4).", "A(2, 1) 4 sağ ve 3 yukarı nereye gider?", "(6, 4)", "(6, 1)", "(2, 4)", "(-2, -2)", "2 + 4 = 6, 1 + 3 = 4."],
    ["Ötelemenin tersi", "B(7, 5) noktası 2 birim sola ve 4 birim aşağı giderse (5, 1) olur. Sola gitmek x’i azaltır, aşağı gitmek y’yi azaltır.", "7 − 2 = 5, 5 − 4 = 1.", "B(7, 5) 2 sola ve 4 aşağı nereye gider?", "(5, 1)", "(9, 9)", "(5, 9)", "(7, 1)", "x azalır, y azalır."],
    ["X ekseninde yansıma", "P(4, -2) x eksenine göre yansıyınca (4, 2) olur. Yatay eksen y’nin işaretini değiştirir.", "Aşağıdaki 2 birim, yukarıdaki 2 birim olur.", "P(4, -2) x ekseninde nereye gider?", "(4, 2)", "(-4, -2)", "(-4, 2)", "(2, 4)", "x kalır, y işaret değiştirir."],
    ["Y ekseninde yansıma", "Q(-3, 5) y eksenine göre (-3 değil) (3, 5) olur. Dikey eksen x’in işaretini değiştirir.", "Soldaki 3 birim sağa geçer.", "Q(-3, 5) y ekseninde nereye gider?", "(3, 5)", "(-3, -5)", "(3, -5)", "(5, -3)", "y = 5 kalır."],
    ["90° dönme", "R(1, 0) noktası orijin etrafında saat yönünün tersine 90° dönerse (0, 1) olur. x eksenindeki nokta y eksenine çıkar.", "(1, 0) → (0, 1).", "R(1, 0) saat yönünün tersine 90° nereye gider?", "(0, 1)", "(0, -1)", "(-1, 0)", "(1, 1)", "Çeyrek tur, eksenleri değiştirir."],
    ["180° dönme", "S(2, -3) orijin etrafında 180° dönerse (-2, 3) olur. İki koordinat da işaret değiştirir. Bu, orijine göre simetridir.", "2 → -2, -3 → 3.", "S(2, -3) 180° dönerse nereye gider?", "(-2, 3)", "(2, 3)", "(-2, -3)", "(3, -2)", "180° her iki işareti çevirir."],
    ["270° ya da -90°", "T(0, 2) saat yönünde 90° dönerse (2, 0) olur. Saat yönü, ters yöndeki 270° ile aynı görüntüyü verir.", "Yukarıdaki nokta sağa iner.", "T(0, 2) saat yönünde 90° nereye gider?", "(2, 0)", "(-2, 0)", "(0, -2)", "(2, 2)", "Saat yönü çeyrek tur sağa yatırır."],
    ["Şekil bozulmaz", "Öteleme, yansıma ve dönme uzaklıkları korur. 5 cm’lik bir kenar bu dönüşümlerden sonra da 5 cm’dir. Şekil eş kalır.", "Kenar 5 cm ise görüntüde de 5 cm’dir.", "5 cm’lik kenar yansıdıktan sonra kaç cm’dir?", "5", "10", "0", "25", "Bu dönüşümler eşlik üretir, boyutu değiştirmez."],
    ["Koordinatı karıştırmak", "U(6, 1) noktası 2 birim sağa ötelendikten sonra x eksenine yansırsa önce (8, 1), sonra (8, -1) olur. Sıra tersine işlenirse sonuç değişebilir.", "6 + 2 = 8. y = 1 yansıyınca -1.", "U(6, 1) önce 2 sağa, sonra x eksenine yansırsa nereye gider?", "(8, -1)", "(8, 1)", "(4, -1)", "(-8, 1)", "Öteleme x’i 8 yapar, yansıma y’yi -1 yapar."],
    ["Hangisi olmadığı", "Benzerlik oranı 3 olan bir büyütme, kenarı 3 katına çıkarır. Öteleme bunu yapmaz. Dönüşüm geometrisindeki üç işlem boyutu korur; homoteti ayrı bir konudur.", "5 cm, ötelemede 5 cm kalır, 3 kat büyütmede 15 cm olur.", "5 cm’lik kenar 3 kat benzer büyütmede kaç cm olur?", "15", "5", "8", "3", "5 × 3 = 15. Bu, öteleme değildir."],
  ]
  const [title, teach, example, stem, correct, w1, w2, w3, why] = cards[day]
  return lesson(
    title,
    teach,
    "Koordinatı ters eksene eklemek, sağa giderken y’yi değiştirmek gibi bir hatadır. Hangi eksenin değiştiği dönüşümün adına bağlıdır.",
    example,
    [
      ask(stem, correct, w1, w2, w3, why, day),
      ask(`${title} bir uzaklığı değiştirir mi?`, title === "Hangisi olmadığı" ? "Büyütme değiştirir" : "Hayır", "Her zaman iki kat yapar", "Alanı siler", "Açıyı 45° yapar", "Öteleme, yansıma ve dönme eşliktir. Büyütme oranı ayrıdır.", day + 1),
      ask("Orijin etrafında 180° döndürünce işaretler ne olur?", "İkisi de değişir", "Yalnız x değişir", "Hiçbiri değişmez", "Nokta kaybolur", "(x, y) → (−x, −y).", day + 2),
    ],
  )
}

function solids(day) {
  if (day < 4) {
    const r = 2 + day
    const h = 5
    const volume = 3 * r * r * h
    return lesson(
      "Silindir",
      `Silindirin hacmi taban alanı çarpı yüksekliktir. π = 3, yarıçap ${r} cm, yükseklik ${h} cm ise hacim 3 × ${r}² × ${h} = ${volume} cm³ olur.`,
      `Yarıçapı kareye almadan 3 × ${r} × ${h} = ${3 * r * h} yazmak çevre ile alanı karıştırır.`,
      `${r}² = ${r * r}. 3 × ${r * r} × ${h} = ${volume}.`,
      [
        num(`π = 3, r = ${r} cm, h = ${h} cm ise silindirin hacmi kaç cm³’tür?`, volume, [3 * r * h, 3 * r * r, 2 * 3 * r * h], `3 × ${r * r} × ${h} = ${volume}.`, day, "cm³"),
        ask("Taban hangi şekildir?", "Daire", "Üçgen", "Kare", "Yamuk", "Silindirin tabanı dairedir.", day + 1),
        ask(`Yanal alan açınımı bu silindirde hangi dikdörtgendir?`, `Bir kenarı çevre ${6 * r} cm, öteki yükseklik ${h} cm`, "Kare", "Yalnız daire", "Üçgen", `Çevre 2 × 3 × ${r} = ${6 * r} cm’dir.`, day + 2),
      ],
    )
  }
  if (day < 7) {
    const r = 3
    const h = 4 + (day - 4)
    const volume = 3 * r * r * h / 3
    return lesson(
      "Koni",
      `Koninin hacmi, aynı taban ve yükseklikteki silindirin üçte biridir. π = 3, r = ${r} cm, h = ${h} cm ise silindir ${3 * r * r * h} cm³, koni ${volume} cm³ olur.`,
      "3’e bölmemek silindiri cevap yapar. Koni sivridir, aynı kutunun üçte birini doldurur.",
      `3 × 9 × ${h} = ${3 * 9 * h}. Üçe bölününce ${volume}.`,
      [
        num(`π = 3, r = 3 cm, h = ${h} cm ise koninin hacmi kaç cm³’tür?`, volume, [3 * 9 * h, 9 * h, h], `(3 × 9 × ${h}) ÷ 3 = ${volume}.`, day, "cm³"),
        ask("Koni ile silindirin hacim ilişkisi nedir?", "Koni, aynı tabanlı silindirin 1/3’üdür", "Eşittir", "Koni iki kattır", "İlgisizdir", "Formülde 1/3 vardır.", day + 1),
        ask(`${h} cm yükseklik iki katına çıkarsa koninin hacmi ne olur?`, "İki katına çıkar", "Aynı kalır", "Dört katına çıkar", "Yarıya iner", "Hacim yükseklikle doğru orantılıdır. r sabittir.", day + 2),
      ],
    )
  }
  const r = 2 + (day - 7)
  const volume = 4 * r * r * r
  const surface = 12 * r * r
  return lesson(
    "Küre",
    `π = 3 iken kürenin hacmi 4 × r³, yüzey alanı 12 × r² alınabilir çünkü 4/3 × 3 = 4 ve 4 × 3 = 12’dir. r = ${r} cm ise hacim ${volume} cm³, yüzey ${surface} cm² olur.`,
    "Yüzey alanını hacim sanmak birimi karıştırır. r³ hacme, r² yüzeye gider.",
    `${r}³ = ${r * r * r}. 4 × ${r * r * r} = ${volume}. 12 × ${r * r} = ${surface}.`,
    [
      num(`π = 3 ve r = ${r} cm ise kürenin hacmi kaç cm³’tür?`, volume, [surface, r * r * r, 3 * r], `4 × ${r}³ = ${volume}.`, day, "cm³"),
      num(`Aynı kürenin yüzey alanı kaç cm²’dir?`, surface, [volume, 4 * r * r, 2 * r], `12 × ${r}² = ${surface}.`, day + 1, "cm²"),
      ask("Kürenin açınımı düzlemde tek parça bir ağ mıdır?", "Hayır, küre düzgün çokgen ağına ayrılmaz", "Evet, altı kare", "Evet, bir dikdörtgen", "Evet, bir üçgen", "Silindir ve koni açınır. Kürenin eğri yüzeyi düz ağa yatmaz.", day + 2),
    ],
  )
}

function review(day) {
  const cards = [
    () => lesson(
      "EBOB ve otobüs",
      "18 ile 24’ün EBOB’u 6, EKOK’u 72’dir. 6 × 72 = 432 ve 18 × 24 = 432. Bağıntı tutar. Ortak kalkış sorusu EKOK ister.",
      "6 dakikada bir ortak kalkış demek EBOB’u süre sanmaktır.",
      "18 = 2 × 3², 24 = 2³ × 3. EBOB = 2 × 3 = 6. EKOK = 2³ × 3² = 72.",
      [
        ask("18 ve 24’ün EKOK’u kaçtır?", "72", "6", "42", "432", "2³ × 3² = 8 × 9 = 72.", 0),
        ask("18 × 24 kaçtır?", "432", "72", "42", "6", "EBOB × EKOK = 6 × 72 = 432.", 1),
        ask("İki sefer aynı anda ne zaman yeniden karşılaşır?", "EKOK dakika sonra", "EBOB dakika sonra", "Toplam dakika sonra", "Fark dakika sonra", "Ortak kat, ikisinin de dönüş anıdır.", 2),
      ],
    ),
    () => lesson(
      "Üs ve kök",
      "2⁴ = 16 ve √16 = 4. Negatif üs 2⁻² = 1/4 eder. Karekök, pozitif kökü verir; 4’ün karesi 16’dır, -4’ün karesi de 16’dır ama √16 = 4’tür.",
      "2⁻² = -4 sanmak üssü eksi çarpım sayar.",
      "2 × 2 × 2 × 2 = 16. 1/2² = 1/4.",
      [
        ask("2⁻² kaçtır?", "1/4", "-4", "4", "-1/4", "2⁻² = 1/4.", 0),
        ask("√16 kaçtır?", "4", "-4", "8", "256", "Pozitif kök 4’tür.", 1),
        ask("2⁴ kaçtır?", "16", "8", "6", "32", "2⁴ = 16.", 2),
      ],
    ),
    () => lesson(
      "Doğru ve eşitsizlik",
      "y = 2x − 1 doğrusunda x = 4 ise y = 7’dir. -2x < 6 eşitsizliğinde x > -3’tür. Biri eşitlik, öteki yönlü çözümdür.",
      "Eşitsizlikte yönü çevirmeden x < -3 demek negatif bölmeyi atlar.",
      "2 × 4 − 1 = 7. 6 ÷ -2 = -3, yön döner.",
      [
        ask("y = 2x − 1 ve x = 4 ise y kaçtır?", "7", "9", "3", "8", "8 − 1 = 7.", 0),
        ask("-2x < 6 çözümünde x nasıldır?", "x > -3", "x < -3", "x < 3", "x > 3", "Negatife bölününce yön döner.", 1),
        ask("Eğimi 2 olan doğru x bir artınca y ne kadar artar?", "2", "1", "-1", "4", "Eğim, birim artıştaki değişimdir.", 2),
      ],
    ),
    () => lesson(
      "Dik üçgen",
      "Dik kenarları 8 ve 15 olan üçgenin hipotenüsü 17’dir. 64 + 225 = 289 = 17². Bu üçgen 8-15-17 üçlüsüdür.",
      "8 + 15 = 23 hipotenüs değildir.",
      "8² = 64, 15² = 225, toplam 289. 17 × 17 = 289.",
      [
        ask("Dik kenarları 8 ve 15 ise hipotenüs kaçtır?", "17", "23", "7", "120", "8² + 15² = 17².", 0),
        ask("17² kaçtır?", "289", "34", "225", "64", "17 × 17 = 289.", 1),
        ask("Pisagor geniş açılı üçgende doğrudan kullanılır mı?", "Hayır", "Evet", "Yalnız kenar çiftse", "Yalnız çevre 40 ise", "Bağıntı 90° içindir.", 2),
      ],
    ),
    () => lesson(
      "Silindir ve benzerlik",
      "π = 3, r = 2 cm, h = 6 cm olan silindirin hacmi 3 × 4 × 6 = 72 cm³’tür. Kenar oranı 3 olan benzer şekillerde alan oranı 9’dur. İki bilgi iki ayrı sorudur.",
      "Hacmi 9 ile çarpıp benzerlik sanmak silindiri üçgene karıştırır.",
      "2² = 4. 3 × 4 × 6 = 72. 3² = 9.",
      [
        ask("r = 2, h = 6, π = 3 ise silindir hacmi kaç cm³’tür?", "72", "36", "18", "12", "3 × 4 × 6 = 72.", 0),
        ask("Kenar oranı 3 ise alan oranı kaçtır?", "9", "3", "6", "27", "3² = 9. Hacim oranı 27 olurdu.", 1),
        ask("Hacim oranı kenar oranının hangi kuvvetidir?", "Küpü", "Kendisi", "Karesi", "Yarısı", "Üç boyut birden oranla çarpılır.", 2),
      ],
    ),
  ]
  return cards[day]()
}

export const g8 = {
  "8|Çarpanlar ve katlar": (n) => seq(n, factors),
  "8|Üslü ifadeler": (n) => seq(n, powers),
  "8|Kareköklü ifadeler": (n) => seq(n, roots),
  "8|Veri analizi": (n) => seq(n, stats),
  "8|Basit olayların olasılığı": (n) => seq(n, probability),
  "8|Cebirsel ifadeler ve özdeşlikler": (n) => seq(n, identity),
  "8|Doğrusal denklemler": (n) => seq(n, lines),
  "8|Eşitsizlikler": (n) => seq(n, inequality),
  "8|Üçgenler": (n) => seq(n, triangles),
  "8|Eşlik ve benzerlik": (n) => seq(n, similar),
  "8|Dönüşüm geometrisi": (n) => seq(n, transform),
  "8|Geometrik cisimler": (n) => seq(n, solids),
  "8|Yıl sonu tekrarı": (n) => seq(n, review),
}
