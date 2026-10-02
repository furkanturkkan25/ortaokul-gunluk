import { ask, lesson } from "./make.js"

function clipTitle(hook) {
  if (hook.length <= 46) return hook
  const raw = hook.slice(0, 46)
  const space = raw.lastIndexOf(" ")
  return space > 12 ? raw.slice(0, space) : raw
}

function three(correct, pool, label) {
  const wrongs = []
  const extras = ["Bu yargı örneğe uymaz", "Bu cümle dayanak olamaz", "Bu açıklama örneği ters çevirir"]
  for (const item of [...pool, ...extras]) {
    const text = String(item)
    if (text && text !== correct && !wrongs.includes(text)) wrongs.push(text)
    if (wrongs.length === 3) return wrongs
  }
  throw new Error(`${label} şık: ${correct}`)
}

export function daily(label, explain, mistake, truths, wrongs, scenes) {
  return (n) => {
    if (scenes.length < n) throw new Error(`${label}: ${scenes.length} sahne, ${n} gün`)
    if (wrongs.length < 3) throw new Error(`${label} çeldirici`)
    return scenes.slice(0, n).map((hook, day) => {
      const myth = wrongs[day % wrongs.length]
      const rest = wrongs.filter((item) => item !== myth)
      const title = clipTitle(hook)
      const conclusion = `«${myth}» bu örnekte söylenemez`
      const becauseRight = `Doğru cümleyle çeliştiği için «${myth}» elenir`
      const falseReasons = [
        `«${hook}» yanlış olduğu için`,
        `«${myth}» doğru olduğu için`,
        `İki cümle aynı anlama geldiği için`,
      ]
      const reasonWrongs = three(becauseRight, falseReasons, label)
      const frame = day % 2

      if (frame === 0) {
        return lesson(
          title,
          `${explain} Bugünün örneği: ${hook}.`,
          `«${myth}» bu konuda yanlıştır. ${mistake}`,
          `Örnek «${hook}». Yanlış yargı «${myth}» elenir.`,
          [
            ask(`«${hook}» örneğiyle hangisi yanlıştır?`, myth, ...three(myth, [hook, ...truths, ...rest], label), `${myth} yanlıştır. ${mistake}`, day),
            ask(`«${hook}» örneğinde yanlış yargı neden elenir?`, becauseRight, ...reasonWrongs, `${becauseRight}. ${mistake}`, day + 1),
            ask(`«${hook}» örneği hangi doğru yargıyı destekler?`, truths[day % truths.length], ...three(truths[day % truths.length], [myth, ...rest], label), `Doğru yargı: ${truths[day % truths.length]}.`, day + 2),
          ],
        )
      }

      const follow = `«${hook}» örneği kabul edilince hangi sonuç çıkar?`
      const because = `«${hook}» örneğinde sonuç hangi gerekçeyle kurulur?`
      return lesson(
        title,
        `${explain} Bugünün örneği: ${hook}.`,
        `Bu örnek kabul edilince «${myth}» söylenemez. ${mistake}`,
        `Sonuç: ${conclusion}. Dayanak: ${hook}.`,
        [
          ask(follow, conclusion, ...three(conclusion, [`«${myth}» ifadesi de doğrudur`, `«${hook}» cümlesi yanlıştır`, `İki cümle de konu dışıdır`, myth], label), `${conclusion}. ${mistake}`, day),
            ask(because, becauseRight, ...reasonWrongs, `${becauseRight}. ${mistake}`, day + 1),
          ask(`«${hook}» örneği hangi doğru yargıya dayanır?`, truths[day % truths.length], ...three(truths[day % truths.length], [myth, ...rest], label), `Dayanak yargı: ${truths[day % truths.length]}.`, day + 2),
        ],
      )
    })
  }
}

const ay = [
  "Yeni Ay’da Ay’ın aydınlık yüzü Dünya’ya dönük değildir",
  "İlk dördün, Ay’ın yarısının aydınlık göründüğü evredir",
  "Dolunayda Ay’ın Dünya’ya bakan yüzü bütünüyle aydınlıktır",
  "Son dördünde aydınlık kısım yine yarım görünür",
  "Ay’ın evreleri, Ay’ın kendi ışığını açıp kapaması değildir",
  "Ay, Güneş’ten gelen ışığı yansıtır",
  "Bir ay yaklaşık 29,5 günde evrelerini tamamlar",
  "Takvimdeki ay, Ay’ın evre döngüsünden izlenerek düzenlenmiştir",
  "Hilal, ince aydınlık bir kıyı olarak görünür",
  "Ay’ın şekli değişmez; değişen, aydınlanan kısmın görünüşüdür",
]
const dunya = [
  "Dünya kendi ekseni etrafında döndüğü için gece ve gündüz oluşur",
  "Dünya Güneş’in çevresinde dolanırken mevsimlerin yolu da açılır",
  "Gündüz, bulunulan yerin Güneş’e dönük olmasıdır",
  "Gökyüzü gözlemi Güneş’e çıplak bakmadan, gölge ve zaman notuyla yapılır",
  "Yıldızların gece yer değiştirmiş görünmesi Dünya’nın dönmesiyle ilişkilidir",
]
const kuvvet = [
  "Kitabı masada sağa itmek",
  "Kapıyı kendine çekmek",
  "Yuvarlanan topu durdurmak",
  "Mıknatısın ataşı kendine çekmesi",
  "Rüzgârın yaprağı sürüklemesi",
  "Yayı gererek ucuna taş bağlamak",
  "Dinamometreye çanta asmak",
  "İki öğrencinin halatı ters yönlere çekmesi",
  "Fren yapan bisikletin yavaşlaması",
  "Paraşütün düşüşü yavaşlatması",
  "Su dolu bardağı kaldırmak",
  "Silgiyi sıranın üstünde kaydırmak",
  "Kapalı kapıyı omuzla itememek",
  "Lastiği iki yana çekmek",
]
const kutle = [
  "40 kg kütleli çanta Dünya’dan Ay’a götürülür",
  "Terazi 250 g elma gösterir",
  "Dinamometre çantayı 18 N olarak çeker",
  "Aynı taş dağda da kentte de aynı kütlededir",
  "Havuzdaki öğrenci ağırlığını daha az hisseder ama kütlesi değişmez",
  "Eşit kollu terazi kütle karşılaştırır",
  "Yaylı kantar çekim kuvvetini, yani ağırlığı ölçer",
  "Kütlesi 2 kg olan topun içindeki madde miktarı 2 kg’dır",
  "Ay’da yürümek kolaylaşır çünkü ağırlık azalır",
  "Market terazisi elmanın kütlesini kilogram cinsinden verir",
]
const surtunme = [
  "Buzda yürüyen kişinin ayağının kayması",
  "Spor ayakkabısının pürüzlü tabanı",
  "Kapı menteşesinin yağlanması",
  "Araba freninin tekeri yavaşlatması",
  "Pürüzlü rampa ile düz kaydırak arasındaki fark",
]
const hucre = [
  "Hücre zarı, hücreye giren ve çıkan maddeleri denetler",
  "Sitoplazma, organellerin bulunduğu yumuşak ortamdır",
  "Çekirdek, yönetim merkezidir ve kalıtım maddesini taşır",
  "Mitokondri, besinden enerji çıkarılmasına aracılık eder",
  "Koful, bitki hücresinde genelde büyüktür ve madde depolar",
  "Kloroplast, bitkide fotosentezin geçtiği yerdir",
  "Hücre duvarı, bitki hücresine sertlik verir",
  "Hayvan hücresinde kloroplast ve hücre duvarı yoktur",
  "Bitki hücresi hem duvar hem kloroplast taşıyabilir",
  "Amoebada da hücre zarı ve çekirdek düzeni vardır",
  "Soğan zarı mikroskopta hücrelere ayrılmış görünür",
  "Yanaktan alınan örnek hayvan hücresine örnektir",
  "Enerji ihtiyacı artan kas hücresinde mitokondri boldur",
  "Çekirdeği çıkarılan hücre düzenini uzun süre sürdüremez",
]
const destek = [
  "Uyluk kemiği vücudu taşır",
  "Kafatası beyni korur",
  "Omurga hem taşır hem esner",
  "Eklem, iki kemiğin hareketli birleştiği yerdir",
  "Diz eklemi bacağı büker",
  "Kıkırdak, kemiklerin birbirine sürtünmesini azaltır",
  "Kaslar kasılıp gevşeyerek kemiği çeker",
  "Kolun bükülmesinde biceps kası kısalır",
  "İskelet tek başına hareket edemez, kas ister",
  "Duruş bozukluğu omurgayı zorlar",
  "Kalsiyum kemiklerin sertliğine katkı verir",
  "Kırık kemik hareketsiz tutulup iyileşmeye bırakılır",
  "Eklemleri zorlayan ani dönüş burkulmaya yol açabilir",
  "Yüzme hem kası hem eklemi çalıştırır",
  "Destek sistemi olmasa vücut çöker ve organlar korunamaz",
]
const isik = [
  "El fenerinin ışığı düz bir çizgi boyunca gider",
  "Delikli kartonların delikleri aynı hizadaysa ışık geçer",
  "Delikler şaşarsa ışık öteye ulaşmaz",
  "Cam, saydam olduğu için arkası görülür",
  "Yağlı kâğıt yarı saydamdır, görüntü bulanıklaşır",
  "Tahta opak olduğu için ışığı geçirmez",
  "Gölge, opak cismin ışığı kesmesiyle oluşur",
  "Işık kaynağı yaklaşırsa gölge büyüyebilir",
  "Cisim perdeden uzaklaşırsa gölge boyu değişir",
  "Boşlukta da ışık doğrusal yol alır, havaya muhtaç değildir",
]
const maddeIsik = [
  "Ayna ışığı yansıtır",
  "Siyah tişört ışığın çoğunu soğurur ve ısınır",
  "Beyaz gömlek ışığın çoğunu yansıttığı için daha serin kalır",
  "Gölgenin yönü ışık kaynağının tersidir",
  "Pürüzlü duvar ışığı dağınık yansıtır",
]
const golge = [
  "Tam gölge, ışığın hiç ulaşmadığı karanlık bölgedir",
  "Tek noktasal kaynak ve opak top, perdede keskin gölge verir",
  "Kaynak yaklaşınca gölge büyür",
  "Cisim perdeye yaklaşınca gölge küçülür",
  "İkinci bir ışık bazı bölgeyi aydınlatıp tam gölgeyi daraltabilir",
  "Saydam cam tam gölge oluşturmaz",
  "Öğle güneşinde insan gölgesi kısalır",
  "Akşam alçalan Güneş gölgeyi uzatır",
  "Gölge oyunu opak figürle yapılır",
  "Bulanık kenar, birden çok ışık veya geniş kaynakla ilgili olabilir",
]
const tanecik = [
  "Su, gözle görülmeyen taneciklerden oluşur",
  "Katı tanecikleri sık dizildiği için biçimini korur",
  "Sıvı bulunduğu kabın şeklini alır",
  "Gaz hem kabı doldurur hem sıkıştırılabilir",
  "Tanecikler duruyor görünse de hareket hâlindedir",
]
const isi = [
  "Sıcak çorba soğuk kaşığa ısı verir",
  "Isı bir enerji aktarımıdır, sıcaklık ise ölçülen derecedir",
  "Aynı ısı, az suyu çok sudan daha çok ısıtır",
  "Termometre sıcaklığı ölçer, ısıyı doğrudan şişe gibi doldurmaz",
  "20°C’den 40°C’ye çıkan suyun sıcaklığı artmıştır",
  "Dokunarak sıcaklık karşılaştırmak güvenilir ölçüm değildir",
  "Buzdolabı yiyecekten ısı çektiği için yiyecek soğur",
  "Güneş’te kalan metal kaydırak ısınır",
  "İki kaptaki su aynı sıcaklıkta olabilir, ısıları kütleye göre ayrılır",
  "Sıcaklık birimi derecedir, ısı enerji olarak anlatılır",
]
const hal = [
  "Buz erirken katıdan sıvıya geçer",
  "Su donarken sıvıdan katıya geçer",
  "Islak saç kururken su buharlaşır",
  "Camdaki buğu, su buharının yoğuşmasıdır",
  "Hal değişince madde yok olmaz, tanecik düzeni değişir",
]
const maddeIsi = [
  "Raylar yazın genleşeceği için aralıklı döşenir",
  "Sıkışan kavanoz kapağı sıcak suda genleşerek gevşer",
  "Balon, soğukta içindeki hava büzülünce küçülür",
  "Metal kaşık, tahta kaşıktan daha iyi ısı iletir",
  "Tencere sapının plastik olması eli ısıdan korur",
  "Yün kazak ısıyı az ilettiği için vücudu sıcak tutar",
  "Çorba metal kaşıkta çabuk soğur çünkü ısı kaşığa geçer",
  "İletken ısıyı taşır, yalıtkan geçişi yavaşlatır",
  "Termos, ısı alışverişini azaltmak için tasarlanır",
]
const topar = [
  "Isı ile sıcaklığı ayırmak",
  "Erime ile çözünmeyi ayırmak",
  "Genleşme ile hal değişimini ayırmak",
  "İletken ile yalıtkanı örnekten tanımak",
  "Tanecik modeliyle katı, sıvı ve gazı açıklamak",
]
const elektrik = [
  "Pil, devreye enerji sağlar",
  "Ampul, elektrik enerjisini ışığa çevirir",
  "Anahtar açıkken devre tamamlanmaz, ampul yanmaz",
  "Anahtar kapanınca devre tamamlanır",
  "Bağlantı kablosu iletken olmalıdır",
  "Plastik saplı tornavida metal ucu dışında yalıtkandır",
  "İki pil doğru bağlanırsa ampul daha parlak olabilir",
  "Kısa devre, dirençsiz yol enerjiyi tehlikeli ısıtır",
  "Islak elle prize dokunulmaz",
  "Ampul patlaksa devre tamam olsa da ışık çıkmaz",
  "İletken telde hareketi sağlayan uçlar birbirine değmelidir",
  "Yalıtkan plastik, teli tutarken çarpılmayı önler",
]
const geri = [
  "Kâğıdı ayrı kutuya atmak",
  "Cam şişeyi kırmadan cam kumbarasına bırakmak",
  "Pet şişeyi ezerek plastik kutusuna koymak",
  "İçecek kutusunu metal biriktirmeye vermek",
  "Pili normal çöpe değil pil kutusuna atmak",
  "Yağlı pizza kutusunu geri dönüşüm kâğıdına karıştırmamak",
  "Bez torba kullanmak poşet sayısını azaltır",
  "Kırık camı gazeteye sarıp ayrıca söylemek",
  "Organik artığı komposta ayırmak",
  "Gereksiz baskı almamak kâğıt tüketimini keser",
  "Şişe kapağı ile şişenin ayrı toplanabildiğini okumak",
  "Atığı yakmak geri dönüşüm değildir",
  "Geri dönüşüm ham madde ve enerji tasarrufu sağlar",
  "Karışık çöp, ayrılmış atığın değerini düşürür",
  "Okul koridorundaki renkli kutular atığı türüne göre ayırır",
]
const yil5 = [
  "Güneş’e çıplak veya dürbünle bakılmaz",
  "Dolunayda Ay kendi ışığını üretmez",
  "40 kg kütle Ay’da da 40 kg kalır",
  "Buz erirken madde yok olmaz",
  "Plastik tel iletken değildir",
]

export const autoFen = {
  "5|Gökyüzündeki komşumuz: Ay": daily(
    "Ay",
    "Ay, Dünya’nın uydusudur ve Güneş’ten gelen ışığı yansıtır. Evreler, Ay’ın biçiminin değişmesi değil, aydınlanan yüzün Dünya’dan farklı görünmesidir.",
    "Ay’ın kendi ışığını açıp kapadığını sanmak evreyi yanlış açıklar.",
    ["Ay ışığı yansıtır, üretmez", "Evre, görünen aydınlık kısımdır", "Döngü yaklaşık bir ay sürer"],
    ["Ay bir yıldızdır", "Dolunayda Ay ışık üretir", "Evreler her gece rastgeledir"],
    ay,
  ),
  "5|Dünya ve gökyüzü": daily(
    "Dünya",
    "Gece ve gündüz, Dünya’nın kendi ekseni etrafında dönmesinden oluşur. Bulunulan yer Güneş’e dönükse gündüz, ters taraftaysa gece yaşanır.",
    "Gündüzü Güneş’in Dünya’nın çevresinde bir günde dolanması sanmak günlük hareketi karıştırır.",
    ["Gece-gündüz Dünya’nın dönmesidir", "Gündüz, Güneş’e dönük yüzdedir", "Gözlem Güneş’e bakmadan da yapılır"],
    ["Güneş her akşam söner", "Gece Ay Dünya’yı örttüğü için olur", "Dünya dönmez, gök döner diye kesinlenir"],
    dunya,
  ),
  "5|Kuvvet ve ölçülmesi": daily(
    "Kuvvet",
    "Kuvvet, duran cismi hareket ettirebilir, hareketli cismi durdurabilir veya yönünü ve şeklini değiştirebilir. Büyüklüğü dinamometre ile ölçülür.",
    "Her itmenin hareket doğuracağını sanmak, sürtünme ve karşı kuvveti yok sayar.",
    ["Kuvvet hareketi veya şekli değiştirebilir", "Kuvvet dinamometre ile ölçülür", "Çekme de itme de kuvvettir"],
    ["Kuvvet yalnız canlılardan çıkar", "Kuvvet kilogramla ölçülür", "Çekmek kuvvet sayılmaz"],
    kuvvet,
  ),
  "5|Kütle ve ağırlık": daily(
    "Kütle ve ağırlık",
    "Kütle madde miktarıdır, terazi ile ölçülür ve yer değişince aynı kalır. Ağırlık, kütleye etki eden çekim kuvvetidir ve dinamometre ile ölçülür.",
    "Kütle ile ağırlığı aynı sözcük sanmak, Ay’da tartının değişmesini kütle değişimi diye okutur.",
    ["Kütle yer değişince aynı kalır", "Ağırlık çekim kuvvetidir", "Terazi kütleyi, dinamometre ağırlığı ölçer"],
    ["Ay’da kütle yarıya iner", "Ağırlık kilogramla tanımlanır", "Terazi çekim kuvvetini doğrudan verir"],
    kutle,
  ),
  "5|Sürtünme kuvveti": daily(
    "Sürtünme",
    "Sürtünme, temas eden yüzeyler arasında hareketi zorlaştıran kuvvettir. Pürüz ve baskı sürtünmeyi artırır; yağ ve düz yüzey azaltır. Sürtünme bazen istenır, bazen azaltılır.",
    "Sürtünmeyi her zaman zarar saymak, yürümenin ve frenin onsuz olmayacağını unutturur.",
    ["Sürtünme hareketi zorlaştırır", "Pürüz sürtünmeyi artırır", "Fren sürtünmeden yararlanır"],
    ["Buz sürtünmeyi artırır", "Yağ sürtünmeyi büyütür", "Sürtünme yalnız zararlıdır"],
    surtunme,
  ),
  "5|Hücre ve organeller": daily(
    "Hücre",
    "Hücre, canlıların yapı birimidir. Zarı madde girişini denetler, sitoplazması organelleri taşır, çekirdeği yönetimi üstlenir. Bitki hücresinde duvar ve kloroplast bulunabilir.",
    "Bütün hücreleri aynı sanmak, bitki ile hayvan hücresindeki farkı siler.",
    ["Çekirdek yönetim merkezidir", "Zarı madde geçişini denetler", "Kloroplast bitki hücresine özgüdür"],
    ["Hayvan hücresinde duvar vardır", "Mitokondri fotosentez yapar", "Hücre yalnız mikroskopsuz görülür"],
    hucre,
  ),
  "5|Destek ve hareket": daily(
    "Destek",
    "Kemikler destekler, korur ve kaslarla birlikte hareketi sağlar. Eklem kemikleri birleştirir, kaslar kasılıp gevşeyerek kemiği çeker. İskelet tek başına yürümez.",
    "Kasın kemiği ittiğini sanmak, kasın çekme işini ters çevirir.",
    ["Kas kemiği çekerek hareket ettirir", "Eklem kemiklerin birleştiği yerdir", "Kafatası beyni korur"],
    ["Kemik kendi kendine bükülür", "Eklem yalnız süs içindir", "Kaslar iskeletsiz de iskelet gibi taşır"],
    destek,
  ),
  "5|Işığın yayılması": daily(
    "Işığın yolu",
    "Işık, homojen saydam ortamda doğrusal yol alır. Saydam maddeler ışığı geçirir, yarı saydamlar dağıtır, opaklar keser. Gölge, ışığın kesildiği yerde oluşur.",
    "Işığın köşeyi dönebildiğini sanmak, delik hizasını bozunca ışığın neden kesildiğini açıklayamaz.",
    ["Işık doğrusal yayılır", "Opak madde ışığı keser", "Saydam madde arkayı gösterir"],
    ["Işık her zaman kıvrılır", "Tahta saydamdır", "Gölge ışığın üstüne düşer"],
    isik,
  ),
  "5|Madde ve ışık": daily(
    "Yansıma ve soğurma",
    "Işık bir yüzeye çarpınca yansıyabilir veya soğurulabilir. Koyu ve mat yüzeyler daha çok soğurup ısınır, açık ve parlak yüzeyler daha çok yansıtır.",
    "Siyahın ışık ürettiğini sanmak, soğurmayı kaynak sanmaktır.",
    ["Siyah yüzey daha çok soğurur", "Ayna ışığı yansıtır", "Gölge ışığın ters yönündedir"],
    ["Beyaz yüzey her zaman daha çok ısınır", "Ayna ışığı yutar", "Gölge kaynağın yanında oluşur"],
    maddeIsik,
  ),
  "5|Tam gölge": daily(
    "Tam gölge",
    "Tam gölge, opak cismin ışığı hiç geçirmediği karanlık bölgedir. Kaynak yaklaşır veya cisim perdeden uzaklaşırsa gölge büyüyebilir. Saydam cisim tam gölge vermez.",
    "Her karaltıyı tam gölge sanmak, yarı aydınlık bölgeyi ayırt etmemektir.",
    ["Tam gölgede ışık yoktur", "Opak cisim tam gölge verebilir", "Kaynak yaklaşınca gölge büyüyebilir"],
    ["Cam tam gölge yapar", "Gölge ışık kaynağının içindedir", "Cisim yaklaşınca gölge her zaman büyür"],
    golge,
  ),
  "5|Maddenin tanecikli yapısı": daily(
    "Tanecik",
    "Madde, gözle görülmeyen taneciklerden oluşur. Katıda tanecikler sık ve düzenli titreşir, sıvıda birbirinin üzerinden kayar, gazda kabı dolduracak kadar dağınıktır.",
    "Gazı boşluk sanmak, taneciklerin görünmemesini yokluk saymaktır.",
    ["Madde taneciklerden oluşur", "Katı biçimini korur", "Gaz kabı doldurur"],
    ["Sıvının taneciği yoktur", "Katı kolayca sıkışıp yok olur", "Gazın kütlesi yoktur"],
    tanecik,
  ),
  "5|Isı ve sıcaklık": daily(
    "Isı ve sıcaklık",
    "Sıcaklık, maddenin tanecik hareketinin ölçülen derecesidir. Isı ise sıcaklık farkından doğan enerji aktarımıdır. Aynı sıcaklıktaki iki suyun taşıdığı enerji, kütleleri farklıysa aynı olmayabilir.",
    "Isı ile sıcaklığı aynı birim sanmak, termometrede okunan sayıyı enerji miktarı diye yazdırır.",
    ["Isı enerji aktarımıdır", "Sıcaklık derece ile ölçülür", "Az su aynı ısıda daha çok ısınır"],
    ["Isı bir sıcaklık birimidir", "Termometre ısıyı litre gibi ölçer", "Büyük kütle her zaman daha sıcaktır"],
    isi,
  ),
  "5|Maddenin hâl değişimi": daily(
    "Hâl değişimi",
    "Erime katıdan sıvıya, donma sıvıdan katıya, buharlaşma sıvıdan gaza, yoğuşma gazdan sıvıya geçiştir. Hâl değişince madde yok olmaz.",
    "Buharlaşan suyun yok olduğunu sanmak, çamaşırın kurumasını kayıp diye anlatır.",
    ["Erime katıdan sıvıyadır", "Buğu yoğuşmadır", "Hâl değişince madde yok olmaz"],
    ["Erime gazdan katıya geçiştir", "Donma buharlaşmadır", "Buhar maddeyi yok eder"],
    hal,
  ),
  "5|Madde ve ısı": daily(
    "Genleşme",
    "Maddeler ısınınca genleşir, soğuyunca büzülür. Metaller ısıyı iyi iletir, plastik, tahta ve yün zayıf iletir. İletken ile yalıtkan, ısının ne hızla yol aldığıdır.",
    "Genleşmeyi hâl değişimi sanmak, ray aralığını erime diye açıklar.",
    ["Isınan madde genleşir", "Metal ısıyı iyi iletir", "Yalıtkan ısı geçişini yavaşlatır"],
    ["Soğuyunca her madde genleşir", "Plastik sap ısıyı metale eşit iletir", "Yün ısıyı hızla dışarı kaçırır"],
    maddeIsi,
  ),
  "5|Madde ünitesini toparlama": daily(
    "Madde tekrarı",
    "Isı enerji aktarımı, sıcaklık ise ölçülen derecedir. Hâl değişimi tanecik düzenini değiştirir, maddeyi yok etmez. İletken ısıyı hızla taşır, yalıtkan geciktirir.",
    "Kavramları birbirinin yerine koymak, örneği yanlış araca bağlar.",
    ["Isı ile sıcaklık ayrıdır", "Hâl değişiminde madde kalır", "Yalıtkan geçişi yavaşlatır"],
    ["Sıcaklık bir enerjinin adıdır", "Buharlaşma yok oluştur", "Metal yalıtkandır"],
    topar,
  ),
  "5|Yaşamımızdaki elektrik": daily(
    "Elektrik",
    "Basit devrede pil enerji sağlar, kablolar yolu tamamlar, ampul ışık verir, anahtar yolu açar veya kapatır. Yol iletkenden kurulur. Yalıtkan, çarpılmayı önlemek için kullanılır.",
    "Açık anahtarlı devrenin yanacağını sanmak, yolu yarım bırakmaktır.",
    ["Kapalı devrede ampul yanabilir", "Plastik yalıtkandır", "Pil devrenin enerji kaynağıdır"],
    ["Açık anahtar ışık verir", "Plastik tel iletkenin yerini tutar", "Ampul enerjiyi kendisi üretir"],
    elektrik,
  ),
  "5|Geri dönüşüm": daily(
    "Geri dönüşüm",
    "Geri dönüşüm, atığı türüne göre ayırıp yeniden ham maddeye çevirmektir. Karışık çöp bu işi zorlaştırır. Amaç çöpü görünmez kılmak değil, kaynağı ve enerjiyi korumaktır.",
    "Her atığı aynı kutuya atıp geri dönüştü sanmak ayrıştırmayı bozar.",
    ["Atık türüne göre ayrılır", "Geri dönüşüm ham madde korur", "Pil ayrı toplanır"],
    ["Yağlı kâğıt kâğıt kutusuna girer", "Yakmak geri dönüşümdür", "Plastik toprakta hemen yok olur"],
    geri,
  ),
  "5|Yıl sonu tekrarı": daily(
    "Fen tekrarı",
    "Yıl sonunda ışık kaynağı ile yansıyan cisim, kütle ile ağırlık, hâl değişimi ve iletkenlik yeniden ayrılır. Her örnek kendi kavramına bağlanır.",
    "Benzeyen sözcükleri aynı kavram saymak, yıl içindeki ayrımı siler.",
    ["Güneş’e çıplak bakılmaz", "Kütle yer değişince kalır", "Buharlaşan su yok olmaz"],
    ["Ay kendi ışığını üretir", "Plastik iyi iletkendir", "Erime yok oluştur"],
    yil5,
  ),
}
