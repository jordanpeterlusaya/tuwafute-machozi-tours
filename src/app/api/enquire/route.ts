import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json(
    {
      ok: false,
      delivered: false,
      message:
        "No durable enquiry delivery service is configured. Use the WhatsApp request flow.",
    },
    { status: 501 },
  );
}
