"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomButton } from "@/shared/components/ui/CustomButton";
import { LoadingOverlay } from "@/shared/components/ui/LoadingOverlay";

import { FORGOT_PASSWORD_FORM_FIELDS } from "../constants/forgotPasswordFormFields.consts";
import { useForgotPassword } from "../hooks/useForgotPassword";
import {
  ForgotPasswordFormSchema,
  ForgotPasswordFormSchemaData,
} from "../schemas/ForgotPasswordFormSchema";
import { FormErrorMessage } from "./ui/FormErrorMessage";
import { FormFields } from "./ui/FormFields";

export function ForgotPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormSchemaData>({
    resolver: zodResolver(ForgotPasswordFormSchema),
  });

  const {
    error: submitForgotPasswordError,
    isLoading,
    submitForgotPasswordForm,
  } = useForgotPassword();

  async function handleSubmitForgotPasswordForm(
    data: ForgotPasswordFormSchemaData,
  ) {
    console.log("submitForgotPasswordError:", submitForgotPasswordError);
    await submitForgotPasswordForm(data);

    if (!submitForgotPasswordError) {
      router.push(`/auth/reset-password?email=${data.email}`);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForgotPasswordForm)}>
      <LoadingOverlay
        isVisible={isSubmitting || isLoading}
        text="Submitting your data..."
      />

      {submitForgotPasswordError && (
        <FormErrorMessage className="mb-[30px] uppercase">
          {submitForgotPasswordError}
        </FormErrorMessage>
      )}

      <FormFields<ForgotPasswordFormSchemaData>
        fields={FORGOT_PASSWORD_FORM_FIELDS}
        register={register}
        errors={errors}
      />

      <CustomButton
        className="py-[20px] absolute bottom-[32px] left-[25px] right-[25px]"
        type="submit"
      >
        Send Reset Link
      </CustomButton>
    </form>
  );
}
