export type Post = {
  slug: string
  title: string
  heroImage: string
  excerpt: string
  body: string
  tags: string[]
  publishedAt: string
}

export const posts: Post[] = [
  {
    slug: "design-ideas-1",
    title: "Design Ideas 1",
    heroImage: "/images/hero-1.png",
    excerpt: "Our latest thoughts on materials, textures, and layouts.",
    body: "Inspiration for your next project. Tips, materials, and layouts that blend elegance and comfort.",
    tags: ["ideas", "interior"],
    publishedAt: "2024-09-01",
  },
  {
    slug: "design-ideas-2",
    title: "Design Ideas 2",
    heroImage: "/images/hero-2.png",
    excerpt: "Warm minimalism with rich textures and timeless accents.",
    body: "We explore warm minimalism, how to layer textures, and what to consider for long-lasting style.",
    tags: ["ideas", "style"],
    publishedAt: "2024-08-25",
  },
  {
    slug: "design-ideas-3",
    title: "Design Ideas 3",
    heroImage: "/images/rooms/living.png",
    excerpt: "Make your living room the heart of your home.",
    body: "From layout to lighting, small changes can make a big impact in your living room.",
    tags: ["living", "layout"],
    publishedAt: "2024-08-10",
  },
]
