"use client";

import { FormEvent, useState } from "react";

import { cn } from "@/lib/client/utils";

import { CustomButton } from "@/components/ui/CustomButton";

interface ForgotPasswordFormProps {
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function ForgotPasswordForm({ handleOnSubmit }: ForgotPasswordFormProps) {
  const [activeField, setActiveField] = useState<boolean>(false);

  return (
    <form onSubmit={handleOnSubmit}>
      <div
        className={cn(
          "grid border border-[var(--color-border-light)] border-solid py-[13px] px-[18px] rounded-[10px] h-[69px] transition-all mb-[18px]",
          activeField && "border-primary"
        )}
      >
        <label className={cn("text-primary mb-[3px] text-[12px]", !activeField && "hidden")} htmlFor="email">
          Enter your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="focus:outline-none text-[14px]"
          onFocus={() => setActiveField(true)}
          onBlur={() => setActiveField(false)}
        />
      </div>

      <CustomButton className="py-[20px] absolute bottom-[32px] left-[25px] right-[25px]" type="submit">
        Send Reset Link
      </CustomButton>
    </form>
  );
}
