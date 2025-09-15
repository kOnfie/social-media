"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useResetPassword } from "@/features/auth/hooks/useResetPassword";
import { CustomButton } from "@/shared/components/ui/CustomButton";
import { LoadingOverlay } from "@/shared/components/ui/LoadingOverlay";

import { RESET_PASSWORD_FORM_FIELDS } from "../constants/resetPasswordFormFields.consts";
import {
  ResetPasswordFormData,
  ResetPasswordFormSchema,
} from "../schemas/ResetPasswordFormSchema";
import { FormErrorMessage } from "./ui/FormErrorMessage";
import { FormFields } from "./ui/FormFields";

interface ResetPasswordFormProps {
  otpCode: string;
}

export function ResetPasswordForm({ otpCode }: ResetPasswordFormProps) {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordFormSchema),
  });

  const {
    error: resetPasswordError,
    isLoading,
    submitResetPasswordForm,
  } = useResetPassword(email, otpCode);

  async function handleSubmitResetPasswordForm(
    formData: ResetPasswordFormData,
  ) {
    const responseData = await submitResetPasswordForm(formData);

    localStorage.setItem("user", JSON.stringify(responseData.user));
    router.push(`/menu`);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitResetPasswordForm)}>
      <LoadingOverlay
        isVisible={isSubmitting && isLoading}
        text="Submit your data..."
      />

      <FormFields<ResetPasswordFormData>
        fields={RESET_PASSWORD_FORM_FIELDS}
        register={register}
        errors={errors}
      />

      {resetPasswordError && (
        <FormErrorMessage>{resetPasswordError}</FormErrorMessage>
      )}

      <CustomButton
        className="py-[20px] absolute bottom-[32px] left-[25px] right-[25px]"
        type="submit"
      >
        Reset Password
      </CustomButton>
    </form>
  );
}
