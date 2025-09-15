"use client";

import { useRouter } from "next/navigation";

import { Header } from "@/shared/components/Header";
import { ArrowBack } from "@/shared/components/ui/ArrowBack";

export default function SigninHeader() {
  const router = useRouter();

  return (
    <Header>
      <ArrowBack handleFunction={() => router.back()} />
    </Header>
  );
}
