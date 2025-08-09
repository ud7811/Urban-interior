import Image from "next/image"
import Link from "next/link"
import { BLUR_DATA } from "@/lib/images"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { wallpapers, wallpaperCategories } from "@/data/wallpapers"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Wallpapers", path: "/wallpapers" })

export default async function WallpapersPage({ searchParams }: { searchParams: { category?: string } }) {
  const { category } = searchParams
  const filtered = category ? wallpapers.filter((w) => w.categorySlug === category) : wallpapers

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">Wallpapers</h1>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/wallpapers"
            className={`px-3 py-1 rounded-full border ${!category ? "bg-[color:var(--accent-1)]" : ""}`}
          >
            All
          </Link>
          {wallpaperCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/wallpapers?category=${c.slug}`}
              className={`px-3 py-1 rounded-full border ${category === c.slug ? "bg-[color:var(--accent-1)]" : ""}`}
            >
              {c.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <Link key={w.slug} href={`/wallpapers/${w.slug}`} className="card overflow-hidden hover-zoom">
              <div className="relative h-56">
                <Image
                  src={w.images[0] || "/placeholder.svg?height=320&width=640&query=wallpaper"}
                  alt={w.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
              <div className="p-4">
                <div className="font-semibold">{w.title}</div>
                <div className="text-xs text-muted-foreground">
                  {wallpaperCategories.find((c) => c.slug === w.categorySlug)?.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
