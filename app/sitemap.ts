import { MetadataRoute } from "next"
import { sanity } from "@/lib/sanity/client"
import { postsQuery, featuredProjectsQuery, wallpapersQuery } from "@/lib/sanity/queries"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const now = new Date().toISOString()
  try {
    const [posts, projects, wallpapers] = await Promise.all([
      sanity.fetch(postsQuery),
      sanity.fetch(featuredProjectsQuery),
      sanity.fetch(wallpapersQuery),
    ])
    const items: MetadataRoute.Sitemap = [
      { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
      { url: `${base}/services`, lastModified: now },
      { url: `${base}/wallpapers`, lastModified: now },
      { url: `${base}/portfolio`, lastModified: now },
      { url: `${base}/blog`, lastModified: now },
      { url: `${base}/about`, lastModified: now },
      { url: `${base}/contact`, lastModified: now },
      { url: `${base}/areas/noida`, lastModified: now },
      { url: `${base}/areas/greater-noida`, lastModified: now },
      { url: `${base}/areas/ghaziabad`, lastModified: now },
      ...(projects || []).map((p: any) => ({ url: `${base}/portfolio/${p.slug.current}`, lastModified: now })),
      ...(wallpapers || []).map((w: any) => ({ url: `${base}/wallpapers/${w.slug.current}`, lastModified: now })),
      ...(posts || []).map((p: any) => ({ url: `${base}/blog/${p.slug.current}`, lastModified: now })),
    ]
    return items
  } catch {
    return [
      { url: `${base}/`, lastModified: now },
      { url: `${base}/services`, lastModified: now },
      { url: `${base}/wallpapers`, lastModified: now },
      { url: `${base}/portfolio`, lastModified: now },
      { url: `${base}/blog`, lastModified: now },
      { url: `${base}/about`, lastModified: now },
      { url: `${base}/contact`, lastModified: now },
      { url: `${base}/areas/noida`, lastModified: now },
      { url: `${base}/areas/greater-noida`, lastModified: now },
      { url: `${base}/areas/ghaziabad`, lastModified: now },
    ]
  }
}
