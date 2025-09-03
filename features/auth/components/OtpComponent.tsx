"use client";

import { useOTP } from "@/features/auth/hooks/useOTP";

import { OtpInput } from "./ui/OtpInput";
import { useSubmitOtpCode } from "../hooks/useSubmitOtpCode";

import { CustomButton } from "@/components/ui/CustomButton";

interface OtpComponentProps {
  otpLength?: number;
  autoSubmitDelay?: number;
}

const OTP_DIGIT_LENGTH = 6;
const AUTO_SUBMIT_DELAY = 750;
const AUTO_COMPLETE = true;

export function OtpComponent({ otpLength = OTP_DIGIT_LENGTH, autoSubmitDelay = AUTO_SUBMIT_DELAY }: OtpComponentProps) {
  const { refArr, inputArr, handleInputChange, handleInputKeyDown, handleInputPaste, handleSubmitOtpCode } = useOTP(
    otpLength,
    autoSubmitDelay,
    AUTO_COMPLETE
  );

  const { submitOtpCodeWithButton } = useSubmitOtpCode(handleSubmitOtpCode, inputArr.join(""));

  return (
    <div>
      <OtpInput
        otpLength={otpLength}
        inputArr={inputArr}
        refArr={refArr}
        handleOnChange={handleInputChange}
        handleEnterKeyDown={handleInputKeyDown}
        handlePaste={handleInputPaste}
      />

      <CustomButton
        onClick={submitOtpCodeWithButton}
        className="py-[20px] absolute bottom-[32px] left-[25px] right-[25px]"
      >
        Verify OTP
      </CustomButton>
    </div>
  );
}
