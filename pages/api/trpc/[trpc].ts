import { type NextApiRequest, type NextApiResponse } from "next";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "@/server/routers/_app";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Create and call the tRPC handler
  return createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
  })(req, res);
};

export default handler;
