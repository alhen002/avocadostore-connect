import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import crypto from "crypto";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ message: "You must be logged in to access this route." });
  }

  switch (req.method) {
    case "POST":
      const user = await db.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const SECRET = crypto.randomBytes(16).toString("hex");

      const response = await db.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          secret: SECRET,
        },
      });

      return res.status(200).json(user);

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
