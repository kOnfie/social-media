import { createCookie } from "@/lib/server/cookie";
import { query } from "@/lib/server/db";
import { hashPassword } from "@/lib/server/hashPassword";
import { generateJwtToken } from "@/lib/server/jwt";
import { NextRequest, NextResponse } from "next/server";

interface ResetPasswordOtpBody {
  email: string;
  password: string;
  code: string;
}

export async function POST(req: NextRequest) {
  const body: ResetPasswordOtpBody = await req.json();

  try {
    if (!body.email || !body.password || !body.code) {
      return NextResponse.json({ message: "Email and new password and code are required" }, { status: 400 });
    }

    const resultOTP = await query("SELECT email, code FROM otp_codes WHERE email = $1", [body.email]);
    if (resultOTP.rowCount === null || resultOTP.rowCount === 0) {
      return NextResponse.json({ message: "Data is not valid" }, { status: 409 });
    }
    const userCode = resultOTP.rows[0].code;
    if (userCode !== body.code) {
      return NextResponse.json({ message: "Code is not valid" }, { status: 409 });
    }

    const newPasswordHash = await hashPassword(body.password);

    const res = await query(
      "UPDATE users SET password_hash = $1 WHERE email = $2 RETURNING id, email, email_verified",
      [newPasswordHash, body.email]
    );
    if (res.rowCount === 0 || res.rowCount === null) {
      return NextResponse.json({ message: "Failed to reset password" }, { status: 500 });
    }

    const user = res.rows[0];
    const token = generateJwtToken({ id: user.id, email: user.email, emailVerified: user.email_verified });
    const cookie = createCookie("token", token);

    return NextResponse.json(
      { message: "Password has been reset successfully", user: res.rows[0] },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    console.error("Error resetting password:", error);
  }
}
