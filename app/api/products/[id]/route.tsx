import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const body = await request.json();
  const { name, price } = body;

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const targetProduct = await prisma.product.findUnique({ where: { id } });
  if (!targetProduct) {
    return NextResponse.json({ error: "Product not found" }, { status: 400 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id },
    data: { name, price },
  });

  return NextResponse.json(updatedProduct);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const targetProduct = await prisma.product.findUnique({ where: { id } });

  if (!targetProduct) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  await prisma.product.delete({ where: { id } });
  return NextResponse.json({});
}
