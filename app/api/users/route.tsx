import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Mike" },
    { id: 2, name: "Segey" },
    { id: 3, name: "Kate" },
  ]);
}
