import { createClient } from "@sanity/client"

type SanityLike = {
fetch<T = any>(query: string, params?: Record<string, any>): Promise<T>
}

// Prefer server-safe vars, fall back to NEXT_PUBLIC_* if present (ok because projectId/dataset are not secrets)
const projectId =
process.env.SANITY_PROJECT_ID ||
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const dataset =
process.env.SANITY_DATASET ||
process.env.NEXT_PUBLIC_SANITY_DATASET ||
"production"

const apiVersion = process.env.SANITY_API_VERSION || "2024-05-01"
const token = process.env.SANITY_READ_TOKEN || process.env.SANITY_TOKEN

export const sanityConfig = {
projectId,
dataset,
apiVersion,
useCdn: false,
token,
}

let client: SanityLike

if (!projectId) {
console.warn("[sanity] Missing SANITY_PROJECT_ID (or NEXT_PUBLIC_SANITY_PROJECT_ID). Using no-op client for preview.")
client = {
  async fetch() {
    // Return null so callers can safely use (data || []) fallbacks
    return null as any
  },
}
} else {
client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  // Ensure published content in production; acceptable for preview too
  perspective: "published" as any,
}) as unknown as SanityLike
}

export const sanity = client
export const isSanityEnabled = Boolean(projectId)
