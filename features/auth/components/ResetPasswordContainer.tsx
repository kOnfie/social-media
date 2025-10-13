"use client";

import { useOTP } from "../hooks/useOTP";
import { ResetPasswordForm } from "./ResetPasswordForm";
import { OtpInput } from "./ui/OtpInput";

interface ResetPasswordContainerProps {
  emailOtpLength?: number;
}

const OTP_DIGIT_LENGTH = 6;

export const ResetPasswordContainer = ({
  emailOtpLength = OTP_DIGIT_LENGTH,
}: ResetPasswordContainerProps) => {
  const {
    refArr,
    inputArr,
    handleInputChange,
    handleInputKeyDown,
    handleInputPaste,
  } = useOTP(emailOtpLength);

  return (
    <>
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
    </>
  );
};
