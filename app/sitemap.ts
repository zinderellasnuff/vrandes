import { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vrandes.travel'
  const currentDate = new Date().toISOString()

  const locales = i18n.locales
  const routes: MetadataRoute.Sitemap = []

  // Generate routes for each locale
  locales.forEach((locale) => {
    const langPrefix = `/${locale}`

    routes.push(
      {
        url: `${baseUrl}${langPrefix}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1.0,
        alternates: {
          languages: {
            es: `${baseUrl}/es`,
            en: `${baseUrl}/en`,
          },
        },
      },
      {
        url: `${baseUrl}${langPrefix}#tours`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}${langPrefix}#about`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}${langPrefix}#testimonials`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}${langPrefix}#gallery`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}${langPrefix}#contact`,
        lastModified: currentDate,
        changeFrequency: 'yearly',
        priority: 0.8,
      }
    )
  })

  // Add AI discovery files (language-agnostic)
  routes.push(
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  )

  return routes
}
