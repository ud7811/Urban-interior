import { sanity } from "@/lib/sanity/client"
import { projectBySlugQuery } from "@/lib/sanity/queries"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await sanity.fetch(projectBySlugQuery, { slug: params.slug })
  return createSeo({ title: p?.title || "Project", path: `/portfolio/${params.slug}` })
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = await sanity.fetch(projectBySlugQuery, { slug: params.slug })
  if (!p) return <div className="container mx-auto px-4 section">Not found</div>

  const gallery = p.gallery?.length ? p.gallery : [p.coverImage]

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">{p.title}</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((img: any, i: number) => (
            <Link
              key={i}
              href={`/portfolio/${params.slug}/image/${i}`}
              className="relative h-64 rounded-xl overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
              aria-label={`View ${p.title} image ${i + 1}`}
            >
              <Image
                src={img?.asset?.url || "/placeholder.svg?height=320&width=640&query=project+detail"}
                alt={`${p.title} image ${i + 1}`}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA}
              />
            </Link>
          ))}
        </div>
        {p.beforeAfter?.before?.asset?.url && p.beforeAfter?.after?.asset?.url ? (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm mb-2 font-medium">Before</div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={p.beforeAfter.before.asset.url || "/placeholder.svg"}
                  alt={`${p.title} before`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
            </div>
            <div>
              <div className="text-sm mb-2 font-medium">After</div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={p.beforeAfter.after.asset.url || "/placeholder.svg"}
                  alt={`${p.title} after`}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
            </div>
          </div>
        ) : null}
        <p className="text-muted-foreground">{p.description}</p>
      </div>
    </div>
  )
}
