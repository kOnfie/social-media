import { useState } from "react";

import { ResetPasswordFormData } from "../schemas/ResetPasswordFormSchema";
import { resetPasswordApi } from "../services/resetPassword.api";

export function useResetPassword(email: string | null, code: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function submitResetPasswordForm(
    data: ResetPasswordFormData,
  ): Promise<any> {
    setIsLoading(true);
    setError(null);

    const { password } = data;

    try {
      const res = await resetPasswordApi({ email, password, code });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      console.error("Error sending reset password request:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { error, isLoading, submitResetPasswordForm };
}
