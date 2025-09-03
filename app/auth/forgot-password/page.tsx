"use client";

import { Container } from "@/components/Container";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";
import { useForgotPassword } from "@/features/auth/hooks/useForgotPassword";

export default function ForgotPasswordPage({}) {
  const { submitForgotPasswordForm } = useForgotPassword();

  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">Forgot Password</h1>

        <p className="text-[var(--color-text-secondary)] text-[14px]">
          Please enter your email address to receive a password reset link.
        </p>
      </div>

      <ForgotPasswordForm handleOnSubmit={submitForgotPasswordForm} />
    </Container>
  );
}
