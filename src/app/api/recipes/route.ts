import { IRecipe } from "@/components/recipes/recipes-list";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const response = await fetch("https://dummyjson.com/recipes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data: { recipes: IRecipe } = await response.json();

  return NextResponse.json(data, { status: 200 });
}
