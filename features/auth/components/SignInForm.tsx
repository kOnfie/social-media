"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Facebook } from "lucide-react";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/client/utils";
import googleIcon from "@/public/icons/google-icon.svg";
import { CustomButton } from "@/shared/components/ui/CustomButton";
import { LoadingOverlay } from "@/shared/components/ui/LoadingOverlay";
import { SeparatorWithText } from "@/shared/components/ui/SeparatorWithText";

import { AUTH_FORM_FIELDS } from "../constants/authFormFields.consts";
import { useSubmitAuthForm } from "../hooks/useSubmitAuthForm";
import { AuthFormSchema, AuthFormSchemaData } from "../schemas/AuthFormSchema";
import { FormErrorMessage } from "./ui/FormErrorMessage";
import { FormFields } from "./ui/FormFields";

interface SigninFormProps {
  className?: string;
}

export function SigninForm({ className }: SigninFormProps) {
  const {
    error: submitAuthFormError,
    isLoading,
    submitAuthForm,
  } = useSubmitAuthForm("signin");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormSchemaData>({ resolver: zodResolver(AuthFormSchema) });

  return (
    <form
      className={cn(className, "grid")}
      onSubmit={handleSubmit(submitAuthForm)}
    >
      <LoadingOverlay
        isVisible={isSubmitting || isLoading}
        text="Submitting your data..."
      />

      {submitAuthFormError && (
        <FormErrorMessage className="text-[20px] uppercase mb-3">
          {submitAuthFormError}
        </FormErrorMessage>
      )}

      <FormFields<AuthFormSchemaData>
        fields={AUTH_FORM_FIELDS}
        register={register}
        errors={errors}
      />

      <Link
        href={"/auth/forgot-password"}
        className="text-primary underline text-[12px] text-left block w-fit"
      >
        Forgot your password?
      </Link>

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
          Sign in with Google
        </CustomButton>

        <CustomButton
          type="button"
          className="flex items-center justify-center gap-[8px] py-[17.5px]"
          variant="outline"
        >
          <Facebook size={14} />
          Sign in with Facebook
        </CustomButton>
      </div>

      <p className="mt-[29px] text-[12px] text-[var(--color-text-secondary)] text-center pb-10">
        Don’t have an account? Let’s{" "}
        <Link href="/auth/signup" className="text-primary underline">
          Sign up
        </Link>
      </p>
    </form>
  );
}
