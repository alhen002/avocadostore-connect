import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import prisma from "@/services/prisma/prisma";
import { TRPCError } from "@trpc/core";
export const userRouter = router({
  getById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const user = await prisma.user.findUnique({
      where: {
        id: input,
      },
    });
    if (!user) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User not found.",
      });
    }
    return user;
  }),
});
