import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const payload: { name: string } = await req.json();
  const searchParams = req.nextUrl.searchParams;
  console.log(searchParams.toString());

  if (!payload.name) {
    return NextResponse.json({ massage: "name is req" }, { status: 400 });
  }
  return NextResponse.json({ message: `hello ${payload.name}` });
}
