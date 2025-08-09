import Link from "next/link"
import Image from "next/image"
import { wallpaperCategories } from "@/data/wallpapers"
import { BLUR_DATA } from "@/lib/images"

export async function WallpaperCategoriesRail() {
  const list = wallpaperCategories

  return (
    <section className="section">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">Wallpaper Categories</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto carousel-snap">
          {list.map((c) => (
            <Link
              key={c.slug}
              href={`/wallpapers?category=${c.slug}`}
              className="min-w-[240px] rounded-xl overflow-hidden card hover-zoom focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
              aria-label={`${c.title} wallpapers`}
            >
              <div className="relative h-40">
                <Image
                  src={c.heroImage || "/placeholder.svg"}
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
