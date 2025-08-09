import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// CREATE a new user
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    credits: v.number(),
    subscription: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      credits: args.credits,
      subscription: args.subscription,
    });
    return userId;
  },
});

// GET all users
export const getUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

// GET user by email
export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
  },
});

// UPDATE user credits
export const updateUserCredits = mutation({
  args: {
    userId: v.id("users"),
    newCredits: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      credits: args.newCredits,
    });
  },
});
