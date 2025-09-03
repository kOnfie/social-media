"use client";

import { FormEvent, useState } from "react";

import { cn } from "@/lib/client/utils";

import { CustomButton } from "@/components/ui/CustomButton";

import { ActiveFieldResetPasswordType } from "../types/ActiveFieldResetPasswordType.type";

interface ResetPasswordFormProps {
  submitResetPasswordForm: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function ResetPasswordForm({ submitResetPasswordForm }: ResetPasswordFormProps) {
  const [activeField, setActiveField] = useState<ActiveFieldResetPasswordType>(null);

  return (
    <form onSubmit={submitResetPasswordForm}>
      <div
        className={cn(
          "grid border border-[var(--color-border-light)] border-solid py-[13px] px-[18px] rounded-[10px] h-[69px] transition-all mb-[18px]",
          activeField === "password" && "border-primary"
        )}
      >
        <label
          className={cn("text-primary mb-[3px] text-[12px]", activeField !== "password" && "hidden")}
          htmlFor="password"
        >
          Enter your new password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your new password"
          className="focus:outline-none text-[14px]"
          onFocus={() => setActiveField("password")}
          onBlur={() => setActiveField(null)}
        />
      </div>

      <div
        className={cn(
          "grid border border-[var(--color-border-light)] border-solid py-[13px] px-[18px] rounded-[10px] h-[69px] transition-all mb-[18px]",
          activeField === "confirmPassword" && "border-primary"
        )}
      >
        <label
          className={cn("text-primary mb-[3px] text-[12px]", activeField !== "confirmPassword" && "hidden")}
          htmlFor="confirmPassword"
        >
          Confirm your new password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
          className="focus:outline-none text-[14px]"
          onFocus={() => setActiveField("confirmPassword")}
          onBlur={() => setActiveField(null)}
        />
      </div>

      <CustomButton className="py-[20px] absolute bottom-[32px] left-[25px] right-[25px]" type="submit">
        Reset Password
      </CustomButton>
    </form>
  );
}
