import { SignupForm } from "@/features/auth/components/SignupForm";
import { Container } from "@/shared/components/Container";

export default function SignupPage() {
  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">
          Hello! Glad to see you
        </h1>

        <p className="text-[var(--color-text-secondary)] text-[14px]">
          Sign up your account
        </p>
      </div>

      <SignupForm />
    </Container>
  );
}
