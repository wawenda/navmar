# Deployment Guide - Navmar Agency

Bu dokümanda projeyi farklı platformlara nasıl deploy edeceğiniz anlatılmaktadır.

## 🚀 Vercel (Önerilen)

Vercel, Next.js için en optimize edilmiş hosting çözümüdür ve en kolay deployment yöntemidir.

### Adımlar:

1. **GitHub/GitLab/Bitbucket'a Push Edin**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Vercel'e Giriş Yapın**
   - [vercel.com](https://vercel.com) adresine gidin
   - GitHub hesabınızla giriş yapın

3. **Yeni Proje Oluşturun**
   - "New Project" butonuna tıklayın
   - Repository'nizi seçin
   - "Deploy" butonuna tıklayın

4. **Otomatik Build ve Deploy**
   - Vercel otomatik olarak projenizi build edip deploy edecektir
   - Her git push işleminde otomatik deployment yapılır

### Environment Variables (Opsiyonel)

Vercel dashboard'dan environment variables ekleyebilirsiniz:
- `NEXT_PUBLIC_SITE_URL`: Production site URL'i

## 📦 Netlify

### Adımlar:

1. **Build Komutunu Ayarlayın**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **netlify.toml Oluşturun** (proje root'unda)
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   - Netlify dashboard'dan "New site from Git"
   - Repository'nizi seçin ve deploy edin

## 🐳 Docker

### Dockerfile Oluşturun:

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## ☁️ AWS / Azure / Google Cloud

### Genel Adımlar:

1. **Build Oluşturun**
   ```bash
   npm run build
   ```

2. **Production Sunucusu**
   ```bash
   npm run start
   ```

3. **Port Yapılandırması**
   - Default: `3000`
   - Environment variable ile değiştirilebilir: `PORT=8080`

### AWS Elastic Beanstalk:

```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "your-image-name",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": "3000"
    }
  ]
}
```

## 🔧 Production Checklist

Deployment öncesi kontrol listesi:

- [ ] Environment variables ayarlandı mı?
- [ ] Site URL'i `app/layout.tsx` metadata'da güncellendi mi?
- [ ] `sitemap.ts` ve `robots.txt` dosyalarında domain güncellendi mi?
- [ ] İletişim bilgileri gerçek bilgilerle değiştirildi mi?
- [ ] Google Analytics / tracking kodları eklendi mi? (opsiyonel)
- [ ] SSL sertifikası aktif mi?
- [ ] DNS ayarları yapıldı mı?

## 🌐 Domain Yapılandırması

### Vercel'de Custom Domain:

1. Vercel dashboard → Proje → Settings → Domains
2. Domain adınızı ekleyin
3. DNS kayıtlarını yapılandırın:
   - A Record: `76.76.21.21`
   - veya CNAME: `cname.vercel-dns.com`

### Netlify'da Custom Domain:

1. Netlify dashboard → Domain settings
2. "Add custom domain" butonuna tıklayın
3. DNS kayıtlarını güncelleyin

## 📊 Performance Optimization

Production ortamı için optimizasyon önerileri:

1. **Image Optimization**
   - Next.js Image component kullanın
   - WebP formatını destekleyin

2. **Caching**
   - CDN kullanın (Vercel otomatik sağlar)
   - Static assets için cache headers ayarlayın

3. **Monitoring**
   - Vercel Analytics kullanın
   - Google Analytics ekleyin
   - Error tracking (Sentry, etc.) entegre edin

## 🔒 Güvenlik

- [ ] HTTPS aktif olduğundan emin olun
- [ ] Security headers yapılandırın (`next.config.mjs`)
- [ ] Rate limiting ekleyin (iletişim formu için)
- [ ] CORS ayarlarını kontrol edin

## 📝 Güncellemeler

Projeyi güncellemek için:

```bash
git pull origin main
npm install
npm run build
```

Vercel/Netlify kullanıyorsanız, git push yapmanız yeterlidir.

---

**Sorularınız için:** info@navmaragency.com


