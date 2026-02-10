import { NextResponse } from "next/server";
import { metrics } from "../../lib/data";

export async function GET() {
  return NextResponse.json(metrics);
}
