import { ask, lesson, numeric, seq } from "./make.js"

function factors(day) {
  const cards = [
    () =>
      lesson(
        "Çarpan",
        "Bir doğal sayının çarpanı, o sayıyı kalansız bölen doğal sayıdır. 18’i bölen sayılar 1, 2, 3, 6, 9 ve 18’dir; 4 ve 5 yoktur.",
        "Sık karışan nokta, sayının katlarını çarpan sanmaktır. 36, 18’in katıdır; 18’in çarpanı değildir.",
        "18 ÷ 6 = 3 kaldırsız bittiği için 6, 18’in çarpanıdır. 18 ÷ 5 = 3 kalan 3 olduğu için 5 çarpan değildir.",
        [
          ask("18’in çarpanı olmayan hangisidir?", "5", "6", "9", "3", "5, 18’i kalansız bölmez. 18 ÷ 5 işleminde kalan vardır.", 0),
          ask("36, 18 için hangisidir?", "Kat", "Çarpan", "Asal çarpan", "Ortak bölen", "36 = 18 × 2. Büyük olan, küçüğün katıdır.", 1),
          ask("1 sayısı 18’in çarpanı mıdır?", "Evet, her sayının çarpanıdır", "Hayır, 1 çarpan sayılmaz", "Yalnız asal sayılarda", "Yalnız çift sayılarda", "Her doğal sayı 1’e ve kendine bölünür.", 2),
        ],
      ),
    () =>
      lesson(
        "Kat",
        "Bir sayının katları, o sayının 1, 2, 3… ile çarpımından çıkar. 7’nin ilk katları 7, 14, 21, 28 ve 35’tir.",
        "Katlar sonsuza gider; listeyi dört sayıda kesmek, başka kat yok demek değildir.",
        "7 × 4 = 28. 28’i 7’ye bölünce kalan 0’dır, yani 28 bir kattır.",
        [
          ask("28, 7’nin katı mıdır?", "Evet", "Hayır", "Yalnız 7 asal olduğu için hayır", "Yalnız tek katlarda evet", "28 ÷ 7 = 4. Kalan olmadığı için kattır.", 0),
          ask("7’nin 5 ile çarpımından çıkan kat hangisidir?", "35", "30", "42", "12", "7 × 5 = 35. 30, 7’nin katı değildir.", 1),
          ask("Bir sayının katları için doğru olan hangisidir?", "Sıfırdan büyük doğal sayılarla çarpılarak bulunur", "Yalnız sayının yarısıdır", "En fazla üç tanedir", "Sayının çarpanlarından küçüktür", "n × 1, n × 2, n × 3… katları verir.", 2),
        ],
      ),
    () =>
      lesson(
        "Ortak kat",
        "Ortak kat, verilen sayıların hepsinin katı olan sayıdır. 4 ve 6’nın ortak katlarından biri 12’dir; en küçüğü de 12’dir.",
        "Ortak kat, sayılardan birinin çarpanı değildir. 2, ikisinin de çarpanıdır ama ortak kat değildir.",
        "12 ÷ 4 = 3 ve 12 ÷ 6 = 2. İki bölme de kaldırsız bittiği için 12 ortak kattır.",
        [
          ask("4 ve 6’nın en küçük ortak katı kaçtır?", "12", "2", "24", "10", "12, her ikisine de bölünür. 2 ikisinin katı değil, ortak bölenidir.", 0),
          ask("24, 4 ve 6 için nedir?", "Ortak kat", "En büyük ortak bölen", "Asal sayı", "Yalnız 4’ün çarpanı", "24 hem 4’e hem 6’ya bölünür, bu yüzden ortak kattır.", 1),
          ask("4 ve 6’nın ortak katı olmayan hangisidir?", "8", "12", "24", "36", "8, 4’e bölünür ama 6’ya bölünmez.", 2),
        ],
      ),
    () =>
      lesson(
        "Ortak bölen",
        "Ortak bölen, verilen sayıların hepsini kalansız bölen sayıdır. 12 ve 18’in ortak bölenleri 1, 2, 3 ve 6’dır. En büyüğü 6’dır.",
        "En büyük ortak bölen, sayılardan büyük olamaz. 36 ikisinin de katıdır, böleni değildir.",
        "12 ÷ 6 = 2 ve 18 ÷ 6 = 3. 6’dan büyük bir ortak bölen yoktur.",
        [
          ask("12 ve 18’in en büyük ortak böleni kaçtır?", "6", "36", "2", "9", "6 ikisini de böler. 9, 18’i böler ama 12’yi bölmez.", 0),
          ask("12 ve 18’in ortak böleni olmayan hangisidir?", "9", "3", "2", "1", "9, 12’yi kalansız bölmez.", 1),
          ask("Ortak bölen ile ortak katı ayıran yargı hangisidir?", "Bölen, sayılardan büyük olamaz", "Bölen her zaman sayıların çarpımıdır", "Kat, sayılardan küçük olur", "1 ortak bölen sayılmaz", "Ortak bölenler sayıların kendisine kadardır; ortak katlar o sayılardan büyük olabilir.", 2),
        ],
      ),
    () =>
      lesson(
        "Çarpan ve katı birlikte kullanmak",
        "20’nin çarpanları 1, 2, 4, 5, 10 ve 20’dir. 20’nin katları ise 20, 40, 60… diye büyür. Aynı sayı hem çarpan hem kat olabilir: 20, kendisinin hem çarpanı hem katıdır.",
        "«20’nin çarpanı 40’tır» yanlıştır. 40 daha büyüktür; 20’nin katıdır.",
        "20 ÷ 5 = 4 olduğu için 5 çarpandır. 5 × 4 = 20 olduğu için 20, 5’in katıdır.",
        [
          ask("40, 20 için hangisidir?", "Kat", "Çarpan", "Ortak bölen", "Asal çarpan", "40 = 20 × 2. 40, 20’den büyüktür ve kalansız bölünür.", 0),
          ask("20’nin çarpanı olmayan hangisidir?", "6", "4", "10", "5", "20 ÷ 6 bölmesi kalansız bitmez.", 1),
          ask("Bir sayı kendisinin katı mıdır?", "Evet, 1 ile çarpımı kendisidir", "Hayır", "Yalnız çift sayılarda", "Yalnız asal sayılarda", "n × 1 = n. Her doğal sayı kendi katıdır.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function divisibility(day) {
  const cards = [
    () =>
      lesson(
        "2’ye bölünebilme",
        "Son rakamı 0, 2, 4, 6 veya 8 olan doğal sayılar 2’ye bölünür. Bunlar çift sayılardır. 3 574 son rakamı 4 olduğu için 2’ye bölünür.",
        "Sayının tamamını ikiye bölmek şart değildir. Yalnız son rakama bakılır. 3 574’ün ilk rakamları tek olsa da son rakam kararı verir.",
        "3 574 ÷ 2 = 1 787. Kalan 0. Sonda 5 olsaydı, örneğin 3 575, kalan 1 olurdu.",
        [
          ask("3 574, 2’ye bölünür mü?", "Evet, son rakamı 4", "Hayır, binler basamağı tek", "Yalnız son iki rakam 74 çiftse", "Hayır, üç basamaktan uzun", "Çift olan son rakam yeterlidir. 4 çifttir.", 0),
          ask("Hangisinin son rakamı 2’ye bölünmeyi bozar?", "3 575", "3 570", "3 576", "3 578", "3 575 sonda 5 ile biter. 5 tek rakamdır.", 1),
          ask("2’ye bölünebilme kuralında nereye bakılır?", "Yalnız son rakama", "Yalnız ilk rakama", "Rakamlar toplamına", "Basamak sayısına", "Sayının geri kalanını toplamak 3 ve 9 kuralıdır, 2 kuralı değildir.", 2),
        ],
      ),
    () =>
      lesson(
        "5’e bölünebilme",
        "Son rakamı 0 veya 5 olan sayılar 5’e bölünür. 2 460 sonda 0 olduğu için bölünür. 2 465 de sonda 5 olduğu için bölünür.",
        "Sonda 5 olması sayıyı 10’a böldürmez. 2 465, 5’e bölünür ama 10’a bölünmez.",
        "2 465 ÷ 5 = 493. 2 465 ÷ 10 işleminde ise kalan 5’tir.",
        [
          ask("2 465, 5’e bölünür mü?", "Evet, son rakamı 5", "Hayır, tek sayıdır", "Yalnız son rakam 0 ise", "Hayır, 4 içerdiği için", "Kural iki ucu da kabul eder: 0 veya 5.", 0),
          ask("2 465, 10’a bölünür mü?", "Hayır", "Evet", "Yalnız 5’e bölündüğü için evet", "Son rakam tek olduğu için evet", "10’a bölünen sayı 0 ile biter. 5 yetmez.", 1),
          ask("5’e bölünmeyen hangisidir?", "2 464", "2 460", "2 465", "2 470", "2 464 sonda 4 ile biter.", 2),
        ],
      ),
    () =>
      lesson(
        "10’a bölünebilme",
        "Bir doğal sayı 10’a ancak son rakamı 0 ise bölünür. Bu, sayının hem 2’ye hem 5’e bölündüğü anlamına gelir. 4 870 sonu 0 olduğu için 10’a bölünür; 4 875 bölünmez.",
        "«5’e bölünüyorsa 10’a da bölünür» yanlıştır. 4 875 beşe bölünür, ona bölünmez. Sonda 5, onluk bozar.",
        "4 870 ÷ 10 = 487. Sıfır atılır, kalan olmaz. 4 875 ÷ 10 = 487 kalan 5.",
        [
          ask("4 870, 10’a bölünür mü?", "Evet, son rakamı 0", "Hayır, 8 çift değil diye", "Yalnız ilk rakam 4 olduğu için hayır", "Hayır, üç basamaklı değil", "Son rakam 0 ise sayı 10’un katıdır. 4 870 ÷ 10 = 487.", 0),
          ask("4 875 neden 10’a bölünmez?", "Son rakamı 5’tir", "5’e de bölünmediği için", "Rakamları toplamı 24 olduğu için", "Çift sayı olduğu için", "4 875, 5’e bölünür ama 2’ye bölünmez. 10 için ikisi birden gerekir.", 1),
          ask("Hem 2’ye hem 5’e bölünen bir sayı için kesin olan hangisidir?", "10’a da bölünür", "Yalnız 3’e bölünür", "Son rakamı 5’tir", "Asaldır", "2 ve 5’in ortak katı 10’dur. İkisine birden bölünen sayı 10’a bölünür.", 2),
        ],
      ),
    () =>
      lesson(
        "3’e bölünebilme",
        "Rakamları toplamı 3’e bölünen sayılar 3’e bölünür. 2 715 için 2 + 7 + 1 + 5 = 15 ve 15, 3’e bölündüğü için 2 715 de bölünür.",
        "Son rakama bakmak 3 kuralı değildir. 2 715 tek sayıdır ama 3’e bölünür. Çift olmak gerekmez.",
        "15 ÷ 3 = 5. Toplam bölündüğü için sayı da bölünür: 2 715 ÷ 3 = 905.",
        [
          ask("2 715, 3’e bölünür mü?", "Evet, rakamlar toplamı 15", "Hayır, son rakamı 5", "Hayır, tek sayıdır", "Yalnız 9’a bölündüğü için", "2 + 7 + 1 + 5 = 15 ve 15 ÷ 3 = 5.", 0),
          ask("2 714, 3’e bölünür mü?", "Hayır, rakamlar toplamı 14", "Evet, son rakam çift", "Evet, 2 715’ten 1 eksik diye", "Yalnız 2’ye bölündüğü için evet", "2 + 7 + 1 + 4 = 14. 14, 3’e bölünmez.", 1),
          ask("3’e bölünebilmede hangi bilgi yeterlidir?", "Rakamlar toplamı", "Yalnız son rakam", "Yalnız son iki rakam", "Basamak sayısı", "Son iki rakam 4 kuralında kullanılır. 3 kuralı toplam ister.", 2),
        ],
      ),
    () =>
      lesson(
        "4 ve 9",
        "4’e bölünmede son iki rakamın oluşturduğu sayıya bakılır. 3 516’nın son iki rakamı 16’dır ve 16, 4’e bölündüğü için sayı da bölünür. 9’da ise rakamlar toplamı 9’a bölünmelidir: 3 + 5 + 1 + 6 = 15, 15 dokuza bölünmez.",
        "9 kuralını 3 kuralıyla bir tutmak yanlıştır. 15, 3’e bölünür ama 9’a bölünmez. 3 516, 3’e bölünür, 9’a bölünmez.",
        "16 ÷ 4 = 4, bu yüzden 3 516 dörtte bölünür. Toplam 15 olduğu için dokuzda bölünmez.",
        [
          ask("3 516, 4’e bölünür mü?", "Evet, 16 dörde bölünür", "Hayır, rakamlar toplamı 15", "Yalnız son rakam 6 ise", "Hayır, 5 tek", "Son iki basamak 16’dır. 16 ÷ 4 = 4.", 0),
          ask("3 516, 9’a bölünür mü?", "Hayır, toplam 15", "Evet, 4’e bölündüğü için", "Evet, son rakam 6", "Evet, toplam 3’e bölündüğü için", "9, 3’ten sıkıdır. Toplamın 9’a bölünmesi gerekir; 15 yetmez.", 1),
          ask("1 332, 9’a bölünür mü?", "Evet, rakamlar toplamı 9", "Hayır, son iki rakam 32", "Hayır, çift olduğu için", "Yalnız 4’e bölündüğü için hayır", "1 + 3 + 3 + 2 = 9. 9 ÷ 9 = 1, kalan 0.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function primes(day) {
  const cards = [
    () =>
      lesson(
        "Asal sayı",
        "Asal sayı, 1’den büyük ve yalnız 1 ile kendisine bölünen doğal sayıdır. 2, 3, 5, 7 ve 11 asaldır. 2, tek çift asal sayıdır.",
        "1 asal değildir. Çarpanı yalnız kendisi gibi görünse de asal tanımı 1’i dışarıda bırakır; iki farklı çarpanı yoktur.",
        "11’i 2, 3, 4, 5, 6, 7, 8, 9, 10 bölemez. Çarpanları yalnız 1 ve 11’dir.",
        [
          ask("1 asal mıdır?", "Hayır", "Evet, tek çarpanı vardır", "Yalnız tek sayı olduğu için evet", "2’den küçük her sayı asaldır", "Asal sayılar 2’den başlar. 1’in iki ayrı çarpanı yoktur.", 0),
          ask("2 için doğru olan hangisidir?", "Tek çift asal sayıdır", "Asal değildir, çifttir", "1’in katı olduğu için asal değildir", "Yalnız 4’e bölündüğü için asaldır", "2’nin çarpanları 1 ve 2’dir. Başka çift asal yoktur.", 1),
          ask("Hangisi asal değildir?", "9", "5", "7", "11", "9 = 3 × 3. Kendisinden ve 1’den başka çarpanı vardır.", 2),
        ],
      ),
    () =>
      lesson(
        "Asal olmayan sayı",
        "1’den ve kendinden başka çarpanı olan sayılar asal değildir. 15 = 3 × 5 olduğu için asal değildir. 4 = 2 × 2, 9 = 3 × 3, 21 = 3 × 7 de asal değildir.",
        "Tek olmak asal olmak demek değildir. 15, 21 ve 9 tek sayıdır ama çarpım şeklinde yazılır.",
        "15’i 3’e bölünce 5 çıkar, kalan 0’dır. Üçüncü bir çarpan bulunduğu anda sayı asal olmaktan çıkar.",
        [
          ask("15 neden asal değildir?", "3 × 5 biçiminde yazılır", "Tek sayı olduğu için", "5 ile bittiği için asaldır aslında", "1’den küçük olduğu için", "Asal sayının 1 ve kendinden başka çarpanı olmaz. 3 ve 5 vardır.", 0),
          ask("4 asal mıdır?", "Hayır", "Evet, küçük olduğu için", "Evet, 2’nin katı olduğu için", "Yalnız karesi olduğu için evet", "4 = 2 × 2. Çift olan asallar içinde yalnız 2 vardır.", 1),
          ask("Hangisi asaldır?", "13", "15", "21", "27", "13’ün çarpanı 1 ve 13’tür. Diğerleri 3 ile çarpılarak elde edilir.", 2),
        ],
      ),
    () =>
      lesson(
        "Aralarında asal",
        "İki sayı, 1’den başka ortak bölenleri yoksa aralarında asaldır. Sayıların kendisi asal olmak zorunda değildir. 8 ve 15 aralarında asaldır; 8 asal değildir.",
        "«Biri asal değilse aralarında asal olamazlar» yanlıştır. 8 = 2 × 2 × 2, 15 = 3 × 5. Ortak asal çarpan yoktur.",
        "8’in bölenleri 1, 2, 4, 8. 15’in bölenleri 1, 3, 5, 15. Kesişen yalnız 1’dir.",
        [
          ask("8 ve 15 aralarında asal mıdır?", "Evet", "Hayır, 8 asal değil", "Hayır, ikisi de tek değil", "Yalnız toplamları asal ise", "Ortak bölenleri yalnız 1’dir. Sayıların ayrı ayrı asal olması gerekmez.", 0),
          ask("8 ve 12 aralarında asal mıdır?", "Hayır, ortak bölenleri 4’tür", "Evet, ikisi de çifttir", "Evet, 1 ortak bölen sayılmaz", "Yalnız 2 asal olduğu için evet", "4, ikisini de böler. Ortak bölen 1’den büyüktür.", 1),
          ask("Aralarında asal iki sayı için kesin olan hangisidir?", "1’den büyük ortak bölenleri yoktur", "İkisi de asaldır", "Toplamları asaldır", "Çarpımları asaldır", "Tanım ortak bölene bakar, sayıların asal olup olmadığına bakmaz.", 2),
        ],
      ),
    () =>
      lesson(
        "Asal çarpan",
        "Bir sayı, asal sayıların çarpımı olarak yazılabilir. 30 = 2 × 3 × 5. 2, 3 ve 5 asal çarpanlardır. 6 da 30’u böler ama 6 asal değildir, çarpan ağacının ucu olmaz.",
        "Çarpan ağacında dalı asal olmayan sayıda bırakmak işi yarım bırakır. 6’yı 2 × 3 diye açmak gerekir.",
        "30 ÷ 2 = 15, 15 ÷ 3 = 5, 5 asaldır. Uçlar 2, 3 ve 5’tir.",
        [
          ask("30’un asal çarpanları hangileridir?", "2, 3 ve 5", "2 ve 15", "5 ve 6", "1, 2 ve 3", "15 ve 6 asal değildir. Ağaç asal uçlara kadar bölünür.", 0),
          ask("6, 30’un asal çarpanı mıdır?", "Hayır", "Evet", "Yalnız 30 çiftse", "1 ile birlikte evet", "6 = 2 × 3. Asal çarpan, kendisi asal olan çarpandır.", 1),
          ask("12’nin asal çarpanları hangileridir?", "2 ve 3", "2, 3 ve 6", "1 ve 12", "4 ve 3", "12 = 2 × 2 × 3. 4 asal olmadığı için listede durmaz.", 2),
        ],
      ),
    () =>
      lesson(
        "Çarpan ağacı",
        "60’ı asal çarpanlarına ayırırken önce 2’ye bölünür: 60 = 2 × 30, 30 = 2 × 15, 15 = 3 × 5. Sonuç 2 × 2 × 3 × 5’tir. Aynı asal birden çok kez yazılır.",
        "60 = 6 × 10 doğrudur ama ikisi de asal değildir. Ağaç burada bitemez.",
        "2 × 2 × 3 × 5 = 4 × 15 = 60. Çarpım, baştaki sayıyı geri verir.",
        [
          ask("60’ın asal çarpanlara ayrılmış biçimi hangisidir?", "2 × 2 × 3 × 5", "6 × 10", "4 × 15", "2 × 30", "6, 10, 4, 15 ve 30 asal değildir.", 0),
          ask("60 = 2 × 2 × 3 × 5 çarpımında 2 neden iki kez vardır?", "2 × 2 = 4, 60’ın içindeki 4’ü kurar", "2 asal olmadığı için", "Yazım süsü olarak", "60 çift diye bir kez yeter, ikincisi fazladır", "Bir asal, sayı içinde kaç kez geçiyorsa o kadar yazılır.", 1),
          ask("Ağaç hangi sayıda durur?", "Asal sayıda", "Çift sayıda", "İki basamaklı sayıda", "1’de", "Uç asal ise artık bölünmez. 1’e inilmez.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function experiment(day) {
  const trials = 20
  const blue = 4 + day
  const other = trials - blue
  return lesson(
    "Deneysel olasılık",
    `${trials} kez tekrarlanan bir çekilişte mavi boncuk ${blue} kez geldi. Deneysel olasılık, gelen sonucun deneme sayısına bölümüdür: ${blue}/${trials}. Bu, «olması gereken» teorik oran değildir; bu deneyde görülen orandır.`,
    "Sık karışan nokta, iki renk varsa olasılığı doğrudan 1/2 yazmaktır. Renk sayısı teorik tahmindir. Deneysel olasılık, sayılan sıklıktan çıkar.",
    `${blue} ÷ ${trials} = ${blue}/${trials}. Mavi gelmeyen deneme ${other} tanedir; onun deneysel olasılığı ${other}/${trials} olur.`,
    [
      ask(
        `${trials} denemede mavi ${blue} kez gelmişse deneysel olasılık hangisidir?`,
        `${blue}/${trials}`,
        "1/2",
        `${blue}/${other}`,
        `${other}/${blue}`,
        `Pay, istenen sonucun sıklığıdır. Payda, bütün denemelerdir: ${blue}/${trials}.`,
        day,
      ),
      ask(
        "Aynı deneyde mavi gelmeme sıklığı kaçtır?",
        String(other),
        String(blue),
        String(trials),
        "1/2",
        `${trials} − ${blue} = ${other}. Sıklık bir oran değil, kaç kez sayıldığıdır.`,
        day + 1,
      ),
      ask(
        "Deneysel olasılık ile teorik olasılığı ayıran yargı hangisidir?",
        "Deneysel olan, yapılan denemeden sayılır",
        "İkisi de her zaman 1/2’dir",
        "Teorik olasılık deney yapmadan yazılamaz",
        "Sıklık arttıkça payda küçülür",
        "Teorik olasılık eşit şansa göre kurulur. Deneysel olasılık bu turda sayılan sonuçtır.",
        day + 2,
      ),
    ],
  )
}

function decimals(day) {
  const cards = [
    () =>
      lesson(
        "Ondalık basamak",
        "3,47 sayısında 3 birler, 4 onda birler, 7 yüzde birler basamağıdır. Virgülün sağına doğru her adımda payda 10 kat büyür: 4/10 ve 7/100.",
        "Virgülün sağındaki ilk rakamı yüzde bir sanmak yanlıştır. İlk basamak onda bir, ikinci basamak yüzde birdir.",
        "3,47 = 3 + 4/10 + 7/100. 7’yi 7/10 yazmak sayıyı 3,7 yapar, 3,47 değil.",
        [
          ask("3,47 içinde 7 hangi basamaktadır?", "Yüzde birler", "Onda birler", "Birler", "Onlar", "Virgülden sonra ikinci basamak yüzde birlerdir.", 0),
          ask("3,47 içinde 4’ün değeri hangisidir?", "4/10", "4/100", "4", "40", "İlk ondalık basamak onda birliktir.", 1),
          ask("3,47 için yanlış çözümleme hangisidir?", "3 + 4/100 + 7/10", "3 + 4/10 + 7/100", "3 + 0,4 + 0,07", "347/100", "4 ile 7’nin paydaları yer değiştirirse sayı 3,74 olur.", 2),
        ],
      ),
    () =>
      lesson(
        "Sıfırın anlamı",
        "4,08 sayısında onda birler basamağı 0’dır. Bu sıfır, 8’i yüzde birde tutar. Sıfırı silip 4,8 yazmak sayıyı yüz kat değil, on kat büyütür: 4,08 ile 4,8 ayrı sayılardır.",
        "«Virgülden sonraki sıfırın değeri yoktur» yargısı sondaki sıfırla karışır. 4,80 içindeki sondaki sıfır değeri değiştirmez; 4,08 içindeki sıfır değiştirir.",
        "4,08 = 4 + 0/10 + 8/100 = 408/100. 4,8 = 48/10 = 480/100.",
        [
          ask("4,08 ile 4,8 eşit midir?", "Hayır", "Evet, sıfırın değeri yoktur", "Evet, ikisi de 4 ile başlar", "Yalnız 8 ortak olduğu için evet", "4,08 = 408/100, 4,8 = 480/100.", 0),
          ask("4,08 içindeki 8’in paydası kaçtır?", "100", "10", "8", "1000", "8, virgülden sonra ikinci basamaktadır.", 1),
          ask("4,80 ile 4,8 için doğru olan hangisidir?", "Eşittir", "4,80 daha büyüktür", "4,8 daha büyüktür", "Karşılaştırılamaz", "Sondaki sıfır, yüzde birler basamağında 0 demektir. Değer değişmez.", 2),
        ],
      ),
    () =>
      lesson(
        "Karşılaştırma",
        "3,4 ile 3,39 karşılaştırılırken virgülden sonraki basamak sayısı eşitlenir. 3,4 = 3,40. Yüzde birler basamağında 0, 9’dan küçüktür; bu yüzden 3,39 < 3,40.",
        "«39, 4’ten büyük, o halde 3,39 daha büyüktür» yanlıştır. 39 burada iki basamaktır, 4 ise onda birliktir.",
        "3,40 − 3,39 = 0,01. Fark bir yüzde birliktir.",
        [
          ask("Hangisi daha büyüktür?", "3,4", "3,39", "Eşittir", "3,39, çünkü 39 > 4", "3,4 = 3,40 ve 3,40 > 3,39.", 0),
          ask("3,4 sayısı yüzde birlik olarak nasıl yazılır?", "3,40", "3,04", "3,44", "34", "Onda birler basamağındaki 4 yerinde kalır, sağına 0 eklenir.", 1),
          ask("2,5 ile 2,48 için doğru sıra hangisidir?", "2,48 < 2,5", "2,5 < 2,48", "Eşittir", "2,48 daha büyüktür çünkü 48 > 5", "2,5 = 2,50. 2,48 daha küçüktür.", 2),
        ],
      ),
    () =>
      lesson(
        "Sayı doğrusu",
        "0 ile 1 arasında 0,1’lik dilimler vardır. 0,6; 0,5’ten sağda, 0,7’den soldadır. Ondalık sayı büyüdükçe sayı doğrusunda sağa gider.",
        "0,15’i 0,2’nin sağına koymak basamak sayısına aldanmaktır. 0,2 = 0,20. 0,15 daha soldadır.",
        "0,2 − 0,15 = 0,05. Kısa yazılan 0,2 daha büyüktür.",
        [
          ask("0,15 ve 0,2 için doğru olan hangisidir?", "0,15 < 0,2", "0,15 > 0,2", "Eşittir", "Basamağı çok olan her zaman büyüktür", "0,2 = 0,20. Yüzde birde 0, 5’ten büyüktür.", 0),
          ask("0,6 sayı doğrusunda nereye düşer?", "0,5 ile 0,7 arasına", "0’ın soluna", "1’in sağına", "0,8 ile 0,9 arasına", "0,5 < 0,6 < 0,7.", 1),
          ask("1,05 ile 1,5 karşılaştırılırsa hangisi büyüktür?", "1,5", "1,05", "Eşittir", "1,05, çünkü 05 sonda vardır", "1,5 = 1,50. 1,50 > 1,05.", 2),
        ],
      ),
    () =>
      lesson(
        "Toplama",
        "Ondalık toplamada virgüller alt alta gelir. 1,25 + 0,4 işleminde 0,4 = 0,40 yazılır. Yüzde birler 5, onda birler 2 + 4 = 6, birler 1. Sonuç 1,65’tir.",
        "0,4’ü 0,04 sanıp 1,29 bulmak yanlıştır. 4, onda birler basamağıdır.",
        "1,25 + 0,40 = 1,65. 125/100 + 40/100 = 165/100.",
        [
          ask("1,25 + 0,4 kaçtır?", "1,65", "1,29", "1,254", "5,25", "0,4 = 0,40. 1,25 + 0,40 = 1,65.", 0),
          ask("2,06 + 1,4 kaçtır?", "3,46", "2,20", "3,10", "2,46", "1,4 = 1,40. 2,06 + 1,40 = 3,46.", 1),
          ask("Virgüller hizalanmazsa hangi hata olur?", "Onda bir ile yüzde bir toplanır", "Sonuç her zaman büyür", "Toplama yapılamaz", "Sayılar tam sayıya döner", "Aynı basamaktaki rakamlar toplanmalıdır.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function fractionSplit(day) {
  const cards = [
    () =>
      lesson(
        "Kesir bir bölmedir",
        "3/4, 3’ün 4’e bölünmesi demektir. Pay, bölünen; payda, bölen gibidir. 3 ÷ 4 = 0,75 ve bu da 3/4’tür.",
        "Paydayı paya bölmek kesri ters çevirir. 4 ÷ 3, 3/4 değildir; 4/3’tür.",
        "Bir ekmeğin 4 eş diliminden 3’ü: her dilim 1/4, üç dilim 3/4.",
        [
          ask("3/4 hangi bölmedir?", "3 ÷ 4", "4 ÷ 3", "3 − 4", "3 × 4", "Pay bölünür, payda böler.", 0),
          ask("1/2 için doğru olan hangisidir?", "1 ÷ 2 = 0,5", "2 ÷ 1 = 0,5", "1 ÷ 2 = 2", "Payda paydan küçüktür diye bölünmez", "Bir bütün ikiye bölününce her parça yarımdır.", 1),
          ask("Payda neyi söyler?", "Bütünün kaç eş parçaya bölündüğünü", "Kaç parça alındığını", "Parçaların toplamını", "Tam sayı kısmını", "Pay, alınan parça sayısıdır. Payda, eş parça sayısıdır.", 2),
        ],
      ),
    () =>
      lesson(
        "Paylaştırma",
        "12 elma 4 kişiye eşit paylaştırılırsa kişi başı 12 ÷ 4 = 3 elma düşer. Bu, 12’nin 1/4’üdür. Kesir burada bir bölme probleminin adıdır.",
        "12’yi 4 ile çarpmak paylaştırmak değildir. Çarpım 48, herkese düşen değil, dört katıdır.",
        "12 × 1/4 = 3. Bölme ve kesirle çarpma aynı sonucu verir.",
        [
          ask("12 elmanın 1/4’ü kaçtır?", "3", "4", "8", "48", "12 ÷ 4 = 3.", 0),
          ask("20 cevizin 1/5’i kaçtır?", "4", "5", "15", "100", "20 ÷ 5 = 4.", 1),
          ask("«Birimin kesri» burada hangi işlemle bulunur?", "Bütün paydaya bölünür", "Bütün payda ile çarpılır", "Pay paydadan çıkarılır", "Payda paya bölünür", "Eşit payda, bölme demektir.", 2),
        ],
      ),
    () =>
      lesson(
        "Birimin birden çok parçası",
        "18 bilyenin 2/3’ü isteniyorsa önce bütün 3’e bölünür, sonra 2 ile çarpılır. 18 ÷ 3 = 6, 6 × 2 = 12.",
        "18’i doğrudan 2 ile çarpıp 3’e bölmemek değil, sırayı karıştırmak asıl hatadır: 18 × 2 = 36, sonra bölmeyi unutmak 36’yı cevap sanmaktır.",
        "Her 1/3, 6 bilyedir. İki pay 12 bilyedir. Kalan 6 bilyedir.",
        [
          ask("18 bilyenin 2/3’ü kaçtır?", "12", "6", "36", "9", "18 ÷ 3 = 6 ve 6 × 2 = 12.", 0),
          ask("İşlemden sonra kalan kaç bilyedir?", "6", "12", "2", "3", "18 − 12 = 6.", 1),
          ask("2/3 hesaplanırken ilk adım hangisidir?", "18’i 3’e bölmek", "18’i 2’ye bölmek", "2 ile 3’ü toplamak", "18’den 2 çıkarmak", "Önce bir pay bulunur, sonra pay kadar çoğaltılır.", 2),
        ],
      ),
    () =>
      lesson(
        "Bölümün kesir olması",
        "3 elma 4 çocuğa eşit bölünürse her çocuk 3/4 elma alır. Sonuç doğal sayı olmak zorunda değildir. 3 ÷ 4 = 3/4.",
        "«4, 3’ten büyük, bölünmez» düşüncesi yanlıştır. Bölüm kesir olabilir.",
        "Her elma 4’e bölünür, her pay 1/4’tür. Üç elmadan her çocuğa 3/4 düşer.",
        [
          ask("3 ÷ 4 işleminin sonucu hangisidir?", "3/4", "4/3", "1", "0", "Pay 3, payda 4. Bölüm birden küçüktür ama tanımlıdır.", 0),
          ask("2 litre süt 5 bardağa eşit bölünürse bir bardağa ne düşer?", "2/5 litre", "5/2 litre", "3 litre", "2 litre", "2 ÷ 5 = 2/5.", 1),
          ask("Bölünen bölenenden küçükse sonuç nasıldır?", "Birden küçük bir kesir olabilir", "Her zaman 0’dır", "Bölme yapılmaz", "Her zaman 1’dir", "Pay küçük, payda büyükse kesir 1’den küçüktür.", 2),
        ],
      ),
    () =>
      lesson(
        "Tersini sormak",
        "Bir sayının 1/4’ü 6 ise sayı 6 × 4 = 24’tür. Bölerek bulunan parça verildiğinde bütüne dönmek için payda ile çarpılır.",
        "6’yı 4’e bölüp 1,5 bulmak, bütünü değil yine bir parçayı aramaktır. Soru bütünü soruyor.",
        "24’ün 1/4’ü 6’dır. Sağlama, bulunan sayıyı yeniden kesre bölmektir.",
        [
          ask("Bir sayının 1/4’ü 6 ise sayı kaçtır?", "24", "1,5", "10", "4", "6 × 4 = 24. Parça verildiyse bütün, payda ile çarpılarak bulunur.", 0),
          ask("Bir sayının 1/3’ü 5 ise sayı kaçtır?", "15", "2", "8", "5", "5 × 3 = 15.", 1),
          ask("Sağlama nasıl yapılır?", "24’ün 1/4’ü yeniden 6 mı diye bakılır", "6 ile 4 toplanır", "24 ikiye bölünür", "Payda silinir", "Bulunan bütün, baştaki kesre uyuyorsa işlem doğrudur.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function fractionProblem(day) {
  const dens = [2, 3, 4, 5, 6, 8, 10]
  const den = dens[day % 7]
  const groups = 3 + Math.floor(day / 7)
  const whole = den * groups
  const num = 1 + (day % (den - 1))
  const part = groups * num
  const left = whole - part
  const thing = ["ceviz", "bilye", "kalem", "elma", "boncuk", "defter", "fındık"][day % 7]
  return lesson(
    "Kesir problemi",
    `${whole} ${thing}in ${num}/${den} kadarı isteniyor. Önce bütün paydaya bölünür: ${whole} ÷ ${den} = ${groups}. Bu, bir paydır. Sonra pay ile çarpılır: ${groups} × ${num} = ${part}.`,
    `Sık hata, ${whole} sayısını doğrudan ${num} ile çarpıp paydayı unutmaktır. O hesap ${whole * num} verir ve bütünün parçası değil, şişirilmiş bir çarpımdır.`,
    `${part} ${thing} ayrılır. Geriye ${whole} − ${part} = ${left} ${thing} kalır.`,
    [
      numeric(
        `${whole} ${thing}in ${num}/${den} kadarı kaçtır?`,
        part,
        [whole - part, groups, whole * num - part],
        `${whole} ÷ ${den} = ${groups}, sonra ${groups} × ${num} = ${part}.`,
        day,
      ),
      numeric(
        `${whole} ${thing}den ${num}/${den} ayrılınca kaç ${thing} kalır?`,
        left,
        [part - left, groups, -groups],
        `Kalan, bütün eksi ayrılan parçadır: ${whole} − ${part} = ${left}.`,
        day + 1,
      ),
      ask(
        `${whole} ${thing}in ${num}/${den}’i bulunurken ilk işlem hangisidir?`,
        `${whole} sayısı ${den}’e bölünür`,
        `${whole} sayısı ${num} ile çarpılır ve bölme yapılmaz`,
        `${num} ile ${den} toplanır`,
        `${whole} sayısından ${den} çıkarılır`,
        "Önce bir pay bulunur. Pay, o bir payın kaç kez alınacağını söyler.",
        day + 2,
      ),
    ],
  )
}

function length(day) {
  const cards = [
    () =>
      lesson(
        "Metre ve santimetre",
        "1 metre 100 santimetredir. 3 metre, 3 × 100 = 300 cm eder. Cetvel santimetre gösterir; kapı yüksekliği çoğunlukla metre ile söylenir.",
        "3 metreyi 30 cm sanmak, 1 metreyi 10 cm saymaktır. Onluk değil, yüzlük dönüşüm vardır.",
        "3 × 100 = 300. 250 cm ise 2 m 50 cm, yani 2,5 m’dir.",
        [
          ask("3 m kaç cm’dir?", "300", "30", "3000", "13", "1 m = 100 cm. 3 × 100 = 300.", 0),
          ask("250 cm kaç metredir?", "2,5 m", "25 m", "250 m", "0,25 m", "250 ÷ 100 = 2,5. 100 cm bir metredir.", 1),
          ask("1 m kaç cm’dir?", "100", "10", "1000", "50", "Metre, 100 santimetrelik uzunluktur.", 2),
        ],
      ),
    () =>
      lesson(
        "Kilometre",
        "1 kilometre 1000 metredir. 2 km = 2000 m. Kısa yol yürüyüşü metre, şehirler arası yol kilometre ile ölçülür.",
        "1 km’yi 100 m sanmak, metre-santimetre dönüşümünü buraya taşımaktır. Kilometrede bin vardır.",
        "2 × 1000 = 2000. 1500 m = 1 km 500 m = 1,5 km.",
        [
          ask("2 km kaç metredir?", "2000", "200", "20", "1000", "1 km = 1000 m. 2 × 1000 = 2000.", 0),
          ask("1500 m kaç kilometredir?", "1,5", "15", "150", "0,15", "1500 ÷ 1000 = 1,5.", 1),
          ask("1 km kaç metredir?", "1000", "100", "10", "10000", "Kilo, bin kat demektir.", 2),
        ],
      ),
    () =>
      lesson(
        "Milimetre",
        "1 santimetre 10 milimetredir. 4 cm = 40 mm. Milimetre, cetveldeki küçük aralıktır; tırnak kalınlığı bu birime yakındır.",
        "4 cm’yi 4 mm yazmak birimi silmektir. Sayı aynı kalsa da uzunluk on kat küçülür.",
        "4 × 10 = 40. 25 mm = 2 cm 5 mm = 2,5 cm.",
        [
          ask("4 cm kaç mm’dir?", "40", "4", "400", "14", "1 cm = 10 mm. 4 × 10 = 40.", 0),
          ask("25 mm kaç cm’dir?", "2,5", "25", "0,25", "250", "25 ÷ 10 = 2,5.", 1),
          ask("1 cm kaç mm’dir?", "10", "100", "1000", "1", "Santimetre on milimetredir.", 2),
        ],
      ),
    () =>
      lesson(
        "Birimi seçmek",
        "Kalemin boyu santimetre, okul koridoru metre, iki il arası kilometre ile anlatılır. 14 cm’lik kalemi 14 km yazmak aynı sayıyı başka bir büyüklüğe bağlar.",
        "Büyük birime küçük sayılar yakışır diye 1,8 m boyu 180 km yapmak dönüşüm hatasıdır. 1,8 m = 180 cm.",
        "Bir kapı 2 m, bir silgi 4 cm, bir şehir yolu 12 km olabilir. Sayı küçük diye birim büyük seçilmez.",
        [
          ask("14 cm’lik bir kalem için uygun birim hangisidir?", "Santimetre", "Kilometre", "Kilogram", "Litre", "Kalem, metre bile uzun gelir. Kilometre yol birimidir.", 0),
          ask("1,8 m kaç cm’dir?", "180", "18", "1800", "1,8", "1,8 × 100 = 180.", 1),
          ask("İki şehir arası için en uygun birim hangisidir?", "Kilometre", "Milimetre", "Santimetre", "Gram", "Uzun yol kilometre ile söylenir.", 2),
        ],
      ),
    () =>
      lesson(
        "Çevre ve birim",
        "Kenarları 4 m ve 3 m olan dikdörtgen bahçenin çevresi 2 × (4 + 3) = 14 m’dir. Çit metre ile alınır. Aynı çevreyi 1400 cm diye yazmak doğrudur ama sipariş metreyle verilir.",
        "Çevreyi 4 × 3 = 12 m bulmak alan hesabıdır. Çit, kenarların toplamıdır.",
        "4 + 3 = 7, iki katı 14. 14 m = 1400 cm.",
        [
          ask("4 m ve 3 m’lik dikdörtgenin çevresi kaç metredir?", "14", "12", "7", "43", "2 × (4 + 3) = 14. 12, bu bahçenin alanıdır.", 0),
          ask("14 m kaç cm’dir?", "1400", "140", "14", "14000", "14 × 100 = 1400.", 1),
          ask("Çit alınırken hangi ölçü kullanılır?", "Çevre", "Alan", "Yalnız uzun kenar", "Köşegen", "Çit kenarları dolaşır. Alan, içteki yüzeyi söyler.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function dataDay(day) {
  if (day < 8) {
    const rows = [
      ["göz rengi", "kategorik", "sayıyla toplanmaz, gruplanır"],
      ["kardeş sayısı", "nicel", "sayılardır, toplanabilir"],
      ["en sevilen meyve", "kategorik", "adlar vardır, ortalama meyve olmaz"],
      ["boy", "nicel", "santimetre ile ölçülür"],
      ["doğum ayı", "kategorik", "ay adları sıralı gruplardır"],
      ["sayfa sayısı", "nicel", "kitaptaki sayfa bir sayıdır"],
      ["kan grubu", "kategorik", "A, B, AB ve 0 gruplardır"],
      ["deneme puanı", "nicel", "puanlar sayı doğrusuna dizilir"],
    ]
    const [name, kind, why] = rows[day]
    const other = kind === "kategorik" ? "nicel" : "kategorik"
    return lesson(
      "Verinin türü",
      `${name} verisi ${kind}tir. ${why}. Nicel veri sayı ile ölçülür. Kategorik veri ad, renk veya grup olarak ayrılır; bu grupların aritmetik ortalaması aranmaz.`,
      `«${name} de sayı gibi toplanır» demek türü karıştırır. Tür, sorunun cevabının sayı mı ad mı olduğuna bakılarak seçilir.`,
      `Sınıfta ${name} sorulursa cevaplar ${kind} veri oluşturur. Grafik de buna göre kurulur: kategoride sütun grupları, nicelde sayı ekseni anlamlıdır.`,
      [
        ask(`${name} hangi veri türüdür?`, kind, other, "yalnız grafik", "yalnız ortalama", why, day),
        ask(
          "Kategorik veri için hangi işlem anlamsızdır?",
          "Grup adlarının aritmetik ortalaması",
          "Her gruptaki kişi sayısı",
          "En kalabalık grup",
          "Sütun grafiği",
          "Renk veya ay adı toplanıp kişi sayısına bölünmez. Sıklık sayılır.",
          day + 1,
        ),
        ask(
          "Nicel veriye örnek hangisidir?",
          "Bir koşunun saniye cinsinden süresi",
          "Göz rengi",
          "En sevilen dersin adı",
          "Kan grubu",
          "Süre sayıdır. Adlar kategorik kalır.",
          day + 2,
        ),
      ],
    )
  }
  if (day < 16) {
    const a = 3 + day
    const b = 5 + day
    const c = 7 + day
    const d = 9 + day
    const sum = a + b + c + d
    const mean = sum / 4
    return lesson(
      "Aritmetik ortalama",
      `${a}, ${b}, ${c} ve ${d} sayılarının ortalaması, toplamın veri sayısına bölümüdür. Toplam ${sum}, veri 4 tanedir. ${sum} ÷ 4 = ${mean}.`,
      "Ortalamayı en büyük sayı sanmak yanlıştır. Ortalama uç değer değil, paylaşılan dengedir. En büyük burada ${d}, ortalama ${mean}.",
      `${a} + ${b} + ${c} + ${d} = ${sum}. Bölüm ${mean} olduğu için dört sayının yerine ${mean} konursa toplam yine ${sum} olur.`,
      [
        numeric(`${a}, ${b}, ${c}, ${d} sayılarının ortalaması kaçtır?`, mean, [d, sum, a], `Toplam ${sum}, dört veri var. ${sum} ÷ 4 = ${mean}.`, day),
        ask(
          "Ortalama bulunurken payda nedir?",
          "Veri sayısı",
          "En büyük sayı",
          "En küçük sayı",
          "Verilerin çarpımı",
          "Pay toplam, payda kaç sayı toplandığıdır.",
          day + 1,
        ),
        ask(
          `${a}, ${b}, ${c}, ${d} dizisinde ortalama ile en büyük sayıyı ayıran yargı hangisidir?`,
          `Ortalama ${mean}, en büyük ${d}`,
          "İkisi de aynıdır",
          "Ortalama en büyükten büyüktür",
          "En büyük sayı toplama katılmaz",
          "Ortalama toplamdan gelir. En büyük tek bir veridir.",
          day + 2,
        ),
      ],
    )
  }
  const min = 4
  const max = 9 + day
  const range = max - min
  return lesson(
    "Açıklık",
    `Bir dağılımın açıklığı, en büyük değer ile en küçük değerin farkıdır. ${min} ile ${max} arasındaki açıklık ${max} − ${min} = ${range} eder.`,
    "Açıklığı iki ucu toplayarak bulmak yanlıştır. Toplam ${min + max} olur; yayılımı değil, uçların birleşimini söyler.",
    `Veriler ${min} ile ${max} arasına yayılmıştır. Ortalama bu aralığın neresinde durursa dursun açıklık ${range} olarak kalır.`,
    [
      numeric(`${min} ve ${max} uçlu verinin açıklığı kaçtır?`, range, [min + max, max, min], `Açıklık farktır: ${max} − ${min} = ${range}.`, day),
      ask(
        "Açıklık hangi soruya cevap verir?",
        "Veriler ne kadar yayılmış",
        "En çok tekrar eden değer ne",
        "Ortanca kaç",
        "Kaç kategori var",
        "Uçlar birbirinden uzaksa dağılım geniştir.",
        day + 1,
      ),
      ask(
        `${min} sabit kalıp en büyük değer artarsa açıklık ne olur?`,
        "Büyür",
        "Küçülür",
        "Değişmez",
        "Ortalamaya eşit olur",
        "Farkın büyük ucu artarsa açıklık artar.",
        day + 2,
      ),
    ],
  )
}

function angles(day) {
  const kind = day % 3
  if (kind === 0) {
    const given = 42 + day * 2
    const co = 180 - given
    return lesson(
      "Yöndeş açılar",
      `İki paralel doğru bir kesenle kesildiğinde yöndeş açılar eşittir. Biri ${given}° ise öteki yöndeş açı da ${given}°’dir. Aynı taraftaki iç açılar ise bütünler olur: ${given}° + ${co}° = 180°.`,
      `${given}°’lik yöndeş açıyı ${co}° sanmak, eşitliği bütünlerlikle karıştırmaktır. Yöndeş olan kopyadır, bütünleyeni değildir.`,
      `Kesen, paralelleri aynı yönden kestiği için ölçüler taşınır. ${given}° yerinde kalır. Yanındaki iç açı ${co}°’ye tamamlanır.`,
      [
        numeric(`Yöndeş açılardan biri ${given}° ise öteki kaç derecedir?`, given, [co - given, 90 - given, co], `Yöndeş açılar eşittir. İkisi de ${given}°.`, day),
        numeric(`Aynı taraftaki iç açının ölçüsü kaç derecedir?`, co, [given - co, 90, -10], `Aynı taraftaki iç açılar 180°’ye tamamlanır. 180 − ${given} = ${co}.`, day + 1),
        ask(
          "Paralel iki doğrudan hangisi söylenebilir?",
          "Yöndeş açılar eşittir",
          "Her açı 90°’dir",
          "Kesen açıyı ikiye böler",
          "İç açılar her zaman 45°’dir",
          "Paralellik, yöndeş ve iç ters açıları eşit kılar.",
          day + 2,
        ),
      ],
    )
  }
  if (kind === 1) {
    const a = 36 + day
    const b = 58
    const c = 180 - a - b
    return lesson(
      "Üçgenin iç açıları",
      `Üçgenin iç açıları toplamı 180°’dir. ${a}° ve ${b}° verilen iki açı ise üçüncü açı 180 − ${a} − ${b} = ${c}° olur.`,
      `İki açıyı toplayıp üçüncüsü sanmak ${a + b}° verir. Toplam 180’i aşar ya da üçüncü köşeyi boş bırakır. Eksik olan, 180’den çıkandır.`,
      `${a} + ${b} = ${a + b}. 180 − ${a + b} = ${c}. Üç sayı yeniden toplanınca 180 eder.`,
      [
        numeric(`İç açılar ${a}° ve ${b}° ise üçüncü açı kaç derecedir?`, c, [a + b - c, 90, a], `180 − ${a} − ${b} = ${c}.`, day),
        ask(
          `${c}°’lik üçüncü açı nasıl bir açıdır?`,
          c < 90 ? "dar" : c === 90 ? "dik" : "geniş",
          c < 90 ? "geniş" : "dar",
          "doğru açı",
          "tam açı",
          c < 90 ? `${c} < 90 olduğu için dar açıdır.` : `${c} > 90 olduğu için geniş açıdır.`,
          day + 1,
        ),
        ask(
          "İki dik açı bir üçgende bulunabilir mi?",
          "Hayır, toplamları 180’i doldurur",
          "Evet",
          "Yalnız eşkenar ise",
          "Yalnız büyük üçgende",
          "90 + 90 = 180. Üçüncü açıya 0° kalır, üçgen oluşmaz.",
          day + 2,
        ),
      ],
    )
  }
  const a = 72 + day
  const b = 80
  const c = 95
  const d = 360 - a - b - c
  return lesson(
    "Dörtgenin açıları",
    `Dörtgenin iç açıları toplamı 360°’dir. ${a}°, ${b}° ve ${c}° biliniyorsa dördüncü açı 360 − ${a} − ${b} − ${c} = ${d}° olur.`,
    "Dörtgende de 180 kullanmak üçgen kuralını taşır. Bir köşe eksik kalır, sonuç 180° kadar küçük çıkar.",
    `${a} + ${b} + ${c} = ${a + b + c}. 360 − ${a + b + c} = ${d}.`,
    [
      numeric(`Üç iç açı ${a}°, ${b}° ve ${c}° ise dördüncü kaç derecedir?`, d, [180 - a, a, b + c], `360 − ${a + b + c} = ${d}.`, day),
      ask(
        "Dikdörtgenin her iç açısı kaç derecedir?",
        "90",
        "45",
        "180",
        "360",
        "Dikdörtgende dört dik açı vardır. 4 × 90 = 360.",
        day + 1,
      ),
      ask(
        "Kare ile dikdörtgeni ayıran kenar bilgisi hangisidir?",
        "Karenin dört kenarı da eşittir",
        "Dikdörtgenin açısı 90° değildir",
        "Karenin açısı 45°’dir",
        "Dikdörtgenin karşılıklı kenarları eşit değildir",
        "İkisinde de açılar 90°’dir. Ayrım kenardadır: karede bütün kenarlar eşittir.",
        day + 2,
      ),
    ],
  )
}

function unknown(day) {
  if (day < 5) {
    const add = 4 + day
    const total = 15 + day
    const x = total - add
    return lesson(
      "Toplama denklemi",
      `Bir sayıya ${add} eklenince ${total} oluyor. Denklem x + ${add} = ${total} biçimindedir. ${add}, karşı tarafa çıkarma olarak geçer: x = ${total} − ${add} = ${x}.`,
      `${total} ile ${add}’i toplamak denklemi çözmez, ${total + add} verir. Eklenen terim karşıya geçerken işlem tersine döner.`,
      `Sağlama: ${x} + ${add} = ${total}.`,
      [
        numeric(`x + ${add} = ${total} ise x kaçtır?`, x, [total + add, add, total], `${total} − ${add} = ${x}.`, day),
        ask(
          "Eşitliğin bir yanına eklenen sayı karşıya nasıl geçer?",
          "Çıkarma olarak",
          "Yine toplama olarak",
          "Çarpma olarak",
          "Silinerek",
          "Toplamanın tersi çıkarmadır.",
          day + 1,
        ),
        ask(
          `${x} + ${add} toplamı ${total} etmiyorsa ne anlaşılır?`,
          "Bilinmeyen yanlış bulunmuştur",
          "Toplama bu problemde kullanılmaz",
          "x sıfırdır",
          "Payda unutulmuştur",
          "Sağlama tutmuyorsa işlem baştan bakılır.",
          day + 2,
        ),
      ],
    )
  }
  if (day < 10) {
    const coef = 2 + (day % 5)
    const x = 3 + (day % 5)
    const prod = coef * x
    return lesson(
      "Çarpma denklemi",
      `Bir sayının ${coef} katı ${prod} ise denklem ${coef}x = ${prod} olur. x = ${prod} ÷ ${coef} = ${x}. Kat, çarpma demektir; çözerken bölünür.`,
      `${prod} − ${coef} = ${prod - coef} yazmak, katı çıkarma sanmaktır. «Kat» sözcüğü çarpımı işaret eder.`,
      `Sağlama: ${coef} × ${x} = ${prod}.`,
      [
        numeric(`${coef}x = ${prod} ise x kaçtır?`, x, [prod - coef, coef * x + coef, prod], `${prod} ÷ ${coef} = ${x}.`, day),
        ask(
          `«Bir sayının ${coef} katı ${prod}» cümlesindeki işlem hangisidir?`,
          "Çarpma",
          "Toplama",
          "Çıkarma",
          "Yalnız bölme",
          "Kat, sayının kendisiyle çarpılmasıdır.",
          day + 1,
        ),
        ask(
          "Bilinmeyenin yanındaki çarpan karşıya nasıl geçer?",
          "Bölen olarak",
          "Toplanarak",
          "Olduğu gibi kalarak",
          "Üs olarak",
          "Çarpmanın tersi bölmedir.",
          day + 2,
        ),
      ],
    )
  }
  const sub = 3 + (day - 10)
  const left = 6 + (day - 10)
  const x = left + sub
  return lesson(
    "Çıkarma denklemi",
    `Bir sayıdan ${sub} çıkarılınca ${left} kalıyor. Denklem x − ${sub} = ${left} olur. Çıkarılan terim karşıya toplama olarak geçer: x = ${left} + ${sub} = ${x}.`,
    `${left} − ${sub} = ${left - sub} bulmak, kalanı yeniden eksiltmektir. Soru, eksilmeden önceki sayıyı sorar.`,
    `Sağlama: ${x} − ${sub} = ${left}.`,
    [
      numeric(`x − ${sub} = ${left} ise x kaçtır?`, x, [left - sub, sub, left], `${left} + ${sub} = ${x}.`, day),
      ask(
        "Eşitliğin bir yanından çıkarılan sayı karşıya nasıl geçer?",
        "Toplama olarak",
        "Yine çıkarma olarak",
        "Bölen olarak",
        "Sıfırlanarak",
        "Çıkarmanın tersi toplamadır.",
        day + 1,
      ),
      ask(
        `${x} − ${sub} işlemi ${left} etmiyorsa hangi karar verilir?`,
        "Çözüm yanlış, sağlama tutmuyor",
        "Denklem ters kurulmuştur ama sonuç doğrudur",
        "Kalan her zaman eksilenden büyüktür",
        "x negatif olmak zorundadır",
        "Yerine koyunca eşitlik bozuluyorsa bilinmeyen yeniden aranır.",
        day + 2,
      ),
    ],
  )
}

function pattern(day) {
  const start = 4 + day
  const step = 3 + (day % 3)
  const fifth = start + 4 * step
  const sixth = start + 5 * step
  return lesson(
    "Sayı örüntüsü",
    `${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step} dizisinde her terim bir öncekine ${step} eklenerek bulunur. Beşinci terim, ilk terime artışın dört kez eklenmesidir: ${start} + 4 × ${step} = ${fifth}.`,
    `Artışı bir kez ekleyip ${start + step} sayısını beşinci terim sanmak, sırayı karıştırır. Beşinci terime gelene kadar dört adım vardır.`,
    `Dizi: ${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}, ${fifth}, ${sixth}. Altıncı terim ${sixth} olur.`,
    [
      numeric(`İlk terim ${start}, artış ${step} ise beşinci terim kaçtır?`, fifth, [start + step, start + 5 * step, start * step], `${start} + 4 × ${step} = ${fifth}. Beşinci terimde dört adım vardır.`, day),
      numeric(`Aynı dizinin altıncı terimi kaçtır?`, sixth, [fifth, start + 6 * step, step], `Beşinci terime bir artış daha eklenir: ${fifth} + ${step} = ${sixth}.`, day + 1),
      ask(
        "Genel terimde adım sayısı neden terim numarasından 1 eksiktir?",
        "İlk terim 0 adımda hazırdır",
        "Artış her zaman 1’dir",
        "Son terim sayılmaz",
        "Örüntü yalnız çift terimde çalışır",
        "1. terim başlangıçtır. 2. terime 1 adım, 5. terime 4 adım düşer.",
        day + 2,
      ),
    ],
  )
}

function algebra(day) {
  const a = 2 + (day % 5)
  const b = 3 + (day % 4)
  const sum = a + b
  if (day < 5) {
    return lesson(
      "Benzer terim",
      `${a}x ile ${b}x aynı harfi taşır, benzer terimdir. ${a}x + ${b}x = ${sum}x. Katsayılar toplanır, harf aynen kalır.`,
      `${a}x + ${b}x = ${a * b}x yazmak katsayıları çarpmaktır. Toplama, katsayıları toplar.`,
      `${a} elma ile ${b} elma ${sum} elmadır. x, elmanın yerindeki ortak addır.`,
      [
        ask(`${a}x + ${b}x kaçtır?`, `${sum}x`, `${a * b}x`, `${sum}`, `${a}x${b}`, `Katsayılar ${a} + ${b} = ${sum}. Harf x kalır.`, day),
        ask(`${a}x + ${b}y sadeleşir mi?`, "Hayır, harfler farklı", "Evet, ${a + b}xy olur", "Evet, katsayılar toplanır", "Yalnız x büyükse", "Benzer terimde harf ve üs aynı olmalıdır.", day + 1),
        ask("3x + 2 ifadesinde 2 nasıldır?", "Sabit terimdir, x ile toplanmaz", "3x’in katsayısıdır", "x’in kendisidir", "3x’e çarpılır", "2’nin yanında x yoktur. Ayrı bir terimdir.", day + 2),
      ],
    )
  }
  const n = 5 + day
  const value = a * n + b
  return lesson(
    "Sözelden cebire",
    `«Bir sayının ${a} katının ${b} fazlası» ifadesi ${a}x + ${b} diye yazılır. x yerine ${n} konursa ${a} × ${n} + ${b} = ${value} olur.`,
    `Önce ${b} ekleyip sonra katını almak (${n} + ${b}) × ${a} = ${(n + b) * a} verir. Sözün sırası başkadır: önce kat, sonra fazla.`,
    `${a} × ${n} = ${a * n}. Üzerine ${b} eklenince ${value}.`,
    [
      numeric(`x = ${n} iken ${a}x + ${b} kaçtır?`, value, [(n + b) * a, a * n, n + b], `${a} × ${n} + ${b} = ${value}.`, day),
      ask(
        `«${a} katının ${b} fazlası» hangi ifadedir?`,
        `${a}x + ${b}`,
        `${a} + ${b}x`,
        `x + ${a + b}`,
        `${a}x × ${b}`,
        "Kat çarpmadır, fazla toplamadır. Çarpma x’in üzerindedir.",
        day + 1,
      ),
      ask(
        "İfadede x yerine sayı konunca ne yapılır?",
        "Harfin yerine sayı yazılıp işlem yapılır",
        "Katsayı silinir",
        "Sabit terim sıfırlanır",
        "Harf sayı ile toplanıp yeni harf olur",
        "Yerine koyma, ifadeyi tek bir sayıya indirir.",
        day + 2,
      ),
    ],
  )
}

function units(day) {
  const cards = [
    () =>
      lesson(
        "Alan birimi",
        "1 metrekare, kenarı 1 m olan karedir. 1 m = 100 cm olduğu için bu karenin içinde 100 × 100 = 10 000 tane 1 cm² vardır. 1 m² = 10 000 cm².",
        "1 m²’yi 100 cm² sanmak, uzunluk dönüşümünü alana kopyalamaktır. Alan iki kez dönüşür, yüz çarpı yüz.",
        "2 m² = 2 × 10 000 = 20 000 cm². Oda tabanı bu yüzden santimetrekare ile çok büyük bir sayı olur.",
        [
          ask("1 m² kaç cm²’dir?", "10000", "100", "1000", "200", "100 × 100 = 10 000. Uzunlukta 100, alanda 10 000 vardır.", 0),
          ask("2 m² kaç cm²’dir?", "20000", "200", "2000", "10000", "2 × 10 000 = 20 000.", 1),
          ask("Uzunluk 100 kat, alan neden 10 000 kat büyür?", "İki kenar da 100 ile çarpılır", "Alan birimi keyfidir", "Yalnız bir kenar uzar", "Santimetre daha ağırdır", "Alan, iki uzunluğun çarpımıdır.", 2),
        ],
      ),
    () =>
      lesson(
        "Kilometrekare",
        "1 km², kenarı 1 km olan karedir. 1 km = 1000 m olduğundan 1 km² = 1000 × 1000 = 1 000 000 m² eder.",
        "1 km²’yi 1000 m² yapmak, yine tek boyutu dönüştürmektir. İkinci kenar unutulur.",
        "Bir ilçenin yüzölçümü km², bir sınıfın tabanı m² ile söylenir. 3 km² = 3 000 000 m².",
        [
          ask("1 km² kaç m²’dir?", "1000000", "1000", "10000", "3000", "1000 × 1000 = 1 000 000.", 0),
          ask("3 km² kaç m²’dir?", "3000000", "3000", "30000", "1000000", "3 × 1 000 000 = 3 000 000.", 1),
          ask("Sınıf tabanı için uygun birim hangisidir?", "Metrekare", "Kilometrekare", "Metre", "Litre", "Oda büyüklüğü m²’dir. km² bir ilin haritasına gider.", 2),
        ],
      ),
    () =>
      lesson(
        "Dönüşümü yerinde kullanmak",
        "3 m’ye 2 m’lik bir halının alanı 6 m²’dir. Santimetrekare istendiğinde 6 × 10 000 = 60 000 cm² yazılır. Önce alan, sonra birim.",
        "Kenarları önce santimetre yapıp 300 × 200 = 60 000 cm² bulmak da doğrudur. Yanlış olan, 6 × 100 = 600 cm² demektir.",
        "300 cm × 200 cm = 60 000 cm². 6 m² ile aynı yüzeydir.",
        [
          ask("3 m × 2 m halı kaç cm²’dir?", "60000", "600", "6000", "30", "6 m² × 10 000 = 60 000 cm².", 0),
          ask("Kenarlar cm iken çarpım nedir?", "300 × 200 = 60000", "30 × 20 = 600", "3 × 2 = 6", "300 × 2 = 600", "3 m = 300 cm, 2 m = 200 cm.", 1),
          ask("6 × 100 işlemi bu halıda neyi eksik bırakır?", "İkinci kenarın dönüşümünü", "Halının rengini", "Çevre hesabını", "Birim adını", "Her iki kenar 100 ile çarpılmalıdır.", 2),
        ],
      ),
    () =>
      lesson(
        "Birim uyumu",
        "Çevre uzunluk birimi ister: m veya cm. Alan, m² veya cm² ister. 14 m’lik çiti 14 m² diye yazmak, uzunluğu yüzeye çevirmek değildir; birimi yanlış bağlamaktır.",
        "Sayı aynı diye birimler eşit olmaz. 14 m ile 14 m² ayrı büyüklüklerdir.",
        "4 m ve 3 m’lik bahçenin çevresi 14 m, alanı 12 m²’dir. İkisi yan yana yazılırken birim silinmez.",
        [
          ask("Çit siparişi hangi birimle verilir?", "Metre", "Metrekare", "Kilogram", "Derece", "Çit bir uzunluktur.", 0),
          ask("Halı siparişi hangi birimle verilir?", "Metrekare", "Metre", "Litre", "Saniye", "Halı bir yüzeyi örter.", 1),
          ask("14 m ile 14 m² eşit midir?", "Hayır", "Evet, sayılar aynı", "Yalnız küçük odada", "Yalnız karede", "Biri uzunluk, biri alandır.", 2),
        ],
      ),
    () =>
      lesson(
        "Seçim",
        "Defter kapağı yaklaşık 400 cm², okul bahçesi yaklaşık 2 000 m², bir ilçe 120 km² olabilir. Ölçülen şey büyüdükçe birim de büyür; yoksa sayı okunmaz hale gelir.",
        "Bahçeyi cm² ile yazmak matematikçe çevrilebilir ama anlatım bozulur. 2 000 m² = 20 000 000 cm².",
        "2000 × 10 000 = 20 000 000. Aynı bahçe, birim küçülünce sayı büyür.",
        [
          ask("2 000 m² kaç cm²’dir?", "20000000", "200000", "20000", "2000", "2 000 × 10 000 = 20 000 000.", 0),
          ask("İlçe yüzölçümü için uygun birim hangisidir?", "Kilometrekare", "Santimetrekare", "Milimetre", "Gram", "Geniş bölge km² ile anlatılır.", 1),
          ask("Birim küçülünce sayı neden büyür?", "Aynı yüzey daha çok küçük kareye bölünür", "Yüzey gerçekten genişler", "Sayı birimden bağımsızdır", "Çevre alana dönüşür", "Küçük kareden daha fazla gerekir.", 2),
        ],
      ),
  ]
  return cards[day]()
}

function area(day) {
  if (day < 6) {
    const base = 6 + day
    const height = 4
    const side = base + 2
    const areaValue = base * height
    const wrong = side * height
    return lesson(
      "Paralelkenar",
      `Paralelkenarın alanı taban ile yüksekliğin çarpımıdır. Taban ${base} cm, bu tabana ait yükseklik ${height} cm ise alan ${base} × ${height} = ${areaValue} cm²’dir. Yükseklik, tabana dik inen doğru parçasıdır.`,
      `Yan kenar ${side} cm diye onu yükseklik sanmak ${side} × ${height} = ${wrong} cm² verir. Eğik kenar, dik yükseklik değildir.`,
      `Dikdörtgende yükseklik kenarla çakışır. Paralelkenarda çakışmaz; dikme ayrıca çizilir.`,
      [
        numeric(`Tabanı ${base} cm, yüksekliği ${height} cm olan paralelkenarın alanı kaç cm²’dir?`, areaValue, [wrong - areaValue, base + height, side], `${base} × ${height} = ${areaValue}. Yan kenar çarpıma girmez.`, day, "cm²"),
        ask(
          "Yükseklik hangi doğrultudadır?",
          "Tabana dik",
          "Yan kenarla aynı",
          "Köşegendir",
          "Her zaman tabana eşittir",
          "Alan, dik uzaklığı kullanır.",
          day + 1,
        ),
        ask(
          `${side} cm’lik yan kenarı yükseklik yerine koymak neyi bozar?`,
          "Alanı şişirir, çünkü eğik kenar dikmeden uzundur",
          "Bir şeyi bozmaz",
          "Çevreyi verir",
          "Açıyı 90° yapar",
          "Eğik kenar, dik uzaklığın kendisi değildir.",
          day + 2,
        ),
      ],
    )
  }
  const base = 8 + (day - 6) * 2
  const height = 6
  const areaValue = (base * height) / 2
  return lesson(
    "Üçgenin alanı",
    `Üçgenin alanı, aynı taban ve yüksekliğe sahip paralelkenarın yarısıdır. Taban ${base} cm, yükseklik ${height} cm ise alan (${base} × ${height}) ÷ 2 = ${areaValue} cm² olur.`,
    `2’ye bölmeyi unutmak ${base * height} cm² verir. Bu, üçgenin değil paralelkenarın alanıdır.`,
    `${base} × ${height} = ${base * height}. Yarısı ${areaValue}. Yükseklik yine tabana diktir.`,
    [
      numeric(`Tabanı ${base} cm, yüksekliği ${height} cm olan üçgenin alanı kaç cm²’dir?`, areaValue, [base * height - areaValue, base + height, height], `(${base} × ${height}) ÷ 2 = ${areaValue}.`, day, "cm²"),
      ask(
        "Bölmeyi unutunca bulunan sayı nedir?",
        "Aynı tabanlı paralelkenarın alanı",
        "Üçgenin çevresi",
        "Yüksekliğin kendisi",
        "Tabanın yarısı",
        `${base * height} cm², üçgeni ikiye tamamlayan dörtgenin alanıdır.`,
        day + 1,
      ),
      ask(
        "Üçgende yükseklik kenar olmak zorunda mıdır?",
        "Hayır, tabana dik ise dışarı da düşebilir",
        "Evet, her zaman bir kenardır",
        "Yalnız eşkenar üçgende hayır",
        "Yükseklik alana girmez",
        "Geniş açılı üçgende yükseklik dışarıdadır; ölçü yine dik uzaklıktır.",
        day + 2,
      ),
    ],
  )
}

function circle(day) {
  if (day < 8) {
    const diameter = 6 + day * 2
    const circ = 3 * diameter
    const radius = diameter / 2
    return lesson(
      "Çemberin çevresi",
      `Çemberin çevre uzunluğu çap ile π’nin çarpımıdır. Bu sınıfta π = 3 alınır. Çap ${diameter} cm ise çevre 3 × ${diameter} = ${circ} cm olur. Yarıçap ${radius} cm’dir; çevre 2 × 3 × ${radius} diye de bulunur.`,
      `Çapı 2 ile çarpıp π’yi unutmak ${diameter * 2} verir. Bu, çapın iki katıdır, dolanan yol değildir.`,
      `Çap = 2 × ${radius} = ${diameter}. 3 × ${diameter} = ${circ}.`,
      [
        numeric(`π = 3 ve çap ${diameter} cm ise çemberin çevresi kaç cm’dir?`, circ, [diameter * 2 - circ, diameter, radius], `Çevre = π × çap = 3 × ${diameter} = ${circ}.`, day, "cm"),
        numeric(`Bu çemberin yarıçapı kaç cm’dir?`, radius, [diameter, circ, 1], `Yarıçap çapın yarısıdır. ${diameter} ÷ 2 = ${radius}.`, day + 1, "cm"),
        ask(
          "π bu hesapta neyin yerini tutar?",
          "Çember uzunluğunun çapa oranını",
          "Çapın kendisini",
          "Yarıçapın karesini",
          "Merkez açıyı",
          "Çevre ÷ çap oranı, burada 3 kabul edildi.",
          day + 2,
        ),
      ],
    )
  }
  const specs = [
    [60, 36],
    [90, 24],
    [120, 30],
    [45, 40],
    [30, 48],
    [180, 20],
    [72, 50],
  ]
  const [angle, circ] = specs[day - 8]
  const arc = (circ * angle) / 360
  return lesson(
    "Merkez açı ve yay",
    `Merkez açı, köşesi çemberin merkezinde olan açıdır. Ölçüsü, gördüğü yay ile orantılıdır. Çevre ${circ} cm ve merkez açı ${angle}° ise yay uzunluğu ${circ} × ${angle} ÷ 360 = ${arc} cm olur.`,
    `Yayı doğrudan ${angle} cm sanmak, derece ile santimetreyi aynı birim saymaktır. Açı orandır, uzunluk çevreden pay alınarak bulunur.`,
    `360° bütün çemberdir. ${angle}° onun ${angle}/360 kısmıdır. ${circ} cm’nin bu kısmı ${arc} cm’dir.`,
    [
      numeric(`Çevre ${circ} cm, merkez açı ${angle}° ise görülen yay kaç cm’dir?`, arc, [angle, circ - arc, angle / 10], `${circ} × ${angle} ÷ 360 = ${arc}.`, day, "cm"),
      ask(
        `${angle}°’lik merkez açı çemberin kaçta kaçıdır?`,
        `${angle}/360`,
        `${angle}/180`,
        `${angle}/36`,
        "1/2",
        "Tam çember 360°’dir. Pay, açının kendisidir.",
        day + 1,
      ),
      ask(
        "Merkez açının köşesi nerededir?",
        "Çemberin merkezinde",
        "Yayın ucunda",
        "Çemberin dışında",
        "Çapın herhangi bir yerinde",
        "Köşe merkezde değilse açı, merkez açı değildir.",
        day + 2,
      ),
    ],
  )
}

function review(day) {
  const cards = [
    () =>
      lesson(
        "Ortak katı seçmek",
        "48 ve 36’nın ortak katı, ikisine birden kalansız bölünen sayıdır. 144 ÷ 48 = 3 ve 144 ÷ 36 = 4. 144 bir ortak kattır. 72 de 48’e bölünmez: 72 ÷ 48 = 1 kalan 24.",
        "İkisinden büyük her sayıyı ortak kat sanmak yanlıştır. 100, ikisine de bölünmez.",
        "48 = 2 × 2 × 2 × 2 × 3, 36 = 2 × 2 × 3 × 3. Ortak katta 2 dört kez ve 3 iki kez bulunmalıdır.",
        [
          ask("144, 48 ve 36’nın ortak katı mıdır?", "Evet", "Hayır", "Yalnız 48’in katıdır", "Yalnız 36’nın çarpanıdır", "144 ÷ 48 = 3 ve 144 ÷ 36 = 4. İki kalan da 0.", 0),
          ask("72, 48’in katı mıdır?", "Hayır", "Evet", "Yalnız 36 ile ortak olduğu için evet", "2’ye bölündüğü için evet", "72 ÷ 48 bölmesi kalansız bitmez.", 1),
          ask("Ortak kat aranırken hangi koşul aranır?", "İki bölme de kalansız bitmeli", "Sayı asal olmalı", "Sayı iki sayıdan küçük olmalı", "Rakamları toplamı 9 olmalı", "Kat, bölündüğünde kalan bırakmaz.", 2),
        ],
      ),
    () =>
      lesson(
        "Dokuz ve üç",
        "4 563 sayısının rakamları toplamı 4 + 5 + 6 + 3 = 18’dir. 18 hem 3’e hem 9’a bölünür. Bu yüzden 4 563 de hem 3’e hem 9’a bölünür.",
        "Son rakam 3 tek diye 3’e bölünmez demek, 2 kuralını 3’e taşımaktır.",
        "18 ÷ 9 = 2 ve 18 ÷ 3 = 6. Toplam bölünüyorsa sayı da bölünür.",
        [
          ask("4 563, 9’a bölünür mü?", "Evet, rakamlar toplamı 18", "Hayır, son rakam 3", "Hayır, tek sayıdır", "Yalnız 3’e bölünür, 9’a bölünmez", "4 + 5 + 6 + 3 = 18 ve 18 ÷ 9 = 2.", 0),
          ask("4 563, 2’ye bölünür mü?", "Hayır, son rakamı 3", "Evet, toplam 18 çift", "Evet, 3’e bölündüğü için", "Yalnız 9’a bölündüğü için evet", "2 kuralı son rakama bakar. 3 tek rakamdır.", 1),
          ask("9’a bölünen bir sayı 3’e de bölünür mü?", "Evet", "Hayır", "Yalnız çiftse", "Yalnız son rakam 0 ise", "9’un katı olan toplam, 3’ün de katıdır.", 2),
        ],
      ),
    () =>
      lesson(
        "Ondalığı hizalamak",
        "6,2 ile 6,18 karşılaştırılırken 6,2 = 6,20 yazılır. Yüzde birler basamağında 0, 8’den küçüktür ama onda birler basamağında 2, 1’den büyüktür. Karar onda birde verilir: 6,20 > 6,18.",
        "18’i 2’den büyük görüp 6,18’i büyük sanmak, basamakları silmektir.",
        "Fark 0,02’dir. 6,2 sayısı 6,18’den iki yüzde bir büyüktür.",
        [
          ask("Hangisi daha büyüktür: 6,2 mi 6,18 mi?", "6,2", "6,18", "Eşittir", "6,18, çünkü 618 > 62", "6,2 = 6,20. Onda birler basamağı 2 > 1.", 0),
          ask("6,2 yüzde birlik yazılırsa ne olur?", "6,20", "6,02", "62", "6,21", "Onda birdeki 2 yerinde kalır.", 1),
          ask("0,09 ile 0,1 için doğru sıra hangisidir?", "0,09 < 0,1", "0,09 > 0,1", "Eşittir", "0,09 daha büyüktür, 9 > 1", "0,1 = 0,10.", 2),
        ],
      ),
    () =>
      lesson(
        "Üçgende yarım alan",
        "Tabanı 14 cm, yüksekliği 9 cm olan üçgenin alanı (14 × 9) ÷ 2 = 63 cm²’dir. Aynı ölçülerle paralelkenar 126 cm² olur.",
        "14 × 9 = 126’yı üçgenin alanı diye bırakmak, yarım adımını atlamaktır.",
        "14 × 9 = 126. 126 ÷ 2 = 63. Yükseklik tabana dik kabul edilir.",
        [
          ask("Taban 14 cm, yükseklik 9 cm ise üçgenin alanı kaç cm²’dir?", "63", "126", "23", "45", "(14 × 9) ÷ 2 = 63.", 0),
          ask("Aynı taban ve yükseklikte paralelkenarın alanı kaç cm²’dir?", "126", "63", "14", "9", "Paralelkenarda bölme yoktur: 14 × 9 = 126.", 1),
          ask("63 cm² bulunurken 2 neden vardır?", "Üçgen, paralelkenarın yarısıdır", "Çevre iki kez sayılır", "Yükseklik ikiye bölünür", "π yerine geçer", "Aynı taban ve yükseklikte üçgen yarı alanı alır.", 2),
        ],
      ),
    () =>
      lesson(
        "Çap ve çevre",
        "π = 3 ve çap 14 cm ise çemberin çevre uzunluğu 3 × 14 = 42 cm’dir. Yarıçap 7 cm’dir. Çevre, yarıçap üzerinden 2 × 3 × 7 = 42 cm diye de çıkar.",
        "Çap ile yarıçapı toplayıp 21 cm demek çevre değildir. Çevre, çemberin üzerinden bir turdur.",
        "14 × 3 = 42. 7 × 6 = 42. İki yol aynı uzunluğu verir.",
        [
          ask("π = 3 ve çap 14 cm ise çevre kaç cm’dir?", "42", "17", "28", "7", "3 × 14 = 42.", 0),
          ask("Bu çemberin yarıçapı kaç cm’dir?", "7", "14", "42", "28", "14 ÷ 2 = 7.", 1),
          ask("2 × π × r bağıntısında 14 cm’lik çap için r nedir?", "7", "14", "3", "42", "r yarıçaptır, çapın yarısıdır.", 2),
        ],
      ),
  ]
  return cards[day]()
}

export const g6 = {
  "6|Çarpanlar ve katlar": (n) => seq(n, factors),
  "6|Bölünebilme": (n) => seq(n, divisibility),
  "6|Asal sayılar": (n) => seq(n, primes),
  "6|Deneysel olasılık": (n) => seq(n, experiment),
  "6|Ondalık gösterim": (n) => seq(n, decimals),
  "6|Kesir ve bölme": (n) => seq(n, fractionSplit),
  "6|Kesir problemleri": (n) => seq(n, fractionProblem),
  "6|Uzunluk ölçme": (n) => seq(n, length),
  "6|Veri dağılımları": (n) => seq(n, dataDay),
  "6|Açılar ve dörtgenler": (n) => seq(n, angles),
  "6|Bilinmeyen nicelik": (n) => seq(n, unknown),
  "6|Örüntü": (n) => seq(n, pattern),
  "6|Cebirsel ifadeler": (n) => seq(n, algebra),
  "6|Uzunluk ve alan birimleri": (n) => seq(n, units),
  "6|Paralelkenar ve üçgenin alanı": (n) => seq(n, area),
  "6|Çember ve çap": (n) => seq(n, circle),
  "6|Yıl sonu tekrarı": (n) => seq(n, review),
}
