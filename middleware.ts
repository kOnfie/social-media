import { NextRequest, NextResponse } from "next/server";

import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";

  const absoluteUrl = new URL(req.url);
  absoluteUrl.pathname = "/auth/signin";
  absoluteUrl.search = "";

  if (!token) {
    console.log(
      "No token found, redirecting to absoluteUrl",
      absoluteUrl.toString(),
    );
    return NextResponse.redirect(absoluteUrl);
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
    );
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      throw new Error("Token expired");
    }

    const emailVerified = payload.emailVerified as boolean;

    if (!emailVerified) {
      const otpUrl = new URL(req.url);
      otpUrl.pathname = "/auth/otp-verify";
      otpUrl.search = "";
      return NextResponse.redirect(otpUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return NextResponse.redirect(absoluteUrl).cookies.delete("token");
  }
}

export const config = {
  matcher: [
    "/",
    "/menu/:path*",
    "/profiles/:path*",
    "/followers/:path*",
    "/notification/:path*",
  ],
};
