import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', 
      allow: '/', 
    },
    sitemap: 'https://yuridev.vercel.app/sitemap.xml', 
  }
}