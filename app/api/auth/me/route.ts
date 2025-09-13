import { NextRequest, NextResponse } from "next/server";

import { jwtVerify } from "jose";

import { getUserByEmail } from "@/lib/server/getUserByEmail";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";

  try {
    if (!token) {
      return NextResponse.json({ message: "Token not found" }, { status: 404 });
    }

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET),
    );
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return NextResponse.json(
        { message: "Token is expired" },
        { status: 400 },
      );
    }

    const userEmail = payload.email;

    const user = await getUserByEmail(userEmail as string);
    if (!user) {
      throw new Error();
    }

    return NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          picture: user.picture,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
