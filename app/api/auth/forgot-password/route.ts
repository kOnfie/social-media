import { getUserByEmail } from "@/lib/server/getUserByEmail";
import { sendingOTPEmailAndStoringInDB } from "@/lib/server/sendingOTPEmailAndStoringInDB";
import { NextRequest, NextResponse } from "next/server";

interface ForgotPasswordBody {
  email: string;
}

export async function POST(req: NextRequest) {
  const body: ForgotPasswordBody = await req.json();

  const CONSISTENT_RESPONSE_MESSAGE =
    "If that email address is in our database, we will send you an email to reset your password.";
  try {
    if (!body.email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const user = await getUserByEmail(body.email as string);
    if (user) {
      await sendingOTPEmailAndStoringInDB(body.email);
    }

    return NextResponse.json(
      {
        message: CONSISTENT_RESPONSE_MESSAGE,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in forgot password:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
