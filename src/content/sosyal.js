import { daily } from "./fen-auto.js"

const WHO = ["Ece", "Mert", "Ada", "Kerem", "Naz", "Can", "Elif", "Ali", "Derin", "Poyraz", "Nehir", "Emre", "Lara", "Baran", "Defne", "Arda", "Selin", "Yusuf", "İpek", "Ömer", "Asya", "Emir", "Maya", "Kaan", "Sena", "Deniz", "Aras", "Melis", "Eren", "Ayla", "Cem", "Gül", "Tarık", "Beren"]
const WHERE = ["sınıf meclisinde", "apartman toplantısında", "okul gezisinde", "proje ekibinde", "aile sofrasında", "kulüp odasında", "teneffüste", "dijital grupta", "mahalle etkinliğinde", "kütüphanede", "okul panosunda", "serviste", "yemekhanede", "saha kenarında", "atölyede"]

function grow(base, n) {
  const out = []
  for (let i = 0; i < n; i += 1) {
    if (i < base.length) out.push(base[i])
    else {
      const scene = base[i % base.length]
      out.push(`${i + 1}. ${WHO[i % WHO.length]}, ${WHERE[i % WHERE.length]}: ${scene}`)
    }
  }
  return out
}

function unit(label, explain, mistake, truths, wrongs, base) {
  return (n) => daily(label, explain, mistake, truths, wrongs, grow(base, n))(n)
}

const kahraman = [
  "1881’de Selanik’te doğan Mustafa’nın nüfus kaydı",
  "Ali Rıza Efendi ile Zübeyde Hanım’ın evi",
  "Şemsi Efendi Mektebi’nde okuma yazma",
  "Selanik’in liman kentindeki çok dilli hayat",
  "Askerî rüştiyede düzen ve matematik",
  "Manastır Askerî İdadisi’ne gidiş",
  "Manastır’da arkadaşlarıyla ülke meselelerini konuşmak",
  "Namık Kemal’in vatan fikrini Manastır’da okumak",
  "İstanbul Harp Okulu yılları",
  "1905’te Harp Akademisi’nden kurmay çıkış",
  "Şam’daki ilk görev ve gözlem",
  "Selanik’te ordu içindeki fikir tartışmaları",
  "Meşrutiyet ortamında gazete okumak",
  "Hürriyet sözünün o yıllardaki anlamı",
  "Yabancı dil öğrenmenin dünyayı izlemek olması",
  "Disiplinin kişisel öfkenin önüne geçmesi",
  "Arkadaş mektuplarında vatan kaygısı",
  "Görev yerinin kişisel rahatlıktan önce gelmesi",
  "Çocukluk kentinin ileride kararlarını etkilemesi",
  "Fikir ile makamın aynı şey olmaması",
]
const uyanis = [
  "30 Ekim 1918 Mondros Ateşkes Antlaşması",
  "Mondros’un orduyu dağıtan ağır şartları",
  "13 Kasım 1918’de İtilaf donanmasının İstanbul önleri",
  "İşgallerin ateşkes bahanesiyle yayılması",
  "15 Mayıs 1919 İzmir’in işgali",
  "İzmir işgaline karşı miting ve protesto",
  "Güneyde Fransız işgali ve çete çatışmaları",
  "İtalyanların Antalya ve çevresine yerleşmesi",
  "İstanbul hükümetinin işgallere etkili karşı koyamaması",
  "Azınlık iddialarının Wilson ilkelerine bağlanması",
  "İngiliz Muhipler Cemiyeti gibi zararlı cemiyetler",
  "Wilson Prensibi Cemiyeti’nin manda arayışı",
  "Kuvâ-yı Milliye’nin yerel direnişi",
  "Redd-i İlhak cemiyetlerinin işgale karşı çıkması",
  "Müdafaa-i Hukuk cemiyetlerinin örgütlenmesi",
  "19 Mayıs 1919’da Samsun’a çıkış",
  "Havza Genelgesi ile protestoların istenmesi",
  "22 Haziran 1919 Amasya Genelgesi",
  "Milletin bağımsızlığını yine milletin kurtaracağı hükmü",
  "23 Temmuz 1919 Erzurum Kongresi’nin açılması",
  "Erzurum’da manda ve himayenin reddi",
  "Vatanın bir bütün olduğu kararı",
  "4 Eylül 1919 Sivas Kongresi",
  "Cemiyetlerin Anadolu ve Rumeli Müdafaa-i Hukuk’ta birleşmesi",
  "Heyet-i Temsiliye’nin ulusal iradeyi temsil etmesi",
  "Damat Ferit hükümetinin kongreyi bastırma girişimi",
  "Ali Galip olayının Sivas’ta boşa çıkması",
  "Amasya görüşmelerinde İstanbul ile temas",
  "27 Aralık 1919’da Ankara’ya geliş",
  "Son Osmanlı Mebusan Meclisi’nin toplanması",
  "Misak-ı Millî kararları",
  "16 Mart 1920 İstanbul’un resmen işgali",
  "Meclis-i Mebusan’ın basılması",
  "Ankara’da yeni meclis için çağrı",
  "23 Nisan 1920 TBMM’nin açılması",
  "Egemenliğin millete ait olduğunun ilanı",
  "Meclis hükümeti sisteminin kurulması",
  "İstanbul hükümetinin yanında milli iradenin doğması",
  "Ayaklanmaların hilafet propagandasıyla körüklenmesi",
  "Hıyanet-i Vataniye Kanunu",
  "Düzenli ordu kurma kararı",
  "10 Ağustos 1920 Sevr’in dayatılması",
  "Sevr’in TBMM tarafından reddedilmesi",
  "Meclisin tek hedef olarak tam bağımsızlığı koyması",
]
const istiklal = [
  "Doğu Cephesi’nde Ermeni kuvvetleriyle çatışma",
  "3 Aralık 1920 Gümrü Antlaşması",
  "Güney Cephesi’nde halk direnişi",
  "Maraş’ın işgale karşı savunulması",
  "Antep’in uzun kuşatmaya direnmesi",
  "Urfa’da işgal güçlerine karşı mücadele",
  "Düzenli orduya geçiş kararı",
  "Çerkez Ethem kuvvetlerinin itaat dışına çıkması",
  "6-10 Ocak 1921 Birinci İnönü Zaferi",
  "20 Ocak 1921 Teşkilât-ı Esasiye Kanunu",
  "Londra Konferansı’nda İstanbul ve Ankara heyetleri",
  "12 Mart 1921 İstiklal Marşı’nın kabulü",
  "23 Mart-1 Nisan 1921 İkinci İnönü Zaferi",
  "Kütahya-Eskişehir Muharebeleri’nin kaybı",
  "5 Ağustos 1921’de başkomutanlık yetkisi",
  "Tekâlif-i Milliye emirleriyle ordunun beslenmesi",
  "23 Ağustos-12 Eylül 1921 Sakarya Meydan Muharebesi",
  "Sakarya’da ‘hattı müdafaa yoktur, sathı müdafaa vardır’ sözü",
  "20 Ekim 1921 Ankara Antlaşması ile güney sınırının rahatlaması",
  "Taarruz öncesi bir yıllık hazırlık",
  "26 Ağustos 1922 Büyük Taarruz",
  "30 Ağustos Başkomutanlık Meydan Muharebesi",
  "9 Eylül 1922’de İzmir’in kurtuluşu",
  "11 Ekim 1922 Mudanya Ateşkes Antlaşması",
  "1 Kasım 1922 saltanatın kaldırılması",
  "Lozan görüşmelerine Ankara’nın tek başına gitmesi",
  "İsmet Paşa’nın Lozan’daki başdelege olması",
  "Kapitülasyonların kaldırılması tartışması",
  "24 Temmuz 1923 Lozan Barış Antlaşması",
  "Sınırların ve boğazların yeni statüsü",
  "Osmanlı borçlarının paylaşımı",
  "Azınlıklar konusunda karşılıklı hükümler",
  "Lozan’ın askerî zaferi siyasal tanımaya çevirmesi",
  "Barışın, tam bağımsızlık hedefinin kâğıda dökülmesi",
]
const cagdas = [
  "13 Ekim 1923’te Ankara’nın başkent olması",
  "29 Ekim 1923 Cumhuriyet’in ilanı",
  "3 Mart 1924 hilafetin kaldırılması",
  "Tevhid-i Tedrisat ile öğretimin birleştirilmesi",
  "Şeriye ve Evkaf Vekâleti’nin kapatılması",
  "1924 Anayasası’nın kabulü",
  "1925’te şapka ve kılık düzeni",
  "Tekke ve zaviyelerin kapatılması",
  "Takvim, saat ve ölçülerin değiştirilmesi",
  "17 Şubat 1926 Türk Medeni Kanunu",
  "Medeni Kanun’un kadın ve aile hukukunu değiştirmesi",
  "1 Kasım 1928 harf devrimi",
  "Millet mektepleriyle okuma seferberliği",
  "1931 Türk Tarih Kurumu’nun kuruluşu",
  "1932 Türk Dil Kurumu’nun kuruluşu",
  "1934 Soyadı Kanunu",
  "Kadınların meslek hayatına açılması",
  "1923 İzmir İktisat Kongresi",
  "Demiryolu yapımının ülke bütünlüğüne katkısı",
  "Devletçiliğin sermaye azlığında sanayiyi kurması",
  "Cumhuriyetçilik ilkesinin egemenliği millete vermesi",
  "Milliyetçilik ilkesinin yurttaşlık bağı kurması",
  "Halkçılık ilkesinin ayrıcalığı reddetmesi",
  "Laikliğin din ile devlet işlerini ayırması",
  "Devletçilik ilkesinin ekonomi politikası olması",
  "İnkılapçılık ilkesinin çağın gerisinde kalmamayı söylemesi",
  "İlke ile yapılan inkılabın birbirini tamamlaması",
  "Kanun değişiminin günlük alışkanlığa yansıması",
  "Eğitimin inkılabın kalıcı olması için şart görülmesi",
  "İnkılabın amacının çağdaş yurttaş yetiştirmek olması",
]
const demokrasi = [
  "17 Kasım 1924 Terakkiperver Cumhuriyet Fırkası",
  "Şeyh Sait İsyanı sonrasında partinin kapatılması",
  "1930 Serbest Cumhuriyet Fırkası denemesi",
  "Fethi Okyar’ın muhalefet görevi",
  "İzmir mitingindeki taşkınlık ve partinin kapanması",
  "Çok partili denemenin rejim gençken neden zor olduğu",
  "1930’da kadınlara belediye seçme hakkının verilmesi",
  "1933’te muhtarlık seçimlerine katılım",
  "5 Aralık 1934’te kadınlara milletvekili seçme ve seçilme hakkı",
  "1935’te meclise kadın vekillerin girmesi",
  "Seçme hakkının bir anda değil aşama aşama genişlemesi",
  "Demokrasinin kurum ister, yalnız sloganla kurulmaması",
  "Parti kapatmanın siyasal bedeli",
  "Çok partili hayata geçişin 1945’ten sonra olgunlaşması",
]
const dis = [
  "Yurtta sulh, cihanda sulh sözünün savaştan kaçınmayı anlatması",
  "Lozan dengesinin yeni devletin dış politikasına temel olması",
  "5 Haziran 1926 Ankara Antlaşması ile Musul sorununun kapanması",
  "Nüfus mübadelesinin Lozan’daki hükmünün uygulanması",
  "9 Şubat 1934 Balkan Antantı",
  "8 Temmuz 1937 Sadabat Paktı",
  "20 Temmuz 1936 Montrö Boğazlar Sözleşmesi",
  "Hatay sorununun 1936-1938 arasındaki diplomatik yolu",
  "18 Temmuz 1932’de Milletler Cemiyeti’ne girilmesi",
  "Komşuyla sınır sorununu savaşa varmadan çözmek",
  "Boğazlarda egemenliğin pekişmesi",
  "İkinci Dünya Savaşı yaklaşırken tarafsızlığı koruma çabası",
]
const sonra = [
  "10 Kasım 1938’de Atatürk’ün Dolmabahçe’de ölümü",
  "11 Kasım 1938’de İsmet İnönü’nün cumhurbaşkanı seçilmesi",
  "Milli Şef yıllarının tek parti düzeni olması",
  "1 Eylül 1939 İkinci Dünya Savaşı’nın başlaması",
  "Türkiye’nin savaşa girmeme politikası",
  "Boğazlar ve sınırlarda silahlı tarafsızlık",
  "Milli Korunma Kanunu ile savaş ekonomisi",
  "Ekmek karnesi ve kıtlık yılları",
  "11 Kasım 1942 Varlık Vergisi’nin çıkarılması",
  "Varlık Vergisi’nin adaletsiz uygulamasının eleştirilmesi",
  "1944’te verginin kaldırılması",
  "Savaş boyunca orduyu hazır tutmanın maliyeti",
  "1945’te çok partili hayata geçiş kararı",
  "7 Ocak 1946 Demokrat Parti’nin kurulması",
  "1946 seçimlerinin açık oy gizli sayım eleştirisi",
  "Çiftçiyi Topraklandırma Kanunu tartışması",
  "Sovyetler Birliği’nin toprak ve boğaz talepleri",
  "Türkiye’nin Batı ittifakına yönelmesi",
  "1950 seçimlerinde iktidarın sandıkla değişmesi",
  "Savaş dışı kalmanın hem can hem demokrasi faturasının konuşulması",
]
const dort = [
  "19 Mayıs 1919’u bir başlangıç diye okumak",
  "23 Nisan 1920’yi egemenliğin millete geçmesi diye okumak",
  "30 Ağustos 1922’yi askerî dönüm diye okumak",
  "29 Ekim 1923’ü rejim değişikliği diye okumak",
  "Bu dört tarihi sırayla ve birbirinin yerine koymadan anlatmak",
]

const birlikte5 = [
  "Sınıf nöbetini kimsenin yükü olmadan paylaşmak",
  "Oyun kurallarına uymayanı dışlamadan uyarmak",
  "Farklı ağızla konuşan arkadaşa gülmemek",
  "Grup ödevinde herkesin bir görev alması",
  "Yardım isterken küçümsememek",
  "Selamlaşmanın mahallede ilişki kurması",
  "Başkasının eşyasına izinsiz dokunmamak",
  "Kültürel bir bayramı alay konusu yapmamak",
  "Yaşlı komşunun poşetini birlikte taşımak",
  "Tartışmada ses yükseltmeden gerekçe söylemek",
]
const dunya5 = [
  "İlin haritada komşularıyla yerini bulmak",
  "İklimin tarımı nasıl etkilediğini sormak",
  "Depremde toplanma alanını önceden bilmek",
  "Dere yatağına ev yapılmasının riski",
  "Göçün kenti hem kalabalıklaştırıp hem zenginleştirmesi",
  "Sınır komşusu ülkeyle ticaretin günlük eşyaya yansıması",
]
const miras5 = [
  "Göbeklitepe’nin çok eski bir inanç merkezi olması",
  "Çatalhöyük’te evlerin bitişik yapılması",
  "Yazının Mezopotamya’da kil tablete geçmesi",
  "Anadolu’nun ticaret yolları üzerinde olması",
  "Somut mirasın taş, somut olmayanın türkü olması",
  "Müzedeki esere dokunmadan bakmak",
]
const demo5 = [
  "Okul temsilcisini gizli oyla seçmek",
  "Seçilenin sözünü tutup tutmadığına bakmak",
  "Dilekçenin şikâyeti makama yazması",
  "Hak ararken başkasının hakkını çiğnememek",
  "Verginin ortak hizmete döndüğünü sormak",
  "Çoğunluğun azınlığı yok saymaması",
]
const ekonomi5 = [
  "Harçlığı ihtiyaca göre ayırmak",
  "İsrafın ev bütçesini delmesi",
  "İlin geçim kaynağını tanımak",
  "Üretim ile tüketimi karıştırmamak",
  "Tasarrufun biriktirmek olması",
  "Reklamın ihtiyaç yaratabileceğini fark etmek",
]
const tekno5 = [
  "Haritada uygulamayla yol bulmak",
  "Ekrandaki haberin kaynağını sormak",
  "Konum paylaşmanın güvenlik riski",
  "Teknolojinin hem kolaylık hem bağımlılık getirmesi",
  "Araştırma sorusunu tek cümleyle yazmak",
]
const birlikte6 = [
  "Grup değişince rolün de değişebilmesi",
  "Kültürel bağın insanı hem tutup hem dışlayabilmesi",
  "Farklı geleneği merak edip aşağılamamak",
  "Ortak işte sorumluluğu yazmak",
  "Dijital grupta da nezaket istemek",
  "Aidiyetin zorbalık bahanesi olmaması",
  "Yeni gelen öğrenciye yer göstermenin bir rol olması",
  "Takımda hata olunca suçu tek kişiye yıkmamak",
  "Farklı yemeği alay konusu yapmadan sormak",
  "Ortak kararı yazıp sonra uymak",
]
const dunya6 = [
  "Türkiye’nin konumunu kıtalar arasında okumak",
  "İklimin tarım ürününü değiştirmesi",
  "Türk dünyasıyla kültürel bağ",
  "Doğal afetin sınırsız olmadığını görmek",
  "Ulaşımın konumu değere çevirmesi",
  "Komşu ülkeyle su ve ticaret ilişkisini sormak",
]
const miras6 = [
  "Asya Hun Devleti’nin teşkilatını tanımak",
  "Göktürk yazıtlarının dil yadigârı olması",
  "Uygurların yerleşik hayata geçmesi",
  "İslam medeniyetinin bilim kentleri",
  "Malazgirt’in Anadolu kapısı olması",
  "Beyliklerin Anadolu’yu yurt tutması",
]
const demo6 = [
  "Karar alırken etkilenenleri sormak",
  "Dijital ortamda hakaretin de suç olabilmesi",
  "Kişisel verinin izinsiz yayılmaması",
  "Seçme yaşının bir hak tartışması olması",
  "Şeffaf bütçenin güven vermesi",
  "Muhalefetin düşman değil denetim olması",
]
const ekonomi6 = [
  "Kaynak kıt, istek sonsuz olunca seçim yapmak",
  "Üretim faktörlerini tanımak",
  "Girişimcinin risk alması",
  "Tasarrufun yatırıma dönebilmesi",
  "Markanın güven ile büyümesi",
  "Tüketici hakkının ayıplı malda işlemesi",
]
const tekno6 = [
  "Ulaşım ağının kenti büyütmesi",
  "Telif hakkının emeği koruması",
  "İzinsiz kopyalamanın hırsızlık sayılması",
  "Araştırma sorusundan veriye giden adım",
  "Haritayı kaynak göstermek",
  "Teknolojinin istihdamı değiştirmesi",
]
const birlikte7 = [
  "İletişimin fırsatı da çatışmayı da büyütmesi",
  "Millî meselenin günlük haberle ilişkisini sormak",
  "Farklı görüşle aynı masada kalmak",
  "Önyargıyı örnekle sınamak",
  "Dayanışmanın yalnız felakette değil okulda da olması",
  "Kimliğin hak eşitliğini bozmaması",
  "Haber başlığındaki sıfatı ayırıp olayı okumak",
  "Grup sohbetinde bir kişiyi dışarıda bırakmamak",
  "Aynı olayı iki tanığın ağzından dinlemek",
  "Önyargıyı bir örnekle sınadıktan sonra konuşmak",
]
const dunya7 = [
  "Küreselleşmenin malı ucuzlatıp emeği zorlaması",
  "Bölgesel bir sorunun Türkiye’ye yansıması",
  "Göçün hem insani hem ekonomik boyutu",
  "Sınır aşan suyun ortak yönetim istemesi",
  "İklim krizinin tarımı yerinden etmesi",
  "Uluslararası örgütün ne işe yaradığını sormak",
]
const miras7 = [
  "Osmanlı’nın çok uluslu yapısı",
  "Kanuni döneminde hukuk ve fetih dengesini sormak",
  "Lale Devri’nin yenileşme tartışması",
  "Tanzimat Fermanı’nın hak vaadi",
  "Islahat Fermanı’nın eşitlik iddiası",
  "Meşrutiyet’in meclis arayışı",
]
const demo7 = [
  "Cumhuriyetin niteliklerini anayasada aramak",
  "Güçler ayrılığının tek elde toplanmayı önlemesi",
  "Seçimin düzenli yapılmasının demokrasi şartı olması",
  "Basın özgürlüğünün denetim aracı olması",
  "Yargı bağımsızlığının hak için şart olması",
  "Demokrasinin krizlerde de kurala bağlı kalması",
]
const ekonomi7 = [
  "Kalkınmanın yalnız gelir artışı olmaması",
  "Gelişmişlik göstergesine eğitimi de katmak",
  "Bölgeler arası farkın hizmetle azalması",
  "İşsizliğin gençler için ayrı bir sorun olması",
  "Kayıt dışı ekonominin vergiyi eksiltmesi",
  "Sürdürülebilir kalkınmanın doğayı da sayması",
]
const tekno7 = [
  "Bilimin gözlem ve deneye dayanması",
  "Sosyal bilimlerin insan davranışını yöntemle incelemesi",
  "Veri ile görüşü ayırmak",
  "Harita ve grafiğin iddiayı sınaması",
  "Teknolojinin mahremiyeti zorlaması",
  "Araştırma etiğinin kişiyi rencide etmemesi",
]
const yil5 = ["Grupta rol paylaşılır", "Afet toplanma alanı önceden bilinir", "Türkü somut olmayan mirastır", "Dilekçe bir başvuru hakkıdır", "Bütçe sınırlı kaynakla yapılır"]
const yil6 = ["Kültürel bağ dışlamak için kullanılmaz", "Konum geçim kaynağını etkiler", "Göktürk yazıtı devlet fikrini taşır", "Kişisel veri izinsiz yayılmaz", "Telif emeği korur"]
const yil7 = ["Küreselleşme yereli de etkiler", "Tanzimat bir yenileşme dönemidir", "Kuvvetler ayrılığı yetkiyi böler", "Kalkınma yalnız gelirle ölçülmez", "Araştırma kişiyi rencide etmez"]

const T = {
  grup: ["Bir arada yaşamak rol paylaşmayı ister", "Farklılık aşağılanma nedeni değildir", "Yardım, küçümsemeden yapılır"],
  yer: ["Konum geçim kaynağını etkiler", "Afet önceden bilinirse zarar azalır", "Çevre hem doğal hem insan eseridir"],
  miras: ["Miras hem taş hem gelenektir", "Eski yerleşme bugünkü kenti açıklar", "Eser korunmadan sahiplenilmez"],
  hak: ["Hak, başkasının hakkıyla sınırlıdır", "Seçim denetimsiz kalırsa eksiktir", "Dilekçe bir başvuru yoludur"],
  para: ["İstek sınırsız, kaynak sınırlıdır", "İsraf bütçeyi deler", "Üretim tüketimden ayrıdır"],
  arac: ["Teknoloji kaynak gösterme borcu doğurur", "Konum paylaşmak risk taşır", "Veri ile görüş aynı şey değildir"],
}
const W = {
  grup: ["Farklı olan gruptan çıkarılır", "Güçlü olan kuralı tek başına yazar", "Yardım alan küçülür"],
  yer: ["İklim bir günde değişen havadır", "Dere yatağı güvenli arsadır", "Göç yalnız zarardır"],
  miras: ["Eski eser istenirse evde saklanır", "Yazı Anadolu’da ilk kez bulundu diye Mezopotamya silinir", "Türkü somut mirastır"],
  hak: ["Çoğunluk her şeye haklıdır", "Vergi ceza olarak alınır", "Dilekçe hakarettir"],
  para: ["Reklam ihtiyaç listesidir", "Tasarruf cimriliktir", "Kaynak sonsuzdur"],
  arac: ["Çok paylaşılan haber doğrudur", "Telif engeldir", "Harita kaynaksız kullanılabilir"],
}

export function sosyalLesson(grade, title, dayCount) {
  const key = `${grade}|${title}`
  const table = {
    "5|Birlikte yaşamak": unit("Birlikte", "İnsanlar grup içinde rol alır. Rol, kimseyi aşağılamadan iş bölümü yapmaktır. Kültürel fark, alay konusu değil merak konusudur.", "Güçlü olanın kuralı tek başına yazması birlikte yaşamayı bozar.", T.grup, W.grup, birlikte5),
    "5|Evimiz Dünya": unit("Yaşadığımız yer", "İlin konumu iklimi, geçimi ve komşulukları etkiler. Afet, önceden bilinirse daha az zarar verir. Doğal çevre ile insan yapısı çevre birlikte okunur.", "Bir yağmurlu günü iklim sanmak ortalamayı tek güne bağlar.", T.yer, W.yer, dunya5),
    "5|Ortak mirasımız": unit("Miras", "Miras, taşınan eser kadar anlatılan gelenek, türkü ve bayramdır. Anadolu’nun eski yerleşmeleri bugünkü kentin altına saklı bir kitaptır. Eser, dokunularak değil korunarak sahiplenilir.", "Eski eseri eve götürmeyi korumak sanmak mirası kaçırır.", T.miras, W.miras, miras5),
    "5|Yaşayan demokrasimiz": unit("Demokrasi", "Demokrasi, seçmek kadar seçileni denetlemektir. Dilekçe ve söz hakkı, kızgınlığı da kurala bağlar. Çoğunluk, azınlığın hakkını silemez.", "Çoğunluk istedi diye her şeyin doğru olacağını sanmak hakları siler.", T.hak, W.hak, demo5),
    "5|Hayatımızdaki ekonomi": unit("Ekonomi", "İstekler çok, kaynaklar sınırlıdır. Bu yüzden bütçe seçim yapar. İsraf, henüz alınmamış bir ihtiyacın hakkını yer. İlin ekonomisi tarla, atölye ve dükkânda görünür.", "Reklamdaki her malı ihtiyaç sanmak bütçeyi şaşırtır.", T.para, W.para, ekonomi5),
    "5|Teknoloji ve sosyal bilimler": unit("Teknoloji", "Teknoloji yolu kısaltır ama kaynağı gizleyebilir. Konum paylaşmak kolaylık kadar risk de taşır. Sosyal bilim sorusu, ‘bence’ demeden önce veriyi sorar.", "Ekranda çok görünen haberi doğru sanmak kaynağı atlar.", T.arac, W.arac, tekno5),
    "5|Yıl sonu tekrarı": unit("Beşinci sınıf sosyal", "Yıl sonunda rol, afet, miras, dilekçe ve bütçe ayrı ayrı hatırlanır.", "Kavramları birbirinin yerine koymak örneği kaydırır.", T.grup, W.grup, yil5),
    "6|Birlikte yaşamak": unit("Grup", "Gruplar değişir, roller de değişir. Kültürel bağ insanı tutar ama dışlamak için kullanılmamalıdır. Dijital grup da nezaket ister.", "Aidiyeti zorbalık bahanesi yapmak bağı koparır.", T.grup, W.grup, birlikte6),
    "6|Evimiz Dünya": unit("Konum", "Türkiye’nin konumu iklimi, ticareti ve komşulukları birlikte etkiler. Türk dünyasıyla bağ, haritada da dilde de aranır.", "Konumu yalnız sınır çizgisi sanmak geçim kaynağını gizler.", T.yer, W.yer, dunya6),
    "6|Ortak mirasımız": unit("Türk tarihi", "İlk Türk devletlerinde teşkilat, yazıt ve yaşam biçimi birlikte okunur. İslam medeniyeti bilim kentleriyle, Anadolu ise yurt tutulan bir coğrafyayla hatırlanır.", "Yazıtı süs sanmak, Orhun’daki devlet fikrini atlar.", T.miras, W.miras, miras6),
    "6|Yaşayan demokrasimiz": unit("Hak", "Karar, etkilenenleri de düşünerek alınır. Dijital ortamda hakaret ve izinsiz veri de hak ihlalidir. Muhalefet düşman değil denetimdir.", "Kişisel veriyi herkesin malı sanmak mahremiyeti siler.", T.hak, W.hak, demo6),
    "6|Hayatımızdaki ekonomi": unit("Üretim", "Kaynak kıt olduğu için seçim yapılır. Girişim risk alır, tasarruf yatırıma dönebilir. Tüketici, ayıplı malda hakkını sorar.", "Markayı kalite kanıtı sanmak sorgulamayı kapatır.", T.para, W.para, ekonomi6),
    "6|Teknoloji ve sosyal bilimler": unit("Telif", "Ulaşım kenti büyütür. Telif, emeği korur. Araştırma, sorudan veriye adım adım gider ve kaynağını yazar.", "Beğenilen içeriği izinsiz kopyalamayı paylaşım sanmak emeği siler.", T.arac, W.arac, tekno6),
    "6|Yıl sonu tekrarı": unit("Altıncı sınıf sosyal", "Yıl sonunda bağ, konum, yazıt, veri ve telif ayrı sorulur.", "Kültürel bağı üstünlük iddiasına çevirmek merakı kapatır.", T.miras, W.miras, yil6),
    "7|Birlikte yaşamak": unit("İletişim", "İletişim fırsatı da yanlış anlamayı da büyütür. Millî mesele, manşetin altındaki gerekçeyle okunur. Önyargı, örnekle sınanmadan hüküm olmaz.", "Farklı görüşü masadan kaldırmak iletişimi bitirir.", T.grup, W.grup, birlikte7),
    "7|Evimiz Dünya": unit("Küreselleşme", "Küreselleşme malı dolaştırır, emeği ve çevreyi de zorlayabilir. Bölgesel sorun Türkiye’nin sınırında bitmez. Göç hem insani hem ekonomik bir konudur.", "Ucuz malı bedelsiz sanmak emeği ve yolu yok sayar.", T.yer, W.yer, dunya7),
    "7|Ortak mirasımız": unit("Osmanlı ve yenileşme", "Osmanlı çok uluslu bir devletti. Yenileşme, Tanzimat ve Meşrutiyet ile hukuk ve meclis arayışına döndü. Bu arayış, Cumhuriyet’in öncesindeki birikimdir.", "Fermanı tek başına demokrasi sanmak meclisi atlar.", T.miras, W.miras, miras7),
    "7|Yaşayan demokrasimiz": unit("Cumhuriyet", "Cumhuriyetin nitelikleri anayasada yazılıdır. Seçim, yargı ve basın, gücün tek elde toplanmasını zorlaştırır. Demokrasi kriz gününde de kurala bağlı kalır.", "Olağanüstü hali kuralı silme izni sanmak hakları askıya alır.", T.hak, W.hak, demo7),
    "7|Hayatımızdaki ekonomi": unit("Kalkınma", "Kalkınma yalnız gelir artışı değildir. Eğitim, sağlık ve bölgeler arası fark da gelişmişlik göstergesidir. Kayıt dışı ekonomi ortak kasayı eksiltir.", "Zengin ili gelişmiş sayıp okulu sormamak göstergeleri eksik bırakır.", T.para, W.para, ekonomi7),
    "7|Teknoloji ve sosyal bilimler": unit("Yöntem", "Bilim gözlem ve deneye, sosyal bilim insan davranışını yönteme dayanır. Grafik iddiayı sınar. Araştırma, kişiyi rencide eden bir merak olmamalıdır.", "Görüşü veri sanmak grafiği süs diye kullanır.", T.arac, W.arac, tekno7),
    "7|Yıl sonu tekrarı": unit("Yedinci sınıf sosyal", "Yıl sonunda küreselleşme, Tanzimat, kuvvetler ayrılığı ve kalkınma ayrı hatırlanır.", "Ferman ile anayasayı aynı metin sanmak yüzyılı karıştırır.", T.hak, W.hak, yil7),
    "8|Bir kahraman doğuyor": unit("Kahraman", "Mustafa Kemal 1881’de Selanik’te doğdu. Öğrenimi Şemsi Efendi Mektebi’nden Harp Akademisi’ne uzanır. Manastır yıllarında okuma ve vatan fikri, ileriki kararlarının zeminidir.", "Kahramanlığı doğuştan hazır bir unvan sanmak öğrenim yıllarını siler.", ["Doğum yeri Selanik’tir", "Manastır’da fikir hayatı başladı", "1905 kurmay çıkış yılıdır"], ["Doğum yılı 1893’tür", "Harp Okulu Manastır’dadır", "Fikir hayatı Samsun’da başlar"], kahraman),
    "8|Millî uyanış": unit("Uyanış", "Mondros’tan sonra işgaller yayıldı. Cemiyetler ikiye ayrıldı: mandacılar ve milli direniş. Samsun, Amasya, Erzurum, Sivas ve 23 Nisan 1920 bu direnişin siyasi omurgasıdır.", "İşgali yerel bir olay sanmak Mondros’un ülke çapındaki etkisini gizler.", ["TBMM 23 Nisan 1920’de açıldı", "Amasya Genelgesi 22 Haziran 1919’dur", "Misak-ı Millî sınır ve bağımsızlık kararıdır"], ["Samsun çıkışı 1922’dir", "Erzurum Kongresi mandayı kabul etti", "Sevr TBMM tarafından imzalandı"], uyanis),
    "8|Ya istiklal ya ölüm": unit("Cephe", "Doğu ve güney cepheleri, ardından düzenli ordunun İnönü, Sakarya ve Büyük Taarruz’daki mücadelesi bağımsızlık savaşının askerî yanıdır. Mudanya ateşkes, Lozan ise bu zaferin tanınmasıdır.", "Sakarya’yı taarruzun kendisi sanmak tarih sırasını bozar.", ["Büyük Taarruz 26 Ağustos 1922’dir", "Lozan 24 Temmuz 1923’tür", "Saltanat 1 Kasım 1922’de kalktı"], ["İzmir 30 Ağustos’ta kurtuldu", "Mudanya bir barış antlaşmasıdır", "Gümrü batı cephesini kapattı"], istiklal),
    "8|Atatürkçülük ve çağdaşlaşan Türkiye": unit("İnkılap", "Cumhuriyet 29 Ekim 1923’te ilan edildi. Eğitim, hukuk, harf ve aile hukukundaki düzenlemeler çağdaş yurttaş hedefinin araçlarıdır. Altı ilke, bu araçların yönüdür.", "Harf devrimini yalnız alfabe değişimi sanmak okuma seferberliğini atlar.", ["Cumhuriyet 29 Ekim 1923’tür", "Medeni Kanun 1926’dadır", "Laiklik din ile devlet işini ayırır"], ["Hilafet Cumhuriyet’ten sonra güçlendi", "Ankara 1920’de başkent oldu", "Soyadı Kanunu 1924’tedir"], cagdas),
    "8|Demokratikleşme çabaları": unit("Demokrasi denemesi", "Terakkiperver ve Serbest Fırka denemeleri erken kapandı. Kadınlara seçme hakkının belediyeden meclise doğru genişlemesi ise süren bir demokratikleşmedir. Demokrasi kurum ister.", "Parti kapanınca demokrasinin bittiğini sanmak seçme hakkının genişlemesini görmez.", ["Kadınlar 1934’te vekil seçebilir", "Serbest Fırka 1930 denemesidir", "Çok parti kurum ister"], ["Kadınlara 1923’te vekillik hakkı verildi", "Terakkiperver Fırka iktidar oldu", "1930’da tek parti hiç kalmadı"], demokrasi),
    "8|Atatürk dönemi dış politika": unit("Dış politika", "Yurtta sulh, cihanda sulh, sorunları savaşa varmadan çözme ilkesidir. Musul, mübadele, Balkan Antantı, Sadabat, Montrö ve Hatay bu çizginin örnekleridir.", "Her sınır sorununu savaşla kapanmış sanmak diplomasinin işini siler.", ["Montrö 1936’dadır", "Milletler Cemiyeti’ne giriş 1932’dir", "Musul 1926 Ankara Antlaşması’ndadır"], ["Hatay 1923’te katıldı", "Balkan Antantı bir savaş ilanıdır", "Montrö boğazları kapattı"], dis),
    "8|Atatürk’ün ölümü ve sonrası": unit("1938 ve savaş", "Atatürk 10 Kasım 1938’de öldü. İkinci Dünya Savaşı’nda Türkiye savaşa girmedi. Varlık Vergisi gibi uygulamalar eleştirildi. Çok partili hayata geçiş 1945’ten sonra hızlandı.", "Savaşa girmemeyi bedelsiz sanmak kıtlık ve vergi yıllarını gizler.", ["Ölüm tarihi 10 Kasım 1938’dir", "Türkiye savaşa girmedi", "Demokrat Parti 1946’da kuruldu"], ["Ölüm 1939’dadır", "Varlık Vergisi 1950’dedir", "1950’de seçim olmadı"], sonra),
    "8|Yıl sonu tekrarı": unit("Dört tarih", "19 Mayıs 1919 başlangıç, 23 Nisan 1920 meclis, 30 Ağustos 1922 askerî dönüm, 29 Ekim 1923 rejim değişikliğidir. Dört tarih birbirinin yerine konmaz.", "Tarihleri aynı yıl sanmak süreci tek güne indirir.", ["19 Mayıs 1919 Samsun’dur", "23 Nisan 1920 meclistir", "29 Ekim 1923 Cumhuriyet’tir"], ["30 Ağustos Lozan’dır", "23 Nisan İzmir’in kurtuluşudur", "19 Mayıs Cumhuriyet bayramıdır"], dort),
  }
  const build = table[key]
  if (!build) throw new Error(`Sosyal eksik: ${key}`)
  return build(dayCount)
}
