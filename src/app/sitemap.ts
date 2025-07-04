import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yuridev.vercel.app',
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 1, 
    },
    {
      url: 'https://yuridev.vercel.app/projects',
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.8, 
    },
  ]
}