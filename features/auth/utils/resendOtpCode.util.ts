import { sendingOTPEmailAndStoringInDB } from "@/lib/server/sendingOTPEmailAndStoringInDB";

export function resendOtpCodeUtil() {
  const user = JSON.parse(localStorage.getItem("user") as string);
  sendingOTPEmailAndStoringInDB(user.email);
  alert("OTP has been resent to your email.");
}
