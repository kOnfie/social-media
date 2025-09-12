import { useState } from "react";

import { ForgotPasswordFormSchemaData } from "../schemas/ForgotPasswordFormSchema";
import { forgotPasswordApi } from "../services/forgotPassword.api";

export function useForgotPassword(): {
  error: string | null;
  isLoading: boolean;
  submitForgotPasswordForm: (data: ForgotPasswordFormSchemaData) => void;
} {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submitForgotPasswordForm(data: ForgotPasswordFormSchemaData) {
    setError(null);
    setIsLoading(true);
    const { email } = data;

    try {
      const res = await forgotPasswordApi(email);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { error, isLoading, submitForgotPasswordForm };
}
