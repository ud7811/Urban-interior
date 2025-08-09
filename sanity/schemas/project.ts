import { defineField, defineType } from "sanity"

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "rooms", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "style", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "beforeAfter",
      type: "object",
      fields: [
        { name: "before", type: "image", options: { hotspot: true } },
        { name: "after", type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({ name: "publishedAt", type: "datetime" }),
  ],
})
