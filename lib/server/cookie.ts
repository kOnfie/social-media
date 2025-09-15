import { serialize, SerializeOptions } from "cookie";

export function createCookie(name: string, value: string) {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: process.env.COOKIE_PATH || "/",
    maxAge: 60 * 60 * 24 * 7,
  } as SerializeOptions;

  return serialize(name, value, cookieOptions);
}
