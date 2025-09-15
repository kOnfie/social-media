"use server";

import { query } from "./db";
import { sendOTPToEmail } from "./sendOTPToEmail";
import crypto from "crypto";

export async function sendingOTPEmailAndStoringInDB(email: string): Promise<void> {
  const otp = crypto.randomInt(100000, 999999).toString();
  const expiresAt = new Date(Date.now() + 60 * 1000 * 5);

  try {
    await sendOTPToEmail(email, otp);

    await query(
      "INSERT INTO otp_codes (email, code, expires_at) VALUES ($1, $2, $3) ON CONFLICT (email) DO UPDATE SET code = $2, expires_at = $3",
      [email, otp, expiresAt]
    );
  } catch (error: any) {
    console.error("Помилка в sendingOTPEmailAndStoringInDB:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    if (error.message?.includes("email")) {
      throw new Error("The email is invalid. Please provide a valid email address.");
    }

    if (error.code === "57P01" || error.code === "ECONNRESET") {
      throw new Error("There is a problem with the database. Please try again later.");
    }

    throw new Error("Failed to send OTP. Please try again later.");
  }
}
