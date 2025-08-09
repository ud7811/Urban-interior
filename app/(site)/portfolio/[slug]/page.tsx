import Image from "next/image"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"
import { projects } from "@/data/projects"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = projects.find((x) => x.slug === params.slug)
  return createSeo({ title: p?.title || "Project", path: `/portfolio/${params.slug}` })
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug)
  if (!p) return <div className="container mx-auto px-4 section">Not found</div>

  const gallery = p.gallery.length ? p.gallery : [p.coverImage]

  return (
    <div className="section">
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">{p.title}</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((src, i) => (
            <Link
              key={i}
              href={`/portfolio/${params.slug}/image/${i}`}
              className="relative h-64 rounded-xl overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-2)]"
              aria-label={`View ${p.title} image ${i + 1}`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`${p.title} image ${i + 1}`}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA}
              />
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground">{p.description}</p>
      </div>
    </div>
  )
}
