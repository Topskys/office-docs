import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("documents").collect();
  },
});

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    roomId: v.optional(v.string()),
    initialContent: v.optional(v.string()),
    ownerId: v.optional(v.string()),
    organizationId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    return await ctx.db.insert("documents", {
      title: args.title ?? "Untitled document",
      roomId: args.roomId,
      initialContent: args.initialContent,
      ownerId: user.subject,
      organizationId: args.organizationId,
    });
  },
});
