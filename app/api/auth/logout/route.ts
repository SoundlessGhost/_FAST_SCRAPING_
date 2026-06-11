import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions, type DashSession } from "@/lib/session";

export const runtime = "nodejs";

export async function POST() {
  const session = await getIronSession<DashSession>(await cookies(), sessionOptions);
  session.destroy();
  return NextResponse.json({ ok: true });
}
