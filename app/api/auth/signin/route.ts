import { createCookie } from "@/lib/server/cookie";
import { query } from "@/lib/server/db";
import { generateJwtToken } from "@/lib/server/jwt";
import { sendingOTPEmailAndStoringInDB } from "@/lib/server/sendingOTPEmailAndStoringInDB";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    if (!body.email || !body.password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    const result = await query("SELECT id, email, password_hash, email_verified FROM users WHERE email = $1", [
      body.email,
    ]);
    if (result.rowCount === null || result.rowCount === 0) {
      return NextResponse.json({ message: "Data is not valid" }, { status: 409 });
    }
    const user = result.rows[0];

    const passwordIsValid = await bcrypt.compare(body.password, user.password_hash);
    if (!passwordIsValid) {
      return NextResponse.json({ message: "Data is not valid" }, { status: 409 });
    }

    const newToken = generateJwtToken({ id: user.id, email: user.email, emailVerified: user.email_verified });
    const cookie = createCookie("token", newToken);

    await sendingOTPEmailAndStoringInDB(user.email);

    return NextResponse.json(
      {
        message: "User has been logged in",
        user: { id: user.id, email: user.email, email_verified: user.email_verified },
      },
      {
        status: 200,
        headers: { "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}
