import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
//creates unique id in convex
export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        credits: v.number(),
        subscription : v.string()
    }),
})