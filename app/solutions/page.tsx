import Link from "next/link";
import SolutionsStack from "@/components/SolutionsStack";
import "../styles/about.css";
import "../styles/sol.css";
import "../styles/sol-stack.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Six battle-tested data products — pricing intelligence, marketplace data, job market insights, LinkedIn data, web APIs, and ETL pipelines.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions · Fastscraping",
    description:
      "Six data products: pricing intel, marketplace, jobs, LinkedIn, web APIs, ETL.",
    url: "/solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions · Fastscraping",
    description: "Six battle-tested data products.",
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* ===================== SOLUTIONS HERO ===================== */}
      <section className="sol-hero" data-screen-label="01 Solutions hero">
        <div className="container">
          <div className="ah-band">
            <span className="eyebrow">Business solutions</span>
            <div className="ah-band-right">
              <span className="kbd">6 solutions</span>
              <span className="kbd">→</span>
              <span className="kbd">Any platform</span>
              <span className="kbd">→</span>
              <span className="kbd">Any scale</span>
            </div>
          </div>

          <div className="sol-headline">
            <h1 className="display sh-h1">
              Data solutions
              <em>for every challenge.</em>
            </h1>
            <aside className="sh-deck">
              <p>
                Six battle-tested data products, each built around the hardest problem in its
                category. Pick the one that fits — or mix and match.
              </p>
              <Link href="#sol-01" className="btn btn-primary" style={{ marginTop: 24 }}>
                Explore the six
                <span className="arrow">↓</span>
              </Link>
            </aside>
          </div>

          <div className="sol-jump">
            <Link href="#pricing-intelligence" className="sj">
              <span className="sj-i">01</span>
              <span className="sj-n">Pricing intelligence</span>
              <span className="sj-m">60M+/day</span>
            </Link>
            <Link href="#marketplace-intelligence" className="sj">
              <span className="sj-i">02</span>
              <span className="sj-n">Marketplace intelligence</span>
              <span className="sj-m">10M+</span>
            </Link>
            <Link href="#job-market" className="sj">
              <span className="sj-i">03</span>
              <span className="sj-n">Job market insights</span>
              <span className="sj-m">1.4M/wk</span>
            </Link>
            <Link href="#linkedin-data" className="sj">
              <span className="sj-i">04</span>
              <span className="sj-n">LinkedIn data</span>
              <span className="sj-m">100M/mo</span>
            </Link>
            <Link href="#web-data-apis" className="sj">
              <span className="sj-i">05</span>
              <span className="sj-n">Web data APIs</span>
              <span className="sj-m">200ms</span>
            </Link>
            <Link href="#data-pipelines" className="sj">
              <span className="sj-i">06</span>
              <span className="sj-n">Pipelines &amp; ETL</span>
              <span className="sj-m">99% SLA</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SOLUTIONS · CASE-FILE STACK ===================== */}
      <section className="block sol-stack-wrap" data-screen-label="02 Solutions stack">
        <div className="container">
          <div className="sol-stack-head">
            <div>
              <span className="eyebrow">Six solutions · one team</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Open a <em>case file.</em>
              </h2>
              <div className="ssh-meta">
                <span>Click to expand · only one open at a time</span>
              </div>
            </div>
            <p>
              Each solution is its own case file — collapsed by default so you can scan the
              index, expandable into a full editorial spread when you want the detail. No
              alternating left/right walls of text. No infinite scroll. Just the data, the
              visual, and how to start.
            </p>
          </div>

          <SolutionsStack />
        </div>
      </section>

      {/* ===================== MIX & MATCH ===================== */}
      <section className="block mix-block" data-screen-label="08 Mix">
        <div className="container">
          <div className="mix-card">
            <div className="mix-left">
              <span className="eyebrow">Not sure which fits?</span>
              <h2 className="display">
                You can <em>mix and match.</em>
              </h2>
              <p>
                The six solutions aren&apos;t silos — most clients run two or three together.
                Pricing intelligence paired with marketplace data. LinkedIn data delivered
                through a custom web API. Or a single ETL pipeline that consolidates four of the
                six. Book a free consultation and we&apos;ll map the right combination for your
                data challenges.
              </p>
              <div className="mix-cta">
                <Link href="#contact" className="btn btn-accent">
                  Book a free consultation <span className="arrow">→</span>
                </Link>
                <a href="mailto:khalid@fastscraping.com" className="btn btn-ghost">
                  Email Khalid
                </a>
              </div>
            </div>
            <div className="mix-right">
              <div className="mix-combo">
                <div className="mc-h">Most common combos</div>
                <div className="mc-row">
                  <span className="mc-tag">Pricing</span>
                  <span className="mc-plus">+</span>
                  <span className="mc-tag">Marketplace</span>
                  <span className="mc-note">→ retail intelligence stack</span>
                </div>
                <div className="mc-row">
                  <span className="mc-tag">LinkedIn</span>
                  <span className="mc-plus">+</span>
                  <span className="mc-tag">Web APIs</span>
                  <span className="mc-note">→ enrichment + go-to-market</span>
                </div>
                <div className="mc-row">
                  <span className="mc-tag">Jobs</span>
                  <span className="mc-plus">+</span>
                  <span className="mc-tag">Pipelines</span>
                  <span className="mc-note">→ talent &amp; comp analytics</span>
                </div>
                <div className="mc-row">
                  <span className="mc-tag">Marketplace</span>
                  <span className="mc-plus">+</span>
                  <span className="mc-tag">Pipelines</span>
                  <span className="mc-note">→ daily warehouse refresh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        id="contact"
        data-screen-label="09 CTA"
      >
        <div className="container">
          <div className="cta">
            <div>
              <span className="eyebrow">Get started</span>
              <h2 style={{ marginTop: 18 }}>
                Tell us your <em>data problem.</em>
              </h2>
              <p>
                Whichever solution (or combination) you need, the process is the same: a
                30-minute intro call, a free sample within 48–72 hours, then a clear quote —
                and we&apos;re shipping inside two weeks.
              </p>
              <div className="hero-bullets" style={{ marginTop: 28 }}>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free 30-min call
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free sample data
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  No commitment
                </span>
              </div>
            </div>

            <div className="cta-card">
              <div className="label">Direct line</div>
              <div className="person">
                <div className="av">KM</div>
                <div>
                  <div className="n">Md Khalid Mahmud Shawon</div>
                  <div className="r">Founder · Replies personally</div>
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
              <div className="meta-row">
                <span className="k">Sample data</span>
                <span className="v">Within 48–72 hours</span>
              </div>
              <div className="actions">
                <a href="#" className="btn btn-accent">Book a demo</a>
                <a href="mailto:khalid@fastscraping.com" className="btn btn-ghost">
                  Email directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
