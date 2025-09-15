import { useState } from "react";

import { submitOtpCode } from "../services/submitOtpCode.api";

export function useSubmitOtpCode(code: string) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function submitOtp() {
    setError(null);
    setIsLoading(true);
    const user = JSON.parse(localStorage.getItem("user") as string);

    try {
      const res = await submitOtpCode(code, user.email);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { error, isLoading, submitOtp };
}
