import { router, publicProcedure } from "@/server/trpc";
import { z } from "zod";
import prisma from "@/services/prisma/prisma";
import { TRPCError } from "@trpc/core";
import { User } from "@prisma/client";

export const userRouter = router({
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { id } = input;
      const user = await prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User with ID ${id} not found.`,
        });
      }
      return user;
    }),
});
