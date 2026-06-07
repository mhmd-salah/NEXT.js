import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: RouteContext<"/api/products/[id]">,
) {
  const params = await context.params
  console.log(params.id)
  return NextResponse.json({message:"ok"})
}
