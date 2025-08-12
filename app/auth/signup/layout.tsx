import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Social Media Platform",
  description:
    "Sign Up to your account to connect with friends, share moments, and discover new content on our social media platform.",
};

export default function SignupLayout({
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
