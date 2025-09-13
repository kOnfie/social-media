import { Metadata } from "next";
import Link from "next/link";

import { CustomButton } from "@/shared/components/ui/CustomButton";

export const metadata: Metadata = {
  title: "Authentication Error",
  description: "Authentication Error page",
};

export default function AuthErrorPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-border p-8 text-center space-y-6">
        <div
          className="mx-auto flex items-center justify-center rounded-full w-16 h-16 bg-green-light shadow"
          style={{ backgroundColor: "var(--color-green-light)" }}
        >
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1
          className="text-3xl font-bold text-primary mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          Authentication error
        </h1>
        <p
          className="text-md text-text-secondary mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Authorization session has expired or is invalid. Please try logging in
          again.
        </p>

        <CustomButton asChild className="w-full py-3 px-10">
          <Link href={"/menu"}>Main page</Link>
        </CustomButton>
      </div>
    </div>
  );
}
