"use client";
import { Header } from "@/components/Header";

import { Search } from "lucide-react";
import { ArrowBack } from "@/components/ui/ArrowBack";
import { useRouter } from "next/navigation";

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
