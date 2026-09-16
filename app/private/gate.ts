import { createHash, timingSafeEqual } from "node:crypto";

/* The private page is a door, not a vault. One shared password, set as the
   PRIVATE_PASSWORD environment variable (Vercel project settings, and .env.local
   for local dev). Entering it sets a session cookie holding a hash of the
   password, so the content is never sent to a browser that has not unlocked it. */

export const COOKIE = "lcdt";

export function token(secret: string): string {
  return createHash("sha256").update(secret).digest("hex");
}

export function passwordMatches(candidate: string): boolean {
  const secret = process.env.PRIVATE_PASSWORD;
  if (!secret) return false;
  const a = Buffer.from(token(candidate));
  const b = Buffer.from(token(secret));
  return a.length === b.length && timingSafeEqual(a, b);
}

export function isUnlocked(cookieValue: string | undefined): boolean {
  const secret = process.env.PRIVATE_PASSWORD;
  if (!secret || !cookieValue) return false;
  const a = Buffer.from(cookieValue);
  const b = Buffer.from(token(secret));
  return a.length === b.length && timingSafeEqual(a, b);
}
