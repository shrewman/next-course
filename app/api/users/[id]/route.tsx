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
