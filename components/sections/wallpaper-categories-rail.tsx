import Link from "next/link"
import Image from "next/image"
import { sanity } from "@/lib/sanity/client"
import { wallpaperCategoriesQuery } from "@/lib/sanity/queries"
import { BLUR_DATA } from "@/lib/images"

export async function WallpaperCategoriesRail() {
  const cats = await sanity.fetch(wallpaperCategoriesQuery)
  const fallback = [
    { title: "Botanical", slug: { current: "botanical" }, heroImage: { asset: { url: "/botanical-wallpaper.png" } } },
    { title: "Geometric", slug: { current: "geometric" }, heroImage: { asset: { url: "/geometric-wallpaper.png" } } },
    { title: "Minimal", slug: { current: "minimal" }, heroImage: { asset: { url: "/placeholder.svg?height=320&width=640" } } },
    { title: "Kids", slug: { current: "kids" }, heroImage: { asset: { url: "/placeholder.svg?height=320&width=640" } } },
    { title: "Textured", slug: { current: "textured" }, heroImage: { asset: { url: "/placeholder.svg?height=320&width=640" } } },
  ]
  const list = (cats && cats.length ? cats : fallback).slice(0, 10)

  return (
    <section className="section">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">Wallpaper Categories</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto carousel-snap">
          {list.map((c: any, i: number) => (
            <Link key={i} href={`/wallpapers?category=${c.slug?.current}`} className="min-w-[240px] rounded-xl overflow-hidden card">
              <div className="relative h-40">
                <Image
                  src={c.heroImage?.asset?.url || "/placeholder.svg?height=320&width=640&query=wallpaper+category"}
                  alt={`${c.title} wallpapers`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
              <div className="p-3 font-medium">{c.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
