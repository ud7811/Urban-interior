import Link from "next/link"
import Image from "next/image"
import { sanity } from "@/lib/sanity/client"
import { featuredProjectsQuery } from "@/lib/sanity/queries"
import { BLUR_DATA } from "@/lib/images"

export async function FeaturedProjectsGrid() {
  const projects = await sanity.fetch(featuredProjectsQuery)

  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl md:text-3xl mb-6">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(projects || []).map((p: any) => (
            <Link
              key={p._id}
              href={`/portfolio/${p.slug?.current}`}
              className="card overflow-hidden hover-zoom focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
            >
              <div className="relative h-56">
                <Image
                  src={p.coverImage?.asset?.url || "/images/hero-2.png"}
                  alt={p.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
              <div className="p-4 space-y-1">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-muted-foreground">{(p.rooms || []).join(", ")}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
