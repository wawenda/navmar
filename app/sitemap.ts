import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://navmaragency.com'
  const locales = ['tr', 'en', 'ru']
  const routes = ['', 'hizmetler', 'limanlar', 'hakkimizda', 'iletisim']
  
  const urls: MetadataRoute.Sitemap = []
  
  locales.forEach(locale => {
    routes.forEach(route => {
      const url = route === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${route}`
      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' || route === 'hizmetler' || route === 'limanlar' ? 'monthly' : 'yearly',
        priority: route === '' ? 1 : route === 'hizmetler' || route === 'limanlar' ? 0.8 : route === 'iletisim' ? 0.7 : 0.6,
        alternates: {
          languages: {
            tr: route === '' ? `${baseUrl}/tr` : `${baseUrl}/tr/${route}`,
            en: route === '' ? `${baseUrl}/en` : `${baseUrl}/en/${route}`,
            ru: route === '' ? `${baseUrl}/ru` : `${baseUrl}/ru/${route}`,
            'x-default': route === '' ? `${baseUrl}/tr` : `${baseUrl}/tr/${route}`,
          },
        },
      })
    })
  })
  
  return urls
}


