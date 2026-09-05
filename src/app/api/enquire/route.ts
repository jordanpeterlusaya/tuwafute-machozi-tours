import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  console.info("[enquire]", {
    name: body.name,
    email: body.email,
    dates: body.dates,
    guests: body.guests,
    interest: body.interest,
  });

  return NextResponse.json({ ok: true });
}
