import { useRouter } from "next/navigation";

export function useSubmitOtpCode(handleSubmitOtpCode: (code: string, email: string) => Promise<any>, code: string) {
  const router = useRouter();

  async function submitOtpCodeWithButton() {
    const user = JSON.parse(localStorage.getItem("user") as string);

    const data = await handleSubmitOtpCode(code, user.email);

    localStorage.setItem("user", JSON.stringify(data.user));
    router.push("/menu");
  }

  return { submitOtpCodeWithButton };
}
