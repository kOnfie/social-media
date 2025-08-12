"use client";

import { Header } from "@/components/Header";
import { ArrowBack } from "@/components/ui/ArrowBack";
import { useRouter } from "next/navigation";

export default function SignupHeader() {
  const router = useRouter();

  return (
    <Header>
      <ArrowBack handleFunction={() => router.back()} />
    </Header>
  );
}
