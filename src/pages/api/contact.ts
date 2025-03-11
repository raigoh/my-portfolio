import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/email";

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const result = await sendEmail({ name, email, message });
    if (result.success) {
      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res
        .status(500)
        .json({ message: "Failed to send email", error: result.error });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
