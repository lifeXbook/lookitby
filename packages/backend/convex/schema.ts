import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const lifeTables = {
  lifeRelations: defineTable({
    liveId: v.optional(v.id("live")),
    bookId: v.optional(v.id("book")),
    noteId: v.optional(v.id("note")),
    lifeId: v.optional(v.id("life")),
  }),
  lifeContents: defineTable({
    lifeId: v.id("life"),
    quote: v.string(),
    image: v.optional(v.id("_storage")),
    updatedAt: v.optional(v.number()),
  })
    .index("by_life_id", ["lifeId"]),
}

const noteTables = {
  noteRelationships: defineTable({
      liveId: v.optional(v.id("live")),
      bookId: v.optional(v.id("book")),
      noteId: v.optional(v.id("note")),
      lifeId: v.optional(v.id("life")),
    }),
  noteContents: defineTable({
      noteId: v.id("note"),
      content: v.string(),
  })
      .index("by_note_id", ["noteId"])  
}

const bookTables = {
  bookRelationships: defineTable({
    liveId: v.optional(v.id("live")),
    bookId: v.optional(v.id("book")),
    noteId: v.optional(v.id("note")),
    lifeId: v.optional(v.id("life")),
  }),
    bookContents: defineTable({
      bookId: v.id("book"),
      title: v.string(),
    })
      .index("by_book_id", ["bookId"]),
}

const liveTables = {
  liveRelationships: defineTable({
     liveId: v.optional(v.id("live")),
     bookId: v.optional(v.id("book")),
     noteId: v.optional(v.id("note")),
     lifeId: v.optional(v.id("life")),
   }),
  liveContents: defineTable({
     liveId: v.id("live"),
     name: v.string(),
   })
     .index("by_live_id", ["liveId"]),
}

const schema = defineSchema({
  live: defineTable({
    userId: v.id("userId"),
    description: v.optional(v.string()),
  }),
  book: defineTable({
    description: v.optional(v.string()),
  }),
  note: defineTable({
    description: v.optional(v.string()),
  }),
  life: defineTable({
    description: v.optional(v.string()),
  }),
  ...liveTables,
  ...bookTables,
  ...noteTables,
  ...lifeTables,
});

export default schema;