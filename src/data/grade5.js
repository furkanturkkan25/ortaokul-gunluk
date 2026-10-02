import { unit } from "../lib/unit.js"

const matematik = [
  unit("Temel geometrik çizimler", [1, 2], [
    {
      title: "Nokta, doğru ve ışın",
      paragraphs: [
        "Nokta bir konumdur; büyüklüğü yoktur ve büyük harfle adlandırılır. Doğru, iki yöne sonsuz uzayan düz bir çizgidir.",
        "Doğru parçası iki uçla sınırlıdır. Işın bir noktadan başlar ve yalnız bir yöne sonsuz gider.",
      ],
      example: "A ile B arasındaki doğru parçası AB diye yazılır. A’dan başlayıp B yönünde giden ışın da AB ışınıdır.",
      questions: [
        ["İki yöne sonsuz uzayan hangisidir?", ["Nokta", "Doğru", "Doğru parçası", "Işın"], 1, "Doğrunun iki ucu da yoktur. Işın tek yöne gider."],
        ["Işın için doğru olan hangisidir?", ["İki ucu da belirlidir", "Bir başlangıcı vardır, bir yöne sonsuzdur", "Hiçbir noktadan geçmez", "Yalnız iki nokta içerir"], 1, "Işının başlangıç noktası vardır, diğer yönü sınırsızdır."],
        ["AB doğru parçası neyi anlatır?", ["A’dan başlayıp sonsuza giden çizgiyi", "A ile B arasındaki sonlu parçayı", "Yalnız A noktasını", "Doğrunun tamamını"], 1, "Doğru parçasının iki ucu A ve B’dir."],
        ["Nokta için hangisi yanlıştır?", ["Konum belirtir", "Büyük harfle adlandırılır", "Uzunluğu vardır", "Büyüklüğü yoktur"], 2, "Noktanın uzunluğu veya alanı yoktur."],
      ],
    },
    {
      title: "Açı ve çember",
      paragraphs: [
        "Açı, ortak uçlu iki ışının oluşturduğu açıklıktır. Ortak uca köşe denir.",
        "Çember, bir merkeze eşit uzaklıktaki noktaların kümesidir. Bu uzaklığa yarıçap denir. Çemberin iki ucu da çember üzerinde olan doğru parçası kiriştir; merkezden geçen kiriş çaptır.",
      ],
      example: "Yarıçap 3 cm ise çap 6 cm’dir. Çap, yarıçapın iki katıdır.",
      questions: [
        ["Açının köşesi neresidir?", ["Işınların ortak başlangıç noktası", "Çemberin merkezi", "Doğru parçasının ortası", "Kirişin ucu"], 0, "İki ışın aynı noktadan çıkar; o nokta köşedir."],
        ["Yarıçap 4 cm olan çemberin çapı kaç cm’dir?", ["2", "4", "8", "16"], 2, "Çap = 2 × yarıçap = 8 cm."],
        ["Merkezden geçen kirişe ne denir?", ["Yarıçap", "Çap", "Açı", "Işın"], 1, "Merkezden geçen kiriş çaptır."],
        ["Açı nasıl oluşur?", ["İki doğrunun her zaman kesişmesiyle", "Ortak uçlu iki ışınla", "Üç noktayla yalnızca", "Çemberin iç bölgesiyle"], 1, "Açı, başlangıçları ortak iki ışındır."],
      ],
    },
  ]),
  unit("Açı ölçme", [3, 4], [
    {
      title: "Derece ve açıölçer",
      paragraphs: [
        "Açı birimi derecedir ve ° ile gösterilir. Açıölçerin merkezi köşeye, taban çizgisi ışınlardan birine oturtulur.",
        "Diğer ışının gösterdiği sayı, açının ölçüsüdür. Ölçerken açıölçerin doğru yarısı seçilir.",
      ],
      example: "Bir ışın 0° çizgisinde, öteki 40° çizgisindeyse açı 40 derecedir.",
      questions: [
        ["Açının ölçü birimi nedir?", ["Santimetre", "Derece", "Kilogram", "Litre"], 1, "Açı derece ile ölçülür."],
        ["Açıölçerin merkezi nereye konur?", ["Açının köşesine", "Işının ucuna", "Sayfanın kenarına", "0 ile 180’in ortasına gelişigüzel"], 0, "Merkez, köşeyle çakışmalıdır."],
        ["0° ile 40° arasındaki açı kaç derecedir?", ["0", "20", "40", "140"], 2, "Büyük sayı ile küçük sayının farkı 40°’dir."],
        ["Açıölçerde iki sıra sayı olmasının nedeni nedir?", ["İki farklı birim vardır", "Açı her iki yönden okunabilsin diye", "Yalnız geniş açı için", "Cetvel yerine geçsin diye"], 1, "Biri sağdan, biri soldan okunur."],
      ],
    },
    {
      title: "Dar, dik, geniş ve doğru açı",
      paragraphs: [
        "Dar açı 0° ile 90° arasındadır. Dik açı tam 90°’dir. Geniş açı 90° ile 180° arasındadır.",
        "Doğru açı 180°’dir ve bir doğrunun iki zıt ışını gibi durur. 90°’den küçük her açı dardır.",
      ],
      example: "30° dar, 90° dik, 120° geniş, 180° doğru açıdır.",
      questions: [
        ["120°’lik açı nasıldır?", ["Dar", "Dik", "Geniş", "Doğru"], 2, "90 ile 180 arasında olduğu için geniştir."],
        ["Dik açının ölçüsü kaç derecedir?", ["45", "90", "180", "360"], 1, "Dik açı tam 90°’dir."],
        ["Hangisi dar açıdır?", ["90°", "180°", "35°", "100°"], 2, "35°, 90’dan küçüktür."],
        ["Doğru açı kaç derecedir?", ["0", "90", "180", "360"], 2, "Doğru açı 180°’dir."],
      ],
    },
  ]),
  unit("Çokgenler ve çember", [5, 6, 7, 8], [
    {
      title: "Çokgen ve kenar",
      paragraphs: [
        "Çokgen, doğrusal parçalarla sınırlı kapalı şekildir. Üçgenin 3, dörtgenin 4, beşgenin 5 kenarı vardır.",
        "Köşe sayısı kenar sayısına eşittir. Kenarları ve iç açıları eşit olan çokgen düzgün çokgendir.",
      ],
      example: "Kare düzgün dörtgendir: dört kenarı ve dört açısı da eşittir.",
      questions: [
        ["Beşgenin kaç kenarı vardır?", ["3", "4", "5", "6"], 2, "Beşgen beş kenarlıdır."],
        ["Düzgün çokgende neler eşittir?", ["Yalnız rengi", "Kenarları ve iç açıları", "Yalnız alanı", "Yalnız yüksekliği"], 1, "Düzgün çokgende kenarlar ve iç açılar eşittir."],
        ["Üçgen için doğru olan hangisidir?", ["4 köşesi vardır", "3 kenarı vardır", "Çemberdir", "Açısı yoktur"], 1, "Üçgenin üç kenarı ve üç köşesi vardır."],
      ],
    },
    {
      title: "Üçgen çeşitleri",
      paragraphs: [
        "Kenarlarına göre üçgen: eşkenar (üç kenar eşit), ikizkenar (en az iki kenar eşit), çeşitkenar (üç kenar farklı).",
        "Açılarına göre: dar açılı (bütün açılar dar), dik açılı (bir açı 90°), geniş açılı (bir açı geniş).",
      ],
      example: "Kenarları 5 cm, 5 cm ve 6 cm olan üçgen ikizkenardır.",
      questions: [
        ["Kenarları 3, 4 ve 5 cm olan üçgen nasıldır?", ["Eşkenar", "Çeşitkenar", "Düzgün çember", "Açı değildir"], 1, "Üç kenar da farklıysa çeşitkenardır."],
        ["Bir açısı 90° olan üçgene ne denir?", ["Dar açılı", "Dik açılı", "Eşkenar", "Geniş açılı"], 1, "90°’lik açı onu dik açılı yapar."],
        ["Eşkenar üçgende kaç kenar eşittir?", ["Hiçbiri", "İki", "Üç", "Dört"], 2, "Eşkenarda üç kenar da eşittir."],
      ],
    },
    {
      title: "Çemberde uzunluk",
      paragraphs: [
        "Aynı çemberde çap en uzun kiriştir. Yarıçaplar birbirine eşittir.",
        "Merkez, çemberin içindedir. Çemberin üzerindeki iki noktayı birleştiren doğru parçası kiriştir.",
      ],
      example: "Yarıçap 5 cm ise bütün yarıçaplar 5 cm, çap 10 cm’dir.",
      questions: [
        ["Aynı çemberde en uzun kiriş hangisidir?", ["En kısa kiriş", "Çap", "Yarıçap", "Köşe"], 1, "Çap, merkezden geçtiği için en uzun kiriştir."],
        ["Yarıçapı 7 cm olan çemberde başka bir yarıçap kaç cm’dir?", ["3,5", "7", "14", "21"], 1, "Aynı çemberde bütün yarıçaplar eşittir."],
        ["Kiriş nerede çizilir?", ["Yalnız merkezin dışında, çembere değmeden", "İki ucu da çember üzerinde", "Yalnız üçgende", "Sayfanın kenarında"], 1, "Kirişin iki ucu çember üzerindedir."],
      ],
    },
  ]),
  unit("Çok basamaklı sayıları okuma ve yazma", [9], [
    {
      title: "Basamak ve okuma",
      paragraphs: [
        "Sayılar sağdan sola birler, onlar, yüzler, binler diye kümeler. 1 000 000 bir milyondur.",
        "Sayıyı okurken üçlü gruplar bin, milyon diye ayrılır. 305 040, üç yüz beş bin kırk diye okunur.",
      ],
      example: "40 008: kırk bin sekiz. Aradaki sıfırlar basamağı boş bırakır ama değeri korur.",
      questions: [
        ["305 040 nasıl okunur?", ["Üç yüz beş bin kırk", "Üç milyon beş", "Otuz beş bin kırk", "Üç yüz elli bin"], 0, "305 bin ve 40’tır."],
        ["Kırk bin sekiz hangi sayıdır?", ["408", "4008", "40 008", "48 000"], 2, "Kırk bin 40 000, sekiz eklenince 40 008."],
        ["1 000 000 kaçtır?", ["On bin", "Yüz bin", "Bir milyon", "Bir milyar"], 2, "1 ve ardından altı sıfır bir milyondur."],
      ],
    },
    {
      title: "Sayıyı yazma",
      paragraphs: [
        "Yazarken söylenmeyen basamağa 0 konur. İki yüz bin elli: 200 050.",
        "En büyük ve en küçük sayıyı kurarken basamakların yerini değiştirmek sayının değerini değiştirir.",
      ],
      example: "Sekiz yüz bin yedi = 800 007.",
      questions: [
        ["İki yüz bin elli nasıl yazılır?", ["250", "200 050", "2 050", "200 500"], 1, "İki yüz bin 200 000, elli 50’dir."],
        ["800 007 nasıl okunur?", ["Sekiz bin yedi", "Sekiz yüz bin yedi", "Seksen bin yedi", "Sekiz milyon yedi"], 1, "800 bin ve 7’dir."],
        ["4 020 sayısında onlar basamağı kaçtır?", ["4", "0", "2", "20"], 2, "Sağdan ikinci basamak onlardır ve rakam 2’dir."],
      ],
    },
  ]),
  unit("Basamak değeri", [10], [
    {
      title: "Rakam ve basamak değeri",
      paragraphs: [
        "Rakam, sayıyı yazan simgedir. Basamak değeri, rakamın bulunduğu yere göre ettiği değerdir.",
        "3 582 sayısında 5, yüzler basamağındadır ve değeri 500’dür. Rakamın kendisi 5’tir.",
      ],
      example: "6 049 sayısında 6’nın basamak değeri 6 000, 4’ün değeri 40’tır.",
      questions: [
        ["3 582’de 5’in basamak değeri kaçtır?", ["5", "50", "500", "5 000"], 2, "5 yüzler basamağında olduğu için 500 eder."],
        ["6 049’da 6’nın basamak değeri kaçtır?", ["6", "60", "600", "6 000"], 3, "6 binler basamağındadır."],
        ["Basamak değeri ile rakam değeri arasındaki fark nedir?", ["Aynı şeydir", "Basamak değeri konuma bağlıdır", "Rakam her zaman 10’dur", "Basamak değeri her zaman 1’dir"], 1, "Aynı rakam farklı basamakta farklı değer eder."],
      ],
    },
    {
      title: "Çözümleme",
      paragraphs: [
        "Çözümleme, sayıyı basamak değerlerinin toplamı olarak yazmaktır. 4 305 = 4 000 + 300 + 5.",
        "Sıfır olan basamak toplama yazılmaz. 7 080 = 7 000 + 80.",
      ],
      example: "2 560 = 2 000 + 500 + 60.",
      questions: [
        ["4 305’in çözümlemesi hangisidir?", ["4 + 3 + 0 + 5", "4 000 + 300 + 5", "400 + 30 + 5", "4 000 + 30 + 5"], 1, "4 bin, 3 yüz ve 5 birlik."],
        ["7 080 nasıl çözümlenir?", ["7 000 + 80", "700 + 80", "7 000 + 800", "70 + 80"], 1, "7 bin ve 8 onluk."],
        ["2 000 + 500 + 60 hangi sayıdır?", ["256", "2 506", "2 560", "25 060"], 2, "Toplam 2 560 eder."],
      ],
    },
  ]),
  unit("Doğal sayılarla problem çözme", [11, 12, 13], [
    {
      title: "Dört işlemi seçmek",
      paragraphs: [
        "Birleştirme ve eklemede toplama, ayırmada çıkarma, eşit gruplarda çarpma, eşit paylaştırma veya gruplamada bölme kullanılır.",
        "İşlemden önce sorunun ne istediği bir cümleyle yazılır. Sonra birim unutulmaz.",
      ],
      example: "Bir kasada 24 elma vardır. 6 kasa elma 24 × 6 = 144 eder.",
      questions: [
        ["24 elmalık 6 kasa kaç elmadır?", ["30", "18", "144", "4"], 2, "Eşit gruplar çarpılır: 24 × 6 = 144."],
        ["144 elma 6 kasaya eşit bölünürse bir kasada kaç elma olur?", ["24", "138", "150", "864"], 0, "144 ÷ 6 = 24."],
        ["Toplama hangi durumda kullanılır?", ["Eşit paylaştırırken", "Miktarları birleştirirken", "Farkı bölerken", "Yarısını çizerken"], 1, "Birleştirme toplamadır."],
      ],
    },
    {
      title: "Artık ve eksik",
      paragraphs: [
        "“Ne kadar fazla?” ve “aradaki fark” çıkarmadır. “Toplam kaç?” toplamadır.",
        "Çok adımlı problemde ara sonuç not edilir, son soruya onunla gidilir.",
      ],
      example: "Ali’nin 850 lirası var. 275 liralık mont alıyor. Geriye 850 − 275 = 575 lira kalır.",
      questions: [
        ["850 liradan 275 lira harcanırsa kaç lira kalır?", ["575", "1 125", "625", "275"], 0, "850 − 275 = 575."],
        ["Bir otobüste 36 yolcu var. 15’i iniyor, 8’i biniyor. Kaç yolcu olur?", ["29", "59", "21", "43"], 0, "36 − 15 = 21, 21 + 8 = 29."],
        ["Fark sorusu hangi işlemdir?", ["Çarpma", "Bölme", "Çıkarma", "Yalnız toplama"], 2, "Ne kadar fazla veya az, çıkarmadır."],
      ],
    },
    {
      title: "Sonucu kontrol",
      paragraphs: [
        "Çarpmanın tersi bölme, toplamanın tersi çıkarmadır. Ters işlem sonucu denetler.",
        "Tahmin de işe yarar: 198 × 4, yaklaşık 200 × 4 = 800’dür. 792 makul bir sonuçtur.",
      ],
      example: "48 ÷ 6 = 8 ise 8 × 6 yeniden 48 etmelidir.",
      questions: [
        ["198 × 4 işleminin sonucu hangisine yakındır?", ["200", "800", "8 000", "40"], 1, "200 × 4 = 800."],
        ["48 ÷ 6 = 8 ise kontrol işlemi hangisidir?", ["8 + 6", "8 × 6", "48 × 6", "6 − 8"], 1, "Bölmenin tersi çarpmadır."],
        ["792, 198 × 4 için uygun mudur?", ["Hayır, çok küçüktür", "Evet, 800 civarındadır", "Hayır, 8 000 olmalıdır", "Sonuç sıfır olmalıdır"], 1, "198 × 4 = 792’dir."],
      ],
    },
  ]),
  unit("Dikdörtgenin çevresi ve alanı", [14, 15, 16, 17, 18], [
    {
      title: "Çevre",
      paragraphs: [
        "Çevre, şeklin etrafının uzunluğudur. Dikdörtgende karşılıklı kenarlar eşittir.",
        "Kısa kenar a, uzun kenar b ise çevre 2 × (a + b) eder. Birim cm, m gibi uzunluk birimidir.",
      ],
      example: "Kenarları 4 cm ve 7 cm olan dikdörtgenin çevresi 2 × (4 + 7) = 22 cm’dir.",
      questions: [
        ["4 cm ve 7 cm’lik dikdörtgenin çevresi kaç cm’dir?", ["11", "22", "28", "44"], 1, "2 × (4 + 7) = 22."],
        ["Çevre hangi birimle söylenir?", ["cm²", "cm", "kg", "derece"], 1, "Çevre bir uzunluktur."],
        ["Karenin bir kenarı 5 cm ise çevresi kaç cm’dir?", ["10", "15", "20", "25"], 2, "Dört kenar: 4 × 5 = 20."],
      ],
    },
    {
      title: "Alan",
      paragraphs: [
        "Alan, şeklin kapladığı yüzölçümüdür. Dikdörtgende alan, uzun kenar çarpı kısa kenardır.",
        "Alan birimi cm², m² gibi kare birimdir. Çevre ile alan karıştırılmaz.",
      ],
      example: "4 cm ve 7 cm’lik dikdörtgenin alanı 4 × 7 = 28 cm²’dir.",
      questions: [
        ["4 cm ve 7 cm’lik dikdörtgenin alanı kaç cm²’dir?", ["11", "22", "28", "44"], 2, "4 × 7 = 28."],
        ["Alan birimi hangisidir?", ["cm", "cm²", "cm³", "derece"], 1, "Alan kare birimle yazılır."],
        ["Kenarı 6 cm olan karenin alanı kaç cm²’dir?", ["12", "24", "36", "6"], 2, "6 × 6 = 36."],
      ],
    },
    {
      title: "Çevre ve alanı ayırmak",
      paragraphs: [
        "Aynı dikdörtgende çevre kenarların toplam uzunluğu, alan ise içinin ölçüsüdür.",
        "Çevresi aynı olan iki dikdörtgenin alanı farklı olabilir. Soruda “etrafı” çevre, “kapladığı yer” alandır.",
      ],
      example: "3 × 6 dikdörtgenin çevresi 18, alanı 18’dir. Sayılar bazen aynı çıkar; birimler yine de farklıdır: 18 cm ve 18 cm².",
      questions: [
        ["“Bahçenin etrafındaki tel” neyi sorar?", ["Alanı", "Çevreyi", "Hacmi", "Açıyı"], 1, "Etraf çevre demektir."],
        ["3 cm ve 6 cm’lik dikdörtgenin alanı kaç cm²’dir?", ["9", "18", "12", "36"], 1, "3 × 6 = 18."],
        ["Çevre ile alanın birimleri aynı mıdır?", ["Her zaman aynıdır", "Hayır, çevre uzunluk, alan kare birimdir", "İkisi de derecedir", "İkisi de kilogramdır"], 1, "cm ile cm² farklıdır."],
      ],
    },
  ]),
  unit("Kesirlerin gösterimleri", [19, 20, 21], [
    {
      title: "Pay ve payda",
      paragraphs: [
        "Kesir, bir bütünün eşit parçalarından kaçının alındığını söyler. Payda parçanın sayısını, pay alınan parçayı gösterir.",
        "3/8, sekiz eş parçanın üçü demektir. Payda 0 olamaz.",
      ],
      example: "Bir pizzanın 8 diliminden 3’ü yenmişse yenen kısım 3/8’dir.",
      questions: [
        ["3/8 kesrinde pay kaçtır?", ["8", "3", "11", "24"], 1, "Pay, çizginin üstündeki sayıdır."],
        ["Payda neyi anlatır?", ["Alınan parça sayısını", "Bütünün kaç eş parçaya bölündüğünü", "Parçaların rengini", "Toplamı"], 1, "Payda eş parça sayısıdır."],
        ["Bir bütün 5 eş parçaya bölünüp 2’si boyanırsa kesir nedir?", ["5/2", "2/5", "2/3", "5/5"], 1, "Pay 2, payda 5’tir."],
      ],
    },
    {
      title: "Birim kesir ve tam sayılı",
      paragraphs: [
        "Payı 1 olan kesir birim kesirdir: 1/2, 1/6. Bütün, birim kesirlerin toplamıdır.",
        "Tam sayılı kesir, bir tam ve bir basit kesirden oluşur. 2 tam 1/4, iki bütün ve bir çeyrek demektir.",
      ],
      example: "9/4 = 2 tam 1/4, çünkü 4/4 + 4/4 + 1/4.",
      questions: [
        ["Hangisi birim kesirdir?", ["3/4", "1/6", "5/2", "2/2"], 1, "Payı 1 olan kesir birim kesirdir."],
        ["9/4 tam sayılı kesir olarak nedir?", ["1 tam 1/4", "2 tam 1/4", "4 tam 1/9", "9 tam 1/4"], 1, "9 ÷ 4 = 2 kalan 1, yani 2 tam 1/4."],
        ["2 tam 1/4 hangi bileşik kesirdir?", ["3/4", "9/4", "8/4", "2/4"], 1, "2 tam = 8/4, artı 1/4 = 9/4."],
      ],
    },
    {
      title: "Sayı doğrusu ve model",
      paragraphs: [
        "0 ile 1 arası eşit aralıklara bölünür. 1/2, tam ortadadır. 3/4, 1’e daha yakındır.",
        "Aynı kesir pasta modeli, dikdörtgen model veya sayı doğrusu ile gösterilebilir.",
      ],
      example: "Sayı doğrusunda 0, 1/4, 2/4, 3/4, 1 eşit adımlarla dizilir. 2/4, 1/2 ile aynı yerdedir.",
      questions: [
        ["0 ile 1’in tam ortasında hangi kesir vardır?", ["1/4", "1/2", "3/4", "2"], 1, "Yarısı 1/2’dir."],
        ["2/4 ile aynı miktarı gösteren hangisidir?", ["1/2", "2/2", "4/2", "1/4"], 0, "İki çeyrek, bir yarım eder."],
        ["3/4, 1’e mi 0’a mı daha yakındır?", ["0’a", "1’e", "İkisine de eşit uzak", "1’den büyüktür"], 1, "3/4 ile 1 arasında yalnız 1/4 vardır."],
      ],
    },
  ]),
  unit("Kesirleri karşılaştırma", [22, 23, 24, 25], [
    {
      title: "Paydası aynı kesirler",
      paragraphs: [
        "Paydalar eşitse payı büyük olan kesir daha büyüktür. Parçalar aynı boydadır, daha çok parça daha büyük miktardır.",
        "5/8 > 3/8. Birim kesirlerde ise payda büyüdükçe kesir küçülür: 1/8 < 1/3.",
      ],
      example: "Aynı pastadan 5 dilim, 3 dilimden fazladır.",
      questions: [
        ["Hangisi daha büyüktür?", ["3/8", "5/8", "Eşittir", "Karşılaştırılamaz"], 1, "Paydalar aynı, payı büyük olan büyüktür."],
        ["1/8 ile 1/3 için doğru olan hangisidir?", ["1/8 daha büyüktür", "1/3 daha büyüktür", "Eşittir", "İkisi de 1’den büyüktür"], 1, "Birim kesirde payda küçüldükçe parça büyür."],
        ["4/7 ve 2/7 sıralanınca küçükten büyüğe hangisi olur?", ["4/7, 2/7", "2/7, 4/7", "7/4, 7/2", "Eşit"], 1, "2 payı 4’ten küçüktür."],
      ],
    },
    {
      title: "Payı aynı kesirler",
      paragraphs: [
        "Paylar eşit ve paydalar farklıysa paydası küçük olan daha büyüktür. Bütün daha az parçaya bölününce her parça büyür.",
        "3/4 > 3/10. Üç büyük parça, üç küçük parçadan fazladır.",
      ],
      example: "3/5, 3/8’den büyüktür.",
      questions: [
        ["Hangisi daha büyüktür?", ["3/10", "3/4", "Eşittir", "3/12"], 1, "Paylar eşit, küçük payda daha büyük kesir verir."],
        ["2/3 ve 2/9 için doğru olan hangisidir?", ["2/9 daha büyüktür", "2/3 daha büyüktür", "Eşittir", "İkisi de tamdır"], 1, "Üçte ikilik parçalar daha büyüktür."],
        ["Payı aynı kesirlerde payda artarsa kesir ne olur?", ["Büyür", "Küçülür", "Tam sayı olur", "Değişmez"], 1, "Parçalar küçülür."],
      ],
    },
    {
      title: "Yarımla karşılaştırma",
      paragraphs: [
        "Bir kesri 1/2 ile kıyaslamak işi kolaylaştırır. Pay, paydanın yarısından büyükse kesir 1/2’den büyüktür.",
        "5/8 > 1/2 çünkü 5, 4’ten büyüktür. 3/8 < 1/2.",
      ],
      example: "7/12, yarım olan 6/12’den büyüktür.",
      questions: [
        ["5/8, 1/2’den büyük müdür?", ["Hayır", "Evet", "Eşittir", "1’den büyüktür"], 1, "8’in yarısı 4’tür, pay 5 > 4."],
        ["3/8 ile 1/2 karşılaştırılırsa hangisi doğrudur?", ["3/8 daha büyüktür", "Eşittir", "1/2 daha büyüktür", "3/8 tamdır"], 2, "3, 4’ten küçük olduğu için 3/8 yarımdan küçüktür."],
        ["7/12 için doğru olan hangisidir?", ["1/2’den küçüktür", "1/2’ye eşittir", "1/2’den büyüktür", "1’den büyüktür"], 2, "12’nin yarısı 6, pay 7 daha büyük."],
      ],
    },
  ]),
  unit("Kategorik veri", [26, 27, 28, 29], [
    {
      title: "Kategori ve sıklık",
      paragraphs: [
        "Kategorik veri, sayı değil grup adıdır: en sevilen meyve, göz rengi, ulaşım türü.",
        "Sıklık, bir kategorinin kaç kez seçildiğidir. Çetele tablosunda her çizgi bir kişiyi tutar; beşinci çizgi çapraz çekilir.",
      ],
      example: "Elma 6, armut 4, muz 5 ise en sık seçilen elmadır.",
      questions: [
        ["Hangisi kategorik veridir?", ["Boy uzunluğu", "En sevilen renk", "Kütle", "Sıcaklık"], 1, "Renk bir gruptur, ölçüm değildir."],
        ["Sıklık ne demektir?", ["En uzun çubuk", "Bir seçeneğin kaç kez tekrarlandığı", "Kişi sayısı her zaman 5", "Ortalama"], 1, "Sıklık tekrar sayısıdır."],
        ["Elma 6, muz 5, armut 4 ise en çok seçilen hangisidir?", ["Armut", "Muz", "Elma", "Hepsi eşit"], 2, "En büyük sıklık 6’dır."],
      ],
    },
    {
      title: "Sütun grafiği",
      paragraphs: [
        "Sütun grafiğinde her kategori bir sütundur. Sütun yükseldikçe sıklık artar.",
        "Eksenlerin adı ve bir ölçek yazılmazsa grafik okunamaz. Karşılaştırma, sütun boylarına bakılarak yapılır.",
      ],
      example: "Muz sütunu 5 birim, elma 6 birimse elma bir kişi daha fazladır.",
      questions: [
        ["Grafikte en yüksek sütun neyi gösterir?", ["En az seçileni", "En çok seçileni", "Toplam öğrenciyi her zaman", "Ortalamayı"], 1, "Yükseklik sıklığı gösterir."],
        ["İki sütunun farkı ne anlatır?", ["Birinin diğerinden kaç fazla olduğunu", "Rengi", "Sayfa numarasını", "Açıyı"], 0, "Fark, sıklık farkıdır."],
        ["Grafikte eksen adı neden gerekir?", ["Süs için", "Neyin sayıldığını bilmek için", "Alan hesaplamak için", "Kesir yazmak için"], 1, "Eksen, kategoriyi ve sayıyı adlandırır."],
      ],
    },
    {
      title: "Araştırma sorusu",
      paragraphs: [
        "İyi soru tek bir şeyi sorar ve cevabı kategorilere ayrılır: “Okula en çok hangi yolla geliyorsun?”",
        "“Nasılsın?” araştırma sorusu olmaz; cevaplar toplanıp sayılamaz. Veri toplandıktan sonra en yüksek ve en düşük sıklık söylenir.",
      ],
      example: "30 kişilik sınıfta yürüyen 12, servis 10, bisiklet 8 ise yürüyenler en kalabalık gruptur. Toplam 12 + 10 + 8 = 30 olmalıdır.",
      questions: [
        ["Hangisi uygun bir araştırma sorusudur?", ["Nasılsın?", "En sevdiğin mevsim hangisi?", "Bir şey söyle", "Kaç yaşındasın ve ne düşünüyorsun ve nerede yaşıyorsun?"], 1, "Tek konu ve sınırlı kategoriler vardır."],
        ["12, 10 ve 8 kişinin toplamı kaçtır?", ["20", "30", "32", "18"], 1, "12 + 10 + 8 = 30."],
        ["Toplam sınıf mevcuduna eşit değilse ne olur?", ["Veri eksik veya fazla sayılmış olabilir", "Grafik her zaman doğrudur", "Sıklık gerekmez", "Kategori silinir"], 0, "Sıklıkların toplamı kişi sayısını tutmalıdır."],
      ],
    },
  ]),
  unit("İşlem özellikleri ve örüntü", [30, 31, 32, 33, 34], [
    {
      title: "Eşitliğin korunumu",
      paragraphs: [
        "Eşitliğin iki yanına aynı sayı eklenir, çıkarılır, çarpılır veya 0’dan farklı sayıya bölünürse eşitlik bozulmaz.",
        "8 + 5 = 13 ise iki yana 2 eklenince 10 + 5 = 15 olur. Bir yana ekleyip diğerine eklememek eşitliği bozar.",
      ],
      example: "n + 4 = 12 ise iki yandan 4 çıkarılır: n = 8.",
      questions: [
        ["n + 4 = 12 ise n kaçtır?", ["16", "8", "4", "48"], 1, "12 − 4 = 8."],
        ["Eşitliğin yalnız soluna 3 eklenirse ne olur?", ["Eşitlik korunur", "Eşitlik bozulur", "İki yan da artar", "Sonuç 0 olur"], 1, "Aynı işlem iki yana da yapılmalıdır."],
        ["6 × 2 = 12 ise iki yanı 2’ye bölünce hangisi doğrudur?", ["6 = 12", "3 = 12", "3 × 2 = 6", "12 = 2"], 2, "6 × 2 ÷ 2 = 3 × 2 olur, 12 ÷ 2 = 6 olur. Eşitlik 3 × 2 = 6 diye sürer."],
      ],
    },
    {
      title: "Değişme, birleşme, dağılma",
      paragraphs: [
        "Toplama ve çarpmada sıra değiştirilebilir: 4 + 7 = 7 + 4 ve 3 × 5 = 5 × 3. Çıkarma ve bölmede sıra değişmez.",
        "Dağılma: 4 × (10 + 3) = 4 × 10 + 4 × 3. Parantez önce de yapılabilir: 4 × 13 = 52.",
      ],
      example: "6 × 14 = 6 × 10 + 6 × 4 = 60 + 24 = 84.",
      questions: [
        ["Hangisinde sıra değiştirilemez?", ["3 + 9", "8 × 2", "10 − 4", "5 × 1"], 2, "10 − 4, 4 − 10 değildir."],
        ["6 × 14 kaçtır?", ["64", "84", "74", "20"], 1, "60 + 24 = 84."],
        ["4 × (10 + 3) hangisine eşittir?", ["4 × 10 + 3", "4 × 10 + 4 × 3", "10 + 4 × 3", "4 + 13"], 1, "4 her iki terime de dağılır."],
      ],
    },
    {
      title: "İşlem önceliği ve örüntü",
      paragraphs: [
        "Önce parantez, sonra çarpma ve bölme, en sonda toplama ve çıkarma yapılır. Aynı düzeydeki işlemler soldan sağa yapılır.",
        "Örüntü, kuralı olan dizidir. 4, 8, 12, 16 dizisi dörder artar. Sonraki terim 20’dir.",
      ],
      example: "3 + 4 × 2 = 3 + 8 = 11. Çarpma toplamadan önce gelir.",
      questions: [
        ["3 + 4 × 2 kaçtır?", ["14", "11", "24", "9"], 1, "Önce 4 × 2 = 8, sonra 3 + 8 = 11."],
        ["4, 8, 12, 16 dizisinin sonraki terimi kaçtır?", ["18", "20", "24", "32"], 1, "Kural +4’tür."],
        ["(3 + 4) × 2 kaçtır?", ["11", "14", "10", "9"], 1, "Parantez önce: 7 × 2 = 14."],
      ],
    },
  ]),
  unit("Öznel olasılık", [35, 36], [
    {
      title: "Olabilirlik",
      paragraphs: [
        "Öznel olasılık, bir olayın sana ne kadar mümkün geldiğidir. “Kesin”, “mümkün”, “olanaksız” sözleriyle söylenir.",
        "Yarın Güneş’in doğması kesin sayılır. Bir zarın 7 gelmesi olanaksızdır. Yazın kar yağması pek çok yerde olanaksız değil, düşük olasılıktır.",
      ],
      example: "İçinde yalnız kırmızı bilye olan torbadan mavi çekmek olanaksızdır.",
      questions: [
        ["Standart bir zarda 7 gelmesi nasıldır?", ["Kesin", "Olanaksız", "Yarı yarıya", "Her zaman olur"], 1, "Zarda 1’den 6’ya kadar yüz vardır."],
        ["Yalnız kırmızı bilye olan torbadan kırmızı çekmek nasıldır?", ["Olanaksız", "Kesin", "Çok düşük", "Sayılamaz"], 1, "Başka renk olmadığı için sonuç kesindir."],
        ["Öznel olasılık neye dayanır?", ["Kişinin olay hakkındaki yargısına", "Yalnız formüle", "Cetvele", "Alan birimine"], 0, "Henüz deney yapmadan verilen olabilirlik yargısıdır."],
      ],
    },
    {
      title: "Dili dikkatli kullanmak",
      paragraphs: [
        "“Kesin” her zaman demektir. “Olanaksız” hiç demektir. İkisi arasındaki olaylar mümkündür.",
        "Mümkün olaylar da eşit değildir: 6 yüzlü zarda 6 gelmesi mümkün ama kesin değildir.",
      ],
      example: "Havaya atılan taşın yere düşmesi, günlük deneyimde kesin kabul edilir.",
      questions: [
        ["Zar atınca 6 gelmesi nasıldır?", ["Olanaksız", "Kesin", "Mümkün ama kesin değil", "Her atışta olur"], 2, "6 yüzden biridir, olabilir ama garanti değildir."],
        ["“Olanaksız” ne demektir?", ["Her zaman olur", "Hiç olmaz", "Yarısında olur", "Bir kez olur"], 1, "Olanaksız olay gerçekleşmez."],
        ["Hangisi kesine örnektir?", ["Yarın yağmur yağması", "Boş bir bardaktan su dökülmesi beklenmeden bardakta su belirmesi", "Pazardan sonra pazartesinin gelmesi", "Zarın 9 gelmesi"], 2, "Haftanın sırası bellidir. Diğerleri kesin değildir veya olanaksızdır."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Geometri ve sayılar",
      paragraphs: [
        "Bu hafta yeni konu yok; yıl boyunca işlenenler okul etkinlikleriyle birlikte tekrar edilir.",
        "Doğru iki yöne gider. Dikdörtgenin alanı kenarların çarpımı, çevresi kenarların toplamıdır. Kesirde payda eş parça sayısıdır.",
      ],
      example: "Kenarları 5 cm ve 2 cm olan dikdörtgenin alanı 10 cm², çevresi 14 cm’dir.",
      questions: [
        ["5 cm ve 2 cm’lik dikdörtgenin alanı kaç cm²’dir?", ["7", "10", "14", "20"], 1, "5 × 2 = 10."],
        ["Aynı dikdörtgenin çevresi kaç cm’dir?", ["7", "10", "14", "25"], 2, "2 × (5 + 2) = 14."],
        ["1/2 ile 1/6 karşılaştırılırsa hangisi büyüktür?", ["1/6", "1/2", "Eşit", "İkisi de 1’den büyük"], 1, "Birim kesirde küçük payda daha büyük parça demektir."],
      ],
    },
  ]),
]

const fen = [
  unit("Laboratuvar güvenliği", [1], [
    {
      title: "Kurallar",
      paragraphs: [
        "Deneyden önce ne yapılacağı okunur. Öğretmen söylemeden malzeme çalıştırılmaz.",
        "Saç toplanır, bol giysi ve açık ayakkabı laboratuvarda risklidir. Tadına bakmak, koklamak ve şaka yapmak yasaktır.",
      ],
      example: "Cam kırılırsa elle toplanmaz, öğretmene söylenir.",
      questions: [
        ["Deney sırasında tadına bakmak neden yasaktır?", ["Lezzeti ölçmek için gerekmez diye değil, zararlı olabilir diye", "Her madde tatlıdır", "Yalnız renkli sıvılarda serbesttir", "Kural değildir"], 0, "Birçok madde zehirli veya yakıcı olabilir."],
        ["Kırılan cam nasıl toplanır?", ["Çıplak elle", "Öğretmene haber verilerek uygun araçla", "Üflenerek", "Cebine konarak"], 1, "Kesilmemek için elle toplanmaz."],
        ["Deneye başlamadan önce ne yapılır?", ["Malzeme hemen karıştırılır", "Yönerge okunur", "Sonuç uydurulur", "Gözlük çıkarılır"], 1, "Yönerge, tehlikeyi ve adımları söyler."],
      ],
    },
    {
      title: "Gözlem ve güvenlik",
      paragraphs: [
        "Gözlük, önlük ve eldiven gereken deneyde takılır. Isıtılan kabın ağzı kimseye çevrilmez.",
        "Kaza olursa önce haber verilir. Düzenli masa, dökülme ve yangın riskini azaltır.",
      ],
      example: "Sıvı dökülünce peçeteyle koşturmak yerine öğretmene söylenir; bazı sıvılar cildi yakar.",
      questions: [
        ["Isıtılan tüpün ağzı nereye bakmamalıdır?", ["Kimseye", "Tavana her zaman serbestçe", "Deftere", "Lambaya"], 0, "Sıçrama birine gelebilir."],
        ["Gözlük ne zaman takılır?", ["Yalnız dışarıda", "Yönerge veya öğretmen istediğinde", "Hiçbir deneyde", "Yalnız yazarken"], 1, "Sıçrama ve kıymık göze zarar verir."],
        ["Bir kaza olursa ilk iş nedir?", ["Gizlemek", "Öğretmene haber vermek", "Deneyi hızlandırmak", "Arkadaşa şaka yapmak"], 1, "Haber vermek yardımı çabuk getirir."],
      ],
    },
  ]),
  unit("Gökyüzündeki komşumuz: Güneş", [2, 3], [
    {
      title: "Güneş bir yıldız",
      paragraphs: [
        "Güneş, Dünya’ya en yakın yıldızdır. Kendi ışığını üretir. Gezegenler ve Ay ise Güneş’in ışığını yansıtır.",
        "Güneş, Dünya’daki yaşam için ısı ve ışık kaynağıdır. Gündüz, bulunduğumuz yerin Güneş’i görmesidir.",
      ],
      example: "Ay gece parlıyor gibi görünür ama ışığı kendisinin değildir; Güneş’ten gelir.",
      questions: [
        ["Güneş ne tür bir gökcismidir?", ["Gezegen", "Yıldız", "Uydu", "Meteor"], 1, "Güneş kendi ışığını üreten bir yıldızdır."],
        ["Ay neden parlak görünür?", ["Kendi ateşi vardır", "Güneş ışığını yansıtır", "Dünya onu ısıtır", "Bir lambası vardır"], 1, "Ay’ın kendi ışığı yoktur."],
        ["Gündüzün nedeni nedir?", ["Ay’ın büyümesi", "Bulunduğumuz yerin Güneş’e dönük olması", "Yıldızların sönmesi", "Bulutun rengi"], 1, "Güneş’i gören yerde gündüz olur."],
      ],
    },
    {
      title: "Güneş’e bakmak",
      paragraphs: [
        "Güneş’e çıplak gözle, dürbünle veya teleskopla bakılmaz. Göz kalıcı zarar görür.",
        "Gölge, Güneş ışığı düz yayıldığı için oluşur. Sabah ve akşam gölgeler uzun, öğle üzeri daha kısadır.",
      ],
      example: "Aynı çubuğun gölgesi sabah batıya, öğleden sonra doğuya doğru uzar; çünkü Güneş gökyüzünde yer değiştiriyor gibi görünür.",
      questions: [
        ["Güneş gözlemi nasıl yapılmaz?", ["Çıplak gözle uzun süre bakarak", "Öğretmenin güvenli düzeneğiyle", "Gölgeyi izleyerek", "Gündüzün saatine bakarak"], 0, "Doğrudan bakmak göze zarar verir."],
        ["Öğle üzeri gölge neden kısalır?", ["Güneş tepede gibidir", "Ay araya girer", "Çubuk erir", "Dünya durur"], 0, "Işık daha dik geldiğinde gölge kısalır."],
        ["Gölgenin yön değiştirmesi neyi gösterir?", ["Güneş’in gökyüzündeki görünür hareketini", "Çubuğun yürüdüğünü", "Rüzgârın ışığı ittiğini", "Gölgenin ısındığını"], 0, "Dünya döndüğü için Güneş yer değiştiriyor gibi görünür."],
      ],
    },
  ]),
  unit("Gökyüzündeki komşumuz: Ay", [4, 5], [
    {
      title: "Ay’ın evreleri",
      paragraphs: [
        "Ay, Dünya’nın uydusudur ve Güneş ışığını yansıtır. Evreler, Ay’ın aydınlık yüzünün Dünya’dan nasıl göründüğüdür.",
        "Yeni ayda aydınlık yüz bize dönük değildir. İlk dördün, dolunay ve son dördün bir döngü oluşturur. Döngü yaklaşık bir ay sürer.",
      ],
      example: "Dolunayda Ay’ın bize dönük yüzünün tamamı aydınlık görünür.",
      questions: [
        ["Ay’ın evreleri neden değişir?", ["Ay her gece başka bir gezegen olur", "Aydınlık yüzünün görünüşü değişir", "Ay kendi ışığını açıp kapatır", "Bulut Ay’ı boyar"], 1, "Işık aynıdır; görünen aydınlık kısım değişir."],
        ["Dolunayda ne görülür?", ["Ay hiç görünmez", "Bize dönük yüz aydınlık görünür", "Yalnız ince bir çizgi", "Güneş kararır"], 1, "Aydınlık yüzün tamamı bize bakar."],
        ["Ay neyin uydusudur?", ["Güneş’in", "Dünya’nın", "Mars’ın", "Bir yıldız kümesinin"], 1, "Ay, Dünya’nın çevresinde dolanır."],
      ],
    },
    {
      title: "Ay ve takvim",
      paragraphs: [
        "Ay’ın görünür şekli her gece biraz değişir. Bu düzen, ay kavramının temelidir.",
        "Yeni aydan dolunaya gidilirken aydınlık kısım büyüyor gibi görünür. Buna şişkinleşme denir; dolunaydan sonra küçülür.",
      ],
      example: "İlk dördünde Ay’ın yarısı aydınlık görünür. Bu, “yarım pasta” gibi bir görüntüdür.",
      questions: [
        ["İlk dördünde Ay nasıl görünür?", ["Tamamen karanlık", "Yaklaşık yarısı aydınlık", "İki tane", "Güneş’ten büyük"], 1, "İlk dördün yarım aydınlık görünümdür."],
        ["Evre döngüsü yaklaşık ne kadar sürer?", ["Bir gün", "Bir hafta", "Bir ay", "Bir yıl"], 2, "Bir tur yaklaşık bir aydır."],
        ["Ay’ın kendi ışığı var mıdır?", ["Vardır, bir yıldızdır", "Yoktur, Güneş ışığını yansıtır", "Yalnız dolunayda vardır", "Yalnız gündüz vardır"], 1, "Ay bir ışık kaynağı değildir."],
      ],
    },
  ]),
  unit("Dünya ve gökyüzü", [6], [
    {
      title: "Dünya’nın hareketi",
      paragraphs: [
        "Dünya kendi ekseni etrafında döner. Bu dönüş gece ve gündüzü oluşturur. Bir tur yaklaşık 24 saattir.",
        "Dünya, Güneş’in çevresinde de dolanır. Bir tur yaklaşık bir yıldır. Güneş ve Ay bize büyük görünür çünkü yakındırlar; gerçekte Güneş Ay’dan çok daha büyüktür.",
      ],
      example: "Aynı anda Türkiye’de gündüzken Dünya’nın başka bir yüzünde gece olabilir.",
      questions: [
        ["Gece ve gündüzün temel nedeni nedir?", ["Ay’ın evresi", "Dünya’nın kendi ekseni etrafında dönmesi", "Bulutun kalınlığı", "Mevsimin adı"], 1, "Dönüş, bir yüzü aydınlatır, diğerini bırakır."],
        ["Dünya Güneş çevresindeki turunu yaklaşık ne kadar sürede tamamlar?", ["Bir gün", "Bir ay", "Bir yıl", "Bir saat"], 2, "Bu dolanma bir yıl sürer."],
        ["Güneş mi Ay mı daha büyüktür?", ["Ay", "Eşittir", "Güneş", "İkisi de yıldızdır"], 2, "Güneş bir yıldızdır ve Ay’dan çok büyüktür. Yakın olduğu için Ay büyük görünür."],
      ],
    },
    {
      title: "Gökyüzünü izlemek",
      paragraphs: [
        "Gözlem tarihi, saati ve hava yazılır. Aynı saatte birkaç gün bakmak, Ay’ın yer ve şekil değiştirdiğini gösterir.",
        "Güneş gözlemi gölge çubuğuyla yapılır, doğrudan bakılarak değil.",
      ],
      example: "Her akşam aynı saatte Ay’ın yerini çizen öğrenci, Ay’ın gökyüzünde ilerlediğini görür.",
      questions: [
        ["Gözlem kaydında ne bulunur?", ["Yalnız resim", "Tarih, saat ve görülen durum", "Tahmin edilen not", "Arkadaşın adı"], 1, "Kayıt, gözlemi tekrar karşılaştırmayı sağlar."],
        ["Güneş neden doğrudan izlenmez?", ["Çok küçüktür", "Göze zarar verir", "Gece görünmez diye", "Gölgesi yoktur"], 1, "Işığı ve ısısı göz için tehlikelidir."],
        ["Aynı saatte birkaç gün Ay’a bakmak neyi gösterir?", ["Ay’ın hiç kımıldamadığını", "Şekil ve konumun değişebildiğini", "Ay’ın Güneş olduğunu", "Dünya’nın durduğunu"], 1, "Evre ve konum gün gün değişir."],
      ],
    },
  ]),
  unit("Kuvvet ve ölçülmesi", [7, 8, 9], [
    {
      title: "Kuvvet nedir?",
      paragraphs: [
        "Kuvvet, bir cismi hareket ettirebilen, durdurabilen, yönünü veya şeklini değiştirebilen itme ya da çekmedir.",
        "Kuvvetin yönü vardır. Aynı şiddette zıt kuvvetler birbirini dengeleyebilir.",
      ],
      example: "Durmakta olan topa vurmak onu hareket ettirir. Yayını germek şeklini değiştirir.",
      questions: [
        ["Hangisi kuvvetin etkisidir?", ["Cismin rengini her zaman değiştirmesi", "Cismi hareket ettirebilmesi", "Kütleyi yok etmesi", "Zamanı durdurması"], 1, "Kuvvet hareket, yön veya şekil değiştirebilir."],
        ["Yayı germek neyi gösterir?", ["Kuvvetin şekil değiştirebildiğini", "Kuvvetin olmadığını", "Kütlenin arttığını", "Havanın bittiğini"], 0, "Yay uzar, şekli değişir."],
        ["Kuvvetin yönü var mıdır?", ["Hayır", "Evet", "Yalnız suda", "Yalnız geceleri"], 1, "İtme ve çekmenin yönü vardır."],
      ],
    },
    {
      title: "Dinamometre",
      paragraphs: [
        "Kuvvet, dinamometre ile ölçülür. Birimi newton’dur ve N ile gösterilir.",
        "Yay ne kadar çok uzarsa uygulanan kuvvet o kadar büyüktür. Ölçerken yayın ucundaki gösterge okunur.",
      ],
      example: "Bir çantayı dinamometreye asınca gösterge 8 N ise çantayı tutmak için 8 newtonluk kuvvet gerekir.",
      questions: [
        ["Kuvvetin birimi nedir?", ["Kilogram", "Newton", "Metre", "Saniye"], 1, "Kuvvet newton ile ölçülür."],
        ["Dinamometre neyi ölçer?", ["Sıcaklığı", "Kuvveti", "Zamanı", "Alanı"], 1, "Yaylı kuvvetölçer dinamometredir."],
        ["Yay daha çok uzuyorsa kuvvet nasıldır?", ["Daha küçüktür", "Daha büyüktür", "Sıfırdır", "Yönsüzdür"], 1, "Uzama, kuvvet büyüdükçe artar."],
      ],
    },
  ]),
  unit("Kütle ve ağırlık", [10, 11], [
    {
      title: "İkisi aynı değildir",
      paragraphs: [
        "Kütle, maddedeki varlık miktarıdır. Birimi kilogramdır. Eşit kollu terazi ile ölçülür. Yer değiştirince kütle değişmez.",
        "Ağırlık, Dünya’nın cismi çekme kuvvetidir. Birimi newton’dur. Dinamometre ile ölçülür.",
      ],
      example: "Ay’da bir öğrencinin kütlesi aynı kalır, ağırlığı Dünya’dakinden daha küçük olur. Çünkü Ay’ın çekimi daha zayıftır.",
      questions: [
        ["Kütlenin birimi hangisidir?", ["Newton", "Kilogram", "Metre", "Saniye"], 1, "Kütle kilogram ile ölçülür."],
        ["Ağırlık aslında nedir?", ["Madde miktarı", "Çekme kuvveti", "Hacim", "Renk"], 1, "Ağırlık bir kuvvettir, birimi newton’dur."],
        ["Ay’a gidince kütle ne olur?", ["Sıfırlanır", "Aynı kalır", "İkiye katlanır", "Newton olur"], 1, "Madde miktarı değişmez."],
      ],
    },
    {
      title: "Ölçme aracı",
      paragraphs: [
        "Terazi kütle ölçer, dinamometre ağırlık ölçer. İkisini karıştırmamak gerekir.",
        "Dünya’da kütlesi büyük olan cismin ağırlığı da genellikle daha büyüktür. Yine de söylenirken birimler ayrı tutulur: 2 kg ve yaklaşık 20 N gibi.",
      ],
      example: "Mutfaktaki tartı çoğu zaman kilogram gösterir; o bir kütle ölçümüdür, newton değildir.",
      questions: [
        ["Ağırlık hangi araçla ölçülür?", ["Eşit kollu terazi", "Dinamometre", "Metre", "Termometre"], 1, "Ağırlık kuvvet olduğu için dinamometre kullanılır."],
        ["2 kg neyin birimidir?", ["Kuvvetin", "Kütlenin", "Uzunluğun", "Sıcaklığın"], 1, "Kilogram kütle birimidir."],
        ["Kütle ile ağırlık için doğru olan hangisidir?", ["İkisi de kilogramdır", "Kütle madde miktarı, ağırlık çekim kuvvetidir", "İkisi de hiç değişmez, Ay’da da aynı newton’dur", "Ağırlığın yönü yoktur"], 1, "Tanımları ve birimleri farklıdır."],
      ],
    },
  ]),
  unit("Sürtünme kuvveti", [12], [
    {
      title: "Sürtünme",
      paragraphs: [
        "Sürtünme, temas eden yüzeyler arasında hareketi zorlaştıran kuvvettir. Pürüzlü yüzeyde sürtünme genellikle artar.",
        "Sürtünme her zaman kötü değildir. Ayakkabının yere tutunması, kalemin kâğıda iz bırakması sürtünme sayesindedir.",
      ],
      example: "Buzda yürümek zordur çünkü sürtünme azdır. Spor ayakkabısının dişleri sürtünmeyi artırır.",
      questions: [
        ["Pürüzlü yüzeyde sürtünme genellikle nasıldır?", ["Daha az", "Daha çok", "Sıfır", "Ters yönde yok"], 1, "Pürüz, kaymayı zorlaştırır."],
        ["Hangisi sürtünmenin yararlı olduğu bir durumdur?", ["Ayakkabının kaymaması", "Her zaman motorun ısınması", "İpin kopması", "Camın kırılması"], 0, "Tutunma, sürtünme sayesinde olur."],
        ["Buzda kaymanın nedeni nedir?", ["Sürtünmenin az olması", "Kütlenin yok olması", "Havanın bitmesi", "Ağırlığın ters dönmesi"], 0, "Düz ve kaygan yüzeyde sürtünme küçüktür."],
      ],
    },
    {
      title: "Azaltmak ve artırmak",
      paragraphs: [
        "Tekerlek, yağ ve düz yüzey sürtünmeyi azaltır. İstenen yerde ise pürüz ve uygun malzeme sürtünmeyi artırır.",
        "Sürtünme hareket yönünün tersine etkir. Cisim duruyorsa sürtünme onu kaydırmaya çalışan kuvvete karşı koyar.",
      ],
      example: "Kapının menteşesi gıcırdıyorsa yağ sürtünmeyi azaltır.",
      questions: [
        ["Yağ ne işe yarar?", ["Sürtünmeyi artırır", "Sürtünmeyi azaltır", "Kütleyi sıfırlar", "Kuvveti yok eder"], 1, "Yağ yüzeylerin takılmasını azaltır."],
        ["Sürtünme hangi yöne etkir?", ["Hareketle aynı yöne her zaman", "Harekete veya kaydırmaya karşı", "Yukarı, her cisimde", "Yönü yoktur"], 1, "Kaymayı zorlaştırdığı için karşı koyar."],
        ["Tekerlek neden kullanılır?", ["Sürtünmeyi artırmak için", "Sürtünmenin etkisini azaltıp taşımayı kolaylaştırmak için", "Ağırlığı newton yapmak için", "Gölge üretmek için"], 1, "Yuvarlanma, sürüklemekten daha kolaydır."],
      ],
    },
  ]),
  unit("Hücre ve organeller", [13, 14, 15], [
    {
      title: "Hücre",
      paragraphs: [
        "Canlıların yapı birimi hücredir. Hücreler çıplak gözle görülmez; mikroskop gerekir.",
        "Hücre zarı madde giriş çıkışını düzenler. Sitoplazma, organellerin bulunduğu sıvı kısımdır. Çekirdek yönetimi üstlenir ve kalıtım maddesini taşır.",
      ],
      example: "Soğan zarı mikroskopta hücre hücre görünür. Her hücrenin sınırı zar, içi sitoplazmadır.",
      questions: [
        ["Canlıların yapı birimi nedir?", ["Doku adı olmadan organ", "Hücre", "Kemik yalnız", "Atom her canlıda ayrı birimdendir"], 1, "Hücre, canlının temel yapı birimidir."],
        ["Hücre zarı ne yapar?", ["Yalnız süs verir", "Madde giriş çıkışını düzenler", "Kemiği üretir", "Işığı kırar"], 1, "Zar seçici bir sınırdır."],
        ["Çekirdeğin görevi nedir?", ["Hücreyi yönetmek ve kalıtım maddesini taşımak", "Yalnız su depolamak", "Kuvvet ölçmek", "Gölge yapmak"], 0, "Çekirdek yönetim merkezidir."],
      ],
    },
    {
      title: "Bitki ve hayvan hücresi",
      paragraphs: [
        "Bitki hücresinde hücre duvarı, kloroplast ve büyük koful bulunur. Hayvan hücresinde hücre duvarı ve kloroplast yoktur.",
        "Kloroplast, bitkinin ışıkla besin üretmesine yardım eder. Mitokondri, iki hücre tipinde de enerji dönüşümünde görev alır.",
      ],
      example: "Yaprak hücresi yeşil görünür çünkü kloroplast vardır. Yanak içi hücresinde kloroplast aranmaz.",
      questions: [
        ["Kloroplast hangi hücrede bulunur?", ["Yalnız hayvan", "Bitki", "İkisinde de duvar olarak", "Hiçbirinde"], 1, "Kloroplast bitki hücresine özgüdür."],
        ["Hücre duvarı için doğru olan hangisidir?", ["Hayvan hücresinin dışıdır", "Bitki hücresine dayanıklılık verir", "Çekirdeğin ta kendisidir", "Bir kuvvettir"], 1, "Duvar, bitki hücresinin dışındadır."],
        ["Mitokondri neyle ilgilidir?", ["Enerji dönüşümü", "Yalnız renk", "Kemik sayısı", "Ay’ın evresi"], 0, "Mitokondri enerji dönüşümünde görevlidir."],
      ],
    },
  ]),
  unit("Destek ve hareket", [16, 17, 18], [
    {
      title: "Kemik ve eklem",
      paragraphs: [
        "İskelet vücuda şekil verir, organları korur ve kaslarla birlikte hareketi sağlar. Kemikler sert ve canlıdır.",
        "Eklem, kemiklerin birleştiği yerdir. Diz gibi oynar eklemler hareketi artırır. Kafatası kemikleri birbirine sıkı bağlıdır.",
      ],
      example: "Kaburgalar akciğer ve kalbi korur. Omurga hem taşır hem de eğilmeye izin verir.",
      questions: [
        ["İskeletin görevlerinden biri hangisidir?", ["Sindirmek", "Vücuda destek olmak ve organları korumak", "Işığı kırmak", "Terazi olmak"], 1, "Destek ve koruma iskeletin işidir."],
        ["Eklem nedir?", ["Kasın rengi", "Kemiklerin birleştiği yer", "Bir organel", "Bir kuvvet birimi"], 1, "Eklem, kemikler arasındadır."],
        ["Kafatası neyi korur?", ["Beyni", "Yalnız ayağı", "Mideyi", "Kloroplastı"], 0, "Kafatası beyni çevreler."],
      ],
    },
    {
      title: "Kaslar",
      paragraphs: [
        "Kaslar kasılıp gevşeyerek kemiği çeker. İtmezler; bu yüzden birçok hareket için çift çalışırlar.",
        "Kolun bükülmesinde ön koldaki kas kasılır, karşı kas gevşer. Düzenli hareket kemik ve kası güçlendirir.",
      ],
      example: "Pazı kası kasılınca ön kol yukarı kalkar.",
      questions: [
        ["Kas kemiği nasıl hareket ettirir?", ["İterek", "Kasılıp çekerek", "Erimesiyle", "Işık üreterek"], 1, "Kas çekerek çalışır."],
        ["Kol bükülürken ne olur?", ["İki kas birden aynı anda en uzun hâlini korur", "Bir kas kasılır, karşıtı gevşer", "Kemik kaybolur", "Eklem kapanıp yok olur"], 1, "Kaslar zıt çalışır."],
        ["Hareket sistemi hangi ikiliden oluşur?", ["Kemik ve kas", "Yaprak ve kök", "Zar ve kloroplast", "Güneş ve Ay"], 0, "Destek kemikte, çekme kasta olur."],
      ],
    },
  ]),
  unit("Işığın yayılması", [19, 20], [
    {
      title: "Doğrusal yol",
      paragraphs: [
        "Işık, saydam ve türdeş ortamda doğrusal yolla yayılır. Bu yüzden cismin arkasına ışık doğrudan geçmez ve gölge oluşur.",
        "Işık kaynağı kendi ışığını üretir: Güneş, lamba, ateş. Ay ve ayna kaynak değildir; ışığı yansıtır.",
      ],
      example: "Üç delikli kartın delikleri aynı hizadaysa mum ışığı üçüncü karta ulaşır. Delik kayınca ışık kesilir.",
      questions: [
        ["Işık türdeş ortamda nasıl yayılır?", ["Zikzak çizerek", "Doğrusal", "Yalnız daire çizerek", "Hiç yayılmaz"], 1, "Işınlar düz gider."],
        ["Hangisi ışık kaynağıdır?", ["Ay", "Ayna", "Yanan mum", "Beyaz duvar"], 2, "Mum kendi ışığını üretir."],
        ["Delikler hizalı değilse mum ışığı neden geçmez?", ["Işık eğri yolu kendiliğinden aramaz", "Mum söner", "Kart şeffaflaşır", "Gölge ışıktır"], 0, "Işık doğrusal gittiği için hizasız delikten geçmez."],
      ],
    },
    {
      title: "Saydam, yarı saydam, opak",
      paragraphs: [
        "Saydam madde ışığı çoğunu geçirir: temiz cam. Yarı saydam, ışığın bir kısmını geçirir: yağlı kâğıt. Opak, ışığı geçirmez: tahta, metal levha.",
        "Opak cisimler belirgin gölge yapar. Saydam cismin gölgesi belirsizdir.",
      ],
      example: "Pencereden oda aydınlanır çünkü cam saydamdır. Perde çekilince ışık azalır.",
      questions: [
        ["Tahta levha nasıl bir maddedir?", ["Saydam", "Opak", "Işık kaynağı", "Ayna olmak zorunda"], 1, "Işığı geçirmez."],
        ["Yağlı kâğıt neden yarı saydamdır?", ["Işığın bir kısmını geçirir", "Kendi ışığını üretir", "Hiç gölge yapmaz ve ışığı yutar", "Bir gezegendir"], 0, "Arkası net görünmez ama aydınlık geçer."],
        ["Belirgin gölgeyi hangisi yapar?", ["Temiz cam", "Opak cisim", "Hava", "Boşluk"], 1, "Işık arkaya geçemeyince gölge keskinleşir."],
      ],
    },
  ]),
  unit("Madde ve ışık", [21], [
    {
      title: "Yansıma ve soğurulma",
      paragraphs: [
        "Işık bir yüzeye çarpınca bir kısmı yansır, bir kısmı soğurulur, saydamsa bir kısmı geçer.",
        "Açık renkli yüzeyler ışığı daha çok yansıtır. Koyu yüzeyler daha çok soğurur ve daha çok ısınır.",
      ],
      example: "Yazın siyah tişört, beyaz tişörtten daha sıcak hissedilir.",
      questions: [
        ["Koyu yüzey neden daha çok ısınır?", ["Işığı daha çok soğurduğu için", "Işığı daha çok yansıttığı için", "Saydam olduğu için", "Kütlesi sıfır olduğu için"], 0, "Soğurulan ışık enerji olarak ısıya dönüşür."],
        ["Ayna ne yapar?", ["Işığın çoğunu düzenli yansıtır", "Işığı üretir", "Işığı yutar ve kararır", "Opak olup hiç etkileşmez"], 0, "Ayna bir kaynak değildir, yansıtıcıdır."],
        ["Saydam camda ışığın bir kısmı ne olur?", ["Geçer", "Her zaman yok olur", "Taşa dönüşür", "Kuvvet olur"], 0, "Geçen kısım sayesinde arkası görünür."],
      ],
    },
    {
      title: "Gölgenin ipucu",
      paragraphs: [
        "Gölgenin şekli, cismin ışığa bakan kenarıyla ilgilidir. Kaynak yaklaşırsa gölge genellikle büyür.",
        "Birden çok kaynaktan birden çok gölge düşebilir. Gölge, ışığın doğrusal yayıldığının kanıtıdır.",
      ],
      example: "Elin perdeye yaklaşması gölgeyi büyütür; ışık kaynağına yaklaşmak da gölgeyi değiştirir.",
      questions: [
        ["Gölge neyi kanıtlar?", ["Işığın doğrusal yayıldığını", "Işığın her zaman eğri gittiğini", "Cismin saydam olduğunu", "Kuvvetin newton olduğunu"], 0, "Işık köşeyi kendiliğinden dönüp arkayı aydınlatmaz."],
        ["Açık renk neden serin kalabilir?", ["Işığı daha çok yansıttığı için", "Işığı ürettiği için", "Opak olmadığı için her zaman", "Kütlesi olmadığı için"], 0, "Yansıyan ışık soğurulup ısıya dönüşmez."],
        ["Kaynak ve perde dururken cisim perdeye yaklaşırsa gölge genellikle ne olur?", ["Büyür", "Yok olur", "Rengi kırmızıya döner", "Saydamlaşır"], 0, "Perdeye yakın cismin gölgesi daha büyük görünür."],
      ],
    },
  ]),
  unit("Tam gölge", [22, 23], [
    {
      title: "Tam gölge nasıl oluşur",
      paragraphs: [
        "Noktasal bir kaynaktan çıkan ışık doğrusal gider. Opak cismin arkasına ışık ulaşmayan bölge tam gölgedir.",
        "Kaynak, cisim ve perde aynı hizada düşünülür. Cisim kaynağa yaklaşırsa tam gölge perde üzerinde büyür.",
      ],
      example: "El feneri yaklaştırılınca duvardaki tavşan gölgesi büyür.",
      questions: [
        ["Tam gölge neresidir?", ["Işığın ulaşmadığı bölge", "En aydınlık nokta", "Saydamın içi", "Kaynağın kendisi"], 0, "Işık oraya varamaz."],
        ["Cisim kaynağa yaklaşırsa perdede gölge ne olur?", ["Genellikle büyür", "Her zaman kaybolur", "Saydam olur", "Kısalıp noktaya döner, büyümez"], 0, "Işınlar daha geniş bir alanı karanlıkta bırakır."],
        ["Tam gölge için cisim nasıl olmalıdır?", ["Işığı geçirmeyen, opak", "Tam saydam", "Bir sıvı olmak zorunda", "Işık kaynağı"], 0, "Işık arkaya geçmemelidir."],
      ],
    },
    {
      title: "Gölgeyi değiştirenler",
      paragraphs: [
        "Gölgenin boyu; kaynak, cisim ve perde arasındaki uzaklığa bağlıdır. Perde yaklaşırsa gölge küçülür.",
        "Kaynağın şekli de gölgeyi etkiler. Büyük kaynakta kenarlar yumuşayabilir. Bu sınıfta asıl incelenen, tam gölgenin boyudur.",
      ],
      example: "Aynı top, perdeye yaklaştırılınca gölgesi küçülür.",
      questions: [
        ["Perde cisme yaklaşırsa gölge genellikle ne olur?", ["Küçülür", "Sonsuz olur", "Yok olup aydınlık artar her zaman", "Renk değiştirip ısınır"], 0, "Işık daha az yayılıp daha küçük bir leke bırakır."],
        ["Gölgenin oluşması ışığın hangi özelliğindendir?", ["Doğrusal yayılma", "Kütle çekimi", "Sürtünme", "Hücre duvarı"], 0, "Işık eğilip cismin arkasına dolanmaz."],
        ["Hangisi gölgenin boyunu değiştirir?", ["Cisim ile kaynak arası uzaklık", "Defterin markası", "Suyun tadı", "Kemiğin sayısı"], 0, "Uzaklık değişince lekenin boyu değişir."],
      ],
    },
  ]),
  unit("Maddenin tanecikli yapısı", [24], [
    {
      title: "Tanecikler",
      paragraphs: [
        "Madde, gözle görülmeyen taneciklerden oluşur. Katıda tanecikler birbirine yakın ve düzenlidir, titreşir.",
        "Sıvıda tanecikler birbirinin üzerinden kayar. Gazda ise birbirinden uzaktır ve her yöne hareket eder. Bu yüzden gaz bulunduğu kabı doldurur.",
      ],
      example: "Oda spreyi bir köşede sıkılsa da koku odaya yayılır. Gaz tanecikleri her yöne gider.",
      questions: [
        ["Gaz tanecikleri nasıldır?", ["Birbirine çok yakın ve kilitli", "Birbirinden uzak ve hareketli", "Hareketsiz", "Yalnız katı hâldedir"], 1, "Gaz tanecikleri seyrek ve hızlıdır."],
        ["Koku neden yayılır?", ["Sıvı hemen katılaştığı için", "Gaz tanecikleri her yöne gittiği için", "Işık kırıldığı için", "Kütle kaybolduğu için"], 1, "Tanecikler odaya dağılır."],
        ["Katı tanecikleri için doğru olan hangisidir?", ["Kabım her yerine dağılır", "Birbirine yakın durur ve titreşir", "Birbirini hiç çekmez ve dağılır", "Yoktur"], 1, "Katının belirli şekli bu düzenden gelir."],
      ],
    },
    {
      title: "Hâl ve şekil",
      paragraphs: [
        "Katının belirli şekli ve hacmi vardır. Sıvının hacmi belirli, şekli kabına göredir. Gazın şekli de hacmi de kabına göre değişir.",
        "Hal değişince taneciklerin kendisi değişmez; birbirine yakınlığı ve hareketi değişir.",
      ],
      example: "Su bardakta su olarak kalır, dökülünce kabının şeklini alır. Tanecikler hâlâ su taneciğidir.",
      questions: [
        ["Sıvı için doğru olan hangisidir?", ["Şekli de hacmi de yoktur", "Hacmi belirli, şekli kabına bağlıdır", "Her zaman küptür", "Taneciksizdir"], 1, "Sıvı döküldüğü kabın şeklini alır."],
        ["Hâl değişince taneciklerin kendisi ne olur?", ["Başka elemente dönüşmek zorundadır", "Aynı kalır, düzeni değişir", "Yok olur", "Işığa döner"], 1, "Buz, su ve buhar aynı maddenin hâlleridir."],
        ["Gazın belirli bir şekli var mıdır?", ["Vardır, küptür", "Yoktur, kabını doldurur", "Yalnız soğukta vardır", "Katı gibidir"], 1, "Gaz kabın tamamına yayılır."],
      ],
    },
  ]),
  unit("Isı ve sıcaklık", [25, 26], [
    {
      title: "İki kavram",
      paragraphs: [
        "Sıcaklık, maddenin taneciklerinin ortalama hareket enerjisinin göstergesidir. Termometre ile ölçülür, birimi santigrat derece olabilir.",
        "Isı, sıcaklıkları farklı maddeler arasında aktarılan enerjidir. Sıcak maddeden soğuk maddeye doğru kendiliğinden akar.",
      ],
      example: "Sıcak çayın içine soğuk kaşık konunca çay biraz soğur, kaşık ısınır. Enerji çaydan kaşığa geçmiştir.",
      questions: [
        ["Sıcaklık ne ile ölçülür?", ["Dinamometre", "Termometre", "Terazi", "Metre"], 1, "Termometre sıcaklık ölçer."],
        ["Isı kendiliğinden hangi yöne akar?", ["Soğuktan sıcağa", "Sıcaktan soğuğa", "Yalnız yukarı", "Hiç akmaz"], 1, "Enerji sıcak olandan soğuk olana geçer."],
        ["Isı ile sıcaklık aynı mıdır?", ["Evet", "Hayır", "İkisi de newton’dur", "İkisi de kilogramdır"], 1, "Sıcaklık bir ölçüm, ısı bir enerji aktarımıdır."],
      ],
    },
    {
      title: "Ne kadar enerji?",
      paragraphs: [
        "Aynı sıcaklıktaki bir kova su, bir bardak sudan daha çok ısı enerjisi taşır. Sıcaklık eşit olsa da madde miktarı farklıdır.",
        "Kütle, madde cinsi ve sıcaklık farkı, alınan veya verilen ısıyı değiştirir.",
      ],
      example: "60°C bir bardak su ile 60°C bir kova suyun sıcaklığı aynıdır. Kovadaki enerji daha büyüktür.",
      questions: [
        ["Aynı sıcaklıkta kova su ile bardak su için doğru olan hangisidir?", ["Bardakta daha çok ısı enerjisi vardır", "Kovada daha çok ısı enerjisi vardır", "İkisinin enerjisi her zaman sıfırdır", "Sıcaklıkları farklı olmak zorundadır"], 1, "Madde çoksa taşınan enerji de çoktur."],
        ["Termometre 25°C gösteriyorsa bu nedir?", ["Isı miktarı", "Sıcaklık", "Kuvvet", "Kütle"], 1, "Derece, sıcaklık birimidir."],
        ["Soğuk kaşık sıcak çorba içinde neden ısınır?", ["Isı çorbadan kaşığa geçer", "Kaşık ısı üretir", "Çorba kütlesini kaşığa verir", "Sıcaklık kaşıktan çorbaya akar"], 0, "Enerji sıcaktan soğuğa geçer."],
      ],
    },
  ]),
  unit("Maddenin hâl değişimi", [27], [
    {
      title: "Erime, donma, buharlaşma, yoğuşma",
      paragraphs: [
        "Katıdan sıvıya erime, sıvıdan katıya donma denir. Sıvıdan gaza buharlaşma, gazdan sıvıya yoğuşma denir.",
        "Hâl değişirken sıcaklık bir süre sabit kalabilir. Verilen enerji taneciklerin düzenini değiştirir.",
      ],
      example: "Buz erirken ortam 0°C’ta bir süre kalabilir. Su kaynarken de sıcaklık bir süre 100°C’ta kalır.",
      questions: [
        ["Katıdan sıvıya geçişe ne denir?", ["Donma", "Erime", "Yoğuşma", "Kırağı"], 1, "Erime, katıyı sıvı yapar."],
        ["Camın buğulanması hangi hâl değişimidir?", ["Erime", "Donma", "Yoğuşma", "Buharlaşma yalnız"], 2, "Sudan gelen gaz, soğuk camda sıvıya döner."],
        ["Hâl değişirken sıcaklık neden bir süre sabit kalabilir?", ["Enerji tanecik düzenini değiştirir", "Termometre bozulur", "Madde yok olur", "Kuvvet ölçülür"], 0, "Enerji sıcaklığı yükseltmek yerine bağı çözer veya kurar."],
      ],
    },
    {
      title: "Günlük örnekler",
      paragraphs: [
        "Islak çamaşırın kuruması buharlaşmadır. Sabah çiy, havadaki su buharının yoğuşmasıdır.",
        "Madde hâl değiştirse de tanecik cinsi aynı kalır. Su buharı hâlâ sudur.",
      ],
      example: "Dondurucudaki su donar, çıkınca yeniden erir. İki hâl de H₂O’dur.",
      questions: [
        ["Islak saçın kuruması nedir?", ["Donma", "Buharlaşma", "Erime", "Kırağı"], 1, "Su, sıvıdan gaz hâline geçer."],
        ["Çiy nasıl oluşur?", ["Gazın sıvıya dönüşmesiyle", "Katının doğrudan tahta olmasıyla", "Işığın kırılmasıyla", "Sürtünmeyle"], 0, "Bu yoğuşmadır."],
        ["Buz eriyince madde değişir mi?", ["Evet, başka madde olur", "Hayır, hâl değişir", "Evet, hava olur ve yok olur", "Kütlesi sıfırlanır"], 1, "Buz ve su aynı maddedir."],
      ],
    },
  ]),
  unit("Madde ve ısı", [28, 29], [
    {
      title: "Genleşme",
      paragraphs: [
        "Çoğu madde ısıtılınca genleşir, soğuyunca büzülür. Tanecikler daha hızlı titreşir ve birbirinden biraz uzaklaşır.",
        "Tellerin yazın sarkması, kavanoz kapağının sıcak suda gevşemesi bu yüzdendir.",
      ],
      example: "Sıkışan metal kapak sıcak suda bekletilince kapak daha çok genleşir ve açılır.",
      questions: [
        ["Çoğu madde ısıtılınca ne olur?", ["Büzülür", "Genleşir", "Kütlesi sıfırlanır", "Saydamlaşmak zorunda kalır"], 1, "Isıtma tanecik aralığını artırır, madde genleşir."],
        ["Sıcak suda kapak neden gevşer?", ["Kapak genleştiği için", "Cam yok olduğu için", "Su donduğu için", "Kütle arttığı için"], 0, "Metal genleşince dişler rahatlar."],
        ["Soğuyan balon neden pörsür?", ["İçindeki gaz büzülür", "Balon kütle kazanır", "Hava sıvı tahta olur", "Işık soğurulmaz"], 0, "Soğuyan gazın hacmi azalır."],
      ],
    },
    {
      title: "İletken ve yalıtkan",
      paragraphs: [
        "Isıyı çabuk ileten maddelere ısı iletkeni denir. Metaller iyi iletkendir.",
        "Isıyı kötü ileten maddeler yalıtkandır: tahta, strafor, yün. Tencere sapının plastik olması eli korur.",
      ],
      example: "Aynı çorbanın metal kaşığı, tahta kaşığından daha çabuk ısınır.",
      questions: [
        ["Hangisi iyi ısı iletkenidir?", ["Tahta", "Yün", "Bakır", "Strafor"], 2, "Metaller ısıyı çabuk iletir."],
        ["Tencere sapı neden plastik olabilir?", ["Isı yalıtkanı olduğu için eli korur", "Isıyı metalden iyi ilettiği için", "Yenildiği için", "Işık kaynağı olduğu için"], 0, "Plastik ısıyı kötü iletir."],
        ["Yalıtkan ne demektir?", ["Isıyı kötü ileten", "Elektriği her zaman üreten", "Saydam olan", "Bir kuvvet birimi"], 0, "Yalıtkan, enerji akışını yavaşlatır."],
      ],
    },
  ]),
  unit("Madde ünitesini toparlama", [30], [
    {
      title: "Üç fikir",
      paragraphs: [
        "Madde taneciklerden oluşur. Isı enerji aktarımı, sıcaklık ise termometrede okunan değerdir.",
        "Hâl değişimi taneciği değiştirmez. Isınma çoğu zaman genleşme getirir.",
      ],
      example: "Buharlaşan su yok olmaz; gaz hâline geçer ve soğuk yüzeyde yeniden yoğuşabilir.",
      questions: [
        ["Sıcaklık ile ısı için doğru cümle hangisidir?", ["İkisi de kilogramdır", "Sıcaklık termometreyle okunur, ısı enerji aktarımıdır", "Isı bir uzunluktur", "Sıcaklığın birimi newton’dur"], 1, "İki kavram ayrıdır."],
        ["Yoğuşma nedir?", ["Gazın sıvıya geçmesi", "Katının ışık üretmesi", "Kuvvetin ölçülmesi", "Gölgenin büyümesi"], 0, "Buğunun su damlasına dönmesi yoğuşmadır."],
        ["Metal kaşık neden çabuk ısınır?", ["İyi iletken olduğu için", "Yalıtkan olduğu için", "Saydam olduğu için", "Bir hücre olduğu için"], 0, "Metaller ısıyı çabuk taşır."],
      ],
    },
  ]),
  unit("Yaşamımızdaki elektrik", [31, 32, 33], [
    {
      title: "Devre elemanları",
      paragraphs: [
        "Basit bir devrede pil, iletken kablo, ampul ve anahtar bulunur. Anahtar kapalıyken devre tamamlanır, ampul yanar.",
        "Devre şemasında her elemanın bir simgesi vardır. Çizim, gerçek düzeneğin yerini tutar.",
      ],
      example: "Pilin uzun çizgisi artı ucu, kısa ve kalın çizgisi eksi ucu simgeler.",
      questions: [
        ["Ampulün yanması için ne gerekir?", ["Devrenin tamamlanması", "Anahtarın her zaman açık durması", "Kablonun kopuk olması", "Pilin devre dışında kalması"], 0, "Akımın yolu kapanırsa ampul yanar."],
        ["Anahtar ne işe yarar?", ["Devreyi açıp kapatır", "Işığı üretir, pildir", "Kütle ölçer", "Gölge yapar"], 0, "Anahtar yolu keser veya birleştirir."],
        ["Devre şeması nedir?", ["Elemanların simgelerle çizimi", "Bir hikâye", "Sıcaklık grafiği", "Hücre resmi"], 0, "Şema, devrenin sade çizimidir."],
      ],
    },
    {
      title: "İletken ve yalıtkan",
      paragraphs: [
        "Metaller elektrik iletir. Plastik, cam ve kuru tahta yalıtkandır. Kabloyun dışı yalıtkan, içi iletkendir.",
        "İletken bir cisim devredeki boşluğa konursa ampul yanabilir. Yalıtkan konursa yanmaz.",
      ],
      example: "Devredeki boşluğa ataş konunca lamba yanar. Silgi konunca yanmaz.",
      questions: [
        ["Hangisi elektrik iletir?", ["Bakır tel", "Plastik", "Silgi", "Kuru cam"], 0, "Bakır bir metaldir ve iletkendir."],
        ["Kabloyun dışı neden plastiktir?", ["Çarpılmayı önleyen yalıtkan olduğu için", "Işık ürettiği için", "Pil olduğu için", "Saydam olduğu için"], 0, "Dış kılıf akımı içeride tutar."],
        ["Devre boşluğuna silgi konursa ampul ne olur?", ["Yanar", "Yanmaz", "Pil çoğalır", "Gölge oluşur"], 1, "Silgi yalıtkandır, yolu kapatmaz."],
      ],
    },
    {
      title: "Parlaklık",
      paragraphs: [
        "Aynı devrede pil sayısı artarsa ampul genellikle daha parlak yanar. Ampul sayısı artarsa her ampul daha sönük olabilir.",
        "Karşılaştırma yaparken diğer değişkenler aynı tutulur. Hem pili hem ampülü aynı anda değiştirmek sonucu karıştırır.",
      ],
      example: "Tek pil ve tek ampulle başlanır. İkinci pil eklenince parlaklık artar. İkinci ampul seri bağlanırsa parlaklık azalır.",
      questions: [
        ["Yalnız pil sayısı artarsa parlaklık genellikle ne olur?", ["Artar", "Sıfırlanır", "Değişmez, hiç fark etmez", "Ampul saydam olur"], 0, "Kaynak büyüyünce ampul daha parlak yanabilir."],
        ["Adil denemede ne yapılır?", ["Tek değişken değiştirilir", "Her şey aynı anda değiştirilir", "Pil çıkarılır", "Sonuç yazılmaz"], 0, "Bir neden görmek için diğerleri sabit tutulur."],
        ["Seri bağlanan ikinci ampul parlaklığı genellikle ne yapar?", ["Azaltır", "Sonsuz yapar", "Pili yok eder", "Kabloyu iletken yapmaz"], 0, "Enerji iki ampule paylaşılır."],
      ],
    },
  ]),
  unit("Geri dönüşüm", [34, 35, 36], [
    {
      title: "Evsel atık",
      paragraphs: [
        "Evsel atık; kâğıt, cam, plastik, metal ve organik mutfak artığı gibi evden çıkan maddelerdir.",
        "Çöpün hepsi çöp değildir. Ayrılan malzeme yeniden ham madde olur. Bu, geri dönüşümdür.",
      ],
      example: "Yıkanmış cam şişe cam kumbarasına atılır. Yağlı kâğıt, kâğıt geri dönüşümünü zorlaştırır.",
      questions: [
        ["Geri dönüşüm nedir?", ["Atığı hiç ayırmadan gömmek", "Uygun atığı yeniden ham maddeye çevirmek", "Her şeyi yakmak", "Çöpü saklamak"], 1, "Madde yeniden üretime girer."],
        ["Hangisi evsel atıktır?", ["Sınıftaki plastik şişe", "Güneş", "Bir kuvvet", "Hücre duvarı"], 0, "Ev ve okulda kullanılan eşyanın atığı evsel atıktır."],
        ["Cam şişe nereye atılmalıdır?", ["Cam kumbarasına", "Pil kutusuna gelişigüzel değil, cam kutusuna", "Organik atığa", "Yağlı kâğıdın içine"], 0, "Cam, cam ile toplanır."],
      ],
    },
    {
      title: "Neden ayırırız?",
      paragraphs: [
        "Geri dönüşüm doğal kaynak kullanımını ve çöp miktarını azaltır. Yeni kâğıt için kesilecek ağaç sayısı azalabilir.",
        "Pil, yağ ve elektronik atık normal çöpe karışmamalıdır. Bunlar toprağı ve suyu kirletir.",
      ],
      example: "Bir ton kâğıdın geri dönüşümü çok sayıda ağacı kesilmekten koruyabilir. Asıl fikir, kaynağı yeniden kullanmaktır.",
      questions: [
        ["Geri dönüşümün yararı nedir?", ["Doğal kaynak kullanımını azaltması", "Çöpü artırması", "Pili toprağa gömmesi", "Her maddeyi yakması"], 0, "Var olan madde yeniden kullanılır."],
        ["Pil neden ayrı toplanır?", ["Zararlı madde içerdiği için", "Bir kâğıt olduğu için", "Organik olduğu için", "Saydam olduğu için"], 0, "Pil toprağa ve suya karışmamalıdır."],
        ["Yağlı pizza kutusu kâğıt kutusuna neden uygun olmayabilir?", ["Yağ, kâğıdın işlenmesini zorlaştırır", "Kutu camdır", "Kâğıt hiç geri dönüşmez", "Yağ bir metaldir"], 0, "Kirli kâğıt süreci bozar."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Yılın üç sorusu",
      paragraphs: [
        "Bu hafta fen şenliği ve tekrar haftasıdır. Yeni ünite açılmaz.",
        "Güneş bir yıldızdır. Kütle kilogram, ağırlık newton’dur. Işık doğrusal yayılır. Isı sıcaktan soğuğa geçer.",
      ],
      example: "Ay’a giden bir çantanın kütlesi değişmez, ağırlığı azalır.",
      questions: [
        ["Güneş nedir?", ["Dünya’nın uydusu", "Yıldız", "Bir gezegen", "Tam gölge"], 1, "Güneş kendi ışığını üretir."],
        ["Ağırlığın birimi nedir?", ["kg", "N", "°C", "cm²"], 1, "Ağırlık bir kuvvettir."],
        ["Isı kendiliğinden nasıl akar?", ["Soğuktan sıcağa", "Sıcaktan soğuğa", "Yalnız katıda hiç", "Kütleye dönüşerek"], 1, "Enerji sıcak maddeden soğuk maddeye geçer."],
      ],
    },
  ]),
]

const turkce = [
  unit("Oyun Dünyası", [1, 2, 3, 4, 5], [
    {
      title: "Ana fikir",
      paragraphs: [
        "Bir metnin ana fikri, yazarın asıl söylemek istediğidir. Ayrıntılar bu fikri destekler.",
        "“Teneffüste ip atlayan çocuklar sıra bekledi. Kimse ipi bırakıp gitmedi.” Ayrıntı, sırayla oynamaktır. Ana fikir, oyunun paylaşılınca sürdüğüdür.",
      ],
      example: "Ana fikir tek cümledir. “İp, lastik ve tebeşir kullanıldı” bir ayrıntıdır, ana fikir değildir.",
      questions: [
        ["Ana fikir nedir?", ["Metindeki her eşyanın listesi", "Yazarın asıl söylemek istediği", "İlk kelime", "Sayfa numarası"], 1, "Ayrıntılar ana fikrin çevresinde durur."],
        ["“Kimse ipi bırakıp gitmedi” cümlesi neyi destekler?", ["Oyunun paylaşılınca sürdüğünü", "İpin bir gezegen olduğunu", "Çocukların hiç oynamadığını", "Havanın soğuk olduğunu"], 0, "Bu bir destekleyici ayrıntıdır."],
        ["Hangisi ayrıntıdır?", ["Paylaşınca oyun sürer", "Teneffüste ip atlandı", "Birlikte oynamak gerekir", "Sıra beklemek adil olandır"], 1, "İp atlamak olayın parçasıdır, ana hüküm değildir."],
      ],
    },
    {
      title: "Olay sırası",
      paragraphs: [
        "Anlatı metninde olaylar bir sırayla olur. Sıra bozulursa anlam değişir.",
        "“Top dışarı kaçtı. Çocuklar durdu. Hakem içeri çağırdı. Oyun yeniden başladı.” İlk olay topun kaçmasıdır.",
      ],
      example: "Önce, sonra, en son sözleri sırayı ele verir.",
      questions: [
        ["Metinde ilk olay hangisidir?", ["Oyun yeniden başladı", "Top dışarı kaçtı", "Hakem çağırdı", "Çocuklar hiç durmadı"], 1, "Cümlelerin başında topun kaçtığı yazılı."],
        ["Olay sırası neden önemlidir?", ["Sıra değişince anlam değişebilir", "Yalnız başlık için", "Kelime sayısını artırmak için", "Resim çizmek için"], 0, "Ne önce olduysa sonuç ona bağlıdır."],
        ["“En son” sözü metinde neyi işaret eder?", ["Başlangıcı", "Sıranın son olayını", "Başlığı", "Yazarın adını"], 1, "En son, bitiş olayıdır."],
      ],
    },
    {
      title: "Karakter ve duygu",
      paragraphs: [
        "Karakter, metindeki kişidir. Ne yaptığı ve ne söylediği duygusunu ele verir.",
        "“Elinde yedek ip vardı, sırası gelene uzattı.” Bu çocuk kıskanç değil, düşüncelidir.",
      ],
      example: "Duyguyu söylerken metinden bir kanıt gösterilir: yaptığı iş veya sözü.",
      questions: [
        ["İp uzatan çocuk nasıl biri gibi durur?", ["Düşünceli", "Oyunu bozan", "Uykulu ve ilgisiz", "Korkmuş"], 0, "Sırası gelene malzeme vermesi düşünceli bir davranıştır."],
        ["Karakterin duygusu nereden anlaşılır?", ["Yaptığı ve söylediğinden", "Sayfa kenarından", "Kitabın fiyatından", "Yalnız adının uzunluğundan"], 1, "Davranış ve söz kanıttır."],
        ["Kanıt olmadan “kötü çocuk” demek neden zayıftır?", ["Metne dayanmaz", "Her zaman doğrudur", "Ana fikirdir", "Olay sırasıdır"], 0, "Yorum, metindeki bir davranışa bağlanmalıdır."],
      ],
    },
  ]),
  unit("Atatürk’ü Tanımak", [6, 7, 8, 9, 10, 11, 12], [
    {
      title: "Bilgi ve yorum",
      paragraphs: [
        "Bilgi, ölçülebilen veya kaynakta açık yazan ifadedir. Yorum, okurun çıkardığı sonuçtur.",
        "“Mustafa 1881’de doğdu.” bir bilgidir. “Meraklı bir çocuktu” ifadesi, anılardaki davranışlardan çıkan yorum olabilir.",
      ],
      example: "Bilgi cümlesinin yanına kaynak gösterilir. Yorum cümlesinde “bence” gizlenmiş olabilir.",
      questions: [
        ["Hangisi bilgidir?", ["Bence çok çalışkandı", "1881’de doğdu", "En sevdiğim liderdir", "Keşke daha uzun anlatsalar"], 1, "Doğum yılı denetlenebilir bir bilgidir."],
        ["Yorum nedir?", ["Okurun çıkardığı sonuç", "Sayfa numarası", "Başlığın puntosu", "Yazarın soyadı her zaman"], 0, "Yorum, bilgiden varılan hükümdür."],
        ["“Meraklı bir çocuktu” cümlesi nasıl güçlenir?", ["Bir davranış örneğiyle", "Yalnız ünlemle", "Kelimeyi büyüterek", "Başka konuya atlayarak"], 0, "Örnek, yorumu metne bağlar."],
      ],
    },
    {
      title: "Betimleme",
      paragraphs: [
        "Betimleme, bir kişiyi veya yeri okurun gözünde canlandırır. Renk, ses, hareket ve eşya kullanılır.",
        "“Cebinde defter, elinde kalem, bahçede yaprakları inceliyordu.” Bu cümle hem kişiyi hem eylemi gösterir.",
      ],
      example: "“İyi bir öğrenciydi” yargı kurar. “Her akşam lambanın altında haritaya bakıyordu” betimler.",
      questions: [
        ["Betimleme ne işe yarar?", ["Gözümüzde canlandırmak", "Yalnız sayıyı vermek", "Başlığı silmek", "Olayı gizlemek"], 0, "Duyulara dayanan ayrıntı canlandırır."],
        ["Hangisi betimlemedir?", ["Çok önemliydi", "Cebinde defter, elinde kalem vardı", "Bence haklıydı", "Bunu unutma"], 1, "Görülen eşyalar betimlemedir."],
        ["“İyi öğrenciydi” cümlesinin eksiği nedir?", ["Görünür bir ayrıntı yok", "Çok uzundur", "Bir tarihtir", "Bir başlıktır"], 0, "Yargı var, görüntü yok."],
      ],
    },
    {
      title: "Kısa anlatım",
      paragraphs: [
        "Bir anıyı anlatırken önce yer ve zaman, sonra tek bir olay, en sonda hissettirdiğin sonuç gelir.",
        "Her şeyi anlatmak gerekmez. Atatürk’ü tanıtan bir paragraf, bir davranışı seçer ve ona bağlı kalır.",
      ],
      example: "“Samsun’a çıkmadan önce yol uzun sürdü. Karar vermişti: memleketi sormak için gidiyordu.” Zaman, yer ve amaç aynı paragraftadır.",
      questions: [
        ["Kısa anlatıda en sonda ne olur?", ["Alakasız yeni bir konu", "Olayın sonucu veya hissettirdiği şey", "Yalnız başlık", "Kitap listesi"], 1, "Paragraf bir sonuçla kapanır."],
        ["Neden tek olay seçilir?", ["Dağılmamak için", "Kelime sayısını gizlemek için", "Tarihi silmek için", "Kişiyi yok saymak için"], 0, "Tek olay paragrafı bir arada tutar."],
        ["Yer ve zaman neden başta verilir?", ["Okur olayı bir zemine oturtsun diye", "Ana fikri silsin diye", "Betimleme yasak diye", "Yorum zorunlu diye"], 0, "Nerede ve ne zaman, anlatının çerçevesidir."],
      ],
    },
  ]),
  unit("Duygularımı Tanıyorum", [13, 14, 15, 16, 17, 18], [
    {
      title: "Duyguyu adlandırma",
      paragraphs: [
        "Kızgın, üzgün, heyecanlı, utanganç, meraklı ve ferahlamış farklı duygulardır. Aynı olay iki kişide iki duygu uyandırabilir.",
        "“İçeri girmeden kapıda bekledi, avuçları ısındı.” Bu, heyecan veya çekinme olabilir. Metin hangisine daha yakınsa o seçilir.",
      ],
      example: "Gülümsemek her zaman sevinç değildir. Bazen rahatlama da gülümsetir. Çevre cümlelere bakılır.",
      questions: [
        ["Aynı olay herkeste aynı duyguyu mu uyandırır?", ["Her zaman", "Hayır", "Yalnız çocuklarda evet", "Duygu tek kelimedir, değişmez"], 1, "Kişiye göre duygu değişebilir."],
        ["“Avuçları ısındı, kapıda bekledi” en çok neye yakındır?", ["Açlık", "Çekinme veya heyecan", "Uyku", "Kanıtlanmış sevinç"], 1, "Bedensel belirti ve bekleme, çekinmeyi düşündürür."],
        ["Duyguyu seçerken neye bakılır?", ["Çevre cümlelere", "Sayfa rengine", "Yazarın yaşına yalnız", "Kitabın ağırlığına"], 1, "Kanıt metnin içindedir."],
      ],
    },
    {
      title: "Neden ve sonuç",
      paragraphs: [
        "Duygunun bir nedeni vardır. “Köpeği kaybolunca sesi kısıldı.” Neden kaybolma, sonuç üzüntüdür.",
        "Neden ile sonucu karıştırmamak gerekir. Üzüntü kaybolmayı yaratmamıştır; kaybolma üzüntüyü getirmiştir.",
      ],
      example: "Bağlaçlar ipucu verir: çünkü, bu yüzden, oysa.",
      questions: [
        ["“Köpeği kaybolunca sesi kısıldı” cümlesinde neden nedir?", ["Sesin kısılması", "Köpeğin kaybolması", "Konuşması", "Havanın rengi"], 1, "Kaybolma, üzüntünün nedenidir."],
        ["“Bu yüzden” neyi bağlar?", ["Nedeni sonuca", "Başlığı yazara", "İki aynı kelimeyi", "Sayfayı kapağa"], 0, "Sonuç, nedenin ardından gelir."],
        ["Duygu, olayın nedeni midir her zaman?", ["Evet", "Hayır, çoğu zaman olay duyguyu doğurur", "Duygu yoktur", "Yalnız başlıklarda"], 1, "Önce olay, sonra duygu sıralanır."],
      ],
    },
  ]),
  unit("Geleneklerimiz", [19, 20, 21, 22, 23, 24], [
    {
      title: "Geleneği anlatmak",
      paragraphs: [
        "Gelenek, bir toplulukta tekrar edilen ve anlam taşıyan alışkanlıktır. Yemek, bayram, misafirlik ve el sanatı gelenek olabilir.",
        "Anlatırken “ne yapılır” yetmez. “Neden yapılır” da söylenirse metin bilgi yığını olmaktan çıkar.",
      ],
      example: "“Bayramda büyüklerin eli öpülür; bu, saygıyı ve bir araya gelmeyi hatırlatır.”",
      questions: [
        ["Gelenek nedir?", ["Bir kez yapılan rastgele iş", "Toplulukta tekrar edilen anlamlı alışkanlık", "Yalnız yemek tarifi", "Bir haber başlığı"], 1, "Tekrar ve anlam birlikte gerekir."],
        ["İyi bir gelenek paragrafında ne olur?", ["Yalnız malzeme listesi", "Ne yapıldığı ve neden yapıldığı", "Alakasız bir maç sonucu", "Yalnız tarih"], 1, "Neden, anlatıma anlam katar."],
        ["“Eli öpmek” örneğinde anlam nedir?", ["Saygıyı hatırlatmak", "Elleri saymak", "Bir yarış kazanmak", "Bir tarifi gizlemek"], 0, "Metin, saygı ve bir araya gelmeyi söyler."],
      ],
    },
    {
      title: "Karşılaştırma",
      paragraphs: [
        "İki gelenek karşılaştırılırken önce benzerlik, sonra farklılık yazılır. “İkisinde de ziyafet var. Birinde evde, diğerinde sokakta.”",
        "Kendi ailenin geleneği ile okuduğun gelenek aynı olmayabilir. Fark, yanlış demek değildir.",
      ],
      example: "“Biz bayram sabahı kahvaltıyı birlikte ederiz. Metindeki aile önce mezarlığa gidiyor. Ortak nokta, günü birlikte açmaları.”",
      questions: [
        ["Karşılaştırmada ilk bakılacak şey nedir?", ["Yalnız fark", "Benzerlik ve fark", "Hangisinin üstün olduğu", "Kelime sayısı"], 1, "İkisi de söylenirse karşılaştırma dengeli olur."],
        ["Aile geleneğin metinden farklıysa ne dersin?", ["Metin yanlıştır", "Gelenekler çeşitlenebilir", "Benimki gelenek değildir", "Karşılaştırma yapılamaz"], 1, "Farklılık, yanlışlık değildir."],
        ["“İkisinde de ziyafet var” ne tür bir cümledir?", ["Benzerlik", "Yalnız fark", "Bir başlık", "Bir yargı, kanıtsız küçümseme"], 0, "Ortak noktayı söyler."],
      ],
    },
  ]),
  unit("İletişim ve sosyal ilişkiler", [25, 26, 27, 28, 29, 30], [
    {
      title: "Nazik dil",
      paragraphs: [
        "Aynı istek farklı sözle başka sonuç doğurur. “Çekilir misin!” ile “Biraz yer açar mısın?” aynı istektir, etki farklıdır.",
        "Rica, sebep ve teşekkür cümleyi yumuşatır. Emir, kısa olduğu için sert duyulabilir.",
      ],
      example: "“Kalemini verir misin, benimki bitti.” Sebep söylemek isteği anlaşılır kılar.",
      questions: [
        ["“Biraz yer açar mısın?” ile “Çekilir misin!” farkı nedir?", ["İstek aynı, üslup farklı", "Biri selamdır", "İkisi de teşekkürdür", "Biri bir haberdir"], 0, "İkisi de yer ister; biri naziktir."],
        ["Sebep söylemek ne işe yarar?", ["İsteği anlaşılır kılar", "Cümleyi gizler", "Karşı tarafı susturur", "Yazıyı siler"], 0, "Neden bilinirse rica yerini bulur."],
        ["Emir cümlesi neden sert duyulabilir?", ["Kısa ve doğrudan olduğu için", "Çok uzun olduğu için", "Bir teşekkür olduğu için", "Bir betimleme olduğu için"], 0, "Emir, karşı tarafa seçenek bırakmaz."],
      ],
    },
    {
      title: "Dinlemek",
      paragraphs: [
        "İletişim yalnız konuşmak değildir. Karşındakinin cümlesini bitirmesine izin vermek, sonra kendi cümleni kurmak dinlemektir.",
        "“Yani şunu mu diyorsun?” diye özetlemek, doğru anlayıp anlamadığını gösterir.",
      ],
      example: "Arkadaşın “Kırıldım, çünkü sözümü kestin” diyorsa sorun ses değil, dinlememektir.",
      questions: [
        ["Dinlemek hangisidir?", ["Karşıdakinin sözünü bitirmesini beklemek", "Hemen bağırmak", "Başka konuya atlamak", "Yalnız kendi fikrini tekrarlamak"], 0, "Sözün bitmesi, anlamanın şartıdır."],
        ["“Yani şunu mu diyorsun?” ne işe yarar?", ["Anlayışı kontrol eder", "Kavga başlatır", "Metni siler", "Bir emirdir"], 0, "Özet, doğru duyulup duyulmadığını sorar."],
        ["Söz kesilince kişi ne hissedebilir?", ["Kırılma", "Her zaman sevinç", "Uykuya dalamama zorunlu", "Hiçbir şey, sözün önemi yoktur"], 0, "Metindeki örnek kırılmadır."],
      ],
    },
  ]),
  unit("Sağlıklı Yaşıyorum", [31, 32, 33, 34, 35, 36], [
    {
      title: "Bilgi metnini okumak",
      paragraphs: [
        "Bilgi metninde amaç, bir konuyu öğretmektir. Tanım, örnek ve uyarı ayrı ayrı görülür.",
        "“Su içmek gün boyu gerekir. Bir örnek: derste başın ağrıyorsa susuz kalmış olabilirsin. Uyarı: susuzluk gelinceye kadar beklememek iyi olur.”",
      ],
      example: "Tanım “nedir”, örnek “mesela”, uyarı “dikkat” ile gelir.",
      questions: [
        ["Bilgi metninin amacı nedir?", ["Yalnız güldürmek", "Bir konuyu öğretmek", "Kavga etmek", "Başlığı gizlemek"], 1, "Öğretici metin bilgi verir."],
        ["“Derste başın ağrıyorsa susuz kalmış olabilirsin” ne tür cümledir?", ["Örnek", "Başlık", "Yazarın adı", "Sayfa numarası"], 0, "Günlük bir durum örnektir."],
        ["Uyarı cümlesi ne yapar?", ["Dikkat çeker", "Olay kişisini tanıtır", "Kesir öğretir", "Gölge çizer"], 0, "Uyarı, yapılacak davranışı söyler."],
      ],
    },
    {
      title: "Sav ve kanıt",
      paragraphs: [
        "Sav, yazarın ileri sürdüğü hükümdür. Kanıt, onu destekleyen bilgidir.",
        "“Kahvaltı yapan öğrenciler derste daha az esner.” Bu bir savdır. Yanında bir gözlem veya sayı yoksa kanıt eksiktir.",
      ],
      example: "“Sınıfımızda kahvaltı eden 20 kişiden 4’ü, etmeyen 10 kişiden 6’sı ilk derste esnedi.” Bu küçük bir kanıttır, yine de bütün okullara genellenmez.",
      questions: [
        ["Sav nedir?", ["Yazarın ileri sürdüğü hüküm", "Bir resmin çerçevesi", "Sayfa sayısı", "Kelimenin eş anlamlısı"], 0, "Sav, iddiadır."],
        ["Kanıt ne işe yarar?", ["Savı destekler", "Başlığı süsler", "Metni siler", "Duyguyu gizler"], 0, "Kanıt olmadan sav zayıf kalır."],
        ["Tek sınıfın sayımı bütün ülkeye genellenir mi?", ["Evet, kesin böyledir", "Hayır, sınırlı bir kanıttır", "Sayı her zaman yanlıştır", "Sav kanıttan güçlüdür, sayı gerekmez"], 1, "Küçük gözlem ipucudur, kesin yasa değildir."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Okuma araçları",
      paragraphs: [
        "Bu hafta sosyal etkinlik haftasıdır. Türkçede yıl boyu kullanılan dört araç yeter: ana fikir, olay sırası, duygu ve nazik üslup.",
        "Bir cümlenin bilgi mi yorum mu olduğunu ayırmak, metne haksızlık etmemeyi sağlar.",
      ],
      example: "“Paylaşınca oyun sürer” ana fikir olabilir. “İp atlandı” ayrıntıdır.",
      questions: [
        ["Ana fikir hangisine yakındır?", ["Yazarın asıl söylemek istediği", "Tek bir eşya", "Sayfa numarası", "Yazarın soyadı"], 0, "Ayrıntılar bu fikri taşır."],
        ["“1881’de doğdu” nedir?", ["Bilgi", "Nazik rica", "Bir duygu adı", "Olay sırası sözü"], 0, "Denetlenebilir bir bilgidir."],
        ["“Biraz yer açar mısın?” nasıl bir cümledir?", ["Nazik rica", "Bir başlık", "Bir kanıt tablosu", "Bir tarih"], 0, "İstek yumuşak söylenmiştir."],
      ],
    },
  ]),
]

const sosyal = [
  unit("Birlikte yaşamak", [1, 2, 3, 4, 5, 6], [
    {
      title: "Grup ve rol",
      paragraphs: [
        "İnsanlar aile, sınıf, takım ve apartman gibi gruplarda yaşar. Her grupta kişilerin bir rolü vardır.",
        "Rol, o grupta senden beklenen davranıştır. Sınıfta öğrenci rolü dinlemeyi ve sırayı, nöbetçi rolü sınıfı düzenli bırakmayı içerir.",
      ],
      example: "Aynı çocuk evde kardeş, okulda öğrenci, sahada kalecidir. Kişi değişmez, rol değişir.",
      questions: [
        ["Rol nedir?", ["Grupta senden beklenen davranış", "Evin adresi", "Bir harita işareti", "Bir bayram tarihi"], 0, "Rol, gruptaki görev ve beklentidir."],
        ["Aynı kişi hem kardeş hem öğrenci olabilir mi?", ["Hayır", "Evet, grup değişince rol değişir", "Yalnız tatilde", "Yalnız büyüklerde"], 1, "Kişi birden çok gruba girer."],
        ["Nöbetçi rolü neyi içerir?", ["Sınıfı düzenli bırakmayı", "Dersi iptal etmeyi", "Haritayı silmeyi", "Bayramı ertelemeyi"], 0, "Nöbet, ortak alanı korur."],
      ],
    },
    {
      title: "Kültürel özelliklere saygı",
      paragraphs: [
        "Kültür; dil, yemek, bayram, giysi ve selamlaşma gibi bir topluluğun birikimidir. Aynı ülkede birden çok kültür bir arada yaşar.",
        "Saygı, herkesin senin gibi olmasını istememektir. Alay etmek grubu dağıtır. Merak edip sormak ise yaklaştırır.",
      ],
      example: "Arkadaşının bayram yemeği seninkinden farklı olabilir. Fark, yanlış demek değildir.",
      questions: [
        ["Kültür yalnız hangisi değildir?", ["Yemek ve bayram", "Selamlaşma", "Bir kişinin o günkü keyfi", "Dil"], 2, "Kültür topluluğun süregelen birikimidir, anlık keyif değildir."],
        ["Farklı bir gelenek görünce saygılı tutum nedir?", ["Alay etmek", "Merak edip öğrenmek", "Yasaklamak", "Görmezden gelip dışlamak"], 1, "Sormak, saygılı bir ilgidir."],
        ["Aynı ülkede tek kültür mü vardır?", ["Evet", "Hayır, birden çok kültür bir arada olabilir", "Yalnız köylerde", "Kültür yoktur"], 1, "Birlikte yaşamak çeşitliliği de içerir."],
      ],
    },
    {
      title: "Yardımlaşma",
      paragraphs: [
        "Yardımlaşma, bir işi tek başına taşımamak demektir. Dayanışma, zor günün paylaştırılmasıdır.",
        "Küçük işler de dayanışmadır: hasta arkadaşa not çıkarmak, mahallede yaşlı birine poşet taşımak, sınıf panosunu birlikte hazırlamak.",
      ],
      example: "Sel sonrası sınıftaki herkes bir kalem ve bir defter getirirse yeni gelen öğrencinin çantası tamamlanır.",
      questions: [
        ["Dayanışma nedir?", ["Zor günü paylaşmak", "Yarışı kazanmak", "Yalnız çalışmak", "Bir haritayı ezberlemek"], 0, "Yük tek kişide kalmaz."],
        ["Hangisi küçük bir dayanışmadır?", ["Hasta arkadaşa ders notu çıkarmak", "Sırayı saklamak", "Alay etmek", "Eşyayı gizlemek"], 0, "Not çıkarmak işi paylaşmaktır."],
        ["Yardımlaşma neden grubu güçlendirir?", ["İşi tek kişiye yığmaz", "Kuralları siler", "Rolleri yok eder", "Kültürü tek tipleştirir"], 0, "Paylaşılan iş, grubu ayakta tutar."],
      ],
    },
  ]),
  unit("Evimiz Dünya", [7, 8, 9, 10, 11, 12, 13], [
    {
      title: "İlin konumu",
      paragraphs: [
        "Göreceli konum, bir yeri başka yerlere göre tarif etmektir. “İlimizin kuzeyinde şu il var” bir göreceli konumdur.",
        "Haritada yönler vardır: kuzey, güney, doğu, batı. Sağ ve sol, bakan kişiye göre değişir; yön adları değişmez.",
      ],
      example: "Ankara, İstanbul’un doğusundadır. Bu cümle Ankara’yı İstanbul’a göre tarif eder.",
      questions: [
        ["Göreceli konum nedir?", ["Bir yeri başka bir yere göre tarif etmek", "Yerin nüfusunu saymak", "Havanın sıcaklığı", "Bir gelenek"], 0, "Konum, referans bir yere göre söylenir."],
        ["Haritada değişmeyen yön hangisidir?", ["Sağ", "Kuzey", "İleri", "Yukarı, her kitabın kapağı"], 1, "Kuzey bir yön adıdır."],
        ["“İlimizin kuzeyinde şu il var” ne tür bir ifadedir?", ["Göreceli konum", "Bir duygu", "Bir kesir", "Bir rol"], 0, "Başka bir ile göre tarif vardır."],
      ],
    },
    {
      title: "Doğal ve beşerî çevre",
      paragraphs: [
        "Doğal çevre; dağ, akarsu, iklim ve bitki örtüsü gibi insanın yapmadığı unsurlardır. Beşerî çevre insanın yaptığıdır: yol, tarla, şehir, baraj.",
        "İnsan çevreyi değiştirir. Orman kesilirse sel artabilir. Ağaç dikilirse yamaç korunur.",
      ],
      example: "Dere doğal unsurdur. Derenin üstündeki köprü beşerî unsurdur.",
      questions: [
        ["Hangisi beşerî unsurdur?", ["Dağ", "Köprü", "Yağmur", "Göl"], 1, "Köprüyü insan yapar."],
        ["Ormanın azalması neyi artırabilir?", ["Seli", "Kuzey yönünü", "Nüfus cüzdanını", "Rol sayısını"], 0, "Ağaç, suyun hızını keser."],
        ["İklim hangi çevreye girer?", ["Doğal", "Beşerî", "Yalnız harita lejantı", "Bir duygu"], 0, "İklim insanın ürettiği bir eşya değildir."],
      ],
    },
    {
      title: "Afet ve komşular",
      paragraphs: [
        "Deprem, sel, heyelan ve orman yangını afet olabilir. Afetin etkisini azaltmak için toplanma alanı, deprem çantası ve sağlam bina gerekir.",
        "Türkiye’nin kara sınırı olan komşuları vardır. Komşu ülkeyi tanımak, sınırdaki ili haritada bulmakla başlar.",
      ],
      example: "Deprem anında pencere ve dolaptan uzaklaşılır, çök-kapan-tutun uygulanır. Sarsıntı bitince toplanma alanına gidilir.",
      questions: [
        ["Afetin etkisini azaltan hangisidir?", ["Toplanma alanını bilmek", "Asansöre koşmak", "Pencerenin yanında durmak", "Çantayı hazırlamamak"], 0, "Önceden bilinen alan, kalabalığı düzene sokar."],
        ["Deprem sarsıntısı sırasında ne yapılır?", ["Çök-kapan-tutun", "Balkondan bakmak", "Asansöre binmek", "Dolabın yanına saklanmak"], 0, "Sağlam bir kütlenin yanında kapanılır."],
        ["Komşu ülke haritada nasıl fark edilir?", ["Sınırın öte yanındaki ülke olarak", "Bir dağın rengi olarak", "Bir duygunun adı olarak", "Bir kesir olarak"], 0, "Sınır, iki ülkeyi ayıran çizgidir."],
      ],
    },
  ]),
  unit("Ortak mirasımız", [14, 15, 16, 17, 18, 19, 20], [
    {
      title: "Somut ve somut olmayan miras",
      paragraphs: [
        "Somut miras elle tutulur: ören yeri, cami, köprü, höyük. Somut olmayan miras söz, ezgi, oyun ve zanaat bilgisidir.",
        "İkisi de geçmişten bugüne kalan ortak emanetir. Korunmazsa bir daha yapılamayabilir.",
      ],
      example: "Safranbolu evleri somut mirastır. Mani söylemek somut olmayan mirastır.",
      questions: [
        ["Hangisi somut mirastır?", ["Bir türkü", "Bir köprü", "Bir masal", "Bir tekerleme"], 1, "Köprü elle tutulur bir yapıdır."],
        ["Somut olmayan mirasa örnek hangisidir?", ["Höyük", "Mani", "Sur", "Kervansaray"], 1, "Mani sözlü kültürdür."],
        ["Miras neden korunur?", ["Geleceğe kalsın diye", "Yeni olduğu için", "Bir duygu adı olduğu için", "Haritadan silinsin diye"], 0, "Emanet, sonraki kuşağa bırakılır."],
      ],
    },
    {
      title: "Anadolu’nun ilk yerleşimleri",
      paragraphs: [
        "İnsanlar suyun ve verimli toprağın yanında yerleşti. Çatalhöyük gibi yerler, tarım ve birlikte yaşamanın erken örnekleridir.",
        "Yerleşim; ev, depo, tapınma alanı ve mezarla anlaşılır. Duvar resmi ve çanak çömlek, günlük hayatı bugüne taşır.",
      ],
      example: "Bir höyükte bulunan tahıl tanesi, o insanların tarım yaptığını gösterir.",
      questions: [
        ["İlk yerleşimler neden su kenarında kuruldu?", ["Su ve verimli toprak yaşamı kolaylaştırdığı için", "Harita boş olsun diye", "Dağ olmasın diye", "Yön bulunsun diye"], 0, "Su, tarım ve içme için gereklidir."],
        ["Tahıl tanesi neyin kanıtı olabilir?", ["Tarım yapıldığının", "Elektriğin", "Bir ülkenin bugünkü sınırının", "Sürtünmenin"], 0, "Tahıl, ekip biçmeyi gösterir."],
        ["Çanak çömlek bize ne anlatır?", ["Günlük kullanım ve zanaatı", "Yarının hava durumunu", "Bir kesri", "Bir rolü"], 0, "Kap kacak, ev hayatının izidir."],
      ],
    },
    {
      title: "Mezopotamya ve Anadolu",
      paragraphs: [
        "Mezopotamya, Fırat ve Dicle arasındaki verimli bölgedir. Yazı, kanun ve şehir hayatı bu bölgenin insanlık tarihine katkılarındandır.",
        "Anadolu, bu birikimle ilişki içindeydi. Ticaret, yazı ve inançlar sınırların ötesine geçti. Ortak miras tek bir ülkenin malı gibi düşünülmez.",
      ],
      example: "Yazının kullanılması, anlaşmaların ve vergilerin kaydını mümkün kıldı.",
      questions: [
        ["Mezopotamya neresidir?", ["Fırat ve Dicle arası", "Bir ada ülkesi", "Kuzey kutbu", "Bir dağın adı yalnız"], 0, "İki nehir arası anlamına gelir."],
        ["Yazı neden önemli bir katkıdır?", ["Bilginin saklanmasını sağlar", "Yönü değiştirir", "Kütleyi ölçer", "Gölge yapar"], 0, "Söz uçup gider, yazı kalır."],
        ["Ortak miras için doğru olan hangisidir?", ["Yalnız bir şehre aittir", "Farklı toplulukların birbirine kattığı birikimdir", "Yeni icat edilmiştir", "Somut olmak zorundadır"], 1, "Ticaret ve kültür sınırları aşar."],
      ],
    },
  ]),
  unit("Yaşayan demokrasimiz", [21, 22, 23, 24, 25, 26, 27, 28], [
    {
      title: "Etkin vatandaş",
      paragraphs: [
        "Etkin vatandaş, kuralları bilen, hakkını arayan ve sorumluluğunu yerine getiren kişidir.",
        "Oy vermek büyüyünce bir haktır. Bugün ise sınıf başkanlığı seçiminde oy kullanmak, söz hakkı tanımak ve ortak karara uymak bu alışkanlığın provasıdır.",
      ],
      example: "Sınıf kurallarını birlikte yazmak, kararı başkasına bırakmamaktır.",
      questions: [
        ["Etkin vatandaş hangisini yapar?", ["Sorumluluğunu yerine getirir", "Kuralları yok sayar", "Yalnız kendi işine bakar", "Oy yerine başkası konuşsun ister"], 0, "Hak ile sorumluluk birlikte gider."],
        ["Sınıf başkanlığı seçimi neyin alıştırmasıdır?", ["Birlikte karar vermenin", "Bir haritayı ezberlemenin", "Bir deneyi yakmanın", "Bir kesri sadeleştirmenin"], 0, "Oy, ortak karara katılmaktır."],
        ["Hak ve sorumluluk için doğru olan hangisidir?", ["Yalnız hak vardır", "İkisi birbirini tamamlar", "Sorumluluk cezadır", "Hak bir miras eşyasıdır"], 1, "Söz hakkı varsa, başkasının sözüne de yer vardır."],
      ],
    },
    {
      title: "Hak ve başvuru",
      paragraphs: [
        "Eğitim, sağlık ve güvenli yaşamak temel haklardandır. Hakkın yanında başkasının hakkını çiğnememe sorumluluğu vardır.",
        "Bir sorun olunca doğru kuruma başvurulur. Okulda rehber öğretmen ve müdürlük, mahallede muhtar, can güvenliğinde 112 vardır.",
      ],
      example: "Kırık bir oyun parkı için muhtarlığa veya belediyeye haber verilir. Arkadaş kavgası önce öğretmenle konuşulur.",
      questions: [
        ["Can güvenliği için hangi numara aranır?", ["112", "Yalnız müdürün ev numarası", "Saat", "Posta kodu"], 0, "112 acil yardımdır."],
        ["Oyun parkındaki kırık salıncak kime haber verilir?", ["Belediye veya muhtarlığa", "Bir yabancıya", "Kimseye", "Yalnız sınıfa"], 0, "Park, belediyenin işidir."],
        ["Başkasının söz hakkını kesmek neden sorumluluğa uymaz?", ["Onun hakkını çiğner", "Bir gelenektir", "Bir yön tarifidir", "Bir afet planıdır"], 0, "Hak, herkes için geçerlidir."],
      ],
    },
  ]),
  unit("Hayatımızdaki ekonomi", [29, 30, 31, 32, 33, 34], [
    {
      title: "Kaynak ve israf",
      paragraphs: [
        "Kaynak sınırlıdır: su, elektrik, kâğıt, para, zaman. Verimli kullanmak, ihtiyacı karşılarken artığı çöpe atmamaktır.",
        "İsraf, işe yaramadan tüketmektir. Açık bırakılan musluk, yenmeden atılan ekmek israftır.",
      ],
      example: "Bir sayfanın iki yüzünü de kullanmak kâğıt kaynağını verimli kullanmaktır.",
      questions: [
        ["İsraf nedir?", ["İşe yaramadan tüketmek", "Tasarruf etmek", "Bütçe yapmak", "Kaynağı saymak"], 0, "Yarar sağlanmadan harcanan şey israftır."],
        ["Hangisi verimli kullanmadır?", ["Kâğıdın iki yüzünü doldurmak", "Musluğu açık bırakmak", "Ekmeği atmak", "Işığı boş odada yakmak"], 0, "Aynı kâğıttan daha çok iş çıkar."],
        ["Kaynak neden sınırlıdır?", ["Sonsuz değildir, tükenir veya pahalıya gelir", "Sayılmaz", "Yalnız paradır", "Bir duygudur"], 0, "Su ve kâğıt kendiliğinden bitmez sanılsa da sınırlıdır."],
      ],
    },
    {
      title: "Bütçe ve il ekonomisi",
      paragraphs: [
        "Bütçe, eldeki parayı ihtiyaç ve istek arasında paylaştırma planıdır. İhtiyaç, olmadan yaşaması zor olandır. İstek, olsa iyi olandır.",
        "Bir ilin ekonomisi tarım, sanayi, turizm veya ticaret üzerine kurulabilir. İlin kaynağı, insanların geçim yolunu belirler.",
      ],
      example: "Harçlık 100 lira ise önce servis ve yemek, sonra çıkartma düşünülür. Çıkartma istektir.",
      questions: [
        ["İhtiyaç ile istek farkı nedir?", ["İhtiyaç onsuz zor olan, istek olsa iyi olandır", "İkisi aynıdır", "İstek her zaman önce gelir", "İhtiyaç bir haritadır"], 0, "Bütçe önce ihtiyacı karşılar."],
        ["100 liranın önce yemeğe ayrılması neden doğrudur?", ["Yemek ihtiyaçtır", "Çıkartma daha önemlidir", "Para sınırsızdır", "Bütçe yasaktır"], 0, "Öncelik ihtiyaçtadır."],
        ["Deniz kenarındaki bir ilde geçim yolu ne olabilir?", ["Turizm ve balıkçılık", "Yalnız çöl ticareti", "Hiçbir şey", "Yalnız madencilik her ilde"], 0, "İlin kaynağı işini şekillendirir."],
      ],
    },
  ]),
  unit("Teknoloji ve sosyal bilimler", [35, 36], [
    {
      title: "Teknolojinin etkisi",
      paragraphs: [
        "Teknoloji, işi kolaylaştıran araç ve yöntemdir. Haberleşme hızlandı, harita cebe sığdı, uzaktaki sınıfla ders yapılabildi.",
        "Her kolaylık yeni bir sorumluluk getirir. Ekran başında geçirilen uzun süre uykuyu ve oyunu azaltabilir.",
      ],
      example: "Grup ödevi ortak belgede yazılınca herkes aynı sürümü görür. Yine de kim yazacak, önceden bölünmelidir.",
      questions: [
        ["Teknoloji nedir?", ["İşi kolaylaştıran araç ve yöntem", "Yalnız telefon markası", "Bir afet", "Bir yön"], 0, "Araç, bir işi daha çabuk yapar."],
        ["Ekran süresinin uzaması neyi azaltabilir?", ["Uykuyu ve hareketi", "Elektriği sonsuz yapmak", "Yazıyı", "Yönleri"], 0, "Zaman sınırlıdır, ekrana gidince başka işe az kalır."],
        ["Ortak belge neyi kolaylaştırır?", ["Aynı metni birlikte görmeyi", "Ödevi yok saymayı", "Haritayı silmeyi", "Bütçeyi kapatmayı"], 0, "Herkes son hâli görür."],
      ],
    },
    {
      title: "Bilinçli kullanım",
      paragraphs: [
        "Bilgiyi paylaşmadan önce kaynağına bakılır. Tanımadığın bağlantı açılmaz. Başkasının fotoğrafı izinsiz yayılmaz.",
        "Şifre arkadaşla paylaşılmaz. Rahatsız eden bir mesajda ekran görüntüsü alınıp güvendiğin bir yetişkine söylenir.",
      ],
      example: "“Bedava tablet” diye gelen ileti bir tuzaktır. Adres, okulun sitesi değilse tıklanmaz.",
      questions: [
        ["Gelen bağlantı ne zaman açılır?", ["Kaynağı güvenilirse", "Her zaman", "Korkutucuysa hemen", "Şifre isteyince sevinçle"], 0, "Tanıdık ve doğru adres gerekir."],
        ["Başkasının fotoğrafını izinsiz paylaşmak neden yanlıştır?", ["Onun hakkını çiğner", "Teknolojiyi hızlandırır", "Bir bütçedir", "Bir yöndür"], 0, "Görüntü de kişisel haktır."],
        ["Rahatsız edici mesajda ne yapılır?", ["Güvendiğin bir yetişkine söylenir", "Aynı şekilde cevap yarışı", "Şifre yollanır", "Gizlenir ve büyütülür"], 0, "Haberdar edilen yetişkin yardım eder."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Dört kavram",
      paragraphs: [
        "Sosyal etkinlik haftasında yeni ünite yok. Yılın dört kavramı: rol, göreceli konum, miras ve bütçe.",
        "Rol grupta senden beklenendir. Konum bir yeri başka yere göre tarif eder. Miras geçmişten kalan emanettir. Bütçe parayı paylaştırma planıdır.",
      ],
      example: "Köprü somut mirastır. “İlimizin doğusunda” göreceli konumdur.",
      questions: [
        ["Somut mirasa örnek hangisidir?", ["Köprü", "Mani", "Bir duygu", "Bir bütçe"], 0, "Köprü elle tutulur."],
        ["Önce ihtiyacın ayrıldığı plana ne denir?", ["Bütçe", "Afet", "Yön", "Höyük"], 0, "Bütçe, paranın planıdır."],
        ["“Kuzeyinde şu il var” neyi anlatır?", ["Göreceli konumu", "Bir kesri", "Bir devreyi", "Bir duyguyu"], 0, "Yer, başka bir yere göre söylenmiştir."],
      ],
    },
  ]),
]

export const grade5 = { Matematik: matematik, Fen: fen, Türkçe: turkce, Sosyal: sosyal }
