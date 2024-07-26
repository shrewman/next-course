import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request: NextRequest) {
  const products = [
    { id: 1, name: "Milk", price: 3.5 },
    { id: 2, name: "Bread", price: 2.5 },
    { id: 3, name: "Eggs", price: 2 },
  ];
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, price } = body;
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json({ id: 1, name, price }, { status: 201 });
}
