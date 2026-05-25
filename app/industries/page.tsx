import Link from "next/link";
import type { Metadata } from "next";
import KMAvatar from "@/components/KMAvatar";
import "../styles/about.css";
import "../styles/industries.css";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Six verticals where Fastscraping runs production pipelines today — e-commerce, real estate, talent, ticketing, food delivery, and AI training data.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries · Fastscraping",
    description: "Six verticals · 5 countries · 2.4B records/month.",
    url: "/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries · Fastscraping",
    description: "Six verticals · 5 countries · 2.4B records/month.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* ATLAS HERO */}
      <section className="ind-atlas" data-screen-label="01 Atlas hero">
        <div className="container">
          <div className="ind-band">
            <span className="eyebrow">The atlas · 2026</span>
            <div className="ind-band-meta">
              <span>6 chapters</span>
              <span className="ind-band-sep">·</span>
              <span>5 countries</span>
              <span className="ind-band-sep">·</span>
              <span>2.4B records / mo</span>
            </div>
          </div>

          <div className="ind-headline">
            <h1 className="ind-h1">
              <span className="ind-h1-supra">An atlas of the</span>
              <em>industries</em>
              <span className="ind-h1-line">we scrape.</span>
            </h1>
            <aside className="ind-deck">
              <p>
                Six verticals where we run production pipelines today. Each one has its own
                anti-bot stack, its own data conventions, its own clients.{" "}
                <strong>Jump to any chapter</strong>, or scroll the atlas top-to-bottom.
              </p>
            </aside>
          </div>

          <nav className="ind-strip" id="ind-strip">
            {[
              { href: "#i-retail", color: "retail", num: "01", name: ["E-commerce", "& retail"], stat: "2.4M SKUs/d" },
              { href: "#i-realestate", color: "realestate", num: "02", name: ["Real", "estate"], stat: "1.2M listings/d" },
              { href: "#i-talent", color: "talent", num: "03", name: ["Talent &", "recruitment"], stat: "1.4M jobs/wk" },
              { href: "#i-ticketing", color: "ticketing", num: "04", name: ["Ticketing", "& events"], stat: "15M listings/d" },
              { href: "#i-food", color: "food", num: "05", name: ["Food", "delivery"], stat: "8M items/d" },
              { href: "#i-ai", color: "ai", num: "06", name: ["AI &", "machine learning"], stat: "2.4B docs" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="ind-strip-item" data-color={c.color}>
                <div className="ind-strip-num">{c.num}</div>
                <div className="ind-strip-name">
                  {c.name[0]}
                  <br />
                  {c.name[1]}
                </div>
                <div className="ind-strip-stat">{c.stat}</div>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* CHAPTER 01 RETAIL */}
      <section className="ind-chapter ind-ch--retail" id="i-retail" data-screen-label="02 Retail">
        <div className="container">
          <header className="ind-ch-head">
            <div className="ind-ch-num">01</div>
            <div className="ind-ch-trail">
              <span className="ind-ch-tag">CHAPTER 01 · CONSUMER COMMERCE</span>
              <h2 className="ind-ch-title">
                E-commerce <em>&amp; retail.</em>
              </h2>
              <p className="ind-ch-pitch">
                Track product, price, stock, and review data across marketplaces and DTC sites
                at scale. From a single SKU&apos;s competitive position to a brand&apos;s entire
                catalog re-indexed every four hours.
              </p>
            </div>
          </header>

          <div className="ind-ch-body">
            <div className="ind-retail-grid">
              {[
                { name: "Sony WH-1000XM5", price: "$313", state: "best", label: "BEST", comp: "3 of 12 competitors above", bg: "#3d3a35", fg: "#5a5650" },
                { name: "Bose QC Ultra", price: "$429", state: "mid", label: "MID", comp: "6 of 12 above · 6 below", bg: "#2a3a44", fg: "#3a4d5a" },
                { name: "Sennheiser Momentum", price: "$339", state: "over", label: "OVER", comp: "undercut by 4 retailers · $11", bg: "#3d2f2a", fg: "#5a4640", alert: true },
                { name: "Apple AirPods Max", price: "$539", state: "mid", label: "MID", comp: "benchmark of 7 sources", bg: "#1a2620", fg: "#2a3d34" },
              ].map((s) => (
                <article
                  key={s.name}
                  className={`ind-sku${s.alert ? " ind-sku--alert" : ""}`}
                >
                  <div className="ind-sku-img" style={{ background: s.bg }}>
                    <svg viewBox="0 0 60 60">
                      <circle cx="30" cy="26" r="14" fill={s.fg} />
                      <rect x="14" y="34" width="32" height="12" rx="4" fill={s.fg} />
                    </svg>
                  </div>
                  <div className="ind-sku-name">{s.name}</div>
                  <div className="ind-sku-row">
                    <span className="ind-sku-you">{s.price}</span>
                    <span className={`ind-sku-${s.state}`}>{s.label}</span>
                  </div>
                  <div className="ind-sku-comp">{s.comp}</div>
                </article>
              ))}
            </div>

            <aside className="ind-retail-side">
              <div className="ind-side-stat">
                <div className="v">2.4M</div>
                <div className="l">SKUs tracked daily</div>
              </div>
              <div className="ind-side-stat">
                <div className="v">147</div>
                <div className="l">Undercut alerts today</div>
              </div>
              <div className="ind-side-stat">
                <div className="v">&lt; 4min</div>
                <div className="l">Price-drop reaction</div>
              </div>
              <div className="ind-side-sites">
                <div className="ind-side-h">Active sources</div>
                <ul>
                  <li>Amazon · global</li>
                  <li>Walmart · US/CA</li>
                  <li>Shopify · 25K+ stores</li>
                  <li>eBay · global</li>
                  <li>Best Buy · Target</li>
                  <li>+ 14 regional retailers</li>
                </ul>
              </div>
            </aside>
          </div>

          <footer className="ind-ch-foot">
            <div className="ind-ch-uses">
              <span className="ind-ch-uses-h">What clients build on this</span>
              <span>Dynamic repricing engines</span>
              <span>Brand-protection dashboards</span>
              <span>Margin-recovery alerts</span>
              <span>Buy-box monitoring</span>
              <span>Marketplace mass-update tools</span>
            </div>
            <Link href="/contact?industry=retail" className="btn btn-ghost">
              Discuss a retail pipeline <span className="arrow">→</span>
            </Link>
          </footer>
        </div>
      </section>

      {/* CHAPTER 02 REAL ESTATE */}
      <section
        className="ind-chapter ind-ch--realestate"
        id="i-realestate"
        data-screen-label="03 Real estate"
      >
        <div className="container">
          <header className="ind-ch-head">
            <div className="ind-ch-num">02</div>
            <div className="ind-ch-trail">
              <span className="ind-ch-tag">CHAPTER 02 · PROPERTY DATA</span>
              <h2 className="ind-ch-title">
                Real <em>estate.</em>
              </h2>
              <p className="ind-ch-pitch">
                Multi-source listing data across regional portals, unified to one schema. Daily
                refresh, geocoded, with price-history continuity even when listings get re-listed.
              </p>
            </div>
          </header>

          <div className="ind-ch-body">
            <div className="ind-re-main">
              <div className="ind-re-map">
                <svg viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                  <defs>
                    <pattern id="rmap" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
                    </pattern>
                  </defs>
                  <rect width="600" height="360" fill="#c14a25" />
                  <rect width="600" height="360" fill="url(#rmap)" />
                  <path
                    d="M 80 80 L 220 60 L 320 100 L 440 80 L 520 140 L 540 240 L 460 300 L 340 290 L 240 320 L 120 280 L 60 200 Z"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                  />
                  <g>
                    <circle cx="180" cy="140" r="5" fill="#fff" />
                    <circle cx="180" cy="140" r="11" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="r" from="5" to="20" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="280" cy="200" r="5" fill="#fff" />
                    <circle cx="380" cy="160" r="5" fill="#fff" />
                    <circle cx="380" cy="160" r="11" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.5">
                      <animate attributeName="r" from="5" to="20" dur="2.8s" repeatCount="indefinite" begin="0.4s" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2.8s" repeatCount="indefinite" begin="0.4s" />
                    </circle>
                    <circle cx="460" cy="240" r="5" fill="#fff" />
                    <circle cx="220" cy="260" r="5" fill="#fff" />
                    <circle cx="340" cy="240" r="5" fill="#fff" />
                    <circle cx="140" cy="220" r="5" fill="#fff" />
                  </g>
                  <text x="32" y="40" fontFamily="Geist Mono" fontSize="11" fill="rgba(255,255,255,0.8)" letterSpacing="0.14em">
                    SWITZERLAND · CH
                  </text>
                  <text x="568" y="40" textAnchor="end" fontFamily="Geist Mono" fontSize="11" fill="rgba(255,255,255,0.8)" letterSpacing="0.14em">
                    1.2M LIVE LISTINGS
                  </text>
                  <text x="32" y="340" fontFamily="Geist Mono" fontSize="9" fill="rgba(255,255,255,0.6)" letterSpacing="0.14em">
                    REFRESHED · 04:30 LOCAL · NEXT IN 22H
                  </text>
                </svg>
              </div>

              <div className="ind-re-sources">
                {[
                  { name: "ImmoScout24", count: "487K listings", pct: "84%" },
                  { name: "Homegate", count: "312K listings", pct: "58%" },
                  { name: "Comparis", count: "198K listings", pct: "38%" },
                  { name: "Newhome", count: "142K listings", pct: "28%" },
                  { name: "Immowelt", count: "98K listings", pct: "20%" },
                  { name: "+ 3 regional portals", count: "68K listings", pct: "14%" },
                ].map((s) => (
                  <div className="ind-re-src" key={s.name}>
                    <span className="ind-re-src-name">{s.name}</span>
                    <span className="ind-re-src-count">{s.count}</span>
                    <span className="ind-re-src-bar">
                      <span style={{ width: s.pct }}></span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="ind-re-quote">
              <div className="ind-re-quote-mark">&quot;</div>
              <p>Most likely no one is able to do it except you. We will see :-)</p>
              <footer>
                <strong>Adrian Mayer</strong> · Founder, TheDataHive · Switzerland
              </footer>
            </blockquote>
          </div>

          <footer className="ind-ch-foot">
            <div className="ind-ch-uses">
              <span className="ind-ch-uses-h">What clients build on this</span>
              <span>Multi-source unified listing APIs</span>
              <span>Price-history continuity</span>
              <span>Geocoded valuation models</span>
              <span>Agent / agency intelligence</span>
              <span>Off-market signal feeds</span>
            </div>
            <Link href="/contact?industry=realestate" className="btn btn-ghost">
              Discuss a property pipeline <span className="arrow">→</span>
            </Link>
          </footer>
        </div>
      </section>

      {/* CHAPTER 03 TALENT */}
      <section className="ind-chapter ind-ch--talent" id="i-talent" data-screen-label="04 Talent">
        <div className="container">
          <header className="ind-ch-head">
            <div className="ind-ch-num">03</div>
            <div className="ind-ch-trail">
              <span className="ind-ch-tag">CHAPTER 03 · TALENT INTELLIGENCE</span>
              <h2 className="ind-ch-title">
                Talent <em>&amp; recruitment.</em>
              </h2>
              <p className="ind-ch-pitch">
                Aggregate hiring data across 50+ boards globally — Indeed, LinkedIn Jobs,
                Glassdoor, Welcome to the Jungle, StepStone — deduplicated and normalized into
                one schema, refreshed hourly.
              </p>
            </div>
          </header>

          <div className="ind-ch-body ind-tl-body">
            <div className="ind-tl-jobs">
              <div className="ind-tl-jobs-h">
                <span>Live · senior data engineer · last hour</span>
                <span className="ind-tl-jobs-h-r">2,847 new posts</span>
              </div>
              {[
                { co: "St", c: "#0a66c2", t: "Senior Data Engineer · Pipelines", m: "Stripe · Dublin, IE · €105–135K · LinkedIn", time: "2h ago" },
                { co: "Sh", c: "#ff5b49", t: "Sr. Data Platform Engineer", m: "Shopify · Remote, CA · CA$160–210K · Indeed", time: "4h ago" },
                { co: "Da", c: "#7e2e8a", t: "Staff Data Engineer · Lakehouse", m: "Databricks · Berlin, DE · €120–155K · StepStone", time: "6h ago" },
                { co: "Do", c: "#ef2a39", t: "Senior Data Engineer · Logistics", m: "DoorDash · New York, US · $185–240K · LinkedIn", time: "9h ago" },
                { co: "Sb", c: "#006241", t: "Data Engineer III · Analytics Platform", m: "Starbucks · Seattle, US · $135–170K · Glassdoor", time: "11h ago" },
              ].map((j) => (
                <div className="ind-tl-job" key={j.t}>
                  <span className="ind-tl-co" style={{ background: j.c }}>
                    {j.co}
                  </span>
                  <div className="ind-tl-job-mid">
                    <div className="ind-tl-job-t">{j.t}</div>
                    <div className="ind-tl-job-m">{j.m}</div>
                  </div>
                  <div className="ind-tl-job-time">{j.time}</div>
                </div>
              ))}
            </div>

            <div className="ind-tl-comp">
              <div className="ind-tl-comp-h">
                Comp benchmarks · Senior DE · n=3,420 / week
              </div>
              <div className="ind-tl-comp-grid">
                {[
                  { region: "US · CA", v: "$195K", range: "P25 $158K · P75 $235K" },
                  { region: "EU · DE", v: "€118K", range: "P25 €92K · P75 €142K" },
                  { region: "UK · LDN", v: "£94K", range: "P25 £72K · P75 £118K" },
                  { region: "CA · TO", v: "CA$152K", range: "P25 CA$120K · P75 CA$180K" },
                ].map((c) => (
                  <div key={c.region}>
                    <div className="ind-tl-comp-region">{c.region}</div>
                    <div className="ind-tl-comp-v">{c.v}</div>
                    <div className="ind-tl-comp-range">{c.range}</div>
                  </div>
                ))}
              </div>
              <div className="ind-tl-comp-foot">↻ refreshed hourly · BigQuery direct write</div>
            </div>
          </div>

          <footer className="ind-ch-foot">
            <div className="ind-ch-uses">
              <span className="ind-ch-uses-h">What clients build on this</span>
              <span>Wage analytics platforms</span>
              <span>Skill-demand forecasting</span>
              <span>Talent CRMs / sourcing tools</span>
              <span>Compensation benchmarking</span>
              <span>Workforce trend research</span>
            </div>
            <Link href="/contact?industry=talent" className="btn btn-ghost">
              Discuss a talent pipeline <span className="arrow">→</span>
            </Link>
          </footer>
        </div>
      </section>

      {/* CHAPTER 04 TICKETING */}
      <section
        className="ind-chapter ind-ch--ticketing"
        id="i-ticketing"
        data-screen-label="05 Ticketing"
      >
        <div className="container">
          <header className="ind-ch-head">
            <div className="ind-ch-num">04</div>
            <div className="ind-ch-trail">
              <span className="ind-ch-tag">CHAPTER 04 · LIVE INVENTORY</span>
              <h2 className="ind-ch-title">
                Ticketing <em>&amp; events.</em>
              </h2>
              <p className="ind-ch-pitch">
                Real-time inventory and pricing across StubHub, SeatGeek, Ticketmaster and
                regional resale platforms. Sub-minute latency, webhook-based delivery into
                pricing engines.
              </p>
            </div>
          </header>

          <div className="ind-ch-body">
            <div className="ind-tk-stubs">
              {[
                { event: "Knicks vs. Celtics", venue: "Madison Square Garden · NYC", date: "2026.05.27 · 19:30 EST", from: "$142", med: "$286", trend: "↑ +8.4%", down: false, n: "01", src: "StubHub" },
                { event: "Hamilton", venue: "Richard Rodgers · NYC", date: "2026.05.30 · 20:00 EST", from: "$219", med: "$372", trend: "↓ −2.1%", down: true, n: "02", src: "SeatGeek" },
                { event: "Taylor Swift · Eras Tour", venue: "Wembley · London", date: "2026.06.14 · 18:00 BST", from: "£489", med: "£1,240", trend: "↑ +14.2%", down: false, n: "03", src: "Viagogo" },
              ].map((t) => (
                <div className="ind-tk-stub" key={t.n}>
                  <div className="ind-tk-stub-l">
                    <div className="ind-tk-stub-event">{t.event}</div>
                    <div className="ind-tk-stub-venue">{t.venue}</div>
                    <div className="ind-tk-stub-date">{t.date}</div>
                    <div className="ind-tk-stub-prices">
                      <span>
                        From <strong>{t.from}</strong>
                      </span>
                      <span className="ind-tk-stub-med">
                        Median <strong>{t.med}</strong>
                      </span>
                      <span
                        className={`ind-tk-stub-trend${t.down ? " ind-tk-trend--down" : ""}`}
                      >
                        {t.trend}
                      </span>
                    </div>
                  </div>
                  <div className="ind-tk-stub-r">
                    <div className="ind-tk-stub-num">N°</div>
                    <div className="ind-tk-stub-id">{t.n}</div>
                    <div className="ind-tk-stub-src">{t.src}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ind-tk-stats">
              {[
                { v: "15M", l: "Listings monitored · daily" },
                { v: "< 60s", l: "End-to-end latency" },
                { v: "8", l: "Source platforms" },
                { v: "15mo", l: "Ficstar partnership" },
              ].map((s) => (
                <div className="ind-tk-stat" key={s.l}>
                  <div className="v">{s.v}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <footer className="ind-ch-foot">
            <div className="ind-ch-uses">
              <span className="ind-ch-uses-h">What clients build on this</span>
              <span>Dynamic resale pricing engines</span>
              <span>Inventory arbitrage signals</span>
              <span>Event demand forecasting</span>
              <span>Seat-map heat indexing</span>
              <span>Sell-through benchmarks</span>
            </div>
            <Link href="/contact?industry=ticketing" className="btn btn-ghost">
              Discuss a ticketing pipeline <span className="arrow">→</span>
            </Link>
          </footer>
        </div>
      </section>

      {/* CHAPTER 05 FOOD */}
      <section className="ind-chapter ind-ch--food" id="i-food" data-screen-label="06 Food">
        <div className="container">
          <header className="ind-ch-head">
            <div className="ind-ch-num">05</div>
            <div className="ind-ch-trail">
              <span className="ind-ch-tag">CHAPTER 05 · DELIVERY MARKETS</span>
              <h2 className="ind-ch-title">
                Food <em>delivery.</em>
              </h2>
              <p className="ind-ch-pitch">
                Restaurant, menu, and pricing data from DoorDash, Uber Eats, Grubhub, and
                regional players. Mobile-app protocols where the web doesn&apos;t expose the
                data.
              </p>
            </div>
          </header>

          <div className="ind-ch-body">
            <div className="ind-food-menus">
              {[
                {
                  platform: "DD",
                  pc: "#ef2a39",
                  rest: "Joe's Pizza",
                  cuisine: "NYC · Pizza · $$",
                  rating: "★ 4.7",
                  items: [
                    ["Margherita", "$16.50"],
                    ["Pepperoni Slice", "$5.25"],
                    ["Garlic Knots · 6pc", "$8.95"],
                    ["Caesar Salad", "$11.50"],
                  ],
                  foot: "12 items · refresh 4h ago",
                },
                {
                  platform: "UE",
                  pc: "#00c266",
                  rest: "Sushi Sakura",
                  cuisine: "SF · Japanese · $$$",
                  rating: "★ 4.8",
                  items: [
                    ["Sashimi Deluxe", "$38.00"],
                    ["Salmon Rolls · 8pc", "$22.00"],
                    ["Miso Soup", "$6.50"],
                    ["Tempura Plate", "$24.50"],
                  ],
                  foot: "28 items · refresh 4h ago",
                },
                {
                  platform: "Gh",
                  pc: "#f15a24",
                  rest: "Casa Maria",
                  cuisine: "LA · Mexican · $$",
                  rating: "★ 4.5",
                  items: [
                    ["Tacos · 3pc", "$12.99"],
                    ["Burrito Especial", "$15.50"],
                    ["Guacamole & Chips", "$9.00"],
                    ["Horchata", "$4.50"],
                  ],
                  foot: "19 items · refresh 4h ago",
                },
              ].map((m) => (
                <article className="ind-food-menu" key={m.rest}>
                  <div className="ind-food-menu-h">
                    <span className="ind-food-platform" style={{ background: m.pc }}>
                      {m.platform}
                    </span>
                    <div>
                      <div className="ind-food-rest">{m.rest}</div>
                      <div className="ind-food-cuisine">{m.cuisine}</div>
                    </div>
                    <div className="ind-food-rating">{m.rating}</div>
                  </div>
                  <div className="ind-food-items">
                    {m.items.map(([n, p]) => (
                      <div className="ind-food-item" key={n}>
                        <span>{n}</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="ind-food-foot">{m.foot}</div>
                </article>
              ))}
            </div>

            <div className="ind-food-stats">
              {[
                { v: "8M", l: "Menu items / day" },
                { v: "142K", l: "Restaurants covered" },
                { v: "3", l: "Mobile apps reverse-engineered" },
                { v: "15", l: "Cities · live" },
              ].map((s) => (
                <div className="ind-food-stat" key={s.l}>
                  <div className="v">{s.v}</div>
                  <div className="l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <footer className="ind-ch-foot">
            <div className="ind-ch-uses">
              <span className="ind-ch-uses-h">What clients build on this</span>
              <span>Menu intelligence dashboards</span>
              <span>Restaurant competitor analysis</span>
              <span>Pricing &amp; promotion tracking</span>
              <span>Delivery-fee &amp; ETA benchmarking</span>
              <span>Ghost-kitchen detection</span>
            </div>
            <Link href="/contact?industry=food" className="btn btn-ghost">
              Discuss a food-delivery pipeline <span className="arrow">→</span>
            </Link>
          </footer>
        </div>
      </section>

      {/* CHAPTER 06 AI */}
      <section className="ind-chapter ind-ch--ai" id="i-ai" data-screen-label="07 AI">
        <div className="container">
          <header className="ind-ch-head">
            <div className="ind-ch-num">06</div>
            <div className="ind-ch-trail">
              <span className="ind-ch-tag">CHAPTER 06 · TRAINING DATA</span>
              <h2 className="ind-ch-title">
                AI <em>&amp; machine learning.</em>
              </h2>
              <p className="ind-ch-pitch">
                Domain-specific training corpora for LLM, embedding, and RAG products. Crawled,
                cleaned, deduped, and licensed — delivered as Parquet on S3 with full provenance.
              </p>
            </div>
          </header>

          <div className="ind-ch-body">
            <div className="ind-ai-terminal">
              <div className="ind-ai-term-h">
                <span className="ind-ai-term-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="ind-ai-term-title">
                  corpus.fastscraping.com · ssh khalid@build-01
                </span>
                <span className="ind-ai-term-status">● indexing</span>
              </div>
              <pre className="ind-ai-term-body">
                <span className="ind-ai-cm">$ fs corpus inspect --version v3.2</span>
                {`\n{\n  "corpus":      `}
                <span className="ind-ai-str">&quot;v3.2 · domain-specific&quot;</span>
                {`,\n  "documents":   2_437_891_204,\n  "tokens":      `}
                <span className="ind-ai-str">&quot;4.8T&quot;</span>
                {`,\n  "size":        `}
                <span className="ind-ai-str">&quot;14.2 TB · parquet&quot;</span>
                {`,\n  "languages":   42,\n  "categories":  18,\n  "dedup":       `}
                <span className="ind-ai-ok">
                  &quot;minhash · simhash · 99.4% unique&quot;
                </span>
                {`,\n  "licensing":   `}
                <span className="ind-ai-ok">&quot;CC-aware · respects robots&quot;</span>
                {`,\n  "delivery":    `}
                <span className="ind-ai-str">
                  &quot;s3://client-bucket/corpus/v3.2/&quot;
                </span>
                {`\n}\n`}
                <span className="ind-ai-cm">$ fs corpus diff v3.1 v3.2</span>
                {`\n+ 312,420,118 documents\n+ 6 new categories\n~ 14 source schemas updated\n- 8,401,003 documents (license revoked)\n`}
                <span className="ind-ai-cm">$ _</span>
              </pre>
            </div>

            <div className="ind-ai-side">
              <div className="ind-ai-stat-row">
                <div className="ind-ai-stat">
                  <div className="v">2.4B</div>
                  <div className="l">Documents · v3 corpus</div>
                </div>
                <div className="ind-ai-stat">
                  <div className="v">4.8T</div>
                  <div className="l">Tokens · cleaned</div>
                </div>
              </div>
              <div className="ind-ai-stat-row">
                <div className="ind-ai-stat">
                  <div className="v">42</div>
                  <div className="l">Languages covered</div>
                </div>
                <div className="ind-ai-stat">
                  <div className="v">99.4%</div>
                  <div className="l">Dedup rate</div>
                </div>
              </div>

              <div className="ind-ai-licensing">
                <div className="ind-ai-lic-h">Licensing &amp; provenance</div>
                <ul>
                  <li>
                    <span className="ind-ai-tick"></span>Per-document source URL + fetch timestamp
                  </li>
                  <li>
                    <span className="ind-ai-tick"></span>License flag (CC, attribution, public)
                  </li>
                  <li>
                    <span className="ind-ai-tick"></span>robots.txt + ToS aware
                  </li>
                  <li>
                    <span className="ind-ai-tick"></span>Right-to-be-forgotten honored at source
                  </li>
                  <li>
                    <span className="ind-ai-tick"></span>Per-domain takedown SLA
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <footer className="ind-ch-foot">
            <div className="ind-ch-uses">
              <span className="ind-ch-uses-h">What clients build on this</span>
              <span>Domain LLM pre-training</span>
              <span>RAG knowledge bases</span>
              <span>Embedding model training</span>
              <span>Fine-tuning datasets</span>
              <span>Continuous-learning feeds</span>
            </div>
            <Link href="/contact?industry=ai" className="btn btn-ghost">
              Discuss a training corpus <span className="arrow">→</span>
            </Link>
          </footer>
        </div>
      </section>

      {/* CTA */}
      <section className="block" style={{ paddingTop: 80 }} data-screen-label="08 CTA">
        <div className="container">
          <div className="cta">
            <div>
              <span className="eyebrow">Different industry, same engineering team</span>
              <h2 style={{ marginTop: 18 }}>
                Your vertical <em>not on the atlas?</em>
              </h2>
              <p>
                Healthcare, travel, financial data, government registries — we&apos;ve built
                one-off pipelines in most of them too. Tell us your industry and target sites,
                and we&apos;ll tell you honestly whether we&apos;re a fit.
              </p>
              <div className="hero-bullets" style={{ marginTop: 28 }}>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  24h response
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
                  Honest &quot;no&quot; if we can&apos;t
                </span>
              </div>
            </div>

            <div className="cta-card">
              <div className="label">Direct line</div>
              <div className="person">
                <KMAvatar variant="large" />
                <div>
                  <div className="n">Md Khalid Mahmud Shawon</div>
                  <div className="r">Founder · personally</div>
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
                <Link href="/case-studies" className="btn btn-ghost">
                  See cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
