import { NextResponse, type NextRequest } from "next/server";

// Gate /dashboard/* behind a session cookie. This is a lightweight presence
// check — the real key validation happens in /api/usage (which destroys the
// session if the backend rejects the key).
export function middleware(req: NextRequest) {
  const hasSession = req.cookies.has("fs_dash");
  const { pathname } = req.nextUrl;
  const isLogin = pathname.startsWith("/dashboard/login");

  if (!isLogin && !hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard/login";
    return NextResponse.redirect(url);
  }

  if (isLogin && hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
