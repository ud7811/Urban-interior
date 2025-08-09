import { sanity } from "@/lib/sanity/client"
import { wallpapersQuery, wallpaperCategoriesQuery } from "@/lib/sanity/queries"
import Image from "next/image"
import Link from "next/link"
import { BLUR_DATA } from "@/lib/images"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Wallpapers", path: "/wallpapers" })

export default async function WallpapersPage({ searchParams }: { searchParams: { category?: string } }) {
  const [cats, wallpapers] = await Promise.all([
    sanity.fetch(wallpaperCategoriesQuery),
    sanity.fetch(wallpapersQuery),
  ])
  const filtered = searchParams.category
    ? (wallpapers || []).filter((w: any) => w.category?.slug?.current === searchParams.category)
    : wallpapers || []

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">Wallpapers</h1>
        <div className="flex gap-3 flex-wrap">
          <Link href="/wallpapers" className={`px-3 py-1 rounded-full border ${!searchParams.category ? "bg-[color:var(--accent-1)]" : ""}`}>All</Link>
          {(cats || []).map((c: any) => (
            <Link key={c._id} href={`/wallpapers?category=${c.slug.current}`} className={`px-3 py-1 rounded-full border ${searchParams.category===c.slug.current ? "bg-[color:var(--accent-1)]" : ""}`}>
              {c.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w: any) => (
            <Link key={w._id} href={`/wallpapers/${w.slug.current}`} className="card overflow-hidden hover-zoom">
              <div className="relative h-56">
                <Image
                  src={w.images?.[0]?.asset?.url || "/placeholder.svg?height=320&width=640&query=wallpaper"}
                  alt={w.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
              <div className="p-4">
                <div className="font-semibold">{w.title}</div>
                <div className="text-xs text-muted-foreground">{w.category?.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
