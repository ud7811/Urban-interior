import { sanity } from "@/lib/sanity/client"
import { postBySlugQuery } from "@/lib/sanity/queries"
import Image from "next/image"
import type { Metadata } from "next"
import { articleJsonLd, createSeo } from "@/lib/seo"
import { JsonLd } from "@/components/seo/jsonld"
import { BLUR_DATA } from "@/lib/images"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await sanity.fetch(postBySlugQuery, { slug: params.slug })
  return createSeo({ title: post?.title || "Post", path: `/blog/${params.slug}` })
}

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await sanity.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) return <div className="container mx-auto px-4 section">Not found</div>

  const json = articleJsonLd({
    title: post.title,
    description: post.excerpt || post.title,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/blog/${params.slug}`,
    image: post.heroImage?.asset?.url || "/images/hero-1.png",
    datePublished: post.publishedAt,
    authorName: "Urban Luxe Interiors",
  })

  return (
    <div className="section">
      <JsonLd id="jsonld-article" data={json} />
      <div className="container mx-auto px-4 space-y-6">
        <h1 className="font-serif text-3xl">{post.title}</h1>
        <div className="relative h-64 rounded-xl overflow-hidden">
          <Image
            src={post.heroImage?.asset?.url || "/images/hero-2.png"}
            alt={post.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
          />
        </div>
        <p className="text-muted-foreground">{post.excerpt}</p>
        <article className="prose max-w-none">
          {/* For demo purposes, render body as plain text if not portable text parsed */}
          <p>{typeof post.body === "string" ? post.body : "Inspiration, tips, and case studies from our projects."}</p>
        </article>
      </div>
    </div>
  )
}
