import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, type DashSession } from "@/lib/session";
import { fetchUsage } from "@/lib/scrape-api";

export const runtime = "nodejs";

// Login = validate the API key against the backend, then store it encrypted
// in the session cookie. The key itself is the identity.
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { apiKey?: unknown };
  const key = typeof body.apiKey === "string" ? body.apiKey.trim() : "";

  if (!key) {
    return NextResponse.json({ ok: false, error: "API key is required." }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetchUsage(key, 1);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cannot reach the usage service. Try again." },
      { status: 502 },
    );
  }

  if (res.status === 401 || res.status === 403) {
    return NextResponse.json({ ok: false, error: "Invalid API key." }, { status: 401 });
  }
  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "Usage service error." }, { status: 502 });
  }

  const data = (await res.json().catch(() => ({}))) as { owner?: string };

  const session = await getIronSession<DashSession>(await cookies(), sessionOptions);
  session.apiKey = key;
  session.owner = data.owner ?? "client";
  await session.save();

  return NextResponse.json({ ok: true, owner: session.owner });
}
