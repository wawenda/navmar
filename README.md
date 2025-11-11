# Navmar Agency - Gemi Acenteliği Web Sitesi

Navmar Agency için Next.js 14 ve Tailwind CSS kullanılarak geliştirilmiş modern, responsive ve SEO uyumlu web sitesi.

## 🚀 Özellikler

- ⚡ **Next.js 14** - App Router ile modern React framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Tasarım** - Mobil öncelikli tasarım
- 🔍 **SEO Uyumlu** - Her sayfa için optimize edilmiş meta taglar
- 💼 **TypeScript** - Tip güvenli kod yapısı
- ✨ **Modern UI** - Lacivert (#001b44) ve Parlak Altın (#FFD700) renk şeması

## 📄 Sayfalar

- **Ana Sayfa** (`/`) - Hero section, hizmet tanıtımı ve CTA
- **Hizmetler** (`/hizmetler`) - Detaylı hizmet kartları
- **Limanlar** (`/limanlar`) - Operasyon yürütülen limanlar listesi
- **Hakkımızda** (`/hakkimizda`) - Şirket bilgileri, misyon, vizyon ve değerler
- **İletişim** (`/iletisim`) - İletişim formu ve bilgileri

## 🛠️ Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📦 Komutlar

- `npm run dev` - Geliştirme sunucusunu başlatır (localhost:3000)
- `npm run build` - Production için build oluşturur
- `npm run start` - Production sunucusunu başlatır
- `npm run lint` - ESLint ile kod kontrolü yapar

## 🎨 Renk Paleti

- **Primary (Lacivert)**: `#001b44`
- **Accent (Parlak Altın)**: `#FFD700`
- **Accent Hover**: `#FFC107`
- **Background**: `#ffffff`

## 📁 Proje Yapısı

```
├── app/
│   ├── layout.tsx          # Ana layout (Navbar + Footer)
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller
│   ├── hizmetler/
│   │   └── page.tsx        # Hizmetler sayfası
│   ├── limanlar/
│   │   └── page.tsx        # Limanlar sayfası
│   ├── hakkimizda/
│   │   └── page.tsx        # Hakkımızda sayfası
│   └── iletisim/
│       └── page.tsx        # İletişim sayfası
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── ContactForm.tsx     # İletişim formu
├── public/                 # Statik dosyalar
├── tailwind.config.ts      # Tailwind yapılandırması
└── package.json
```

## 🌐 Deployment

### Vercel (Önerilen)

1. Projeyi GitHub'a push edin
2. [Vercel](https://vercel.com)'de "New Project" oluşturun
3. Repository'yi seçin ve deploy edin

### Diğer Platformlar

- **Netlify**: `npm run build` ile oluşan `.next` klasörünü deploy edin
- **AWS / Azure / Google Cloud**: Node.js hosting servisleri kullanın

## 📝 Özelleştirme

### Renkleri Değiştirmek

`tailwind.config.ts` dosyasındaki renkleri düzenleyin:

```typescript
colors: {
  primary: "#001b44",  // Lacivert
  accent: "#FFD700",   // Parlak Altın
  "accent-hover": "#FFC107",
}
```

### İletişim Bilgilerini Güncellemek

`components/Footer.tsx` ve `app/iletisim/page.tsx` dosyalarındaki placeholder bilgileri gerçek bilgilerle değiştirin.

### Form Entegrasyonu

`components/ContactForm.tsx` dosyasındaki `handleSubmit` fonksiyonunu backend API'nize bağlayın.

## 📧 İletişim

Web sitesi hakkında sorularınız için:
- E-posta: info@navmaragency.com
- Tel: +90 (212) 555 0000

## 📄 Lisans

Bu proje Navmar Agency için özel olarak geliştirilmiştir.

---

**Geliştirme:** Next.js 14 + Tailwind CSS  
**Tasarım:** Modern, Responsive, SEO Uyumlu


