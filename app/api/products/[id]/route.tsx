import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  return NextResponse.json({ id: params.id, name: "Chips", price: 5 });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const { name, price } = body;
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const product = { id: 2, name, price };
  console.log(product);
  return NextResponse.json(product);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (params.id > 20) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  console.log(`User with id ${params.id} is deleted`);
  return NextResponse.json({});
}
