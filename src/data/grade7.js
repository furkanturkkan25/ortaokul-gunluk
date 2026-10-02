import { unit } from "../lib/unit.js"

const matematik = [
  unit("Tam sayılar ve rasyonel sayılar", [1, 2, 3, 4], [
    {
      title: "Tam sayılar",
      paragraphs: [
        "Tam sayılar; negatif tam sayılar, 0 ve pozitif tam sayılardır. … −3, −2, −1, 0, 1, 2, 3 …",
        "Sayı doğrusunda sağa gidildikçe sayı büyür. −1, −5’ten büyüktür çünkü sağdadır. 0’dan küçük sayıların başında eksi vardır.",
      ],
      example: "Bir borcun 8 lira olması −8, 8 lira alacağın olması +8 diye düşünülebilir.",
      questions: [
        ["Hangisi daha büyüktür?", ["−5", "−1", "Eşit", "−8"], 1, "−1, sayı doğrusunda −5’in sağındadır."],
        ["Tam sayılar hangilerini kapsar?", ["Negatifler, 0 ve pozitifler", "Yalnız pozitifler", "Yalnız kesirler", "Yalnız ondalıklar"], 0, "0 da bir tam sayıdır."],
        ["8 lira borç hangi işaretle düşünülür?", ["−8", "+8", "1/8", "0"], 0, "Borç, eksi yön olarak modellenir."],
      ],
    },
    {
      title: "Rasyonel sayı",
      paragraphs: [
        "Rasyonel sayı, iki tam sayının bölümü olarak yazılabilen sayıdır. 3/4, −2/5, 0,6 ve 4 rasyoneldir. 4 = 4/1.",
        "Her tam sayı rasyoneldir. Payda 0 olamaz. Aynı rasyonel sayı birden çok kesirle yazılabilir: 1/2 = 2/4 = 0,5.",
      ],
      example: "−6/3 = −2. Sadeleştirince tam sayı elde edilir; o da rasyoneldir.",
      questions: [
        ["Hangisi rasyonel değildir diye söylenemez, yani rasyonel olan hangisidir?", ["4", "3/4", "−2/5", "Hepsi rasyoneldir"], 3, "Tam sayı ve kesir biçiminde yazılanlar rasyoneldir."],
        ["1/2 ile eşit olan hangisidir?", ["0,5", "2", "1/5", "5/2"], 0, "1 ÷ 2 = 0,5."],
        ["Payda neden 0 olamaz?", ["Sıfıra bölme tanımsızdır", "Pay 0 olamaz", "Kesir eksi olamaz", "Tam sayı yasaktır"], 0, "Bölen 0 olursa bölme tanımlanmaz."],
      ],
    },
  ]),
  unit("Rasyonel sayılarda sıralama", [5], [
    {
      title: "Aynı payda",
      paragraphs: [
        "Paydalar eşitse payı büyük olan pozitif kesir daha büyüktür. Negatiflerde dikkat edilir: −1/4, −3/4’ten büyüktür.",
        "Sayı doğrusunda −3/4, −1/4’ün solundadır. Sol, daha küçük demektir.",
      ],
      example: "−0,2 > −0,8. Sıfıra yakın olan eksi sayı daha büyüktür.",
      questions: [
        ["Hangisi daha büyüktür?", ["−3/4", "−1/4", "Eşit", "−1"], 1, "−1/4 sıfıra daha yakındır."],
        ["Pozitif 5/8 ve 3/8 için doğru olan hangisidir?", ["5/8 daha büyüktür", "3/8 daha büyüktür", "Eşit", "İkisi de negatiftir"], 0, "Paydalar aynı ve işaret pozitiftir."],
        ["−0,8 ve −0,2 sıralanınca küçük olan hangisidir?", ["−0,8", "−0,2", "0", "0,2"], 0, "−0,8 daha soldadır."],
      ],
    },
    {
      title: "Ortak payda ile sıra",
      paragraphs: [
        "Farklı paydalar ortak paydaya getirilir. 1/2 = 2/4, 1/4 = 1/4 olduğundan 1/2 > 1/4.",
        "Karışık işaretlerde önce negatifler, sonra 0, sonra pozitifler düşünülür. Her negatif, her pozitiften küçüktür.",
      ],
      example: "−1/2 < 1/4. İşaretler farklıysa pozitif olan büyüktür.",
      questions: [
        ["1/2 ile 1/4 karşılaştırılırsa hangisi büyüktür?", ["1/2", "1/4", "Eşit", "İkisi de 1’den büyük"], 0, "2/4 > 1/4."],
        ["−1/2 ve 1/4 için doğru olan hangisidir?", ["−1/2 daha büyüktür", "1/4 daha büyüktür", "Eşit", "İkisi de sıfırdır"], 1, "Pozitif sayı, negatif sayıdan büyüktür."],
        ["Ortak payda ne işe yarar?", ["Kesirleri aynı parçaya çevirip kıyaslamak", "Paydayı silmek", "İşareti yok etmek", "Sayılı tam yapmak"], 0, "Aynı boy parça olunca paylar kıyaslanır."],
      ],
    },
  ]),
  unit("Rasyonel sayılarla işlem", [6, 7, 8], [
    {
      title: "Toplama ve çıkarma",
      paragraphs: [
        "Aynı işaretli sayılar toplanırken mutlak değerler toplanır, ortak işaret yazılır. −3 + (−5) = −8.",
        "Farklı işaretlilerde mutlak değerler çıkarılır, işareti mutlak değeri büyük olan belirler. 7 + (−2) = 5.",
      ],
      example: "−4 + 9 = 5. 9’un mutlak değeri büyük ve pozitiftir.",
      questions: [
        ["−3 + (−5) kaçtır?", ["−8", "8", "−2", "2"], 0, "İki eksi toplanır, sonuç eksidir."],
        ["7 + (−2) kaçtır?", ["9", "5", "−5", "14"], 1, "7 − 2 = 5."],
        ["−4 + 9 kaçtır?", ["5", "−13", "−5", "13"], 0, "9 − 4 = 5 ve işaret pozitiftir."],
      ],
    },
    {
      title: "Çarpma ve bölme",
      paragraphs: [
        "Aynı işaretlerin çarpımı ve bölümü pozitiftir. Farklı işaretlerin çarpımı ve bölümü negatiftir.",
        "(−6) × (−2) = 12. (−12) ÷ 3 = −4. Sıfırın herhangi bir sayıyla çarpımı 0’dır. Sıfıra bölünmez.",
      ],
      example: "Bir borcun 4 katı hâlâ borçsa işaret eksi kalır: (−5) × 4 = −20.",
      questions: [
        ["(−6) × (−2) kaçtır?", ["−12", "12", "−8", "8"], 1, "Eksi çarpı eksi artıdır."],
        ["(−12) ÷ 3 kaçtır?", ["−4", "4", "−36", "9"], 0, "İşaretler farklı, sonuç negatiftir."],
        ["(−5) × 4 kaçtır?", ["−20", "20", "−9", "1"], 0, "Pozitif ile negatifin çarpımı negatiftir."],
      ],
    },
  ]),
  unit("Dikdörtgenler prizması", [9, 10, 11, 12], [
    {
      title: "Hacim",
      paragraphs: [
        "Dikdörtgenler prizmasının hacmi, uzunluk × genişlik × yüksekliktir. Hacim, cismin kapladığı yerdir.",
        "Ayrıtları 4 cm, 3 cm ve 2 cm olan kutunun hacmi 24 cm³’tür.",
      ],
      example: "İçi boş bir kutu su ile doldurulursa sığan suyun hacmi, kutunun iç hacmidir.",
      questions: [
        ["4, 3 ve 2 cm’lik prizmanın hacmi kaç cm³’tür?", ["9", "24", "14", "48"], 1, "4 × 3 × 2 = 24."],
        ["Hacim birimi hangisidir?", ["cm", "cm²", "cm³", "N"], 2, "Hacim küp birimle yazılır."],
        ["Hacim neyi ölçer?", ["Cismin kapladığı yeri", "Yalnız çevreyi", "Açıyı", "Kütleyi"], 0, "İçine sığan miktar hacimdir."],
      ],
    },
    {
      title: "Yüzey alanı ve birim",
      paragraphs: [
        "Dikdörtgenler prizmasının 6 yüzü vardır. Karşılıklı yüzler eşittir. Yüzey alanı, altı yüzün alanları toplamıdır.",
        "Ayrıtları a, b, c ise yüzey alanı 2(ab + bc + ac)’dir. 1 m³ = 1 000 000 cm³. 1 litre = 1 dm³.",
      ],
      example: "2, 3 ve 4 cm’lik prizmada yüzey alanı 2(6 + 12 + 8) = 52 cm²’dir.",
      questions: [
        ["2, 3 ve 4 cm’lik prizmanın yüzey alanı kaç cm²’dir?", ["24", "52", "26", "9"], 1, "2 × (6 + 12 + 8) = 52."],
        ["1 litre kaç dm³’tür?", ["1", "10", "100", "1000"], 0, "1 L = 1 dm³."],
        ["Karşılıklı yüzler nasıldır?", ["Eşittir", "Her zaman farklıdır", "Birer üçgendir", "Yoktur"], 0, "Prizmada üç çift eş yüz vardır."],
      ],
    },
  ]),
  unit("Veri dağılımları", [13, 14, 15, 16, 17], [
    {
      title: "Merkez ve yayılım",
      paragraphs: [
        "Aritmetik ortalama, verilerin toplamının veri sayısına bölümüdür. 4, 6 ve 8’in ortalaması 6’dır.",
        "Açıklık, en büyük ile en küçük değerin farkıdır. 8 − 4 = 4. Açıklık büyüdükçe veriler daha yayılmıştır.",
      ],
      example: "Notlar 70, 80, 90 ise ortalama 80, açıklık 20’dir.",
      questions: [
        ["4, 6 ve 8’in ortalaması kaçtır?", ["6", "18", "4", "8"], 0, "(4 + 6 + 8) / 3 = 6."],
        ["70, 80, 90 için açıklık kaçtır?", ["10", "20", "80", "240"], 1, "90 − 70 = 20."],
        ["Açıklık neyi anlatır?", ["Verilerin ne kadar yayıldığını", "En çok tekrar edeni her zaman", "Grafiğin rengini", "Örneklemi silmeyi"], 0, "Büyük açıklık, uçların uzak olduğunu gösterir."],
      ],
    },
    {
      title: "Grafiği savunmak",
      paragraphs: [
        "Bir iddia grafikten okunuyorsa eksen ve ölçek gösterilir. Ölçeği olmayan sütun, “çok” demekten öteye gitmez.",
        "Ortalama, tek başına yanıltabilir. 0 ve 100’ün ortalaması 50’dir ama kimse 50 almamış olabilir.",
      ],
      example: "İki sınıfın ortalaması 70 ise sınıflar aynı dağılmış olmak zorunda değildir. Açıklığa da bakılır.",
      questions: [
        ["0 ve 100’ün ortalaması kaçtır?", ["50", "100", "0", "150"], 0, "(0 + 100) / 2 = 50."],
        ["Bu ortalama neden yanıltabilir?", ["Verilerin hiçbiri 50 olmayabilir", "Toplama yasaktır", "Açıklık 0’dır", "Grafik zorunlu değildir diye"], 0, "Ortalama, tipik değeri her zaman göstermez."],
        ["Grafikte ölçek neden gerekir?", ["Yüksekliğin sayıya çevrilmesi için", "Süs için", "Ortalamayı silmek için", "Açıklığı yok etmek için"], 0, "Ölçeksiz sütun miktar söylemez."],
      ],
    },
  ]),
  unit("Yansıma ve açıortay", [18], [
    {
      title: "Yansıma",
      paragraphs: [
        "Yansımada bir doğru ayna doğrusu gibi durur. Nokta, bu doğruya dik eşit uzaklıktaki görüntüsüne gider.",
        "Şekil ile görüntüsü eştir. Yön, ayna doğrusuna göre ters döner.",
      ],
      example: "Ayna doğrusuna 3 cm uzaktaki noktanın görüntüsü de doğrunun öte yanında 3 cm uzaktadır.",
      questions: [
        ["Yansımada uzaklık nasıldır?", ["Ayna doğrusuna eşit uzaklıkta", "İki kat uzaklıkta her zaman", "Sıfır olmak zorunda", "Rastgele"], 0, "Nokta ve görüntüsü doğruya eşit uzaklıktadır."],
        ["Görüntü şekle göre nasıldır?", ["Eştir", "Her zaman büyüktür", "Alanı yarıdır", "Yok olur"], 0, "Yansıma uzunlukları korur."],
        ["Ayna doğrusuna göre ne değişir?", ["Yön", "Uzunluklar", "Açılar", "Alan"], 0, "Şekil ters yöne bakar, boyu değişmez."],
      ],
    },
    {
      title: "Orta dikme ve açıortay",
      paragraphs: [
        "Bir doğru parçasının orta dikmesi, parçayı iki eşit parçaya böler ve ona diktir. Üzerindeki her nokta, uçlara eşit uzaklıktadır.",
        "Açıortay, açıyı iki eşit açıya böler. Üzerindeki noktaların açının kollarına uzaklığı eşittir.",
      ],
      example: "60°’lik açının açıortayı iki tane 30°’lik açı oluşturur.",
      questions: [
        ["60°’lik açının açıortayı kaçar derecelik iki açı oluşturur?", ["20", "30", "40", "60"], 1, "60 ÷ 2 = 30."],
        ["Orta dikme doğru parçasını nasıl böler?", ["İki eşit parçaya ve dik olarak", "Üç eşit parçaya", "Yalnız eğik", "Hiç bölmez"], 0, "Orta nokta ve diklik birlikte gerekir."],
        ["Açıortay üzerindeki nokta için doğru olan hangisidir?", ["Kollara uzaklığı eşittir", "Köşeye uzaklığa bağlı değildir, kollara eşit değildir", "Yalnız bir kola yakındır", "Açıyı üç eşit parçaya böler"], 0, "Eşit uzaklık, açıortayın özelliğidir."],
      ],
    },
  ]),
  unit("Üçgende yardımcı elemanlar", [19], [
    {
      title: "Kenarortay, açıortay, yükseklik",
      paragraphs: [
        "Kenarortay, bir köşeyi karşı kenarın orta noktasına bağlar. Üçgenin üç kenarortayı vardır.",
        "Yükseklik, bir köşeden karşı kenara veya uzantısına inen diktir. Açıortay ise köşedeki açıyı iki eşit parçaya böler.",
      ],
      example: "Dik üçgende dik kenarlar, birbirine yükseklik seçilebilir.",
      questions: [
        ["Kenarortay nereye iner?", ["Karşı kenarın orta noktasına", "Her zaman dik olarak köşeye", "Çemberin merkezine zorunlu", "Dışarıya rastgele"], 0, "Orta nokta, kenarı ikiye böler."],
        ["Yükseklik nasıl iner?", ["Karşı kenara dik", "Eğik olmak zorunda", "Kenarortayla aynı şey her üçgende", "Açının yarısı"], 0, "Yükseklik bir dik uzaklıktır."],
        ["Bir üçgende kaç kenarortay çizilebilir?", ["1", "2", "3", "4"], 2, "Her kenara bir kenarortay iner."],
      ],
    },
    {
      title: "Çizmeyi ayırmak",
      paragraphs: [
        "Aynı doğru parçası hem yükseklik hem kenarortay hem açıortay olabilir; bu, ikizkenar ve eşkenar üçgende tepe köşesinden inince olur.",
        "Çeşitkenar üçgende bu üç eleman genellikle ayrı ayrıdır. İsim, ne işe yaradığına göre verilir.",
      ],
      example: "Eşkenar üçgende tepeden inen doğru hem yüksekliği hem kenarortayı hem açıortayı taşır.",
      questions: [
        ["Eşkenar üçgende tepeden inen doğru hangilerini taşıyabilir?", ["Yükseklik, kenarortay ve açıortay", "Yalnız çevreyi", "Hiçbirini", "Yalnız alanı"], 0, "Simetri bu üçünü üst üste bindirir."],
        ["Yükseklik ile kenarortay her üçgende aynı mıdır?", ["Hayır", "Evet", "Yalnız dar açıda evet, hep", "Çizilmez"], 0, "Biri diklik, öteki orta nokta ister."],
        ["Elemanın adı neye göre konur?", ["Yaptığı işe", "Rengine", "Uzunluğuna yalnız", "Çizen kişiye"], 0, "Dik ise yükseklik, ortaya iniyorsa kenarortaydır."],
      ],
    },
  ]),
  unit("Oran ve orantı", [20, 21, 22], [
    {
      title: "Oran",
      paragraphs: [
        "Oran, iki çokluğun karşılaştırılmasıdır ve bölme ile yazılır. 4 kaleme 12 lira veriliyorsa birim fiyat 12/4 = 3 liradır.",
        "Oran sadeleştirilebilir. 12:4 = 3:1. Birimler aynı türdense sade oran birimsiz söylenebilir.",
      ],
      example: "Bir haritada 1 cm, 5 km ise 4 cm 20 km’ye karşılık gelir.",
      questions: [
        ["12 lira 4 kalem ise bir kalem kaç liradır?", ["3", "8", "16", "48"], 0, "12 ÷ 4 = 3."],
        ["12:4 sadeleşince nedir?", ["3:1", "4:12", "8:1", "1:3"], 0, "İki terim de 4’e bölünür."],
        ["1 cm 5 km ise 4 cm kaç km’dir?", ["9", "20", "5", "1"], 1, "4 × 5 = 20."],
      ],
    },
    {
      title: "Doğru orantı",
      paragraphs: [
        "Biri artınca öteki aynı oranda artıyorsa doğru orantı vardır. Çiftler arasındaki bölüm sabittir.",
        "2 saatte 90 km giden araç, aynı süratle 4 saatte 180 km gider. Sabit oran 45 km/sa’tir.",
      ],
      example: "3 kilogram elma 60 lira ise 5 kilogram 100 liradır. Çünkü kilogram fiyatı 20 liradır.",
      questions: [
        ["3 kg 60 lira ise 5 kg kaç liradır?", ["100", "80", "63", "20"], 0, "Birim fiyat 20, 5 × 20 = 100."],
        ["2 saatte 90 km ise 4 saatte aynı süratle kaç km gidilir?", ["180", "45", "92", "360"], 0, "Süre iki katına çıkınca yol da iki kat olur."],
        ["Doğru orantıda biri artınca öteki ne olur?", ["Aynı oranda artar", "Azalır", "Sabit kalır", "Sıfırlanır"], 0, "Bölüm sabit kalır, ikisi birlikte büyür."],
      ],
    },
  ]),
  unit("Teorik olasılık", [23, 24], [
    {
      title: "Eşit olasılıklı sonuç",
      paragraphs: [
        "Teorik olasılık, deney yapmadan hesaplanır. Bütün sonuçlar eşit olasılıklıysa olasılık, istenen sonuç sayısının toplam sonuç sayısına bölümüdür.",
        "Adil bir zarda 6 yüz vardır. 5 gelme olasılığı 1/6’dır. Çift gelme olasılığı 3/6 = 1/2’dir.",
      ],
      example: "İçinde 2 kırmızı ve 3 mavi bilye olan torbadan kırmızı çekme olasılığı 2/5’tir.",
      questions: [
        ["Adil zarda 5 gelme olasılığı nedir?", ["1/6", "5/6", "1/5", "1/2"], 0, "6 yüzden 1’i istenendir."],
        ["Çift sayı gelme olasılığı nedir?", ["1/2", "1/6", "2/3", "1"], 0, "2, 4 ve 6 olmak üzere 3 yüz. 3/6 = 1/2."],
        ["2 kırmızı ve 3 mavi bilyede kırmızı olasılığı nedir?", ["2/5", "3/5", "2/3", "1/5"], 0, "İstenen 2, toplam 5."],
      ],
    },
    {
      title: "Olanaksız ve kesin",
      paragraphs: [
        "İstenen sonuç yoksa olasılık 0’dır. Bütün sonuçlar istenen ise olasılık 1’dir.",
        "Bir olayın olasılığı ile olmama olasılığının toplamı 1’dir. Zarın 6 gelmemesi 5/6’dır.",
      ],
      example: "Torbada yalnız mavi varsa kırmızı çekme olasılığı 0, mavi çekme olasılığı 1’dir.",
      questions: [
        ["Yalnız mavi bilyeden kırmızı çekme olasılığı kaçtır?", ["0", "1", "1/2", "2"], 0, "İstenen sonuç yoktur."],
        ["Zarın 6 gelmemesi olasılığı nedir?", ["5/6", "1/6", "1", "0"], 0, "6 yüzden 5’i 6 değildir."],
        ["Bir olay ve karşıtının olasılıkları toplamı kaçtır?", ["1", "0", "1/2", "6"], 0, "Ya olur ya olmaz."],
      ],
    },
  ]),
  unit("Cebirsel ifadelerle işlem", [25, 26, 27], [
    {
      title: "Benzer terim",
      paragraphs: [
        "Aynı değişkeni aynı üsle taşıyan terimler benzerdir. 4a + 3a = 7a. 4a + 3b toplanıp tek terim olmaz.",
        "Dağılma özelliği parantezi açar: 2(x + 5) = 2x + 10. Eksi dağılırken iki terimin de işareti değişir: −(x − 3) = −x + 3.",
      ],
      example: "3(x − 2) + x = 3x − 6 + x = 4x − 6.",
      questions: [
        ["4a + 3a kaçtır?", ["7a", "12a", "7", "43a"], 0, "Katsayılar toplanır."],
        ["2(x + 5) açılınca nedir?", ["2x + 10", "2x + 5", "x + 10", "2x + 7"], 0, "2 her iki terime dağılır."],
        ["3(x − 2) + x sadeleşince nedir?", ["4x − 6", "3x − 2", "4x − 2", "x − 6"], 0, "3x + x = 4x, sabit −6’dır."],
      ],
    },
    {
      title: "Denklem kurmak",
      paragraphs: [
        "Eşitliğin iki yanına aynı işlem yapılırsa eşitlik bozulmaz. 4x − 6 = 14 ise 4x = 20, x = 5.",
        "Sözel problemde bilinmeyen seçilir, cümle denkleme çevrilir, bulunan değer cümlede yerine konup kontrol edilir.",
      ],
      example: "Bir sayının 3 eksiğinin 2 katı 14 ise 2(n − 3) = 14. n − 3 = 7, n = 10.",
      questions: [
        ["4x − 6 = 14 ise x kaçtır?", ["5", "2", "8", "20"], 0, "4x = 20, x = 5."],
        ["2(n − 3) = 14 ise n kaçtır?", ["10", "7", "17", "4"], 0, "n − 3 = 7, n = 10."],
        ["Çözümü kontrol etmenin yolu nedir?", ["Bulunan değeri ilk eşitliğe koymak", "x’i silmek", "İki yanı farklı sayıyla çarpmak", "Yalnız sözel cümleyi tekrar okumak"], 0, "Eşitlik sağlanıyorsa çözüm doğrudur."],
      ],
    },
  ]),
  unit("Denklem ve eşitsizlik", [28, 29, 30, 31], [
    {
      title: "Birinci dereceden denklem",
      paragraphs: [
        "ax + b = c biçimindeki denklemde önce sabit terim, sonra katsayı ayıklanır. 2x + 1 = 11 ise 2x = 10, x = 5.",
        "Paydalı denklemde iki yan paydayla çarpılabilir. x/3 = 4 ise x = 12.",
      ],
      example: "Bir kalem ve 5 lira, 17 lira ediyorsa k + 5 = 17, k = 12.",
      questions: [
        ["2x + 1 = 11 ise x kaçtır?", ["5", "6", "10", "12"], 0, "2x = 10."],
        ["x/3 = 4 ise x kaçtır?", ["12", "7", "4/3", "1"], 0, "İki yan 3 ile çarpılır."],
        ["k + 5 = 17 ise k kaçtır?", ["12", "22", "5", "17"], 0, "17 − 5 = 12."],
      ],
    },
    {
      title: "Eşitsizlik",
      paragraphs: [
        "Eşitsizlikte <, >, ≤, ≥ kullanılır. İki yana aynı sayı eklenir veya çıkarılırsa yön değişmez.",
        "İki yan pozitif bir sayıyla çarpılır veya bölünürse yön yine değişmez. Negatif bir sayıyla çarpılır veya bölünürse yön değişir.",
      ],
      example: "−2x < 6 ise iki yan −2’ye bölünür, yön döner: x > −3.",
      questions: [
        ["x + 4 > 10 ise x için doğru olan hangisidir?", ["x > 6", "x > 14", "x < 6", "x = 6"], 0, "İki yandan 4 çıkarılır."],
        ["−2x < 6 çözülünce hangisi olur?", ["x > −3", "x < −3", "x < 3", "x > 3"], 0, "Negatife bölünce eşitsizlik yön değiştirir."],
        ["Eşitsizliği negatif sayıyla çarpınca ne olur?", ["Yön değişir", "Yön aynı kalır", "Eşitlik olur", "Çözüm yok olur"], 0, "İşaret değişimi sıralamayı ters çevirir."],
      ],
    },
  ]),
  unit("Cebirsel algoritma", [32], [
    {
      title: "Adım adım işlem",
      paragraphs: [
        "Bir algoritma, sırası belli adımlardır. “Sayıyı 2 ile çarp, 3 ekle, 5’e böl” bir işlemdir ve sıra değişirse sonuç değişir.",
        "n için sonuç (2n + 3) / 5 diye yazılır. n = 6 ise 15/5 = 3.",
      ],
      example: "Girdi 6, çarp 2 → 12, ekle 3 → 15, böl 5 → 3.",
      questions: [
        ["6’yı 2 ile çarpıp 3 ekleyip 5’e bölünce sonuç kaçtır?", ["3", "15", "9", "5"], 0, "12 + 3 = 15, 15 / 5 = 3."],
        ["Aynı adımlar ters sırada yapılırsa sonuç aynı mı kalır?", ["Hayır", "Evet", "Yalnız 0’da her zaman evet", "Bölme sırayı sevmez diye evet"], 0, "İşlem önceliği sonucu değiştirir."],
        ["Bu algoritmanın ifadesi hangisidir?", ["(2n + 3) / 5", "2n + 3/5", "2(n + 3) / 5", "5 / (2n + 3)"], 0, "Önce 2n + 3 hesaplanır, sonra 5’e bölünür. Parantez bu sırayı korur."],
      ],
    },
    {
      title: "Kontrol",
      paragraphs: [
        "Algoritma bir girdiyle denenir. Çıkan sonuç, elle yapılan işlemle aynı değilse ya ifade ya adım yanlıştır.",
        "Girdi tam sayı diye çıktı da tam sayı olmak zorunda değildir. 1 için (2 + 3) / 5 = 1 eder; 2 için 7/5 olur.",
      ],
      example: "n = 1 iken (2 × 1 + 3) / 5 = 1. Bu, ifadenin denemesidir.",
      questions: [
        ["n = 1 iken (2n + 3) / 5 kaçtır?", ["1", "5", "0", "2"], 0, "5 / 5 = 1."],
        ["n = 2 iken sonuç nedir?", ["7/5", "1", "7", "4"], 0, "4 + 3 = 7, 7/5."],
        ["Deneme ne işe yarar?", ["İfade ile adımların uyumunu gösterir", "Algoritmayı siler", "Girdiyi yasaklar", "Bölmeyi toplama yapar"], 0, "Tek örnek bütün hataları bulmaz ama bariz hatayı yakalar."],
      ],
    },
  ]),
  unit("Daire ve dörtgen alanı", [33, 34, 35, 36], [
    {
      title: "Daire",
      paragraphs: [
        "Dairenin alanı π × r²’dir. Yarıçap 10 cm ve π = 3 alınınca alan yaklaşık 300 cm²’dir.",
        "Çember çevre, daire ise içi dolu bölgedir. Çevre 2πr, alan πr²’dir. İkisi karıştırılmaz.",
      ],
      example: "Yarıçap iki katına çıkınca alan dört katına çıkar çünkü karesi alınır.",
      questions: [
        ["Yarıçapı 10 cm, π = 3 alınırsa alan yaklaşık kaç cm²’dir?", ["30", "60", "300", "900"], 2, "3 × 100 = 300."],
        ["Yarıçap 2 katına çıkınca alan kaç kat olur?", ["2", "4", "6", "8"], 1, "2² = 4."],
        ["Çember ile daire farkı nedir?", ["Daire içi de kapsar", "Aynı şeydir", "Çemberin alanı πr²’dir her zaman adı", "Dairenin çevresi yoktur"], 0, "Çember çizgi, daire bölgedir."],
      ],
    },
    {
      title: "Yamuk ve eşkenar dörtgen",
      paragraphs: [
        "Yamuğun alanı, paralel kenarların toplamının yarısı çarpı yüksekliktir. Paralel kenarlar 6 ve 10, yükseklik 4 ise alan 32’dir.",
        "Eşkenar dörtgenin alanı, köşegenlerin çarpımının yarısıdır. Köşegenler 6 ve 8 ise alan 24’tür.",
      ],
      example: "(6 + 10) / 2 × 4 = 8 × 4 = 32.",
      questions: [
        ["Paralel kenarları 6 ve 10, yüksekliği 4 olan yamuğun alanı kaçtır?", ["32", "16", "40", "20"], 0, "Ortalama taban 8, 8 × 4 = 32."],
        ["Köşegenleri 6 ve 8 olan eşkenar dörtgenin alanı kaçtır?", ["24", "48", "14", "28"], 0, "(6 × 8) / 2 = 24."],
        ["Yamuk formülünde hangi kenarlar kullanılır?", ["Paralel olanlar", "Yalnız eğik kenarlar", "Bütün kenarların toplamı doğrudan", "Köşegenler her zaman"], 0, "Paralel kenarlara taban denir."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Üç hesap",
      paragraphs: [
        "Etkinlik haftasında yeni konu yok. (−6) × (−2) = 12. Prizma hacmi üç ayrıtın çarpımıdır. Adil zarda tek bir yüzün olasılığı 1/6’dır.",
      ],
      example: "Ayrıtları 2, 5 ve 4 cm olan kutunun hacmi 40 cm³’tür.",
      questions: [
        ["(−6) × (−2) kaçtır?", ["−12", "12", "−8", "4"], 1, "Aynı işaretlerin çarpımı pozitiftir."],
        ["2, 5 ve 4 cm’lik prizmanın hacmi kaç cm³’tür?", ["11", "40", "20", "80"], 1, "2 × 5 × 4 = 40."],
        ["Adil zarda 3 gelme olasılığı nedir?", ["1/6", "1/3", "1/2", "3/6"], 0, "Altı yüzden biri."],
      ],
    },
  ]),
]

const fen = [
  unit("Uzay çağı", [1, 2, 3, 4], [
    {
      title: "Türkiye ve uzay",
      paragraphs: [
        "Uzay araştırmaları; uydu, roket ve gözlemeviyle yapılır. Uydular haberleşme, hava gözlemi ve konum bulmakta kullanılır.",
        "Türkiye, kendi uydularını ve uzay programını geliştirir. Amaç, veriye başkasının izni olmadan da ulaşabilmektir.",
      ],
      example: "Hava uydusu bulutun yerini gösterir; yerdeki tahmin bu veriyle güçlenir.",
      questions: [
        ["Uydu ne işe yarayabilir?", ["Haberleşme ve hava gözlemi", "Depremi durdurmak", "Ay’ı söndürmek", "Kütleyi yok etmek"], 0, "Uydu, yörüngeden veri toplar veya sinyal iletir."],
        ["Konum bulma hangi teknolojiyle ilişkilidir?", ["Uydu", "Yalnız pusula taşı", "Termometre", "Ayna"], 0, "Navigasyon uyduları konum verir."],
        ["Kendi uydusuna sahip olmak ne sağlar?", ["Veriye daha doğrudan ulaşmayı", "Güneş’i değiştirmeyi", "Tutulmayı iptal etmeyi", "Yoğunluğu sıfırlamayı"], 0, "Gözlem ve haberleşme bağımsızlaşır."],
      ],
    },
    {
      title: "Uzayda neler var?",
      paragraphs: [
        "Yıldız kendi ışığını üretir. Gezegen, yıldızın çevresinde dolanır. Uydu, gezegenin çevresinde dolanır. Gök taşı ve kuyruklu yıldız da Güneş sistemindedir.",
        "Işık yılı, ışığın bir yılda aldığı yoldur ve uzaklık birimidir. Yıldızlar birbirine çok uzaktır.",
      ],
      example: "Güneş bir yıldız, Dünya bir gezegen, Ay bir uydudur.",
      questions: [
        ["Kendi ışığını üreten hangisidir?", ["Yıldız", "Gezegen", "Uydu", "Gök taşı"], 0, "Yıldız bir ışık kaynağıdır."],
        ["Ay hangi sınıfa girer?", ["Uydu", "Yıldız", "Güneş", "Işık yılı"], 0, "Ay, Dünya’nın çevresinde dolanır."],
        ["Işık yılı nedir?", ["Uzaklık birimi", "Zaman birimi gibi saat", "Bir gezegen", "Bir kuvvet"], 0, "Işığın bir yılda gittiği yol, mesafe ölçer."],
      ],
    },
  ]),
  unit("Kuvvet, iş ve enerji", [5, 6, 7, 8], [
    {
      title: "İş",
      paragraphs: [
        "Bilimsel iş, kuvvet ile kuvvet yönündeki yolun çarpımıdır. İş = F × x. Birimi joule’dür.",
        "Cisim kuvvet yönünde hareket etmiyorsa o kuvvet iş yapmaz. Ağır bir çantayı yerinde tutmak yorucu olsa da bilimsel iş sıfır olabilir.",
      ],
      example: "10 N kuvvet, cisim 2 m sürüklenirse iş 20 J olur.",
      questions: [
        ["10 N kuvvet cismi 2 m hareket ettirirse iş kaç joule’dür?", ["12", "20", "5", "8"], 1, "10 × 2 = 20."],
        ["Yerinde tutulan çanta için bilimsel iş neden sıfır olabilir?", ["Kuvvet yönünde yol olmadığı için", "Kuvvet olmadığı için", "Kütle sıfır diye", "Enerji yasak diye"], 0, "Yol 0 ise iş 0’dır."],
        ["İşin birimi nedir?", ["Joule", "Newton", "Kilogram", "Metre"], 0, "Newton çarpı metre, joule eder."],
      ],
    },
    {
      title: "Enerji dönüşümü",
      paragraphs: [
        "Enerji yok olmaz, biçim değiştirir. Potansiyel enerji yükseklikle, kinetik enerji hareketle ilgilidir.",
        "Yokuş aşağı inen bisiklette potansiyel azalır, kinetik artar. Sürtünme bir kısmını ısıya çevirir.",
      ],
      example: "Yay sıkışınca potansiyel depolar, bırakılınca bu enerji hareket olur.",
      questions: [
        ["Yokuş aşağı inen bisiklette ne artar?", ["Kinetik enerji", "Yükseklik potansiyeli", "Kütle", "İşin birimi"], 0, "Hızlandıkça hareket enerjisi büyür."],
        ["Sürtünme enerjinin bir kısmını neye çevirir?", ["Isıya", "Kütleye", "Yönsüz kuvvete yok ederek", "Işık yılına"], 0, "Enerji ısı olarak dağılır."],
        ["Sıkıştırılan yayda biriken enerji hangisidir?", ["Potansiyel", "Yalnız ısı", "Yalnız kinetik, yay durduğu hâlde", "Kütle"], 0, "Şekil değişikliği enerji depolar."],
      ],
    },
  ]),
  unit("Enerji dönüşümleri", [9], [
    {
      title: "Günlük dönüşümler",
      paragraphs: [
        "Lamba elektrik enerjisini ışık ve ısıya, motor elektrik enerjisini harekete çevirir. Hiçbir araç enerjinin tamamını istenen biçime çeviremez.",
        "Verim, istenen enerjinin verilen enerjiye oranıdır. Isınan motor, enerjinin bir kısmının ısıya gittiğini gösterir.",
      ],
      example: "100 J elektrik alan bir lambanın 20 J’ü ışık, 80 J’ü ısı olursa ışık verimi %20’dir.",
      questions: [
        ["100 J elektriğin 20 J’ü ışık olursa ışık verimi yüzde kaçtır?", ["20", "80", "5", "120"], 0, "20 / 100 = %20."],
        ["Motorun ısınması neyi gösterir?", ["Enerjinin bir kısmının ısıya dönüştüğünü", "Verimin %100 olduğunu", "Kuvvetin yok olduğunu", "Kütlenin arttığını"], 0, "İstenmeyen ısı, kayıp sayılır."],
        ["Enerji için doğru olan hangisidir?", ["Biçim değiştirir, yok olmaz", "Kullanılınca biter ve sıfırlanır", "Yalnız ışıkta vardır", "Yalnız yayda vardır"], 0, "Korunum, biçim değiştirmeyi yasaklamaz."],
      ],
    },
    {
      title: "Besin ve hareket",
      paragraphs: [
        "Besindeki kimyasal enerji, vücutta hareket ve ısıya dönüşür. Koşunca hem yer değiştirilir hem vücut ısınır.",
        "Enerji kaynağı olmadan iş sürmez. Yorgunluk, harcanan enerjinin yenilenmesi gerektiğini hatırlatır.",
      ],
      example: "Sabah yenmeyen kahvaltı, ilk derste çabuk yorulmanın nedeni olabilir.",
      questions: [
        ["Besindeki enerji hangi biçimdedir?", ["Kimyasal", "Yalnız kinetik", "Yalnız nükleer her yiyecekte", "Işık yılı"], 0, "Besin, kimyasal enerji taşır."],
        ["Koşunca enerji nereye gider?", ["Hareket ve ısıya", "Yok olur", "Kütle olarak birikir kesin", "Aynaya"], 0, "Kas iş yapar, vücut ısınır."],
        ["Verim %100 değilse ne olur?", ["Bir kısım enerji istenen işin dışında kalır", "Enerji çoğalır", "İş eksi olur", "Kuvvet birimi değişir"], 0, "Isı gibi yan ürünler çıkar."],
      ],
    },
  ]),
  unit("Sindirim sistemi", [10, 11], [
    {
      title: "Yol",
      paragraphs: [
        "Sindirim; ağız, yutak, yemek borusu, mide, ince bağırsak ve kalın bağırsaktan oluşan bir yoldur.",
        "Besin, mekanik olarak parçalanır ve kimyasal olarak küçük moleküllere ayrılır. Emilim büyük ölçüde ince bağırsakta olur.",
      ],
      example: "Ekmekteki nişasta, şekere kadar parçalanınca hücrelere geçebilir.",
      questions: [
        ["Emilim en çok nerede olur?", ["İnce bağırsakta", "Yutakta", "Dişte", "Midenin dışında"], 0, "İnce bağırsağın yüzeyi emilim için geniştir."],
        ["Kimyasal sindirim ne yapar?", ["Besini küçük moleküllere ayırır", "Yalnız dişle ezer", "Suyu yok eder", "Kanı üretir"], 0, "Enzimler bu parçalamayı yapar."],
        ["Sindirim yolunun doğru sıraya yakın olanı hangisidir?", ["Ağız, mide, ince bağırsak", "Mide, ağız, yutak", "Kalın bağırsak, ağız, mide", "Yemek borusu, ağız, mide"], 0, "Besin ağızdan mideye, oradan bağırsağa geçer."],
      ],
    },
    {
      title: "Sağlıklı seçim",
      paragraphs: [
        "Lifli besin bağırsak çalışmasına yardım eder. Aşırı şeker ve çok işlenmiş yiyecek, enerji verse de tek başına yeterli değildir.",
        "İyi çiğnemek mekanik sindirimi başlatır. Su, besinin taşınmasına yardım eder.",
      ],
      example: "Acele yutulan lokma mideye daha büyük iner ve sindirim zorlaşır.",
      questions: [
        ["Lif neye yardım eder?", ["Bağırsak çalışmasına", "Dişi eritmeye", "Kanı durdurmaya", "Kemiği silmeye"], 0, "Lif, posayı artırır."],
        ["Çiğnemek hangi sindirimdir?", ["Mekanik", "Yalnız kimyasal", "Emilim", "Solunum"], 0, "Diş, besini küçültür."],
        ["Su sindirimde neden önemlidir?", ["Taşımaya yardım eder", "Besini tahta yapar", "Mideyi kapatır", "Enzimi yok eder"], 0, "Çözelti ve hareket için su gerekir."],
      ],
    },
  ]),
  unit("Dolaşım sistemi", [12, 13], [
    {
      title: "Kalp, damar, kan",
      paragraphs: [
        "Kalp, kanı damarlara pompalar. Atardamar kanı kalpten götürür, toplardamar kalbe getirir. Kılcal damarda madde alışverişi olur.",
        "Kan; besin, oksijen ve artığı taşır. Alyuvar oksijen taşır, akyuvar hastalığa karşı çalışır, plaket kanamayı durdurmaya yardım eder.",
      ],
      example: "Koşunca kalp hızlanır çünkü kas daha çok oksijen ister.",
      questions: [
        ["Kanı kalpten uzaklaştıran damar hangisidir?", ["Atardamar", "Toplardamar", "Yemek borusu", "Sinir"], 0, "Atardamar kalpten çıkar."],
        ["Oksijen taşıyan kan hücresi hangisidir?", ["Alyuvar", "Akyuvar", "Plaket", "Enzim"], 0, "Alyuvardaki hemoglobin oksijen bağlar."],
        ["Kılcal damarda ne olur?", ["Madde alışverişi", "Kanın üretimi baştan", "Sindirim", "Yansıma"], 0, "Hücre ile kan burada komşu olur."],
      ],
    },
    {
      title: "Sağlık",
      paragraphs: [
        "Hareket, sigarasız hava ve dengeli beslenme damar sağlığını korur. Tuz ve hareketsizlik dolaşımı zorlayabilir.",
        "Nabız, kalbin bir dakikadaki atımıdır. Dinlenmede ve koşuda aynı değildir.",
      ],
      example: "Merdiven çıkınca nabız yükselir, dinlenince yeniden düşer.",
      questions: [
        ["Nabız nedir?", ["Kalbin bir dakikadaki atım sayısı", "Soluk sayısı her zaman aynı adlı", "Tansiyon aleti", "Bir kemik"], 0, "Nabız, kalp ritminin dışarıdan duyulan hâlidir."],
        ["Koşunca nabız neden yükselir?", ["Kas daha çok oksijen istediği için", "Kan durduğu için", "Kalp uyuduğu için", "Damar kaybolduğu için"], 0, "Hızlanan dolaşım oksijeni yetiştirir."],
        ["Dolaşımı zorlayabilecek alışkanlık hangisidir?", ["Hareketsizlik", "Yürüyüş", "Su içmek", "Uyku"], 0, "Kas pompası çalışmayınca dönüş zorlaşır."],
      ],
    },
  ]),
  unit("Solunum sistemi", [14, 15], [
    {
      title: "Yol ve alışveriş",
      paragraphs: [
        "Hava; burun, yutak, gırtlak, soluk borusu ve akciğerlere gider. Alveol denen hava keseciklerinde oksijen kana, karbondioksit havaya geçer.",
        "Diyafram kasılınca göğüs genişler, hava girer. Gevşeyince hava çıkar.",
      ],
      example: "Burundan nefes almak havayı ısıtır ve süzer. Ağızdan sürekli nefes bu korumayı azaltır.",
      questions: [
        ["Gaz alışverişi en çok nerede olur?", ["Alveollerde", "Burun deliğinde yalnız", "Midede", "Kalbin içinde"], 0, "Kılcal damarlar alveolü sarar."],
        ["Diyafram kasılınca ne olur?", ["Göğüs genişler, hava girer", "Hava hemen çıkar", "Kalp durur", "Akciğer kapanır"], 0, "Hacim artınca hava içeri dolar."],
        ["Kana geçen gaz hangisidir?", ["Oksijen", "Yalnız azot her alışverişte esas", "Karbondioksit içeri, oksijen dışarı", "Su buharı bir kemik olur"], 0, "Hücre oksijen ister, karbondioksit atılır."],
      ],
    },
    {
      title: "Solunum sağlığı",
      paragraphs: [
        "Sigara dumanı ve kirli hava, alveol ve bronşlara zarar verir. Tozlu ortamda maske, havayı süzen bir engeldir.",
        "Düzenli hareket akciğer kapasitesini verimli kullanmaya yardım eder. Nefes darlığında zorlanarak spor yapılmaz, yetişkine söylenir.",
      ],
      example: "Kapalı salonda çok kişi varken cam açmak, karbondioksit birikmesini azaltır.",
      questions: [
        ["Sigara dumanı nereye zarar verebilir?", ["Akciğer yollarına", "Yalnız kemiğe, akciğere değil", "Aynaya", "Uyduya"], 0, "Duman solunum yüzeyini bozar."],
        ["Kalabalık kapalı yerde cam açmak ne işe yarar?", ["Havayı yeniler", "Oksijeni bitirir", "Diyaframı durdurur", "Kanı üretmez"], 0, "Taze hava oksijen oranını toparlar."],
        ["Tozlu ortamda maske neden kullanılır?", ["Solunan tozu azaltmak için", "Nefesi kesmek için", "Karbondioksit üretmek için", "Nabzı saymak için"], 0, "Maske büyük parçaları tutar."],
      ],
    },
  ]),
  unit("Boşaltım sistemi", [16, 17], [
    {
      title: "Böbrek",
      paragraphs: [
        "Boşaltım, vücut için zararlı veya fazla maddelerin atılmasıdır. Böbrekler kanı süzer, idrarı oluşturur.",
        "İdrar, idrar kanalı ve idrar kesesi üzerinden dışarı atılır. Deri terleyerek su ve bir miktar tuz da atabilir. Akciğer karbondioksit atar.",
      ],
      example: "Az su içmek idrarı koyulaştırabilir. Böbrek, suyu ekonomisiyle kullanır.",
      questions: [
        ["Kanı süzüp idrar oluşturan organ hangisidir?", ["Böbrek", "Mide", "Akciğer yalnız", "Kalp"], 0, "Böbrek boşaltımın ana organıdır."],
        ["Akciğerin boşaltıma katkısı nedir?", ["Karbondioksit atmak", "İdrar üretmek", "Nişastayı sindirmek", "Kan pompalamak"], 0, "Soluk, gaz atığı dışarı taşır."],
        ["Az su içilince idrar ne olabilir?", ["Daha koyu", "Yok", "Yalnız şeker", "Kanın kendisi"], 0, "Böbrek suyu tutunca idrar yoğunlaşır."],
      ],
    },
    {
      title: "Denge",
      paragraphs: [
        "Böbrek, su ve tuz dengesini korur. Çok tuzlu beslenme ve susuzluk bu dengeyi zorlar.",
        "İdrarda kan görmek veya uzun süren ağrı bir yetişkine söylenir. Boşaltım şikâyeti gizlenmez.",
      ],
      example: "Spor sonrası su içmek, terle kaybedilen suyu yerine koyar.",
      questions: [
        ["Böbrek hangi dengeyi korur?", ["Su ve tuz", "Yalnız kemik sayısı", "Işık", "Yörünge"], 0, "Fazla su ve tuz idrarla ayarlanır."],
        ["Terlemek neyin kaybıdır?", ["Su ve bir miktar tuz", "Yalnız kemik", "Oksijen üretimi", "Kan hücresi yapımı"], 0, "Ter, deriden atılan sıvıdır."],
        ["İdrarda kan görülürse ne yapılır?", ["Bir yetişkine söylenir", "Gizlenir", "Tuz artırılır", "Su tamamen kesilir"], 0, "Bu bir sağlık işaretidir, ertelenmez."],
      ],
    },
  ]),
  unit("Işığın kırılması", [18, 19, 20], [
    {
      title: "Kırılma",
      paragraphs: [
        "Işık bir saydam ortamdan başka bir saydam ortama geçerken hızı değişir ve yönü kırılabilir. Buna kırılma denir.",
        "Suyun içindeki çubuk kırık görünür. Göz, ışığın düz geldiğini varsayar; oysa ışık su yüzeyinde yön değiştirmiştir.",
      ],
      example: "Havuzdaki ayak, olduğundan yakın ve büyük görünebilir.",
      questions: [
        ["Kırılma ne zaman olur?", ["Işık başka bir saydam ortama geçerken", "Yalnız aynada", "Yalnız karanlıkta", "Kuvvet uygulanınca"], 0, "Hız değişince yön de değişebilir."],
        ["Sudaki çubuk neden kırık görünür?", ["Işık su yüzeyinde yön değiştirdiği için", "Çubuk gerçekten kırıldığı için", "Su opak olduğu için", "Göz ışık ürettiği için"], 0, "Görüntü, ışının kırılmış yoluna göre kurulur."],
        ["Kırılma yansımadan farkı nedir?", ["Işık ikinci ortama geçer", "Işık aynı ortamda döner", "Açı hiç değişmez", "Yalnız seste olur"], 0, "Yansımada ışık geri döner, kırılmada ortama girer."],
      ],
    },
    {
      title: "Tam yansıma değil, sınır",
      paragraphs: [
        "Kırılma açısı, ortamların yoğunluğuna bağlıdır. Işık çok yoğun ortamdan az yoğun ortama geçerken sınır açısından büyük gelirse tam yansıyabilir.",
        "Bu sınıfta asıl fikir şudur: ışık her zaman düz geçmez. Görünen yer, her zaman gerçek yer değildir.",
      ],
      example: "Bardaktaki kaşığın sapı yüzeyde kaymış gibi durur.",
      questions: [
        ["Görünen konum her zaman gerçek konum mudur?", ["Hayır", "Evet", "Yalnız havada evet, suda da evet", "Yalnız geceleri"], 0, "Kırılma yeri kaydırabilir."],
        ["Işığın hızı ortam değişince ne olabilir?", ["Değişebilir", "Hiç değişmez", "Sıfır olur", "Kütleye döner"], 0, "Farklı saydamlarda hız farklıdır."],
        ["Kaşık sapının kaymış görünmesi hangi olaydır?", ["Kırılma", "Yansıma yalnız", "Soğurulma", "Gölge"], 0, "Işık sudan havaya geçerken kırılır."],
      ],
    },
  ]),
  unit("Mercekler", [21, 22], [
    {
      title: "İnce kenarlı",
      paragraphs: [
        "İnce kenarlı mercek ortası kalın, kenarı incedir. Paralel ışığı bir odakta toplayabilir. Büyüteç bu mercektir.",
        "Gözlükte hipermetrop için ince kenarlı mercek kullanılır. Mercek cama çok yaklaştırılırsa görüntü bulanabilir.",
      ],
      example: "Güneş ışığını kâğıtta nokta hâline getiren büyüteç, kâğıdı yakabilir. Bu yüzden denetimsiz bırakılmaz.",
      questions: [
        ["İnce kenarlı mercek ışığı ne yapabilir?", ["Bir odakta toplayabilir", "Her zaman dağıtır", "Yutar", "Üretir"], 0, "Yakınsak mercek ışığı toplar."],
        ["Büyüteç hangi mercektir?", ["İnce kenarlı", "Kalın kenarlı", "Düz ayna", "Tümsek ayna"], 0, "Ortası şişkindir."],
        ["Güneş ışığını noktada toplamak neden tehlikelidir?", ["Kâğıdı yakabilir", "Işık yok olur", "Odak soğutur", "Mercek kararır"], 0, "Enerji küçük alana yığılır."],
      ],
    },
    {
      title: "Kalın kenarlı",
      paragraphs: [
        "Kalın kenarlı merceğin ortası incedir. Işığı dağıtır. Miyop gözlüklerinde kullanılır.",
        "Mercekler gözde, kamerada ve mikroskopta görüntüyü düzenler. Camın eğrisi, görüntünün yerini değiştirir.",
      ],
      example: "Miyopta görüntü retinanın önüne düşer. Kalın kenarlı mercek ışığı dağıtarak görüntüyü retinaya yaklaştırır.",
      questions: [
        ["Kalın kenarlı mercek ışığı ne yapar?", ["Dağıtır", "Bir odakta toplar her zaman", "Soğurur ve yok eder", "Yansıtır yalnız"], 0, "Iraksak mercek ışını açar."],
        ["Miyop gözlükte hangi mercek kullanılır?", ["Kalın kenarlı", "İnce kenarlı", "Düz cam, kırma yok", "Ayna"], 0, "Görüntüyü retinaya denk getirmek için ışık dağıtılır."],
        ["Mercek nerede kullanılır?", ["Gözlük, kamera ve mikroskop", "Yalnız pilde", "Yalnız böbrekte", "Yalnız uyduda"], 0, "Görüntü oluşturan araçlarda mercek vardır."],
      ],
    },
  ]),
  unit("Maddenin tanecikli yapısı", [23], [
    {
      title: "Atom ve element",
      paragraphs: [
        "Madde atomlardan oluşur. Aynı tür atomlardan oluşan saf maddeye element denir. Oksijen, demir ve altın birer elementtir.",
        "Atomun çekirdeğinde proton ve nötron, çevresinde elektron vardır. Proton sayısı, elementin kimliğini belirler.",
      ],
      example: "Her altın atomunda aynı sayıda proton vardır. Bu sayı değişirse element de değişir.",
      questions: [
        ["Element nedir?", ["Aynı tür atomlardan oluşan saf madde", "Her karışım", "Bir kuvvet", "Bir mercek"], 0, "Element tek cins atom içerir."],
        ["Elementin kimliğini ne belirler?", ["Proton sayısı", "Kabın şekli", "Sıcaklık", "Rengi yalnız"], 0, "Proton sayısı atom numarasını verir."],
        ["Elektron nerede bulunur?", ["Çekirdeğin çevresinde", "Çekirdeğin içinde protonla birlikte her modelde yalnız", "Yalnız nötronda", "Moleküller arasında boşlukta durmaz, çevrededir"], 0, "Elektronlar çekirdek çevresindedir."],
      ],
    },
    {
      title: "Molekül",
      paragraphs: [
        "İki veya daha çok atomun bağlanmasıyla molekül oluşabilir. Su molekülünde iki hidrojen ve bir oksijen vardır.",
        "Fiziksel hâl değişince molekül aynı kalır. Buz, su ve buhar aynı su molekülleridir.",
      ],
      example: "Şeker suda çözününce yok olmaz; molekülleri suyun arasına dağılır.",
      questions: [
        ["Su molekülünde hangi atomlar vardır?", ["İki hidrojen, bir oksijen", "İki oksijen, bir hidrojen", "Yalnız altın", "Proton ve mercek"], 0, "H₂O, iki H ve bir O’dur."],
        ["Buz eriyince molekül değişir mi?", ["Hayır", "Evet, başka elemente döner", "Proton sayısı değişir", "Atom yok olur"], 0, "Hâl değişimi kimyasal değişim değildir."],
        ["Çözünen şeker nereye gider?", ["Su moleküllerinin arasına", "Yok olur", "Proton olur", "Aynaya yapışır"], 0, "Görünmemek, yok olmak değildir."],
      ],
    },
  ]),
  unit("Saf maddeler", [24, 25, 26, 27], [
    {
      title: "Element ve bileşik",
      paragraphs: [
        "Saf madde, her yerinde aynı özelliği gösterir. Element ve bileşik saf maddedir.",
        "Bileşik, farklı elementlerin belirli oranda birleşmesidir. Su bir bileşiktir. Elementlerine ancak kimyasal yöntemle ayrılır.",
      ],
      example: "Sofra tuzu bir bileşiktir. İçindeki sodyum ve klor, tuzun kendisi gibi davranmaz.",
      questions: [
        ["Su hangi sınıftadır?", ["Bileşik", "Element", "Homojen karışım zorunlu", "Bir alaşım"], 0, "Hidrojen ve oksijen belirli oranda birleşmiştir."],
        ["Bileşik elementlerine nasıl ayrılır?", ["Kimyasal yöntemle", "Süzerek her zaman", "Mıknatısla her zaman", "Bakarak"], 0, "Bağ koparmak kimyasal bir işlemdir."],
        ["Saf madde için doğru olan hangisidir?", ["Her yerinde aynı özelliği gösterir", "Oranı değişir", "İki fazlıdır", "Yalnız karışımdır"], 0, "Tek bir madde vardır."],
      ],
    },
    {
      title: "Ayırt edici özellik",
      paragraphs: [
        "Erime noktası, kaynama noktası ve yoğunluk saf maddeler için ayırt edicidir. Koşullar aynıysa bu değerler değişmez.",
        "Karışımın erime noktası, içindeki oran değiştikçe kayabilir. Bu yüzden sabit nokta, saflığın ipucudur.",
      ],
      example: "Saf su 1 atm basınçta 100°C’ta kaynar. Tuz eklenince kaynama noktası yükselir.",
      questions: [
        ["Saf su 1 atm’de kaç °C’ta kaynar?", ["100", "0", "50", "212"], 0, "Kaynama noktası 100°C’tır."],
        ["Tuz eklenince kaynama noktası ne olur?", ["Yükselebilir", "Her zaman 0 olur", "Kaybolur", "Yoğunluk sıfırlanır"], 0, "Karışım, saf su gibi davranmaz."],
        ["Yoğunluk neden ayırt edici olabilir?", ["Aynı koşullarda maddeye özgü olduğu için", "Kaba bağlı olduğu için", "Kişiye göre değiştiği için", "Yalnız gazda yoktur diye"], 0, "Saf maddenin yoğunluğu tanımlıdır."],
      ],
    },
  ]),
  unit("Karışımlar", [28, 29], [
    {
      title: "Homojen ve heterojen",
      paragraphs: [
        "Homojen karışımda bileşenler her yerde aynı görünür. Tuzlu su ve hava homojendir. Heterojende farklı kısımlar seçilir: kum-su, yağ-su.",
        "Çözelti bir homojen karışımdır. Çözünen ve çözen vardır. Şeker çözünen, su çözen olabilir.",
      ],
      example: "Ayran çalkalanınca homojen görünebilir, bekleyince heterojenleşebilir. Görünüş, karışımın türünü anlamaya yardım eder.",
      questions: [
        ["Tuzlu su nasıldır?", ["Homojen", "Heterojen", "Bir element", "Bir bileşik"], 0, "Tuz her yere dağılmıştır, tek faz görünür."],
        ["Yağ ve su nasıldır?", ["Heterojen", "Homojen", "Saf element", "Bileşik"], 0, "İki faz gözle seçilir."],
        ["Çözeltide şeker suyun içinde ne rolündedir?", ["Çözünen", "Çözen", "Bileşiğin protonu", "Bir element"], 0, "Su çözen, şeker çözünendir."],
      ],
    },
    {
      title: "Derişim",
      paragraphs: [
        "Aynı miktar suda daha çok şeker varsa çözelti daha derişiktir. Tat bunun günlük karşılığıdır.",
        "Doymuş çözeltide, o sıcaklıkta daha fazla madde çözünmez; fazla madde dibe çöker.",
      ],
      example: "Bir bardak çaya iki küp şeker, bir küpten daha derişiktir.",
      questions: [
        ["Aynı suda daha çok şeker olursa çözelti ne olur?", ["Daha derişik", "Daha seyreltik", "Saf su", "Element"], 0, "Çözünen miktarı artar."],
        ["Doymuş çözeltide fazla şeker ne yapar?", ["Dibe çökebilir", "Sonsuz çözünür", "Suyu elemente çevirir", "Yok olur"], 0, "Çözebileceği sınırı aşmıştır."],
        ["Hava hangi karışımdır?", ["Homojen", "Heterojen kum gibi", "Bir bileşik", "Bir element"], 0, "Gazlar birbiri içinde homojen dağılır."],
      ],
    },
  ]),
  unit("Karışımları ayırma", [30], [
    {
      title: "Yöntem seçmek",
      paragraphs: [
        "Ayırma yöntemi, bileşenlerin farklı özelliğine dayanır. Süzme katı-sıvıyı, mıknatıs demiri, buharlaştırma tuzu sudan ayırabilir.",
        "Ayrımsal damıtma, kaynama noktaları farklı sıvılar için kullanılır. Yöntem, karışımın türüne göre seçilir.",
      ],
      example: "Kumlu su süzülür. Tuzlu su süzülmez; su buharlaştırılırsa tuz kalır.",
      questions: [
        ["Kumlu su hangi yöntemle ayrılır?", ["Süzme", "Mıknatıs", "Yalnız eleme her zaman yetmez, süzgeç uygundur", "Damıtma zorunlu"], 0, "Kum süzgeçte kalır, su geçer."],
        ["Tuzlu sudan tuzu elde etmek için ne yapılır?", ["Suyu buharlaştırmak", "Süzmek yeter", "Mıknatıs tutmak", "Dondurup elemek"], 0, "Su uçar, tuz kapta kalır."],
        ["Demir tozu ile kükürt tozu mıknatısla ayrılır mı?", ["Demir çekilir, kükürt kalır", "İkisi de çekilir", "İkisi de element olmadığı için ayrılmaz", "Yalnız su varsa"], 0, "Mıknatıs demiri seçer."],
      ],
    },
    {
      title: "Neden o yöntem?",
      paragraphs: [
        "Çözünmüş madde süzgeçten geçer. Bu yüzden tuzlu suya süzme yetmez. Tanecik gözle görünmüyorsa başka özellik aranır: kaynama veya mıknatıslık.",
        "Yanlış yöntem maddeyi ayırmaz, yalnız zaman kaybettirir.",
      ],
      example: "Kum önce süzülür, süzüntü tuzluysa sonra buharlaştırılır. İki basamaklı karışım iki yöntem ister.",
      questions: [
        ["Tuz neden süzgeçte kalmaz?", ["Çözündüğü için süzgeçten geçer", "Mıknatıs olduğu için", "Gaz olduğu için", "Çok büyük olduğu için"], 0, "Çözelti homojendir."],
        ["Kum ve tuz birlikte suya karışmışsa ilk adım ne olabilir?", ["Süzmek", "Hepsini yakmak", "Mıknatıslamak", "Dondurmak"], 0, "Kum katıdır, önce o ayrılır."],
        ["Yöntem neye göre seçilir?", ["Bileşenlerin farklı özelliğine", "Kabın rengine", "Kişinin yaşına", "Saate"], 0, "Fark yoksa ayırma da olmaz."],
      ],
    },
  ]),
  unit("Elektriklenme", [31, 32, 33], [
    {
      title: "Yük",
      paragraphs: [
        "Cisimler artı veya eksi yükle yüklenebilir. Aynı yükler birbirini iter, zıt yükler çeker.",
        "Sürtünme, elektronların bir cisimden diğerine geçmesine yol açabilir. Elektron alan cisim eksi, veren cisim artı yüklenir.",
      ],
      example: "Plastik tarak saça sürtülünce kâğıt parçalarını çekebilir.",
      questions: [
        ["Aynı yükler birbirine ne yapar?", ["İter", "Çeker", "Hiç etkileşmez", "Nötrleşmek zorunda hemen yok sayılır"], 0, "Aynı işaretli yükler uzaklaşır."],
        ["Elektron alan cisim nasıl yüklenir?", ["Eksi", "Artı", "Nötr kalır kesin", "Mıknatıs olur"], 0, "Elektron eksi yüklüdür."],
        ["Tarak kâğıdı neden çekebilir?", ["Sürtünmeyle yüklendiği için", "Bir pil olduğu için", "Kütlesi sıfır olduğu için", "Saydam olduğu için"], 0, "Yüklü cisim hafif nötr cismi çekebilir."],
      ],
    },
    {
      title: "Dokunma ve etki",
      paragraphs: [
        "Yüklü cisim nötr cisme dokunursa yük paylaşılabilir. Dokunmadan yaklaştırılırsa nötr cismin içindeki yükler ayrışır; buna etki ile elektriklenme denir.",
        "Topraklama, fazla yükün iletken bir yolla toprağa akmasıdır. Metal gövdeli araçlar bu yüzden topraklanır.",
      ],
      example: "Yüklü çubuk elektroskopa yaklaştırılınca yapraklar açılır. Çubuk çekilince yapraklar kapanabilir; dokunulmadıysa yük kalıcı olmayabilir.",
      questions: [
        ["Zıt yükler birbirine ne yapar?", ["Çeker", "İter", "Yok sayılır", "Nötr olur hemen, etkileşim yok"], 0, "Zıt işaretler yaklaşır."],
        ["Topraklama ne işe yarar?", ["Fazla yükü iletmek", "Cismi mıknatıs yapmak", "Işığı kırmak", "Suyu arıtmak"], 0, "Yük, büyük iletken toprağa dağılır."],
        ["Etki ile elektriklenmede dokunma var mıdır?", ["Hayır", "Evet, şarttır", "Yalnız suda", "Yalnız pilde"], 0, "Yaklaştırma yeter, yükler ayrışır."],
      ],
    },
  ]),
  unit("Sürdürülebilir yaşam ve enerji", [34, 35, 36], [
    {
      title: "Besin zinciri",
      paragraphs: [
        "Üreticiler ışık enerjisiyle besin üretir. Tüketiciler bu besini kullanır. Ayrıştırıcılar artığı yeniden toprağa katar.",
        "Enerji zincir boyunca ısı olarak dağılır. Bu yüzden üst basamaklarda enerji azalır.",
      ],
      example: "Ot, çekirge, kurbağa, yılan bir zincir olabilir. Ot olmazsa üst basamaklar aç kalır.",
      questions: [
        ["Üretici kimdir?", ["Işıkla besin üreten canlı", "Yılan", "Ayrıştırıcı her zaman", "Yalnız insan"], 0, "Bitkiler üreticidir."],
        ["Zincirin üstüne çıkıldıkça enerji ne olur?", ["Azalır", "Çoğalır", "Sabit ve %100 kalır", "Kütleye döner"], 0, "Her basamakta ısı kaybı vardır."],
        ["Ayrıştırıcının işi nedir?", ["Artığı toprağa kazandırmak", "Işığı üretmek", "Avlamak", "Elektriklenmek"], 0, "Mantar ve bazı bakteriler ayrıştırır."],
      ],
    },
    {
      title: "Yenilenebilir kaynak",
      paragraphs: [
        "Güneş, rüzgâr ve su yenilenebilir enerji kaynaklarıdır. Kömür ve petrol tükenir ve yakılınca hava kirletir.",
        "Tasarruf, yeni santral kadar önemlidir. Kullanılmayan cihazın fişini çekmek, üretilmiş enerjiyi boşa harcamamaktır.",
      ],
      example: "Gündüz güneş alan odayı yakmadan aydınlık tutmak, elektrik talebini azaltır.",
      questions: [
        ["Hangisi yenilenebilirdir?", ["Rüzgâr", "Kömür", "Petrol", "Doğal gaz"], 0, "Rüzgâr tükenen bir yakıt değildir."],
        ["Fosil yakıtın sorunu nedir?", ["Tükenir ve yakılınca kirletir", "Yenilenir", "Işık üretmez hiç", "Bir besin zinciridir"], 0, "Kömür ve petrol sınırlıdır."],
        ["Tasarruf ne demektir?", ["Gerekmeyen enerjiyi kullanmamak", "Bütün ışıkları açık bırakmak", "Pili toprağa gömmek", "Zinciri kırmak"], 0, "Az tüketmek de bir enerji politikasıdır."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Üç cümle",
      paragraphs: [
        "Etkinlik haftasında yeni ünite yok. İş, kuvvet çarpı yoldur. Tuzlu su homojendir. Aynı yükler iter.",
      ],
      example: "20 N kuvvet 3 m yol aldırırsa iş 60 J olur.",
      questions: [
        ["20 N ve 3 m için iş kaç joule’dür?", ["23", "60", "17", "6"], 1, "20 × 3 = 60."],
        ["Tuzlu su nasıldır?", ["Homojen karışım", "Element", "Heterojen kum", "Bileşik"], 0, "Tuz çözünmüşse tek faz görünür."],
        ["Aynı yükler birbirini ne yapar?", ["İter", "Çeker", "Yok eder", "Kırar"], 0, "Aynı işaret uzaklaşır."],
      ],
    },
  ]),
]

const turkce = [
  unit("Hayat Boyu Gelişim", [1, 2, 3, 4, 5], [
    {
      title: "Amaç ve engel",
      paragraphs: [
        "Gelişim anlatısında kişi bir hedef seçer ve engelle karşılaşır. Hedef “daha iyi uçmak”, engel “korku” olabilir.",
        "Sonuç, hedefin tutması kadar kişinin ne öğrendiğidir. Öğrenme yazılmazsa metin skor tabelasına döner.",
      ],
      example: "“Her sabah on dakika erken kalktı. Üçüncü hafta sözlüye hazır girdi.” Hedef hazırlık, kanıt erken kalkmak, sonuç sözlüdür.",
      questions: [
        ["Gelişim metninde sonuç yalnız skor mudur?", ["Hayır, öğrenilen de sonuçtur", "Evet", "Sonuç yazılmaz", "Engel yasaktır"], 0, "Değişim, puandan önemli olabilir."],
        ["“On dakika erken kalkmak” neyin kanıtıdır?", ["Hedefe giden eylemin", "Bir deyimin", "Bir başlığın", "Bir kaynağın"], 0, "Eylem, niyeti görünür kılar."],
        ["Engel olmasa metin neye döner?", ["Çabasız bir ilana", "Daha güçlü bir mücadeleye", "Bir deneye", "Bir kaynakçaya"], 0, "Engel, gelişimi gösterir."],
      ],
    },
    {
      title: "Gerekçe",
      paragraphs: [
        "Bir seçimi anlatırken gerekçe sorulur: neden bu hedef? “Çünkü sözlüde susmak istemiyorum” kişisel ve açıktır.",
        "Gerekçesiz öğüt, “çalışmalısın” deyip susar. Gerekçeli öğüt, sonucu ve bedeli söyler.",
      ],
      example: "“Erken kalkmak uykudan çaldı ama sözlüde cümlelerim hazırdı.” Bedel ve kazanç aynı paragraftadır.",
      questions: [
        ["Gerekçe hangi soruya cevap verir?", ["Neden?", "Kaç sayfa?", "Hangi punto?", "Kim bastı?"], 0, "Neden, seçimi açıklar."],
        ["Bedeli yazmak metne ne katar?", ["İnandırıcılık", "Abartı", "Bir liste", "Bir yasa"], 0, "Kazanç tek başına reklam gibi durur."],
        ["“Çalışmalısın” cümlesinin eksiği nedir?", ["Gerekçe ve sonuç", "Özne", "Nokta", "Başlık"], 0, "Ne için ve ne olacağı söylenmemiştir."],
      ],
    },
  ]),
  unit("Bir Hilal Uğruna", [6, 7, 8, 9, 10, 11, 12], [
    {
      title: "Tanık gibi okumak",
      paragraphs: [
        "Millî Mücadele metinlerinde açlık, taşıma, telgraf ve çocuk yaşta iş bölümü geçer. Bunlar süs değil, savaşın günlük hâlidir.",
        "Kahramanlık bağırmaz. Kağnıyı süren, haber taşıyan, okulda kalan kişi de metnin merkezinde olabilir.",
      ],
      example: "“Çocuklar mermiyi kumun altında sakladı.” Cümle, yaş küçük diye emeğin küçük olmadığını gösterir.",
      questions: [
        ["Kağnı ve telgraf metinde ne işe yarar?", ["Savaşın günlük koşullarını göstermek", "Süs olmak", "Konuyu kapatmak", "Bir deyim kurmak"], 0, "Araç, dönemin zorluğunu taşır."],
        ["Küçük yaştaki emek neden merkezde olabilir?", ["Savaş yalnız cephede değildir", "Çocuklar savaşmaz diye yazılmaz", "Tarih bunu siler", "Bir abartıdır"], 0, "Cephe gerisi de mücadeledir."],
        ["“Kumun altında sakladı” ne tür bir ayrıntıdır?", ["Somut eylem", "Bir yargı", "Bir başlık", "Bir kaynakça"], 0, "Görülen bir iştir."],
      ],
    },
    {
      title: "Bilgiyi yorumdan ayırmak",
      paragraphs: [
        "“Samsun’a 19 Mayıs 1919’da çıkıldı” bilgidir. “Bu, umudun başlangıcıydı” yorumdur. İkisi aynı cümlede bile yan yana durabilir.",
        "Yorumu silmek gerekmez; bilgi diye sunmamak gerekir.",
      ],
      example: "Paragrafta önce tarih, sonra o tarihin kişilerde ne uyandırdığı yazılırsa okur ikisini ayırır.",
      questions: [
        ["“19 Mayıs 1919” nedir?", ["Bilgi", "Yorum", "Deyim", "Gerekçe"], 0, "Tarih denetlenebilir."],
        ["“Umudun başlangıcıydı” nedir?", ["Yorum", "Ölçüm", "Bir harita", "Bir yasa"], 0, "Anlam yüklemedir."],
        ["Yorum yazmak neden serbesttir?", ["Bilgi diye sunulmadıkça metne anlam katar", "Bilginin yerine geçer", "Tarihi değiştirir", "Kaynağı siler"], 0, "Yorum etiketlenirse dürüsttür."],
      ],
    },
  ]),
  unit("İletişim ve sosyal ilişkiler", [13, 14, 15, 16, 17, 18], [
    {
      title: "Onarma",
      paragraphs: [
        "Kırıcı sözden sonra özür, suçu karşıya atmaz. “Seni kırdım, sözünü kestim” diye kendi payını söyler.",
        "“Ama sen de…” ile başlayan özür, özür olmaktan çıkar. Onarma, yeni bir sınır da koyabilir.",
      ],
      example: "“Sözünü kestiğim için özür dilerim. Bundan sonra bitirmeni bekleyeceğim.”",
      questions: [
        ["“Ama sen de” özre ne yapar?", ["Özrü bozar", "Özrü güçlendirir", "Bir kanıt olur", "Bir tanımdır"], 0, "Suç paylaştırmak sorumluluğu siler."],
        ["İyi özürde ne vardır?", ["Kişinin kendi payı", "Karşı tarafın suçu", "Bir emir", "Bir alay"], 0, "Payını söylemek onarır."],
        ["“Bitirmeni bekleyeceğim” ne koyar?", ["Yeni bir sınır ve söz", "Bir bahane", "Bir deyim", "Bir tarih"], 0, "Özür, sonraki davranışı da söyler."],
      ],
    },
    {
      title: "Dijital üslup",
      paragraphs: [
        "Ekranda yazılan alay, sınıfta söylenen alay kadar kırıcıdır. Emoji niyeti her zaman taşımaz.",
        "Grup sohbetinde birini konuşmadan çıkarmak da bir dışlamadır. Karar yazılacaksa herkesin göreceği yerde ve gerekçesiyle yazılır.",
      ],
      example: "“Seninle bu iş olmaz” yerine “Sunumu ben alamam, kaynak kısmını paylaşalım” denmesi işi kişiden ayırır.",
      questions: [
        ["Yazılı alay neden hafif sayılmaz?", ["Karşıya aynı kırıcılıkla gider", "Emoji onu siler", "Grupta hak yoktur", "Kaybolur"], 0, "Ekran, sözün etkisini azaltmaz."],
        ["İşi kişiden ayıran cümle hangisidir?", ["Sunumu ben alamam, kaynağı paylaşalım", "Seninle olmaz", "Çık gruptan", "Boş ver"], 0, "Görev konuşulur, kişi yerilmez."],
        ["Birini habersiz çıkarmak nedir?", ["Dışlama", "İş bölümü", "Özür", "Kaynakça"], 0, "Karar gizlenince ilişki bozulur."],
      ],
    },
  ]),
  unit("Türk Sanatı", [19, 20, 21, 22, 23, 24], [
    {
      title: "Sanatı okumak",
      paragraphs: [
        "Bir kilim, ebru veya cami yalnız süs değildir. Motif, malzeme ve kullanım bir dönemin emeğini taşır.",
        "Betimlerken önce ne görüldüğü, sonra bunun ne işe yaradığı yazılır. “Güzel” yargısı en sonda, kanıttan sonra gelir.",
      ],
      example: "“Ortadaki madalyon simetrik. Seccade olduğu için mihrap tarafı belli.” Görülen, sonra işlev.",
      questions: [
        ["Sanat metninde ilk yazılacak nedir?", ["Görülen", "Yalnız “güzel”", "Fiyat", "Yazarın keyfi"], 0, "Yargı, görülenin üstüne kurulur."],
        ["Motif neden önemlidir?", ["Dönemin emeğini ve anlamını taşır", "Boşluğu doldurur", "Bir deyimdir", "Bir haberdir"], 0, "Desen rastgele olmak zorunda değildir."],
        ["İşlev hangi sorudur?", ["Ne işe yarar?", "Kaç lira?", "Kim beğenmedi?", "Hangi punto?"], 0, "Seccade ile halı aynı kullanılmaz."],
      ],
    },
    {
      title: "Terim",
      paragraphs: [
        "Ebru, su yüzeyine boya ile yapılan kâğıt süslemedir. Kubbe, örtü sistemidir. Terim, günlük sözcüğün taşıyamayacağı kesinliği taşır.",
        "Terimi ilk geçtiği yerde kısaca açmak, okuru dışarıda bırakmaz.",
      ],
      example: "“Ebru, suyun üstünde yapılan bir süslemedir” cümlesi terimi tanımlar.",
      questions: [
        ["Terim neden açılır?", ["Okur dışarıda kalmasın diye", "Metin uzasın diye", "Bilgi silinsin diye", "Yargı gizlensin diye"], 0, "Tanım, kapıyı açık tutar."],
        ["Ebru nedir?", ["Sulu yüzeyde yapılan kâğıt süslemesi", "Bir kubbe", "Bir savaş", "Bir deyim"], 0, "Boya suyun üstünde şekil alır."],
        ["“Güzel” neden tek başına zayıftır?", ["Ne görüldüğünü söylemez", "Çok uzundur", "Bir terimdir", "Bir işlevdir"], 0, "Kanıtsız yargı her esere yapıştırılabilir."],
      ],
    },
  ]),
  unit("Okuma Kültürü", [25, 26, 27, 28, 29, 30], [
    {
      title: "Neden okuruz?",
      paragraphs: [
        "Okumak bilgi, hayal ve başkasının deneyimini devralmaktır. Kitap, yazarla okurun farklı zamanlarda buluşmasıdır.",
        "Bir metni sevmemek de okumaktır. Sevmemenin gerekçesi, “sıkıcı” yerine somut bir cümle olmalıdır.",
      ],
      example: "“Olay üçüncü sayfada durdu, kişi hiç değişmedi” bir gerekçedir. “Kötü” gerekçe değildir.",
      questions: [
        ["Okumak yalnız bilgi midir?", ["Hayır, deneyim ve hayal de devralınır", "Evet", "Yalnız sınavdır", "Yalnız terimdir"], 0, "Anlatı, yaşamış gibi hissettirir."],
        ["“Sıkıcı” neden zayıf bir eleştiridir?", ["Somut gerekçe yoktur", "Çok naziktir", "Bir tanımdır", "Bir kaynaktır"], 0, "Nerenin sıkıcı olduğu söylenmelidir."],
        ["Kitap hangi buluşmadır?", ["Yazar ile okurun, aynı anda olmak zorunda olmayan", "Yalnız kütüphanecinin", "Bir savaşın", "Bir grubun şifresi"], 0, "Metin, yazarı orada olmadan konuşur."],
      ],
    },
    {
      title: "Seçmek ve not",
      paragraphs: [
        "Her metin herkese aynı anda uygun olmayabilir. Seviye, konu ve amaç seçimi belirler.",
        "Kenar notu, kendi cümlenle yazılır. Yazarın cümlesini olduğu gibi boyamak, düşünmüş olmayı gerektirmez.",
      ],
      example: "“Burada kahraman fikrini değiştiriyor” notu, sayfanın işini özetler.",
      questions: [
        ["Kenar notu nasıl yazılır?", ["Kendi cümlenle", "Kitabı kopyalayarak", "Yalnız ünlemle", "Silerek"], 0, "Not, senin çıkarımındır."],
        ["Kitap seçerken neye bakılır?", ["Amaç, konu ve seviyeye", "Yalnız kapağın rengine", "Sayfa sayısının çokluğuna zorunlu", "Arkadaşın zorlamasına"], 0, "Amaçsız seçim yarıda bırakabilir."],
        ["Aynı kitabı sevmemek okumamak mıdır?", ["Hayır", "Evet", "Yasak bir sonuçtur", "Not tutmamaktır"], 0, "Gerekçeli sevmemek de bir okumadır."],
      ],
    },
  ]),
  unit("Hak ve sorumluluklar", [31, 32, 33, 34, 35, 36], [
    {
      title: "Hak metnini okumak",
      paragraphs: [
        "Hak metinleri kısa ve kesin yazar. “Kimse işkenceye uğramaz” bir yasak ve bir haktır.",
        "Hak, başkasının hakkıyla sınırlanır. İfade etmek serbesttir; hakaret ve tehdit bu serbestliğin içine girmez.",
      ],
      example: "Sınıfta söz istemek bir haktır. Başkasının sözünü kesmek o hakkın sorumluluğunu çiğner.",
      questions: [
        ["İfade hakkı tehdidi de kapsar mı?", ["Hayır", "Evet", "Yalnız espride", "Yalnız grupta"], 0, "Tehdit, karşı tarafın güvenliğini bozar."],
        ["Söz kesmek hangi sorumluluğu bozar?", ["Başkasının söz hakkını", "Bir deyimi", "Bir terimi", "Bir kapağı"], 0, "Hak karşılıklıdır."],
        ["Hak metninin dili nasıldır?", ["Kesin ve kısa", "Süslü ve belirsiz", "Yalnız şiir", "Bir kenar notu"], 0, "Hak, muğlak yazılmaz."],
      ],
    },
    {
      title: "Tartışma",
      paragraphs: [
        "Tartışmada iddia, gerekçe ve örnek vardır. Sesi yükseltmek gerekçenin yerini tutmaz.",
        "Karşı tarafın cümlesini çürütmeden önce doğru tekrar etmek, adil tartışmadır.",
      ],
      example: "“Sen şunu diyorsun: ödev ortak olmasın. Ben karşıyım çünkü yük bir kişide kalıyor.”",
      questions: [
        ["Adil tartışmada ilk adım ne olabilir?", ["Karşı cümleyi doğru tekrar etmek", "Bağırmak", "Konuyu değiştirmek", "Kişiyi alay etmek"], 0, "Yanlış duyulan cümle yanlış tartışılır."],
        ["Gerekçenin yerine geçmeyen nedir?", ["Ses yükseltmek", "Örnek", "İddia", "Kanıt"], 0, "Yükseklik, doğruluk değildir."],
        ["İddia, gerekçe ve örnek birlikte ne kurar?", ["Tartışmanın iskeletini", "Bir ebruyu", "Bir özrü zorunlu", "Bir hakareti"], 0, "Üçü de olursa fikir izlenir."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Dört soru",
      paragraphs: [
        "Etkinlik haftasında yeni tema yok. Bir metne dört soru yeter: ne oldu, neden oldu, hangisi bilgi, üslup kırıcı mı?",
      ],
      example: "Tarih bilgidir. “Umudun başlangıcı” yorumdur.",
      questions: [
        ["“19 Mayıs 1919” nedir?", ["Bilgi", "Yorum", "Özür", "Terim sanatı"], 0, "Tarih denetlenebilir."],
        ["“Ama sen de” ile başlayan özür nasıldır?", ["Sorumluluğu karşıya atar", "En güçlü özürdür", "Bir tanımdır", "Bir hak metnidir"], 0, "Özür kendi payını söyler."],
        ["Sanat yazısında yargıdan önce ne gelir?", ["Görülen ayrıntı", "Fiyat", "Bağırış", "Kaynakçasız kopya"], 0, "Kanıt, “güzel”den önce yazılır."],
      ],
    },
  ]),
]

const sosyal = [
  unit("Birlikte yaşamak", [1, 2, 3, 4, 5, 6], [
    {
      title: "İletişim ve fırsat",
      paragraphs: [
        "Grupta etkili iletişim; dinlemek, açık söylemek ve kararı birlikte yoklamaktır. Varsayım, sorulmamış hükümdür.",
        "Özel gereksinimli birey için fırsat eşitliği, aynı kapıdan girebilmek ve aynı işi yapabilmesi için gerekli düzenlemedir. Eşitlik, herkese aynı engeli koymak değildir.",
      ],
      example: "Rampa, merdivenle çıkamayan kişiye aynı okula girme imkânı verir.",
      questions: [
        ["Fırsat eşitliği nedir?", ["Gerekli düzenlemeyle aynı imkâna ulaşmak", "Herkese aynı engeli vermek", "Yarışı kapatmak", "İletişimi yasaklamak"], 0, "Rampa bir ayrıcalık değil, erişimdir."],
        ["Varsayım neden iletişimi bozar?", ["Sorulmamış hükümdür", "Bir rampadır", "Bir haktır", "Bir seçimdir"], 0, "Sormadan hüküm, karşı tarafı yok sayar."],
        ["Etkili iletişimde hangisi vardır?", ["Dinlemek ve açık söylemek", "Yalnız bağırış", "Kararı gizlemek", "Notu gizlemek"], 0, "İki yön de açık olmalıdır."],
      ],
    },
    {
      title: "Millî mesele",
      paragraphs: [
        "Millî mesele, toplumun ortak geleceğini ilgilendiren konudur. Afet, sınır güvenliği, eğitim ve salgın bu çerçevede konuşulabilir.",
        "Tutum; duyarsızlık, dayanışma veya kutuplaşma olabilir. Dayanışma, sorunu kişilerin kimliğine bağlamak yerine birlikte çözmektir.",
      ],
      example: "Depremden sonra kan bağışı, tanımadığın biri için ortak tutumdur.",
      questions: [
        ["Millî mesele kime aittir?", ["Toplumun ortak geleceğine", "Yalnız bir kişiye", "Yalnız bir derse", "Bir deyime"], 0, "Etkisi kişiyi aşar."],
        ["Dayanışma ne yapmaz?", ["Sorunu kimliğe bağlayıp dışlamaz", "Yardım eder", "Kan bağışı ister", "Birlikte çalışır"], 0, "Dışlama, dayanışmanın tersidir."],
        ["Depremde kan bağışı hangi tutumdur?", ["Dayanışma", "Duyarsızlık", "Kutuplaşma", "Varsayım"], 0, "Tanımadan yardım, ortak tutumdur."],
      ],
    },
  ]),
  unit("Evimiz Dünya", [7, 8, 9], [
    {
      title: "Küreselleşme",
      paragraphs: [
        "Küreselleşme, mal, bilgi ve kültürün ülkeler arasında hızla dolaşmasıdır. Aynı haber dakikalar içinde başka kıtada okunur.",
        "Bu hız hem iş birliği hem kırılganlık getirir. Bir yerdeki kriz, başka yerdeki fiyatı etkileyebilir.",
      ],
      example: "Bir limanın kapanması, o ülkeye hiç gitmemiş birinin marketteki ürününü geciktirebilir.",
      questions: [
        ["Küreselleşme nedir?", ["Mal, bilgi ve kültürün hızla dolaşması", "Sınırların fiziksel olarak silinmesi", "Tek bir dil kalması zorunlu", "Yerel kültürün yok sayılması"], 0, "Dolaşım hızlanır, yerellik bitmek zorunda değildir."],
        ["Uzak bir limanın kapanması seni nasıl etkileyebilir?", ["Ürün gecikebilir", "Hiç etkilemez, dünya kopuktur", "Dili değiştirir", "Seçimi iptal eder"], 0, "Tedarik zinciri ülkeleri bağlar."],
        ["Küreselleşmenin riski nedir?", ["Bir yerdeki krizin başka yere sıçraması", "Hiç haber alınmaması", "Haritanın yok olması", "Hakların silinmesi zorunlu"], 0, "Bağlılık, krizi de taşır."],
      ],
    },
    {
      title: "Bölgesel sorun ve Türkiye",
      paragraphs: [
        "Göç, savaş, kuraklık ve enerji bölge ülkelerini birlikte ilgilendirir. Türkiye, konumu nedeniyle bu sorunların hem komşusu hem muhatabıdır.",
        "Çözüm; insani yardım, diplomasi ve sınır güvenliğini birlikte düşünmeyi gerektirir. Tek araç yetmez.",
      ],
      example: "Kuraklık tarımı, tarım fiyatı, fiyat da mutfağı etkiler. Sorun yalnız hava durumu değildir.",
      questions: [
        ["Kuraklık neden yalnız hava değildir?", ["Tarımı ve fiyatı da etkiler", "Sınırı siler", "Seçimi yapar", "Bir uydudur"], 0, "Doğa olayı ekonomiye bağlanır."],
        ["Bölgesel sorunda tek araç neden yetmez?", ["İnsani, siyasi ve güvenlik boyutu birlikte vardır", "Sorun küçüktür", "Diplomasi yasaktır", "Konumun önemi yoktur"], 0, "Göç hem insani hem güvenlik konusudur."],
        ["Türkiye’nin konumu bu sorunlarda ne yapar?", ["Komşu ve muhatap kılar", "Ülkeyi dünyadan koparır", "Denizi siler", "Küreselleşmeyi durdurur"], 0, "Kıtaların ve denizlerin kesiştiği yerdedir."],
      ],
    },
  ]),
  unit("Ortak mirasımız", [10, 11, 12, 13, 14, 15, 16, 17, 18], [
    {
      title: "Cihan devleti",
      paragraphs: [
        "Osmanlı, XIV. yüzyıldan itibaren büyüyerek farklı din ve dillerin yaşadığı bir imparatorluk oldu. Yönetim, ordu ve ticaret bu büyümeyi taşıdı.",
        "İstanbul’un 1453’te alınması, hem ticaret yolları hem siyaset için dönüm noktasıdır.",
      ],
      example: "1453, Orta Çağ’ın kapanış tarihlerinden biri olarak da anılır; çünkü önemli bir başkent el değiştirmiştir.",
      questions: [
        ["İstanbul hangi yıl alındı?", ["1453", "1071", "1923", "1299"], 0, "Fatih’in fethi 1453’tür."],
        ["Osmanlı neden imparatorluk diye anılır?", ["Farklı toplulukları uzun süre bir arada yönettiği için", "Yalnız bir şehir olduğu için", "Denizci olmadığı için", "Başkenti olmadığı için"], 0, "Geniş coğrafya ve çeşitli nüfus vardır."],
        ["Fetih yalnız askerî midir?", ["Hayır, ticaret ve siyaseti de değiştirir", "Evet", "Bir göç değildir asla", "Bir kültürel olay değildir"], 0, "Yol ve başkent el değiştirir."],
      ],
    },
    {
      title: "Yenileşme ve kültür",
      paragraphs: [
        "XVIII. yüzyıldan itibaren Osmanlı, değişen dünyaya ayak uydurmak için orduda, eğitimde ve yönetimde yenilikler denedi. Yenilik, her zaman hemen sonuç vermedi.",
        "Mimari, hat, çini ve mutfak, bu uzun dönemin ortak kültür mirasıdır. Eser, döneminin gücünü ve zevkini bugüne taşır.",
      ],
      example: "Bir çini desenini kopyalamak mirası yaşatır; eserin üstünü bozmak mirası tüketir.",
      questions: [
        ["Yenileşme neden başladı?", ["Değişen dünyaya ayak uydurmak için", "Başkenti taşımak için yalnız", "Çiniyi yasaklamak için", "Denizleri kapatmak için"], 0, "Ordu ve eğitim tartışmanın merkezindeydi."],
        ["Çini neyin parçasıdır?", ["Kültür mirasının", "Bir antlaşmanın maddesi", "Bir göç yasası", "Bir fiyat"], 0, "El sanatı dönemi bugüne taşır."],
        ["Eserin üstünü bozmak neye benzer?", ["Mirası tüketmeye", "Mirası korumaya", "Yenileşmeye", "Fethetmeye"], 0, "Koruma, eseri sonraki kuşağa bırakmaktır."],
      ],
    },
  ]),
  unit("Yaşayan demokrasimiz", [19, 20, 21, 22, 23, 24, 25, 26], [
    {
      title: "Cumhuriyetin nitelikleri",
      paragraphs: [
        "Türkiye Cumhuriyeti; demokratik, laik, sosyal bir hukuk devletidir. Egemenlik kayıtsız şartsız milletindir.",
        "Yönetim; yasama, yürütme ve yargı olarak ayrılır. Seçim, vatandaşın yasamaya katılma yoludur.",
      ],
      example: "1923’te cumhuriyetin ilanı, egemenliğin padişahtan millete geçtiğinin devlet biçimidir.",
      questions: [
        ["Cumhuriyet hangi yıl ilan edildi?", ["1923", "1919", "1453", "1071"], 0, "29 Ekim 1923."],
        ["Egemenlik kime aittir?", ["Millete", "Bir kişiye", "Bir zümreye", "Yabancı bir devlete"], 0, "Anayasa bunu açık söyler."],
        ["Kuvvetler ayrılığı hangisidir?", ["Yasama, yürütme, yargı", "Ordu, okul, çarşı", "İl, ilçe, köy", "Hak, ödev, ceza yalnız"], 0, "Üç işlev birbirini dengeler."],
      ],
    },
    {
      title: "Demokrasinin güçlüğü",
      paragraphs: [
        "Demokrasi yalnız seçim günü değildir. Azınlıkta kalan görüşün de güvenliği, tartışmanın da kuralı vardır.",
        "Kutuplaşma, karşı tarafı düşman sayınca çözümü kilitler. Uzlaşma, ilkelerden vazgeçmek değil, birlikte yaşanacak yolu aramaktır.",
      ],
      example: "Sınıf oylamasında kaybeden grup, kararı yok saymak yerine gerekçesini bir sonraki toplantıya saklayabilir.",
      questions: [
        ["Demokrasi yalnız seçim günü müdür?", ["Hayır", "Evet", "Yalnız savaşta", "Yalnız okulda"], 0, "Haklar seçimden sonra da sürer."],
        ["Uzlaşma ne değildir?", ["İlkeden vazgeçmek zorunda olmak", "Birlikte yaşanacak yol", "Tartışmanın kuralı", "Kaybedenin de güvende olması"], 0, "Uzlaşma, teslim olmak demek değildir."],
        ["Kutuplaşma neyi kilitler?", ["Çözümü", "Seçimi her zaman", "Anayasayı otomatik", "Tarihi"], 0, "Düşmanlaştırılan tarafla yol aranmaz."],
      ],
    },
  ]),
  unit("Hayatımızdaki ekonomi", [27, 28, 29, 30], [
    {
      title: "Kalkınma",
      paragraphs: [
        "Millî kalkınma; üretim, eğitim, ulaşım ve teknolojinin birlikte güçlenmesidir. Yalnız bir fabrika açmak kalkınma sayılmaz.",
        "Üretim, dağıtım ve tüketim bir döngüdür. Üretilen mal tüketiciye ulaşmıyorsa döngü kırılır.",
      ],
      example: "Yol olmayan köyde yetişen ürün, pazara geç ve pahalı iner. Ulaşım, üretimin parçasıdır.",
      questions: [
        ["Kalkınma yalnız fabrika mıdır?", ["Hayır, eğitim ve ulaşım da parçasıdır", "Evet", "Yalnız tüketimdir", "Bir seçimdir"], 0, "Bir halka yetmez."],
        ["Yol neden ekonomidir?", ["Ürünü pazara bağlar", "Yalnız manzaradır", "Vergiyi siler", "Tüketimi yasaklar"], 0, "Dağıtım olmadan üretim yarım kalır."],
        ["Döngünün üç adımı hangisidir?", ["Üretim, dağıtım, tüketim", "Yasama, yürütme, yargı", "Göç, kuraklık, fiyat", "Hak, ödev, ceza"], 0, "Mal bu üçünden geçer."],
      ],
    },
    {
      title: "Gelişmişlik",
      paragraphs: [
        "Gelişmişlik yalnız gelirle ölçülmez. Okullaşma, sağlık, temiz su ve iş güvenliği de göstergedir.",
        "Kişi başına gelir yüksek olup eşitsizlik de büyük olabilir. Ortalama, herkesin o geliri aldığı anlamına gelmez.",
      ],
      example: "İki ülkenin ortalama geliri aynı olsa da birinde okul ve hastane daha yaygınsa günlük hayat farklıdır.",
      questions: [
        ["Gelişmişlik yalnız gelir midir?", ["Hayır", "Evet", "Yalnız fabrika bacasıdır", "Bir yol uzunluğudur"], 0, "Sağlık ve eğitim de sayılır."],
        ["Ortalama gelir neden yanıltabilir?", ["Herkes o geliri almıyor olabilir", "Her zaman eşittir", "Vergiyi siler", "Üretimi durdurur"], 0, "Ortalama, dağılımı gizleyebilir."],
        ["Ürün pazara ulaşmıyorsa ne kırılır?", ["Dağıtım", "Seçim", "Laiklik", "Bir yazıt"], 0, "Döngünün orta halkası kopar."],
      ],
    },
  ]),
  unit("Teknoloji ve sosyal bilimler", [31, 32, 33, 34, 35, 36], [
    {
      title: "Bilimin alanı",
      paragraphs: [
        "Sosyal bilimler insanı ve toplumu inceler: tarih, coğrafya, sosyoloji, ekonomi, hukuk. Yöntem; soru, kaynak ve karşılaştırmadır.",
        "Teknik icat, toplumsal hayatı değiştirir. Telefon hem aileyi yakınlaştırdı hem özel alanı inceltti.",
      ],
      example: "Bir haberin iki kaynakta da olup olmadığına bakmak, sosyal bilim alışkanlığıdır.",
      questions: [
        ["Sosyal bilimlerin ortak yöntemi hangisidir?", ["Soru, kaynak, karşılaştırma", "Yalnız deney tüpü", "Yalnız oy", "Bir fetih"], 0, "İddia kaynağa bağlanır."],
        ["Telefonun etkisi tek midir?", ["Hayır, hem yaklaştırır hem özel alanı inceltebilir", "Yalnız iyidir", "Yalnız kötüdür", "Etkisi yoktur"], 0, "Teknolojinin sonucu çifttir."],
        ["Hukuk hangi alandadır?", ["Sosyal bilimler", "Yalnız fen", "Yalnız sanat", "Bir enerji biçimi"], 0, "Kurallar toplumu inceler ve düzenler."],
      ],
    },
    {
      title: "Probleme çözüm",
      paragraphs: [
        "Toplumsal bir problem tanımlanır, kimleri etkilediği yazılır, birden çok çözüm üretilir, her çözümün bedeli sorulur.",
        "Tek çözüme aşık olmak araştırmayı kapatır. Bedeli yazılmayan çözüm, dilek olarak kalır.",
      ],
      example: "Servis kalabalıksa çözüm “yeni servis” olabilir. Bedeli ücret, kazancı güvenliktir. İkisi de yazılır.",
      questions: [
        ["Çözümün yanına ne yazılır?", ["Bedeli", "Yalnız slogan", "Bir destan", "Bir çini"], 0, "Bedelsiz çözüm gerçekçi değildir."],
        ["Tek çözüme kilitlenmek neyi kapatır?", ["Başka yolları", "Problemi", "Kaynağı", "Egemenliği"], 0, "Seçenek, kıyası mümkün kılar."],
        ["Problemi tanımlamak neyi söyler?", ["Kimlerin etkilendiğini", "Yalnız başlığı", "Bir ortalamayı gizleyerek", "Bir fethi"], 0, "Tanım, çözümün kime yarayacağını belirler."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Üç tarih",
      paragraphs: [
        "Etkinlik haftasında yeni ünite yok. 1453 fetih, 1923 cumhuriyet, egemenlik milletindir. Küreselleşme dolaşımı hızlandırır.",
      ],
      example: "Rampa, fırsat eşitliğinin somut hâllerinden biridir.",
      questions: [
        ["Cumhuriyet hangi yıl ilan edildi?", ["1923", "1453", "1071", "1919"], 0, "29 Ekim 1923."],
        ["İstanbul’un fethi hangi yıldır?", ["1453", "1923", "1299", "1517"], 0, "1453."],
        ["Rampa neyin aracıdır?", ["Fırsat eşitliğinin", "Bir savaşın", "Bir ortalamanın", "Bir çininin"], 0, "Erişim, eşitliğin parçasıdır."],
      ],
    },
  ]),
]

export const grade7 = { Matematik: matematik, Fen: fen, Türkçe: turkce, Sosyal: sosyal }
