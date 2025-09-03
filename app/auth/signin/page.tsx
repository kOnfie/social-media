import { SignInForm } from "@/features/auth/components/SignInForm";

import { Container } from "@/components/Container";

export default function SigninPage() {
  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">Hello Again!</h1>

        <p className="text-[var(--color-text-secondary)] text-[14px]">Sign in to your account</p>
      </div>

      <SignInForm />
    </Container>
  );
}
