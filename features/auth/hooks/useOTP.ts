import { ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export function useOTP(otpLength: number, autoSubmitDelay: number, autoComplete?: boolean) {
  const [inputArr, setInputArr] = useState<string[]>(new Array(otpLength).fill(""));
  const refArr = useRef<HTMLInputElement[]>([]);
  const router = useRouter();

  // Focus first input on mount
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  // Auto-submit when all fields are filled
  useEffect(() => {
    const isComplete = inputArr.every((digit) => digit !== "");
    let timer: any;

    async function submitAndClearCode() {
      const user = JSON.parse(localStorage.getItem("user") as string);

      if (isComplete) {
        timer = setTimeout(async () => {
          await handleSubmitOtpCode(inputArr.join(""), user.email);
          console.log("success");
          setInputArr(new Array(otpLength).fill(""));

          router.push("/menu");
        }, autoSubmitDelay);
      }
    }

    if (autoComplete) {
      submitAndClearCode();
    }
    return () => clearTimeout(timer);
  }, [inputArr, otpLength, autoComplete]);

  function handleInputChange(input: string, index: number): void {
    if (input && (input < "0" || input > "9")) return;

    const newArr = [...inputArr];
    newArr[index] = input.slice(-1);
    setInputArr(newArr);

    if (newArr[index] && index < otpLength - 1) {
      focusOnInput(refArr, index + 1);
    }
  }

  function focusOnInput(refArr: React.RefObject<HTMLInputElement[]>, index: number): void {
    refArr.current[index]?.focus();
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>, index: number): void {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      focusOnInput(refArr, index - 1);
    }
  }

  function handleInputPaste(e: ClipboardEvent<HTMLInputElement>): void {
    e.preventDefault();

    const clipBoardData = e.clipboardData?.getData("text");
    let numericChars = "";

    for (let i = 0; i < clipBoardData.length; i++) {
      const char = clipBoardData[i];
      if (char >= "0" && char <= "9") {
        numericChars += char;
      }
    }

    const digitsToPaste = numericChars.slice(0, otpLength);
    const newArr = new Array(otpLength).fill("");

    for (let i = 0; i < digitsToPaste.length; i++) {
      newArr[i] = digitsToPaste[i];
    }

    setInputArr(newArr);
    focusOnInput(refArr, Math.min(digitsToPaste.length, otpLength - 1));
  }

  async function handleSubmitOtpCode(code: string, email: string) {
    try {
      const res = await fetch("/api/auth/otp-verify", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error submit code:", error);
    }
  }

  return {
    refArr,
    inputArr,
    handleInputChange,
    handleInputKeyDown,
    handleInputPaste,
    handleSubmitOtpCode,
  };
}
