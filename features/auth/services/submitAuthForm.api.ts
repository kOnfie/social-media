import { RequestUserType } from "../types/RequestUserType.type";

export async function submitAuthFormApi(
  user: RequestUserType,
  variant: "signin" | "signup",
): Promise<any> {
  const res = await fetch(`/api/auth/${variant}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  return res;
}
