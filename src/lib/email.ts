import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendEmail = async ({ name, email, message }: EmailData) => {
  try {
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send email" };
  }
};
