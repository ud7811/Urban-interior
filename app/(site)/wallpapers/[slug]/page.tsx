import Image from "next/image"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"
import { wallpapers, wallpaperCategories } from "@/data/wallpapers"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const w = wallpapers.find((x) => x.slug === params.slug)
  return createSeo({ title: w?.title || "Wallpaper", path: `/wallpapers/${params.slug}` })
}

export default async function WallpaperDetail({ params }: { params: { slug: string } }) {
  const w = wallpapers.find((x) => x.slug === params.slug)
  if (!w) return <div className="container mx-auto px-4 section">Not found</div>
  const cat = wallpaperCategories.find((c) => c.slug === w.categorySlug)

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">{w.title}</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-3">
            {w.images.slice(0, 8).map((src, i) => (
              <a
                key={i}
                href={`/wallpapers/${params.slug}/image/${i}`}
                className="relative h-56 rounded-xl overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
                aria-label={`View ${w.title} image ${i + 1}`}
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`${w.title} image ${i + 1}`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </a>
            ))}
          </div>
          <div className="card p-6 space-y-3">
            <div>
              <span className="font-semibold">Category:</span> {cat?.title}
            </div>
            <div>
              <span className="font-semibold">Material:</span> {w.specs.material}
            </div>
            <div>
              <span className="font-semibold">Roll Size:</span> {w.specs.rollSize}
            </div>
            <div>
              <span className="font-semibold">Finish:</span> {w.specs.finish}
            </div>
            <div>
              <span className="font-semibold">Price Range:</span> {w.priceRange}
            </div>
            <div>
              <span className="font-semibold">Install Time:</span> {w.installTime}
            </div>
            <p className="text-muted-foreground">{w.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
