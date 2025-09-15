"use client";

import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";
import { OtpInput } from "@/features/auth/components/ui/OtpInput";
import { useOTP } from "@/features/auth/hooks/useOTP";
import { Container } from "@/shared/components/Container";

const OTP_DIGIT_LENGTH = 6;

export default function ResetPasswordPage({}) {
  const {
    refArr,
    inputArr,
    handleInputChange,
    handleInputKeyDown,
    handleInputPaste,
  } = useOTP(OTP_DIGIT_LENGTH);

  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">
          Reset Password
        </h1>
      </div>

      <p className="text-[var(--color-text-secondary)] text-[14px] text-center mb-5">
        Please enter your code.
      </p>
      <OtpInput
        otpLength={OTP_DIGIT_LENGTH}
        inputArr={inputArr}
        refArr={refArr}
        handleOnChange={handleInputChange}
        handleEnterKeyDown={handleInputKeyDown}
        handlePaste={handleInputPaste}
      />

      <p className="text-[var(--color-text-secondary)] text-[14px] text-center mb-5 mt-10">
        Please enter your new password.
      </p>

      <ResetPasswordForm otpCode={inputArr.join("")} />
    </Container>
  );
}
