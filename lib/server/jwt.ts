import jwt, { SignOptions } from "jsonwebtoken";

interface UserData {
  id: number;
  email: string;
  emailVerified: boolean;
}

export function generateJwtToken(user: UserData) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    console.error("JWT_SECRET don't setup in variables env");
    throw new Error("Server configuration error.");
  }

  const jwtOptions = {
    expiresIn: process.env.JWT_EXPIRES_IN,
  } as SignOptions;

  return jwt.sign(user, jwtSecret, jwtOptions);
}
