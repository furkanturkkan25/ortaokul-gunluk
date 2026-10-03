# Sıra

Ortaokul için günlük ders. Beş, altı, yedi ve sekizinci sınıf her gün bir konuyu sırayla açar. Hesap e-posta ile kurulur; ilk girişte avatar kaydedilince ders başlar.

![Hesap açma](ekran/ana.png)

![Giriş](ekran/giris.png)

Canlı site: https://sira-gunluk.furkanturkkan25.workers.dev/

## Kurulum

```bash
cd ortaokul-gunluk
npm install
npm run dev
```

Geliştirme adresi Vite’ın yazdığı yerel porttur, çoğu zaman http://127.0.0.1:5173

Üretim derlemesi ve Worker yayını:

```bash
npm run build
npx wrangler deploy
```

## Nasıl kuruldu

Arayüz **React 19** ve **Vite 6** ile yazılıyor. Ders, puan, seri ve profil istemcide tutulup sunucuyla birleşiyor.

Sunucu bir **Cloudflare Worker**. Ortak oda bir **Durable Object** (`SiraStore`) ve içinde **SQLite**. Eski **KV** alanı yalnızca ilk tohum için duruyor. Statik dosyalar Worker’ın asset klasöründen (`dist`) geliyor; `/api/*` önce Worker’a düşüyor.

Hesaplar e-posta ile açılıyor. Eski isimle açılmış hesaplar kendi adlarıyla girmeye devam eder. Şifre düz metin olarak saklanmaz.
