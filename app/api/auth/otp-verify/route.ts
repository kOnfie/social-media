import { createCookie } from "@/lib/server/cookie";
import { query } from "@/lib/server/db";
import { generateJwtToken } from "@/lib/server/jwt";
import { NextRequest, NextResponse } from "next/server";

interface OTPVerifyBody {
  email: string;
  code: string | number;
}

export async function POST(req: NextRequest) {
  const body: OTPVerifyBody = await req.json();

  try {
    if (!body.email || !body.code) {
      return NextResponse.json({ message: "Email and code are required" }, { status: 400 });
    }

    const result = await query("SELECT email, code FROM otp_codes WHERE email = $1", [body.email]);
    if (result.rowCount === null || result.rowCount === 0) {
      return NextResponse.json({ message: "Data is not valid" }, { status: 409 });
    }
    const userCode = result.rows[0].code;

    if (body.code !== userCode) {
      return NextResponse.json({ message: "Code is not valid" }, { status: 409 });
    }

    const newUserRes = await query(
      "UPDATE users SET email_verified = $1 WHERE email = $2 RETURNING id, email, email_verified",
      [true, body.email]
    );
    if (newUserRes.rowCount === 0) {
      return NextResponse.json({ message: "Failed to verify email" }, { status: 500 });
    }

    await query("DELETE FROM otp_codes WHERE email = $1", [body.email]);

    const user = newUserRes.rows[0];

    const token = generateJwtToken({ id: user.id, email: user.email, emailVerified: user.email_verified });
    const cookie = createCookie("token", token);

    return NextResponse.json(
      { message: "Your email has been verified", user },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
