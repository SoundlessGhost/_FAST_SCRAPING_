import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fastscraping — Your web scraping team on demand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f1ea",
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#131613",
              color: "#faf8f3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontStyle: "italic",
              fontSize: 56,
            }}
          >
            f
          </div>
          <div style={{ fontSize: 36, color: "#131613", fontWeight: 600 }}>
            Fastscraping
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              color: "#131613",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            We handle your <span style={{ fontStyle: "italic", color: "#0e5d44" }}>web scraping</span> pipeline.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6b6e69",
              maxWidth: 900,
            }}
          >
            Structured data delivered reliably, at any scale — bypassing Cloudflare, DataDome and login walls.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#6b6e69",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>· Cloudflare</span>
            <span>· DataDome</span>
            <span>· PerimeterX</span>
            <span>· Akamai</span>
          </div>
          <div style={{ color: "#0e5d44" }}>fastscraping.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
