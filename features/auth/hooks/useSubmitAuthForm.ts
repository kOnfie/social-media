import { useState } from "react";

import { useRouter } from "next/navigation";

import { AuthFormSchemaData } from "../schemas/AuthFormSchema";
import { submitAuthFormApi } from "../services/submitAuthForm.api";

export function useSubmitAuthForm(variant: "signin" | "signup"): {
  error: null | string;
  isLoading: boolean;
  submitAuthForm: (data: AuthFormSchemaData) => void;
} {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  async function submitAuthForm(data: AuthFormSchemaData) {
    setError(null);
    setIsLoading(true);

    const { email, password } = data;

    try {
      const res = await submitAuthFormApi({ email, password }, variant);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/auth/otp-verify");
    } catch (error: any) {
      console.error("Error submit form:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { error, isLoading, submitAuthForm };
}
