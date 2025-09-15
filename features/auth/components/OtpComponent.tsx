"use client";

import { useRouter } from "next/navigation";

import { useOTP } from "@/features/auth/hooks/useOTP";
import { CustomButton } from "@/shared/components/ui/CustomButton";
import { LoadingOverlay } from "@/shared/components/ui/LoadingOverlay";

import { useSubmitOtpCode } from "../hooks/useSubmitOtpCode";
import { FormErrorMessage } from "./ui/FormErrorMessage";
import { OtpInput } from "./ui/OtpInput";

interface OtpComponentProps {
  otpLength?: number;
  autoSubmitDelay?: number;
}

const OTP_DIGIT_LENGTH = 6;

export function OtpComponent({
  otpLength = OTP_DIGIT_LENGTH,
}: OtpComponentProps) {
  const router = useRouter();
  const {
    refArr,
    inputArr,
    handleInputChange,
    handleInputKeyDown,
    handleInputPaste,
  } = useOTP(otpLength);

  const {
    error: submitOtpCodeError,
    isLoading,
    submitOtp,
  } = useSubmitOtpCode(inputArr.join(""));

  async function handleSubmitOtp() {
    try {
      const data = await submitOtp();

      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/menu");
    } catch (error) {
      console.error("OTP submission failed:", error);
    }
  }

  return (
    <div>
      <LoadingOverlay isVisible={isLoading} text={"Verifying your code..."} />

      <OtpInput
        otpLength={otpLength}
        inputArr={inputArr}
        refArr={refArr}
        handleOnChange={handleInputChange}
        handleEnterKeyDown={handleInputKeyDown}
        handlePaste={handleInputPaste}
      />

      {submitOtpCodeError && (
        <FormErrorMessage className="mt-3">
          {submitOtpCodeError}
        </FormErrorMessage>
      )}

      <CustomButton
        onClick={handleSubmitOtp}
        className="py-[20px] absolute bottom-[32px] left-[25px] right-[25px]"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Verify OTP"}
      </CustomButton>
    </div>
  );
}
