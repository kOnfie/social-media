"use server";

import { query } from "./db";

export async function getUserByEmail(email: string) {
  const res = await query("SELECT * FROM users WHERE email = $1", [email]);
  if (res.rowCount === null || res.rowCount === 0) {
    return null;
  }

  return res.rows[0];
}
