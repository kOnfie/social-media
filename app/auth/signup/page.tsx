import { AuthForm } from "@/components/AuthForm";
import { Container } from "@/components/Container";

export default function SignupPage() {
  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">Hello! Glad to see you</h1>

        <p className="text-[var(--color-text-secondary)] text-[14px]">Sign up your account</p>
      </div>

      <AuthForm variant="signup" />
    </Container>
  );
}
