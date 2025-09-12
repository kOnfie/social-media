import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmailNotFoundEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your OTP Code",
      html: `<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
      <div style="background-color: #28cd56; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">This user doesn't exist</h1>
      </div>
      <div style="background: white; padding: 30px; border: 1px solid #ddd;">
        <p style="font-size: 16px; margin-bottom: 20px;">
          Create new account: http://localhost:3000/auth/signup
        </p>

      </div>
    </div>`,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Don't send email");
    }

    console.log("Email sent:", data);
  } catch (error) {
    console.error("Resend error:", error);
    throw new Error("Failed to send email");
  }
}
