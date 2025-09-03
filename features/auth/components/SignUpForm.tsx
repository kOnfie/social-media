"use client";

import Link from "next/link";
import Image from "next/image";

import { Facebook } from "lucide-react";
import { cn } from "@/lib/client/utils";

import { CustomButton } from "@/components/ui/CustomButton";
import { SeparatorWithText } from "@/components/ui/SeparatorWithText";

import googleIcon from "@/public/icons/google-icon.svg";

import { useSubmitAuthForm } from "../hooks/useSubmitAuthForm";
import { AuthFormFields } from "./ui/AuthFormFields";

interface SignUpFormProps {
  className?: string;
}

export function SignUpForm({ className }: SignUpFormProps) {
  const { submitAuthForm } = useSubmitAuthForm("signup");

  return (
    <form className={cn(className, "grid")} onSubmit={submitAuthForm}>
      <AuthFormFields />

      <CustomButton className="py-[18.5px] mb-[27px] mt-[54px]" type="submit">
        Sign in
      </CustomButton>

      <SeparatorWithText className="mb-[14px]">
        <span className="text-gray-400 font-poppins">Or with</span>
      </SeparatorWithText>

      <div className="grid gap-[12px]">
        <CustomButton
          type="button"
          className="flex items-center justify-center gap-[8px] py-[17.5px]"
          variant="outline"
        >
          <Image src={googleIcon.src} alt="Google" width={14} height={14} />
          Sign up with Google
        </CustomButton>

        <CustomButton
          type="button"
          className="flex items-center justify-center gap-[8px] py-[17.5px]"
          variant="outline"
        >
          <Facebook size={14} />
          Sign up with Facebook
        </CustomButton>
      </div>

      <p className="mt-[29px] text-[12px] text-[var(--color-text-secondary)] text-center pb-10">
        Do you have an account? Let’s{" "}
        <Link href="/auth/signin" className="text-primary underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
