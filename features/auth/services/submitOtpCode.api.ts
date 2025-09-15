export async function submitOtpCode(code: string, email: string) {
  const res = await fetch("/api/auth/otp-verify", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, code }),
  });

  return res;
}
