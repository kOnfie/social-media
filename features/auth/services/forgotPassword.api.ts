export async function forgotPasswordApi(email: string): Promise<any> {
  const res = await fetch("/api/auth/forgot-password", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res;
}
