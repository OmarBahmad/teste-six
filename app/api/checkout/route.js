import { NextResponse } from "next/server";
import { checkout } from "../../lib/data";

export async function GET() {
  return NextResponse.json(checkout);
}
