"use client";

import { Header } from "@/components/Header";
import { CustomButton } from "@/components/ui/CustomButton";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <>
      <Header>
        <CustomButton onClick={() => router.back()} asChild className="w-[45px] h-[45px] grid place-content-center">
          <Link href={"/"}>
            <MoveLeft size={18} />
          </Link>
        </CustomButton>
      </Header>

      <main>{children}</main>
    </>
  );
}
