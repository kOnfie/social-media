"use client";

import { Header } from "@/components/Header";
import { ArrowBack } from "@/components/ui/ArrowBack";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileHeader() {
  const router = useRouter();

  return (
    <Header variant="button-title">
      <ArrowBack handleFunction={() => router.back()} />
      <p>Profile</p>
      <Heart />
    </Header>
  );
}
