import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP Verification | Social Media Platform",
  description:
    "Verify your OTP to securely access your account on our social media platform.",
};

export default function OtpVerifyLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <>
      {header}

      <main>{children}</main>
    </>
  );
}
