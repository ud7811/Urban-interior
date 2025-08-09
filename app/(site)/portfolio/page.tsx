import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"
import { projects } from "@/data/projects"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Portfolio", path: "/portfolio" })

export default async function PortfolioPage({ searchParams }: { searchParams: { room?: string; style?: string } }) {
  const { room, style } = searchParams
  const items = projects.filter((p) => (!room || p.rooms.includes(room)) && (!style || p.style.includes(style)))

  const rooms = ["Kitchen", "Bath", "Bedroom", "Living", "Dining", "Outdoor"]
  const styles = ["Minimal", "Geometric", "Botanical", "Textured", "Kids", "Modern"]

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">Portfolio</h1>
        <div className="flex flex-wrap gap-3">
          <span className="text-sm font-medium pr-2">Room:</span>
          <Link
            href="/portfolio"
            className={`px-3 py-1 rounded-full border ${!room ? "bg-[color:var(--accent-1)]" : ""}`}
          >
            All
          </Link>
          {rooms.map((r) => (
            <Link
              key={r}
              href={`/portfolio?room=${encodeURIComponent(r)}${style ? `&style=${encodeURIComponent(style)}` : ""}`}
              className={`px-3 py-1 rounded-full border ${room === r ? "bg-[color:var(--accent-1)]" : ""}`}
            >
              {r}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="text-sm font-medium pr-2">Style:</span>
          <Link
            href={`/portfolio${room ? `?room=${encodeURIComponent(room)}` : ""}`}
            className={`px-3 py-1 rounded-full border ${!style ? "bg-[color:var(--accent-1)]" : ""}`}
          >
            All
          </Link>
          {styles.map((s) => (
            <Link
              key={s}
              href={`/portfolio?${room ? `room=${encodeURIComponent(room)}&` : ""}style=${encodeURIComponent(s)}`}
              className={`px-3 py-1 rounded-full border ${style === s ? "bg-[color:var(--accent-1)]" : ""}`}
            >
              {s}
            </Link>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card overflow-hidden hover-zoom">
              <div className="relative h-56">
                <Image
                  src={p.coverImage || "/placeholder.svg"}
                  alt={p.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
              <div className="p-4">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.rooms.join(", ")}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
