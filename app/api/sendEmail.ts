// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";

interface EmailRequestBody {
  user_name: string;
  user_email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { user_name, user_email, message }: EmailRequestBody = req.body;
    console.log("runngin");
    try {
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = process.env.EMAILJS_SERVICE_ID!;
      const templateId = process.env.EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name,
          user_email,
          message,
        },
        publicKey,
      );

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .end(`Method ${req.method} Not Allowed`);
  }
}
