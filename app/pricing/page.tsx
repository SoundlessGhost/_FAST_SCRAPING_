import Link from "next/link";
import PriceConfigurator from "@/components/PriceConfigurator";
import Faq from "@/components/Faq";
import KMAvatar from "@/components/KMAvatar";
import "../styles/about.css";import "../styles/pricing.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Custom pricing built around your data needs. Quote in < 24 hours, sample in 48–72 hours. No setup fees, month-to-month.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing · Fastscraping",
    description:
      "Custom pricing. Quote in < 24 hours. Month-to-month. No setup fees.",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing · Fastscraping",
    description: "Custom pricing. Quote in < 24 hours.",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* ===================== PRICING HERO ===================== */}
      <section className="pricing-hero" data-screen-label="01 Pricing hero">
        <div className="container">
          <div className="ah-band">
            <span className="eyebrow">Pricing · custom by design</span>
            <div className="ah-band-right">
              <span className="kbd">No fixed tiers</span>
              <span className="kbd">→</span>
              <span className="kbd">No setup fees</span>
              <span className="kbd">→</span>
              <span className="kbd">Month-to-month</span>
            </div>
          </div>

          <div className="ph-headline">
            <div>
              <h1 className="display ph-h1">
                Custom pricing,
                <em>built for you.</em>
              </h1>
            </div>
            <aside className="ph-deck">
              <p>
                Every data pipeline is different. Tell us what you need and we&apos;ll put
                together a plan that fits your{" "}
                <strong>budget, volume, and delivery requirements</strong>.
              </p>
              <div className="ph-deck-meta">
                <div>
                  <div className="ph-m-k">Quote in</div>
                  <div className="ph-m-v">&lt; 24 hours</div>
                </div>
                <div>
                  <div className="ph-m-k">Sample in</div>
                  <div className="ph-m-v">48–72 hours</div>
                </div>
                <div>
                  <div className="ph-m-k">Match or beat</div>
                  <div className="ph-m-v">Your current vendor</div>
                </div>
              </div>
            </aside>
          </div>

          <div className="ph-floor">
            <div className="ph-floor-left">
              <span className="floor-k">Starting at</span>
              <span className="floor-v">
                $1,200<small>/mo</small>
              </span>
              <span className="floor-note">for a single-source daily pipeline</span>
            </div>
            <div className="ph-floor-right">
              <span className="floor-chip">Cloudflare bypass · included</span>
              <span className="floor-chip">Infrastructure · included</span>
              <span className="floor-chip">24/7 monitoring · included</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MAIN OFFER CARD ===================== */}
      <section className="block offer-block" data-screen-label="02 Main offer">
        <div className="container">
          <div className="offer-grid">
            <article className="offer-main">
              <div className="offer-tag">
                <span className="dot"></span> Fastscraping · fully managed
              </div>
              <h2 className="display offer-title">
                Fully managed data pipelines.
                <span>
                  <em>One contract, one team, one invoice.</em>
                </span>
              </h2>
              <p className="offer-pitch">
                We build and maintain custom data pipelines for your exact needs. You tell us
                what data you want — we handle everything else. Pricing is tailored to your
                volume, platforms, and delivery requirements.
              </p>

              <div className="offer-list">
                <div className="ol-col">
                  <div className="ol-h">Included by default</div>
                  <ul>
                    <li><span className="check"></span> Any website, any scale</li>
                    <li><span className="check"></span> Anti-bot bypass included</li>
                    <li><span className="check"></span> SFTP, API, or S3 delivery</li>
                    <li><span className="check"></span> 24/7 monitoring &amp; maintenance</li>
                  </ul>
                </div>
                <div className="ol-col">
                  <div className="ol-h">Operational</div>
                  <ul>
                    <li><span className="check"></span> Dedicated account manager</li>
                    <li><span className="check"></span> No long-term contracts</li>
                    <li><span className="check"></span> 50+ internal QA checks / dataset</li>
                    <li><span className="check"></span> Month-to-month billing</li>
                  </ul>
                </div>
              </div>

              <div className="offer-foot">
                <div className="offer-foot-l">
                  <span className="of-k">Typical engagement</span>
                  <span className="of-v">$1.2K – $25K / month</span>
                  <span className="of-s">Most pipelines land between $2K and $8K</span>
                </div>
                <div className="offer-foot-r">
                  <Link href="#contact" className="btn btn-accent">
                    Get a custom quote <span className="arrow">→</span>
                  </Link>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    Email Khalid
                  </a>
                </div>
              </div>
            </article>

            <aside className="offer-aside">
              <div className="oa-card">
                <div className="oa-head">
                  <span className="eyebrow">Why no fixed tiers?</span>
                </div>
                <p>
                  A LinkedIn pipeline for 100K profiles and a daily Cloudflare-defended ticketing
                  scraper are wildly different engineering jobs. Putting them on the same
                  $99/$299/$999 ladder would either overcharge the simple ones or starve the
                  complex ones.
                </p>
                <p>
                  Instead, we quote each engagement based on what it actually costs us to run —
                  and tell you up front.
                </p>
                <div className="oa-sig">
                  <KMAvatar variant="small" />
                  <div>
                    <div className="oa-name">Khalid · Founder</div>
                    <div className="oa-role">Replies personally · &lt;24h</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================== INTERACTIVE CONFIGURATOR ===================== */}
      <section className="block calc-block" id="calculator" data-screen-label="03 Calculator">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Estimate</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                What affects <em>your price.</em>
              </h2>
            </div>
            <p>
              Move the dials. The estimate updates in real time. It&apos;s an{" "}
              <em>indicative range</em>, not a quote — your actual price depends on the specific
              sites and SLA you need.
            </p>
          </div>

          <div className="calc-shell">
            <PriceConfigurator />
          </div>
        </div>
      </section>

      {/* ===================== ANTI-BOT BYPASS ROW ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        data-screen-label="04 Anti-bot"
      >
        <div className="container">
          <div className="bypass-row">
            <div className="bypass-row-left">
              <span className="eyebrow hot">All included</span>
              <h3>
                Anti-bot bypass — <em>at no extra cost.</em>
              </h3>
              <p>
                Other vendors charge premium fees for &quot;hard sites.&quot; We don&apos;t.
                If we accept your project, the price you see already includes bypass for every
                layer on every target.
              </p>
            </div>
            <div className="bypass-row-right">
              <div className="bypass-chip">
                <span className="bc-dot" style={{ background: "#f48120" }}></span>Cloudflare
              </div>
              <div className="bypass-chip">
                <span className="bc-dot" style={{ background: "#ff4d6d" }}></span>DataDome
              </div>
              <div className="bypass-chip">
                <span className="bc-dot" style={{ background: "#a560f7" }}></span>PerimeterX
              </div>
              <div className="bypass-chip">
                <span className="bc-dot" style={{ background: "#3d8af7" }}></span>Akamai
              </div>
              <div className="bypass-chip">
                <span className="bc-dot" style={{ background: "#7ad19a" }}></span>CAPTCHAs
              </div>
              <div className="bypass-chip">
                <span className="bc-dot" style={{ background: "#c79b3a" }}></span>Fingerprinting
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT'S INCLUDED ===================== */}
      <section className="block included-block" data-screen-label="05 Included">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What&apos;s included</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Everything you need. <em>Nothing hidden.</em>
              </h2>
            </div>
            <p>
              Every quote includes the four pillars below. There are no &quot;add-on&quot;
              upsells, no surprise proxy bills, no infrastructure invoices.
            </p>
          </div>

          <div className="incl-grid">
            <article className="incl">
              <div className="incl-glyph">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M16 3 5 7v9c0 6.5 4.4 11.5 11 14 6.6-2.5 11-7.5 11-14V7L16 3Z" />
                  <path d="m11 16 4 4 8-8" />
                </svg>
              </div>
              <h3>Anti-bot bypass</h3>
              <p>
                Cloudflare, DataDome, PerimeterX, Akamai — all bypassed, included in price.
              </p>
              <div className="incl-tag">$0 add-on</div>
            </article>
            <article className="incl">
              <div className="incl-glyph">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <rect x="4" y="6" width="24" height="6" rx="1.5" />
                  <rect x="4" y="14" width="24" height="6" rx="1.5" />
                  <rect x="4" y="22" width="24" height="6" rx="1.5" />
                  <circle cx="8" cy="9" r="1" fill="currentColor" />
                  <circle cx="8" cy="17" r="1" fill="currentColor" />
                  <circle cx="8" cy="25" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3>Infrastructure</h3>
              <p>We handle proxies, browsers, servers. No infrastructure for you to manage.</p>
              <div className="incl-tag">$0 add-on</div>
            </article>
            <article className="incl">
              <div className="incl-glyph">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="12" />
                  <path d="M16 8v8l5 3" />
                </svg>
              </div>
              <h3>24/7 monitoring</h3>
              <p>We monitor pipelines around the clock. Issues fixed before you notice.</p>
              <div className="incl-tag">$0 add-on</div>
            </article>
            <article className="incl">
              <div className="incl-glyph">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M21 19v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
                  <path d="M14 5h12v12" />
                  <path d="M14 17 26 5" />
                </svg>
              </div>
              <h3>Dedicated support</h3>
              <p>
                Direct access to our team. No ticket queues, no chatbots. Slack or email.
              </p>
              <div className="incl-tag">$0 add-on</div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="block process-block" data-screen-label="06 Process">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                From request to <em>data delivery.</em>
              </h2>
            </div>
            <p>
              Six steps. Most engagements move from intro call to production data inside two
              weeks — not two months.
            </p>
          </div>

          <ol className="process">
            <li className="step">
              <div className="step-num">01</div>
              <div className="step-body">
                <h3>Share your requirements</h3>
                <p>
                  Let us know what data you need — target platforms, fields, volume, cadence and
                  how you want it delivered.
                </p>
                <div className="step-meta">30-min call · or async brief</div>
              </div>
            </li>
            <li className="step">
              <div className="step-num">02</div>
              <div className="step-body">
                <h3>Quote &amp; trial run</h3>
                <p>
                  Receive a clear, transparent quote within 24 hours. Once confirmed, we run a
                  quick test to make sure everything meets your standards.
                </p>
                <div className="step-meta">Quote in &lt; 24h · trial in 48–72h</div>
              </div>
            </li>
            <li className="step">
              <div className="step-num">03</div>
              <div className="step-body">
                <h3>Dedicated manager assigned</h3>
                <p>
                  You get a single point of contact who keeps you updated and ensures your
                  project runs smoothly. No ticket queues.
                </p>
                <div className="step-meta">Slack / Email channel opened</div>
              </div>
            </li>
            <li className="step">
              <div className="step-num">04</div>
              <div className="step-body">
                <h3>Sample data approval</h3>
                <p>
                  Review your sample data and share feedback. We fine-tune fields, formats and
                  edge cases before moving to full production.
                </p>
                <div className="step-meta">1–2 iteration cycles typical</div>
              </div>
            </li>
            <li className="step">
              <div className="step-num">05</div>
              <div className="step-body">
                <h3>Complete data extraction</h3>
                <p>
                  We extract your complete dataset with rigorous quality checks — 50+ internal
                  QA tests per dataset — to ensure accuracy.
                </p>
                <div className="step-meta">50+ QA checks per dataset</div>
              </div>
            </li>
            <li className="step step-last">
              <div className="step-num">06</div>
              <div className="step-body">
                <h3>Custom data delivery</h3>
                <p>
                  Get your data exactly how you want it — via API, SFTP, S3, or email. On
                  schedule, every time. Then we keep it running.
                </p>
                <div className="step-meta">API · SFTP · S3 · Webhook · CSV · Parquet</div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="block faq-block" id="faq" data-screen-label="07 FAQ">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Common <em>questions.</em>
              </h2>
            </div>
            <p>
              Eight of the questions we get most often. If yours isn&apos;t here, just email
              Khalid — he answers personally.
            </p>
          </div>

          <Faq />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        id="contact"
        data-screen-label="08 CTA"
      >
        <div className="container">
          <div className="cta">
            <div>
              <span className="eyebrow">Ready to get started?</span>
              <h2 style={{ marginTop: 18 }}>
                Let&apos;s build your <em>data pipeline.</em>
              </h2>
              <p>
                Book a quick call and we&apos;ll put together a plan tailored to your data
                needs. No commitments, no pressure. We&apos;ll tell you honestly whether
                we&apos;re the right team — and if we&apos;re not, we&apos;ll point you to
                someone who is.
              </p>
              <div className="hero-bullets" style={{ marginTop: 28 }}>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Quote in &lt; 24h
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
                  Match or beat your vendor
                </span>
              </div>
            </div>

            <div className="cta-card">
              <div className="label">Direct line</div>
              <div className="person">
                <KMAvatar variant="large" />
                <div>
                  <div className="n">Md Khalid Mahmud Shawon</div>
                  <div className="r">Founder · Quotes within 24 hours</div>
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
                <a href="/contact" className="btn btn-accent">
                  Book a demo
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
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
