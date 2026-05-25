import Link from "next/link";
import type { Metadata } from "next";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import KMAvatar from "@/components/KMAvatar";
import "../styles/about.css";
import "../styles/cases.css";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Field notes from real Fastscraping client engagements — the brief, the obstacles, the engineering call, and the actual numbers six months later.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case studies · Fastscraping",
    description: "8 production stories — ticketing, real estate, LinkedIn, retail, AI corpus.",
    url: "/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case studies · Fastscraping",
    description: "Stories from production pipelines.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* MASTHEAD */}
      <section className="cs-masthead" data-screen-label="01 Masthead">
        <div className="container">
          <div className="cs-flag">
            <div className="cs-flag-l">
              <span className="cs-issue">ISSUE 12 · 2026</span>
              <span className="cs-rule"></span>
              <span className="cs-pub">A FASTSCRAPING PUBLICATION</span>
            </div>
            <div className="cs-flag-r">
              <span className="cs-flag-meta">Stories from production pipelines</span>
            </div>
          </div>

          <div className="cs-mast-grid">
            <h1 className="cs-mast-title">
              <span>The</span>
              <em>Casebook.</em>
            </h1>
            <aside className="cs-mast-deck">
              <p>
                <strong>Field notes</strong> from real client engagements — the brief, the
                obstacles, the engineering call, and the actual numbers six months later. The
                names are real, the quotes are real, and the metrics come straight out of our
                ops dashboard.
              </p>
              <div className="cs-mast-stats">
                <div>
                  <div className="cs-mast-v">8</div>
                  <div className="cs-mast-l">Featured stories</div>
                </div>
                <div>
                  <div className="cs-mast-v">2.4B+</div>
                  <div className="cs-mast-l">Records delivered</div>
                </div>
                <div>
                  <div className="cs-mast-v">24mo</div>
                  <div className="cs-mast-l">Avg tenure</div>
                </div>
              </div>
            </aside>
          </div>

          <CaseStudiesGrid />
        </div>
      </section>

      {/* BECOME A CASE */}
      <section
        className="block"
        style={{ paddingTop: 60 }}
        data-screen-label="04 Become a case"
      >
        <div className="container">
          <div className="cta">
            <div>
              <span className="eyebrow">Want your story in the next issue?</span>
              <h2 style={{ marginTop: 18 }}>
                Let&apos;s build the <em>next case study.</em>
              </h2>
              <p>
                Half of the stories on this page started as a single email. Tell us what
                you&apos;re trying to scrape, what&apos;s getting in the way, and we&apos;ll
                tell you honestly whether it&apos;s a story we can write together.
              </p>
            </div>

            <div className="cta-card">
              <div className="label">Next step</div>
              <div className="person">
                <KMAvatar variant="large" />
                <div>
                  <div className="n">Md Khalid Mahmud Shawon</div>
                  <div className="r">Founder · replies personally</div>
                </div>
              </div>
              <div className="meta-row">
                <span className="k">Email</span>
                <span className="v" style={{ fontFamily: "var(--font-mono)", fontSize: 12.5 }}>
                  khalid@fastscraping.com
                </span>
              </div>
              <div className="meta-row">
                <span className="k">Response time</span>
                <span className="v">&lt; 24 hours</span>
              </div>
              <div className="meta-row">
                <span className="k">First call</span>
                <span className="v">30 min · no slides</span>
              </div>
              <div className="actions">
                <Link href="/contact" className="btn btn-accent">
                  Send a brief
                </Link>
                <Link href="/pricing" className="btn btn-ghost">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
