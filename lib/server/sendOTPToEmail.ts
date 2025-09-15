import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendOTPToEmail(email: string, otp: string): Promise<void> {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Your OTP Code",
      html: `<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
      <div style="background-color: #28cd56; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Verification code</h1>
      </div>
      <div style="background: white; padding: 30px; border: 1px solid #ddd;">
        <p style="font-size: 16px; margin-bottom: 20px;">
          Your OTP code is:
        </p>
        <div style="background: #f5f5f5; border: 2px dashed #28cd56; 
                    border-radius: 8px; padding: 20px; text-align: center;">
          <span style="font-size: 36px; font-weight: bold; color: #28cd56; 
                       letter-spacing: 5px; font-family: monospace;">
            ${otp}
          </span>
        </div>
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          This code will expire in 5 minutes.
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
