import type { RequestUserType } from "../types/RequestUserType.type";

export async function resetPasswordApi(user: RequestUserType) {
  const res = await fetch("/api/auth/reset-password-otp", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  return res;
}
