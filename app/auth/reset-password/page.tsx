"use client";

import { useSearchParams } from "next/navigation";

import { useOTP } from "@/features/auth/hooks/useOTP";

import { OtpInput } from "@/features/auth/components/ui/OtpInput";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";
import { useResetPassword } from "@/features/auth/hooks/useResetPassword";

import { Container } from "@/components/Container";

const OTP_DIGIT_LENGTH = 6;
const AUTO_SUBMIT_DELAY = 750;

export default function ResetPasswordPage({}) {
  const { refArr, inputArr, handleInputChange, handleInputKeyDown, handleInputPaste } = useOTP(
    OTP_DIGIT_LENGTH,
    AUTO_SUBMIT_DELAY
  );

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const { error: resetPasswordError, submitResetPasswordForm } = useResetPassword(email, inputArr.join(""));

  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">Reset Password</h1>
      </div>

      {resetPasswordError && <p className="text-red-500 text-center mb-3 font-semibold">{resetPasswordError}</p>}

      <p className="text-[var(--color-text-secondary)] text-[14px] text-center mb-5">Please enter your code.</p>
      <OtpInput
        otpLength={OTP_DIGIT_LENGTH}
        inputArr={inputArr}
        refArr={refArr}
        handleOnChange={handleInputChange}
        handleEnterKeyDown={handleInputKeyDown}
        handlePaste={handleInputPaste}
      />

      <p className="text-[var(--color-text-secondary)] text-[14px] text-center mb-5">Please enter your new password.</p>

      <ResetPasswordForm submitResetPasswordForm={submitResetPasswordForm} />
    </Container>
  );
}
