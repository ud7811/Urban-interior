import { sanity } from "@/lib/sanity/client"
import { postsQuery } from "@/lib/sanity/queries"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Blog", path: "/blog" })

export default async function BlogPage() {
  const posts = await sanity.fetch(postsQuery)
  return (
    <div className="section">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl mb-6">Blog</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(posts || []).map((post: any) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="card overflow-hidden hover-zoom">
              <div className="relative h-48">
                <Image
                  src={post.heroImage?.asset?.url || "/placeholder.svg?height=320&width=640&query=interior+blog"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA}
                />
              </div>
              <div className="p-4 space-y-1">
                <div className="font-semibold">{post.title}</div>
                <div className="text-xs text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
