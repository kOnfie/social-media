import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { submitAuthFormApi } from "../services/submitAuthForm.api";

export function useSubmitAuthForm(variant: "signin" | "signup") {
  const router = useRouter();

  async function submitAuthForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await submitAuthFormApi({ email, password }, variant);

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/auth/otp-verify");
    } catch (error) {
      console.error("Error submit form:", error);
    }
  }

  return { submitAuthForm };
}
