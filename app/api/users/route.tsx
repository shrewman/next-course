import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.username)
    return NextResponse.json(
      { error: "The username is required" },
      { status: 400 },
    );
  return NextResponse.json(
    {
      id: 1,
      username: body.username,
      email: body.email,
      phone: body.phone,
    },
    { status: 201 },
  );
}
