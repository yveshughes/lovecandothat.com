"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE, passwordMatches, token } from "./gate";

export async function unlock(formData: FormData) {
  const candidate = String(formData.get("password") ?? "");
  if (passwordMatches(candidate)) {
    const jar = await cookies();
    jar.set(COOKIE, token(process.env.PRIVATE_PASSWORD as string), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/private",
    });
    redirect("/private");
  }
  redirect("/private?e=1");
}
