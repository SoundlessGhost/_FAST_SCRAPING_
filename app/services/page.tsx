import Link from "next/link";
import type { Metadata } from "next";
import KMAvatar from "@/components/KMAvatar";
import "../styles/about.css";
import "../styles/services.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight engineering capabilities for enterprise web scraping — managed scrapers, anti-bot bypass, crawling, real-time APIs, ETL, mobile app data, LinkedIn, white-label partnership.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Fastscraping",
    description: "Eight engineering capabilities, à la carte.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services · Fastscraping",
    description: "Eight engineering capabilities, à la carte.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="sv-hero" data-screen-label="01 Services hero">
        <div className="container">
          <div className="sv-band">
            <span className="eyebrow">Services · capability catalog</span>
            <div className="sv-band-meta">
              <span className="sv-band-kbd">SPEC SHEET</span>
              <span className="sv-band-sep">·</span>
              <span>v8.4 · revised 23 May 2026</span>
              <span className="sv-band-sep">·</span>
              <span>8 capabilities</span>
            </div>
          </div>

          <div className="sv-headline">
            <h1 className="display sv-h1">
              Engineering
              <em>capabilities</em>,
              <span className="sv-h1-line">à la carte.</span>
            </h1>
            <aside className="sv-deck">
              <p>
                The eight things we do, with the technical depth to back them. Pick one, pick
                all of them, or pick the two that solve your exact problem. We assemble them
                into an engagement that fits.
              </p>
              <p className="sv-deck-cta">
                <Link href="#catalog" className="btn btn-primary">
                  Open the catalog <span className="arrow">↓</span>
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* INDEX */}
      <section className="sv-index" id="catalog" data-screen-label="02 Index">
        <div className="container">
          <header className="sv-index-h">
            <div>
              <span className="sv-index-label">01 · Index</span>
              <h2 className="display">
                All eight capabilities, <em>at a glance.</em>
              </h2>
            </div>
            <p>
              Click any row to jump to its spec sheet. Or scroll past the index for the full
              detail.
            </p>
          </header>

          <div className="sv-index-table">
            <div className="sv-ix-head">
              <span>Code</span>
              <span>Capability</span>
              <span>Best for</span>
              <span>Engagement</span>
              <span>Starting at</span>
            </div>
            {[
              { code: "SVC-01", href: "#s-managed", name: "Managed scraping", best: "Build & run a scraper end-to-end", eng: "Monthly retainer", price: "$1,200", small: "/mo", feature: false, star: false },
              { code: "SVC-02", href: "#s-antibot", name: "Anti-bot engineering", best: "Cloudflare · DataDome · PerimeterX · Akamai", eng: "Included with any pipeline", price: "included", small: "", feature: true, star: true },
              { code: "SVC-03", href: "#s-crawling", name: "Enterprise crawling", best: "Crawl entire domains at scale", eng: "Project + retainer", price: "$3,500", small: "/mo", feature: false, star: false },
              { code: "SVC-04", href: "#s-apis", name: "Real-time data APIs", best: "REST endpoints with 99.9% SLA", eng: "Build + usage-based", price: "$2,400", small: "/mo", feature: false, star: false },
              { code: "SVC-05", href: "#s-etl", name: "Data pipelines & ETL", best: "Daily/weekly delivery to your warehouse", eng: "Monthly retainer", price: "$1,800", small: "/mo", feature: false, star: false },
              { code: "SVC-06", href: "#s-mobile", name: "Mobile app reverse-engineering", best: "Data only available inside iOS/Android apps", eng: "Build + maintenance", price: "$4,800", small: "+", feature: false, star: false },
              { code: "SVC-07", href: "#s-linkedin", name: "LinkedIn data platform", best: "B2B intelligence at production scale", eng: "Monthly retainer", price: "$3,200", small: "/mo", feature: false, star: false },
              { code: "SVC-08", href: "#s-whitelabel", name: "White-label partnership", best: "Agencies & resellers · silent backend", eng: "Revenue share or wholesale", price: "custom", small: "", feature: false, star: false },
            ].map((r) => (
              <Link
                key={r.code}
                href={r.href}
                className={`sv-ix-row${r.feature ? " sv-ix-row--feature" : ""}`}
              >
                <span className="sv-ix-code">{r.code}</span>
                <span className="sv-ix-name">
                  {r.name}
                  {r.star ? <span className="sv-ix-star">★</span> : null}
                </span>
                <span className="sv-ix-best">{r.best}</span>
                <span className="sv-ix-eng">{r.eng}</span>
                <span className="sv-ix-price">
                  {r.price}
                  {r.small ? <small>{r.small}</small> : null}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SPEC SHEETS */}
      <section className="sv-specs" data-screen-label="03 Spec sheets">
        <div className="container">
          {/* SVC-01 */}
          <article className="sv-spec" id="s-managed">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">01</div>
              <div className="sv-spec-code">SVC-01</div>
              <div className="sv-spec-vert">MANAGED · BUILD · RUN</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag">Managed scraping</span>
                <h3 className="sv-spec-title">
                  End-to-end scrapers, <em>fully owned by us.</em>
                </h3>
                <p className="sv-spec-pitch">
                  You bring the requirements. We build, deploy, monitor, and maintain the
                  scraper. You receive clean, structured data on schedule and never write a line
                  of code.
                </p>
              </header>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Inputs</div>
                  <ul className="sv-cell-list">
                    <li>Target URL(s) or domain(s)</li>
                    <li>Field list — what you want to extract</li>
                    <li>Delivery destination &amp; cadence</li>
                    <li>Volume + SLA expectations</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">What we do</div>
                  <ul className="sv-cell-list">
                    <li>Architecture &amp; scraper build</li>
                    <li>Anti-bot &amp; proxy strategy</li>
                    <li>Deploy &amp; schedule</li>
                    <li>24/7 monitoring + selector-drift auto-adapt</li>
                    <li>50+ QA gates per dataset, per run</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Outputs</div>
                  <ul className="sv-cell-list">
                    <li>JSON / CSV / Parquet / NDJSON</li>
                    <li>Delivered via API · Webhook · S3 · SFTP</li>
                    <li>Direct write to Snowflake / BigQuery / Postgres</li>
                    <li>Monthly QA report + uptime stats</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Month-to-month retainer</span></div>
                  <div><span className="k">Time to first data</span><span className="v">48–72 hours</span></div>
                  <div><span className="k">From</span><span className="v">$1,200 / month</span></div>
                </div>
                <Link href="/contact?svc=managed" className="btn btn-ghost">
                  Discuss this <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-02 FEATURE */}
          <article className="sv-spec sv-spec--feature" id="s-antibot">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">02</div>
              <div className="sv-spec-code">SVC-02</div>
              <div className="sv-spec-vert">SPECIALTY · CORE COMPETENCY</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag sv-spec-tag--hot">
                  Anti-bot engineering · the specialty
                </span>
                <h3 className="sv-spec-title">
                  We bypass what blocks <em>everyone else.</em>
                </h3>
                <p className="sv-spec-pitch">
                  This is the core competency the company is built around. Every other capability
                  on this page rides on top of it. If the site is &quot;hard,&quot; we&apos;d
                  rather start with it than another easy job.
                </p>
              </header>

              <div className="sv-shields">
                {[
                  { name: "Cloudflare", sub: "Turnstile · WAF · JS challenge", pct: "99.8%" },
                  { name: "DataDome", sub: "ML detection · device fingerprint", pct: "99.4%" },
                  { name: "PerimeterX", sub: "Behavioral + bot scoring", pct: "99.6%" },
                  { name: "Akamai Bot Manager", sub: "Sensor data + challenge JS", pct: "99.1%" },
                  { name: "CAPTCHAs", sub: "reCAPTCHA · hCaptcha · Turnstile", pct: "99.5%" },
                  { name: "Fingerprinting", sub: "Canvas · WebGL · TLS · font", pct: "99.7%" },
                ].map((s) => (
                  <div className="sv-shield" key={s.name}>
                    <div className="sv-shield-name">{s.name}</div>
                    <div className="sv-shield-sub">{s.sub}</div>
                    <div className="sv-shield-meter">
                      <span style={{ width: s.pct }}></span>
                    </div>
                    <div className="sv-shield-pct">{s.pct}</div>
                  </div>
                ))}
              </div>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Techniques we use</div>
                  <ul className="sv-cell-list">
                    <li>Stealth headless with TLS fingerprint match</li>
                    <li>Persistent aged browser profiles</li>
                    <li>Residential + mobile proxy rotation</li>
                    <li>Canvas / WebGL / font noise emulation</li>
                    <li>Behavioral mouse &amp; timing models</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">What we don&apos;t do</div>
                  <ul className="sv-cell-list">
                    <li>Cookie-buying or stolen-session shortcuts</li>
                    <li>Burning client accounts for the win</li>
                    <li>Anything that wouldn&apos;t pass a security review</li>
                    <li>Volume that gets your IP rangebanned in a week</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Pricing</div>
                  <ul className="sv-cell-list">
                    <li>Included in any pipeline · no add-on fee</li>
                    <li>One-off bypass research available</li>
                    <li>From $4,000 · one-off audits</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Included in every other service</span></div>
                  <div><span className="k">Success rate</span><span className="v">99.4% across all layers</span></div>
                  <div><span className="k">From</span><span className="v">$0 add-on / $4,000 audit</span></div>
                </div>
                <Link href="/contact?svc=antibot" className="btn btn-accent">
                  Bring us your hardest site <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-03 */}
          <article className="sv-spec" id="s-crawling">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">03</div>
              <div className="sv-spec-code">SVC-03</div>
              <div className="sv-spec-vert">CRAWL · DOMAIN · SCALE</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag">Enterprise crawling</span>
                <h3 className="sv-spec-title">
                  Crawl entire domains, <em>at massive scale.</em>
                </h3>
                <p className="sv-spec-pitch">
                  Full-domain crawling for market research, competitive intelligence, and corpus
                  building. Proxy rotation, rate limiting, content deduplication, and storage —
                  all handled.
                </p>
              </header>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Inputs</div>
                  <ul className="sv-cell-list">
                    <li>Seed URLs or domain list</li>
                    <li>Crawl depth &amp; URL pattern rules</li>
                    <li>Politeness rules + rate budget</li>
                    <li>Archive storage destination</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">What we do</div>
                  <ul className="sv-cell-list">
                    <li>Distributed crawler architecture</li>
                    <li>Dedup via content hash + canonical URL</li>
                    <li>Politeness — robots.txt + per-host caps</li>
                    <li>Schema extraction (JSON-LD · microdata · OG)</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Outputs</div>
                  <ul className="sv-cell-list">
                    <li>WARC archives + Parquet metadata</li>
                    <li>S3 / GCS storage with content addressing</li>
                    <li>Per-domain coverage report</li>
                    <li>Search index ready (Elasticsearch · OpenSearch)</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Project setup + monthly run</span></div>
                  <div><span className="k">Max scale tested</span><span className="v">2.4B documents</span></div>
                  <div><span className="k">From</span><span className="v">$3,500 / month</span></div>
                </div>
                <Link href="/contact?svc=crawling" className="btn btn-ghost">
                  Discuss this <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-04 */}
          <article className="sv-spec" id="s-apis">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">04</div>
              <div className="sv-spec-code">SVC-04</div>
              <div className="sv-spec-vert">API · REST · REAL-TIME</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag">Real-time data APIs</span>
                <h3 className="sv-spec-title">
                  The API the source <em>never gave you.</em>
                </h3>
                <p className="sv-spec-pitch">
                  Custom REST endpoints designed around <em>your</em> domain model, not the
                  source website&apos;s. OpenAPI spec, interactive docs, edge caching, 99.9%
                  uptime SLA.
                </p>
              </header>

              <div className="sv-code">
                <div className="sv-code-h">
                  <span className="sv-code-method">GET</span>
                  <span className="sv-code-path">
                    api.fastscraping.com/v1/<em>your-domain</em>/search
                  </span>
                  <span className="sv-code-ping">↘ 187ms</span>
                </div>
                <pre>{`{
  "source": "amazon.com",
  "query": "wireless headphones",
  "fetched_at": "2026-05-25T14:08:42Z",
  "results": [{ "sku": "B0C33XKZP4", "price_usd": 348.00, "stock": "in_stock" }, ...],
  "bypassed": ["amazon_botd"],
  "cache": "HIT"
}`}</pre>
              </div>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Design</div>
                  <ul className="sv-cell-list">
                    <li>REST endpoints in your domain language</li>
                    <li>OpenAPI 3.1 spec + Postman collection</li>
                    <li>TypeScript SDK + sample apps</li>
                    <li>Rate limiting + usage analytics dashboard</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Performance</div>
                  <ul className="sv-cell-list">
                    <li>P50 200ms · P95 480ms · global edge cache</li>
                    <li>99.9% uptime SLA</li>
                    <li>Webhook variant for push-based delivery</li>
                    <li>Status dashboard with incident history</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Compliance</div>
                  <ul className="sv-cell-list">
                    <li>Auth via API keys or OAuth 2.0</li>
                    <li>GDPR-compliant edge caching</li>
                    <li>Audit log of every request</li>
                    <li>Per-key data residency option</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Build fee + monthly usage</span></div>
                  <div><span className="k">P95 latency</span><span className="v">&lt; 480ms · global</span></div>
                  <div><span className="k">From</span><span className="v">$2,400 / month</span></div>
                </div>
                <Link href="/contact?svc=api" className="btn btn-ghost">
                  Discuss this <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-05 */}
          <article className="sv-spec" id="s-etl">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">05</div>
              <div className="sv-spec-code">SVC-05</div>
              <div className="sv-spec-vert">ETL · PIPELINES · DELIVERY</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag">Data pipelines &amp; ETL</span>
                <h3 className="sv-spec-title">
                  Daily, weekly, monthly. <em>On your schedule.</em>
                </h3>
                <p className="sv-spec-pitch">
                  Fully automated extract → transform → load with quality gates and selector-drift
                  detection. Delivered to your warehouse, your bucket, your webhook.
                </p>
              </header>

              <div className="sv-pipe">
                {[
                  { name: "EXTRACT", items: ["Stealth fetch", "Anti-bot bypass", "Parse + validate"] },
                  { name: "TRANSFORM", items: ["Schema normalize", "Dedup & enrich", "50+ QA gates"] },
                  { name: "LOAD", items: ["Snowflake · BigQuery", "S3 · Parquet · Webhook", "Slack alerts on anomaly"] },
                ].map((s, i, arr) => (
                  <span key={s.name} style={{ display: "contents" }}>
                    <div className="sv-pipe-stage">
                      <div className="sv-pipe-name">{s.name}</div>
                      <div className="sv-pipe-list">
                        {s.items.map((it) => (
                          <div key={it}>{it}</div>
                        ))}
                      </div>
                    </div>
                    {i < arr.length - 1 ? <div className="sv-pipe-arrow">→</div> : null}
                  </span>
                ))}
              </div>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Schedules</div>
                  <ul className="sv-cell-list">
                    <li>Real-time · streaming (sub-minute)</li>
                    <li>Hourly · 15-minute SLA</li>
                    <li>Daily · 8-hour SLA</li>
                    <li>Weekly · monthly</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Destinations</div>
                  <ul className="sv-cell-list">
                    <li>Snowflake · BigQuery · Postgres direct write</li>
                    <li>S3 · GCS · Azure Blob</li>
                    <li>SFTP · Webhook · Kafka</li>
                    <li>CSV via email · NDJSON · Parquet</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Quality</div>
                  <ul className="sv-cell-list">
                    <li>50+ QA checks per dataset, per run</li>
                    <li>Schema-drift detection &amp; auto-adapt</li>
                    <li>PagerDuty / Slack alerts</li>
                    <li>Monthly data quality report</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Monthly retainer</span></div>
                  <div><span className="k">Uptime delivered</span><span className="v">99%+ on every active client</span></div>
                  <div><span className="k">From</span><span className="v">$1,800 / month</span></div>
                </div>
                <Link href="/contact?svc=etl" className="btn btn-ghost">
                  Discuss this <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-06 */}
          <article className="sv-spec" id="s-mobile">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">06</div>
              <div className="sv-spec-code">SVC-06</div>
              <div className="sv-spec-vert">MOBILE · iOS · ANDROID</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag">Mobile app reverse-engineering</span>
                <h3 className="sv-spec-title">
                  Data that only lives <em>inside the app.</em>
                </h3>
                <p className="sv-spec-pitch">
                  Some platforms hide their richest data inside iOS and Android apps. We replay
                  the real mobile protocol — not the web — to extract it cleanly.
                </p>
              </header>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Approach</div>
                  <ul className="sv-cell-list">
                    <li>Traffic capture &amp; protocol mapping</li>
                    <li>Certificate pinning bypass (Frida · objection)</li>
                    <li>API signing &amp; token rotation</li>
                    <li>Real device farm for hard apps</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Targets we&apos;ve cracked</div>
                  <ul className="sv-cell-list">
                    <li>DoorDash · Uber Eats · Grubhub</li>
                    <li>StubHub mobile · SeatGeek mobile</li>
                    <li>Regional food &amp; grocery apps</li>
                    <li>(Plus several under NDA)</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Outputs</div>
                  <ul className="sv-cell-list">
                    <li>Native protocol clients (HTTP/gRPC)</li>
                    <li>Token refresh + session management</li>
                    <li>Same delivery formats as SVC-05</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Build fee + monthly maintenance</span></div>
                  <div><span className="k">Build time</span><span className="v">2–6 weeks per app</span></div>
                  <div><span className="k">From</span><span className="v">$4,800 build · then monthly</span></div>
                </div>
                <Link href="/contact?svc=mobile" className="btn btn-ghost">
                  Discuss this <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-07 */}
          <article className="sv-spec" id="s-linkedin">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">07</div>
              <div className="sv-spec-code">SVC-07</div>
              <div className="sv-spec-vert">B2B · LINKEDIN · STEALTH</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag">LinkedIn data platform</span>
                <h3 className="sv-spec-title">
                  100M+ profiles a month. <em>Zero account bans.</em>
                </h3>
                <p className="sv-spec-pitch">
                  Cookieless stealth identities — not just rotating IPs. Profiles, companies,
                  jobs and posts at production scale, with a delivery cadence you choose.
                </p>
              </header>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Coverage</div>
                  <ul className="sv-cell-list">
                    <li>Full profiles · experience · skills · education</li>
                    <li>Companies · size · growth · hires · tech stack</li>
                    <li>Job listings + applicant counts</li>
                    <li>Public posts &amp; reactions</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Why &quot;no bans&quot;</div>
                  <ul className="sv-cell-list">
                    <li>Cookieless — no client account is ever used</li>
                    <li>TLS &amp; browser fingerprint matched to mobile</li>
                    <li>Aged stealth profiles, never recycled</li>
                    <li>Behavioral pacing — not &quot;max speed&quot;</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Compliance</div>
                  <ul className="sv-cell-list">
                    <li>GDPR-aware: RTBF supported</li>
                    <li>Public-data-only by default</li>
                    <li>Audit log per request</li>
                    <li>Per-region delivery</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Monthly retainer</span></div>
                  <div><span className="k">Scale tested</span><span className="v">100M+ profiles / month</span></div>
                  <div><span className="k">From</span><span className="v">$3,200 / month</span></div>
                </div>
                <Link href="/contact?svc=linkedin" className="btn btn-ghost">
                  Discuss this <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>

          {/* SVC-08 DARK */}
          <article className="sv-spec sv-spec--dark" id="s-whitelabel">
            <div className="sv-spec-rail">
              <div className="sv-spec-num">08</div>
              <div className="sv-spec-code">SVC-08</div>
              <div className="sv-spec-vert">PARTNER · SILENT · WHITE-LABEL</div>
            </div>
            <div className="sv-spec-body">
              <header className="sv-spec-head">
                <span className="sv-spec-tag sv-spec-tag--invert">White-label partnership</span>
                <h3 className="sv-spec-title">
                  We operate <em>silently</em> behind your brand.
                </h3>
                <p className="sv-spec-pitch">
                  For agencies and data resellers: one contract, one invoice, zero attribution.
                  Your clients see your brand. We never appear, we never reach out, we never sign
                  a NDA we can&apos;t honor.
                </p>
              </header>

              <div className="sv-spec-grid">
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">How it works</div>
                  <ul className="sv-cell-list">
                    <li>You scope with your client. We execute.</li>
                    <li>Branded deliveries · branded reports</li>
                    <li>Optional white-label dashboard</li>
                    <li>Direct support — Slack channel into our team</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">Pricing models</div>
                  <ul className="sv-cell-list">
                    <li>Wholesale rate card (volume discounts)</li>
                    <li>Revenue share (for high-margin products)</li>
                    <li>Bundle pricing for &gt; 3 clients</li>
                  </ul>
                </div>
                <div className="sv-spec-cell">
                  <div className="sv-cell-h">For agencies that</div>
                  <ul className="sv-cell-list">
                    <li>Sell data but don&apos;t want to build the stack</li>
                    <li>Need extra capacity for spiky workloads</li>
                    <li>Want anti-bot expertise without hiring it</li>
                    <li>Have a hard target an in-house team can&apos;t crack</li>
                  </ul>
                </div>
              </div>

              <footer className="sv-spec-foot">
                <div className="sv-spec-meta">
                  <div><span className="k">Engagement</span><span className="v">Master partnership agreement</span></div>
                  <div><span className="k">Current partners</span><span className="v">3 agencies · NDA</span></div>
                  <div><span className="k">From</span><span className="v">Custom · let&apos;s talk</span></div>
                </div>
                <Link href="/contact?svc=whitelabel" className="btn btn-accent">
                  Become a partner <span className="arrow">→</span>
                </Link>
              </footer>
            </div>
          </article>
        </div>
      </section>

      {/* BUNDLES */}
      <section className="block sv-bundles" data-screen-label="04 Bundles">
        <div className="container">
          <header className="sv-bundle-head">
            <span className="eyebrow">Pre-bundled · ready to scope</span>
            <h2 className="display">
              Capability <em>bundles.</em>
            </h2>
            <p>
              Three pre-bundled packs we end up assembling most often. Or describe your own
              combination and we&apos;ll quote it.
            </p>
          </header>

          <div className="sv-bundle-grid">
            <article className="sv-bundle">
              <header className="sv-bundle-h">
                <span className="sv-bundle-step">Bundle 01</span>
                <span className="sv-bundle-code">SVC-01 + 02</span>
              </header>
              <div className="sv-bundle-name">STARTER</div>
              <h3>One source, fully owned.</h3>
              <p>
                A single tricky scraper, built and run by us with anti-bot bypass included. For
                teams who need one source done right.
              </p>
              <ul>
                <li>One managed scraper</li>
                <li>Anti-bot included</li>
                <li>API or webhook delivery</li>
                <li>24/7 monitoring</li>
              </ul>
              <div className="sv-bundle-foot">
                <div className="sv-bundle-foot-l">
                  <span className="sv-bundle-foot-k">Best for</span>
                  <span className="sv-bundle-foot-v">
                    First-time clients · single critical source
                  </span>
                </div>
                <Link href="/contact?bundle=starter" className="btn btn-ghost">
                  Get started <span className="arrow">→</span>
                </Link>
              </div>
            </article>

            <article className="sv-bundle sv-bundle--featured">
              <header className="sv-bundle-h">
                <span className="sv-bundle-step">Bundle 02</span>
                <span className="sv-bundle-code">SVC-01 + 02 + 04 + 05</span>
              </header>
              <div className="sv-bundle-name">
                GROWTH <span className="sv-bundle-mark">★ Most common shape</span>
              </div>
              <h3>Multi-source pipeline + API.</h3>
              <p>
                Three-to-five sources, an ETL pipeline into your warehouse, and a custom API
                surface for your product team. The shape most clients converge on.
              </p>
              <ul>
                <li>3–5 managed scrapers</li>
                <li>Anti-bot · all layers · included</li>
                <li>Custom REST API + warehouse load</li>
                <li>Dedicated Slack channel</li>
                <li>Quarterly capacity reviews</li>
              </ul>
              <div className="sv-bundle-foot">
                <div className="sv-bundle-foot-l">
                  <span className="sv-bundle-foot-k">Best for</span>
                  <span className="sv-bundle-foot-v">
                    Data teams scaling beyond a single source
                  </span>
                </div>
                <Link href="/contact?bundle=growth" className="btn btn-accent">
                  Quote this <span className="arrow">→</span>
                </Link>
              </div>
            </article>

            <article className="sv-bundle">
              <header className="sv-bundle-h">
                <span className="sv-bundle-step">Bundle 03</span>
                <span className="sv-bundle-code">SVC-01 … 08</span>
              </header>
              <div className="sv-bundle-name">ENTERPRISE</div>
              <h3>Full stack · silent backend.</h3>
              <p>
                The full menu. Used by data resellers and large enterprises who want the entire
                capability under one roof — often white-labeled.
              </p>
              <ul>
                <li>Unlimited managed scrapers · within scope</li>
                <li>Mobile app + LinkedIn included</li>
                <li>Dedicated engineer assigned</li>
                <li>Custom MSA · SOC 2 evidence on request</li>
              </ul>
              <div className="sv-bundle-foot">
                <div className="sv-bundle-foot-l">
                  <span className="sv-bundle-foot-k">Best for</span>
                  <span className="sv-bundle-foot-v">
                    Agencies, resellers, white-label partners
                  </span>
                </div>
                <Link href="/contact?bundle=enterprise" className="btn btn-ghost">
                  Talk to Khalid <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="block" style={{ paddingTop: 0 }} data-screen-label="05 CTA">
        <div className="container">
          <div className="cta">
            <div>
              <span className="eyebrow">Not sure which to pick?</span>
              <h2 style={{ marginTop: 18 }}>
                Tell us the problem, <em>we&apos;ll pick the capabilities.</em>
              </h2>
              <p>
                Send us a one-paragraph brief — the target sites, the data, the cadence.
                We&apos;ll come back with the right combination of services and a tailored quote
                within 24 hours.
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
                  Month-to-month
                </span>
              </div>
            </div>

            <div className="cta-card">
              <div className="label">Direct line</div>
              <div className="person">
                <KMAvatar variant="large" />
                <div>
                  <div className="n">Md Khalid Mahmud Shawon</div>
                  <div className="r">Founder · capability planning</div>
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
                  Send brief
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
