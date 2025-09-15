import { NextResponse } from "next/server";

export async function GET() {
  const googleAuthUrl =
    `https://accounts.google.com/o/oauth2/auth?` +
    `client_id=${process.env.GOOGLE_CLIENT_ID}&` +
    `redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&` +
    `response_type=code&` +
    `scope=openid profile email`;

  return NextResponse.redirect(googleAuthUrl);
}
