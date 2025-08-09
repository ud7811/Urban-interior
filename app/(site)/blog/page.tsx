import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { createSeo } from "@/lib/seo"
import { BLUR_DATA } from "@/lib/images"
import { posts } from "@/data/posts"

export const generateMetadata = async (): Promise<Metadata> => createSeo({ title: "Blog", path: "/blog" })

export default async function BlogPage() {
  return (
    <div className="section">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-3xl mb-6">Blog</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card overflow-hidden hover-zoom">
              <div className="relative h-48">
                <Image
                  src={post.heroImage || "/placeholder.svg"}
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
