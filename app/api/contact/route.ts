import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactHtml,
  buildContactText,
  type ContactPayload,
} from "@/lib/contact-email";

export const runtime = "nodejs";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const trimStr = (v: unknown, max = 500) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: trimStr(body.name, 120),
      company: trimStr(body.company, 120),
      email: trimStr(body.email, 160),
      cadence: trimStr(body.cadence, 40),
      delivery: trimStr(body.delivery, 40),
      volume: trimStr(body.volume, 20),
      message: trimStr(body.message, 4000),
    };

    if (!payload.name) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 },
      );
    }
    if (!isEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "Valid email required." },
        { status: 400 },
      );
    }
    if (payload.message.length < 20) {
      return NextResponse.json(
        { ok: false, error: "Message too short (min 20 chars)." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM ?? "Fastscraping <notes@fastscraping.com>";
    const to = process.env.CONTACT_TO ?? "khalid@fastscraping.com";

    const subject = `New brief · ${payload.name}${payload.company ? ` (${payload.company})` : ""}`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject,
      html: buildContactHtml(payload),
      text: buildContactText(payload),
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send note." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error." },
      { status: 500 },
    );
  }
}
