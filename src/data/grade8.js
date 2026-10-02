import { unit } from "../lib/unit.js"

const matematik = [
  unit("Çarpanlar ve katlar", [1, 2], [
    {
      title: "EBOB ve EKOK",
      paragraphs: [
        "En büyük ortak bölen, iki sayıyı da bölen en büyük sayıdır. En küçük ortak kat, ikisinin de katı olan en küçük pozitif sayıdır.",
        "Asal çarpanlara ayırınca ortak asal çarpanların en küçük üsleri EBOB’u, bütün asal çarpanların en büyük üsleri EKOK’u verir.",
      ],
      example: "12 = 2² × 3, 18 = 2 × 3². EBOB = 2 × 3 = 6. EKOK = 2² × 3² = 36.",
      questions: [
        ["12 ve 18’in EBOB’u kaçtır?", ["6", "36", "2", "9"], 0, "Ortak çarpanlar 2 ve 3’tür."],
        ["12 ve 18’in EKOK’u kaçtır?", ["36", "6", "216", "12"], 0, "2² × 3² = 36."],
        ["EBOB hangi problemde işe yarar?", ["Eşit en büyük parçaya ayırmakta", "İkisinin de katı olan zamanda", "Alan biriminde", "Olasılıkta"], 0, "Ortak bölen, parçanın boyunu belirler."],
      ],
    },
    {
      title: "Problem seçimi",
      paragraphs: [
        "“Kaç dakikada bir birlikte çalar?” sorusu EKOK’tur. “En çok kaçarlı eşit gruba ayrılır?” sorusu EBOB’tur.",
        "İki sayıdan biri diğerini bölüyorsa EBOB küçük olan, EKOK büyük olandır.",
      ],
      example: "6 ve 24: EBOB 6, EKOK 24’tür.",
      questions: [
        ["Ziller 6 ve 8 dakikada bir çalıyorsa birlikte kaç dakikada bir çalar?", ["24", "2", "14", "48"], 0, "EKOK(6, 8) = 24."],
        ["18 ve 24 kalemi eşit ve en büyük boyutta kutulara ayırırsan bir kutuda kaç kalem olur?", ["6", "72", "18", "4"], 0, "EBOB(18, 24) = 6."],
        ["6, 24’ü böldüğüne göre EKOK kaçtır?", ["24", "6", "144", "18"], 0, "Büyük sayı zaten ortak kattır."],
      ],
    },
  ]),
  unit("Üslü ifadeler", [3, 4, 5], [
    {
      title: "Tanım ve işlem",
      paragraphs: [
        "aⁿ, a’nın n kez çarpımıdır. Aynı tabanda çarpma üsleri toplar, bölme üsleri çıkarır: aᵐ × aⁿ = aᵐ⁺ⁿ.",
        "(aᵐ)ⁿ = aᵐⁿ. a⁰ = 1, a ≠ 0. Negatif üs, sayının tersini verir: a⁻ⁿ = 1/aⁿ.",
      ],
      example: "2³ × 2² = 2⁵ = 32. 5⁰ = 1. 10⁻² = 0,01.",
      questions: [
        ["2³ × 2² kaçtır?", ["2⁵", "2⁶", "4⁵", "2"], 0, "Üsler toplanır: 3 + 2 = 5."],
        ["5⁰ kaçtır?", ["0", "1", "5", "25"], 1, "Sıfırdan farklı sayının sıfırıncı kuvveti 1’dir."],
        ["10⁻² ondalık olarak nedir?", ["0,01", "100", "−100", "0,1"], 0, "1/100 = 0,01."],
      ],
    },
    {
      title: "Bilimsel gösterim",
      paragraphs: [
        "Çok büyük veya çok küçük sayılar a × 10ⁿ biçiminde yazılır. a, 1 ile 10 arasındadır.",
        "3 200 000 = 3,2 × 10⁶. 0,004 = 4 × 10⁻³.",
      ],
      example: "Işık hızı yaklaşık 3 × 10⁸ m/s diye yazılır.",
      questions: [
        ["3 200 000 bilimsel gösterimi hangisidir?", ["3,2 × 10⁶", "32 × 10⁶", "3,2 × 10⁵", "0,32 × 10⁷"], 0, "Virgül 6 basamak sola kayar, a 1 ile 10 arasındadır."],
        ["0,004 hangisidir?", ["4 × 10⁻³", "4 × 10³", "0,4 × 10⁻²", "4 × 10⁻⁴"], 0, "Virgül 3 basamak sağa kayınca üs −3 olur."],
        ["Bilimsel gösterimde a hangi aralıktadır?", ["1 ile 10 arası", "0 ile 1 arası", "10’dan büyük", "Negatif olmak zorunda"], 0, "1 ≤ a < 10."],
      ],
    },
  ]),
  unit("Kareköklü ifadeler", [6, 7, 8, 9, 10], [
    {
      title: "Karekök",
      paragraphs: [
        "Bir sayının karekökü, karesi o sayıyı veren pozitif sayıdır. √49 = 7 çünkü 7² = 49.",
        "√(a²) = |a|. Pozitif sayılarda kök dışarı çıkar. √(ab) = √a × √b, a ve b pozitifse.",
      ],
      example: "√12 = √(4 × 3) = 2√3.",
      questions: [
        ["√49 kaçtır?", ["7", "49", "14", "24,5"], 0, "7 × 7 = 49."],
        ["√12 sadeleşince nedir?", ["2√3", "6√2", "4√3", "√6"], 0, "4 kare olduğu için dışarı 2 çıkar."],
        ["√(a²) pozitif a için nedir?", ["a", "a²", "2a", "1"], 0, "Pozitif sayıda mutlak değer sayının kendisidir."],
      ],
    },
    {
      title: "İşlem",
      paragraphs: [
        "Katsayılar çarpılır, köklerin içi çarpılır: 2√3 × 4√3 = 8 × 3 = 24.",
        "Toplamada kök içleri aynıysa katsayılar toplanır. 5√2 + 3√2 = 8√2. 5√2 + 3√3 toplanıp tek kök olmaz.",
      ],
      example: "√18 + √8 = 3√2 + 2√2 = 5√2.",
      questions: [
        ["2√3 × 4√3 kaçtır?", ["24", "8√3", "6√3", "16"], 0, "8 × √9 = 8 × 3 = 24."],
        ["5√2 + 3√2 kaçtır?", ["8√2", "8√4", "15√2", "2√8"], 0, "Kök aynı, katsayılar toplanır."],
        ["√18 + √8 sadeleşince nedir?", ["5√2", "√26", "4√2", "6√2"], 0, "3√2 + 2√2 = 5√2."],
      ],
    },
  ]),
  unit("Veri analizi", [11, 12], [
    {
      title: "Ortalama, ortanca, tepe",
      paragraphs: [
        "Aritmetik ortalama toplamın veri sayısına bölümüdür. Ortanca, sıralanınca ortadaki değerdir. Çift sayıda veride ortadaki iki değerin ortalaması alınır.",
        "Tepe değer, en sık tekrar edendir. Bir dizide birden çok tepe olabilir.",
      ],
      example: "3, 5, 5, 7, 10. Ortalama 6, ortanca 5, tepe değer 5’tir.",
      questions: [
        ["3, 5, 5, 7, 10 dizisinin ortancası kaçtır?", ["5", "6", "7", "3"], 0, "Sıralı dizinin ortadaki değeri 5’tir."],
        ["Aynı dizinin tepe değeri kaçtır?", ["5", "6", "10", "3"], 0, "5 iki kez geçer."],
        ["3, 5, 7, 9’un ortancası kaçtır?", ["6", "5", "7", "9"], 0, "Ortadaki 5 ve 7’nin ortalaması 6’dır."],
      ],
    },
    {
      title: "Grafiği savunmak",
      paragraphs: [
        "Çizgi grafiği değişimi, sütun karşılaştırır. Eksen kesilerek başlarsa fark olduğundan büyük görünebilir.",
        "Ortalama tek başına yetmez. 1, 1, 1 ve 97’nin ortalaması 25’tir; çoğu veri 1’dir.",
      ],
      example: "Bir iddia “ortalama yükseldi” diyorsa açıklık ve ortancaya da bakılır.",
      questions: [
        ["1, 1, 1 ve 97’nin ortalaması kaçtır?", ["25", "1", "97", "50"], 0, "100 / 4 = 25."],
        ["Bu ortalama neden yanıltır?", ["Üç veri 1 iken ortalama 25’tir", "Hesap yanlıştır", "Ortanca yoktur", "Tepe 25’tir"], 0, "Uç değer ortalamayı çeker."],
        ["Eksenin kesilmesi grafikte ne yapabilir?", ["Farkı büyük gösterebilir", "Veriyi doğrultur", "Ortalamayı siler", "Tepeyi yok eder"], 0, "Sıfırdan başlamayan eksen yanıltabilir."],
      ],
    },
  ]),
  unit("Basit olayların olasılığı", [13, 14], [
    {
      title: "Olasılık",
      paragraphs: [
        "Eşit olasılıklı sonuçlarda olasılık, istenen sonuç bölü toplam sonuçtur. İki adil zarın toplam sonuç sayısı 36’dır.",
        "Toplamın 7 gelmesi: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Olasılık 6/36 = 1/6.",
      ],
      example: "Bir zarda asal sayı 2, 3, 5 olduğundan olasılık 3/6 = 1/2’dir.",
      questions: [
        ["İki zarda toplam sonuç kaçtır?", ["36", "12", "6", "18"], 0, "6 × 6 = 36."],
        ["İki zarda toplamın 7 olma olasılığı nedir?", ["1/6", "7/36", "1/2", "6/7"], 0, "6 durum vardır, 6/36 = 1/6."],
        ["Bir zarda asal gelme olasılığı nedir?", ["1/2", "1/6", "1/3", "2/3"], 0, "2, 3 ve 5 asal; 3/6 = 1/2."],
      ],
    },
    {
      title: "Tümleyen",
      paragraphs: [
        "Bir olayın olmama olasılığı 1’den olayın olasılığı çıkarılarak bulunur.",
        "Bir zarın 6 gelmemesi 5/6’dır. A ve A’nın değilinin toplamı 1’dir.",
      ],
      example: "Bir destede olayın olasılığı 1/4 ise olmama olasılığı 3/4’tür.",
      questions: [
        ["Olasılık 1/4 ise olmama olasılığı nedir?", ["3/4", "1/4", "4", "1/2"], 0, "1 − 1/4 = 3/4."],
        ["Zarda 6 gelmemesi nedir?", ["5/6", "1/6", "1", "0"], 0, "Altı yüzden beşi."],
        ["Olanaksız olayın olasılığı kaçtır?", ["0", "1", "1/2", "6"], 0, "İstenen sonuç yoktur."],
      ],
    },
  ]),
  unit("Cebirsel ifadeler ve özdeşlikler", [15, 16, 17], [
    {
      title: "Özdeşlik",
      paragraphs: [
        "(a + b)² = a² + 2ab + b². (a − b)² = a² − 2ab + b². a² − b² = (a − b)(a + b).",
        "Özdeşlik, her değerde doğru olan eşitliktir. Denklem ise bilinmeyenin bazı değerlerinde doğrudur.",
      ],
      example: "(x + 3)² = x² + 6x + 9. 5² − 2² = (5 − 2)(5 + 2) = 21.",
      questions: [
        ["(x + 3)² açılımı nedir?", ["x² + 6x + 9", "x² + 9", "x² + 3x + 9", "x² + 6x + 6"], 0, "2 × x × 3 = 6x orta terimdir."],
        ["5² − 2² kaçtır?", ["21", "9", "25", "10"], 0, "25 − 4 = 21."],
        ["Özdeşlik ile denklem farkı nedir?", ["Özdeşlik her değerde doğrudur", "Aynı şeydir", "Özdeşlikte harf yoktur", "Denklem her değerde doğrudur"], 0, "Denklem bir koşuldur."],
      ],
    },
    {
      title: "Çarpanlara ayırma",
      paragraphs: [
        "Ortak çarpan paranteze alınır: 6x + 9 = 3(2x + 3). İki kare farkı (a − b)(a + b) diye ayrılır.",
        "Tam kare olan x² + 6x + 9 = (x + 3)² diye yazılır. Önce ortak çarpan var mı bakılır.",
      ],
      example: "x² − 16 = (x − 4)(x + 4).",
      questions: [
        ["6x + 9’un çarpanları hangisidir?", ["3(2x + 3)", "6(x + 9)", "3(2x + 9)", "9(x + 1)"], 0, "3 ortaktır, içeride 2x + 3 kalır."],
        ["x² − 16 nasıl ayrılır?", ["(x − 4)(x + 4)", "(x − 16)(x + 1)", "(x − 8)²", "(x − 4)²"], 0, "İki kare farkıdır."],
        ["x² + 6x + 9 hangisidir?", ["(x + 3)²", "(x + 9)²", "(x + 6)²", "(x − 3)²"], 0, "Orta terim 2 × x × 3’tür."],
      ],
    },
  ]),
  unit("Doğrusal denklemler", [18, 19, 20, 21, 22, 23], [
    {
      title: "Doğru denklemi",
      paragraphs: [
        "y = mx + n doğrusunda m eğim, n y eksenini kestiği noktadır. Eğim, x bir artınca y’nin ne kadar değiştiğidir.",
        "Eğim pozitifse doğru yükselir, negatifse alçalır. Eğim 0 ise doğru yataydır.",
      ],
      example: "y = 2x − 1 doğrusu y eksenini −1’de keser. x = 3 iken y = 5’tir.",
      questions: [
        ["y = 2x − 1, y eksenini nerede keser?", ["−1", "2", "1", "0"], 0, "n = −1’dir."],
        ["x = 3 iken y kaçtır?", ["5", "3", "7", "1"], 0, "2 × 3 − 1 = 5."],
        ["Eğim negatifse doğru nasıldır?", ["Sağa gidildikçe alçalır", "Yataydır", "Her zaman yükselir", "Bir noktadır"], 0, "x artınca y azalır."],
      ],
    },
    {
      title: "Denklem sistemi",
      paragraphs: [
        "İki bilinmeyenli sistemde bir değişken yok edilerek çözülür. x + y = 10 ve x − y = 2 toplanırsa 2x = 12, x = 6, y = 4.",
        "Bulunan ikili iki denklemi de sağlamalıdır. Biri sağlanır öteki sağlanmazsa işlem hatası vardır.",
      ],
      example: "Bir kalem ve bir silgi 10 lira, kalem silgiden 2 lira pahalıysa kalem 6, silgi 4 liradır.",
      questions: [
        ["x + y = 10 ve x − y = 2 ise x kaçtır?", ["6", "4", "8", "12"], 0, "Toplam 2x = 12."],
        ["Aynı sistemde y kaçtır?", ["4", "6", "2", "8"], 0, "10 − 6 = 4."],
        ["Çözüm neden iki denklemde de denenir?", ["İkisi de sağlanmalıdır", "Biri yeter", "y silinsin diye", "Eğim bulunsun diye"], 0, "Sistem, iki koşulun ortak çözümüdür."],
      ],
    },
  ]),
  unit("Eşitsizlikler", [24, 25, 26], [
    {
      title: "Yön",
      paragraphs: [
        "Eşitsizliğin iki yanına aynı sayı eklenince yön değişmez. Negatif sayıyla çarpılınca veya bölününce yön değişir.",
        "−3x ≥ 12 ise x ≤ −4. Eşitlik de çözüme dahildir çünkü işaret ≥.",
      ],
      example: "Sayı doğrusunda x ≤ −4, −4’ün kendisini de içine alan soldaki ışındır.",
      questions: [
        ["−3x ≥ 12 ise x nedir?", ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"], 0, "−3’e bölününce yön döner."],
        ["≥ çözüme eşitliği katar mı?", ["Evet", "Hayır", "Yalnız pozitifte", "Yalnız grafikte"], 0, "Büyük veya eşit, sınırı da alır."],
        ["İki yana 5 eklemek yönü değiştirir mi?", ["Hayır", "Evet", "Yalnız ekside", "Her zaman"], 0, "Toplama yönü korur."],
      ],
    },
    {
      title: "Problem",
      paragraphs: [
        "“En az”, “en çok”, “yetmez” sözleri eşitsizlik kurar. 3 biletten sonra kasada en az 20 lira kalması 3t + 20 ≤ para diye kurulabilir; cümle dikkatle okunur.",
        "Çözüm bir sayı değil, bir aralıktır. Aralıktan bir değer seçilip cümlede kontrol edilir.",
      ],
      example: "Bir sayının 2 katı 10’dan büyükse 2n > 10, n > 5.",
      questions: [
        ["2n > 10 ise n nedir?", ["n > 5", "n > 10", "n < 5", "n = 5"], 0, "İki yan 2’ye bölünür."],
        ["Eşitsizliğin çözümü nasıldır?", ["Bir aralık olabilir", "Her zaman tek sayı", "Her zaman boş", "Bir doğru olmak zorunda"], 0, "Birden çok değer koşulu sağlayabilir."],
        ["“En az 20” hangi işarete yakındır?", ["≥ 20", "< 20", "= 0", "≠ 20"], 0, "20 de kabul edilir."],
      ],
    },
  ]),
  unit("Üçgenler", [27, 28, 29, 30], [
    {
      title: "Kenar ve açı",
      paragraphs: [
        "Üçgen eşitsizliği: bir kenar, diğer iki kenarın farkından büyük, toplamından küçüktür. 3, 4 ve 8 üçgen olmaz çünkü 3 + 4 < 8.",
        "Büyük kenarın karşısında büyük açı vardır. Pisagor: dik üçgende a² + b² = c², c hipotenüstür.",
      ],
      example: "Kenarları 3, 4, 5 olan üçgen diktir çünkü 9 + 16 = 25.",
      questions: [
        ["3, 4 ve 8 üçgen olur mu?", ["Hayır", "Evet", "Yalnız eşkenarsa", "Yalnız dikse"], 0, "3 + 4, 8’den küçük."],
        ["3, 4, 5 üçgeni nasıldır?", ["Dik", "Geniş kesin değil, diktir", "Eşkenar", "Çizilemez"], 0, "3² + 4² = 5²."],
        ["En büyük açının karşısında ne vardır?", ["En büyük kenar", "En küçük kenar", "Hipotenüs her üçgende", "Açıortay"], 0, "Kenar ile karşı açı birlikte büyür."],
      ],
    },
    {
      title: "Pisagor problemi",
      paragraphs: [
        "Dik kenarlar 6 ve 8 ise hipotenüs 10’dur. Hipotenüs 13, bir dik kenar 5 ise öteki 12’dir çünkü 25 + b² = 169.",
        "Pisagor yalnız dik üçgende kullanılır. Geniş açılı üçgende en uzun kenarın karesi, diğer karelerin toplamından büyüktür.",
      ],
      example: "Bir direk 8 m, gölge tabanı 6 m ve aradaki açı dikse uçlar arası 10 m’dir.",
      questions: [
        ["Dik kenarları 6 ve 8 olan üçgenin hipotenüsü kaçtır?", ["10", "14", "48", "100"], 0, "36 + 64 = 100, kök 10."],
        ["Hipotenüs 13, bir dik kenar 5 ise öteki kaçtır?", ["12", "8", "18", "√13"], 0, "169 − 25 = 144, kök 12."],
        ["Pisagor hangi üçgende kullanılır?", ["Dik üçgende", "Her üçgende aynı eşitlikle", "Yalnız eşkenarda", "Yalnız geniş açılıda"], 0, "Eşitlik dik açıya bağlıdır."],
      ],
    },
  ]),
  unit("Eşlik ve benzerlik", [31, 32], [
    {
      title: "Eşlik",
      paragraphs: [
        "Eş üçgenlerde karşılıklı kenarlar ve açılar eşittir. Kenar-açı-kenar, açı-kenar-açı ve kenar-kenar-kenar eşlik koşullarıdır.",
        "Eşlik, şeklin kopyasıdır. Döndürmek veya çevirmek eşliği bozmaz.",
      ],
      example: "Üç kenarı da eşit olan iki üçgen KKK ile eştir.",
      questions: [
        ["Üç kenarı eşit iki üçgen neden eştir?", ["KKK koşulu", "Yalnız bir açı eşit diye", "Alanları farklı diye", "Renkleri aynı diye"], 0, "Üç kenar eşliği yeterlidir."],
        ["Eş üçgenlerde karşılıklı açılar nasıldır?", ["Eşittir", "Toplamları 90’dır", "Biri ötekinin iki katıdır", "Ölçülmez"], 0, "Eşlik açıları da taşır."],
        ["Şekli çevirmek eşliği bozar mı?", ["Hayır", "Evet", "Yalnız dik üçgende", "Alan değişir"], 0, "Konum değişir, ölçüler değişmez."],
      ],
    },
    {
      title: "Benzerlik",
      paragraphs: [
        "Benzer üçgenlerde açılar eş, karşılıklı kenarlar orantılıdır. Benzerlik oranı k ise alan oranı k²’dir.",
        "Oran 2 ise kenarlar iki kat, alan dört kattır. Eşlik, oranı 1 olan benzerliktir.",
      ],
      example: "Kenarları 3, 4, 5 ve 6, 8, 10 olan üçgenler benzerdir. Oran 2, alan oranı 4’tür.",
      questions: [
        ["Benzerlikte kenar oranı 2 ise alan oranı kaçtır?", ["4", "2", "8", "16"], 0, "Alan, oranın karesiyle büyür."],
        ["3-4-5 ile 6-8-10 benzer mi?", ["Evet", "Hayır", "Yalnız dik değillerse", "Açılar eşit olamaz"], 0, "Kenarlar 2 katıdır."],
        ["Eşlik hangi benzerliktir?", ["Oranı 1 olan", "Oranı 0 olan", "Alanı farklı olan", "Açıları farklı olan"], 0, "Ölçüler aynıysa oran 1’dir."],
      ],
    },
  ]),
  unit("Dönüşüm geometrisi", [33, 34], [
    {
      title: "Öteleme ve yansıma",
      paragraphs: [
        "Öteleme, şekli bir yönde belirli uzaklık kadar kaydırır. Şekil ve yön aynı kalır.",
        "Yansımada ayna doğrusuna uzaklık korunur, yön ters döner. Dönme, bir nokta etrafında belirli açı kadar çevirir.",
      ],
      example: "Bir noktayı 3 birim sağa, 2 birim yukarı ötelemek koordinatı (x + 3, y + 2) yapar.",
      questions: [
        ["(1, 2) noktası 3 sağa ve 2 yukarı ötelenirse nereye gider?", ["(4, 4)", "(3, 2)", "(1, 4)", "(4, 2)"], 0, "1 + 3 = 4, 2 + 2 = 4."],
        ["Öteleme şeklin yönünü değiştirir mi?", ["Hayır", "Evet", "Yalnız yansımada hayır", "Alanı değiştirir"], 0, "Öteleme kaydırmadır."],
        ["Yansımada ne ters döner?", ["Yön", "Uzunluk", "Açı ölçüsü", "Alan"], 0, "Ayna, yönü çevirir."],
      ],
    },
    {
      title: "Dönme",
      paragraphs: [
        "90°’lik dönmede kenarlar dik konuma gelir. 180°’lik dönmede şekil ters yöne bakar ama açılar aynı kalır.",
        "Dönme merkezi şeklin içinde veya dışında olabilir. Merkez sabit kalır.",
      ],
      example: "Saat yönünün tersine 90° dönen bir ok, yukarı bakıyorsa sola bakar.",
      questions: [
        ["Dönmede sabit kalan nokta hangisidir?", ["Merkez", "Her köşe", "Ayna doğrusu", "Hiçbiri"], 0, "Dönme merkezin etrafında olur."],
        ["180° dönünce açılar değişir mi?", ["Hayır", "Evet, iki kat olur", "Yok olur", "90’a düşer"], 0, "Dönme ölçüleri korur."],
        ["Yukarı bakan ok, saat yönünün tersine 90° dönerse nereye bakar?", ["Sola", "Sağa", "Aşağı", "Yukarı kalır"], 0, "Ters saat yönü, yukarıyı sola çevirir."],
      ],
    },
  ]),
  unit("Geometrik cisimler", [35, 36], [
    {
      title: "Silindir ve koni",
      paragraphs: [
        "Dik silindirin hacmi taban alanı çarpı yüksekliktir: πr²h. Koninin hacmi aynı taban ve yükseklikteki silindirin üçte biridir.",
        "Yarıçap 3, yükseklik 10 ve π = 3 alınırsa silindirin hacmi 270, koninin hacmi 90 birim küp olur.",
      ],
      example: "Aynı bardak ve huni düşünülürse huninin hacmi bardağın üçte biridir.",
      questions: [
        ["r = 3, h = 10, π = 3 ise silindirin hacmi kaçtır?", ["270", "90", "30", "180"], 0, "3 × 9 × 10 = 270."],
        ["Aynı ölçüdeki koninin hacmi kaçtır?", ["90", "270", "30", "810"], 0, "270 / 3 = 90."],
        ["Koni hacmi silindire göre nasıldır?", ["Üçte biri", "Aynı", "İki katı", "Yarısı"], 0, "Formülde 1/3 vardır."],
      ],
    },
    {
      title: "Küre ve açınım",
      paragraphs: [
        "Kürenin bütün yüzey noktaları merkeze eşit uzaklıktadır. Yarıçap büyüyünce hacim hızlı artar.",
        "Prizma ve silindirin açınımı, yüzlerin aynı düzlemde çizilmiş hâlidir. Açınımda karşılıklı yüzler unutulmaz.",
      ],
      example: "Dikdörtgenler prizmasının açınımında 6 yüz vardır: üç çift eş dikdörtgen.",
      questions: [
        ["Kürede yarıçap neye eşittir?", ["Merkezden yüzeye uzaklığa", "Çapa", "Yalnız yüksekliğe", "Bir kenara"], 0, "Bütün yarıçaplar eşittir."],
        ["Dikdörtgenler prizmasının açınımında kaç yüz vardır?", ["6", "4", "5", "8"], 0, "Altı dikdörtgen bir araya gelir."],
        ["Açınım ne işe yarar?", ["Yüzeyin düz kâğıtta görülmesine", "Hacmi silmeye", "Köşeyi yok etmeye", "π’yi değiştirmeye"], 0, "Katlanınca cisim oluşur."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Üç soru",
      paragraphs: [
        "Etkinlik haftasında yeni konu yok. (x + 3)² = x² + 6x + 9. Dik kenarları 6 ve 8 olan üçgenin hipotenüsü 10’dur. İki zar 36 sonuç verir.",
      ],
      example: "12 ve 18’in EKOK’u 36’dır.",
      questions: [
        ["12 ve 18’in EKOK’u kaçtır?", ["36", "6", "216", "9"], 0, "2² × 3² = 36."],
        ["(x + 1)² açılımı nedir?", ["x² + 2x + 1", "x² + 1", "x² + x + 1", "2x + 1"], 0, "Orta terim 2x’tir."],
        ["Dik kenarları 5 ve 12 olan üçgenin hipotenüsü kaçtır?", ["13", "17", "7", "60"], 0, "25 + 144 = 169, kök 13."],
      ],
    },
  ]),
]

const fen = [
  unit("Mevsimler ve iklim", [1, 2, 3], [
    {
      title: "Mevsimler",
      paragraphs: [
        "Mevsimler, Dünya’nın eksen eğikliği ve Güneş çevresindeki dolanmasıyla oluşur. Eksen eğik olmasaydı yıl boyu aynı aydınlanma yaşanırdı.",
        "Kuzey yarım küre Güneş’e daha çok eğildiğinde yaz, tersinde kış olur. Güney yarım kürede mevsimler terstir.",
      ],
      example: "21 Haziran’da Kuzey yarım kürede yaz başlangıcıdır; Güney’de kış başlar.",
      questions: [
        ["Mevsimlerin temel nedeni nedir?", ["Eksen eğikliği ve dolanma", "Ay’ın evresi", "Dünya’nın Güneş’e uzaklığının tek başına yetmesi", "Bulut"], 0, "Eğiklik, ışığın geliş açısını yıl içinde değiştirir."],
        ["Kuzeyde yazken Güneyde ne olur?", ["Kış", "Aynı yaz", "Mevsim durur", "Tutulma"], 0, "Yarım küreler ters mevsim yaşar."],
        ["Eksen eğik olmasaydı ne olurdu?", ["Belirgin mevsim farkı oluşmazdı", "Gece olmazdı", "Dünya dönmezdi", "Ay yok olurdu"], 0, "Işığın geliş açısı yıl boyu benzer kalırdı."],
      ],
    },
    {
      title: "İklim ve hava",
      paragraphs: [
        "Hava, kısa süreli atmosfer durumudur. İklim, uzun yılların ortalamasıdır. Bir soğuk gün, iklimin değiştiğini kanıtlamaz.",
        "Rüzgâr, basınç farkından doğar. Hava yüksek basınçtan alçak basınca doğru akar.",
      ],
      example: "“Bugün yağmur yağdı” hava, “bu bölgede kışlar yağışlıdır” iklim cümlesidir.",
      questions: [
        ["İklim nedir?", ["Uzun yılların ortalama durumu", "Bugünün yağmuru", "Bir rüzgâr", "Bir mevsim günü"], 0, "İklim, yılların birikimidir."],
        ["Rüzgâr hangi yöne eser?", ["Yüksek basınçtan alçak basınca", "Alçaktan yükseğe her zaman", "Yalnız doğuya", "Basınçla ilgisi yoktur"], 0, "Hava, basıncı dengelemeye çalışır."],
        ["Tek soğuk gün iklimi değiştirir mi?", ["Hayır", "Evet", "Yalnız yazın", "Yalnız kutupta"], 0, "İklim tek günden okunmaz."],
      ],
    },
  ]),
  unit("DNA ve genetik kod", [4, 5, 6, 7, 8, 9], [
    {
      title: "DNA ve gen",
      paragraphs: [
        "DNA, kalıtım bilgisini taşıyan moleküldür. Nükleotitlerden oluşur. Gen, DNA’nın belirli bir protein veya özellikle ilgili bölümüdür.",
        "İnsan vücut hücrelerinde 46 kromozom vardır. Üreme hücrelerinde bu sayının yarısı, 23 kromozom bulunur.",
      ],
      example: "Göz rengine etki eden genler DNA üzerindedir; tek bir gen her özelliği tek başına açıklamayabilir.",
      questions: [
        ["Kalıtım bilgisini taşıyan molekül hangisidir?", ["DNA", "Yağ", "Su", "Glikoz"], 0, "DNA nükleotit dizisinde bilgi taşır."],
        ["İnsan vücut hücresinde kaç kromozom vardır?", ["46", "23", "92", "2"], 0, "23 çift, toplam 46’dır."],
        ["Üreme hücresinde kromozom sayısı nasıldır?", ["Yarıya iner", "Aynı kalır", "İkiye katlanır", "Sıfırlanır"], 0, "Döllenmede sayı yeniden 46 olur."],
      ],
    },
    {
      title: "Kalıtım, mutasyon, adaptasyon",
      paragraphs: [
        "Aleller, bir genin farklı biçimleridir. Baskın alel, çekinik alel yanında da kendini gösterebilir. Çekinik özellik için iki çekinik alel gerekir.",
        "Mutasyon, DNA’daki kalıcı değişimdir. Her mutasyon zararlı değildir. Modifikasyon çevrenin geçici etkisidir ve kalıtsal değildir. Adaptasyon, canlının yaşama şansını artıran kalıtsal uyumdur.",
      ],
      example: "Güneşten bronzlaşmak modifikasyondur; çocuklara bronzluk gen olarak geçmez.",
      questions: [
        ["Bronzlaşmak neden kalıtsal değildir?", ["Modifikasyondur", "Mutasyondur", "Adaptasyondur", "Bir aleldir"], 0, "DNA değişmemiştir."],
        ["Çekinik bir özelliğin görünmesi için ne gerekir?", ["İki çekinik alel", "Bir baskın alel", "Hiç alel", "Yalnız çevre"], 0, "Baskın alel yoksa çekinik görünür."],
        ["Adaptasyon nedir?", ["Yaşama şansını artıran kalıtsal uyum", "Geçici bronzluk", "Bir hastalık zorunlu", "Bir modifikasyon"], 0, "Doğal seçilim uyumlu olanı yaygınlaştırır."],
      ],
    },
    {
      title: "Biyoteknoloji",
      paragraphs: [
        "Biyoteknoloji, canlıları ve süreçlerini kullanarak ürün elde etmektir. Yoğurt bakterisi geleneksel, gen aktarımı modern bir örnektir.",
        "Yarar ile risk birlikte konuşulur. İlaç üretimi yarar, denetimsiz gen değişimi ise tartışılan risktir.",
      ],
      example: "İnsülin üreten bakteriler, diyabet tedavisinde kullanılan bir biyoteknoloji ürünüdür.",
      questions: [
        ["Yoğurt yapımı hangi alandadır?", ["Biyoteknoloji", "Jeoloji", "Optik", "Klimatoloji"], 0, "Bakteri, sütü yoğurda çevirir."],
        ["Modern örnek hangisidir?", ["Bakteride insülin üretimi", "Yalnız peynir mayası her çağda aynı diye modern sayılmaz", "Gölge", "Rüzgâr"], 0, "Gen ürünü ilaç yeni bir uygulamadır."],
        ["Biyoteknoloji konuşulurken ne birlikte düşünülür?", ["Yarar ve risk", "Yalnız yarar", "Yalnız renk", "Mevsim"], 0, "Denetim, riski azaltır."],
      ],
    },
  ]),
  unit("Basınç", [10, 11, 12], [
    {
      title: "Katı ve sıvı basıncı",
      paragraphs: [
        "Katı basıncı, kuvvetin yüzeye bölümüdür. P = F / S. Aynı kuvvet küçük yüzeye yayılırsa basınç artar.",
        "Sıvı basıncı derinlik ve sıvının yoğunluğuyla artar. Aynı derinlikte her yöne etki eder.",
      ],
      example: "Çivinin sivri ucu küçük yüzey olduğu için tahtaya batar. Küt uç aynı kuvvetle batmayabilir.",
      questions: [
        ["Aynı kuvvetle yüzey küçülürse basınç ne olur?", ["Artar", "Azalır", "Sıfırlanır", "Değişmez"], 0, "P = F / S, payda küçülünce basınç büyür."],
        ["Sıvı basıncı neyle artar?", ["Derinlikle", "Kabın şekliyle her zaman", "Renkle", "Yüzeyin sivriliğiyle yalnız"], 0, "Derinleştikçe üstteki sıvının ağırlığı artar."],
        ["Çivi neden batar?", ["Ucu küçük yüzey olduğu için basınç büyük olur", "Kütlesi sıfır olduğu için", "Sıvı olduğu için", "Basınç küçük olduğu için"], 0, "Kuvvet dar alana yığılır."],
      ],
    },
    {
      title: "Gaz basıncı",
      paragraphs: [
        "Gaz tanecikleri çarpa çarpa basınç yapar. Kapalı kapta sıcaklık artarsa gaz basıncı artabilir.",
        "Açık hava basıncı yükseklikle azalır. Kulak tıkanması, iç ve dış basıncın bir süre dengelenmemesidir.",
      ],
      example: "Yazın güneşte kalan kapalı şişe şişebilir; içindeki gazın basıncı artmıştır.",
      questions: [
        ["Kapalı kapta gaz ısınırsa basınç genellikle ne olur?", ["Artar", "Azalır", "Sıfırlanır", "Sıvıya döner"], 0, "Tanecikler daha hızlı çarpar."],
        ["Yükseğe çıkıldıkça açık hava basıncı ne olur?", ["Azalır", "Artar", "Sabit kalır her metre", "Sıvı basıncına döner"], 0, "Üstteki hava sütunu kısalır."],
        ["Kulak tıkanması neyle ilgilidir?", ["Basınç farkıyla", "DNA ile", "Mevsim adıyla", "Bir mutasyonla"], 0, "İç ve dış basınç bir an eşit değildir."],
      ],
    },
  ]),
  unit("Madde ve endüstri", [13, 14, 15, 16, 17, 18, 19], [
    {
      title: "Periyodik sistem",
      paragraphs: [
        "Elementler artan atom numarasına göre periyodik sistemde dizilir. Aynı gruptakilerin son katman elektron sayısı benzerdir ve kimyasal davranışları yakındır.",
        "Metaller genellikle ısı ve elektriği iletir, tel ve levha hâline gelir. Ametaller bu özellikleri göstermez.",
      ],
      example: "Sodyum ve potasyum aynı grupta olduğu için ikisi de suyla şiddetli tepki verebilir.",
      questions: [
        ["Periyodik sistem hangi sırayla dizilir?", ["Atom numarası", "Kütlenin rengine göre", "Alfabe zorunlu", "Kaynama noktası yalnız"], 0, "Proton sayısı sırayı belirler."],
        ["Aynı gruptakiler neden benzer davranır?", ["Son katman elektron düzeni benzerdir", "Hepsi gazdır", "Hepsi metal değildir zorunlu", "Kütleleri eşittir"], 0, "Değerlik elektronları tepkimeyi belirler."],
        ["Metaller için doğru olan hangisidir?", ["Isı ve elektriği iletir", "Hiç iletmez", "Tel olmaz", "Hepsi gazdır"], 0, "Bakır ve demir tipik metaldir."],
      ],
    },
    {
      title: "Fiziksel ve kimyasal değişim",
      paragraphs: [
        "Fiziksel değişimde madde aynı kalır: erime, yırtılma, çözünme. Kimyasal değişimde yeni madde oluşur: yanma, paslanma, ekşime.",
        "Kimyasal tepkimede kütle korunur. Atomlar yok olmaz, yeniden dizilir.",
      ],
      example: "Kâğıdın yırtılması fiziksel, kâğıdın yanması kimyasaldır.",
      questions: [
        ["Paslanma hangi değişimdir?", ["Kimyasal", "Fiziksel", "Yalnız hâl değişimi", "Bir çözünme"], 0, "Yeni bir madde, demir oksit oluşur."],
        ["Mumun erimesi nedir?", ["Fiziksel", "Kimyasal", "Yanma", "Periyodik"], 0, "Mum maddesi aynı kalır."],
        ["Tepkimede kütle ne olur?", ["Korunur", "Her zaman azalır", "Her zaman artar", "Yok olur"], 0, "Atom sayısı iki tarafta da aynıdır."],
      ],
    },
    {
      title: "Asit, baz ve endüstri",
      paragraphs: [
        "Asitler turnusolü kırmızıya, bazlar maviye çevirir. İkisi karışınca tuz ve su oluşturabilir; buna nötrleşme denir.",
        "Türkiye’de kimya endüstrisi gübre, ilaç, plastik ve temizlik ürünü üretir. Atık arıtılmazsa su ve toprağı kirletir.",
      ],
      example: "Mide asidini rahatlatan antiasit bir bazdır; asitle tepkimeye girer.",
      questions: [
        ["Baz turnusolü hangi renge çevirir?", ["Mavi", "Kırmızı", "Yeşil zorunlu", "Siyah"], 0, "Bazik ortamda turnusol mavi olur."],
        ["Nötrleşme ürünleri neler olabilir?", ["Tuz ve su", "Yalnız metal", "DNA", "Bir element çifti"], 0, "Asit ve baz birbirini dengeler."],
        ["Kimya atığı neden arıtılır?", ["Su ve toprağı korumak için", "Asidi çoğaltmak için", "Kütleyi artırmak için", "Metali ametale çevirmek için"], 0, "Arıtılmayan atık canlıya zarar verir."],
      ],
    },
  ]),
  unit("Basit makineler", [20, 21], [
    {
      title: "Kaldıraç ve makara",
      paragraphs: [
        "Basit makineler kuvvetten ya da yoldan kazanç sağlayabilir; ikisinden birden kazanç sağlamaz. İş korunur, sürtünme yok sayılırsa.",
        "Kaldıraçta kuvvet × kuvvet kolu = yük × yük kolu. Destek ortaya yakınsa küçük kuvvet büyük yükü kaldırabilir ama yol uzar.",
      ],
      example: "2 m’lik kolda 50 N, 1 m’lik koldaki 100 N yükü dengeler.",
      questions: [
        ["Kuvvet kolu 2 m, yük 100 N ve yük kolu 1 m ise dengeleyen kuvvet kaçtır?", ["50 N", "200 N", "100 N", "2 N"], 0, "F × 2 = 100 × 1."],
        ["Basit makine ikisinden birden kazanç sağlar mı?", ["Hayır", "Evet", "Yalnız makarada", "Yalnız yokuşta"], 0, "Kuvvet kazancı varsa yol uzar."],
        ["İş, sürtünme yokken ne olur?", ["Korunur", "Çoğalır", "Sıfırlanır", "Kütleye döner"], 0, "Küçük kuvvet uzun yol gider."],
      ],
    },
    {
      title: "Eğik düzlem",
      paragraphs: [
        "Eğik düzlem, yükü daha küçük kuvvetle yukarı taşır; alınan yol uzar. Vida ve rampa eğik düzlem örneğidir.",
        "Çıktı, dişli ve makara da kuvvetin yönünü veya büyüklüğünü değiştirir.",
      ],
      example: "Piyanonun merdivenden çıkarılması zor, rampadan sürüklenmesi daha kolaydır.",
      questions: [
        ["Rampa ne kazandırır?", ["Kuvvet", "Aynı anda hem kuvvet hem yol", "Kütle", "Enerji yoktan"], 0, "Kuvvet küçülür, yol uzar."],
        ["Vida hangi basit makineye örnektir?", ["Eğik düzlem", "Yalnız kaldıraç", "Yalnız makara", "Bir dişli olmak zorunda"], 0, "Vidanın yivi, sarılmış bir rampadır."],
        ["Makara kuvvetin neyini değiştirebilir?", ["Yönünü veya büyüklüğünü", "Kütlesini", "Kimyasını", "Sıcaklığını"], 0, "Sabit makara yön, hareketli makara kuvvet kazandırabilir."],
      ],
    },
  ]),
  unit("Enerji dönüşümleri ve çevre", [22, 23, 24, 25, 26, 27], [
    {
      title: "Besin zinciri ve dönüşüm",
      paragraphs: [
        "Fotosentez, ışık enerjisini kimyasal enerjiye çevirir. Solunum bu enerjiyi hücrede kullanılır hâle getirir.",
        "Bir enerji biçimi başka biçime dönerken bir kısmı ısı olarak dağılır. Verim bu yüzden %100 olmaz.",
      ],
      example: "Ampulün ısınması, elektrik enerjisinin tamamının ışık olmadığını gösterir.",
      questions: [
        ["Fotosentez hangi dönüşümdür?", ["Işık → kimyasal", "Kimyasal → ışık yalnız", "Isı → kütle", "Kinetik → DNA"], 0, "Bitki ışıkla besin üretir."],
        ["Verim neden %100 değildir?", ["Bir kısım enerji ısıya dağılır", "Enerji yok olur", "Kütle artar", "Zincir durur"], 0, "İstenen biçim dışında ısı çıkar."],
        ["Solunum ne yapar?", ["Besindeki enerjiyi hücre için kullanılabilir kılar", "Işık üretir", "Fotosentezin tersi olarak oksijeni yok eder yalnız", "Bir basit makinedir"], 0, "Hücre solunumu enerjiyi açığa çıkarır."],
      ],
    },
    {
      title: "Madde döngüsü ve sürdürülebilirlik",
      paragraphs: [
        "Su, karbon ve azot döngüleri maddenin canlılar ile cansız ortam arasında dolaşmasıdır. Döngü kirlenirse canlı da etkilenir.",
        "Sürdürülebilir kalkınma, bugünkü üretimi gelecek kuşağın kaynaklarını bitirmeden yapmaktır. Geri dönüşüm ve yenilenebilir enerji bu hedefe hizmet eder.",
      ],
      example: "Ormanın azalması karbonun havada birikmesine ve türlerin yaşam alanı kaybetmesine yol açar.",
      questions: [
        ["Karbon döngüsü bozulursa ne olabilir?", ["Atmosferdeki karbon artabilir", "Su yok olur kesin", "Azot metale döner", "Mevsim durur"], 0, "Orman ve yakıt, karbonun yerini değiştirir."],
        ["Sürdürülebilir kalkınma nedir?", ["Bugünü karşılarken geleceği tüketmemek", "Bütün kaynağı bu yıl kullanmak", "Üretimi durdurmak", "Yalnız geri dönüşümü yasaklamak"], 0, "Kuşaklar arası denge vardır."],
        ["Geri dönüşüm neyi azaltır?", ["Ham madde ihtiyacını", "Döngüyü", "Fotosentezi", "Basıncı zorunlu"], 0, "Var olan madde yeniden kullanılır."],
      ],
    },
  ]),
  unit("Elektrik yükleri ve elektrik enerjisi", [28, 29, 30, 31, 32, 33], [
    {
      title: "Yük ve kuvvet",
      paragraphs: [
        "Aynı yükler iter, zıt yükler çeker. Kuvvet, yükler büyüdükçe artar, uzaklık arttıkça azalır.",
        "Nötr cisimde artı ve eksi yük sayısı eşittir. Sürtünme elektron aktarırsa denge bozulur.",
      ],
      example: "İki eksi balon birbirini iter. Eksi balon artı yüklü çubuğu çeker.",
      questions: [
        ["Zıt yükler birbirine ne yapar?", ["Çeker", "İter", "Nötrleşir hemen, kuvvet yok", "Uzaklaşır"], 0, "Zıt işaretler yaklaşır."],
        ["Uzaklık artınca elektriksel kuvvet ne olur?", ["Azalır", "Artar", "Değişmez", "Yük olur"], 0, "Kuvvet uzaklığa bağlı olarak küçülür."],
        ["Nötr cisimde yükler nasıldır?", ["Artı ve eksi sayıları eşittir", "Yalnız eksidir", "Yalnız artıdır", "Yük yoktur, atom da yoktur"], 0, "Denge, net yükü sıfırlar."],
      ],
    },
    {
      title: "Elektrik enerjisi",
      paragraphs: [
        "Elektrik enerjisi hareket, ısı, ışık ve sese dönüşebilir. Güç, birim zamandaki enerjidir ve watt ile ölçülür.",
        "Enerji = güç × zaman. 1000 W’lık bir ısıtıcı 2 saat çalışırsa 2 kWh enerji harcar.",
      ],
      example: "Aynı işi gören LED lamba, eski lambadan daha az güç çeker; fatura düşer.",
      questions: [
        ["1000 W’lık alet 2 saat çalışırsa kaç kWh harcar?", ["2", "1000", "500", "2000"], 0, "1 kW × 2 saat = 2 kWh."],
        ["Güç birimi nedir?", ["Watt", "Joule yalnız", "Newton", "Coulomb"], 0, "Watt, birim zamandaki enerjidir."],
        ["LED’in daha az güç çekmesi neyi azaltır?", ["Harcanan enerjiyi", "Işığı her zaman sıfıra", "Yükü", "Basıncı"], 0, "Aynı sürede daha az kWh kullanılır."],
      ],
    },
  ]),
  unit("Bilim şenliği", [34, 35, 36], [
    {
      title: "Ürünü anlatmak",
      paragraphs: [
        "Yıl sonu bilim şenliğinde yıl içinde yaptığın ürün anlatılır. Sorun, yöntem, sonuç ve sınır bir dakikada söylenebilir olmalıdır.",
        "“İşin %100’ü bizde” gibi cümleler yerine ölçüm yazılır: kaç deneme, ne değişti, ne sabit tutuldu.",
      ],
      example: "“Rampa uzunluğu artınca aynı yükü 8 N yerine 5 N ile çektik. Sürtünmeyi azaltmak için aynı zemin kullanıldı.”",
      questions: [
        ["Şenlikte ilk söyleneceklerden biri nedir?", ["Sorun ve yöntem", "Yalnız afiş", "Sonucu abartmak", "Denemeyi gizlemek"], 0, "Dinleyen, neyi neden yaptığını anlamalıdır."],
        ["Adil denemede ne sabit tutulur?", ["Değiştirilmeyen değişkenler", "Hiçbir şey", "Sonuç", "Ölçüm"], 0, "Tek neden görmek için diğerleri aynı kalır."],
        ["8 N yerine 5 N neyi gösterir?", ["Kuvvetten kazanç", "Kuvvetin arttığını", "Kütlenin değiştiğini", "İşin yok olduğunu"], 0, "Daha küçük kuvvetle yük hareket etmiştir."],
      ],
    },
    {
      title: "Sınırını söylemek",
      paragraphs: [
        "İyi sunum, nerede yanılmış olabileceğini de söyler. Az deneme, genellemeyi zayıflatır.",
        "Arkadaşının sorusuna “bilmiyorum, şöyle denerdim” demek, uydurmaktan güçlüdür.",
      ],
      example: "“Üç deneme yaptık; sonuç her zeminde aynıdır diyemeyiz.”",
      questions: [
        ["Az deneme neden söylenir?", ["Genellemenin sınırını göstermek için", "Sunumu uzatmak için", "Ölçümü silmek için", "Sorunu gizlemek için"], 0, "Üç deneme bütün zeminleri kapsamaz."],
        ["Bilmediğin soruya dürüst cevap nedir?", ["Bilmiyorum, şöyle denerdim", "Uydurmak", "Konuyu değiştirmek", "Sonucu büyütmek"], 0, "Dürüst sınır, bilimi güçlendirir."],
        ["Yöntemde sabit tutulan şey neden anlatılır?", ["Farkın nereden geldiği anlaşılsın diye", "Süs için", "Kuvveti gizlemek için", "Şenlik kuralı diye değil"], 0, "Kontrol, sonucu savunur."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Üç fikir",
      paragraphs: [
        "Etkinlik haftasında yeni ünite yok. Basınç kuvvet bölü yüzeydir. Vücut hücresinde 46 kromozom vardır. Aynı yükler iter.",
      ],
      example: "20 N kuvvet 0,1 m² alana yayılırsa basınç 200 Pa’dır.",
      questions: [
        ["20 N ve 0,1 m² için basınç kaç pascaldır?", ["200", "2", "20", "0,005"], 0, "20 / 0,1 = 200."],
        ["İnsan vücut hücresinde kaç kromozom vardır?", ["46", "23", "92", "4"], 0, "Üreme hücresinde 23 vardır."],
        ["Aynı yükler birbirini ne yapar?", ["İter", "Çeker", "Nötrler", "Kırar"], 0, "Aynı işaret uzaklaşır."],
      ],
    },
  ]),
]

const turkce = [
  unit("Okuma Kültürü", [1, 2, 3, 4], [
    {
      title: "Kitabın serüveni",
      paragraphs: [
        "Yazı; kil tablet, papirüs, kâğıt ve ekranla taşındı. Taşıyıcı değişince okuma alışkanlığı da değişti ama amaç aynı kaldı: sözü saklamak.",
        "Bir metni ekranda okurken kaydırma, dipnotu atlamaya yol açabilir. Yavaşlamak, kâğıtta parmak basmak kadar işe yarar.",
      ],
      example: "“Bunu sonra okurum” diye açılan on sekme, hiçbirinin okunmamasıyla bitebilir. Birini seçmek okumadır.",
      questions: [
        ["Yazı taşıyıcısı değişince amaç ne olur?", ["Sözü saklamak aynı kalır", "Okumak biter", "Kâğıt yasaklanır", "Dipnot silinir"], 0, "Araç değişir, kayıt kalır."],
        ["On açık sekme neden tuzak olabilir?", ["Hiçbiri okunmadan kapanabilir", "Hepsini aynı anda okutur", "Bir kitaptır", "Bir dipnottur"], 0, "Seçim yapılmazsa okuma dağılır."],
        ["Ekranda yavaşlamak neye benzer?", ["Kâğıtta satırı takip etmeye", "Kitabı kapatmaya", "Yazıyı silmeye", "Tableti kırmaya"], 0, "İki araçta da dikkat bir yerde tutulur."],
      ],
    },
    {
      title: "Umut ve gerekçe",
      paragraphs: [
        "Okuma yazısında umut, boş bir alkış değildir. “Bu cümle beni şu işe çağırdı” diye bağlanır.",
        "Umutsuzluk da yazılabilir; gerekçesi somut olmalıdır. “Kimse okumuyor” yerine “sınıfta bu ay biten kitap sayısı iki” denir.",
      ],
      example: "Sayı, duygudan güçlü bir başlangıçtır. Duygu, sayının ardından gelir.",
      questions: [
        ["“Kimse okumuyor” neden zayıftır?", ["Ölçüsüz bir genellemedir", "Bir sayıdır", "Bir dipnottur", "Bir araçtır"], 0, "Kimse, kanıtsız herkestir."],
        ["Umut cümlesi neye bağlanmalıdır?", ["Seni çağıran somut bir işe", "Yalnız ünleme", "Kapağın rengine", "Sekme sayısına"], 0, "Gerekçe, umudu taşır."],
        ["İki biten kitap bir gözlem midir?", ["Evet, sınırlı bir gözlem", "Hayır, bir yasadır", "Bir genelleme, bütün ülke", "Bir tablet"], 0, "Sınıfın sayımı ülkene yayılmaz."],
      ],
    },
  ]),
  unit("Millî Mücadele ve Atatürk", [5, 6, 7, 8, 9], [
    {
      title: "Belge ve şiir",
      paragraphs: [
        "Aynı olayı bir belge ve bir şiir farklı anlatır. Belge tarih ve sayı verir. Şiir duyguyu sıkıştırır.",
        "İkisini birbirinin yerine koymak okumayı bozar. Şiirden tarih, belgeden heyecan beklenmez; ikisi yan yana okunur.",
      ],
      example: "“15 kişi kaldı” bir belgenin cümlesi olabilir. “Vatan bölünmez” bir şiir dizesinin hükmüdür.",
      questions: [
        ["Belgeden önce ne beklenir?", ["Tarih ve sayı", "Kafiye", "Abartı", "Yorumun gizlenmesi"], 0, "Belge denetlenebilir ayrıntı taşır."],
        ["Şiir neyi sıkıştırır?", ["Duygu ve hükmü", "Nüfus tablosunu", "Bir arşiv numarasını", "Bir haritayı"], 0, "Az sözle yoğun anlam kurar."],
        ["Şiirden kesin tarih çıkarmak neden risklidir?", ["Şiir duygu anlatır, tutanak değildir", "Şiir her zaman belgedir", "Tarih şiirde yazılmaz diye hiç yoktur", "Belge duygusuzdur ve okunmaz"], 0, "Tür, sözün görevini değiştirir."],
      ],
    },
    {
      title: "Eğitim vurgusu",
      paragraphs: [
        "Millî Mücadele metinlerinde cephe kadar okul da vardır. Savaşın bitince kurulacak hayat, öğretmen ve öğrenciyle konuşulur.",
        "Bir paragraf tek sahneyi seçer: ya cephane ya sınıf. İkisini aynı anda sıkıştırmak odağı dağıtır.",
      ],
      example: "“Çatı aktı, yine de yazı tahtası silindi.” Savaş yılının okulunu tek ayrıntı anlatır.",
      questions: [
        ["Tek sahne seçmek ne işe yarar?", ["Odağı tutar", "Tarihi siler", "Belgeyi şiire çevirir", "Sayıyı gizler"], 0, "İki konu bir paragrafta birbirini boğar."],
        ["“Yazı tahtası silindi” neyi gösterir?", ["Okulun savaş yılında da sürdüğünü", "Cephe olmadığını kesin", "Bir nüfus sayımını", "Bir kafiyeyi"], 0, "Tahta, dersin devamıdır."],
        ["Cephe ve okul birlikte anılırken hangisi doğrudur?", ["İkisi de mücadelenin parçasıdır", "Yalnız cephe vardır", "Okul 1923’ten sonra icat edildi", "Belge şiirdir"], 0, "Kurulacak hayat da savaşın hedefidir."],
      ],
    },
  ]),
  unit("Erdemler", [10, 11, 12, 13], [
    {
      title: "Erdemi eylemde görmek",
      paragraphs: [
        "Dürüstlük, cömertlik ve ölçülülük soyut sözcüklerdir. Metin onları bir eylemle gösterir.",
        "“Ekmeğin yarısını uzattı” cömertliktir. “Cömertti” yargıdır. Yargı, eylemden sonra gelirse inanılır.",
      ],
      example: "Yanlışını söyleyen kişi dürüsttür. Yanlışı gizleyip özür dilenmesi, özür değildir.",
      questions: [
        ["“Ekmeğin yarısını uzattı” neyi gösterir?", ["Cömertliği eylemle", "Bir yargıyı kanıtsız", "Bir belge tarihini", "Bir kafiyeyi"], 0, "Paylaşmak görülür."],
        ["Kanıtsız “dürüsttü” neden zayıftır?", ["Eylem yoktur", "Çok uzundur", "Bir sayıdır", "Bir dipnottur"], 0, "Sıfat, örnek ister."],
        ["Yanlışı gizlemek özür müdür?", ["Hayır", "Evet", "Bir erdemdir", "Bir belgedir"], 0, "Özür, payını söylemektir."],
      ],
    },
    {
      title: "Ölçü",
      paragraphs: [
        "Erdem abartıyla bozulur. Her şeyi veren kişi cömert değil, ölçüsüz olabilir. Metin sınırı da göstermelidir.",
        "Başkasının hakkını yemeden yapılan iyilik, erdemdir. Alkış için yapılan iyilik, gösteridir.",
      ],
      example: "“Kimse görmeden sırayı topladı” cümlesinde gösteri yoktur.",
      questions: [
        ["Alkış için yapılan iyilik neye döner?", ["Gösteriye", "Erdeme kesin", "Bir belgeye", "Bir özre"], 0, "Amaç görünmek olunca erdem eksilir."],
        ["Ölçü neden gerekir?", ["İyilik başkasının hakkını yememelidir", "Erdem sınırsız bağış demektir", "Eylem yasaktır", "Yargı yeter"], 0, "Sınır, erdemi korur."],
        ["“Kimse görmeden topladı” neyi kanıtlar?", ["Gösteriş olmadığını", "Bir tarihi", "Bir şiiri", "Bir nüfusu"], 0, "Tanık yokken yapılan iş, alkışa bağlı değildir."],
      ],
    },
  ]),
  unit("Millî Kültürümüz", [14, 15, 16, 17, 18], [
    {
      title: "Destan ve hayat",
      paragraphs: [
        "Destan, bir topluluğun kendini anlattığı büyük anlatıdır. Olağanüstülük vardır ama çekirdekte bir değer durur: birlik, yurt, adalet.",
        "Destandaki demir dağı gerçek bir dağ diye okunmaz. Dağ, aşılan engelin büyütülmüş hâlidir.",
      ],
      example: "Ergenekon’da dağdan çıkış, sıkışmış bir topluluğun yeniden yurt bulması diye okunabilir.",
      questions: [
        ["Destandaki olağanüstülük ne işe yarar?", ["Değeri büyütür", "Tarihi tutanak yapar", "Sayı verir", "Dipnot olur"], 0, "Dağ, engelin imgeleridir."],
        ["Demir dağı gerçek dağ diye okumak neden eksiktir?", ["Simgeyi yok sayar", "Destanı belgeler", "Değeri siler doğru diye", "Bir ölçüdür"], 0, "Anlatı birebir coğrafya değildir."],
        ["Destanın çekirdeğinde ne durur?", ["Topluluğun değeri", "Yalnız bir kahramanın adı", "Bir fiyat", "Bir ekran"], 0, "Birlik ve yurt gibi değerler taşınır."],
      ],
    },
    {
      title: "Halk edebiyatı",
      paragraphs: [
        "Âşık şiiri sazla ve sade dille söylenir. Hece ölçüsü ve uyak kulağa hitap eder.",
        "Bir dörtlüğü açıklarken önce ne dendiği, sonra hangi değerin taşındığı yazılır. Makam adı bilmek şart değildir.",
      ],
      example: "“Güzelliğin on para etmez / şu bendeki aşk olmasa” dizesi, görünüşten çok bağlılığı öne alır.",
      questions: [
        ["Âşık şiirinin dili nasıldır?", ["Sade ve söylenir", "Yalnız divan ağzı", "Dipnotlu", "Tabeladır"], 0, "Halkın kulağına göre kurulur."],
        ["Dörtlük açıklamasında ilk adım nedir?", ["Ne dendiğini yazmak", "Makamı ezberlemek", "Şairi yermek", "Heceyi gizlemek"], 0, "Anlam, ölçüden önce gelir."],
        ["Örnek dize neyi öne alır?", ["Bağlılığı, görünüşten çok", "Parayı", "Bir dağı", "Bir tarihi"], 0, "Güzellik, aşk olmadan yetmez denir."],
      ],
    },
  ]),
  unit("Bilim ve Teknoloji", [19, 20, 21, 22], [
    {
      title: "Merakın yöntemi",
      paragraphs: [
        "Bilim metni bir soruyla açılır, gözlem ve denemeyle sürer, sınırıyla kapanır. Hezarfen anlatısı merakı, ölçüm ise bilimi gösterir.",
        "“Uçtu” bir anlatıdır. “Kaç metre kaldı?” bir sorudur. İkisi karıştırılmaz.",
      ],
      example: "Yankı, sesin bir yüzeye çarpıp dönmesidir. Soru: neden boş odada daha çok yankı olur?",
      questions: [
        ["Yankı nedir?", ["Sesin yüzeye çarpıp dönmesi", "Işığın kırılması", "Bir destan", "Bir özür"], 0, "Ses geri gelir."],
        ["Anlatı ile soru neden ayrılır?", ["Biri hikâye, öteki ölçülecek şeydir", "Aynı şeydir", "Soru yasaktır", "Anlatı sayı verir"], 0, "Merak, soruya dönünce araştırılır."],
        ["Bilim metni nasıl kapanır?", ["Sınırını söyleyerek", "Abartıyla", "Kafiyeyle", "Özürle"], 0, "Nereye kadar doğru olduğu yazılır."],
      ],
    },
    {
      title: "Teknolojiye temkin",
      paragraphs: [
        "Yeni araç işi kısaltabilir. Kısaltması, düşünmenin yerine geçtiği anlamına gelmez.",
        "Bir robotun verdiği cevap kaynak değildir. Kaynak, denetlenebilir yerdir.",
      ],
      example: "Ödevde aracın cümlesini olduğu gibi yapıştırmak, kendi sorunu kaybetmektir.",
      questions: [
        ["Araç düşünmenin yerine geçer mi?", ["Hayır", "Evet", "Yalnız fen dersinde", "Yalnız destanda"], 0, "Araç hız verir, hüküm sende kalır."],
        ["Denetlenebilir yer nedir?", ["Kaynak", "Bir robot cevabı", "Bir söylenti", "Bir dize"], 0, "Başkası da aynı yere bakabilmelidir."],
        ["Cümleyi olduğu gibi yapıştırmak neyi kaybettirir?", ["Kendi sorunu", "Hızı", "Aracı", "Yankıyı"], 0, "Ödev, senin kurduğun cevaptır."],
      ],
    },
  ]),
  unit("Duygular", [23, 24, 25, 26, 27], [
    {
      title: "Gösterme",
      paragraphs: [
        "Duygu adı vermeden de yazılır. “Kapıyı iki kez yokladı, içeri girmedi” çekinmeyi gösterir.",
        "Adı vermek kolaydır, sahne kurmak zordur. Sahne, okuru ikna eder.",
      ],
      example: "“Korktum” yerine “ses gelince ışığı kapattım” yazmak, korkuyu okura bırakır.",
      questions: [
        ["“Kapıyı iki kez yokladı” neyi gösterir?", ["Çekinmeyi", "Sevinci kesin", "Bir belgeyi", "Bir ölçümü"], 0, "Girmek istenmiş ama girilmemiştir."],
        ["Duygu adı neden tek başına zayıf kalır?", ["Sahne yoktur", "Çok bilimseldir", "Bir kaynaktır", "Bir hecedir"], 0, "Okur görmek ister."],
        ["“Işığı kapattım” hangi duyguya yakındır?", ["Korku veya sakınma", "Övünç", "Alay", "Kafiye"], 0, "Gizlenme isteği vardır."],
      ],
    },
    {
      title: "Dostluk",
      paragraphs: [
        "Dostluk metninde birlikte yapılan iş, soyut övgüden güçlüdür. “Sınavdan önce bana soru sordu, cevabı beklemedi, birlikte baktık.”",
        "Tek taraflı dostluk, metinde de tek taraflı görünür. Karşı tarafın eylemi yoksa iddia zayıflar.",
      ],
      example: "İki kişinin de bir iş yaptığı cümle, dostluğu kanıtlar.",
      questions: [
        ["Dostluğu kanıtlayan nedir?", ["İki tarafın da eylemi", "Yalnız “iyi arkadaş”", "Bir ünlem", "Bir tarih"], 0, "İlişki karşılıklıdır."],
        ["“Birlikte baktık” neden güçlüdür?", ["Emek ortaktır", "Bir yargıdır", "Bir destandır", "Bir dipnottur"], 0, "İş paylaşılmıştır."],
        ["Tek taraflı övgü neye benzer?", ["Kanıtsız iddiaya", "Bir sahneye", "Bir deneye", "Bir belgeye"], 0, "Karşı taraf görünmüyorsa ilişki eksiktir."],
      ],
    },
  ]),
  unit("Doğa ve Evren", [28, 29, 30, 31], [
    {
      title: "Gözlem paragrafı",
      paragraphs: [
        "Doğa yazısı bir yer, bir zaman ve bir ayrıntı seçer. “Ardahan’da sabah, camın içi buz tutmuştu.”",
        "Bilgi eklenecekse ayrı cümlededir. Gözlem ile ansiklopedi bilgisi karışınca paragraf dağılır.",
      ],
      example: "“Buz desen çizmişti. Cam, su buharının soğukta katılaşmasıyla buza dönebilir.” İlk cümle gözlem, ikincisi bilgidir.",
      questions: [
        ["İlk cümle nedir?", ["Gözlem", "Ansiklopedi", "Bir yargı", "Bir kaynakça"], 0, "Camda buz görülmüştür."],
        ["Bilgi neden ayrı cümlededir?", ["Gözlemle karışmasın diye", "Yasak olduğu için", "Kısa olsun diye değil", "Duyguyu silsin diye"], 0, "Okur türleri ayırır."],
        ["Yer ve zaman neden verilir?", ["Ayrıntıyı bir zemine oturtmak için", "Süs için", "Bilgiyi gizlemek için", "Hece için"], 0, "Ardahan sabahı, buzun nedenini de çağırır."],
      ],
    },
    {
      title: "Merakı ölçülü tutmak",
      paragraphs: [
        "“Bitkiler yürür mü?” diye soran metin, kökün yönelmesini yürümeyle karıştırmamalıdır. Benzetme, gerçek diye sunulmaz.",
        "Bilmediğin mekanizma “gizem” diye kapatılmaz. “Bunu bu yılki fen konusunda ararım” dürüst bir kapanıştır.",
      ],
      example: "Ayçiçeğinin ışığa yönelmesi yürüyüş değildir; büyüme yönüdür.",
      questions: [
        ["Benzetme neden gerçek diye sunulmaz?", ["Okuru yanıltır", "Daha bilimsel olur", "Gözlemdir", "Bir belgedir"], 0, "Yönelmek, yürümek değildir."],
        ["Bilmediğin yerde ne yazılır?", ["Bilmiyorum, şurada ararım", "Gizem deyip kapatırım", "Uydururum", "Duygu eklerim"], 0, "Sınır, metni dürüst kılar."],
        ["Ayçiçeğinin ışığa dönmesi nedir?", ["Büyüme yönü", "Yürüyüş", "Bir destan", "Bir mutasyon zorunlu"], 0, "Bitki yer değiştirmez, yönelir."],
      ],
    },
  ]),
  unit("Sağlık ve Spor", [32, 33, 34, 35, 36], [
    {
      title: "İddia",
      paragraphs: [
        "“Kahvaltı eden öğrenci daha dinçtir” bir iddiadır. Yanında kim, kaç kişi, ne ölçüldü yoksa iddia askıda kalır.",
        "Sporun tek yararı kas değildir. Uyku, dikkat ve ruh hâli de etkilenebilir. Tek yarar söylemek metni daraltır.",
      ],
      example: "“Haftada üç gün yirmi dakika yürüyenler” bir grubu tanımlar. “Herkes” tanımlamaz.",
      questions: [
        ["Askıda kalan iddia hangisidir?", ["Ölçümü olmayan dinçlik cümlesi", "Grubu tanımlayan cümle", "Bir gözlem", "Bir sınır"], 0, "Kim ve kaç kişi yoksa iddia zayıftır."],
        ["“Herkes” neden tehlikelidir?", ["İstisnayı siler", "Çok bilimseldir", "Bir ölçümdür", "Bir gruptur"], 0, "Herkes, kanıtlanmamış bir bütündür."],
        ["Spor yalnız kas mıdır?", ["Hayır", "Evet", "Yalnız sınavdır", "Bir destandır"], 0, "Uyku ve dikkat de değişebilir."],
      ],
    },
    {
      title: "Kaynak",
      paragraphs: [
        "Sağlık cümlesi kulaktan dolma tekrar edilmez. Doktor, resmî sağlık sitesi veya ders kitabı kaynak olabilir.",
        "“Obezite yalnız irade meselesidir” eksik bir hükümdür. Beslenme, uyku, hareket ve bazı sağlık durumları birlikte konuşulur.",
      ],
      example: "Bir reklamın “mucize” demesi kaynak değildir.",
      questions: [
        ["Reklamdaki mucize neden kaynak olmaz?", ["Denetlenmiş bilgi değildir", "Çok kısadır", "Bir gözlemdir", "Bir şiirdir"], 0, "Satış dili, kanıt değildir."],
        ["Obeziteyi tek nedene bağlamak neden eksiktir?", ["Birden çok etken vardır", "İrade yoktur", "Kaynak yasaktır", "Spor yasaktır"], 0, "Uyku, besin ve sağlık birlikte durur."],
        ["Sağlık cümlesi nereden desteklenir?", ["Resmî veya ders kaynağından", "Bir söylentiden", "Bir diziden", "Bir reklamlardan"], 0, "Kaynak, başkasının da bakacağı yerdir."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Tür",
      paragraphs: [
        "Etkinlik haftasında yeni tema yok. Belge sayı verir, şiir duyguyu sıkıştırır, bilim sınırıyla kapanır, erdem eylemle görünür.",
      ],
      example: "“Ekmeğin yarısını uzattı” bir erdem sahnesidir.",
      questions: [
        ["Belgede ne aranır?", ["Tarih ve sayı", "Kafiye", "Mucize", "Ünlem"], 0, "Belge denetlenebilir."],
        ["Erdem nasıl gösterilir?", ["Eylemle", "Yalnız sıfatla", "Bir reklamla", "Bir sekme ile"], 0, "Paylaşmak görülür."],
        ["Bilim paragrafı nasıl kapanır?", ["Sınırını söyleyerek", "Herkes diye", "Mucize diye", "Alkışla"], 0, "Nereye kadar doğru olduğu yazılır."],
      ],
    },
  ]),
]

const inkilap = [
  unit("Bir kahraman doğuyor", [1, 2, 3, 4], [
    {
      title: "Çocukluk ve öğrenim",
      paragraphs: [
        "Mustafa Kemal 1881’de Selanik’te doğdu. Öğrenimini askerî okullarda sürdürdü. Manastır ve İstanbul yıllarında hem askerlik hem ülke meseleleri üzerine düşündü.",
        "Çanakkale ve sonraki cepheler, onun bir komutan olarak tanınmasını sağladı. Kişiliği, disiplin ve sorumluluk almakta görünür.",
      ],
      example: "1881 bir doğum yılıdır. “İyi bir öğrenciydi” ise ancak anılardaki örneklerle desteklenen bir yorumdur.",
      questions: [
        ["Mustafa Kemal hangi yıl doğdu?", ["1881", "1919", "1923", "1453"], 0, "Doğum yılı 1881’dir."],
        ["Doğduğu şehir hangisidir?", ["Selanik", "Samsun", "Ankara", "Erzurum"], 0, "Selanik o tarihte Osmanlı toprağıdır."],
        ["1881 bilgisi ile “çalışkandı” yorumu neden ayrılır?", ["Biri denetlenebilir, öteki örnek ister", "İkisi de yasadır", "İkisi de yorumdur", "Yıl bir destandır"], 0, "Tarih belge, sıfat yorumdur."],
      ],
    },
    {
      title: "Fikirlerin ortamı",
      paragraphs: [
        "Osmanlı’nın son yıllarında toprak kayıpları, borç ve yönetim krizi vardı. Fikir tartışmaları bu krize çözüm arıyordu.",
        "Mustafa Kemal’in yolu, milletin kendi iradesine dayanması ve bağımsız bir devlet kurulması olarak netleşti. Bu fikir, 1919’dan sonra eyleme döndü.",
      ],
      example: "Bir komutanın ünü, tek başına bir milletin kurtuluşu değildir. Kurtuluş, örgütlenen halkla mümkün oldu.",
      questions: [
        ["Son dönem Osmanlı’da hangi sorunlar konuşuluyordu?", ["Toprak kaybı, borç ve yönetim", "Yalnız bir okul", "Bir çini atölyesi", "Bir bilim şenliği"], 0, "Devlet bu krizlerin içindeydi."],
        ["Kurtuluş tek kişinin ünü müdür?", ["Hayır, örgütlenen halkla mümkün oldu", "Evet", "Yalnız ordunun adıdır", "Bir yorum değil yasaktır"], 0, "Kongreler ve halk desteği belirleyiciydi."],
        ["1919’dan sonra fikir neye döndü?", ["Örgütlü eyleme", "Bir şiire", "Bir modaya", "Bir geri çekilmeye"], 0, "Samsun ve kongreler bu dönüşümdür."],
      ],
    },
  ]),
  unit("Millî uyanış", [5, 6, 7, 8, 9, 10, 11, 12, 13], [
    {
      title: "İşgaller ve cemiyetler",
      paragraphs: [
        "Mondros Ateşkes Antlaşması’ndan sonra işgaller genişledi. Yerel direniş cemiyetleri, işgale karşı halkı örgütlemeye çalıştı.",
        "Mustafa Kemal, 19 Mayıs 1919’da Samsun’a çıktı. Amaç, dağınık direnişi tek merkeze bağlamaktı.",
      ],
      example: "Amasya Genelgesi, “vatanın bütünlüğünün ve milletin istiklalinin tehlikede” olduğunu ve kurtuluşun milletin azmiyle olacağını duyurdu.",
      questions: [
        ["Samsun’a çıkış hangi gündür?", ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"], 0, "Millî Mücadele’nin fiilî başlangıcı diye anılır."],
        ["Yerel cemiyetler neye karşı kuruldu?", ["İşgallere", "Eğitime", "Cumhuriyete", "Kongrelere"], 0, "İşgal, yerel direnişi doğurdu."],
        ["Amasya Genelgesi kurtuluşu kime bağlar?", ["Milletin azmine", "Bir dış devlete", "Padişahın iznine yalnız", "Bir şehre"], 0, "Egemenlik fikri burada güçlenir."],
      ],
    },
    {
      title: "Kongreler ve Meclis",
      paragraphs: [
        "Erzurum ve Sivas kongreleri, savunmayı bölgesel olmaktan çıkarıp ulusal hale getirdi. Manda ve himaye reddedildi.",
        "23 Nisan 1920’de Ankara’da Büyük Millet Meclisi açıldı. Meclis, hem yasama hem yürütme gücüyle savaşın merkezî oldu.",
      ],
      example: "Sivas Kongresi’nde yurdun bütününün birlikte savunulacağı kararı, bölgesel cemiyetleri tek çatıda topladı.",
      questions: [
        ["TBMM hangi gün açıldı?", ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "1 Kasım 1922"], 0, "Meclis Ankara’da toplandı."],
        ["Sivas’ta reddedilen düşünce hangisidir?", ["Manda ve himaye", "Ulusal birlik", "Meclis", "Bağımsızlık"], 0, "Başka bir devletin vesayeti kabul edilmedi."],
        ["Meclis savaş sırasında neden önemlidir?", ["Karar tek merkezde toplanır", "Savaş biter", "İşgal meşrulaşır", "Kongreler kapanır diye"], 0, "Ordu ve diplomasi aynı iradeye bağlanır."],
      ],
    },
  ]),
  unit("Ya istiklal ya ölüm", [14, 15, 16, 17, 18, 19, 20], [
    {
      title: "Cepheler",
      paragraphs: [
        "Doğu’da Ermeni kuvvetlerine karşı kazanılan başarıdan sonra Gümrü Antlaşması imzalandı. Güneyde halk direnişi öne çıktı.",
        "Batı cephesinde İnönü muharebeleri, Kütahya-Eskişehir, Sakarya ve Büyük Taarruz sıralanır. Sakarya, “hattı müdafaa yoktur, sathı müdafaa vardır” sözüyle savunmanın yurdun tamamı olduğunu anlatır.",
      ],
      example: "26 Ağustos 1922’de başlayan Büyük Taarruz, 30 Ağustos Başkomutanlık Meydan Muharebesi ile sonuçlandı. 9 Eylül’de İzmir’e girildi.",
      questions: [
        ["Büyük Taarruz hangi gün başladı?", ["26 Ağustos 1922", "19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923"], 0, "Taarruz ağustos sonunda başladı."],
        ["Sakarya’daki söz neyi anlatır?", ["Savunmanın bir çizgi değil yurdun tamamı olduğunu", "Savaşın bittiğini", "Meclisin kapandığını", "Donanmanın geldiğini"], 0, "Sathı müdafaa, bütün ülkedir."],
        ["30 Ağustos hangi muharebedir?", ["Başkomutanlık Meydan Muharebesi", "İnönü", "Çanakkale", "Sakarya’nın kendisi"], 0, "Büyük Taarruz’un kırılma günüdür."],
      ],
    },
    {
      title: "Mudanya ve Lozan",
      paragraphs: [
        "Mudanya Ateşkesi, silahlı mücadeleyi diplomasiye bağladı. Asıl barış Lozan’da konuşuldu.",
        "Lozan, kapitülasyonların kaldırıldığı ve yeni devletin sınırlarının tanındığı antlaşmadır. Misakımillî’nin büyük bölümü burada karşılık buldu.",
      ],
      example: "Askerî zafer, tanınmış bir barış olmadan kalıcı olmaz. Lozan bu tanımadır.",
      questions: [
        ["Kapitülasyonlar hangi antlaşmayla kaldırıldı?", ["Lozan", "Mondros", "Sevr", "Gümrü"], 0, "Lozan, ayrıcalıkları bitirdi."],
        ["Mudanya neyin köprüsüdür?", ["Savaştan diplomasiye", "İmparatorluktan padişaha", "Kongreden işgale", "Bir cepheden ötekine kaçış"], 0, "Ateşkes, masa başına geçişi açtı."],
        ["Zafer neden tek başına yetmez?", ["Barışla tanınması gerekir", "Meclis istemez", "Halk katılmaz", "Sınır gerekmez"], 0, "Diplomasi, kazanımı hukuka bağlar."],
      ],
    },
  ]),
  unit("Atatürkçülük ve çağdaşlaşan Türkiye", [21, 22, 23, 24, 25, 26], [
    {
      title: "İnkılaplar",
      paragraphs: [
        "Siyasî inkılaplar saltanatı ve hilafeti kaldırdı, cumhuriyeti kurdu. 29 Ekim 1923’te cumhuriyet ilan edildi.",
        "Hukuk, eğitim, ekonomi ve toplum alanında yapılan düzenlemeler çağdaş bir devlet kurmayı hedefledi. Öğretimin birleştirilmesi, harf inkılabı ve kadınların siyasal hakları bu zincirin parçalarıdır.",
      ],
      example: "1 Kasım 1922’de saltanat kaldırıldı. 3 Mart 1924’te hilafet kaldırıldı.",
      questions: [
        ["Cumhuriyet hangi gün ilan edildi?", ["29 Ekim 1923", "23 Nisan 1920", "19 Mayıs 1919", "30 Ağustos 1922"], 0, "29 Ekim Cumhuriyet Bayramı’dır."],
        ["Saltanat hangi yıl kaldırıldı?", ["1922", "1923", "1924", "1928"], 0, "1 Kasım 1922."],
        ["Harf inkılabı hangi alandadır?", ["Eğitim ve kültür", "Yalnız ordu", "Yalnız dış politika", "Bir cephe"], 0, "Okuma yazmayı yeni harfle yaygınlaştırmayı hedefledi."],
      ],
    },
    {
      title: "İlkeler",
      paragraphs: [
        "Cumhuriyetçilik, milliyetçilik, halkçılık, devletçilik, laiklik ve inkılapçılık Atatürk ilkeleridir. Laiklik, din ve devlet işlerinin ayrılmasıdır.",
        "Halkçılık, ayrıcalıklı zümre yerine yurttaş eşitliğini söyler. Devletçilik, özel girişimin yetmediği alanda devletin ekonomiye girmesidir.",
      ],
      example: "Öğretimin birleştirilmesi, farklı okul türlerinin ulusal eğitimde toplanmasıdır ve laik eğitimin zeminidir.",
      questions: [
        ["Laiklik nedir?", ["Din ve devlet işlerinin ayrılması", "Dinsizlik", "Tek bir tarikat", "Saltanat"], 0, "Devlet, din kurallarıyla yönetilmez; inanç özgürdür."],
        ["Halkçılık neyi reddeder?", ["Ayrıcalıklı zümreyi", "Yurttaş eşitliğini", "Eğitimi", "Cumhuriyeti"], 0, "Herkes kanun önünde eşittir."],
        ["Devletçilik hangi durumda öne çıkar?", ["Özel girişim yetmediğinde", "Her dükkânı kapatmak için", "Yalnız savaşta", "Hilafeti geri getirmek için"], 0, "Demiryolu ve fabrika gibi alanlarda devlet üstlendi."],
      ],
    },
  ]),
  unit("Demokratikleşme çabaları", [27, 28, 29], [
    {
      title: "Çok partili denemeler",
      paragraphs: [
        "Cumhuriyetin ilk yıllarında Terakkiperver Cumhuriyet Fırkası ve Serbest Cumhuriyet Fırkası denemeleri oldu. İkisi de kısa sürdü.",
        "Çok partili hayata kalıcı geçiş 1946’dan sonra güçlendi. 1950 seçimlerinde iktidar el değiştirdi.",
      ],
      example: "Denemenin kısa sürmesi, demokratik alışkanlığın bir günde oturmadığını gösterir.",
      questions: [
        ["1950 seçimleri neyi gösterdi?", ["İktidarın seçimle el değiştirebildiğini", "Saltanatın döndüğünü", "Meclisin kapandığını", "Hilafetin geldiğini"], 0, "Çok partili düzen bu seçimle olgunlaştı."],
        ["İlk parti denemeleri neden önemlidir?", ["Demokrasinin hemen oturmadığını gösterir", "Cumhuriyeti kaldırır", "Bir cephedir", "Bir antlaşmadır"], 0, "Alışkanlık deneme yanılmayla gelir."],
        ["Serbest Cumhuriyet Fırkası hangi dönemin denemesidir?", ["Erken Cumhuriyet", "Millî Mücadele cephesi", "Osmanlı’nın kuruluşu", "Lozan görüşmesi"], 0, "1930’da kısa süre var oldu."],
      ],
    },
    {
      title: "Hakların genişlemesi",
      paragraphs: [
        "Kadınlara önce belediye, sonra muhtar ve 1934’te milletvekili seçme ve seçilme hakkı tanındı.",
        "Demokratikleşme, yalnız parti sayısı değildir. Basın, örgütlenme ve yargı bağımsızlığı da bu sürecin parçasıdır.",
      ],
      example: "1934, kadınların siyasal haklarında bir dönüm noktasıdır.",
      questions: [
        ["Kadınlara milletvekili seçme hakkı hangi yıl tanındı?", ["1934", "1923", "1950", "1919"], 0, "1934’te siyasal haklar tamamlandı."],
        ["Demokratikleşme yalnız parti midir?", ["Hayır, basın ve yargı da vardır", "Evet", "Yalnız seçim sandığı bir gündür", "Bir inkılabı siler"], 0, "Haklar seçimden sonra da sürer."],
        ["1934 neden dönüm noktasıdır?", ["Kadınlar milletvekili seçebilir oldu", "Saltanat geldi", "Harfler değişti", "Lozan imzalandı"], 0, "Seçme ve seçilme hakkı genişledi."],
      ],
    },
  ]),
  unit("Atatürk dönemi dış politika", [30, 31, 32], [
    {
      title: "Yurtta sulh, cihanda sulh",
      paragraphs: [
        "Atatürk dönemi dış politikası barışçıldır. “Yurtta sulh, cihanda sulh” sözü, ülke içinde ve dışında barışı hedef gösterir.",
        "Musul meselesi, Nüfus Mübadelesi, Milletler Cemiyeti’ne giriş ve Balkan Antantı bu dönemin başlıklarıdır. Hatay 1939’da anavatana katıldı.",
      ],
      example: "Savaştan çıkmış bir ülkenin yeni bir savaşa girmemesi, inkılapların yerleşmesi için de gerekliydi.",
      questions: [
        ["“Yurtta sulh, cihanda sulh” neyi hedefler?", ["İçte ve dışta barışı", "Yeni bir cepheyi", "Kapitülasyonları", "Saltanatı"], 0, "Barış, dönemin dış politika ilkesidir."],
        ["Hatay anavatana hangi yıl katıldı?", ["1939", "1923", "1934", "1950"], 0, "Hatay sorunu 1939’da çözüldü."],
        ["Barış neden inkılaplar için de gereklidir?", ["Ülke yeni savaşa girmeden düzenini kurabilsin diye", "Ordu kapansın diye", "Meclis dağılsın diye", "Dış ilişki kesilsin diye"], 0, "İç düzen, sürekli seferberlikle yürümez."],
      ],
    },
    {
      title: "Sorunları diplomasiyle çözmek",
      paragraphs: [
        "Her sorun savaşla çözülmedi. Görüşme, antlaşma ve uluslararası örgüt bu dönemin araçlarıdır.",
        "Komşularla kurulan dostluk, yeni devletin sınırlarını güvenceye almayı amaçladı.",
      ],
      example: "Balkan Antantı, bölge devletleriyle saldırmazlık ve iş birliği arayışıdır.",
      questions: [
        ["Dönemin aracı yalnız ordu mudur?", ["Hayır, diplomasi de esastır", "Evet", "Yalnız bir cephe", "Yalnız bir fırka"], 0, "Antlaşmalar savaşın yerini aldı."],
        ["Balkan Antantı ne arar?", ["Bölgesel iş birliği ve saldırmazlık", "Yeni bir işgal", "Kapitülasyon", "Hilafet"], 0, "Komşularla barış hedeflenir."],
        ["Musul gibi meseleler nasıl ele alındı?", ["Görüşme ve antlaşmayla", "Yeni bir büyük taarruzla", "Meclisi kapatarak", "Harf değiştirerek"], 0, "Sınır sorunları masaya yatırıldı."],
      ],
    },
  ]),
  unit("Atatürk’ün ölümü ve sonrası", [33, 34, 35, 36], [
    {
      title: "10 Kasım 1938",
      paragraphs: [
        "Mustafa Kemal Atatürk 10 Kasım 1938’de İstanbul’da öldü. Ardından İsmet İnönü cumhurbaşkanı seçildi.",
        "Ölüm, ilkelerin sonu değildir. Cumhuriyet, meclis ve kurumlar kişiye bağlı kalmadan sürdüğü için rejim devam etti.",
      ],
      example: "Her 10 Kasım’da saygı duruşu, bir kişiyi anmak kadar kurduğu düzeni hatırlamaktır.",
      questions: [
        ["Atatürk hangi gün öldü?", ["10 Kasım 1938", "29 Ekim 1923", "19 Mayıs 1919", "30 Ağustos 1922"], 0, "10 Kasım Atatürk’ü anma günüdür."],
        ["Ardından cumhurbaşkanı kim oldu?", ["İsmet İnönü", "Fatih", "Bir padişah", "Meclis kapandı"], 0, "İnönü, 1938’de seçildi."],
        ["Rejim neden kişiyle birlikte bitmedi?", ["Kurumlar ve meclis sürdüğü için", "Ordu dağıldığı için", "Saltanat döndüğü için", "İlkeler silindiği için"], 0, "Cumhuriyet bir makamdır, bir kişi değildir."],
      ],
    },
    {
      title: "İkinci Dünya Savaşı yılları",
      paragraphs: [
        "Türkiye, İkinci Dünya Savaşı’nda uzun süre savaşa girmedi. Savaş ekonomisi yine de kıtlık ve sıkı yönetimi getirdi.",
        "Savaş sonrası çok partili hayata geçiş hızlandı. Demokrasi, savaşın galipleriyle kurulan yeni dünyada da bir tercih oldu.",
      ],
      example: "Savaşa girmemek, ordunun hazır tutulması ve diplomasinin birlikte yürütülmesiyle mümkün oldu.",
      questions: [
        ["Türkiye İkinci Dünya Savaşı’nın büyük bölümünde ne yaptı?", ["Savaşa girmedi", "İlk gün katıldı", "Cephe açtı", "Meclisi kapattı"], 0, "Savaşın dışında kalmak temel tercihti."],
        ["Savaş ekonomisi içeride ne getirdi?", ["Kıtlık ve sıkı yönetim", "Hiçbir etki", "Yeni bir saltanat", "Hilafet"], 0, "Dışarıda savaş, içeride yokluk doğurdu."],
        ["Savaş sonrası hangi siyasal süreç hızlandı?", ["Çok partili hayat", "Saltanat", "Kapitülasyon", "İşgal"], 0, "1946 ve 1950 bu sürecin basamaklarıdır."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Dört tarih",
      paragraphs: [
        "Etkinlik haftasında yeni ünite yok. 19 Mayıs 1919, 23 Nisan 1920, 30 Ağustos 1922 ve 29 Ekim 1923 sırayı anlatır: örgütlenme, meclis, zafer, cumhuriyet.",
      ],
      example: "Lozan, zaferin diplomatik tanınmasıdır.",
      questions: [
        ["TBMM hangi gün açıldı?", ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "10 Kasım 1938"], 0, "Meclis 1920’de açıldı."],
        ["Cumhuriyet hangi gün ilan edildi?", ["29 Ekim 1923", "23 Nisan 1920", "26 Ağustos 1922", "1 Kasım 1922"], 0, "29 Ekim 1923."],
        ["Kapitülasyonlar hangi antlaşmayla kalktı?", ["Lozan", "Mondros", "Sevr", "Mudanya"], 0, "Lozan barış antlaşmasıdır."],
      ],
    },
  ]),
]

export const grade8 = {
  Matematik: matematik,
  Fen: fen,
  Türkçe: turkce,
  İnkılap: inkilap,
}
