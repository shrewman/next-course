import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const { username, email, phone } = body;

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await res.json();

  if (!user.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: params.id, username, email, phone });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await res.json();
  if (!user.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({});
}
