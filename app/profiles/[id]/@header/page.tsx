"use client";

import { useRouter } from "next/navigation";

import { Heart } from "lucide-react";

import { Header } from "@/shared/components/Header";
import { ArrowBack } from "@/shared/components/ui/ArrowBack";

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
