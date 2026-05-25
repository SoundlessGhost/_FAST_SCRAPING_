"use client";

import { useState } from "react";

type Tag = "all" | "ticketing" | "realestate" | "jobs" | "linkedin" | "retail" | "ai";

const PILLS: { f: Tag; label: string; count: number }[] = [
  { f: "all", label: "All", count: 8 },
  { f: "ticketing", label: "Ticketing", count: 2 },
  { f: "realestate", label: "Real estate", count: 1 },
  { f: "jobs", label: "Jobs", count: 2 },
  { f: "linkedin", label: "LinkedIn", count: 1 },
  { f: "retail", label: "Retail", count: 1 },
  { f: "ai", label: "AI & ML", count: 1 },
];

export default function CaseStudiesGrid() {
  const [active, setActive] = useState<Tag>("all");

  const show = (tag: Tag) => active === "all" || active === tag;

  return (
    <>
      {/* Filter bar */}
      <div className="cs-filters" id="cs-filters">
        <span className="cs-filter-label">Filter</span>
        {PILLS.map((p) => (
          <button
            key={p.f}
            className={`cs-pill${active === p.f ? " cs-pill--on" : ""}`}
            onClick={() => setActive(p.f)}
            type="button"
          >
            {p.label} <small>{p.count}</small>
          </button>
        ))}
        <div className="cs-filter-r">
          <span className="cs-filter-sort">Sort · most recent</span>
        </div>
      </div>

      {/* FEATURED STORY · ticketing */}
      {show("ticketing") ? (
        <section className="cs-feature" data-tag="ticketing">
          <div className="container">
            <div className="cs-feat-grid">
              <div className="cs-cover">
                <div className="cs-cover-svg">
                  <svg viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                    <defs>
                      <linearGradient id="fg-feat" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#0e1311" />
                        <stop offset="100%" stopColor="#1a2a23" />
                      </linearGradient>
                      <pattern id="pat-feat" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                        <circle cx="3" cy="3" r="0.8" fill="rgba(122,209,154,0.18)" />
                      </pattern>
                    </defs>
                    <rect width="500" height="600" fill="url(#fg-feat)" />
                    <rect width="500" height="600" fill="url(#pat-feat)" />
                    <g transform="translate(250 320) rotate(-8)">
                      <rect x="-160" y="-110" width="320" height="220" rx="14" fill="#0e1311" stroke="rgba(122,209,154,0.5)" strokeWidth="1.5" />
                      <line x1="60" y1="-110" x2="60" y2="110" stroke="rgba(122,209,154,0.25)" strokeWidth="1" strokeDasharray="4 6" />
                      <text x="-140" y="-72" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.16em" fill="rgba(122,209,154,0.6)">
                        SECTION · STORY 01
                      </text>
                      <text x="-140" y="-42" fontFamily="Instrument Serif" fontSize="36" fill="#eaf2ed" fontStyle="italic">
                        The
                      </text>
                      <text x="-140" y="-6" fontFamily="Instrument Serif" fontSize="36" fill="#eaf2ed">
                        ticketing
                      </text>
                      <text x="-140" y="30" fontFamily="Instrument Serif" fontSize="36" fill="#7ad19a" fontStyle="italic">
                        pipeline.
                      </text>
                      <text x="-140" y="70" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.14em" fill="rgba(245,243,238,0.5)">
                        FICSTAR × FASTSCRAPING · SINCE 2024
                      </text>
                      <text x="86" y="-72" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.14em" fill="rgba(122,209,154,0.5)">
                        N°
                      </text>
                      <text x="86" y="-32" fontFamily="Instrument Serif" fontSize="42" fill="#eaf2ed" fontStyle="italic">
                        01
                      </text>
                      <text x="86" y="20" fontFamily="Geist Mono" fontSize="8" letterSpacing="0.12em" fill="rgba(245,243,238,0.4)">
                        USA · CA · EU
                      </text>
                      <text x="86" y="40" fontFamily="Geist Mono" fontSize="8" letterSpacing="0.12em" fill="rgba(245,243,238,0.4)">
                        DAILY · 15M
                      </text>
                    </g>
                    <g transform="translate(420 80)">
                      <circle r="42" fill="none" stroke="rgba(122,209,154,0.4)" strokeWidth="1" />
                      <circle r="34" fill="none" stroke="rgba(122,209,154,0.6)" strokeWidth="1" />
                      <text y="-6" textAnchor="middle" fontFamily="Geist Mono" fontSize="8" letterSpacing="0.14em" fill="#7ad19a">
                        PRODUCTION
                      </text>
                      <text y="6" textAnchor="middle" fontFamily="Geist Mono" fontSize="8" letterSpacing="0.14em" fill="#7ad19a">
                        SINCE 2024
                      </text>
                      <text y="20" textAnchor="middle" fontFamily="Instrument Serif" fontSize="13" fontStyle="italic" fill="#7ad19a">
                        ✓
                      </text>
                    </g>
                    <rect x="0" y="540" width="500" height="60" fill="rgba(0,0,0,0.4)" />
                    <text x="24" y="568" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.16em" fill="rgba(245,243,238,0.7)">
                      FEATURED STORY · 01 / 08
                    </text>
                    <text x="476" y="568" textAnchor="end" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.16em" fill="rgba(245,243,238,0.7)">
                      READ TIME · 6 MIN
                    </text>
                  </svg>
                </div>
                <div className="cs-cover-tape">FEATURED</div>
              </div>

              <article className="cs-feat-body">
                <div className="cs-feat-meta">
                  <span className="cs-feat-tag">Ticketing · Real-time pricing</span>
                  <span className="cs-feat-client">
                    Client · <strong>Ficstar</strong>
                  </span>
                </div>

                <h2 className="cs-feat-title">
                  Replacing a fragile in-house StubHub scraper with a{" "}
                  <em>real pipeline.</em>
                </h2>

                <p className="cs-feat-pitch">
                  Ficstar runs ticketing intelligence for resellers. Their old scraper broke
                  every other week — Cloudflare changes, IP bans, parser drift. We replaced it
                  with a daily pipeline that hasn&apos;t missed a delivery in fifteen months.
                </p>

                <div className="cs-metric-strip">
                  {[
                    { v: "15M", l: "Listings · daily" },
                    { v: "0", l: "Missed deliveries · 15 mo" },
                    { v: "−72%", l: "Cost vs in-house" },
                    { v: "9d", l: "From brief to production" },
                  ].map((m) => (
                    <div className="cs-mtile" key={m.l}>
                      <div className="cs-mv">{m.v}</div>
                      <div className="cs-ml">{m.l}</div>
                    </div>
                  ))}
                </div>

                <div className="cs-narr">
                  <div className="cs-narr-row">
                    <div className="cs-narr-label">THE BRIEF</div>
                    <p>
                      &quot;Our internal scraper for StubHub and SeatGeek breaks every two
                      weeks. We need someone who actually owns the bypass problem so we can stop
                      firefighting and ship product.&quot;
                    </p>
                  </div>
                  <div className="cs-narr-row">
                    <div className="cs-narr-label">THE CALL</div>
                    <p>
                      Instead of patching the old scraper, we rebuilt the pipeline around
                      stealth headless browsers with real TLS fingerprints and rotating
                      residential identities. We added auto-adaptation for selector drift and
                      50+ QA gates per dataset.
                    </p>
                  </div>
                  <div className="cs-narr-row">
                    <div className="cs-narr-label">THE RESULT</div>
                    <p>
                      Daily delivery for 15+ months without a single missed run. 72% cheaper
                      than running it in-house once you add up engineering time, proxies,
                      infrastructure, and on-call. Ficstar&apos;s team got their roadmap back.
                    </p>
                  </div>
                </div>

                <blockquote className="cs-quote">
                  <div className="cs-quote-mark">&quot;</div>
                  <p>
                    You&apos;re doing a great job with the Indeed US numbers over the last
                    couple months. Thank you for your efforts — much appreciated!
                  </p>
                  <footer>
                    <div className="cs-quote-av">SV</div>
                    <div>
                      <div className="cs-quote-name">Scott Vahey</div>
                      <div className="cs-quote-role">Owner, Ficstar</div>
                    </div>
                  </footer>
                </blockquote>

                <div className="cs-stack">
                  <span className="cs-stack-label">Stack</span>
                  <div className="cs-stack-tags">
                    <span>Stealth headless</span>
                    <span>Residential rotation</span>
                    <span>Cloudflare bypass</span>
                    <span>Snowflake delivery</span>
                    <span>50+ QA gates</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : null}

      {/* STORY GRID */}
      <section className="cs-grid-wrap" id="story-grid">
        <div className="container">
          <div className="cs-grid-head">
            <h2 className="display">
              More <em>stories.</em>
            </h2>
            <p>
              Seven more client engagements, organized by industry. Each one a different
              problem, a different stack, a different lesson.
            </p>
          </div>

          <div className="cs-grid">
            {/* STORY 02 realestate */}
            <article
              className={`cs-card cs-card--lg${show("realestate") ? "" : " is-hidden"}`}
              data-tag="realestate"
            >
              <div className="cs-card-cover cs-cov-realestate">
                <svg viewBox="0 0 400 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <defs>
                    <pattern id="r2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="360" fill="#c14a25" />
                  <rect width="400" height="360" fill="url(#r2)" />
                  <g transform="translate(200 200)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none">
                    <path d="M -100 -10 L -60 -60 L -20 -10 L -20 60 L -100 60 Z" />
                    <path d="M -20 -10 L 20 -60 L 60 -10 L 60 60 L -20 60" />
                    <path d="M 60 -10 L 100 -60 L 100 60 L 60 60" />
                    <rect x="-90" y="20" width="20" height="35" />
                    <rect x="-10" y="20" width="20" height="35" />
                    <rect x="70" y="20" width="20" height="35" />
                  </g>
                  <text x="24" y="38" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.16em" fill="rgba(255,255,255,0.8)">
                    STORY 02 · REAL ESTATE
                  </text>
                  <text x="376" y="38" textAnchor="end" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.16em" fill="rgba(255,255,255,0.8)">
                    SWITZERLAND
                  </text>
                </svg>
                <div className="cs-card-num">
                  <em>02</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">Real estate · API</span>
                  <span className="cs-client">TheDataHive</span>
                </div>
                <h3>&quot;Most likely no one is able to do it except you.&quot;</h3>
                <p>
                  Custom APIs across{" "}
                  <strong>ImmoScout24, Homegate, and 4 more Swiss portals</strong> —
                  multi-source, daily refresh, single schema. Anonymous, white-labeled, no
                  attribution.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">1.2M</span>
                    <span className="l">Listings · daily</span>
                  </div>
                  <div>
                    <span className="v">6</span>
                    <span className="l">Sources unified</span>
                  </div>
                  <div>
                    <span className="v">CH</span>
                    <span className="l">Coverage</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>

            {/* STORY 03 linkedin */}
            <article
              className={`cs-card${show("linkedin") ? "" : " is-hidden"}`}
              data-tag="linkedin"
            >
              <div className="cs-card-cover cs-cov-linkedin">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <defs>
                    <radialGradient id="li-cov" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(122,209,154,0.4)" />
                      <stop offset="100%" stopColor="rgba(122,209,154,0)" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="280" fill="#0a3d2d" />
                  <circle cx="200" cy="140" r="120" fill="url(#li-cov)" />
                  <g stroke="rgba(122,209,154,0.3)" strokeWidth="1" fill="none">
                    <line x1="80" y1="60" x2="200" y2="140" />
                    <line x1="320" y1="60" x2="200" y2="140" />
                    <line x1="80" y1="220" x2="200" y2="140" />
                    <line x1="320" y1="220" x2="200" y2="140" />
                    <line x1="60" y1="140" x2="200" y2="140" />
                    <line x1="340" y1="140" x2="200" y2="140" />
                  </g>
                  <g fill="#1a4538" stroke="#7ad19a" strokeWidth="1.5">
                    <circle cx="80" cy="60" r="14" />
                    <circle cx="320" cy="60" r="14" />
                    <circle cx="80" cy="220" r="14" />
                    <circle cx="320" cy="220" r="14" />
                    <circle cx="60" cy="140" r="11" />
                    <circle cx="340" cy="140" r="11" />
                  </g>
                  <circle cx="200" cy="140" r="24" fill="#0a66c2" />
                  <text x="200" y="146" textAnchor="middle" fontFamily="Geist Mono" fontSize="14" fontWeight="700" fill="#fff">
                    in
                  </text>
                  <text x="24" y="32" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.16em" fill="rgba(245,243,238,0.6)">
                    STORY 03 · B2B DATA
                  </text>
                  <text x="24" y="262" fontFamily="Instrument Serif" fontSize="13" fontStyle="italic" fill="#7ad19a">
                    100M+ profiles · zero bans
                  </text>
                </svg>
                <div className="cs-card-num">
                  <em>03</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">LinkedIn · Stealth</span>
                  <span className="cs-client">Sales intel SaaS</span>
                </div>
                <h3>100M+ LinkedIn profiles a month. Zero account bans.</h3>
                <p>
                  Replaced cookie-based actors with our cookieless stealth identities. The
                  previous vendor was losing accounts faster than they could create them.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">100M+</span>
                    <span className="l">Profiles · monthly</span>
                  </div>
                  <div>
                    <span className="v">0</span>
                    <span className="l">Account bans</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>

            {/* STORY 04 jobs */}
            <article
              className={`cs-card${show("jobs") ? "" : " is-hidden"}`}
              data-tag="jobs"
            >
              <div className="cs-card-cover cs-cov-jobs">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <defs>
                    <pattern id="jp" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="8" cy="8" r="0.8" fill="rgba(255,255,255,0.08)" />
                    </pattern>
                  </defs>
                  <rect width="400" height="280" fill="#2a3a8a" />
                  <rect width="400" height="280" fill="url(#jp)" />
                  <text x="24" y="34" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.16em" fill="rgba(255,255,255,0.7)">
                    STORY 04 · JOBS · 1.4M / WEEK
                  </text>
                  <g fontFamily="Geist Mono" fontSize="10">
                    {[
                      { y: 64, c: "#0a66c2", co: "Stripe", role: "Sr DE Pipelines", loc: "Dublin" },
                      { y: 112, c: "#ff5b49", co: "Shopify", role: "Staff Platform", loc: "Remote" },
                      { y: 160, c: "#7e2e8a", co: "Databricks", role: "Staff Lakehouse", loc: "Berlin" },
                      { y: 208, c: "#ef2a39", co: "DoorDash", role: "Sr DE Logistics", loc: "NYC" },
                    ].map((r) => (
                      <g key={r.y} transform={`translate(24 ${r.y})`}>
                        <rect width="320" height="38" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                        <rect x="14" y="13" width="12" height="12" rx="3" fill={r.c} />
                        <text x="36" y="23" fill="#fff">
                          {r.co}
                        </text>
                        <text x={r.co.length > 6 ? 96 : 78} y="23" fill="rgba(255,255,255,0.65)">
                          {r.role}
                        </text>
                        <text x="306" y="23" textAnchor="end" fill="rgba(255,255,255,0.5)">
                          {r.loc}
                        </text>
                      </g>
                    ))}
                  </g>
                </svg>
                <div className="cs-card-num">
                  <em>04</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">Job market · Aggregation</span>
                  <span className="cs-client">Talent analytics co.</span>
                </div>
                <h3>50+ job boards, one unified feed.</h3>
                <p>
                  Deduplicated cross-board postings using fuzzy match + content hash. 1.4M jobs
                  collected weekly, normalized to one schema, delivered to BigQuery hourly.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">1.4M</span>
                    <span className="l">Jobs · weekly</span>
                  </div>
                  <div>
                    <span className="v">50+</span>
                    <span className="l">Boards aggregated</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>

            {/* STORY 05 ticketing */}
            <article
              className={`cs-card${show("ticketing") ? "" : " is-hidden"}`}
              data-tag="ticketing"
            >
              <div className="cs-card-cover cs-cov-ticketing">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <rect width="400" height="280" fill="#7e2e8a" />
                  <g transform="translate(200 140) rotate(-6)">
                    <rect x="-130" y="-50" width="260" height="100" rx="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                    <line x1="60" y1="-50" x2="60" y2="50" stroke="rgba(255,255,255,0.4)" strokeDasharray="4 5" />
                    <text x="-110" y="-12" fontFamily="Instrument Serif" fontSize="20" fill="#fff" fontStyle="italic">
                      SeatGeek
                    </text>
                    <text x="-110" y="14" fontFamily="Geist Mono" fontSize="9" fill="rgba(255,255,255,0.7)" letterSpacing="0.14em">
                      RT INVENTORY
                    </text>
                    <text x="-110" y="32" fontFamily="Geist Mono" fontSize="9" fill="rgba(255,255,255,0.7)" letterSpacing="0.14em">
                      EU + USA
                    </text>
                    <text x="74" y="-8" fontFamily="Geist Mono" fontSize="9" fill="rgba(255,255,255,0.6)" letterSpacing="0.14em">
                      N°
                    </text>
                    <text x="74" y="24" fontFamily="Instrument Serif" fontSize="28" fill="#fff" fontStyle="italic">
                      05
                    </text>
                  </g>
                  <text x="24" y="32" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.16em" fill="rgba(255,255,255,0.7)">
                    STORY 05 · TICKETING
                  </text>
                </svg>
                <div className="cs-card-num">
                  <em>05</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">Ticketing · Real-time</span>
                  <span className="cs-client">European resale platform</span>
                </div>
                <h3>Real-time SeatGeek inventory at &lt; 60s latency.</h3>
                <p>
                  Move from hourly batch to sub-minute streaming. Webhook-based delivery into
                  their pricing engine. PerimeterX layer cracked open in week one.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">&lt; 60s</span>
                    <span className="l">End-to-end latency</span>
                  </div>
                  <div>
                    <span className="v">8.4M</span>
                    <span className="l">Events daily</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>

            {/* STORY 06 retail */}
            <article
              className={`cs-card cs-card--lg${show("retail") ? "" : " is-hidden"}`}
              data-tag="retail"
            >
              <div className="cs-card-cover cs-cov-retail">
                <svg viewBox="0 0 400 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <defs>
                    <linearGradient id="gold-bg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#b07d20" />
                      <stop offset="100%" stopColor="#8a5d12" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="360" fill="url(#gold-bg)" />
                  <text x="24" y="34" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.16em" fill="rgba(255,255,255,0.85)">
                    STORY 06 · RETAIL
                  </text>
                  {[
                    { y: 0, label: "SKU · 01 · AUDIO", price: "$313", w: 60 },
                    { y: 56, label: "SKU · 02 · HEADPHONES", price: "$429", w: 180 },
                    { y: 112, label: "SKU · 03 · MONITOR", price: "$539", w: 280 },
                  ].map((r) => (
                    <g key={r.y} transform={`translate(24 ${70 + r.y})`}>
                      <text x="0" y="12" fontFamily="Geist Mono" fontSize="9.5" fill="rgba(255,255,255,0.7)" letterSpacing="0.06em">
                        {r.label}
                      </text>
                      <text x="352" y="12" textAnchor="end" fontFamily="Geist Mono" fontSize="11" fill="#fff" letterSpacing="0.02em">
                        {r.price}
                      </text>
                      <rect x="0" y="22" width="352" height="5" rx="2.5" fill="rgba(255,255,255,0.2)" />
                      <rect x="0" y="22" width={r.w} height="5" rx="2.5" fill="#fff" />
                      <circle cx={r.w} cy="24.5" r="6" fill="#fff" stroke="#8a5d12" strokeWidth="1.5" />
                    </g>
                  ))}
                  <text x="24" y="290" fontFamily="Instrument Serif" fontSize="32" fontStyle="italic" fill="#fff">
                    Margin protection,
                  </text>
                  <text x="24" y="322" fontFamily="Instrument Serif" fontSize="32" fill="#fff">
                    in real time.
                  </text>
                </svg>
                <div className="cs-card-num">
                  <em>06</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">E-commerce · Competitive pricing</span>
                  <span className="cs-client">DTC electronics brand</span>
                </div>
                <h3>
                  From &quot;we saw the price drop on Tuesday&quot; to &quot;we react in under 4
                  minutes.&quot;
                </h3>
                <p>
                  Continuous price monitoring across{" "}
                  <strong>14 retailers and 3 marketplaces</strong>. Webhook alerts straight
                  into Slack and their dynamic pricing engine. They estimate $1.4M of recovered
                  margin in year one.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">2.4M</span>
                    <span className="l">SKUs · daily</span>
                  </div>
                  <div>
                    <span className="v">&lt; 4 min</span>
                    <span className="l">Price-drop reaction</span>
                  </div>
                  <div>
                    <span className="v">$1.4M</span>
                    <span className="l">Margin recovered · year 1</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>

            {/* STORY 07 ai */}
            <article
              className={`cs-card${show("ai") ? "" : " is-hidden"}`}
              data-tag="ai"
            >
              <div className="cs-card-cover cs-cov-ai">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <rect width="400" height="280" fill="#131613" />
                  <g fontFamily="Geist Mono" fontSize="10" fill="rgba(122,209,154,0.6)">
                    <text x="24" y="60">{`{ "id": "doc_0",`}</text>
                    <text x="24" y="80">{`  "url": "https://...",`}</text>
                    <text x="24" y="100">{`  "title": "...",`}</text>
                    <text x="24" y="120">{`  "text": "...",`}</text>
                    <text x="24" y="140">{`  "embedding": [...],`}</text>
                    <text x="24" y="160">{`  "tokens": 4287 }`}</text>
                    <text x="24" y="200">→ 2.4B docs · v3 corpus</text>
                  </g>
                  <g transform="translate(300 140)" stroke="#7ad19a" fill="none" strokeWidth="1">
                    <circle r="40" strokeDasharray="2 4" />
                    <circle r="60" strokeDasharray="2 4" opacity="0.5" />
                    <circle r="20" fill="#0e5d44" stroke="#7ad19a" />
                  </g>
                  <text x="300" y="146" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#7ad19a">
                    CORPUS
                  </text>
                  <text x="24" y="32" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.16em" fill="rgba(245,243,238,0.6)">
                    STORY 07 · AI · LLM CORPUS
                  </text>
                </svg>
                <div className="cs-card-num">
                  <em>07</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">AI · Training corpus</span>
                  <span className="cs-client">Seed-stage LLM startup</span>
                </div>
                <h3>Building a 2.4 billion document training corpus.</h3>
                <p>
                  Crawl, dedupe, and clean a domain-specific web corpus across 18 source
                  categories. Delivered as Parquet on S3 with full content hash and licensing
                  metadata.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">2.4B</span>
                    <span className="l">Documents · cleaned</span>
                  </div>
                  <div>
                    <span className="v">14TB</span>
                    <span className="l">Parquet on S3</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>

            {/* STORY 08 jobs */}
            <article
              className={`cs-card${show("jobs") ? "" : " is-hidden"}`}
              data-tag="jobs"
            >
              <div className="cs-card-cover cs-cov-jobs2">
                <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <rect width="400" height="280" fill="#1a4538" />
                  <text x="24" y="34" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.16em" fill="rgba(245,243,238,0.65)">
                    STORY 08 · INDEED US · HOURLY
                  </text>
                  <g transform="translate(24 64)">
                    <g transform="translate(0 0)">
                      <text x="0" y="14" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.14em" fill="rgba(245,243,238,0.5)">
                        DE TITLES
                      </text>
                      <text x="0" y="46" fontFamily="Geist Mono" fontSize="28" fill="#7ad19a">
                        120K
                      </text>
                    </g>
                    <g transform="translate(180 0)">
                      <text x="0" y="14" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.14em" fill="rgba(245,243,238,0.5)">
                        MEDIAN COMP
                      </text>
                      <text x="0" y="46" fontFamily="Geist Mono" fontSize="28" fill="#7ad19a">
                        $140K
                      </text>
                    </g>
                    <line x1="0" y1="76" x2="352" y2="76" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <g transform="translate(0 96)">
                      <text x="0" y="14" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.14em" fill="rgba(245,243,238,0.5)">
                        TOP MARKETS
                      </text>
                      <text x="0" y="46" fontFamily="Geist Mono" fontSize="22" fill="#7ad19a">
                        CA · USA
                      </text>
                    </g>
                    <g transform="translate(180 96)">
                      <text x="0" y="14" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.14em" fill="rgba(245,243,238,0.5)">
                        POSTINGS / WK
                      </text>
                      <text x="0" y="46" fontFamily="Geist Mono" fontSize="28" fill="#7ad19a">
                        3,420
                      </text>
                    </g>
                  </g>
                </svg>
                <div className="cs-card-num">
                  <em>08</em>
                </div>
              </div>
              <div className="cs-card-body">
                <div className="cs-card-meta">
                  <span className="cs-tag">Indeed · Compensation</span>
                  <span className="cs-client">Ficstar</span>
                </div>
                <h3>Indeed US — compensation data with state-level cuts.</h3>
                <p>
                  Hourly Indeed US scrape with salary band extraction, employer-size joins, and
                  weekly comp-benchmark exports. The pipeline Scott Vahey&apos;s note was
                  about.
                </p>
                <div className="cs-card-metrics">
                  <div>
                    <span className="v">3.4K</span>
                    <span className="l">Postings hourly</span>
                  </div>
                  <div>
                    <span className="v">99.7%</span>
                    <span className="l">Field-level QA pass</span>
                  </div>
                </div>
                <a href="#" className="cs-card-cta">
                  Read the case → <span className="arr">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
