import { CustomButton } from "@/components/ui/CustomButton";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  description: "Page not found :(. 404",
};

export default function NotFound() {
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
            <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2" style={{ color: "var(--color-primary)" }}>
          Page not found
        </h1>
        <p className="text-md text-text-secondary mb-6" style={{ color: "var(--color-text-secondary)" }}>
          You may have entered an invalid address or the page has been deleted.
        </p>

        <CustomButton asChild className="w-full py-3 px-10">
          <Link href={"/"}>Main page.</Link>
        </CustomButton>
      </div>
    </div>
  );
}
