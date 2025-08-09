import { defineField, defineType } from "sanity"

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "publishedAt", type: "datetime" }),
  ],
})
