import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export async function GET(request: NextRequest, { params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await res.json();
  if (!user.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const { username, email, phone } = body;

  if (!username)
    return NextResponse.json(
      { error: "The username is required" },
      { status: 400 },
    );

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await res.json();

  if (!user.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: params.id, username, email, phone });
}

