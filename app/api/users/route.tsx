import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
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
