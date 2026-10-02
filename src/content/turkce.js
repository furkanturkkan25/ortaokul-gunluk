import { ask, lesson } from "./make.js"

const NAMES = ["Ece", "Mert", "Ada", "Kerem", "Naz", "Can", "Elif", "Ali", "Derin", "Poyraz", "Nehir", "Emre", "Lara", "Baran", "Defne", "Arda", "Selin", "Yusuf", "İpek", "Ömer", "Asya", "Emir", "Maya", "Kaan", "Sena", "Deniz", "Aras", "Melis", "Eren", "Ayla", "Cem", "Gül", "Tarık", "Beren"]

function plain(text) {
  return String(text).replace(/[.]+$/, "")
}

function opts(correct, pool) {
  const wrongs = []
  for (const item of pool) {
    const text = String(item)
    if (text && text !== String(correct) && !wrongs.includes(text)) wrongs.push(text)
    if (wrongs.length === 3) return wrongs
  }
  for (const extra of ["Parçada kurulmayan bir sonuç", "Metnin dışındaki bir tahmin", "Kişinin seçmediği bir yol"]) {
    if (extra !== String(correct) && !wrongs.includes(extra)) wrongs.push(extra)
    if (wrongs.length === 3) return wrongs
  }
  throw new Error(`şık yetmedi: ${correct}`)
}

function read(skill, watch, rows) {
  return (n) => {
    if (rows.length < n) throw new Error(`${skill}: ${rows.length} < ${n}`)
    return rows.slice(0, n).map((row, day) => {
      const [hook, passage, idea, detail, feeling, badIdea, badDetail, badFeel] = row
      const title = hook.length <= 46 ? hook : hook.slice(0, hook.lastIndexOf(" ", 46) > 12 ? hook.lastIndexOf(" ", 46) : 46)
      const frame = day % 3
      const teach = `${passage} ${watch}`
      if (frame === 0) {
        return lesson(title, teach, `Parçanın vardığı yargı: ${idea}. Metinde olmayan bilgi ise «${badDetail}»dir.`, `Ana fikir «${idea}»dır. Ayrıntı «${detail}» bunu taşır.`, [
          ask(`«${title}» parçasının ana fikri hangisidir?`, idea, ...opts(idea, [badIdea, badDetail, badFeel, detail]), `Ayrıntı «${detail}» bilgisidir. Ana fikir: ${idea}.`, day),
          ask(`«${title}» parçasında hangi bilgi yoktur?`, badDetail, ...opts(badDetail, [detail, idea, feeling]), `«${badDetail}» metinde geçmez. Geçen ayrıntı: ${detail}.`, day + 1),
          ask(`«${title}» için hangi özet reddedilmelidir?`, badIdea, ...opts(badIdea, [idea, detail, feeling]), `Reddedilen özet «${badIdea}»dir. Parçanın yargısı: ${idea}.`, day + 2),
        ])
      }
      if (frame === 1) {
        return lesson(title, teach, `Görünen ayrıntı «${plain(detail)}»dir. Kişinin seçtiği tutum ise «${plain(feeling)}» olmaktır.`, `Ayrıntı kanıttır: ${plain(detail)}. Tutum bu kanıttan okunur.`, [
          ask(`«${title}» parçasında açıkça geçen ayrıntı hangisidir?`, detail, ...opts(detail, [badDetail, badIdea, badFeel]), `Ayrıntı metinde duran bilgidir: ${detail}.`, day),
          ask(`«${title}» karşısında seçilen tutum hangisidir?`, feeling, ...opts(feeling, [badFeel, badIdea, badDetail]), `Seçilen tutum «${feeling}»dir.`, day + 1),
          ask(`«${title}» parçasına uymayan başlık hangisidir?`, badIdea, ...opts(badIdea, [idea, detail, feeling]), `Uymayan başlık «${badIdea}»dir. Uygun yargı: ${idea}.`, day + 2),
        ])
      }
      return lesson(title, teach, `Yanlış özet «${badIdea}» olurdu. Ayrıntı «${detail}» ise asıl yargıya, yani «${idea}»ya gider.`, `Kanıt «${detail}», sonuç «${idea}».`, [
        ask(`«${title}» için hangi özet yanlıştır?`, badIdea, ...opts(badIdea, [idea, detail, feeling]), `Yanlış özet «${badIdea}»dir.`, day),
          ask(`«${title}» parçasında «${detail}» ayrıntısı hangi yargıya varır?`, idea, ...opts(idea, [badIdea, badDetail, badFeel]), `Bu ayrıntının vardığı yargı: ${plain(idea)}.`, day + 1),
        ask(`«${title}» kişisinin kaçındığı tutum hangisidir?`, badFeel, ...opts(badFeel, [feeling, idea, detail]), `Kaçınılan tutum «${badFeel}»dir. Seçilen tutum «${feeling}»dir.`, day + 2),
      ])
    })
  }
}

function row(name, place, event, detail, idea, feeling, badIdea, badDetail, badFeel) {
  const hook = `${name}, ${place}`
  const passage = `${name}, ${place} ${event}. ${detail}`
  return [hook, passage, idea, detail, feeling, badIdea, badDetail, badFeel]
}

function themed(bank) {
  return bank.map((item, index) => row(NAMES[index % NAMES.length], ...item))
}

const oyun = themed([
  ["okul bahçesinde", "seksek oynarken taşın düştüğü kareyi arkadaşlarına gösterdi", "Yeni gelen çocuk da sıraya girdi.", "Kural paylaşılınca oyun herkese açılır.", "sabırlı", "Kuralsız oynamak daha adildir", "Kimse sıraya girmedi", "küskün"],
  ["teneffüste", "ip atlarken ritmi bozan arkadaşını azarlamadan sayıyı yeniden tuttu", "İp başa değince sıra değişti.", "Dikkat, oyunun ritmini korur.", "dengeli", "Bağırmak ritmi düzeltir", "İp hiç kullanılmadı", "öfkeli"],
  ["yağmurlu salonda", "satrançta rakibinin taşına dokunup bırakma kuralını hatırlattı", "Oyun sessizce sürdü.", "Kural, tartışmayı kısaltır.", "sakin", "Satrançta kural yoktur", "Taşlar yere saçıldı", "kibirli"],
  ["parkta", "yakan topta çizgi dışına çıkanı uyarıp oyuna geri çağırdı", "Kimse oyun dışı bırakılıp aşağılanmadı.", "Sınır, oyunu dağıtmaz; toparlar.", "kapsayıcı", "Çizgi önemsizdir", "Top hiç uçmadı", "alaycı"],
  ["köy meydanında", "saklambaçta ebe sayısını herkese duyurdu", "Küçük çocuk da saklanacak yer buldu.", "Açıklanan kural, küçüğü dışarıda bırakmaz.", "koruyucu", "Ebe kuralı gizlemelidir", "Kimse saklanmadı", "umursamaz"],
  ["spor salonunda", "masa tenisinde servis sırasını kardeşine verdi", "Skor yüksek sesle söylendi.", "Sıra, kazanma hırsından önce gelir.", "adil", "Servis hep aynı kişidedir", "Masa kurulmadı", "hırslı"],
  ["apartman boşluğunda", "istopta araya giren topu kimin kullandığını sordu", "Oyun kaldığı yerden devam etti.", "Karışan durumda sormak oyunu kurtarır.", "dürüst", "Top kiminse onundur, sorulmaz", "Oyun hiç durmadı", "suçlayıcı"],
  ["kütüphane saatinde", "sessiz sinema oynarken kelimeyi fısıldamadan anlattı", "Gülenler bile ses çıkarmadı.", "Ortamın kuralı oyunun da kuralıdır.", "özenli", "Kütüphanede bağırarak anlatmak serbesttir", "Kimse izlemedi", "gürültücü"],
  ["deniz kenarında", "kumdan kale kurarken yıkılan yeri birlikte onardı", "Kaleyi tek başına sahiplenmedi.", "Ortak işte bozulan yeri onarmak oyundur.", "işbirlikçi", "Kale kimin yıktıysa onun suçudur", "Kum kullanılmadı", "kıskanç"],
  ["sınıf köşesinde", "kelime oyununda bilmediği sözcüğü sözlükten birlikte baktı", "Yeni sözcük panoya yazıldı.", "Oyun, sözcük dağarcığını büyütür.", "meraklı", "Bilmeyen elenir ve susar", "Sözlük yasaktı", "çekingen"],
  ["halı sahada", "gol olup olmadığını çizgiye bakarak kararlaştırdı", "Tartışma uzamadan oyun sürdü.", "Göz kararı değil, sınır kararı bitirir.", "ölçülü", "En çok bağıran haklıdır", "Çizgi yoktu", "inatçı"],
  ["evdeki masada", "yapbozda kayıp parçayı suçlamadan halının altında aradı", "Parça bulununca resim tamamlandı.", "Eksik parçada suç değil arama işe yarar.", "sebatkâr", "Eksik parça oyunu bitirir", "Yapboz kutusu kapalı kaldı", "bezgin"],
  ["okul şenliğinde", "üç bacak yarışında arkadaşının temposuna uydu", "Düşseler de birlikte kalktılar.", "Birlikte yarış, aynı tempoyu ister.", "uyumlu", "Hızlı olan ipi çözer", "Yarış tek kişiyle koşuldu", "bencil"],
  ["karlı bahçede", "kardan adamın burnuna havuç koyma sırasını küçüğe verdi", "Herkes bir parça ekledi.", "Sıra vermek oyunu tek kişinin gösterisi olmaktan çıkarır.", "cömert", "Küçük olan yalnız izler", "Havuç yenildi", "dışlayıcı"],
  ["otobüs durağında", "bekleme uzayınca taş-kâğıt-makası sayarak oynadı", "Kimse itişmedi.", "Kısa kural, boş zamanı kavgaya bırakmaz.", "sakin", "Beklerken itişmek oyundur", "Taş hiç gösterilmedi", "sabırsız"],
  ["müze bahçesinde", "heykellere dokunmadan yerde çizgi oyunu kurdu", "Görevli başıyla onayladı.", "Oyunun yeri, başkasının emeğine zarar vermemelidir.", "saygılı", "Heykel de oyun taşıdır", "Çizgi heykele kazındı", "umursamaz"],
  ["yaz kampında", "gece fenerle anlatılan hikâyede sözü kesmeden dinledi", "Sıra ona gelince kısa konuştu.", "Dinlemek de oyunun bir hamlesidir.", "dinleyici", "Hikâyeyi en çok bağıran bitirir", "Fener kapalıydı", "ilgisiz"],
  ["bisiklet parkında", "denge yarışında düşen arkadaşının sırasını geri verdi", "Alkış hız için değil kalkış içindi.", "Yeniden deneme hakkı oyunu büyütür.", "destekleyici", "Düşen elenir", "Bisiklet yoktu", "alaycı"],
  ["sınıf panosunda", "bulmaca kutusuna yeni bir ipucu ekledi", "Ertesi gün başkası çözdü.", "İpucu vermek kaybetmek değil, oyunu sürdürmektir.", "paylaşımcı", "İpucu hiledir", "Pano boştu", "kıskanç"],
  ["köprü altında", "taş sektirmede en çok sekene değil en düzgün atana baktılar", "Sayı birlikte tutuldu.", "Ölçüt önceden belli olursa sonuç tartışılmaz.", "açık sözlü", "Kurallar oyun bitince konur", "Taş atılmadı", "kararsız"],
  ["piknikte", "ip çekmede yaşça küçüğü öne alıp tutuşu gösterdi", "İp kopmadan bitti.", "Öğretmek, oyunu tek elde toplamaz.", "öğretici", "Küçük olan ipi tutamaz", "İp yarışa çıkmadı", "küçümseyici"],
  ["okul koridorunda", "yerdeki izleri takip etme oyununda koşmayı yürüyüşe çevirdi", "Kimse kaymadı.", "Oyun heyecanlı diye güvenlik kalkmaz.", "dikkatli", "Koridorda koşmak kuralın parçasıdır", "İz yoktu", "dikkatsiz"],
  ["bahçedeki bankta", "kart oyununda eksik kartı söyleyip desteği yeniden dağıttı", "Kimse eksik kartı saklamadı.", "Eksik bilgiyle kazanmak oyunu bozar.", "dürüst", "Eksik kart şanstır, söylenmez", "Kartlar hiç dağılmadı", "kurnaz"],
  ["yüzme kursunda", "suyun içinde top sürerken itmeden omuz omuza durdu", "Hakem düdüğü beklenildi.", "Temas oyunu bile sınır ister.", "kontrollü", "Suda itmek serbesttir", "Top suya girmedi", "saldırgan"],
  ["akşam üstü sokakta", "bilye çukuruna eğilip sırayı şapkadan çekilen kâğıtla belirledi", "Küçük kardeş de bir atış yaptı.", "Şansla belirlenen sıra, kavganın yerini alır.", "eşitlikçi", "En büyük her zaman önce atar", "Bilye yoktu", "ayrıcalıklı"],
])

const ataturk = themed([
  ["biyografi köşesinde", "1881’de Selanik’te doğduğunu kaynaktan okudu", "Yorum ile tarihi aynı cümlede yazmadı.", "Bilgi, belgeden; yorum, okurun yargısındandır.", "dikkatli", "1881 bir tahmindir", "Kent adı geçmedi", "aceleci"],
  ["aile metninde", "Ali Rıza Efendi ile Zübeyde Hanım’ın adlarını ayırdı", "Mustafa’nın çocukluk düzenini not etti.", "Kişi adları, duygusal sıfatlardan önce gelir.", "düzenli", "Aile adları önemsizdir", "Yalnız lakap vardı", "dağınık"],
  ["okul belgesinde", "Şemsi Efendi Mektebi’ni bir öğrenim basamağı olarak işaretledi", "Beğeni cümlesini ayrıca yazdı.", "Okul adı bilgidir, ‘en iyi okul’ yorumdur.", "ayırt edici", "Her okul cümlesi yorumdur", "Okul adı silinmişti", "karışık"],
  ["kent tasvirinde", "Selanik’in liman ve çarşı düzenini betimledi", "‘Çok güzeldi’ cümlesini yoruma ayırdı.", "Betimleme ne görüldüğünü, yorum ne düşünüldüğünü söyler.", "gözlemci", "Betimleme duygunun adıdır", "Kent anlatılmadı", "abartılı"],
  ["dil notunda", "o yıllarda birden çok dilin konuşulduğunu metinden çıkardı", "Bunu üstünlük iddiasına çevirmedi.", "Çok dillilik bir ortam bilgisidir.", "ölçülü", "Tek dil vardı", "Dil hiç anılmadı", "küçümseyici"],
  ["rüştiye paragrafında", "askeri öğrenimin disiplinini örnekle anlattı", "‘Kahraman doğdu’ cümlesini kanıtsız bırakmadı.", "Disiplin bir öğrenim bilgisidir, kahramanlık yargısı ayrıca gerekçe ister.", "gerekçeli", "Disiplin gereksizdir", "Okul yoktu", "kesinleyici"],
  ["Manastır defterinde", "okuduğu eserlerin adını, duyduğu hayranlığı ayrı tuttu", "Vatan sözünü metindeki cümleye bağladı.", "Eser adı bilgidir; hayranlık okurun duygusudur.", "seçici", "Hayranlık da belgedir", "Kitap adı yoktu", "ezberci"],
  ["okuma saatinde", "Namık Kemal’in vatan kavramını metindeki bağlamıyla açıkladı", "Kendi ‘bence’sini sona yazdı.", "Fikir, kimin sözü olduğu belli olunca anlaşılır.", "bağlamcı", "Her vatan cümlesi Atatürk’ündür", "Yazar adı silindi", "karıştıran"],
  ["Harp Okulu satırında", "İstanbul’daki öğrenim yıllarını sırayla dizdi", "Sonuca atlamadan bitirdi.", "Yaşam öyküsü tarih sırası bozulunca karışır.", "sıralı", "Sıra önemsizdir", "Kent değişmedi", "dağınık"],
  ["akademi belgesinde", "1905’te kurmay çıkışını bilgi diye yazdı", "Övgüyü ikinci paragrafa aldı.", "Yıl, bilginin dayanağıdır.", "titiz", "Yıl olmadan da aynı kesinlik vardır", "Tarih yoktu", "acele"],
  ["Şam mektubunda", "görev yerini, duyduğu sıkıntıdan ayırdı", "Sıkıntıyı yorum kutusuyla gösterdi.", "Görev yeri bilgidir, sıkıntı kişisel okumadır.", "ayırıcı", "Her mektup emirdir", "Kent adı yoktu", "abartan"],
  ["gazete küpüründe", "haber cümlesi ile başyazı cümlesini iki renk kalemle ayırdı", "Başyazıyı bilgi sanmadı.", "Haber olanı, savunanı aynı kefeye koymaz.", "eleştirel", "Başyazı da haberdir", "Gazete okunmadı", "kolay inanan"],
  ["fotoğraf altı yazısında", "üniformadaki ayrıntıyı betimledi", "‘Cesur bakıyor’ cümlesini yoruma bıraktı.", "Görülen şey betimlenir, karakter yorumlanır.", "gözlemci", "Bakış da ölçüldür", "Fotoğraf yoktu", "hükmeden"],
  ["harita kenarında", "Selanik, Manastır ve İstanbul’u okla bağladı", "Yolculuğu duyguya değil yere bağladı.", "Yer adları öykünün iskeletidir.", "iz süren", "Kentler önemsizdir", "Harita boştu", "kopuk"],
  ["arkadaş anısında", "tartışılan kitabın adını yazdı", "Kimin haklı çıktığını kanıtsız bitirmedi.", "Anı, tanık ile anlatıcının yargısını ayırır.", "şüpheci", "Anı belgedir, ayrılmaz", "Kitap adı yoktu", "taraf tutan"],
  ["sözlük çalışmasında", "‘hürriyet’ sözcüğünün metindeki anlamını cümleden çıkardı", "Bugünkü kullanımı paranteze aldı.", "Sözcük, geçtiği cümleyle anlamlanır.", "dikkatli", "Sözcük her çağda aynıdır", "Cümle yoktu", "ezberci"],
  ["kronoloji şeridinde", "doğum, okul ve görev yıllarını karıştırmadan dizdi", "Boş yılı uydurmadı.", "Bilgi yoksa boşluk da dürüst bir bilgidir.", "dürüst", "Boş yıl tahminle doldurulur", "Yıl hiç yoktu", "uyduran"],
  ["alıntı defterinde", "tırnak içindeki sözün sahibini yazdı", "Kendi cümlesini tırnaksız bıraktı.", "Alıntı ile özgün cümle karışırsa metin sahipsiz kalır.", "özenli", "Tırnak süstür", "Sahip adı yoktu", "özensiz"],
  ["müze etiketinde", "kısa cümleyle nesnenin ne olduğunu yazdı", "Beğeni cümlesini etiket dışı tuttu.", "Etiket tanıtır, övmez.", "sade", "Etiket şiir olmalıdır", "Nesne adsızdı", "süslü"],
  ["sınıf sunumunda", "üç bilgi ve bir yorum slaytını ayırdı", "Yorumun altına gerekçe yazdı.", "Gerekçesiz övgü, bilgi gibi dolaşmamalıdır.", "gerekçeli", "Övgü gerekçe istemez", "Slayt boştu", "boş öven"],
  ["karşılaştırma yazısında", "iki kaynağın aynı yılı farklı anlatmasını yan yana koydu", "Hangisine güveneceğini kaynağın türüne bağladı.", "Çelişen kaynak, okuru durdurur.", "karşılaştırmacı", "İlk okunan kaynak doğrudur", "Tek kaynak vardı", "kolay ikna"],
  ["başlık denemesinde", "metnin konusunu başlığa, yargısını alt başlığa yazdı", "Başlık vaat ettiğini karşıladı.", "Başlık, metnin kapısıdır.", "tutarlı", "Başlık sürpriz için yanıltır", "Başlık yoktu", "aldatıcı"],
  ["paragraf silmede", "aynı bilgiyi üçüncü kez söyleyen cümleyi çıkardı", "Yeni bilgi kalan cümlede durdu.", "Kısa anlatım, eksiltmek değil tekrarını kesmektir.", "seçici", "Uzun metin her zaman iyidir", "Cümle eklenmedi", "tekrarlayan"],
  ["soru zarfında", "metne sorulabilecek üç soruyu yazdı", "Cevabı metinde olmayan soruyu işaretledi.", "İyi soru, metnin taşıyabileceğinden fazlasını istemez.", "ölçülü", "Her soru metinde cevaplıdır", "Soru sorulmadı", "zorlayan"],
  ["kenar notunda", "bilmediği sözcüğü daire içine alıp sonra baktı", "Okumayı yarıda bırakmadı.", "Bilinmeyen sözcük, bütün metni çöpe atma nedeni değildir.", "sebatkâr", "Bir sözcük bütün metni iptal eder", "Sözcük yoktu", "bırakan"],
  ["sesli okumada", "noktada durup virgülde nefes aldı", "Anlam, durakla açıldı.", "Sesli okuma, noktalama işaretini yok sayarsa anlam kayar.", "dikkatli", "Noktalama süs olduğu için atlanır", "Nokta yoktu", "tek nefeste"],
  ["özet kartında", "beş cümleyi iki cümleye indirdi", "Tarih ve yer durdu, süs gitti.", "Özet, iskeleti bırakır.", "özetleyen", "Özet yeni olay ekler", "İskelet silindi", "süsleyen"],
  ["afiş cümlesinde", "iddiasını tek fiille yazdı", "Kanıtı alt satıra koydu.", "Afiş bağırır ama kanıtı saklamaz.", "açık", "Afiş kanıtsız daha etkilidir", "Fiil yoktu", "bağıran"],
  ["grup okumasında", "arkadaşının cümlesini bitirmeden sözünü kesmedi", "Sonra kendi gerekçesini söyledi.", "Tartışma, dinlenmeden hüküm değildir.", "dinleyen", "Hızlı konuşan haklıdır", "Grup dağılmıştı", "kesen"],
  ["kaynakça satırında", "kitabın adını ve yılını yazdı", "‘İnternetten gördüm’ü kaynak saymadı.", "Kaynağı belirsiz bilgi, bilgi gibi dolaşmamalıdır.", "sorumlu", "Her ekran kaynaktır", "Yıl yazılmadı", "kayıtsız"],
  ["harf çalışmasında", "eski metindeki sözcüğü bugünkü yazıma çevirirken anlamı korudu", "Süsleme eklemedi.", "Aktarma, anlamı değiştirme izni vermez.", "sadık", "Aktarma yeni fikir ekler", "Metin bugündü", "değiştiren"],
  ["duygu cümlesinde", "metnin kendisine umut verdiğini ayrı paragraf yaptı", "Umut ile olayı karıştırmadı.", "Okurun duygusu metnin olayı değildir.", "dürüst", "Duygu da tarihî olaydır", "Olay yazılmadı", "karıştıran"],
  ["kapanışta", "öğrendiği bir bilgiyi ve değişen bir yargısını yazdı", "İkisini aynı cümleye sıkıştırmadı.", "Öğrenme, bilginin ve yargının ayrı büyüdüğünü görmektir.", "bilinçli", "Yargı hiç değişmez", "Kapanış boştu", "kapalı"],
  ["yıl sonu kartında", "en çok karıştırdığı bilgi-yorum çiftini örnekledi", "Bir daha ayırmak için sorusunu yazdı.", "Hata, adlandırılırsa tekrar azalır.", "gelişen", "Hata gizlenir", "Örnek yoktu", "gizleyen"],
])

function fillBank(base, extra) {
  return [...base, ...extra]
}

const duygu = themed([
  ["sözü kesilince", "cümlesini bitiremeden sustu", "Yüzü kızardı ama bağırmadı.", "Sözün kesilmesi kızgınlık doğurabilir.", "kızgınlığını tutan", "Sevinmişti", "Alkışlandı", "neşeli"],
  ["ödevi beğenilmeyince", "öğretmenin notunu yeniden okudu", "Ağlamak yerine eksik yeri düzeltti.", "Kırılmak, düzeltmeyi engellemek zorunda değildir.", "onarıcı", "Defteri yırttı", "Not yoktu", "yıkıcı"],
  ["takıma seçilmeyince", "kenarda beklerken ısındı", "Sonradan çağrılınca hazırdı.", "Hayal kırıklığı çalışmayı sürdürebilir.", "dirençli", "Sahayı terk etti", "Takım yoktu", "küskün"],
  ["arkadaşı taşınınca", "adresini deftere yazdı", "Vedalaşırken teşekkür etti.", "Ayrılık hem üzüntü hem minnet taşıyabilir.", "minnettar", "Sevindi ve unuttu", "Adres uyduruldu", "ilgisiz"],
  ["sahnede şaşırınca", "cümleyi baştan aldı", "Seyirci bekledi.", "Utanç, yeniden denemeyi yasaklamaz.", "cesur", "Sahneyi terk etti", "Seyirci yoktu", "kaçan"],
  ["hediye yanlış olunca", "arkadaşının sevdiği rengi sordu", "Ertesi gün küçük bir not ekledi.", "Mahcup olmak, özürü büyütür.", "özür dileyen", "Hediyeyi geri istedi", "Not yazılmadı", "inatçı"],
  ["yağmur pikniği bozunca", "oyunu salona taşıdı", "Kimse suçu havaya atıp kavga etmedi.", "Plan bozulunca yeni yol seçilebilir.", "esnek", "Eve küskün döndü", "Salon kapalıydı", "katı"],
  ["kardeşi övülünce", "önce içi burkuldu, sonra alkışladı", "Kendi de çalışacağını söyledi.", "Kıskançlık adlandırılırsa alkışa dönebilir.", "dürüst", "Alkışlamayı reddetti", "Övgü yoktu", "kıskanç"],
  ["sınavdan düşük alınca", "yanlışları tek tek daire içine aldı", "Ertesi gün aynı tip soruyu çözdü.", "Üzüntü, çalışma planına dönüşebilir.", "planlı", "Kâğıdı buruşturdu", "Yanlış bakılmadı", "çaresiz"],
  ["yeni sınıfta", "ilk gün yanındakiyle kalemini paylaştı", "Öğle yemeğinde yalnız kalmadı.", "Çekingenlik, küçük bir adımla azalır.", "cesaretlenen", "Kimseyle konuşmadı", "Kalem paylaşılmadı", "kapalı"],
])

const WHEN = ["pazartesi sabahı", "salı teneffüsünde", "çarşamba öğleden sonra", "perşembe kulübünde", "cuma toplantısında", "ertesi hafta", "proje gününde", "okuma saatinde", "grup çalışmasında", "ev ödevinde", "sınıf panosunda", "kütüphane sırası", "bahçe bankında", "yemekhanede", "serviste", "atölyede", "müzede", "okul radyosunda", "duyuru köşesinde", "etkinlik haftasında", "sabah nöbetinde", "son derste", "ikinci teneffüste", "veli toplantısında", "kulüp defterinde", "sınıf meclisinde", "saha kenarında", "koridorda", "laboratuvarda", "yazı tahtasında", "okul bahçesinde", "akşam tekrarında", "hafta başında", "dönem ortasında"]
const CLOSER = ["Bunu bir cümleyle defterine yazdı.", "Sonra aynı olayı kendi sözcüğüyle anlattı.", "Arkadaşına gerekçesini de söyledi.", "Yanına küçük bir örnek ekledi.", "Kararını yüksek sesle değil, cümleyle kurdu."]

function repeatTheme(seed, count) {
  const out = []
  for (let i = 0; i < count; i += 1) {
    const item = seed[i % seed.length]
    const name = NAMES[i % NAMES.length]
    const when = WHEN[i % WHEN.length]
    const hook = `${name}, ${when} ${item[0]}`
    const passage = `${name} ${when} ${item[0]} ${item[1]}. ${item[2]} ${CLOSER[i % CLOSER.length]}`
    out.push([hook, passage, item[3], item[2], item[4], item[5], item[6], item[7]])
  }
  return out
}

const duyguRows = repeatTheme([
  ["sözü kesilince", "cümlesini bitiremeden sustu", "Yüzü kızardı ama bağırmadı.", "Sözün kesilmesi kızgınlık doğurabilir.", "kızgınlığını tutan", "Sevinmişti", "Alkışlandı", "neşeli"],
  ["ödevi geri gelince", "notun gerekçesini okudu", "Eksik paragrafı yeniden yazdı.", "Kırılmak düzeltmeyi engellemez.", "onarıcı", "Defteri yırttı", "Not hiç yoktu", "yıkıcı"],
  ["takım listesinde adı olmayınca", "kenarda ısındı", "Çağrılınca hazırdı.", "Hayal kırıklığı çalışmayı sürdürebilir.", "dirençli", "Sahayı terk etti", "Liste asılı değildi", "küskün"],
  ["arkadaşı taşınınca", "yeni adresini deftere yazdı", "Vedada teşekkür etti.", "Ayrılık üzüntüyle minneti bir arada taşıyabilir.", "minnettar", "Hemen unuttu", "Adres uyduruldu", "ilgisiz"],
  ["sahnede duraksayınca", "cümleyi baştan aldı", "Seyirci yerinde bekledi.", "Utanç yeniden denemeyi yasaklamaz.", "yeniden deneyen", "Sahneyi bıraktı", "Seyirci yoktu", "kaçan"],
  ["yanlış hediye verince", "arkadaşının sevdiği rengi sordu", "Küçük bir not ekledi.", "Mahcubiyet özürü büyütür.", "özür dileyen", "Hediyeyi geri istedi", "Not yazılmadı", "inatçı"],
  ["piknik yağmurda kalınca", "oyunu içeri taşıdı", "Hava suçlanıp kavga edilmedi.", "Bozulan plan yeni yol seçtirebilir.", "esnek", "Eve küskün döndü", "İçeride yer yoktu", "katı"],
  ["kardeşi övülünce", "önce sustu sonra alkışladı", "Kendi çalışacağını söyledi.", "Kıskançlık adlandırılırsa paylaşmaya dönebilir.", "adil sevinen", "Alkışı kesti", "Övgü yoktu", "kıskanç"],
], 29, (i) => `Bu ${i + 1}. duygu kaydında beden ile karar ayrı yazıldı.`)

const gelenek = repeatTheme([
  ["bayram sabahı", "büyüklerin elini öptü", "Şeker ikramı sırayla gitti.", "Gelenek, selamın ve sıranın birlikte yaşamasıdır.", "saygılı", "Bayram yalnız tatildir", "El öpülmedi", "aceleci"],
  ["düğün avlusunda", "halayın adımını büyükten öğrendi", "Müzik susunca yer açıldı.", "Oyun, büyüğün gösterdiği ölçüyle öğrenilir.", "öğrenen", "Adım uydurulmaz", "Müzik yoktu", "alıkoyan"],
  ["sofra başında", "yemeğe başlarken suyu paylaştı", "Kap kapanmadan herkes doydu.", "Sofra, paylaşma yeridir.", "paylaşımcı", "İlk uzanan bitirir", "Sofra kurulmadı", "acele"],
  ["köy odasında", "misafire terlik uzattı", "Ayakkabı kapıda kaldı.", "Konuk ağırlamak bir düzendir.", "ev sahibi", "Misafir kendi bilir", "Kapı kapalıydı", "ilgisiz"],
  ["hidirellezde", "dileği kâğıda yazıp ağaca değil deftere astı", "Çevreyi kirletmedi.", "Gelenek, doğaya zarar vermeden de yaşar.", "özenli", "Kâğıt yere atılır", "Dilek yoktu", "özensiz"],
  ["aşure dağıtırken", "komşunun kapısını çaldı", "Kâse boş dönmedi.", "Tatlı, ilişkiyi hatırlatır.", "hatırlayan", "Aşure yalnız evde yenir", "Kapı çalınmadı", "unutkan"],
  ["cuma yer sofrasında", "yaşıtına yer açtı", "Konuşma sırası büyüğe bırakıldı.", "Bir arada olmak söz hakkını da böler.", "yer açan", "Küçük konuşamaz", "Yer yoktu", "dışlayan"],
], 30, (i) => `Kayıt ${i + 1}’de gelenek, bugünün nezaketiyle yan yana durdu.`)

const iletisim = repeatTheme([
  ["mesajlaşırken", "büyük harfle yazmayı bıraktı", "Karşı tarafın cümlesini tekrar edip anladığını gösterdi.", "Bağıran yazı, dinlemeyi kapatır.", "ölçülü", "Büyük harf daha samimidir", "Mesaj gitmedi", "bağıran"],
  ["grup konuşmasında", "sözü bitmeyene girmedi", "Kendi örneğini sonra verdi.", "Dinlemek, cevabı hazır beklememektir.", "dinleyen", "Hızlı olan haklıdır", "Grup susuyordu", "kesen"],
  ["ekranda", "yanlış anlaşılan espriyi sildi", "Yerine açık cümle yazdı.", "Espiri zarar veriyorsa mizah bitmelidir.", "onaran", "Espri silinmez", "Ekran kapalıydı", "ısrarcı"],
  ["yüz yüze", "telefonu çevirip masaya koydu", "Gözünü konuşana verdi.", "Ekran, yüzün yerini tutmaz.", "mevcut", "Telefon eldeyken de dinlenir", "Telefon yoktu", "dağınık"],
  ["tartışmada", "‘sen hep’ demeden olayı anlattı", "Karşı taraf da bir cümle söyledi.", "Suçlayan genelleme konuşmayı kilitler.", "açık", "Genelleme ikna eder", "Olay anlatılmadı", "suçlayan"],
], 30, (i) => `İletişim kaydı ${i + 1} sınırın nezaketle çizildiğini gösterir.`)

const saglik = repeatTheme([
  ["etiketi okurken", "şeker miktarını porsiyonla çarptı", "Reklam cümlesini ayrıca işaretledi.", "Sağlık metninde sayı, sloganın önündedir.", "sorgulayan", "Reklam da kanıttır", "Etiket yoktu", "inanan"],
  ["uyku saatini", "ekranı bir saat önce kapattı", "Sabah daha kolay uyandı.", "Uyku, ertelenen bir ödev değildir.", "düzenli", "Geç uyumak verimlidir", "Ekran açık kaldı", "dağınık"],
  ["su içerken", "gün boyu bardağı masada tuttu", "Mola ile birlikte içti.", "Susamak, hatırlatıcıyı beklemek zorunda değildir.", "alışkanlık kuran", "Su yalnız sporla içilir", "Bardak yoktu", "unutan"],
  ["yürüyüşte", "nefes nefese kalmadan tempo seçti", "Dönüşte esnedi.", "Sağlık iddiası, bedenin sınırını da yazar.", "ölçülü", "Ağrı olursa tempo artar", "Yürüyüş yapılmadı", "zorlayan"],
], 27, (i) => `Sağlık notu ${i + 1} iddiayı kanıttan ayırdı.`)

const yilT = themed([
  ["okuma kartında", "ana fikri bir cümleye, ayrıntıyı iki örneğe ayırdı", "Başlık metinle uyuştu.", "Okuma, yargı ile ayrıntıyı ayrı raflara koyar.", "derli toplu", "Ayrıntı ana fikirdir", "Başlık boştu", "karışık"],
  ["sözlük köşesinde", "bilmediği sözcüğü cümledeki anlamıyla yazdı", "Sözlük anlamını paranteze aldı.", "Bağlam, sözlüğü tamamlar.", "bağlamcı", "İlk anlam her zaman doğrudur", "Cümle yoktu", "ezberci"],
  ["tartışma notunda", "iddia ile kanıtı alt alta yazdı", "Kanıtsız cümleyi sildi.", "Kanıtsız iddia, bağırarak doğru olmaz.", "kanıt arayan", "İddia yeterlidir", "Kanıt vardı ama silinmedi", "inanan"],
  ["özet satırında", "tekrarlayan cümleyi çıkardı", "Yer ve kişi kaldı.", "Kısa yazmak, bilgiyi silmek değildir.", "seçici", "Özet yeni olay ekler", "Özet uzadı", "süsleyen"],
  ["dinleme gününde", "arkadaşının cümlesini kendi sözcükleriyle geri söyledi", "Yanlış anlamayı düzeltti.", "Geri söylemek, dinlendiğini gösterir.", "dinleyen", "Cümle tekrarlanmaz", "Kimse konuşmadı", "kopuk"],
])

const dil = themed([
  ["sözlükte", "‘yürek’ ile ‘kalp’in yakın anlamını cümlede denedi", "Biri şiirde, biri bilimde daha yerinde durdu.", "Yakın anlam, her cümlede yer değiştiremez.", "seçici", "Yakın anlamlılar özdeştir", "Cümle kurulmadı", "gelişigüzel"],
  ["defterde", "‘kara’ sözcüğünün renk ve sıkıntı anlamını ayırdı", "Hangi anlamda olduğunu cümle belirledi.", "Çok anlamlı sözcük bağlam ister.", "bağlamcı", "Kara yalnız renktir", "İkinci anlam yoktu", "tek anlamlı"],
  ["atasözü kartında", "‘Damlaya damlaya göl olur’u biriktirme işine bağladı", "Gerçek göl aramadı.", "Atasözü öğüt taşır, hava raporu değildir.", "yorumlayan", "Atasözü bilimsel kanıttır", "Su birikmedi", "somutçu"],
  ["deyim cümlesinde", "‘kulaktan dolma’yı dedikodu bilgisi diye açıkladı", "Kulağın yapısını anlatmadı.", "Deyim, sözcüklerin tek tek toplamı değildir.", "ayırıcı", "Deyim organ bilgisidir", "Deyim geçmedi", "parçalayan"],
  ["eş anlam listesinde", "‘güzel’ yerine metne ‘özgün’ yazınca anlam kaydı", "Düzeltip geri aldı.", "Eş anlam sanılan sözcük metni değiştirebilir.", "dikkatli", "Her övgü sözcüğü aynıdır", "Metin değişmedi", "özensiz"],
  ["zıt anlam oyununda", "‘cıvıl cıvıl’ın karşısına sessiz salonu koydu", "Yer, zıtlığı görünür kıldı.", "Zıt anlam, aynı bağlamda düşünülür.", "karşılaştırmacı", "Zıt anlam rastgele seçilir", "Salon yoktu", "gelişigüzel"],
  ["şiir dizesinde", "‘gönül’ sözcüğünü duygu yeri olarak okudu", "Anatomi aramadı.", "Edebî sözcük gerçek organ olmayabilir.", "edebî okuyan", "Gönül bir kemiktir", "Dize yoktu", "somut"],
  ["haber başlığında", "abartılı sıfatı çizip olayı bıraktı", "Kim, nerede, ne oldu durdu.", "Sıfat bağırması bilgiyi örtmesin.", "ayıklayan", "Sıfat da haberdir", "Olay silindi", "abartan"],
  ["günlükte", "aynı duyguyu üç farklı sözcükle denedi", "En ölçülü olanı seçti.", "Söz dağarcığı, aynı duyguya ince ayrım verir.", "ince ayar", "Tek sözcük yeter", "Duygu yazılmadı", "tekrarlayan"],
  ["mektupta", "büyüklerine ‘sen’ yerine uygun hitabı seçti", "İstek cümlesi nezaketle bitti.", "Hitap, ilişkinin uzaklığını gösterir.", "nezaketli", "Hitap süstür", "Mektup gönderilmedi", "senli benli"],
])

const bagimsiz = repeatTheme([
  ["belgede", "tarih ile şairin dileğini ayırdı", "Dilek yoruma yazıldı.", "Belge olan ile umulan aynı cümlede yaşamaz.", "ayırıcı", "Dilek de tarihtir", "Tarih yoktu", "karıştıran"],
  ["haritada", "işgal edilen yerleri işaretledi", "Kurtuluşu o yerin adına bağladı.", "Yer, mücadelenin sahnesidir.", "iz süren", "Yer adı önemsizdir", "Harita boştu", "kopuk"],
  ["mektupta", "yardım isteyen cümleyi gerekçesiyle okudu", "Emir gibi okumadı.", "İstek, gerekçesi bilinince anlaşılır.", "gerekçeli", "Her mektup emirdir", "Gerekçe yoktu", "emir sanan"],
], 34, (i) => `Bağımsızlık metni ${i + 1} amaç ile engeli ayırdı.`)

const dunyalar = repeatTheme([
  ["iki masalı", "aynı olayın iki bakışını yan yana koydu", "Kimin ne bildiğini işaretledi.", "Bakış açısı, görüleni değiştirir.", "karşılaştırmacı", "Bakışlar aynıdır", "İkinci masal yoktu", "tek yanlı"],
  ["gezi yazısında", "yabancı kenti kendi sokağıyla kıyasladı", "Benzeyen ile ayrılanı yazdı.", "Karşılaştırma, yalnızca övgü değildir.", "ölçülü", "Yabancı olan eksiktir", "Sokak anlatılmadı", "küçümseyen"],
], 29, (i) => `Karşılaştırma ${i + 1} merak sorusuyla bitti.`)

const bilim = repeatTheme([
  ["deney notunda", "ölçülen sayıyı birimiyle yazdı", "‘Çok oldu’ cümlesini sildi.", "Bilim cümlesi sayı ve birim taşır.", "ölçen", "Birim gereksizdir", "Sayı yoktu", "tahminci"],
  ["iddia paragrafında", "kanıtı alt satıra aldı", "Sınırını da yazdı.", "İddia, sınırını söylemezse şişer.", "sınırını bilen", "Sınır zayıflıktır", "Kanıt silindi", "abartan"],
], 29, (i) => `Bilim metni ${i + 1} savı kanıttan ayırdı.`)

const lider = repeatTheme([
  ["takımda", "hatayı birlikte üstlendi", "Çözümü tek başına sahiplenmedi.", "Liderlik, suçu başkasına atmaktır diye okunmaz.", "sorumlu", "Lider hiç hata yapmaz", "Hata gizlendi", "suçlayan"],
  ["toplantıda", "konuşmayan arkadaşına söz verdi", "Kararını gerekçeyle kapattı.", "Söz vermek, liderliği paylaşmaktır.", "çoğulcu", "Tek kişi konuşur", "Toplantı olmadı", "susturan"],
], 27, (i) => `Liderlik örneği ${i + 1} eylemi unvandan ayırdı.`)

const hayat = repeatTheme([
  ["hedef defterinde", "engeli ve bir sonraki adımı yazdı", "‘Yapamam’ı ‘henüz’e çevirdi.", "Gelişim, engeli gizlemeyip adım seçmektir.", "ısrarlı", "Engel varsa hedef silinir", "Adım yazılmadı", "bırakan"],
  ["geri bildirimde", "eleştirinin hangi cümleye geldiğini sordu", "Savunmadan not aldı.", "Gerekçe, eleştiriyi kullanılabilir kılar.", "dinleyen", "Eleştiri saldırıdır", "Not tutulmadı", "kapanan"],
], 25, (i) => `Gelişim kaydı ${i + 1} amaç ile engeli ayırdı.`)

const hilal = repeatTheme([
  ["tanık metninde", "görenin adını yazdı", "Duymuş olanın cümlesini ayırdı.", "Tanık ile aktaran aynı kişi değildir.", "kaynak soran", "Duymak da görmektir", "Ad yoktu", "karıştıran"],
  ["yorum satırında", "bilgiyi sol, yargıyı sağ sütuna aldı", "Sağ sütuna gerekçe istedi.", "Yorum, bilgiden ayrı rafta durur.", "ayırıcı", "Yorum da belgedir", "Sütun yoktu", "birleştiren"],
], 34, (i) => `Millî mücadele okuması ${i + 1} tanık ile yorumu ayırdı.`)

const onarma = repeatTheme([
  ["kırılan sözde", "özrü olayın adıyla söyledi", "Bir daha ne yapacağını ekledi.", "Özür, olayın adını koyunca tam olur.", "onaran", "Özürsüz geçilir", "Olay adsızdı", "geçiştiren"],
  ["ekranda", "yazımın sertliğini fark edip cümleyi yumuşattı", "Karşı tarafın cevabını bekledi.", "Dijital üslup da üsluptur.", "özenli", "Ekranda sertlik normaldir", "Cümle silinmedi", "sert"],
], 29, (i) => `İletişim onarımı ${i + 1} sınırını nazikçe çizdi.`)

const sanat = repeatTheme([
  ["çini tabağa bakarken", "renkleri ve deseni tarif etti", "Beğenisini ikinci cümleye aldı.", "Sanat okuması önce ne görüldüğünü söyler.", "gözlemci", "Beğeni tarifin kendisidir", "Desen yoktu", "yalnız öven"],
  ["türkü dinlerken", "ayraç içindeki yöreyi not etti", "Ezgiyi ‘güzel’ diye bırakmadı.", "Terim, eserin nereden geldiğini söyler.", "terim kullanan", "Yöre önemsizdir", "Türkü adsızdı", "genelleyen"],
], 30, (i) => `Sanat notu ${i + 1} terimi süs diye atlamadı.`)

const okuma7 = repeatTheme([
  ["kitap seçerken", "arkadaşının önerisini gerekçesiyle dinledi", "İlk sayfayı kendisi okudu.", "Seçmek, başkasının zevkini kopyalamak değildir.", "seçen", "Çok satan her zaman uyur", "Sayfa açılmadı", "uyduran"],
  ["not alırken", "alıntıyı tırnakla, kendi cümlesini tırnaksız yazdı", "Sayfa numarasını düştü.", "Not, kimin sözü olduğunu belli eder.", "özenli", "Tırnak gerekmez", "Sayfa yoktu", "karıştıran"],
], 29, (i) => `Okuma kaydı ${i + 1} seçme gerekçesini yazdı.`)

const hak = repeatTheme([
  ["hak metninde", "hak ile görevi iki sütuna ayırdı", "Birinin ötekini silmediğini gördü.", "Hak, sorumluluğu yok saymaz.", "dengeli", "Hak varsa görev yoktur", "Sütun boştu", "tek yanlı"],
  ["tartışmada", "karşı görüşün en güçlü cümlesini önce yazdı", "Sonra kendi gerekçesini ekledi.", "Tartışma, karşıyı silerek kazanılmaz.", "adil", "Karşı görüş yazılmaz", "Gerekçe yoktu", "susturan"],
], 27, (i) => `Hak tartışması ${i + 1} görevi de sordu.`)

const kitap8 = repeatTheme([
  ["kitabın serüveninde", "kâğıda geçmeden önceki anlatıyı düşündü", "Yazılı hâlin kaybolmayan kopya olduğunu gördü.", "Yazı, sözü zamana bırakır.", "meraklı", "Söz yazıdan önemsizdir", "Kitap açılmadı", "ilgisiz"],
  ["umut cümlesinde", "kahramanın gerekçesini işaretledi", "Mutlu sonu kanıtsız eklemedi.", "Umut, gerekçesiz bir süs değildir.", "gerekçeli", "Mutlu son şarttır", "Gerekçe silindi", "süsleyen"],
], 20, (i) => `Okuma kültürü ${i + 1} kitabın yolunu sordu.`)

const milli = repeatTheme([
  ["belgede", "tarihi şiirin dileğinden ayırdı", "İkisini aynı puntoda yazmadı.", "Belge ile şiir ayrı iş görür.", "ayırıcı", "Şiir de tutanaktır", "Tarih yoktu", "karıştıran"],
  ["eğitim vurgusunda", "okumanın bir hak gibi anlatıldığını gördü", "Emir kipini gerekçeyle okudu.", "Öğüt, gerekçesiyle ikna eder.", "gerekçeli", "Emir gerekçe istemez", "Öğüt yoktu", "ezberci"],
], 24, (i) => `Millî mücadele metni ${i + 1} belge ile duyguyu ayırdı.`)

const erdem = repeatTheme([
  ["sırada", "düşen kalemi sahibine verdi", "Kimse görmese de yaptı.", "Erdem, alkış varken değil iş varken görünür.", "tutarlı", "Gören yoksa gerek yoktur", "Kalem yerde kaldı", "gösterişçi"],
  ["ölçü sorusunda", "haklı olduğu yerde sesini alçaktı", "Karşı tarafın sözünü kesti.", "Haklı olmak sesi yükseltmez.", "ölçülü", "Haklı olan bağırır", "Ses yükseldi", "sert"],
], 20, (i) => `Erdem örneği ${i + 1} eylemi sözden ayırdı.`)

const kultur = repeatTheme([
  ["destanda", "olağanüstü öğeyi gerçek olaydan ayırdı", "Kahramanlığın hangi sınavda görüldüğünü sordu.", "Destan, tarihi birebir tutanak değildir.", "ayırt eden", "Destandaki her olay tutanaktır", "Sınav yoktu", "inanan"],
  ["halk şiirinde", "koşmanın uyak düzenini işaretledi", "Duyguyu ölçüden sonra yazdı.", "Biçim, duygunun kabıdır.", "biçim gören", "Uyak süstür", "Dize yoktu", "yalnız duygusal"],
], 24, (i) => `Kültür metni ${i + 1} türün kuralını sordu.`)

const teknoloji = repeatTheme([
  ["merak deneyinde", "soruyu ölçülecek biçimde yazdı", "‘Acaba’yı bir değişkene bağladı.", "Merak, yöntem seçince araştırmaya döner.", "yöntemli", "Merak plansız da kanıttır", "Soru yoktu", "dağınık"],
  ["ekran haberinde", "iddianın kaynağını aradı", "Kaynaksız cümleyi paylaşmadı.", "Teknoloji haberi de kaynak ister.", "temkinli", "Çok paylaşılan doğrudur", "Kaynak vardı ama bakılmadı", "acele"],
], 20, (i) => `Bilim okuması ${i + 1} ölçüyü abartıdan ayırdı.`)

const duygular8 = repeatTheme([
  ["göstermede", "üzüntüsünü bağırarak değil örnekle anlattı", "Arkadaşı ne olduğunu anladı.", "Duygu, adlandırılınca görünür.", "açık", "Duygu gizlenmelidir", "Örnek yoktu", "kapalı"],
  ["dostlukta", "söz verdiği saatte geldi", "Gecikmenin gerekçesini uydurmadı.", "Dostluk, tutulan küçük sözlerde görünür.", "güvenilir", "Gecikmek dostluğu bozmaz", "Saat önemli değildi", "savruk"],
], 25, (i) => `Duygu metni ${i + 1} göstermeyi söylemekten ayırdı.`)

const doga = repeatTheme([
  ["gözlemde", "bulutun biçimini, duygusunu yazmadan tarif etti", "Saati kenara not etti.", "Gözlem, önce görüleni yazar.", "gözlemci", "Bulutun ruhu da veridir", "Saat yoktu", "hayal kuran"],
  ["merakta", "bilmediği kuşun adını uydurmadı", "Rehbere bakacağını yazdı.", "Bilmemek, uydurmaktan iyidir.", "dürüst", "Yakın ad yeter", "Rehber yasaktı", "uyduran"],
], 19, (i) => `Doğa paragrafı ${i + 1} ölçüyü merakın yanına koydu.`)

const spor = repeatTheme([
  ["iddia cümlesinde", "‘en sağlıklı spor’ yargısını kimin söylediğini sordu", "Kanıt yoksa yargıyı kısalttı.", "Sağlık iddiası kaynak ister.", "sorgulayan", "Reklam kanıttır", "Yargı silinmedi", "inanan"],
  ["kaynakta", "beslenme önerisinin yılını kontrol etti", "Eski bilgiyi yeni sanmadı.", "Kaynağın tarihi, önerinin ömrünü söyler.", "güncel arayan", "Eski öneri hep geçerlidir", "Yıl yoktu", "umursamaz"],
], 22, (i) => `Spor metni ${i + 1} iddiayı kaynağa bağladı.`)

const yil8t = themed([
  ["tür kartında", "şiir ile haberi karıştırmadan örneklendi", "Her birinin işini yazdı.", "Tür, metnin ne işe yaradığını söyler.", "ayırt eden", "Bütün metinler aynı işi görür", "Örnek yoktu", "karıştıran"],
  ["özette", "olayı tek cümlede bıraktı", "Yorumu ikinci cümleye aldı.", "Özet yorum eklemez.", "seçici", "Özet övgü ister", "Olay silindi", "süsleyen"],
  ["kaynakta", "alıntının sahibini yazdı", "Kendi cümlesini ayırdı.", "Sahipsiz alıntı bilgi gibi dolaşmamalıdır.", "özenli", "Sahip gerekmez", "Alıntı yoktu", "özensiz"],
  ["iddia satırında", "kanıtı alt alta koydu", "Kanıtsız sıfatı sildi.", "İddia kanıtla yürür.", "kanıt arayan", "Sıfat kanıttır", "Kanıt duruyordu", "abartan"],
  ["dinlemede", "duyduğunu kendi sözcüğüyle geri söyledi", "Yanlışını düzeltti.", "Dinlemek tekrar edince belli olur.", "dinleyen", "Tekrar gerekmez", "Kimse konuşmadı", "kopuk"],
])

const SKILL = "Metinde önce ne olduğu, sonra bunun hangi yargıya vardığı sorulur. Ayrıntı kanıttır; ana fikir o kanıtın sonucudur."

export function turkceLesson(grade, title, dayCount) {
  const key = `${grade}|${title}`
  const table = {
    "5|Oyun Dünyası": read("Oyun", SKILL, oyun),
    "5|Atatürk’ü Tanımak": read("Atatürk", SKILL, ataturk),
    "5|Duygularımı Tanıyorum": read("Duygu", SKILL, duyguRows),
    "5|Geleneklerimiz": read("Gelenek", SKILL, gelenek),
    "5|İletişim ve sosyal ilişkiler": read("İletişim", SKILL, iletisim),
    "5|Sağlıklı Yaşıyorum": read("Sağlık", SKILL, saglik),
    "5|Yıl sonu tekrarı": read("Okuma", SKILL, yilT),
    "6|Dilimizin Zenginliği": read("Dil", SKILL, fillBank(dil, repeatTheme(dil.map((r) => r.slice(1)), 15, (i) => `Sözcük denemesi ${i + 11} bağlamı değiştirdi.`).slice(0, 15))),
    "6|Bağımsızlık Yolu": read("Bağımsızlık", SKILL, bagimsiz),
    "6|Farklı Dünyalar": read("Karşılaştırma", SKILL, dunyalar),
    "6|İletişim ve sosyal ilişkiler": read("İletişim", SKILL, iletisim),
    "6|Bilim ve Teknoloji": read("Bilim", SKILL, bilim),
    "6|Lider ruhlar": read("Lider", SKILL, lider),
    "6|Yıl sonu tekrarı": read("Araç", SKILL, yilT),
    "7|Hayat Boyu Gelişim": read("Gelişim", SKILL, hayat),
    "7|Bir Hilal Uğruna": read("Hilal", SKILL, hilal),
    "7|İletişim ve sosyal ilişkiler": read("Onarım", SKILL, onarma),
    "7|Türk Sanatı": read("Sanat", SKILL, sanat),
    "7|Okuma Kültürü": read("Okuma", SKILL, okuma7),
    "7|Hak ve sorumluluklar": read("Hak", SKILL, hak),
    "7|Yıl sonu tekrarı": read("Soru", SKILL, yilT),
    "8|Okuma Kültürü": read("Kitap", SKILL, kitap8),
    "8|Millî Mücadele ve Atatürk": read("Belge", SKILL, milli),
    "8|Erdemler": read("Erdem", SKILL, erdem),
    "8|Millî Kültürümüz": read("Kültür", SKILL, kultur),
    "8|Bilim ve Teknoloji": read("Merak", SKILL, teknoloji),
    "8|Duygular": read("Duygu", SKILL, duygular8),
    "8|Doğa ve Evren": read("Gözlem", SKILL, doga),
    "8|Sağlık ve Spor": read("Kaynak", SKILL, spor),
    "8|Yıl sonu tekrarı": read("Tür", SKILL, yil8t),
  }
  const build = table[key]
  if (!build) throw new Error(`Türkçe eksik: ${key}`)
  return build(dayCount)
}
