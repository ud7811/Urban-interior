import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { wallpapers } from "@/data/wallpapers"

type Params = { slug: string; index: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const w = wallpapers.find((x) => x.slug === params.slug)
  const images = (w?.images || []).filter(Boolean)
  const idx = Number(params.index) || 0
  const title = w?.title ? `${w.title} — Image ${idx + 1}` : "Wallpaper Image"
  return createSeo({
    title,
    path: `/wallpapers/${params.slug}/image/${idx}`,
    images: [images?.[idx]].filter(Boolean) as string[],
  })
}

export default async function WallpaperImagePage({ params }: { params: Params }) {
  const w = wallpapers.find((x) => x.slug === params.slug)
  if (!w) return <div className="container mx-auto px-4 section">Not found</div>

  const images = (w.images || []).filter(Boolean)
  const idx = Math.max(0, Math.min(Number(params.index) || 0, Math.max(images.length - 1, 0)))
  const img = images[idx]

  const prevIdx = idx > 0 ? idx - 1 : null
  const nextIdx = idx < images.length - 1 ? idx + 1 : null

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <Link href={`/wallpapers/${params.slug}`} className="inline-flex items-center gap-2 text-sm underline">
            <ArrowLeft className="w-4 h-4" /> Back to wallpaper
          </Link>
          <div className="text-sm text-muted-foreground">{`Image ${idx + 1} of ${images.length}`}</div>
        </div>

        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-muted">
          <Image
            src={img || "/placeholder.svg?height=720&width=1280&query=wallpaper+image"}
            alt={`${w.title} — image ${idx + 1}`}
            fill
            className="object-contain bg-black/5"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            sizes="100vw"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {prevIdx !== null && (
              <Link
                href={`/wallpapers/${params.slug}/image/${prevIdx}`}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-[color:var(--accent-1)]"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </Link>
            )}
            {nextIdx !== null && (
              <Link
                href={`/wallpapers/${params.slug}/image/${nextIdx}`}
                className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-[color:var(--accent-1)]"
              >
                Next <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          <div className="text-right">
            <div className="font-serif text-xl">{w.title}</div>
            <div className="text-xs text-muted-foreground mt-1">{w.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
