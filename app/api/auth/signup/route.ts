import { createCookie } from "@/lib/server/cookie";
import { query } from "@/lib/server/db";
import { hashPassword } from "@/lib/server/hashPassword";
import { generateJwtToken } from "@/lib/server/jwt";
import { NextRequest, NextResponse } from "next/server";

import { sendingOTPEmailAndStoringInDB } from "@/lib/server/sendingOTPEmailAndStoringInDB";

interface SignupBody {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const body: SignupBody = await req.json();

  try {
    if (!body.email || !body.password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    const existingUser = await query("SELECT id FROM users WHERE email = $1", [body.email]);
    if (existingUser.rowCount !== null && existingUser.rowCount > 0) {
      return NextResponse.json({ message: "Data is not valid" }, { status: 409 });
    }

    const passwordHash = await hashPassword(body.password);

    const result = await query(
      "INSERT INTO users (email, password_hash) VALUES($1, $2) RETURNING id, email, email_verified",
      [body.email, passwordHash]
    );
    const newUser = result.rows[0];

    const token = generateJwtToken({ id: newUser.id, email: newUser.email, emailVerified: newUser.email_verified });
    const cookie = createCookie("token", token);

    await sendingOTPEmailAndStoringInDB(body.email);

    return NextResponse.json(
      { message: "User has been created", user: newUser },
      {
        status: 201,
        headers: { "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}
