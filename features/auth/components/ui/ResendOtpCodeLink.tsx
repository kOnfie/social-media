"use client";

import { resendOtpCodeUtil } from "../../utils/resendOtpCode.util";

export function ResendOtpCodeLink() {
  return (
    <button
      type="button"
      onClick={resendOtpCodeUtil}
      className="mt-4 cursor-pointer text-[var(--color-primary)] text-right underline text-[12px] bg-transparent border-none p-0"
    >
      Resend code
    </button>
  );
}
