import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { getServerSession, User } from "next-auth";
import { authOptions } from "@/lib/auth";

type ResponseData = User | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ message: "You must be logged in to access this route." });
  }
  switch (req.method) {
    case "GET":
      const user = await db.user.findUnique({
        where: {
          id: session.user.id,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
