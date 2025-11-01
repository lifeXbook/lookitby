import { query } from "./_generated/server.js";

export const getUserId = query({
    args:{},
    handler: async (ctx, _) => {
        return await ctx.auth.getUserIdentity();
    }
})