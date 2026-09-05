import { NextResponse } from "next/server";
import { planJourney } from "@/lib/planner";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false }, { status: 400 });
  return NextResponse.json({ ok: true, plan: planJourney(body) });
}
