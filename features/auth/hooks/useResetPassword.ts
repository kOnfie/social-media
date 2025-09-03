import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import { resetPasswordApi } from "../services/resetPassword.api";

export function useResetPassword(email: string | null, code: string) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function submitResetPasswordForm(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords are not equals.");
      return;
    }

    try {
      const res = await resetPasswordApi({ email, password, code });

      if (!res.ok) {
        throw new Error("Failed to reset password");
      }

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push(`/menu`);
    } catch (error) {
      console.error("Error sending reset password request:", error);
      setError("Error sending reset password request. Try again later please.");
    }
  }

  return { error, submitResetPasswordForm };
}
