import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, type DashSession } from "@/lib/session";
import { fetchUsage } from "@/lib/scrape-api";

export const runtime = "nodejs";

// Proxy: read the logged-in client's key from the session cookie, call the
// backend server-side, return the JSON. The key never reaches the browser.
export async function GET(req: Request) {
  const session = await getIronSession<DashSession>(await cookies(), sessionOptions);
  if (!session.apiKey) {
    return NextResponse.json({ ok: false, error: "Not authenticated." }, { status: 401 });
  }

  const raw = new URL(req.url).searchParams.get("interval");
  const parsed = parseInt(raw ?? "30", 10);
  const interval = Math.min(365, Math.max(1, Number.isFinite(parsed) ? parsed : 30));

  let res: Response;
  try {
    res = await fetchUsage(session.apiKey, interval);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cannot reach the usage service." },
      { status: 502 },
    );
  }

  // Key was revoked or rotated on the backend — drop the session.
  if (res.status === 401 || res.status === 403) {
    session.destroy();
    return NextResponse.json({ ok: false, error: "Your API key is no longer valid." }, { status: 401 });
  }
  if (!res.ok) {
    return NextResponse.json({ ok: false, error: "Usage service error." }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
