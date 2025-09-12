"use client";

import { useRouter } from "next/navigation";

import { Search } from "lucide-react";

import { Header } from "@/shared/components/Header";
import { ArrowBack } from "@/shared/components/ui/ArrowBack";

export default function NotificationHeader() {
  const router = useRouter();
  return (
    <Header variant="button-title">
      <ArrowBack handleFunction={() => router.back()} />
      <p>Notification (32)</p>
      <Search />
    </Header>
  );
}
