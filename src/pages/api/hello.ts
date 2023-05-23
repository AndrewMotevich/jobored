import { NextApiRequest, NextApiResponse } from "next";

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ name: "John Doe" });
}
