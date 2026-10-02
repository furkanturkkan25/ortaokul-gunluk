import { unit } from "../lib/unit.js"

const matematik = [
  unit("Çarpanlar ve katlar", [1], [
    {
      title: "Çarpan ve kat",
      paragraphs: [
        "Bir doğal sayıyı kalan bırakmadan bölen sayılara çarpan denir. 12’nin çarpanları 1, 2, 3, 4, 6 ve 12’dir.",
        "12’nin katları 12, 24, 36… diye devam eder. Bir sayının her katı, o sayıya bölünür.",
      ],
      example: "18’in çarpanlarını bulurken 18’i 1’den 18’e kadar kalan bırakmadan bölenler yazılır: 1, 2, 3, 6, 9, 18.",
      questions: [
        ["12’nin çarpanı olmayan hangisidir?", ["3", "4", "5", "6"], 2, "12 ÷ 5 kalan bırakır."],
        ["Hangisi 7’nin katıdır?", ["14", "15", "16", "18"], 0, "14 = 7 × 2."],
        ["Bir sayının en küçük pozitif çarpanı hangisidir?", ["0", "1", "Kendisi", "2"], 1, "Her doğal sayı 1’e bölünür."],
      ],
    },
    {
      title: "Ortak kat ve ortak bölen",
      paragraphs: [
        "İki sayının ortak katı, ikisinin de katı olan sayıdır. 4 ve 6’nın ortak katları 12, 24, 36…",
        "En küçük ortak kat, bu ortak katların en küçüğüdür. 4 ve 6 için 12’dir. Ortak bölen ise ikisini de bölen sayıdır.",
      ],
      example: "6 ve 8’in en küçük ortak katı 24’tür. Ortak bölenleri 1 ve 2’dir; en büyüğü 2’dir.",
      questions: [
        ["4 ve 6’nın en küçük ortak katı kaçtır?", ["12", "24", "2", "4"], 0, "12, ikisinin de katı olan en küçük sayıdır."],
        ["6 ve 8’in en büyük ortak böleni kaçtır?", ["1", "2", "4", "24"], 1, "İkisini de bölen en büyük sayı 2’dir."],
        ["Ortak kat ne demektir?", ["İki sayının da katı olan sayı", "Yalnız küçük olan", "Toplamları", "Farkları"], 0, "Ortak kat, iki listede birden vardır."],
      ],
    },
  ]),
  unit("Bölünebilme", [2], [
    {
      title: "2, 5 ve 10",
      paragraphs: [
        "Son rakamı çift olan sayılar 2’ye bölünür. Son rakamı 0 veya 5 olanlar 5’e bölünür.",
        "Son rakamı 0 olanlar 10’a bölünür. 10’a bölünen sayı hem 2’ye hem 5’e bölünür.",
      ],
      example: "230, 2’ye, 5’e ve 10’a bölünür. 235 yalnız 5’e bölünür.",
      questions: [
        ["Hangisi 2’ye bölünür?", ["231", "448", "75", "19"], 1, "448’in son rakamı çifttir."],
        ["235 hangi sayıya kesinlikle bölünür?", ["2", "5", "10", "4"], 1, "Son rakam 5’tir."],
        ["10’a bölünen bir sayı için doğru olan hangisidir?", ["Son rakamı 0’dır", "Son rakamı 5’tir", "Tek sayıdır", "3’e her zaman bölünür"], 0, "10’un katları 0 ile biter."],
      ],
    },
    {
      title: "3, 4 ve 9",
      paragraphs: [
        "Rakamları toplamı 3’ün katıysa sayı 3’e, 9’un katıysa 9’a bölünür. 4 için son iki basamağa bakılır.",
        "Son iki basamağın oluşturduğu sayı 4’ün katıysa sayı 4’e bölünür. 6’ya bölünmek için sayı hem 2’ye hem 3’e bölünmelidir.",
      ],
      example: "126: rakam toplamı 9, yani 3’e ve 9’a bölünür. Son rakam çift olduğu için 2’ye de bölünür; öyleyse 6’ya da bölünür.",
      questions: [
        ["126, 9’a bölünür mü?", ["Evet, rakam toplamı 9", "Hayır", "Yalnız 5’e bölünür", "Son rakamı 6 diye hayır"], 0, "1 + 2 + 6 = 9."],
        ["316, 4’e bölünür mü?", ["Evet, 16 dörde bölünür", "Hayır", "Yalnız 5’e", "Rakam toplamına bakılır"], 0, "Son iki basamak 16’dır ve 16 ÷ 4 = 4."],
        ["6’ya bölünmenin koşulu nedir?", ["Hem 2’ye hem 3’e bölünmek", "Yalnız 10’a bölünmek", "Son rakamın 6 olması", "Tek sayı olmak"], 0, "6 = 2 × 3 olduğundan iki kural birlikte aranır."],
      ],
    },
  ]),
  unit("Asal sayılar", [3], [
    {
      title: "Asal ve aralarında asal",
      paragraphs: [
        "Asal sayı, 1’den büyük ve yalnız 1 ile kendisine bölünen sayıdır. 2, 3, 5, 7, 11 asaldır. 1 asal değildir.",
        "2, tek çift asal sayıdır. Asal çarpan, bir sayıyı bölen asal sayıdır. 12 = 2 × 2 × 3.",
      ],
      example: "30’un asal çarpanları 2, 3 ve 5’tir çünkü 30 = 2 × 3 × 5.",
      questions: [
        ["Hangisi asaldır?", ["1", "9", "15", "11"], 3, "11 yalnız 1 ve 11’e bölünür."],
        ["1 neden asal değildir?", ["Yalnız bir pozitif böleni vardır, iki değil", "Çifttir", "10’dan büyüktür", "Rakamları toplamı 1’dir"], 0, "Asalın tam iki pozitif böleni olmalıdır."],
        ["30’un asal çarpanları hangileridir?", ["2, 3 ve 5", "6 ve 5", "10 ve 3", "15 ve 2"], 0, "6, 10 ve 15 asal değildir."],
      ],
    },
    {
      title: "Çarpan ağacı",
      paragraphs: [
        "Çarpan ağacı, sayıyı asal çarpanlara ayırır. Bölmeye asal sayılarla devam edilir, dallar asal kalınca durulur.",
        "Aynı asal birden çok kez gelebilir. 36 = 2 × 2 × 3 × 3 = 2² × 3².",
      ],
      example: "20 önce 2 × 10, 10 da 2 × 5 diye ayrılır. 20 = 2 × 2 × 5.",
      questions: [
        ["20’nin asal çarpanlara ayrılmış hâli hangisidir?", ["4 × 5", "2 × 2 × 5", "10 × 2", "20 × 1"], 1, "4 ve 10 asal değildir; 2 × 2 × 5 asaldır."],
        ["36’da 3 kaç kez çarpılır?", ["Bir", "İki", "Üç", "Hiç"], 1, "36 = 2² × 3²."],
        ["Çarpan ağacı neden asalda durur?", ["Asal daha küçük asal çarpana ayrılmaz", "Sayı biter", "1 asaldır", "Çift sayılar ayrılamaz"], 0, "Asalın 1 ve kendisinden başka böleni yoktur."],
      ],
    },
  ]),
  unit("Deneysel olasılık", [4], [
    {
      title: "Deney ve sıklık",
      paragraphs: [
        "Deneysel olasılık, bir olayı deneyerek bulunur. Olayın gerçekleşme sayısı, toplam deneme sayısına bölünür.",
        "Bir madeni para 20 kez atılıp 9 kez tura gelirse tura için deneysel olasılık 9/20’dir.",
      ],
      example: "Bir torbadan 10 çekilişte 4 kez mavi gelirse mavinin deneysel olasılığı 4/10, yani 2/5’tir.",
      questions: [
        ["20 atışta 9 tura gelirse deneysel olasılık nedir?", ["9/20", "20/9", "9/11", "1/2"], 0, "Gerçekleşen, toplam denemeye bölünür."],
        ["10 çekilişte 4 mavi, sadeleştirilince nedir?", ["4/10", "2/5", "5/2", "1/4"], 1, "4/10 = 2/5. İkisi de doğrudur; sade hâl 2/5’tir."],
        ["Deney sayısı artınca sonuç neye yaklaşır?", ["Kuramsal olasılığa", "Her zaman 1’e", "Sıfıra kesin", "Zar yüzüne"], 0, "Çok deneme, beklenen orana yaklaşır."],
      ],
    },
    {
      title: "Sonucu yorumlamak",
      paragraphs: [
        "Az deneme yanıltabilir. 4 atışta 4 tura, paranın her zaman tura geleceği anlamına gelmez.",
        "Olasılık 0 ile 1 arasındadır. 0 olanaksız deneyi, 1 kesin deneyi anlatır. Deneysel değer de bu aralıktadır.",
      ],
      example: "50 atışta 24 yazı, 26 tura varsa ikisi de 1/2 civarındadır.",
      questions: [
        ["4 atışta 4 tura gelmesi neyi kanıtlamaz?", ["Paranın her zaman tura geleceğini", "O denemede 4 tura geldiğini", "Deney yapıldığını", "Sayının kaydedildiğini"], 0, "Küçük örnek genellenmez."],
        ["Olasılık hangi aralıktadır?", ["0 ile 1", "1 ile 10", "Yalnız tam sayılar", "Negatif sayılar"], 0, "0 hiç, 1 her zaman demektir."],
        ["50 atışta 26 tura, 1/2’ye yakın mıdır?", ["Evet", "Hayır, 0’dır", "Kesindir", "Olanaksızdır"], 0, "26/50 = 0,52, yarıma yakındır."],
      ],
    },
  ]),
  unit("Ondalık gösterim", [5], [
    {
      title: "Basamaklar",
      paragraphs: [
        "Ondalık gösterimde virgülün sağı onda birler, yüzde birler, binde birlerdir. 3,25; 3 tam, 2 onda bir ve 5 yüzde bir demektir.",
        "3,25 = 3 + 2/10 + 5/100 = 325/100. Sondaki sıfır, 3,50 ile 3,5’te değeri değiştirmez.",
      ],
      example: "0,4 ile 0,40 aynı miktardır. 0,4 = 4/10 = 2/5.",
      questions: [
        ["3,25 kesir olarak hangisidir?", ["325/100", "325/10", "32/5", "3/25"], 0, "İki ondalık basamak yüzde bir demektir."],
        ["0,4 ile 0,40 için doğru olan hangisidir?", ["Eşittir", "0,40 on kat büyüktür", "0,4 daha büyüktür", "Karşılaştırılamaz"], 0, "Sondaki sıfır değeri değiştirmez."],
        ["Virgülden sonraki ilk basamak nedir?", ["Onda birler", "Yüzde birler", "Binler", "Birler"], 0, "İlk basamak 1/10 değerindedir."],
      ],
    },
    {
      title: "Karşılaştırma",
      paragraphs: [
        "Önce tam kısımlara bakılır. Tam kısımlar eşitse onda birler, sonra yüzde birler karşılaştırılır.",
        "4,7 > 4,65 çünkü 4,70 ile 4,65 yazılınca yüzde birler basamağında 0, 5’ten büyüktür? Hayır: 7 onda bir, 6 onda birden büyüktür. 4,70 > 4,65.",
      ],
      example: "2,08 < 2,1 çünkü 2,08 = 2,08 ve 2,1 = 2,10.",
      questions: [
        ["Hangisi daha büyüktür?", ["4,65", "4,7", "Eşit", "4,07"], 1, "4,7 = 4,70 ve 70 > 65."],
        ["2,08 ve 2,1 için doğru olan hangisidir?", ["2,08 daha büyüktür", "2,1 daha büyüktür", "Eşittir", "İkisi de 3’tür"], 1, "2,10 > 2,08."],
        ["Karşılaştırmaya nereden başlanır?", ["Tam kısımdan", "En sağdaki basamaktan her zaman", "Virgülden", "Paydadan"], 0, "Tam kısım büyükse sayı büyüktür."],
      ],
    },
  ]),
  unit("Kesir ve bölme", [6], [
    {
      title: "Kesir bir bölmedir",
      paragraphs: [
        "a/b kesri, a ÷ b bölmesi demektir. 3/4 = 0,75. Pay paydadan küçükse sonuç 1’den küçüktür.",
        "Pay paydaya eşitse kesir 1’dir. Pay büyükse sonuç 1’den büyüktür ve tam sayılı kesre çevrilebilir.",
      ],
      example: "5/4 = 1,25 = 1 tam 1/4.",
      questions: [
        ["3/4 ondalık olarak hangisidir?", ["0,75", "1,25", "0,34", "3,4"], 0, "3 ÷ 4 = 0,75."],
        ["5/4 tam sayılı kesir olarak nedir?", ["1 tam 1/4", "4 tam 1/5", "5 tam 1/4", "1 tam 4/5"], 0, "5 ÷ 4 = 1 kalan 1."],
        ["Pay paydaya eşitse kesir kaçtır?", ["0", "1", "Payın kendisi, 1’den büyük", "Yarım"], 1, "4/4 = 1."],
      ],
    },
    {
      title: "Paylaştırmak",
      paragraphs: [
        "3 elmayı 4 kişiye eşit bölmek 3 ÷ 4 = 3/4 elma demektir. Herkes bir elmadan az alır.",
        "Bölme, eşit pay veya “kaç grup eder” sorusudur. Kesir dili ikisini de anlatır.",
      ],
      example: "2 metre kurdele 5 kişiye eşit bölünürse kişi başı 2/5 metredir.",
      questions: [
        ["3 elma 4 kişiye eşit bölünürse kişi başı ne kadardır?", ["4/3", "3/4", "1", "7"], 1, "3 ÷ 4 = 3/4."],
        ["2 metre 5 kişiye bölünürse kişi başı kaç metredir?", ["5/2", "2/5", "10", "3"], 1, "2 ÷ 5 = 2/5."],
        ["Pay > payda ise sonuç nasıldır?", ["1’den büyüktür", "1’den küçüktür", "Her zaman yarımdır", "0’dır"], 0, "Bölünen, bölenden büyükse sonuç 1’i aşar."],
      ],
    },
  ]),
  unit("Kesir problemleri", [7, 8, 9, 10, 11, 12], [
    {
      title: "Birimin kesri",
      paragraphs: [
        "Bir bütünün kesrini bulmak için bütün, kesirle çarpılır. 24’ün 3/8’i: önce 24 ÷ 8 = 3, sonra 3 × 3 = 9.",
        "Sıra değişebilir: 24 × 3 ÷ 8. Bölme tam bölünüyorsa önce bölmek sayıyı küçük tutar.",
      ],
      example: "40 dakikanın 1/5’i 8 dakikadır.",
      questions: [
        ["24’ün 3/8’i kaçtır?", ["9", "8", "12", "16"], 0, "24 ÷ 8 = 3, 3 × 3 = 9."],
        ["40’ın 1/5’i kaçtır?", ["8", "5", "20", "45"], 0, "40 ÷ 5 = 8."],
        ["Bir bütünün kesri nasıl bulunur?", ["Bütün kesirle çarpılır", "Kesir ikiye bölünür", "Payda atılır", "Yalnız pay yazılır"], 0, "Çarpma, parçayı sayıya çevirir."],
      ],
    },
    {
      title: "Toplama ve çıkarma",
      paragraphs: [
        "Paydalar aynıysa paylar toplanır veya çıkarılır. 3/8 + 2/8 = 5/8.",
        "Paydalar farklıysa ortak payda bulunur. 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
      ],
      example: "Bir deponun 1/3’ü sabah, 1/6’sı öğlen dolarsa toplam 1/2’si dolmuştur.",
      questions: [
        ["3/8 + 2/8 kaçtır?", ["5/8", "5/16", "6/8", "1/8"], 0, "Paydalar aynı, paylar toplanır."],
        ["1/2 + 1/4 kaçtır?", ["2/6", "3/4", "1/4", "2/4"], 1, "1/2 = 2/4, toplam 3/4."],
        ["1/3 + 1/6 kaçtır?", ["1/2", "2/9", "1/9", "2/3"], 0, "1/3 = 2/6, 2/6 + 1/6 = 3/6 = 1/2."],
      ],
    },
    {
      title: "Kalanı bulmak",
      paragraphs: [
        "Bir kısmı kullanılan bütünün kalanı, 1’den o kesir çıkarılarak bulunur. 5/8’i içilen suyun kalanı 3/8’dir.",
        "Sonra kalan, gerçek miktara çevrilebilir. 32 litrenin 3/8’i 12 litredir.",
      ],
      example: "Kitabın 2/5’i okunduysa okunmayan kısım 3/5’tir.",
      questions: [
        ["32 litrenin 5/8’i içilirse kalan kaç litredir?", ["12", "20", "8", "4"], 0, "Kalan 3/8’dir. 32 ÷ 8 × 3 = 12."],
        ["2/5’i biten işin kalanı hangi kesirdir?", ["3/5", "2/5", "5/2", "1/5"], 0, "1 − 2/5 = 3/5."],
        ["Kalanı kesirle bulmanın yolu nedir?", ["1’den kullanılan kesri çıkarmak", "İki kesri çarpmak her zaman", "Paydayı silmek", "Payı ikiye katlamak"], 0, "Bütün 1 kabul edilir."],
      ],
    },
  ]),
  unit("Uzunluk ölçme", [13], [
    {
      title: "Birimler",
      paragraphs: [
        "1 km = 1 000 m, 1 m = 100 cm, 1 cm = 10 mm. Büyük birimden küçüğe geçerken ilgili sayıyla çarpılır.",
        "3,5 m = 350 cm. 250 cm = 2,5 m. Virgül, birim değişince kayar.",
      ],
      example: "Bir kapı 2 m 10 cm ise 210 cm’dir.",
      questions: [
        ["3,5 m kaç cm’dir?", ["35", "350", "3 500", "0,35"], 1, "1 m = 100 cm, 3,5 × 100 = 350."],
        ["250 cm kaç m’dir?", ["25", "2,5", "2500", "0,25"], 1, "250 ÷ 100 = 2,5."],
        ["1 km kaç m’dir?", ["10", "100", "1 000", "10 000"], 2, "Kilometre bin metredir."],
      ],
    },
    {
      title: "Çevre problemi",
      paragraphs: [
        "Birim aynı yapılmadan kenarlar toplanmaz. 2 m ile 40 cm toplanacaksa 200 cm ve 40 cm yazılır.",
        "Dikdörtgen bahçenin çevresi hâlâ 2 × (a + b)’dir. Sonuç, sorunun istediği birimde bırakılır.",
      ],
      example: "Kenarları 4 m ve 150 cm olan bahçenin çevresi için 150 cm = 1,5 m alınır. Çevre 2 × (4 + 1,5) = 11 m.",
      questions: [
        ["4 m ve 1,5 m’lik dikdörtgenin çevresi kaç m’dir?", ["5,5", "11", "6", "22"], 1, "2 × 5,5 = 11."],
        ["2 m + 40 cm toplamı kaç cm’dir?", ["42", "240", "60", "2,4"], 1, "2 m = 200 cm, 200 + 40 = 240."],
        ["Birimler aynı yapılmadan toplamak neden yanlıştır?", ["Farklı büyüklükler birbirine eklenmiş olur", "Sonuç her zaman doğrudur", "Metre diye bir şey yoktur", "Çevre alan olur"], 0, "40 cm, 40 m değildir."],
      ],
    },
  ]),
  unit("Veri dağılımları", [14, 15, 16, 17, 18], [
    {
      title: "Kategorik ve nicel",
      paragraphs: [
        "Kategorik veri grup adıdır: ulaşım türü. Nicel veri sayılır veya ölçülür: kardeş sayısı, boy.",
        "Kardeş sayısı kesikli nicel veridir; 2,5 kardeş olmaz. Boy sürekli nicel veridir; 148,5 cm olabilir.",
      ],
      example: "Göz rengi kategorik, ayakkabı numarası kesikli, sıcaklık süreklidir.",
      questions: [
        ["Hangisi süreklidir?", ["Göz rengi", "Kardeş sayısı", "Boy uzunluğu", "En sevilen ders"], 2, "Boy ara değer alabilir."],
        ["Kardeş sayısı neden kesiklidir?", ["Yarım kardeş sayısı olmaz", "Ölçülemez", "Bir renktir", "Grafikte çizilmez"], 0, "0, 1, 2 gibi ayrı değerler alır."],
        ["Ulaşım türü hangi veridir?", ["Kategorik", "Sürekli nicel", "Kuvvet", "Kesir işlemi"], 0, "Yürüyüş, servis, bisiklet birer gruptur."],
      ],
    },
    {
      title: "Grafik okumak",
      paragraphs: [
        "Sütun grafiği kategorileri karşılaştırır. Çizgi grafiği bir niceliğin zamana göre değişimini gösterir.",
        "Grafikte en yüksek nokta en büyük değeri, düşen çizgi azalışı anlatır. Eksen okunmadan hüküm verilmez.",
      ],
      example: "Bir bitkinin boyu pazartesi 8 cm, cuma 11 cm ise çizgi yükselir. Artış 3 cm’dir.",
      questions: [
        ["Zamana göre değişim hangi grafikte daha uygundur?", ["Çizgi grafiği", "Yalnız pasta, her zaman", "Yazısız sütun", "Harita"], 0, "Çizgi, değişimin yönünü gösterir."],
        ["8 cm’den 11 cm’ye çıkan bitkinin artışı kaç cm’dir?", ["3", "19", "8", "11"], 0, "11 − 8 = 3."],
        ["Düşen çizgi ne anlatır?", ["Değerin azaldığını", "Kategorinin adını", "Kesin artışı", "Birimin silindiğini"], 0, "Aşağı yön azalıştır."],
      ],
    },
  ]),
  unit("Açılar ve dörtgenler", [19, 20, 21, 22], [
    {
      title: "Paralel doğrular",
      paragraphs: [
        "İki paralel doğruyu bir kesen keser. Yöndeş açılar eşittir. İç ters açılar da eşittir.",
        "Aynı taraftaki iç açılar bütünler açıdır; toplamları 180°’dir.",
      ],
      example: "Yöndeş açı 70° ise ona karşılık gelen yöndeş açı da 70°’dir. Yanındaki iç açı 110°’dir.",
      questions: [
        ["Paralel iki doğrudan birindeki yöndeş açı 70° ise öteki yöndeş açı kaç derecedir?", ["20", "70", "110", "180"], 1, "Yöndeş açılar eşittir."],
        ["Aynı taraftaki iç açılar toplamı kaç derecedir?", ["90", "180", "360", "70"], 1, "Bu açılar bütünlerdir."],
        ["İç ters açılar nasıldır?", ["Eşittir", "Toplamları 90’dır", "Biri ötekinin iki katıdır her zaman", "Ölçülemez"], 0, "İç ters açılar eşittir."],
      ],
    },
    {
      title: "Üçgenin açıları",
      paragraphs: [
        "Bir üçgenin iç açıları toplamı 180°’dir. İki açı biliniyorsa üçüncüsü 180’den çıkarılarak bulunur.",
        "Eşkenar üçgende her açı 60°’dir. Dik üçgende dik açı 90°, öteki iki açı toplamı 90°’dir.",
      ],
      example: "Açılar 50° ve 60° ise üçüncü açı 70°’dir.",
      questions: [
        ["50° ve 60° olan üçgende üçüncü açı kaç derecedir?", ["70", "110", "90", "180"], 0, "180 − 110 = 70."],
        ["Üçgenin iç açıları toplamı kaç derecedir?", ["90", "180", "360", "60"], 1, "Her üçgende toplam 180°’dir."],
        ["Eşkenar üçgende bir açı kaç derecedir?", ["30", "60", "90", "120"], 1, "180 üçe bölünür."],
      ],
    },
    {
      title: "Özel dörtgenler",
      paragraphs: [
        "Paralelkenarda karşılıklı kenarlar paralel ve eşittir, karşılıklı açılar eşittir. Dikdörtgen, açıları 90° olan paralelkenardır.",
        "Eşkenar dörtgenin bütün kenarları eşittir. Karenin hem kenarları hem açıları eşittir. Yamukta en az bir çift kenar paraleldir.",
      ],
      example: "Her kare bir dikdörtgendir ama her dikdörtgen kare değildir.",
      questions: [
        ["Dikdörtgenin açıları kaç derecedir?", ["60", "90", "120", "45"], 1, "Dikdörtgende dört açı da diktir."],
        ["Her kare dikdörtgen midir?", ["Evet", "Hayır", "Yalnız kenarı 1 ise", "Yalnız açısı 60 ise"], 0, "Karenin açıları 90°, karşılıklı kenarları paraleldir."],
        ["Eşkenar dörtgende ne eşittir?", ["Bütün kenarlar", "Yalnız iki açı", "Hiçbir kenar", "Yalnız köşegenler her zaman"], 0, "Dört kenar da aynı uzunluktadır."],
      ],
    },
  ]),
  unit("Bilinmeyen nicelik", [23, 24, 25], [
    {
      title: "Harfli ifade",
      paragraphs: [
        "Bilinmeyen, henüz değeri söylenmemiş niceliktir ve harfle gösterilir. n + 5, bir sayıdan 5 fazla demektir.",
        "Eşitlik, iki tarafın aynı miktar olduğunu söyler. n + 5 = 12 ise n = 7.",
      ],
      example: "Bir kalem x lira, üç kalem 3x liradır. 3x = 36 ise x = 12.",
      questions: [
        ["n + 5 = 12 ise n kaçtır?", ["17", "7", "5", "60"], 1, "12 − 5 = 7."],
        ["Bir kalem x lira ise 3 kalem nasıl yazılır?", ["x + 3", "3x", "x³", "3 + x + 3"], 1, "Üç kat, 3x’tir."],
        ["3x = 36 ise x kaçtır?", ["12", "33", "39", "108"], 0, "36 ÷ 3 = 12."],
      ],
    },
    {
      title: "Problemi denkleme çevirmek",
      paragraphs: [
        "“Bir sayıdan 4 çıkınca 15 kalıyor” cümlesi n − 4 = 15 diye yazılır. Sözcükler işleme çevrilir.",
        "Fazlası toplama, eksiği çıkarma, katı çarpma, payı bölme olur.",
      ],
      example: "Bir sayının 2 katının 3 fazlası 17 ise 2n + 3 = 17. 2n = 14, n = 7.",
      questions: [
        ["“4 çıkınca 15 kalıyor” hangi eşitliktir?", ["n + 4 = 15", "n − 4 = 15", "4n = 15", "n ÷ 4 = 15"], 1, "Eksilme çıkarmadır."],
        ["2n + 3 = 17 ise n kaçtır?", ["7", "10", "14", "20"], 0, "2n = 14, n = 7."],
        ["“Katı” hangi işlemdir?", ["Çarpma", "Çıkarma", "Yalnız toplama", "Karşılaştırma"], 0, "2 katı, 2 ile çarpmaktır."],
      ],
    },
  ]),
  unit("Örüntü", [26, 27], [
    {
      title: "Kuralı bulmak",
      paragraphs: [
        "Örüntü, kuralı olan dizidir. Artış sabit olmayabilir. 2, 4, 8, 16 dizisi iki katına çıkar.",
        "Kural bulununca istenen adım hesaplanır. 3, 7, 11, 15 dizisi dörder artar; 5. terim 19’dur.",
      ],
      example: "Şekil örüntüsünde her adım 2 kibrit ekleniyorsa 1. adım 4 kibritse 4. adım 10 kibrittir.",
      questions: [
        ["3, 7, 11, 15 dizisinin 5. terimi kaçtır?", ["17", "19", "20", "30"], 1, "Kural +4’tür. 15 + 4 = 19."],
        ["2, 4, 8, 16 dizisinin kuralı nedir?", ["+2", "×2", "+4", "÷2"], 1, "Her terim öncekinin iki katıdır."],
        ["4 kibritten başlayıp her adım 2 kibrit eklenen örüntüde 4. adım kaçtır?", ["8", "10", "12", "6"], 1, "4, 6, 8, 10. Dördüncü adım 10’dur."],
      ],
    },
    {
      title: "Genel terim",
      paragraphs: [
        "Sabit artan örüntüde n. terim, başlangıç ve artışla yazılır. 5, 9, 13… için kural 4n + 1’dir.",
        "n = 1 iken 5, n = 2 iken 9 eder. Kural, birkaç terimde denenerek kontrol edilir.",
      ],
      example: "4n + 1 kuralında 10. terim 41’dir.",
      questions: [
        ["4n + 1 kuralında 10. terim kaçtır?", ["14", "41", "40", "11"], 1, "4 × 10 + 1 = 41."],
        ["5, 9, 13 dizisi 4n + 1 ile uyumlu mudur?", ["Evet", "Hayır", "Yalnız ilk terim", "Bu bir geometridir"], 0, "n = 1, 2, 3 için 5, 9, 13 çıkar."],
        ["Kural bulunduktan sonra ne yapılır?", ["Birkaç terimde denenir", "Dizi silinir", "Yalnız son terim atılır", "n = 0 kabul edilir"], 0, "Deneme, kuralın doğruluğunu gösterir."],
      ],
    },
  ]),
  unit("Cebirsel ifadeler", [28, 29], [
    {
      title: "Benzer terim",
      paragraphs: [
        "Aynı harfi aynı üs ile taşıyan terimler benzerdir. 3x ile 5x toplanır: 8x. 3x ile 5y toplanmaz.",
        "Sayı terimi de kendi arasında toplanır. 2x + 4 + 3x + 1 = 5x + 5.",
      ],
      example: "Bir kalem a, bir silgi b ise 2 kalem ve 3 silgi 2a + 3b’dir.",
      questions: [
        ["3x + 5x kaçtır?", ["8x", "15x", "8", "35x"], 0, "Benzer terimlerin katsayıları toplanır."],
        ["2x + 4 + 3x + 1 sadeleşince nedir?", ["5x + 5", "10x", "5x + 4", "6x"], 0, "x’ler 5x, sayılar 5 eder."],
        ["3x + 5y toplanıp tek terim olur mu?", ["Olur, 8xy", "Olmaz, benzer değiller", "15xy olur", "8 olur"], 1, "x ile y farklı niceliktir."],
      ],
    },
    {
      title: "Sözelden cebire",
      paragraphs: [
        "“Bir sayının 4 fazlası” n + 4, “3 eksiği” n − 3, “yarısı” n/2 diye yazılır.",
        "Parantez, önce yapılacak işlemi gösterir. 2 × (n + 3), sayının 3 fazlasının 2 katıdır. 2n + 3 ise kat alındıktan sonra 3 eklenmiş hâlidir.",
      ],
      example: "n = 5 iken 2(n + 3) = 16, 2n + 3 = 13. İki ifade aynı değildir.",
      questions: [
        ["“Bir sayının 4 eksiğinin 2 katı” hangisidir?", ["2n − 4", "2(n − 4)", "n − 8", "4 − 2n"], 1, "Önce 4 çıkarılır, sonra 2 ile çarpılır."],
        ["n = 5 iken 2n + 3 kaçtır?", ["13", "16", "10", "11"], 0, "10 + 3 = 13."],
        ["2(n + 3) ile 2n + 3 aynı mıdır?", ["Evet", "Hayır", "Yalnız n = 0 iken her zaman evet", "Yalnız harf aynıysa"], 1, "Birinde 3 de ikiye katlanır."],
      ],
    },
  ]),
  unit("Uzunluk ve alan birimleri", [30], [
    {
      title: "Alan birimine geçmek",
      paragraphs: [
        "1 m = 100 cm ise 1 m² = 100 × 100 = 10 000 cm²’dir. Uzunlukta 100, alanda 10 000 kat vardır.",
        "1 m² = 10 000 cm². 2 m² = 20 000 cm². Küçük birimden büyüğe geçerken bölünür.",
      ],
      example: "Kenarları 2 m ve 3 m olan odanın alanı 6 m², yani 60 000 cm²’dir.",
      questions: [
        ["1 m² kaç cm²’dir?", ["100", "1 000", "10 000", "100 000"], 2, "100 × 100 = 10 000."],
        ["2 m ve 3 m’lik odanın alanı kaç m²’dir?", ["5", "6", "10", "12"], 1, "2 × 3 = 6."],
        ["Uzunluk 100 kat değişirken alan neden 10 000 kat değişir?", ["İki kenar da 100 ile çarpıldığı için", "Yanlış bir kuraldır", "Yalnız çevre için", "Birimlerin adı aynıdır"], 0, "Alan iki uzunluğun çarpımıdır."],
      ],
    },
    {
      title: "Birimi seçmek",
      paragraphs: [
        "Odanın alanı m², pulun alanı cm² ile söylenir. Birim, ölçülen yere uygun olmalıdır.",
        "Çevre hâlâ uzunluk birimi, alan kare birimdir. İkisi aynı sayıda çıksa bile birim yazılır.",
      ],
      example: "3 cm ve 6 cm’lik kartın çevresi 18 cm, alanı 18 cm²’dir.",
      questions: [
        ["Bir pulun alanı hangi birimle daha uygundur?", ["km²", "cm²", "kg", "saniye"], 1, "Pul küçüktür, santimetrekare uygundur."],
        ["3 cm ve 6 cm’lik dikdörtgenin alanı kaç cm²’dir?", ["9", "18", "12", "36"], 1, "3 × 6 = 18."],
        ["Çevre ile alanın sayıları aynı çıkarsa birimler de aynı mıdır?", ["Evet", "Hayır", "İkisi de kilogramdır", "Birim yazılmaz"], 1, "cm ile cm² karıştırılmaz."],
      ],
    },
  ]),
  unit("Paralelkenar ve üçgenin alanı", [31, 32, 33], [
    {
      title: "Paralelkenar",
      paragraphs: [
        "Paralelkenarın alanı, taban çarpı yüksekliğidir. Yükseklik, tabana dik inen uzunluktur; yan kenar olmayabilir.",
        "Taban 8 cm, yükseklik 5 cm ise alan 40 cm²’dir. Eğik kenar 6 cm olsa bile çarpıma girmez.",
      ],
      example: "Paralelkenar, aynı taban ve yükseklikteki dikdörtgene dönüştürülebilir. Bu yüzden formül aynıdır.",
      questions: [
        ["Tabanı 8 cm, yüksekliği 5 cm olan paralelkenarın alanı kaç cm²’dir?", ["13", "26", "40", "80"], 2, "8 × 5 = 40."],
        ["Yükseklik nasıldır?", ["Tabana dik", "Her zaman eğik kenara eşit", "Çevredir", "Bir açıdır"], 0, "Yükseklik dik uzaklıkdır."],
        ["Eğik kenar 6 cm diye alana katılır mı?", ["Evet", "Hayır, formülde taban ve yükseklik vardır", "Yalnız karede", "Çevre yerine"], 1, "Alan = taban × yükseklik."],
      ],
    },
    {
      title: "Üçgen",
      paragraphs: [
        "Üçgenin alanı, aynı taban ve yükseklikteki paralelkenarın yarısıdır. Alan = (taban × yükseklik) / 2.",
        "Taban 8 cm, yükseklik 5 cm ise üçgenin alanı 20 cm²’dir.",
      ],
      example: "Dik üçgende dik kenarlar taban ve yükseklik seçilebilir. 6 cm ve 4 cm ise alan (6 × 4) / 2 = 12 cm².",
      questions: [
        ["Tabanı 8, yüksekliği 5 cm olan üçgenin alanı kaç cm²’dir?", ["40", "20", "13", "80"], 1, "40’ın yarısı 20’dir."],
        ["Dik kenarları 6 ve 4 cm olan üçgenin alanı kaç cm²’dir?", ["24", "12", "10", "48"], 1, "(6 × 4) / 2 = 12."],
        ["Üçgenin alanı paralelkenara göre nasıldır?", ["Aynı taban ve yükseklikte yarısıdır", "İki katıdır", "Eşittir her zaman", "Çevresine eşittir"], 0, "Üçgen, paralelkenarın yarısını kaplar."],
      ],
    },
  ]),
  unit("Çember ve çap", [34, 35, 36], [
    {
      title: "Çevre uzunluğu",
      paragraphs: [
        "Çemberin çevre uzunluğu, çap ile π sayısının çarpımıdır. Çevre = π × d. Yarıçap kullanılırsa 2 × π × r.",
        "π yaklaşık 3,14 alınır. Çap 10 cm ise çevre yaklaşık 31,4 cm’dir.",
      ],
      example: "Yarıçap 7 cm ise çap 14 cm, çevre yaklaşık 14 × 3 = 42 cm diye tahmin edilir. Daha ince hesap 14 × 3,14’tür.",
      questions: [
        ["Çapı 10 cm olan çemberin çevresi yaklaşık kaç cm’dir? (π = 3,14)", ["13,14", "31,4", "62,8", "314"], 1, "10 × 3,14 = 31,4."],
        ["Çevre formülü hangisidir?", ["π × d", "2 × d", "π × r", "d ÷ π her zaman"], 0, "Çevre, çapın π katıdır."],
        ["Yarıçap 7 cm ise çap kaç cm’dir?", ["3,5", "7", "14", "21"], 2, "Çap, yarıçapın iki katıdır."],
      ],
    },
    {
      title: "Merkez açı ve yay",
      paragraphs: [
        "Merkez açı, köşesi çemberin merkezinde olan açıdır. Gördüğü yay, çemberin o açıya karşılık gelen parçasıdır.",
        "Tam çember 360°’dir. 180°’lik merkez açı, çemberin yarısını görür. Yayın uzunluğu da çemberin aynı oranıdır.",
      ],
      example: "Çember 360° ve çevre 36 cm ise 90°’lik yay, çevrenin 1/4’ü olan 9 cm’dir.",
      questions: [
        ["Tam çember kaç derecedir?", ["90", "180", "360", "100"], 2, "Bir tam tur 360°’dir."],
        ["Çevresi 36 cm olan çemberde 90°’lik yayın uzunluğu kaç cm’dir?", ["9", "18", "36", "4"], 0, "90/360 = 1/4, 36’nın çeyreği 9."],
        ["Merkez açının köşesi nerededir?", ["Çemberin merkezinde", "Çemberin üzerinde her zaman", "Dışarıda", "Yayın ucunda olmak zorunda"], 0, "Köşe merkezdedir."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Dört işlem hatırlatması",
      paragraphs: [
        "Etkinlik haftasında yeni konu yok. Asal sayının iki pozitif böleni vardır. Kesir bir bölmedir. Üçgenin alanı taban çarpı yüksekliğin yarısıdır.",
        "Olasılık, gerçekleşen sayının deneme sayısına bölümüdür.",
      ],
      example: "Tabanı 10 cm, yüksekliği 4 cm olan üçgenin alanı 20 cm²’dir.",
      questions: [
        ["Tabanı 10, yüksekliği 4 cm olan üçgenin alanı kaç cm²’dir?", ["40", "20", "14", "7"], 1, "(10 × 4) / 2 = 20."],
        ["Hangisi asaldır?", ["9", "1", "17", "21"], 2, "17’nin bölenleri 1 ve 17’dir."],
        ["8 denemede olay 2 kez olduysa deneysel olasılık nedir?", ["2/8", "8/2", "6/8", "2"], 0, "2 ÷ 8 = 2/8."],
      ],
    },
  ]),
]

const fen = [
  unit("Güneş sistemi ve tutulmalar", [1, 2, 3], [
    {
      title: "Güneş sistemi",
      paragraphs: [
        "Güneş sisteminin merkezinde Güneş vardır. Gezegenler onun çevresinde dolanır. Dünya, Güneş’e üçüncü gezegendir.",
        "İç gezegenler kayalıktır. Dış gezegenler daha büyüktür ve gaz bakımından zengindir. Uydular gezegenlerin çevresinde dolanır.",
      ],
      example: "Ay, Dünya’nın uydusudur. Kendi ışığını üretmez.",
      questions: [
        ["Güneş sisteminin merkezinde ne vardır?", ["Dünya", "Ay", "Güneş", "Bir kuyruklu yıldız"], 2, "Gezegenler Güneş’in çevresinde dolanır."],
        ["Ay nedir?", ["Bir yıldız", "Dünya’nın uydusu", "Bir iç gezegen", "Güneş’in kendisi"], 1, "Ay, Dünya’nın çevresinde dolanır."],
        ["Gezegenler ışığını nereden alır?", ["Kendileri üretir", "Güneş’ten yansıtır", "Ay’dan", "Tutulmadan"], 1, "Yıldız olmayan gökcisimleri ışığı yansıtır."],
      ],
    },
    {
      title: "Tutulma",
      paragraphs: [
        "Güneş tutulmasında Ay, Güneş ile Dünya arasına girer ve Güneş’in önünü bir süreliğine kapatır. Yeni ay evresinde gerçekleşebilir.",
        "Ay tutulmasında Dünya, Güneş ile Ay arasına girer ve gölgesi Ay’a düşer. Bu, dolunayda olabilir.",
      ],
      example: "Güneş tutulması çıplak gözle izlenmez. Uygun filtre veya güvenli yöntem gerekir.",
      questions: [
        ["Güneş tutulmasında araya kim girer?", ["Ay", "Mars", "Bir yıldız", "Bulut olmak zorunda"], 0, "Ay, Güneş’in önüne geçer."],
        ["Ay tutulması hangi evrede olur?", ["Yeni ay", "Dolunay", "İlk dördün", "Her gece"], 1, "Ay, Dünya’nın gölgesine dolunayda girebilir."],
        ["Güneş tutulması neden çıplak gözle izlenmez?", ["Göz kalıcı zarar görür", "Ay görünmez diye", "Gece olduğu için", "Filtre ışığı üretir"], 0, "Güneş ışığı göz için tehlikelidir."],
      ],
    },
  ]),
  unit("Bileşke kuvvet", [4, 5], [
    {
      title: "Aynı yön ve zıt yön",
      paragraphs: [
        "Aynı doğrultudaki kuvvetler toplanarak bileşke bulunur. Aynı yönde iseler toplanır, zıt yönde iseler çıkarılır.",
        "Bileşke, büyük kuvvetin yönündedir. Eşit ve zıt kuvvetlerde bileşke sıfırdır; cisim dengededir.",
      ],
      example: "Sağa 8 N ve sağa 3 N uygulanırsa bileşke sağa 11 N’dir. Sağa 8 N, sola 3 N ise bileşke sağa 5 N’dir.",
      questions: [
        ["Sağa 8 N ve sağa 3 N’nin bileşkesi nedir?", ["Sola 5 N", "Sağa 11 N", "Sağa 24 N", "0"], 1, "Aynı yönlü kuvvetler toplanır."],
        ["Sağa 8 N ve sola 3 N’nin bileşkesi nedir?", ["Sağa 5 N", "Sola 5 N", "Sağa 11 N", "24 N"], 0, "Fark 5 N’dir ve büyük kuvvetin yönündedir."],
        ["Eşit ve zıt iki kuvvetin bileşkesi kaçtır?", ["0", "İkisinin toplamı", "İkisinin çarpımı", "90 N"], 0, "Birbirini dengeler."],
      ],
    },
    {
      title: "Net kuvvet ve hareket",
      paragraphs: [
        "Bileşke kuvvet sıfır değilse cismin hızı değişebilir: hızlanabilir, yavaşlayabilir veya yön değiştirebilir.",
        "Sürtünme de bir kuvvettir ve çoğu zaman harekete zıttır. İtme, sürtünmeden büyükse cisim kayar.",
      ],
      example: "Sandığı 12 N ile itip sürtünme 7 N ise net kuvvet 5 N’dir.",
      questions: [
        ["12 N itme ve 7 N sürtünmede net kuvvet kaçtır?", ["19 N", "5 N", "84 N", "0"], 1, "Zıt yönlü oldukları için çıkarılır."],
        ["Net kuvvet sıfırsa cisim için ne söylenir?", ["Dengededir", "Mutlaka hızlanır", "Yok olur", "Kütlesi değişir"], 0, "Kuvvetler birbirini götürür."],
        ["Sürtünme genellikle hangi yöndedir?", ["Harekete zıt", "Hareketle aynı", "Yukarı, her zaman", "Yönsüz"], 0, "Kaymayı zorlaştırır."],
      ],
    },
  ]),
  unit("Sabit sürat ve hız", [6], [
    {
      title: "Sürat",
      paragraphs: [
        "Sürat, birim zamandaki yoldur. Sürat = yol / zaman. Birimi m/s veya km/sa olabilir.",
        "120 metreyi 20 saniyede alan bisikletin sürati 6 m/s’dir. Sabit süratte eşit zamanlarda eşit yol alınır.",
      ],
      example: "Sürati 5 m/s olan yaya 10 saniyede 50 metre yol alır.",
      questions: [
        ["120 m yol 20 s’de alınırsa sürat kaç m/s’dir?", ["6", "100", "140", "2400"], 0, "120 ÷ 20 = 6."],
        ["5 m/s süratle 10 s’de kaç metre yol alınır?", ["2", "15", "50", "500"], 2, "Yol = sürat × zaman."],
        ["Sabit sürat ne demektir?", ["Eşit zamanlarda eşit yol", "Her saniye durmak", "Yönün sürekli değişmesi", "Yolun sıfır olması"], 0, "Sürat değişmiyorsa yol zamanla düzgün artar."],
      ],
    },
    {
      title: "Hızın yönü",
      paragraphs: [
        "Hızın süratten farkı yönüdür. Aynı süratle doğuya veya batıya gitmek farklı hızlardır.",
        "Yön değişirse hız değişmiş sayılır. Dönemeçte sürat aynı kalsa bile hızın yönü değişir.",
      ],
      example: "30 km/sa ile okula giden ve aynı süratle eve dönen kişinin sürati aynı, hızının yönü terstir.",
      questions: [
        ["Hızı süratten ayıran nedir?", ["Yön", "Birimin olmaması", "Kütle", "Renk"], 0, "Hız vektörel bir büyüklüktür, yönü vardır."],
        ["Aynı süratle eve dönmek hızı değiştirir mi?", ["Yön değiştiği için evet", "Hayır, hiç değişmez", "Kütle değişir", "Zaman durur"], 0, "Ters yön, farklı hız demektir."],
        ["Süratin formülü hangisidir?", ["Yol / zaman", "Kuvvet × yol", "Kütle × zaman", "Yol × zaman"], 0, "Birim zamandaki yol sürattir."],
      ],
    },
  ]),
  unit("Üreme, büyüme ve gelişme", [7, 8, 9, 10], [
    {
      title: "Bitkilerde",
      paragraphs: [
        "Çiçekli bitkilerin çoğunda üreme organı çiçektedir. Tozlaşma, çiçek tozunun dişi organa taşınmasıdır.",
        "Döllenmeden sonra tohum, uygun koşullarda çimlenir. Çimlenme için su, uygun sıcaklık ve oksijen gerekir.",
      ],
      example: "Karanlıkta da tohum çimlenebilir; asıl ihtiyaç ışıktan önce su ve sıcaklıktır. Işık, fide büyürken önem kazanır.",
      questions: [
        ["Tozlaşma nedir?", ["Çiçek tozunun dişi organa taşınması", "Tohumun yenmesi", "Yaprağın dökülmesi", "Kökün uzaması"], 0, "Tozlaşma döllenmeden önceki adımdır."],
        ["Çimlenme için hangisi gereklidir?", ["Su, uygun sıcaklık ve oksijen", "Yalnız tuz", "Yalnız karanlık ve susuzluk", "Bir hayvan"], 0, "Tohum bu üç koşulla uyanır."],
        ["Çiçekli bitkide üreme organı çoğunlukla nerededir?", ["Çiçekte", "Yalnız kabukta", "Kök ucunda her zaman", "Dikende"], 0, "Çiçek üreme yapısıdır."],
      ],
    },
    {
      title: "Hayvanlarda",
      paragraphs: [
        "Bazı hayvanlar yumurtayla, bazıları doğurarak çoğalır. Yavru, büyürken vücut oranları ve bazı özellikleri değişir; buna gelişme denir.",
        "Kurbağada yumurta, iribaş ve ergin dönemleri vardır. Bu başkalaşımdır. İnsanda başkalaşım yoktur; büyüme ve gelişme vardır.",
      ],
      example: "İribaşın solungacı varken ergin kurbağa akciğer ve derisiyle solunum yapar. Yaşam biçimi de değişir.",
      questions: [
        ["Kurbağadaki evre değişimine ne denir?", ["Başkalaşım", "Tozlaşma", "Tutulma", "Sürtünme"], 0, "İribaş ergine dönüşürken yapı değişir."],
        ["İnsanda başkalaşım var mıdır?", ["Vardır, iribaş dönemi vardır", "Yoktur", "Yalnız bebekte vardır", "Yalnız yaşlıda vardır"], 1, "İnsan yavrusu erginine benzemeyen bir ara biçimden geçmez."],
        ["Gelişme büyümeden nasıl ayrılır?", ["Yapı ve özelliklerin değişmesini de içerir", "Yalnız boy uzamasıdır", "Bir kuvvettir", "Bir tutulmadır"], 0, "Gelişme, olgunlaşmayı da anlatır."],
      ],
    },
  ]),
  unit("Denetleyici ve düzenleyici sistem", [11, 12], [
    {
      title: "Sinir sistemi",
      paragraphs: [
        "Sinir sistemi; beyin, omurilik ve sinirlerden oluşur. Uyarıyı alır, değerlendirir ve cevap oluşturur.",
        "Refleks, hızlı ve istemsiz cevaptır. Elin sıcaktan çekilmesi bir reflekstir. Omurilik bu tür cevaplarda görev alır.",
      ],
      example: "Diz kapağına hafif vurulunca bacak ileri fırlar. Bu, düşünülerek yapılan bir hareket değildir.",
      questions: [
        ["Refleks nasıldır?", ["Hızlı ve istemsiz", "Her zaman yavaş ve planlı", "Yalnız bitkide", "Bir tutulma"], 0, "Refleks, korumak için çabuk verilir."],
        ["Sinir sisteminin bölümlerinden biri hangisidir?", ["Omurilik", "Midye kabuğu", "Kloroplast", "Mercek"], 0, "Beyin, omurilik ve sinirler bu sistemi kurar."],
        ["Sıcaktan eli çekmek ne işe yarar?", ["Dokuyu korumaya", "Refleksi kapatmaya", "Kemik üretmeye", "Tozlaşmaya"], 0, "Zarar büyümeden cevap verilir."],
      ],
    },
    {
      title: "İç salgı",
      paragraphs: [
        "Hormonlar, iç salgı bezlerinin kana verdiği kimyasal haberdir. Büyüme, kan şekeri ve ergenlik değişimleri hormonlarla düzenlenir.",
        "Sinir sistemi hızlı haber taşır. Hormonlar daha yavaş ama uzun süren etki yapabilir. İki sistem birlikte çalışır.",
      ],
      example: "Korkunca kalp hızlanır. Bu cevapta hem sinirler hem hormonlar rol alır.",
      questions: [
        ["Hormon nedir?", ["Kana verilen kimyasal haberci", "Bir kemik", "Bir gezegen", "Bir kuvvet birimi"], 0, "Hormon, iç salgı bezinde üretilir."],
        ["Sinir sistemi ile hormon farkı nedir?", ["Sinir haberi genellikle daha hızlıdır", "Hormon bir kemiktir", "Sinir sistemi yalnız bitkidedir", "İkisi hiç birlikte çalışmaz"], 0, "Sinir iletisi çabuktur."],
        ["Büyümenin düzenlenmesinde hangisi görev alır?", ["Hormonlar", "Yalnız ayakkabı numarası", "Tutulma", "Sürtünme"], 0, "Büyüme hormonu bu işin parçasıdır."],
      ],
    },
  ]),
  unit("Işığın yansıması", [13, 14, 15], [
    {
      title: "Yansıma kuralı",
      paragraphs: [
        "Işık düzgün bir yüzeye çarpınca yansır. Gelme açısı, yüzey normaliyle gelen ışın arasındaki açıdır.",
        "Düzgün yansımada gelme açısı yansıma açısına eşittir. Pürüzlü yüzeyde ışınlar dağınık yansır.",
      ],
      example: "Gelme açısı 40° ise yansıma açısı da 40°’dir.",
      questions: [
        ["Gelme açısı 40° ise yansıma açısı kaç derecedir?", ["20", "40", "50", "90"], 1, "İki açı eşittir."],
        ["Pürüzlü yüzeyde yansıma nasıldır?", ["Dağınık", "Her zaman tek yöne", "Hiç olmaz", "Işık kaynağı olur"], 0, "Işınlar farklı yönlere dağılır."],
        ["Normal neye göre çizilir?", ["Yüzeye dik hayali çizgi", "Yere paralel her zaman", "Gölgenin kendisi", "Bir mercek"], 0, "Açılar normale göre ölçülür."],
      ],
    },
    {
      title: "Düz ayna",
      paragraphs: [
        "Düz aynada görüntü sanal, düz ve cisimle aynı boydadır. Aynaya olan uzaklığı, cismin uzaklığına eşittir.",
        "Sağ ile sol yer değiştiriyor gibi görünür. Buna yanal terslik denir. Ayna ışık kaynağı değildir.",
      ],
      example: "Aynaya 30 cm uzaktaki cismin görüntüsü de aynanın 30 cm arkasındaymış gibi durur.",
      questions: [
        ["Düz aynada görüntü boyu nasıldır?", ["Cisimle aynı", "Her zaman büyük", "Her zaman küçük", "Yoktur"], 0, "Düz ayna boyu değiştirmez."],
        ["Cisim aynadan 30 cm uzaktaysa görüntü uzaklığı kaç cm’dir?", ["15", "30", "60", "0"], 1, "Uzaklıklar eşittir."],
        ["Yanal terslik nedir?", ["Sağ ve solun yer değiştirmiş görünmesi", "Görüntünün ters dönüp baş aşağı olması her zaman", "Görüntünün yok olması", "Işığın kırılması"], 0, "Düz aynada baş aşağı dönme olmaz, sağ-sol değişir."],
      ],
    },
  ]),
  unit("Aynalar", [16], [
    {
      title: "Çukur ve tümsek",
      paragraphs: [
        "Çukur ayna, iç yüzü yansıtandır. Yakın cisimlerde görüntüyü büyütebilir. Makyaj aynası ve bazı fenerler çukur ayna kullanır.",
        "Tümsek ayna, dış yüzü yansıtandır. Görüntüyü küçültür ama geniş bir alanı gösterir. Araç yan aynaları tümsektir.",
      ],
      example: "“Nesneler olduğundan yakındır” uyarısı, tümsek aynanın uzaklığı küçük göstermesindendir.",
      questions: [
        ["Araç yan aynası neden tümsektir?", ["Geniş alanı göstermek için", "Görüntüyü büyütmek için", "Işık üretmek için", "Kütle ölçmek için"], 0, "Küçük görüntü, daha çok yerin sığmasını sağlar."],
        ["Çukur ayna yakındaki görüntüyü ne yapabilir?", ["Büyütebilir", "Her zaman yok eder", "Renk değiştirir", "Saydamlaştırır"], 0, "Yakın cisimde büyüteç gibi çalışabilir."],
        ["Tümsek aynada görüntü genellikle nasıldır?", ["Küçük ve düz", "Büyük ve ters", "Yok", "Cisimden ağır"], 0, "Tümsek ayna daraltarak geniş alan gösterir."],
      ],
    },
    {
      title: "Güvenli kullanım",
      paragraphs: [
        "Ayna, arkandaki aracı küçük gösterdiği için uzaklık tahmin edilirken dikkat edilir. Gerçek uzaklık göründüğünden fazla olabilir.",
        "Çukur aynayla Güneş’e bakılmaz. Yansıyan ışık da göze zarar verebilir.",
      ],
      example: "Yan aynada küçük görünen araç sanılandan yakında olabilir.",
      questions: [
        ["Tümsek aynadaki araç neden tehlikeli yanlış anlaşılır?", ["Olduğundan uzak görünebilir", "Olduğundan ağır görünür", "Rengi değişir", "Ses çıkarır"], 0, "Küçük görüntü uzaklık hissini bozar."],
        ["Çukur ayna ile Güneş izlenir mi?", ["Hayır", "Evet, büyüteç gibidir ve güvenlidir", "Yalnız öğlen", "Yalnız kışın"], 0, "Odaklanan ışık göze ve cilde zarar verir."],
        ["Ayna ışık kaynağı mıdır?", ["Hayır, yansıtır", "Evet", "Yalnız tümsekse", "Yalnız geceleri"], 0, "Ayna var olan ışığı döndürür."],
      ],
    },
  ]),
  unit("Işığın soğurulması", [17, 18, 19], [
    {
      title: "Renk ve soğurma",
      paragraphs: [
        "Cisim, üzerine gelen ışığın bir kısmını yansıtır, bir kısmını soğurur. Gördüğümüz renk, yansıyan ışıktır.",
        "Beyaz yüzey ışığın çoğunu yansıtır. Siyah yüzey çoğunu soğurur ve daha çok ısınır.",
      ],
      example: "Güneş altında siyah kumaş, beyaz kumaştan daha sıcak olur.",
      questions: [
        ["Gördüğümüz renk hangisidir?", ["Yansıyan ışık", "Soğurulan ışığın kendisi", "Cismin kütlesi", "Sürtünme"], 0, "Göze gelen, yansıyan ışıktır."],
        ["Siyah yüzey neden ısınır?", ["Işığı daha çok soğurduğu için", "Işığı daha çok yansıttığı için", "Saydam olduğu için", "Bir ayna olduğu için"], 0, "Soğurulan enerji ısıya dönüşür."],
        ["Beyaz yüzey ışığa ne yapar?", ["Çoğunu yansıtır", "Tamamını soğurur", "Üretir", "Kırar ve yok eder"], 0, "Bu yüzden daha serin kalabilir."],
      ],
    },
    {
      title: "Enerji dönüşümü",
      paragraphs: [
        "Soğurulan ışık yok olmaz. Enerji, ısıya dönüşebilir. Koyu renkli su depoları bu yüzden daha çabuk ısınır.",
        "Güneş paneli, ışık enerjisini elektrik enerjisine çevirmek için tasarlanır. Her siyah yüzey panel değildir.",
      ],
      example: "Aynı süre güneşte kalan iki kaptan koyu olanın suyu daha sıcak ölçülür.",
      questions: [
        ["Soğurulan ışık enerjisi neye dönüşebilir?", ["Isıya", "Kütleye kesin", "Zamana", "Yöne"], 0, "Enerji biçim değiştirir, yok olmaz."],
        ["Koyu kap neden daha çabuk ısınır?", ["Daha çok ışık soğurduğu için", "Daha çok yansıttığı için", "İçi boş olduğu için her zaman", "Saydam olduğu için"], 0, "Soğurma ısınmayı artırır."],
        ["Güneş paneli ne dönüştürür?", ["Işığı elektriğe", "Elektriği karanlığa", "Isıyı kütleye", "Sürtünmeyi ayna görüntüsüne"], 0, "Panel bir enerji dönüştürücüsüdür."],
      ],
    },
  ]),
  unit("Genleşme ve büzülme", [20, 21], [
    {
      title: "Isının etkisi",
      paragraphs: [
        "Çoğu madde ısıtılınca genleşir, soğuyunca büzülür. Tanecikler daha hızlı hareket edince aralık artar.",
        "Katı, sıvı ve gaz genleşebilir. Gazlar bu değişime daha açıktır. Boşluk bırakılan köprü derzleri genleşmeye yer açar.",
      ],
      example: "Yazın gerilen elektrik teli kışın daha gergin durabilir; soğuyunca büzülür.",
      questions: [
        ["Köprüde boşluk neden bırakılır?", ["Yazın genleşmeye yer olsun diye", "Su biriksin diye", "Kütle artsın diye", "Işık kırılsın diye"], 0, "Derz, uzayan malzemeyi sıkışmaktan korur."],
        ["Soğuyan madde genellikle ne olur?", ["Büzülür", "Genleşir", "Yok olur", "Saydamlaşır"], 0, "Tanecik aralığı azalır."],
        ["Genleşme hangi hâllerde görülebilir?", ["Katı, sıvı ve gaz", "Yalnız suda", "Yalnız aynada", "Hiçbirinde"], 0, "Üç hâl de ısıyla hacim değiştirebilir."],
      ],
    },
    {
      title: "Günlük arıza",
      paragraphs: [
        "Sıkışan metal kapak sıcak suda genleşerek gevşer. Termometredeki sıvı ısınınca yükselir.",
        "Farklı maddeler farklı miktarda genleşir. Bu yüzden çift metal şerit ısınınca eğilir ve bazı termostatlarda kullanılır.",
      ],
      example: "Termometre sıvısı yükseliyorsa sıcaklık artıyordur; sıvı cam boruda genleşmiştir.",
      questions: [
        ["Sıcak su metal kapağı neden gevşetir?", ["Kapağı genleştirdiği için", "Camı erittiği için", "Kütleyi sildiği için", "Işığı soğurduğu için yalnız"], 0, "Dişler genişleyince kavrama azalır."],
        ["Termometrede sıvı neden yükselir?", ["Genleştiği için", "Büzüldüğü için", "Donduğu için", "Aynaya dönüştüğü için"], 0, "Hacmi artan sıvı boruda yukarı çıkar."],
        ["Çift metal şerit ısınınca neden eğilir?", ["İki metal farklı genleştiği için", "İkisi de hiç değişmediği için", "Işık kırıldığı için", "Bir hormon salgılandığı için"], 0, "Biri daha çok uzayınca şerit kıvrılır."],
      ],
    },
  ]),
  unit("Hâl değişim noktaları", [22, 23], [
    {
      title: "Sabit sıcaklık",
      paragraphs: [
        "Saf bir madde erirken veya kaynarken sıcaklık bir süre sabit kalır. Bu değerlere erime ve kaynama noktası denir.",
        "Erime noktası maddenin ayırt edici özelliğidir. Aynı koşullarda saf su 0°C’ta donar, 100°C’ta kaynar.",
      ],
      example: "Buz erirken termometre bir süre 0°C’ta kalabilir. Enerji, sıcaklığı yükseltmek yerine bağı çözmeye gider.",
      questions: [
        ["Saf suyun deniz seviyesindeki kaynama noktası kaç °C’tır?", ["0", "50", "100", "212"], 2, "Kaynama noktası 100°C’tır."],
        ["Erime sırasında sıcaklık neden sabit kalabilir?", ["Enerji hâl değişimine harcanır", "Termometre durur", "Madde yok olur", "Kuvvet sıfırlanır"], 0, "Isı, tanecik düzenini değiştirir."],
        ["Erime noktası neyin özelliğidir?", ["Maddenin ayırt edici özelliği", "Kabın rengi", "Odanın alanı", "Kişinin kütlesi"], 0, "Saf maddeler belirli noktada erir."],
      ],
    },
    {
      title: "Karışım",
      paragraphs: [
        "İçine başka madde karışan suyun donma noktası düşebilir, kaynama noktası yükselebilir. Tuzlu su, saf su gibi 0°C’ta donmak zorunda değildir.",
        "Bu yüzden yollara tuz dökülmesi, buzun daha düşük sıcaklıkta erimesine yardım eder.",
      ],
      example: "Saf buz 0°C’ta erir. Tuz eklenince erime daha soğukta da sürebilir.",
      questions: [
        ["Yola tuz dökmek neye yarar?", ["Buzun daha düşük sıcaklıkta erimesine", "Kaynama noktasını 0 yapmak", "Suyu katı tahta yapmak", "Işığı kırmak"], 0, "Tuz, donma noktasını düşürür."],
        ["Karışımın kaynama noktası saf maddeye göre ne olabilir?", ["Yükselebilir", "Her zaman 0 olur", "Ölçülemez", "Negatif kütle olur"], 0, "Tuzlu su 100°C’un üzerinde kaynayabilir."],
        ["Ayırt edici özellik hangi madde için net konuşulur?", ["Saf madde", "Her karışım aynı noktada", "Yalnız gazlar hiç", "Yalnız aynalar"], 0, "Karışımın noktası orana göre değişir."],
      ],
    },
  ]),
  unit("Yoğunluk", [24, 25, 26, 27], [
    {
      title: "Tanım",
      paragraphs: [
        "Yoğunluk, birim hacimdeki kütledir. Yoğunluk = kütle / hacim. Birimi g/cm³ olabilir.",
        "Kütlesi 20 g, hacmi 10 cm³ olan cismin yoğunluğu 2 g/cm³’tür. Yoğunluk madde miktarına değil, maddenin cinsine bağlıdır.",
      ],
      example: "Aynı demirden küçük bir çivi ile büyük bir kütlenin yoğunluğu aynıdır. Kütleleri farklıdır.",
      questions: [
        ["20 g ve 10 cm³ için yoğunluk kaçtır?", ["2 g/cm³", "200 g/cm³", "0,5 g/cm³", "30 g/cm³"], 0, "20 ÷ 10 = 2."],
        ["Yoğunluk formülü hangisidir?", ["Kütle / hacim", "Hacim × uzunluk", "Kuvvet / zaman", "Alan × π"], 0, "Birim hacimdeki kütle yoğunluktur."],
        ["Aynı maddeden küçük ve büyük parça için yoğunluk nasıldır?", ["Aynıdır", "Büyük olanınki her zaman büyüktür", "Küçük olanınki sıfırdır", "Karşılaştırılamaz"], 0, "Yoğunluk madde cinsinin özelliğidir."],
      ],
    },
    {
      title: "Batma ve yüzme",
      paragraphs: [
        "Bir cismin yoğunluğu sıvının yoğunluğundan küçükse cisim yüzer, büyükse batar. Eşitse asılı kalabilir.",
        "Suyun yoğunluğu yaklaşık 1 g/cm³’tür. 0,8 g/cm³’lük tahta yüzer, 2 g/cm³’lük taş batar.",
      ],
      example: "Demir kaşık batar. Demirden yapılan geniş ve içi hava dolu gemi, ortalama yoğunluğu suyun altına düştüğü için yüzer.",
      questions: [
        ["0,8 g/cm³’lük tahta suda ne yapar?", ["Yüzer", "Batar", "Çözünür", "Donar"], 0, "Yoğunluğu suyun 1 g/cm³ değerinden küçüktür."],
        ["2 g/cm³’lük taş suda ne yapar?", ["Batar", "Yüzer", "Uçar", "Yoğuşur"], 0, "Taş sudan yoğundur."],
        ["Gemi neden batmaz?", ["Ortalama yoğunluğu suyun altında kalacak biçimde tasarlandığı için", "Demir sudan hafif olduğu için", "Deniz yoğunluğu 0 olduğu için", "Gemi bir gaz olduğu için"], 0, "İçindeki hava ortalamayı düşürür."],
      ],
    },
  ]),
  unit("Elektriğin iletimi", [28], [
    {
      title: "İletkenlik",
      paragraphs: [
        "Metaller elektriği iyi iletir. Cam, plastik, kauçuk ve kuru tahta yalıtkandır.",
        "İletkenlik testinde devreye konan madde ampülü yakıyorsa iletkendir. Saf su zayıf iletir; içinde çözünmüş madde varsa iletim artabilir.",
      ],
      example: "Ataş devreyi tamamlar, silgi tamamlamaz.",
      questions: [
        ["Hangisi iletkendir?", ["Bakır", "Plastik", "Kauçuk", "Kuru cam"], 0, "Bakır bir metaldir."],
        ["Silgi devreye konunca ampul neden yanmaz?", ["Yalıtkan olduğu için", "Çok iyi ilettiği için", "Bir pil olduğu için", "Işık ürettiği için"], 0, "Akımın yolu kapanmaz."],
        ["İletkenlik nasıl anlaşılır?", ["Devredeki ampulün yanmasıyla", "Rengine bakarak kesin", "Koklayarak", "Tartarak"], 0, "Akım geçiyorsa lamba yolun tamamlandığını gösterir."],
      ],
    },
    {
      title: "Güvenlik",
      paragraphs: [
        "Islak elle prize dokunulmaz. Su, üzerindeki maddelerle iletken hâle gelebilir.",
        "Yıpranmış kablonun içi açığa çıkmışsa kullanılmaz. Yalıtkan kılıf, akımı içeride tutar.",
      ],
      example: "Banyoda çalışan bir alet prize ıslak elle takılmaz.",
      questions: [
        ["Islak elle prize neden dokunulmaz?", ["Su iletken hâle gelebilir", "Su yalıtkandır, sorun yoktur", "Priz bir aynadır", "El genleşir diye"], 0, "Akım vücut üzerinden geçebilir."],
        ["Kablo kılıfı ne işe yarar?", ["Akımı içeride tutar", "Elektriği üretir", "Kütleyi artırır", "Işığı kırar"], 0, "Plastik kılıf yalıtkandır."],
        ["Açıkta duran tel için ne yapılır?", ["Kullanılmaz, yetişkine söylenir", "Islak elle tutulur", "Bant yerine su dökülür", "Prize zorlanır"], 0, "Açık iletken çarpılma riskidir."],
      ],
    },
  ]),
  unit("Elektriksel direnç", [29, 30, 31], [
    {
      title: "Direnç nelere bağlıdır",
      paragraphs: [
        "Direnç, iletkenin akıma karşı koyma eğilimidir. Aynı maddede tel uzadıkça direnç artar, kesit kalınlaştıkça direnç azalır.",
        "Madde cinsi de direnci değiştirir. Bakır, aynı boyuttaki demirden daha iyi iletir.",
      ],
      example: "Uzun ve ince bir tel, kısa ve kalın bir telden daha çok direnç gösterir.",
      questions: [
        ["Tel uzarsa direnç ne olur?", ["Artar", "Azalır", "Sıfırlanır", "Birime dönüşmez"], 0, "Akımın yolu uzar."],
        ["Kesit kalınlaşırsa direnç genellikle ne olur?", ["Azalır", "Artar", "Değişmez, hiç", "Sonsuz olur"], 0, "Akıma daha geniş yol açılır."],
        ["Direnci değiştirenlerden biri hangisidir?", ["Madde cinsi", "Telin rengi yalnız", "Odanın adı", "Grafiğin başlığı"], 0, "Farklı metaller farklı iletir."],
      ],
    },
    {
      title: "Parlaklıkla ilişki",
      paragraphs: [
        "Aynı pilde direnç artarsa devreden geçen akım azalır, ampul daha sönük yanabilir.",
        "Karşılaştırırken pil ve ampul aynı tutulur. Yalnız telin boyu değiştirilirse boyun etkisi görülür.",
      ],
      example: "Kısa kalın tel ile yanan ampul, yerine uzun ince tel konunca sönükleşebilir.",
      questions: [
        ["Direnç artınca ampul genellikle ne olur?", ["Daha sönük", "Daha parlak kesin", "Pilden büyük", "Saydam"], 0, "Akım azalır."],
        ["Adil deneyde ne sabit tutulur?", ["Pil ve ampul", "Hiçbir şey", "Telin bütün özellikleri birden", "Sonuç"], 0, "Tek değişken tel olmalıdır."],
        ["Uzun ince tel neden parlaklığı düşürebilir?", ["Direnci daha büyük olduğu için", "Bir pil ürettiği için", "Işığı soğurduğu için yalnız", "Ayna olduğu için"], 0, "Büyük direnç akımı azaltır."],
      ],
    },
  ]),
  unit("Biyoçeşitlilik", [32, 33, 34], [
    {
      title: "Çeşitlilik",
      paragraphs: [
        "Biyoçeşitlilik, bir bölgedeki canlı türlerinin ve yaşam ortamlarının zenginliğidir.",
        "Farklı türler besin, ilaç, toprak ve su döngüsü için birbirine bağlıdır. Bir türün kaybı zinciri etkiler.",
      ],
      example: "Arılar azalırsa çiçekli bitkilerin tozlaşması, ardından meyve verimi düşebilir.",
      questions: [
        ["Biyoçeşitlilik nedir?", ["Bir yerdeki canlı zenginliği", "Yalnız bir hayvanın adı", "Bir kuvvet", "Bir ayna türü"], 0, "Tür ve yaşam ortamı çeşitliliğidir."],
        ["Arıların azalması neyi etkileyebilir?", ["Tozlaşma ve meyveyi", "Ay tutulmasını", "Direnç birimini", "Kaynama noktasını"], 0, "Arı birçok bitki için taşıyıcıdır."],
        ["Bir türün yok olması neden yalnız o türü ilgilendirmez?", ["Besin zinciri birbirine bağlıdır", "Türler birbirinden habersiz yaşar", "Yalnız bitkiler etkilenir, hayvan hiç", "Zincir diye bir şey yoktur"], 0, "Bir halka kopunca diğerleri de aç kalabilir."],
      ],
    },
    {
      title: "Tehditler",
      paragraphs: [
        "Yaşam alanının yok olması, aşırı avlanma, kirlilik ve istilacı türler biyoçeşitliliği azaltır.",
        "Koruma; milli park, av yasağı ve kirletmemekle olur. Küçük tercih de işe yarar: çöpü doğada bırakmamak.",
      ],
      example: "Sulak alan kurutulursa orada üreyen kuş ve kurbağalar yer bulamaz.",
      questions: [
        ["Hangisi biyoçeşitliliği azaltır?", ["Yaşam alanını yok etmek", "Yasağına uymak", "Çöpü geri getirmek", "Yuva alanını korumak"], 0, "Evini kaybeden tür azalır."],
        ["Sulak alan neden önemlidir?", ["Birçok türün üreme yeridir", "Işığı soğurmaz", "Bir teldir", "Direnci sıfırdır"], 0, "Kuş ve kurbağa gibi canlılar oraya bağlıdır."],
        ["Kişinin yapabileceği koruma hangisidir?", ["Çöpü doğada bırakmamak", "Yuvayı dağıtmak", "Ateşi ormanda açık bırakmak", "Sulak alanı kurutmak"], 0, "Kirletmemek doğrudan bir korumadır."],
      ],
    },
  ]),
  unit("İnsan ve çevre", [35, 36], [
    {
      title: "İzimiz",
      paragraphs: [
        "İnsan; tarım, şehir, ulaşım ve sanayiyle çevreyi değiştirir. Bu değişim hem geçim sağlar hem de hava, su ve toprağı zorlayabilir.",
        "Fabrika bacası filtreyle, atık su arıtmayla daha az zarar verir. Denetimsiz atık, akarsuya karışınca canlıları öldürebilir.",
      ],
      example: "Aynı dere, arıtma varken balık barındırır; atık doğrudan dökülünce kokar ve canlısı azalır.",
      questions: [
        ["Arıtma ne işe yarar?", ["Atık suyun zararını azaltır", "Deredeki suyu yok eder", "Balığı tuzlar", "Baca dumanını çoğaltır"], 0, "Zararlı madde tutulur."],
        ["Denetimsiz atık dereye karışırsa ne olabilir?", ["Canlılar zarar görür", "Su saf suya döner", "Yoğunluk sıfır olur", "Tutulma başlar"], 0, "Kirli su yaşamı taşır."],
        ["İnsan çevreyi yalnız kötü mü değiştirir?", ["Hayır, geçim de sağlar; önemli olan zararı azaltmaktır", "Evet, her değişim yok oluştur", "Hayır, çünkü çevre değişmez", "Yalnız aynayla değiştirir"], 0, "Üretim ve koruma birlikte düşünülür."],
      ],
    },
    {
      title: "Sürdürülebilir tercih",
      paragraphs: [
        "Sürdürülebilir yaşam, bugünkü ihtiyacı karşılarken geleceğin kaynaklarını tüketmemektir.",
        "Az atık, toplu taşıma, bozulmayan yiyeceği bitirmek ve enerjiyi boş yere yakmamak bu tercihlere girer.",
      ],
      example: "Boş sınıfta yanan ışığı kapatmak küçük bir enerji tasarrufudur.",
      questions: [
        ["Sürdürülebilirlik nedir?", ["Bugünü karşılarken geleceği de düşünmek", "Her kaynağı bu yıl bitirmek", "Atığı artırmak", "Yalnız bir kişinin işi, tanımı yok"], 0, "Kaynak sonraki kuşağa da kalmalıdır."],
        ["Hangisi sürdürülebilir bir tercihtir?", ["Boş odanın ışığını kapatmak", "Çöpü dereye dökmek", "Yiyeceği artırmak için israf etmek", "Sulak alanı kurutmak"], 0, "Kullanılmayan enerji harcanmamış olur."],
        ["Bozulmayan yemeği bitirmek neyi azaltır?", ["Gıda israfını", "Biyoçeşitliliği", "Sıcaklığı kesin", "Direnci"], 0, "Çöpe giden yemek kaynak israfıdır."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Üç ölçüm",
      paragraphs: [
        "Etkinlik haftasında yeni ünite yok. Sürat yol bölü zamandır. Yoğunluk kütle bölü hacimdir. Yansıma açısı gelme açısına eşittir.",
      ],
      example: "Kütle 40 g, hacim 20 cm³ ise yoğunluk 2 g/cm³’tür.",
      questions: [
        ["40 g ve 20 cm³ için yoğunluk kaçtır?", ["2 g/cm³", "60 g/cm³", "0,5 g/cm³", "800 g/cm³"], 0, "40 ÷ 20 = 2."],
        ["100 metreyi 20 saniyede alanın sürati kaç m/s’dir?", ["5", "80", "120", "2000"], 0, "100 ÷ 20 = 5."],
        ["Gelme açısı 30° ise yansıma açısı kaç derecedir?", ["30", "60", "90", "150"], 0, "İki açı eşittir."],
      ],
    },
  ]),
]

const turkce = [
  unit("Dilimizin Zenginliği", [1, 2, 3, 4, 5], [
    {
      title: "Eş ve yakın anlam",
      paragraphs: [
        "Eş anlamlı sözcükler aynı anlama gelir: yanıt ve cevap. Yakın anlamlılar benzeşir ama biri diğerinin yerine her zaman geçmez.",
        "“Yıkıldı” ile “devrildi” yakın olabilir. Bir bina yıkılır, bir bardak da devrilebilir. Sözcük, cümlenin yüküne göre seçilir.",
      ],
      example: "“Soruya yanıt verdi” ile “soruya cevap verdi” aynı işi anlatır.",
      questions: [
        ["Yanıt ve cevap nasıldır?", ["Eş anlamlı", "Zıt anlamlı", "Sesteş", "İkileme"], 0, "İkisi de karşılık vermektir."],
        ["Yakın anlam neden her zaman yer değiştiremez?", ["İnce bir fark taşıyabilir", "Hiç anlamı yoktur", "Yalnız özel addır", "Bir ektir"], 0, "Bağlam, sözcüğü seçtirir."],
        ["Bardak için daha uygun olan hangisidir?", ["Devrildi", "Yıkıldı", "İnşa edildi", "Yankılandı"], 0, "Bardak yıkılmaz, devrilir."],
      ],
    },
    {
      title: "Deyim",
      paragraphs: [
        "Deyim, gerçek anlamının dışında kalıplaşmış sözdür. “İğne ile kuyu kazmak” çok zor bir işi çok az araçla yapmak demektir.",
        "Deyim sözcük sözcük çevrilirse anlam kaçar. Metinde deyimin katkısı, duyguyu kısa ve güçlü söylemektir.",
      ],
      example: "“Kulak kabartmak” kulağı büyütmek değil, gizlice dinlemeye çalışmaktır.",
      questions: [
        ["“İğne ile kuyu kazmak” ne demektir?", ["Çok zor işi yetersiz araçla yapmak", "Kuyu kazma mesleği", "İğne koleksiyonu", "Su bulmak"], 0, "Deyim gerçek kazmayı anlatmaz."],
        ["Deyim neden sözcük sözcük çevrilmez?", ["Anlamı kalıbın bütünündedir", "Sözcükler yanlıştır", "Türkçede deyim yoktur", "Yalnız şiirde vardır"], 0, "Parçalar ayrı ayrı başka şey söyler."],
        ["“Kulak kabartmak” hangisidir?", ["Gizlice dinlemeye çalışmak", "Kulağı ölçmek", "Bir hastalık", "Bir selam"], 0, "Merak veya gizlilik vardır."],
      ],
    },
  ]),
  unit("Bağımsızlık Yolu", [6, 7, 8, 9, 10, 11, 12], [
    {
      title: "Kahraman ve amaç",
      paragraphs: [
        "Anlatıda kahramanın amacı, olayları birbirine bağlar. Amaç “vatanı düşmandan kurtarmak” ise her sahne bu amaca hizmet edip etmediğine göre okunur.",
        "Engel, amacı zorlaştıran şeydir. Eksik cephane, uzun yol, kış. Engel olmasa mücadele görünmez.",
      ],
      example: "“Kağnıya mermi yükledi, çünkü cephede top susmuştu.” Amaç cephenin sürmesi, engel cephanenin bitmesidir.",
      questions: [
        ["Amaç metinde ne işe yarar?", ["Olayları birbirine bağlar", "Başlığı siler", "Kişiyi gizler", "Tarihi değiştirir"], 0, "Kahraman bir şeyi başarmak ister."],
        ["Engel nedir?", ["Amacı zorlaştıran durum", "Kahramanın adı", "Mutlu sonuç her zaman", "Bir deyim eki"], 0, "Engel olmasa çaba görünmez."],
        ["“Cephede top susmuştu” neyi gösterir?", ["Cephede cephanenin tükendiğini", "Savaşın bittiğini kesin", "Bir düğünü", "Bir hasadı"], 0, "Topun susması, atacak şey kalmadığını düşündürür."],
      ],
    },
    {
      title: "Bakış açısı",
      paragraphs: [
        "Olayı yaşayan kişi “ben” diyorsa bakış açısı birinci kişidir. Dışarıdan anlatan “o” diyorsa üçüncü kişidir.",
        "Birinci kişi duyguyu yakından verir, her şeyi bilemez. Üçüncü kişi daha geniş bakabilir.",
      ],
      example: "“Yükü omzumda hissettim” birinci kişidir. “Kadın yükü omzunda taşıdı” üçüncü kişidir.",
      questions: [
        ["“Yükü omzumda hissettim” hangi bakış açısıdır?", ["Birinci kişi", "Üçüncü kişi", "Hiç kimse", "Yalnız yazarın soyadı"], 0, "Ben dili vardır."],
        ["Üçüncü kişi anlatımda kim konuşur gibi olur?", ["Dışarıdan bakan anlatıcı", "Yalnız kahraman", "Okur", "Harita"], 0, "O dili, dış anlatıcıya aittir."],
        ["Birinci kişinin sınırı nedir?", ["Kendi gördüğü ve duyduğuyla sınırlı olabilir", "Her karakterin aklını bilir", "Geleceği kesin söyler", "Tarihi siler"], 0, "Ben, her yerde aynı anda olamaz."],
      ],
    },
  ]),
  unit("Farklı Dünyalar", [13, 14, 15, 16, 17, 18], [
    {
      title: "Karşılaştırarak anlamak",
      paragraphs: [
        "Başka bir yaşamı okurken önce benzerlik bulunur. Okul, oyun, aile sevgisi birçok yerde vardır.",
        "Sonra fark yazılır: iklim, ev, yemek, dil. Fark, o yaşamı eksik yapmaz.",
      ],
      example: "“İkisi de sabah okula gider. Biri kar botu, biri yağmurluk giyer.” Ortak olan okula gitmek, farklı olan hazırlıktır.",
      questions: [
        ["Karşılaştırmada ilk adım ne olabilir?", ["Benzerliği bulmak", "Birini küçümsemek", "Farkı yanlış ilan etmek", "Metni kapatmak"], 0, "Ortak nokta köprü kurar."],
        ["Kar botu ile yağmurluk farkı neyi gösterir?", ["İklimin giysiyi değiştirdiğini", "Birinin okula gitmediğini", "İkisinin de aynı şehirde olduğunu kesin", "Oyunun yasak olduğunu"], 0, "Hava, hazırlığı değiştirir."],
        ["Farklı yaşam için doğru yargı hangisidir?", ["Eksik olmak zorunda değildir", "Her zaman yanlıştır", "Anlatılamaz", "Benzerlik yasaktır"], 0, "Fark, değer eksikliği değildir."],
      ],
    },
    {
      title: "Merak sorusu",
      paragraphs: [
        "İyi okur, metnin açmadığı yeri sorar: “Okul ne kadar uzakta?” Bu soru, metni küçümsemez; derinleştirir.",
        "Cevabı metinde varsa tahmin değil, kanıt söylenir. Yoksa “metin söylemiyor” demek de dürüstlüktür.",
      ],
      example: "“Kar yağınca yol kapanıyormuş” cümlesi, okulun uzak olabileceğini düşündürür ama ölçüyü vermez.",
      questions: [
        ["Metinde olmayan bilgi için ne denir?", ["Metin söylemiyor", "Uydurulur", "Yanlış diye silinir", "Başka konuya çekilir"], 0, "Olmayanı varmış gibi göstermek okumayı bozar."],
        ["Merak sorusu ne işe yarar?", ["Metni derinleştirir", "Yazarı küçültür", "Olayı siler", "Deyimi bozar"], 0, "İyi soru, yeni bir bakış açar."],
        ["“Yol kapanıyormuş” ölçüyü verir mi?", ["Hayır, uzaklığı kesin söylemez", "Evet, 5 km’dir", "Evet, sıfırdır", "Bir deyimdir"], 0, "Kar, güçlüğü söyler; kilometreyi söylemez."],
      ],
    },
  ]),
  unit("İletişim ve sosyal ilişkiler", [19, 20, 21, 22, 23, 24], [
    {
      title: "Ekran ve yüz",
      paragraphs: [
        "Yüz yüze konuşmada ses tonu ve bakış vardır. Yazılı mesajda bunlar yoktur; kısa cümle sert anlaşılabilir.",
        "“Tamam.” ile “Tamam, teşekkürler.” aynı haberi verir, ikincisi kapıyı açık bırakır.",
      ],
      example: "Grup ödevinde “sen yap” yazmak yük yıkmaktır. “Ben sunumu alayım, sen kaynak bakar mısın?” iş bölümüdür.",
      questions: [
        ["Yazılı “tamam” neden sert anlaşılabilir?", ["Ses tonu görünmediği için", "Kelime yanlıştır", "Bir deyim olduğu için", "Her zaman övgüdür"], 0, "Mesaj, yüzün yumuşatmasını taşımaz."],
        ["İş bölümü hangi cümlededir?", ["Sen yap", "Ben sunumu alayım, sen kaynağa bakar mısın?", "Boş ver", "Sonra bakarız, kimse yazmasın"], 1, "İki kişiye de pay verilmiştir."],
        ["Teşekkür cümleye ne katar?", ["İlişkiyi yumuşatır", "Haberi siler", "Emri uzatıp sertleştirir", "Yanlış yapar"], 0, "Aynı haber daha az kırıcı olur."],
      ],
    },
    {
      title: "Sınır",
      paragraphs: [
        "İletişim, her isteğe evet demek değildir. Hayır derken sebep ve seçenek söylenebilir.",
        "“Bugün kalamam, yarına bırakabilir miyiz?” hem sınırı hem ilişkiyi korur.",
      ],
      example: "Şifreyi isteyen arkadaşa “Şifremi paylaşmam, birlikte girelim” demek hem hayır hem çözümüdür.",
      questions: [
        ["Sınırı koruyan cümle hangisidir?", ["Bugün kalamam, yarına bırakalım", "Sen bilirsin, ben yokum, açıklamam", "Her şeye evet", "Cevapsız bırakmak"], 0, "Hayır ve yeni bir zaman birlikte söylenir."],
        ["Şifre neden paylaşılmaz?", ["Hesap kişiseldir", "Arkadaşlık yasaktır", "Mesaj yüz yüze değildir diye", "Teşekkür yeter"], 0, "Şifre bir sırdır, iyilik diye verilmez."],
        ["Hayır derken seçenek sunmak ne işe yarar?", ["İlişkiyi koparmadan sınırı korur", "Hayırı evete çevirir", "Sorumluluğu siler", "Deyim olur"], 0, "Karşı taraf dışlanmaz."],
      ],
    },
  ]),
  unit("Bilim ve Teknoloji", [25, 26, 27, 28, 29, 30], [
    {
      title: "Açıklayıcı metin",
      paragraphs: [
        "Bilim metni bir soru sorar, sonra adım adım açıklar. Sıfat az, terim çoktur.",
        "“Ses, titreşimdir. Kulak zarı bu titreşimi alır.” İlk cümle tanım, ikincisi işleyiştir.",
      ],
      example: "Tanım “nedir”, işleyiş “nasıl olur” sorusuna cevap verir.",
      questions: [
        ["“Ses, titreşimdir” hangi cümledir?", ["Tanım", "Bir dilek", "Bir deyim", "Bir ret"], 0, "Sesin ne olduğunu söyler."],
        ["Bilim metninde sıra neden önemlidir?", ["İşleyiş adım adım anlaşılır", "Süs için", "Kafiye için", "Kişiyi gizlemek için"], 0, "Önce neden, sonra sonuç gelir."],
        ["İşleyiş hangi soruya cevap verir?", ["Nasıl olur?", "Kim yazdı?", "Kaç sayfa?", "Hangi yayınevi?"], 0, "Nasıl, süreci anlatır."],
      ],
    },
    {
      title: "İddia ve sınır",
      paragraphs: [
        "“Teknoloji her sorunu çözer” güçlü bir iddiadır. Metin bunu kanıtlamıyorsa okur inanmak zorunda değildir.",
        "Sınırlı cümle daha dürüsttür: “Sesli asistan hatırlatmayı kolaylaştırır ama kararın yerine geçmez.”",
      ],
      example: "Bir aracın işe yaraması, her işe yarayacağı anlamına gelmez.",
      questions: [
        ["“Her sorunu çözer” neden temkinli okunur?", ["Kanıtsız ve çok geniştir", "Bir tanımdır", "Bir ölçümdür", "Her zaman doğrudur"], 0, "Her, istisnasız iddiadır."],
        ["Sınırlı cümle ne yapar?", ["Nereye kadar doğru olduğunu söyler", "İddiayı siler", "Bilimi kapatır", "Deyim kurar"], 0, "Hem yararı hem sınırı yazar."],
        ["Sesli asistan örnekte ne yapmaz?", ["Kararın yerine geçmez", "Hatırlatmaz", "Ses çıkarmaz", "Teknoloji değildir"], 0, "Araç kolaylaştırır, seçimi kişi yapar."],
      ],
    },
  ]),
  unit("Lider ruhlar", [31, 32, 33, 34, 35, 36], [
    {
      title: "Liderliği ayırmak",
      paragraphs: [
        "Liderlik bağırarak öne geçmek değildir. Bir işi üstlenmek, başkasının emeğini görünür kılmak ve sözünde durmaktır.",
        "Sümeyye Boyacı gibi sporcuların hikâyesinde liderlik, engeli bahane etmeden çalışmayı da içerir.",
      ],
      example: "Grupta sunumu alan kişi, kaynağı bulan arkadaşının adını da söylerse emeği gizlememiş olur.",
      questions: [
        ["Liderlik hangisine yakındır?", ["İşi üstlenip sözünde durmak", "Herkesin yerine bağırmak", "Emeği gizlemek", "Yalnız ödül almak"], 0, "Sorumluluk ve güven liderliği kurar."],
        ["Arkadaşının adını anmak neyi gösterir?", ["Emeği görünür kıldığını", "Sunumu unuttuğunu", "Kaynağın yanlış olduğunu", "Bir deyim"], 0, "Ortak iş tek kişiye yazılmaz."],
        ["Engel karşısında liderce tutum hangisidir?", ["Çalışmayı sürdürmek", "Başlamamak", "Suçu yaymak", "Kuralı gizlemek"], 0, "Bahane, işi durdurur."],
      ],
    },
    {
      title: "Örnek kişiyi anlatmak",
      paragraphs: [
        "Bir kişiyi överken soyut sıfat yetmez. “Cesurdu” yerine yaptığı bir iş yazılır.",
        "Abartı, gerçeği zayıflatır. “Hiç hata yapmadı” yerine “hata görünce yeniden denedi” daha inandırıcıdır.",
      ],
      example: "“Yarıştan önce her gün antrenman yaptı” ölçülebilir bir kanıttır.",
      questions: [
        ["Kişiyi anlatırken ne yazılır?", ["Yaptığı somut iş", "Yalnız “mükemmeldi”", "Doğum yeri olmadan bir sıfat", "Alakasız bir skor"], 0, "Eylem, sıfattan güçlüdür."],
        ["Abartı neden zarar verir?", ["Gerçeği inandırıcı olmaktan çıkarır", "Metni kısaltır", "Kanıt olur", "Deyimdir"], 0, "Hiç hata yapmamak gerçekçi değildir."],
        ["“Her gün antrenman yaptı” ne tür cümledir?", ["Kanıt", "Bir dilek", "Bir ret", "Bir başlık"], 0, "Görülmüş bir işi söyler."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Dört araç",
      paragraphs: [
        "Etkinlik haftasında yeni tema yok. Deyim kalıptır, amaç olayları bağlar, karşılaştırmada benzerlik aranır, iddia sınır ister.",
      ],
      example: "“Kulak kabartmak” dinlemeye çalışmaktır, kulağı büyütmek değildir.",
      questions: [
        ["Deyim nasıl okunur?", ["Kalıbın bütün anlamıyla", "Sözcük sözcük", "Tersinden", "Yalnız ilk sözcük"], 0, "Anlam parçalara bölününce kaçar."],
        ["Birinci kişi anlatımda hangi söz vardır?", ["Ben", "O, her zaman", "Hiç özne", "Yalnız tarih"], 0, "Ben dili birinci kişidir."],
        ["Güçlü iddia neden temkinli okunur?", ["Kanıt ve sınır aranır", "Her zaman doğrudur", "Bir deyimdir", "Okunmaz"], 0, "“Her” diyen cümle kanıt ister."],
      ],
    },
  ]),
]

const sosyal = [
  unit("Birlikte yaşamak", [1, 2, 3, 4, 5, 6], [
    {
      title: "Değişen gruplar",
      paragraphs: [
        "İnsan ömrü boyunca gruptan gruba geçer: aile, okul, takım, iş. Grup değişince rol ve kural da değişir.",
        "Dün yalnız öğrenci olan kişi bugün aynı zamanda bir kulübün başkanı olabilir. Eski rol silinmez, yenisi eklenir.",
      ],
      example: "Ailede söz hakkı yaşla genişler. Okulda ise söz hakkı notla değil, sırayla kullanılır.",
      questions: [
        ["Grup değişince ne değişebilir?", ["Rol ve kural", "Kişinin adı zorunlu", "Ülkenin başkenti", "Bir doğa yasası"], 0, "Her grubun beklentisi başkadır."],
        ["Öğrenci aynı zamanda kulüp başkanı olabilir mi?", ["Evet", "Hayır", "Yalnız tatilde", "Yalnız bir kez"], 0, "Kişi birden çok role girer."],
        ["Okulda söz hakkı neye göre kullanılır?", ["Sırayla", "Kimin sesi yüksekse", "Yaş büyüdükçe kesin", "Notla satın alınarak"], 0, "Sınıf kuralı sıra tanır."],
      ],
    },
    {
      title: "Kültürel bağ ve sorun",
      paragraphs: [
        "Dil, bayram ve komşuluk kültürel bağ kurar. Bağ, insanı yalnız bırakmaz.",
        "Toplumsal sorun, birçok kişiyi etkileyen güçlüktür: trafik, çöp, eşitsizlik. Çözüm de birlikte aranır. Suçlu aramak yetmez, ne değişeceği konuşulur.",
      ],
      example: "Apartman çöpü dağınıksa sorun ortaktır. Bir nöbet listesi, kişileri suçlamadan düzen kurar.",
      questions: [
        ["Kültürel bağ ne işe yarar?", ["İnsanı ortak yaşama bağlar", "Sorunu gizler", "Rolü siler", "Haritayı bozar"], 0, "Ortak alışkanlık bir arada tutar."],
        ["Toplumsal sorun hangisidir?", ["Birçok kişiyi etkileyen güçlük", "Bir kişinin özel günlüğü", "Bir doğum günü", "Bir kesir"], 0, "Sorun ortaksa çözüm de ortak aranır."],
        ["Nöbet listesi neyi yapar?", ["Suçlamadan düzen kurar", "Çöpü artırır", "Kültürü yasaklar", "Grubu kapatır"], 0, "İş paylaşılınca sorun küçülür."],
      ],
    },
  ]),
  unit("Evimiz Dünya", [7, 8, 9, 10, 11, 12], [
    {
      title: "Konum",
      paragraphs: [
        "Türkiye, Asya ile Avrupa kıtalarının kesiştiği yerdedir. Üç yanı denizle çevrilidir: Karadeniz, Ege ve Akdeniz.",
        "Göreceli konum, komşulara ve denizlere göre tarif edilir. Matematik konum ise paralel ve meridyenle söylenir.",
      ],
      example: "“Ege’nin doğusu” göreceli bir tariftir. “36° kuzey” matematik konuma yakındır.",
      questions: [
        ["Türkiye hangi iki kıta üzerindedir?", ["Asya ve Avrupa", "Afrika ve Amerika", "Yalnız Avrupa", "Avustralya"], 0, "Küçük bir bölümü Avrupa’da, büyük bölümü Asya’dadır."],
        ["Hangisi göreceli konumdur?", ["Ege’nin doğusu", "36° kuzey", "Bir enlem derecesi yalnız", "Bir pusula markası"], 0, "Başka bir yere göre tarif görecelidir."],
        ["Türkiye’nin üç yanı hangi denizlerdedir?", ["Karadeniz, Ege, Akdeniz", "Hazar, Kızıldeniz, Umman", "Baltık, Kuzey, Adriyatik", "Yalnız Marmara"], 0, "Kuzey, batı ve güneyde bu denizler vardır."],
      ],
    },
    {
      title: "Doğa ve Türk dünyası",
      paragraphs: [
        "İklim, yer şekli ve su, yerleşimi değiştirir. Yüksek yerde kış uzun, kıyıda tarım ve turizm çeşitlenir.",
        "Türk dünyası, tarih ve dil bağı olan geniş bir coğrafyadır. Kültürel ilişki, ortak sözcük, yemek ve destanla görünür.",
      ],
      example: "“Ata” ve “ana” gibi sözcüklerin akraba dillerde benzemesi kültürel bir ipucudur.",
      questions: [
        ["Yüksek yerde kış neden uzun sürer?", ["Yükselti sıcaklığı düşürdüğü için", "Deniz olduğu için", "Turizm yasak diye", "Dil değiştiği için"], 0, "Yükseldikçe hava soğur."],
        ["Türk dünyası bağı yalnız sınır mıdır?", ["Hayır, dil ve tarih bağı da vardır", "Evet, yalnız bir şehir", "Bir deniz adıdır", "Bir iklim kuşağı yalnız"], 0, "Kültür, çizginin ötesine geçer."],
        ["İklim yerleşimi nasıl etkiler?", ["Geçim ve yaşam biçimini değiştirir", "Hiç etkilemez", "Yalnız bayrağı değiştirir", "Enlemi siler"], 0, "İnsan, iklimin imkânına göre yerleşir."],
      ],
    },
  ]),
  unit("Ortak mirasımız", [13, 14, 15, 16, 17, 18, 19, 20], [
    {
      title: "İlk Türk devletleri",
      paragraphs: [
        "Orta Asya’daki ilk Türk devletleri göçebe hayvancılık, ordu düzeni ve töre ile bilinir. Yazıtlar, bu dönemin kendi dilinden kalan kanıtlardır.",
        "Orhun Yazıtları, devlet yönetiminin adalet ve halkın birliği üzerine öğütlerini taşır.",
      ],
      example: "Yazıttaki öğüt, kağan ile halkın birbirine karşı sorumluluğunu anlatır.",
      questions: [
        ["Orhun Yazıtları neyin kanıtıdır?", ["O dönemin kendi sözünün", "Bir deniz savaşının", "Bir iklim grafiğinin", "Bir bütçenin"], 0, "Yazıt, birinci elden bir belgedir."],
        ["Töre nedir?", ["Topluluğun uyduğu gelenek ve kural", "Bir dağın adı", "Bir vergi birimi", "Bir harita ölçeği"], 0, "Töre, yazılı olmayan düzeni de içerir."],
        ["İlk Türk devletlerinin geçiminde önemli olan hangisidir?", ["Hayvancılık", "Okyanus balıkçılığı", "Çöl petrolü", "Kutup ticareti"], 0, "Bozkırda sürü esastı."],
      ],
    },
    {
      title: "İslam medeniyeti ve Anadolu",
      paragraphs: [
        "VII. yüzyıldan sonra İslam medeniyeti bilim, çeviri ve şehir hayatında ortak mirasa katkı yaptı. Türkler İslamiyet’i kabul edince bu birikimle kendi devlet geleneğini buluşturdu.",
        "XI. yüzyıldan itibaren Anadolu’ya yönelen akınlar ve Malazgirt, Anadolu’nun Türkleşmesinde dönüm noktasıdır.",
      ],
      example: "1071 Malazgirt, Anadolu kapısının Türk boylarına açıldığı savaş olarak okunur.",
      questions: [
        ["Malazgirt hangi yıldır?", ["1071", "1453", "1923", "1881"], 0, "Malazgirt Zaferi 1071’dedir."],
        ["İslam medeniyetinin katkılarından biri hangisidir?", ["Çeviri ve bilim birikimi", "Kutup araştırması", "Buharlı gemi", "Birleşmiş Milletler"], 0, "Beytü’l-hikme gibi merkezlerde çeviri yapıldı."],
        ["Anadolu’nun Türkleşmesi neye bağlanır?", ["XI. yüzyıldaki yerleşmeye", "Yalnız Cumhuriyet’e", "Bir iklim değişimine", "Deniz ticaretine yalnız"], 0, "Malazgirt sonrası yerleşme hızlandı."],
      ],
    },
  ]),
  unit("Yaşayan demokrasimiz", [21, 22, 23, 24, 25, 26], [
    {
      title: "Karar ve hak",
      paragraphs: [
        "Yönetimin kararını seçimler, kanunlar ve kurumlar etkiler. Vatandaş oy, dilekçe ve örgütlenmeyle sürece katılır.",
        "Temel haklar kişiye aittir: eğitim, ifade, güvenli yaşamak. Hak kullanılırken başkasının hakkı çiğnenmez.",
      ],
      example: "Sınıf kuralına itiraz dilekçesi, küçük bir katılım alıştırmasıdır.",
      questions: [
        ["Vatandaş karara nasıl katılır?", ["Oy, dilekçe ve örgütlenmeyle", "Yalnız bağırarak", "Kurumu kapatarak", "Hakkı devrederek"], 0, "Katılımın yolları vardır."],
        ["Hak kullanırken sınır nedir?", ["Başkasının hakkını çiğnememek", "Sınır yoktur", "Yalnız yaş", "Bir coğrafya kuralı"], 0, "Haklar birbirine karşı da geçerlidir."],
        ["Dilekçe nedir?", ["Kuruma yazılı başvuru", "Bir destan", "Bir vergi", "Bir iklim"], 0, "Dilekçe, talebi kayıt altına alır."],
      ],
    },
    {
      title: "Dijital hayatta hak",
      paragraphs: [
        "Dijital ortamda da hak vardır. İzinsiz fotoğraf, hakarete varan yorum ve şifre paylaşımı bu hakları zedeler.",
        "Kaynağı belirsiz haber hemen yayılmaz. Doğrulamak, başkasını yanlış bilgiyle suçlamamaktır.",
      ],
      example: "Ekran görüntüsünü alıp güvendiğin yetişkine göstermek, zorbalıkta ilk adımdır.",
      questions: [
        ["İzinsiz fotoğraf neden sorunludur?", ["Kişinin hakkını çiğner", "Teknolojiyi hızlandırır", "Bir dilekçedir", "Bir töredir"], 0, "Görüntü de kişiye aittir."],
        ["Belirsiz haber için ne yapılır?", ["Doğrulanmadan yayılmaz", "Hemen herkese iletilir", "Şifreyle birlikte yollanır", "Silinmiş sayılır"], 0, "Yanlış bilgi de zarar verir."],
        ["Dijital zorbalıkta ilk güvenli adım hangisidir?", ["Yetişkine göstermek", "Aynı sözle cevap yarışı", "Hesabı arkadaşla paylaşmak", "Görmezden gelip büyütmek"], 0, "Kanıt saklanır ve haber verilir."],
      ],
    },
  ]),
  unit("Hayatımızdaki ekonomi", [27, 28, 29, 30, 31, 32], [
    {
      title: "Kaynak ve üretim",
      paragraphs: [
        "Ülkenin kaynakları toprak, su, maden, insan emeği ve bilgidir. Üretim, bu kaynakları mal ve hizmete çevirir.",
        "Tarım, sanayi, turizm ve ticaret başlıca ekonomik faaliyetlerdir. Bir il, kaynağına göre bunlardan birinde öne çıkar.",
      ],
      example: "Kıyı ilinde turizm, verimli ovada tarım, maden bölgesinde sanayi ağır basabilir.",
      questions: [
        ["Üretim nedir?", ["Kaynağı mal ve hizmete çevirmek", "Parayı saklamak", "Yalnız vergi almak", "Bir destan"], 0, "Üretim, işlenmiş sonuçtur."],
        ["Verimli ovada hangi faaliyet öne çıkabilir?", ["Tarım", "Kutup balıkçılığı", "Çöl turizmi zorunlu", "Hiçbiri"], 0, "Toprak, tarımı mümkün kılar."],
        ["İnsan emeği bir kaynak mıdır?", ["Evet", "Hayır", "Yalnız maden sayılır", "Bir yön adıdır"], 0, "Bilgi ve emek de üretir."],
      ],
    },
    {
      title: "Yatırım fikri",
      paragraphs: [
        "Bir ürün tasarlanırken kime satılacağı, maliyeti ve kaynağı sorulur. Maliyet satıştan büyükse ürün zarar eder.",
        "İhtiyacı karşılayan sade ürün, süslü ama gereksiz üründen daha tutarlı bir fikirdir.",
      ],
      example: "Okulda unutulan kalemler için 10 liralık bir yedek kutu fikri, 500 liralık süs kutudan daha gerçekçidir.",
      questions: [
        ["Maliyet satıştan büyükse ne olur?", ["Zarar", "Kesin kâr", "Vergi silinir", "Kaynak çoğalır"], 0, "Harcanan, gelenden fazladır."],
        ["İyi ürün fikri hangisine yakındır?", ["Gerçek bir ihtiyaca", "Yalnız süse", "Maliyetsiz sonsuz üretime", "Kimsenin kullanmayacağı şeye"], 0, "İhtiyaç, alıcıyı belirler."],
        ["Yatırım sorularından biri hangisidir?", ["Kime satılacak?", "Hangi destan?", "Hangi enlem süs?", "Hangi refleks?"], 0, "Alıcı olmadan üretim planlanmaz."],
      ],
    },
  ]),
  unit("Teknoloji ve sosyal bilimler", [33, 34, 35, 36], [
    {
      title: "Ulaşım ve telif",
      paragraphs: [
        "Ulaşım teknolojisi uzaklığı kısaltır. Yol, köprü ve internet, mal ile fikrin dolaşmasını hızlandırır.",
        "Telif, bir eseri üretenden izinsiz kopyalamamaktır. Başkasının yazısını kendi ödevin gibi vermek telif ve emek hakkını çiğner.",
      ],
      example: "Kaynakça yazmak, kullandığın cümlenin sahibini göstermektir.",
      questions: [
        ["Telif neyi korur?", ["Eseri üretenin hakkını", "Yolu", "İklimi", "Bir madeni"], 0, "İzinsiz kopya bu hakkı bozar."],
        ["Kaynakça neden yazılır?", ["Alıntının sahibini göstermek için", "Sayfayı doldurmak için", "Notu gizlemek için", "Haritayı silmek için"], 0, "Emek görünür olur."],
        ["İnternet uzaklığı nasıl kısaltır?", ["Fikir ve haber çabuk gider", "Yolu fiziksel olarak siler", "Telifı yok eder", "Üretimi durdurur"], 0, "Mesaj, yolu beklemez."],
      ],
    },
    {
      title: "Araştırma adımı",
      paragraphs: [
        "Sosyal bilimlerde soru sorulur, bilgi toplanır, kaynak karşılaştırılır ve sonuç yazılır.",
        "Tek kaynağa dayanmak yanlışı büyütebilir. İki güvenilir kaynak aynı şeyi söylüyorsa iddia güçlenir.",
      ],
      example: "İlin nüfusunu bir blogdan değil, resmî istatistikten almak araştırmayı sağlamlaştırır.",
      questions: [
        ["Araştırmada ilk adım nedir?", ["Soru sormak", "Sonucu uydurmak", "Kaynakçayı silmek", "Tek bir yorumu ezberlemek"], 0, "Soru, ne aranacağını belirler."],
        ["Nüfus bilgisi nereden alınır?", ["Resmî istatistikten", "Adsız bir yorumdan", "Bir deyimden", "Bir refleksten"], 0, "Resmî kaynak denetlenebilir."],
        ["İki güvenilir kaynak aynı şeyi söylüyorsa ne olur?", ["İddia güçlenir", "Araştırma bozulur", "Telif doğar", "Soru silinir"], 0, "Karşılaştırma doğrulamadır."],
      ],
    },
  ]),
  unit("Yıl sonu tekrarı", [37], [
    {
      title: "Dört başlık",
      paragraphs: [
        "Etkinlik haftasında yeni ünite yok. Göreceli konum bir yeri başka yere göre söyler. Malazgirt 1071’dir. Telif, eserin sahibine saygıdadır.",
      ],
      example: "Kaynakça yazmak telif alışkanlığıdır.",
      questions: [
        ["Malazgirt hangi yıldır?", ["1071", "1923", "1453", "1299"], 0, "1071, Anadolu kapısı olarak okunur."],
        ["Göreceli konum hangisidir?", ["Ege’nin doğusu", "39° kuzey yalnız", "Bir kaynakça", "Bir maliyet"], 0, "Başka bir yere göre tarif vardır."],
        ["Başkasının cümlesini kaynak göstermeden kullanmak neyi çiğner?", ["Emek ve telif hakkını", "İklimi", "Yönü", "Bir refleksi"], 0, "Cümle de bir eserdir."],
      ],
    },
  ]),
]

export const grade6 = { Matematik: matematik, Fen: fen, Türkçe: turkce, Sosyal: sosyal }
