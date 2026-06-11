const BASE = process.env.SCRAPE_API_BASE ?? "http://86.48.2.59:8040";

// Server-side fetch to the Shopee usage backend. The X-API-Key header is added
// here, on the server, so the key never travels to the browser.
export async function fetchUsage(apiKey: string, interval: number): Promise<Response> {
  return fetch(`${BASE}/me/usage?interval=${interval}`, {
    method: "GET",
    headers: { "X-API-Key": apiKey },
    cache: "no-store",
    // backend can take ~1.5s; give it room
    signal: AbortSignal.timeout(20000),
  });
}
