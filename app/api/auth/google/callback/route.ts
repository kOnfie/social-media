import { NextRequest, NextResponse } from "next/server";

import { createCookie } from "@/lib/server/cookie";
import { query } from "@/lib/server/db";
import { generateJwtToken } from "@/lib/server/jwt";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    console.error("No code provided");
    return NextResponse.redirect(new URL("/auth/error", req.url));
  }

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        code,
        grant_type: "authorization_code",
        redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
      }),
    });

    const tokens = await tokenResponse.json();

    const userResponse = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokens.access_token}` },
      },
    );

    const googleUser = await userResponse.json();

    const result = await query(
      "INSERT INTO users (name, email, email_verified, picture) VALUES($1, $2, $3, $4) ON CONFLICT (email) DO UPDATE SET name = $1, email_verified = $3, picture = $4 RETURNING *",
      [
        googleUser.name,
        googleUser.email,
        googleUser.verified_email,
        googleUser.picture,
      ],
    );
    if (result.rowCount === null) {
      console.error("User not created");
      return NextResponse.redirect(new URL("/auth/error", req.url));
    }

    const newUser = result.rows[0];
    const token = generateJwtToken({
      id: newUser.id,
      email: newUser.email,
      emailVerified: newUser.email_verified,
    });
    const cookie = createCookie("token", token);

    const response = NextResponse.redirect(new URL("/menu", req.url));
    response.headers.append("Set-Cookie", cookie);
    return response;
  } catch (error) {
    console.error("Google OAuth error:", error);
    return NextResponse.redirect(new URL("/auth/error", req.url));
  }
}
