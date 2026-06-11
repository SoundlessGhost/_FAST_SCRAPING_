import type { SessionOptions } from "iron-session";

// Session for the client usage dashboard. The client's API key IS the login —
// we store it encrypted in an httpOnly cookie so it never reaches browser JS.
export interface DashSession {
  apiKey?: string;
  owner?: string;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET ?? "",
  cookieName: "fs_dash",
  // ttl: 0 = the session seal never expires; the long maxAge keeps the cookie
  // across browser restarts. Effect: the client stays logged in until they log
  // out, or until the key is revoked on the backend.
  ttl: 0,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 400, // ~400 days (browser maximum)
  },
};
