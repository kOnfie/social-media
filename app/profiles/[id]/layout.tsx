import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Profile of Tom Cruise | Social Media Platform",
  description: "",
};

export default function ProfileLayout({
  children,
  header,
}: Readonly<{
  children: ReactNode;
  header: ReactNode;
}>) {
  return (
    <>
      {header}

      <main>{children}</main>
    </>
  );
}
