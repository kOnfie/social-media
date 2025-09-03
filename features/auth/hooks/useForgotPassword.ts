import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { forgotPasswordApi } from "../services/forgotPassword.api";

export function useForgotPassword() {
  const router = useRouter();

  async function submitForgotPasswordForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const res = await forgotPasswordApi(email as string);

      if (!res.ok) {
        throw new Error("Failed to send forgot password request");
      }

      await res.json();
      router.push(`/auth/reset-password?email=${email}`);
    } catch (error) {
      console.error("Error sending forgot password request:", error);
    }
  }

  return { submitForgotPasswordForm };
}
