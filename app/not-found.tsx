import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="block"
      style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">Error · 404</span>
        <h1 className="display" style={{ marginTop: 16 }}>
          This page <em>slipped through.</em>
        </h1>
        <p
          style={{
            color: "var(--muted)",
            maxWidth: "46ch",
            margin: "16px auto 28px",
            lineHeight: 1.6,
          }}
        >
          The link may be broken, or the page moved. Let&apos;s get you back to
          something that works.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary">
            Back home <span className="arrow">→</span>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
