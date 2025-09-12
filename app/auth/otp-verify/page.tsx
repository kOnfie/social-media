import { OtpComponent } from "@/features/auth/components/OtpComponent";
import { ResendOtpCodeLink } from "@/features/auth/components/ui/ResendOtpCodeLink";
import { Container } from "@/shared/components/Container";

export default function OtpVerifyPage() {
  return (
    <Container>
      <div className="text-center my-[40px]">
        <h1 className="text-[40px] font-semibold text-center">
          OTP Verification
        </h1>

        <p className="text-[var(--color-text-secondary)] text-[14px]">
          Verify your OTP to access your account
        </p>
      </div>

      <OtpComponent otpLength={6} />

      <ResendOtpCodeLink />
    </Container>
  );
}
