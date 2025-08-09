import { defineField, defineType } from "sanity"

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "details", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "priceFrom", type: "number" }),
    defineField({ name: "duration", type: "string" }),
    defineField({ name: "icon", type: "string" }),
  ],
})
