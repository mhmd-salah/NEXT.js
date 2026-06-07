"use server";

import { ILoginFields, ILoginResponse } from "@/lib/types/auth";
import { cookies } from "next/headers";

export async function login({ username, password }: ILoginFields) {
  const res = await fetch(
    "https://exam-app.elevate-bootcamp.cloud/api/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        
      },
    },
  );
  const data: ApiResponse<ILoginResponse> = await res.json();
  if (data.status == false) throw new Error(data.message);
  if (data.payload) {
    const cookiesStore = await cookies();
    cookiesStore.set("token", data.payload?.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      maxAge: 60 * 60 * 24 * 7,
      sameSite:"lax"
    });
  }
  return data;
}
