import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { userRouter } from "@/server/routers/user";
export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  user: userRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
