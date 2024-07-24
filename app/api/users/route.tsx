import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  return NextResponse.json(users);
}
