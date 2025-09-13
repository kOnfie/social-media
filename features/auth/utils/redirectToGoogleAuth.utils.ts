import { redirect } from "next/navigation";

export function redirectToGoogleAuth() {
  redirect("/api/auth/google");
}
