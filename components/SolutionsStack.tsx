"use client";

import { Fragment, useEffect, useRef, useState, forwardRef } from "react";

/* ============================================================
   SVG VISUALS — one per solution
   ============================================================ */

function PricingVisual() {
  const skus = [
    { name: "Sony WH-1000XM5", brand: "Sony · electronics", min: 309, max: 389, you: 313, comp: [320, 335, 348, 358, 372], status: "best", label: "Best", delta: "−$7" },
    { name: "Bose QC Ultra", brand: "Bose · electronics", min: 399, max: 479, you: 429, comp: [415, 432, 449, 462, 475], status: "mid", label: "Competitive", delta: "−$0" },
    { name: "Sennheiser Momentum", brand: "Sennheiser · audio", min: 279, max: 349, you: 339, comp: [285, 299, 315, 320, 332], status: "over", label: "Over market", delta: "+$11 ↗" },
    { name: "Apple AirPods Max", brand: "Apple · premium", min: 499, max: 599, you: 539, comp: [519, 545, 559, 569, 589], status: "mid", label: "Competitive", delta: "−$4" },
    { name: "JBL Tour One M2", brand: "JBL · mid-tier", min: 189, max: 249, you: 199, comp: [205, 215, 225, 235, 245], status: "best", label: "Best", delta: "−$5" },
  ];
  const pct = (v: number, min: number, max: number) => ((v - min) / (max - min)) * 100;
  return (
    <div className="vis-frame vis-frame--paper">
      <div className="vf-head">
        <span className="vf-title">Price index · 5 SKUs · 12 competitors</span>
        <span className="vf-live"><span className="dot" />monitoring</span>
      </div>
      <div className="price-tiles">
        <div className="pt-tile">
          <div className="pt-v">2.4M</div>
          <div className="pt-l">SKUs tracked daily</div>
        </div>
        <div className="pt-tile pt-tile--alert">
          <div className="pt-v">147</div>
          <div className="pt-l">Undercut alerts <em>today</em></div>
        </div>
        <div className="pt-tile">
          <div className="pt-v">$12.4K</div>
          <div className="pt-l">Margin protected (24h)</div>
        </div>
      </div>
      <div className="price-ladder">
        <div className="pl-head">
          <span>SKU</span>
          <span>Price position · min → max</span>
          <span>You vs market</span>
        </div>
        {skus.map((s) => (
          <div className="pl-row" key={s.name}>
            <div className="pl-sku">
              <div className="pl-name">{s.name}</div>
              <div className="pl-brand">{s.brand}</div>
            </div>
            <div className="pl-barwrap">
              <span className="pl-edge">${s.min}</span>
              <div className="pl-bar-track">
                {s.comp.map((c, i) => (
                  <span className="pl-comp" key={i} style={{ left: `${pct(c, s.min, s.max)}%` }} />
                ))}
                <span
                  className={`pl-you pl-you--${s.status}`}
                  style={{ left: `${pct(s.you, s.min, s.max)}%` }}
                />
              </div>
              <span className="pl-edge">${s.max}</span>
            </div>
            <div className={`pl-status pl-status--${s.status}`}>
              <span className="pl-status-pill">{s.label}</span>
              <span className="pl-status-delta">${s.you} · {s.delta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="vf-foot">
        <span>Latest scan · 12 min ago · 2.4M SKUs reindexed</span>
        <span>↻ every 4h · 147 alerts queued</span>
      </div>
    </div>
  );
}

function MarketplaceVisual() {
  const products = [
    { n: "Sony WH-1000XM5", p: "$348", rv: "12,847", rank: 1, c: "#3d3a35", s: "#5a5650" },
    { n: "Bose QC Ultra", p: "$429", rv: "6,210", rank: 2, c: "#2a3a44", s: "#3a4d5a" },
    { n: "Sennheiser M4", p: "$299", rv: "3,402", rank: 3, c: "#3d2f2a", s: "#5a4640" },
    { n: "Apple AirPods Max", p: "$549", rv: "9,118", rank: 4, c: "#1a2620", s: "#2a3d34" },
  ];
  return (
    <div className="vis-frame vis-frame--dark">
      <div className="vf-head">
        <span className="vf-title">Amazon · &quot;wireless headphones&quot;</span>
        <span className="vf-live"><span className="dot" />indexing</span>
      </div>
      <div className="prod-grid">
        {products.map((p) => (
          <article className="prod" key={p.n}>
            <div className="prod-img" style={{ background: p.c }}>
              <svg viewBox="0 0 60 60">
                <circle cx="30" cy="26" r="14" fill={p.s} />
                <rect x="14" y="34" width="32" height="12" rx="4" fill={p.s} />
              </svg>
            </div>
            <div className="prod-name">{p.n}</div>
            <div className="prod-price">{p.p} <small>· {p.rv} reviews</small></div>
            <div className="prod-tag rank">#{p.rank}</div>
          </article>
        ))}
      </div>
      <div className="vf-foot">
        <span>Page 1 of 247 · 6,143 products indexed</span>
        <span>refresh every 4h</span>
      </div>
    </div>
  );
}

function JobsVisual() {
  const jobs = [
    { co: "Stripe", co2: "St", c: "#0a66c2", t: "Senior Data Engineer · Pipelines", m: "Dublin, IE · €105–135K · 2h ago", src: "linkedin" },
    { co: "Shopify", co2: "Sh", c: "#ff5b49", t: "Sr. Data Platform Engineer", m: "Remote, CA · CA$160–210K · 4h ago", src: "indeed" },
    { co: "Databricks", co2: "Da", c: "#7e2e8a", t: "Staff Data Engineer · Lakehouse", m: "Berlin, DE · €120–155K · 6h ago", src: "stepstone" },
    { co: "DoorDash", co2: "Do", c: "#ef2a39", t: "Senior Data Engineer · Logistics", m: "New York, US · $185–240K · 9h ago", src: "linkedin" },
    { co: "Starbucks", co2: "Sb", c: "#006241", t: "Data Engineer III · Analytics Platform", m: "Seattle, US · $135–170K · 11h ago", src: "glassdoor" },
  ];
  return (
    <div className="vis-frame vis-frame--paper">
      <div className="vf-head">
        <span className="vf-title">Latest postings · Senior data engineer · global</span>
        <span className="vf-live"><span className="dot" />live</span>
      </div>
      <div className="job-list">
        {jobs.map((j) => (
          <div className="job" key={j.t}>
            <div className="job-l">
              <div className="job-co">
                <span className="co-mark" style={{ background: j.c }}>{j.co2}</span> {j.co}
              </div>
              <div className="job-t">{j.t}</div>
              <div className="job-meta">{j.m}</div>
            </div>
            <div className="job-r"><span className="job-src">{j.src}</span></div>
          </div>
        ))}
      </div>
      <div className="vf-foot">
        <span>50+ boards · deduped · <strong>1,418,209</strong> jobs / week</span>
        <span>↻ hourly</span>
      </div>
    </div>
  );
}

function LinkedInVisual() {
  const nodes = [
    { x: 80, y: 50, r: 22, t: "PR", l: "Profiles", ly: 90 },
    { x: 80, y: 230, r: 22, t: "CO", l: "Companies", ly: 268 },
    { x: 400, y: 50, r: 22, t: "JB", l: "Jobs", ly: 90 },
    { x: 400, y: 230, r: 22, t: "PS", l: "Posts", ly: 268 },
    { x: 60, y: 140, r: 18, t: "SK", l: "Skills", ly: 175 },
    { x: 420, y: 140, r: 18, t: "ED", l: "Edu", ly: 175 },
  ];
  return (
    <div className="vis-frame vis-frame--dark">
      <div className="vf-head">
        <span className="vf-title">LinkedIn pipeline · live extraction</span>
        <span className="vf-live"><span className="dot" />0 bans</span>
      </div>
      <svg viewBox="0 0 480 280" style={{ display: "block", width: "100%", height: 280 }}>
        <defs>
          <radialGradient id="li-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a66c2" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#0a66c2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a66c2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
          <line x1="0" y1="70" x2="480" y2="70" />
          <line x1="0" y1="140" x2="480" y2="140" />
          <line x1="0" y1="210" x2="480" y2="210" />
          <line x1="120" y1="0" x2="120" y2="280" />
          <line x1="240" y1="0" x2="240" y2="280" />
          <line x1="360" y1="0" x2="360" y2="280" />
        </g>
        <circle cx="240" cy="140" r="60" fill="url(#li-core)" />
        <rect x="222" y="122" width="36" height="36" rx="6" fill="#0a66c2" />
        <text x="240" y="146" textAnchor="middle" fontFamily="Geist Mono" fontSize="14" fontWeight="700" fill="#fff">in</text>
        <g stroke="rgba(122,209,154,0.18)" strokeWidth="1" fill="none">
          <line x1="240" y1="140" x2="80" y2="50" />
          <line x1="240" y1="140" x2="80" y2="230" />
          <line x1="240" y1="140" x2="400" y2="50" />
          <line x1="240" y1="140" x2="400" y2="230" />
          <line x1="240" y1="140" x2="60" y2="140" />
          <line x1="240" y1="140" x2="420" y2="140" />
        </g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="#1a201d" stroke="#7ad19a" strokeWidth="1.5" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#7ad19a" fontFamily="Geist Mono" fontSize="10">{n.t}</text>
            <text x={n.x} y={n.ly} textAnchor="middle" fill="rgba(245,243,238,0.6)" fontFamily="Geist Mono" fontSize="9" letterSpacing="0.04em">{n.l}</text>
          </g>
        ))}
        <circle r="3" fill="#7ad19a"><animateMotion dur="3s" repeatCount="indefinite" path="M 80 50 Q 160 90 240 140" /></circle>
        <circle r="3" fill="#7ad19a"><animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s" path="M 400 50 Q 320 90 240 140" /></circle>
        <circle r="3" fill="#7ad19a"><animateMotion dur="2.8s" repeatCount="indefinite" begin="1s" path="M 80 230 Q 160 190 240 140" /></circle>
        <circle r="3" fill="#7ad19a"><animateMotion dur="3.2s" repeatCount="indefinite" begin="1.4s" path="M 400 230 Q 320 190 240 140" /></circle>
      </svg>
      <div className="vf-foot">
        <span>No cookies · stealth identities · TLS fingerprint match</span>
        <span><strong>Zero bans · all-time</strong></span>
      </div>
    </div>
  );
}

function ApiVisual() {
  return (
    <div className="vis-frame vis-frame--code">
      <div className="api-head">
        <span className="api-method">GET</span>
        <span className="api-url">api.fastscraping.com/v1/products/search</span>
        <span className="api-ping">→ 187<small>ms</small></span>
      </div>
      <pre className="api-body">{`{
  "query": "wireless headphones",
  "source": "amazon.com",
  "fetched_at": "2026-05-23T14:08:42Z",
  "page": 1,
  "results": [
    {
      "sku": "B0C33XKZP4",
      "title": "Sony WH-1000XM5",
      "price_usd": 348.00,
      "stock": "in_stock",
      "rating": 4.7,
      "reviews": 12847,
      "rank_organic": 1
    },
    {
      "sku": "B0CCZ1L6BC",
      "title": "Bose QuietComfort Ultra",
      "price_usd": 429.00,
      "stock": "in_stock",
      "rating": 4.5,
      "rank_organic": 2
    }
  ],
  "bypassed": ["amazon_botd"]
}`}</pre>
      <div className="api-foot">
        <span className="api-tag">200 OK</span>
        <span>cache: HIT · region: us-east-1</span>
        <span className="api-tag api-tag-ok">x-bot-bypass: included</span>
      </div>
    </div>
  );
}

type StageRow = { d?: string; t: string; ok?: boolean };

function PipelineVisual() {
  const stages: { name: string; rows: StageRow[] }[] = [
    { name: "SOURCES", rows: [{ d: "#7e2e8a", t: "StubHub" }, { d: "#ff5b49", t: "SeatGeek" }, { d: "#0a66c2", t: "Ticketmaster" }] },
    { name: "EXTRACT", rows: [{ ok: true, t: "Stealth fetch" }, { ok: true, t: "Anti-bot bypass" }, { ok: true, t: "Parse · validate" }] },
    { name: "TRANSFORM", rows: [{ ok: true, t: "Schema normalize" }, { ok: true, t: "Dedup · enrich" }, { ok: true, t: "50+ QA checks" }] },
    { name: "DELIVER", rows: [{ d: "#0e5d44", t: "Snowflake" }, { d: "#c79b3a", t: "S3 · Parquet" }, { d: "#2a5d8a", t: "Webhook" }] },
  ];
  return (
    <div className="vis-frame vis-frame--paper">
      <div className="vf-head">
        <span className="vf-title">Daily pipeline · ticketing.fastscraping</span>
        <span className="vf-live"><span className="dot" />scheduled</span>
      </div>
      <div className="pipe-flow">
        {stages.map((s, i) => (
          <Fragment key={s.name}>
            <div className="pipe-stage">
              <div className="ps-name">{s.name}</div>
              <div className="ps-rows">
                {s.rows.map((r, j) => (
                  <div className={`ps-row ${r.ok ? "ok" : ""}`} key={j}>
                    {r.d ? <span className="dot" style={{ background: r.d }} /> : null}
                    {r.t}
                  </div>
                ))}
              </div>
            </div>
            {i < stages.length - 1 ? (
              <div className="pipe-arrow">
                <svg viewBox="0 0 60 80">
                  <path d="M 0 40 L 50 40" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M 45 35 L 55 40 L 45 45" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
                </svg>
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="vf-foot">
        <span>Last run · 06:00 UTC · 248,103 records · 0 errors</span>
        <span>Next · in 18h 14m</span>
      </div>
    </div>
  );
}

/* ============================================================
   DATA
   ============================================================ */

type Solution = {
  id: string;
  num: string;
  title: string[];
  emIdx: number;
  tag: string;
  pitch: string;
  metric: { v: string; suffix?: string; l: string; s: string };
  bullets: string[];
  side: { h: string; items: string[] };
  accent: string;
  Visual: React.FC;
  cta: { primary: string; secondary: string; link: string };
};

const SOLUTIONS: Solution[] = [
  {
    id: "pricing-intelligence",
    num: "01",
    title: ["Competitor", "pricing", "intelligence."],
    emIdx: 1,
    tag: "Real-time SKU-level price tracking across 100+ retailers.",
    pitch:
      "Track competitor prices in real-time across hundreds of retailers, marketplaces and OEM sites. Catch undercuts within minutes, not days — protect margins, optimize pricing, and react to the market while your competitors are still reading yesterday's report.",
    metric: { v: "60M+", l: "Prices tracked daily", s: "across 100+ retailers, marketplaces and OEM sites" },
    bullets: [
      "SKU-level price matches with confidence scores",
      "Historical pricing per SKU per source (365+ days)",
      "Stock, promotions, shipping & tax all surfaced",
      "Real-time webhook alerts on price changes",
      "Daily delta exports — only what moved",
    ],
    side: { h: "Typical clients", items: ["Retail brands", "DTC operators", "Brand-protection teams", "Reseller monitoring"] },
    accent: "emerald",
    Visual: PricingVisual,
    cta: { primary: "Discuss pricing intel", secondary: "See pricing", link: "/pricing" },
  },
  {
    id: "marketplace-intelligence",
    num: "02",
    title: ["Marketplace", "intelligence."],
    emIdx: 0,
    tag: "Product, ranking and review data across 30+ marketplaces.",
    pitch:
      "Extract product data from any marketplace at scale to power your e-commerce analytics and competitive research. Amazon, Walmart, eBay, Shopify, plus regional marketplaces — all delivered on a single unified schema.",
    metric: { v: "10M+", l: "Products monitored", s: "across 30+ marketplaces in 12 countries" },
    bullets: [
      "Full product metadata: title, brand, images, attributes",
      "Inventory, ratings, review counts & review text",
      "Category & keyword rank tracking over time",
      "Seller, buy-box and shipping data",
      "Unified schema across all marketplaces",
    ],
    side: { h: "Source coverage", items: ["Amazon · global", "Walmart · US/CA", "eBay · global", "Shopify · 25K+ stores", "Regional (FR, DE, IN, JP)"] },
    accent: "rust",
    Visual: MarketplaceVisual,
    cta: { primary: "Discuss marketplace data", secondary: "See pricing", link: "/pricing" },
  },
  {
    id: "job-market",
    num: "03",
    title: ["Job market", "insights."],
    emIdx: 1,
    tag: "Hiring trends, salary data and skill demand from 50+ job boards.",
    pitch:
      "Aggregate job data from 50+ boards worldwide to track hiring trends, salary data, and skill demand across industries and regions. Indeed, LinkedIn Jobs, Glassdoor, Welcome to the Jungle, StepStone, and many more — deduplicated and normalized.",
    metric: { v: "1.4M+", l: "Jobs collected weekly", s: "deduplicated across boards, normalized to one schema" },
    bullets: [
      "Job title, company, location, salary band",
      "Posted date, applicant count, posting platform",
      "Extracted skills, seniority, employment type",
      "Cross-board dedup via fuzzy match + content hash",
      "Weekly or daily deltas — only fresh postings",
    ],
    side: { h: "Common use cases", items: ["Talent intelligence", "Wage analytics", "Skill demand forecasting", "Compensation benchmarks"] },
    accent: "indigo",
    Visual: JobsVisual,
    cta: { primary: "Discuss job data", secondary: "See pricing", link: "/pricing" },
  },
  {
    id: "linkedin-data",
    num: "04",
    title: ["LinkedIn data", "platform."],
    emIdx: 1,
    tag: "Profiles, companies, jobs and posts — zero account-ban risk.",
    pitch:
      "Professional data with zero account-ban risk. Access LinkedIn profiles, companies, jobs, and posts at scale with our cookieless approach. No cookies = no bans = no waking up to a dead pipeline at 3 a.m.",
    metric: { v: "100M+", l: "Profiles processed per month", s: "across profiles, companies, jobs and posts" },
    bullets: [
      "Full profile data: experience, skills, education, posts",
      "Company pages: size, growth, hires, tech stack",
      "Job listings with applicant counts & demographics",
      "Cookieless stealth — no account ban risk",
      "GDPR-compliant — right-to-be-forgotten honored",
    ],
    side: { h: "Built for", items: ["Sales intelligence", "Recruiting & talent CRMs", "Investor data products", "Account enrichment"] },
    accent: "gold",
    Visual: LinkedInVisual,
    cta: { primary: "Discuss LinkedIn data", secondary: "Or try Scrayz API", link: "https://scrayz.com" },
  },
  {
    id: "web-data-apis",
    num: "05",
    title: ["Web data", "APIs."],
    emIdx: 0,
    tag: "Custom REST endpoints — the API the source site never gave you.",
    pitch:
      "Custom REST APIs for any data source with real-time access, JSON or XML responses, and comprehensive documentation. We become the API the source site never gave you — designed around your domain model, not theirs.",
    metric: { v: "200", suffix: "ms", l: "Average response time", s: "P95 under 480ms · global edge cache" },
    bullets: [
      "Custom REST endpoints designed around your domain",
      "OpenAPI spec + interactive docs out of the box",
      "99.9% uptime SLA, edge-cached responses",
      "Authentication, rate limiting, usage analytics",
      "Webhook variants for push-based delivery",
    ],
    side: { h: "Integration extras", items: ["OpenAPI 3.1 spec", "Postman collection", "TypeScript SDK", "Status dashboard", "Sandbox keys"] },
    accent: "emerald",
    Visual: ApiVisual,
    cta: { primary: "Discuss API design", secondary: "See pricing", link: "/pricing" },
  },
  {
    id: "data-pipelines",
    num: "06",
    title: ["Data pipelines", "& ETL."],
    emIdx: 1,
    tag: "Automated extract → transform → load. Delivered on your schedule.",
    pitch:
      "Automated data delivery on your schedule — SFTP, S3, or direct database integration with full data validation and schema normalization. You stop thinking about scrapers. You start thinking about insights.",
    metric: { v: "99", suffix: "%+", l: "Uptime SLA", s: "monitored 24/7 · auto-recovery on common failures" },
    bullets: [
      "Fully automated extract → transform → load",
      "Direct write to Snowflake, BigQuery, Postgres, S3",
      "50+ internal QA checks per dataset, per run",
      "Schema-drift detection & auto-adaptation",
      "Slack / PagerDuty / email alerts on anomalies",
    ],
    side: { h: "Destinations", items: ["Snowflake · BigQuery", "Postgres · MySQL", "S3 · GCS · Azure", "SFTP · Webhook", "Custom destinations"] },
    accent: "indigo",
    Visual: PipelineVisual,
    cta: { primary: "Discuss your pipeline", secondary: "See pricing", link: "/pricing" },
  },
];

/* ============================================================
   ACCORDION
   ============================================================ */

type CardProps = {
  sol: Solution;
  isOpen: boolean;
  onToggle: () => void;
};

const SolutionCard = forwardRef<HTMLElement, CardProps>(function SolutionCard(
  { sol, isOpen, onToggle },
  ref
) {
  const Visual = sol.Visual;
  return (
    <article
      ref={ref}
      id={sol.id}
      className={`sol-card ${isOpen ? "open" : ""}`}
      data-accent={sol.accent}
    >
      <button className="sc-ribbon" onClick={onToggle} aria-expanded={isOpen}>
        <span className="sc-num">{sol.num}</span>
        <div className="sc-rmid">
          <h3 className="sc-rtitle">
            {sol.title.map((w, i) => (
              <span key={i} className={i === sol.emIdx ? "em" : ""}>
                {w}
                {i < sol.title.length - 1 ? " " : ""}
              </span>
            ))}
          </h3>
          <p className="sc-rtag">{sol.tag}</p>
        </div>
        <div className="sc-rmetric">
          <div className="sc-rmv">
            {sol.metric.v}
            {sol.metric.suffix ? <small>{sol.metric.suffix}</small> : null}
          </div>
          <div className="sc-rml">{sol.metric.l}</div>
        </div>
        <span className="sc-rtoggle" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="12" y1="5" x2="12" y2="19" className="plus-v" />
          </svg>
        </span>
      </button>

      <div className="sc-spread">
        <div className="sc-spread-inner">
          <div className="sc-ghost">{sol.num}</div>

          <div className="sc-top">
            <div className="sc-pitch">
              <span className="sc-pitch-label">The brief</span>
              <p>{sol.pitch}</p>
            </div>
            <aside className="sc-side">
              <div className="sc-side-h">{sol.side.h}</div>
              <ul className="sc-side-list">
                {sol.side.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="sc-visual"><Visual /></div>

          <div className="sc-bottom">
            <div className="sc-tile sc-tile--bullets">
              <div className="sc-tile-h">What you get</div>
              <ul className="sc-bullets">
                {sol.bullets.map((b) => (
                  <li key={b}><span className="b-tick" />{b}</li>
                ))}
              </ul>
            </div>

            <div className="sc-tile sc-tile--meta">
              <div className="sc-tile-h">Engagement</div>
              <dl className="sc-meta-dl">
                <div><dt>Cadence</dt><dd>Any · realtime → monthly</dd></div>
                <div><dt>Delivery</dt><dd>API · S3 · SFTP · webhook</dd></div>
                <div><dt>Setup</dt><dd>Sample in 48–72h</dd></div>
                <div><dt>Anti-bot</dt><dd>Included · all layers</dd></div>
              </dl>
            </div>

            <div className="sc-tile sc-tile--cta">
              <div className="sc-tile-h">Next step</div>
              <p>30-min intro, free sample within 48–72h, then a clear quote.</p>
              <div className="sc-cta-row">
                <a href="#contact" className="btn btn-accent">
                  {sol.cta.primary} <span className="arrow">→</span>
                </a>
                <a href={sol.cta.link} className="btn btn-ghost">{sol.cta.secondary}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

export default function SolutionsStack() {
  const [open, setOpen] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const idx = SOLUTIONS.findIndex((s) => s.id === hash);
    if (idx >= 0) {
      setOpen(idx);
      setTimeout(() => {
        const el = cardRefs.current[idx];
        if (el) {
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }, 400);
    }
  }, []);

  return (
    <div className="sol-stack">
      {SOLUTIONS.map((s, i) => (
        <SolutionCard
          key={s.id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          sol={s}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
