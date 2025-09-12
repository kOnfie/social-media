"use client";

import { Header } from "@/shared/components/Header";
import { ArrowBack } from "@/shared/components/ui/ArrowBack";
import { useRouter } from "next/navigation";



export default function FollowersHeader() {
  const router = useRouter();

  return (
    <Header variant="button-title">
      <ArrowBack handleFunction={() => router.back()} />
      <p>Followers (44)</p>
    </Header>
  );
}
