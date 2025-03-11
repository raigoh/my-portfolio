import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    await sendEmail({ name, email, subject, message });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
