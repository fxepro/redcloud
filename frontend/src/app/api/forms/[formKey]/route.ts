import { NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/send-form-email";

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ formKey: string }> },
) {
  const { formKey } = await params;

  if (!/^[a-z0-9-]+$/.test(formKey)) {
    return NextResponse.json({ message: "Invalid form." }, { status: 400 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid submission." }, { status: 400 });
  }

  if (payload._hp) {
    return NextResponse.json({ message: "Thanks — we'll be in touch shortly." });
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const sent = await sendFormEmail(formKey, payload);
  if (!sent.ok) {
    return NextResponse.json({ message: sent.error }, { status: 503 });
  }

  return NextResponse.json({ message: "Thanks — we'll be in touch shortly." });
}
