import { query } from "./_generated/server.js";

export const getMany = query({
    args:{},
    handler: async (ctx, args) => {
        return await ctx.db.query("users").collect();
    }
})