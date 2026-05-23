import Link from "next/link";
import LiveConsole from "@/components/LiveConsole";
import BypassVisual from "@/components/BypassVisual";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero" data-screen-label="01 Hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="hero-tag">
              <span className="chip">v8 · 2026</span>
              <span>Enterprise-grade data extraction</span>
            </div>
            <h1 className="display">
              We handle your
              <span className="br">
                <em>web scraping</em> pipeline.
              </span>
            </h1>
            <p className="hero-sub">
              Structured data delivered <strong>reliably, at any scale</strong> — bypassing
              Cloudflare, DataDome and login walls. No proxy headaches. No infrastructure
              overhead. No babysitting.
            </p>
            <div className="hero-bullets">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Bypass Cloudflare &amp; Captchas
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Large-scale on demand
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                No proxy hassles
              </span>
            </div>
            <div className="hero-cta">
              <Link href="#contact" className="btn btn-primary">
                Free strategy call
                <span className="arrow">→</span>
              </Link>
              <Link href="#solutions" className="btn btn-ghost">
                View solutions
              </Link>
            </div>
            <div className="hero-meta">
              <div className="avatar">KM</div>
              <div>
                <div style={{ color: "var(--ink)", fontWeight: 500 }}>
                  Khalid Mahmud Shawon
                </div>
                <div>Founder · Replies in &lt; 24h</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <LiveConsole />
            <div className="pipeline">
              <span className="node">
                <span className="badge">SRC</span> Target site
              </span>
              <span className="arrow"></span>
              <span className="node">
                <span className="badge">FS</span> Fastscraping
              </span>
              <span className="arrow"></span>
              <span className="node">
                <span className="badge">OUT</span> Your warehouse
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <section className="marquee">
        <div className="container">
          <div className="marquee-label">Active pipelines for</div>
        </div>
        <div className="marquee-track">
          {[
            { name: "StubHub", tick: "ticketing" },
            { name: "SeatGeek", tick: "ticketing" },
            { name: "Indeed", tick: "jobs" },
            { name: "LinkedIn", tick: "b2b" },
            { name: "ImmoScout24", tick: "real estate" },
            { name: "Starbucks", tick: "restaurant" },
            { name: "DoorDash", tick: "delivery" },
            { name: "McDonald's", tick: "restaurant" },
            { name: "Amazon", tick: "e-com" },
            { name: "Walmart", tick: "e-com" },
            { name: "Glassdoor", tick: "jobs" },
            { name: "StubHub", tick: "ticketing" },
            { name: "SeatGeek", tick: "ticketing" },
            { name: "Indeed", tick: "jobs" },
            { name: "LinkedIn", tick: "b2b" },
            { name: "ImmoScout24", tick: "real estate" },
            { name: "Starbucks", tick: "restaurant" },
            { name: "DoorDash", tick: "delivery" },
            { name: "McDonald's", tick: "restaurant" },
            { name: "Amazon", tick: "e-com" },
            { name: "Walmart", tick: "e-com" },
            { name: "Glassdoor", tick: "jobs" },
          ].map((c, i) => (
            <a key={i} className="platform-chip">
              {c.name} <span className="tick">{c.tick}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="block" id="services" data-screen-label="02 Services">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our services</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Data extraction, <em>built for scale.</em>
              </h2>
            </div>
            <p>
              From a single tricky scraper to a full enterprise data pipeline. We own the
              infrastructure, the anti-bot work, and the maintenance — you receive clean,
              structured data on the schedule you need it.
            </p>
          </div>

          <div className="services">
            <article className="svc">
              <div className="svc-num">01 · Managed scraping</div>
              <h3 className="svc-title">End-to-end scrapers, fully owned by us.</h3>
              <p className="svc-desc">
                We build, deploy, monitor and maintain the scrapers. You get clean data and never
                write a line of code.
              </p>
              <div className="svc-foot">
                <div className="svc-tags">
                  <span>build</span>
                  <span>deploy</span>
                  <span>monitor</span>
                </div>
                <a href="#">
                  Learn more <span className="arr">→</span>
                </a>
              </div>
            </article>

            <article className="svc">
              <div className="svc-num">02 · Enterprise crawling</div>
              <h3 className="svc-title">Crawl entire domains at massive scale.</h3>
              <p className="svc-desc">
                Proxy rotation, rate limiting, dedup and storage handled. Perfect for market
                research and competitive intel.
              </p>
              <div className="svc-foot">
                <div className="svc-tags">
                  <span>full-domain</span>
                  <span>dedup</span>
                  <span>archive</span>
                </div>
                <a href="#">
                  Learn more <span className="arr">→</span>
                </a>
              </div>
            </article>

            <article className="svc">
              <div className="svc-num">03 · Mobile app data</div>
              <h3 className="svc-title">Reverse-engineered mobile APIs.</h3>
              <p className="svc-desc">
                We extract data only available inside iOS and Android apps — by replaying the
                real protocol, not the web.
              </p>
              <div className="svc-foot">
                <div className="svc-tags">
                  <span>iOS</span>
                  <span>Android</span>
                  <span>protocol</span>
                </div>
                <a href="#">
                  Learn more <span className="arr">→</span>
                </a>
              </div>
            </article>

            <article className="svc feature">
              <div className="feature-content">
                <div>
                  <div className="svc-num">04 · Real-time data APIs</div>
                  <h3
                    className="svc-title"
                    style={{ fontSize: 44, maxWidth: "11ch" }}
                  >
                    Query any website, on demand.
                  </h3>
                  <p className="svc-desc">
                    Custom REST endpoints built for your specific data needs. Real-time JSON,
                    comprehensive docs, 99.9% uptime SLA. We become the API the source site never
                    gave you.
                  </p>
                  <div className="svc-foot">
                    <div className="svc-tags">
                      <span>REST</span>
                      <span>JSON</span>
                      <span>SLA 99.9%</span>
                      <span>OpenAPI</span>
                    </div>
                    <a href="#">
                      See API docs <span className="arr">→</span>
                    </a>
                  </div>
                </div>
                <div className="visual">
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      color: "#7b827e",
                      marginBottom: 10,
                    }}
                  >
                    → GET api.fastscraping.com/v1/listings
                  </div>
                  <pre
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "#d5dad7",
                      lineHeight: 1.6,
                      whiteSpace: "pre-wrap",
                    }}
                  >{`{
  "source": "stubhub.com",
  "fetched_at": "2026-05-23T14:08:42Z",
  "results": [
    { "event": "Knicks vs. Celtics",
      "venue": "MSG · NYC",
      "price_min_usd": 142,
      "price_med_usd": 286 },
    { "event": "Hamilton",
      "venue": "Richard Rodgers",
      "price_min_usd": 219,
      "price_med_usd": 372 }
  ],
  "bypassed": ["cloudflare", "px"],
  "latency_ms": 412
}`}</pre>
                </div>
              </div>
            </article>

            <article className="svc wide">
              <div className="svc-num">05 · Automated pipelines (ETL · DaaS)</div>
              <h3 className="svc-title">Daily, weekly, monthly. On your schedule.</h3>
              <p className="svc-desc">
                Fully automated extract → transform → load pipelines. Delivered to your
                warehouse, your S3 bucket, your SFTP, your webhook. We handle quality checks and
                selector drift.
              </p>
              <div className="svc-foot">
                <div className="svc-tags">
                  <span>Snowflake</span>
                  <span>BigQuery</span>
                  <span>S3</span>
                  <span>SFTP</span>
                  <span>Webhook</span>
                </div>
                <a href="#">
                  Learn more <span className="arr">→</span>
                </a>
              </div>
            </article>

            <article className="svc wide">
              <div className="svc-num">06 · LinkedIn data platform</div>
              <h3 className="svc-title">B2B at the source.</h3>
              <p className="svc-desc">
                Profiles, companies, jobs and posts — refreshed continuously. Stealth identities,
                persistent cookies, aged browser profiles. Not just IP rotation.
              </p>
              <div className="svc-foot">
                <div className="svc-tags">
                  <span>profiles</span>
                  <span>companies</span>
                  <span>jobs</span>
                  <span>refresh: daily</span>
                </div>
                <a href="#">
                  Learn more <span className="arr">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== NUMBERS ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        data-screen-label="03 Numbers"
      >
        <div className="container">
          <div className="numbers-block">
            <div className="numbers-head">
              <h2>
                Numbers that{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>speak</em>.
              </h2>
              <div className="meta">
                Live snapshot from active client engagements
                <br />
                updated continuously · last sync: 14:08 UTC
              </div>
            </div>
            <div className="numbers-grid">
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={24} />
                  <em>.3M</em>
                </div>
                <div className="l">Records delivered daily</div>
                <div className="s">Ticketing &amp; pricing combined</div>
              </div>
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={99} />
                  <em>.7%</em>
                </div>
                <div className="l">Anti-bot bypass success</div>
                <div className="s">Cloudflare, DataDome, PerimeterX</div>
              </div>
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={50} suffix="+" />
                </div>
                <div className="l">Platforms in production</div>
                <div className="s">Adding new sources weekly</div>
              </div>
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={24} suffix="+" />
                </div>
                <div className="l">Months avg. client tenure</div>
                <div className="s">We don&apos;t run one-off scripts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DIFFERENTIATORS ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        id="solutions"
        data-screen-label="04 Why us"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Why Fastscraping</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                We&apos;re not a proxy provider. <em>We&apos;re your team.</em>
              </h2>
            </div>
            <p>
              We&apos;re not a tool you have to operate. We&apos;re not a scraping marketplace.
              We&apos;re a full data extraction team — with the depth to solve what others
              can&apos;t, the operational maturity to keep things running, and the discretion to
              do it under your brand.
            </p>
          </div>

          <div className="diff-grid">
            <article className="diff-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Anti-bot bypass experts.</h3>
              <p>
                We reliably bypass Cloudflare Turnstile, DataDome ML detection, PerimeterX
                behavioral and Akamai. Most vendors give up — we solve it.
              </p>
              <div className="tags">
                <span>Cloudflare</span>
                <span>DataDome</span>
                <span>PerimeterX</span>
                <span>Akamai</span>
              </div>
            </article>

            <article className="diff-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Recurring data pipelines.</h3>
              <p>
                Not one-off scripts. We build infrastructure for daily, weekly or monthly data
                delivery with quality checks and auto-adaptation when sites change.
              </p>
              <div className="tags">
                <span>scheduled</span>
                <span>auto-adapt</span>
                <span>quality</span>
              </div>
            </article>

            <article className="diff-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Stealth browser identities.</h3>
              <p>
                Complete digital identities — unique fingerprints, persistent cookies, aged
                browser profiles, TLS fingerprint matching. Not just rotating IPs.
              </p>
              <div className="tags">
                <span>canvas &amp; webgl</span>
                <span>tls match</span>
                <span>aged cookies</span>
              </div>
            </article>

            <article className="diff-card hot">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h3>Silent backend vendor.</h3>
              <p>
                We operate invisibly behind your brand. Your clients never know we exist.
                White-label partnership model. Zero attribution. Total discretion.
              </p>
              <div className="tags">
                <span>white label</span>
                <span>b2b partner</span>
                <span>zero attribution</span>
              </div>
            </article>

            <article className="diff-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Enterprise security.</h3>
              <p>
                GDPR-compliant operations. Secure delivery via API, SFTP or S3. Encrypted
                pipelines end-to-end. Audit-ready logs. Right to be forgotten honored at source.
              </p>
              <div className="tags">
                <span>GDPR</span>
                <span>encrypted</span>
                <span>audit-ready</span>
              </div>
            </article>

            <article className="diff-card">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 0 1 2-2h2" />
                  <path d="M9 8h6" />
                </svg>
              </div>
              <h3>One throat to choke.</h3>
              <p>
                One contract, one invoice, one Slack channel. No juggling a proxy vendor + a
                parser vendor + a captcha vendor + an engineer. We own the whole stack.
              </p>
              <div className="tags">
                <span>1 contract</span>
                <span>1 invoice</span>
                <span>1 team</span>
              </div>
            </article>
          </div>

          <div className="compare">
            <div className="cmp-head">
              <h3>How we compare</h3>
              <div className="key">
                <span>vs the alternatives</span>
                <span style={{ color: "var(--hot)", letterSpacing: "0.04em" }}>
                  — their gap
                </span>
              </div>
            </div>

            <div className="row-c">
              <div className="vs">
                vs Grepsr <em>scraping platform</em>
              </div>
              <div className="note">
                Limited flexibility for complex scraping workflows.
              </div>
              <div className="mark">Rigid</div>
            </div>
            <div className="row-c">
              <div className="vs">
                vs Zyte <em>scraping API</em>
              </div>
              <div className="note">
                API-focused tools still require engineering setup on your side.
              </div>
              <div className="mark">DIY</div>
            </div>
            <div className="row-c">
              <div className="vs">
                vs Apify <em>actor marketplace</em>
              </div>
              <div className="note">
                Cookie-based actors get banned at scale. Not for production.
              </div>
              <div className="mark">Ban risk</div>
            </div>
            <div className="row-c">
              <div className="vs">
                vs Bright Data <em>proxy network</em>
              </div>
              <div className="note">
                Proxy-only — you still need a scraper, a parser, a team.
              </div>
              <div className="mark">Proxy only</div>
            </div>
            <div className="row-c">
              <div className="vs">
                vs In-house <em>your engineers</em>
              </div>
              <div className="note">
                Too expensive, breaks constantly, ties up your roadmap.
              </div>
              <div className="mark">Costly</div>
            </div>
            <div className="row-c">
              <div className="vs">
                vs Freelancers <em>upwork &amp; co.</em>
              </div>
              <div className="note">
                No scale, no reliability, no incident response at 3 a.m.
              </div>
              <div className="mark">No SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BYPASS / ANTI-BOT ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        id="bypass"
        data-screen-label="05 Anti-bot"
      >
        <div className="container">
          <div className="bypass">
            <div className="bypass-inner">
              <div>
                <span className="eyebrow hot" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Anti-bot expertise
                </span>
                <h2 style={{ marginTop: 18 }}>
                  Bypass — <em>every layer.</em>
                </h2>
                <p>
                  We don&apos;t ship around hard sites. We unpack each defense layer — challenge
                  JS, TLS fingerprint, canvas/WebGL noise, behavioral analytics — and emulate a
                  legitimate browser end-to-end. The result: stable extraction, week after week,
                  even on the hardest targets.
                </p>
                <div className="bypass-list">
                  <div className="item">
                    <span className="badge">solved</span>
                    <span className="name">Cloudflare Turnstile</span>
                    <span className="pct">99.8%</span>
                  </div>
                  <div className="item">
                    <span className="badge">solved</span>
                    <span className="name">DataDome (ML)</span>
                    <span className="pct">99.4%</span>
                  </div>
                  <div className="item">
                    <span className="badge">solved</span>
                    <span className="name">PerimeterX behavioral</span>
                    <span className="pct">99.6%</span>
                  </div>
                  <div className="item">
                    <span className="badge">solved</span>
                    <span className="name">Akamai Bot Manager</span>
                    <span className="pct">99.1%</span>
                  </div>
                  <div className="item">
                    <span className="badge">solved</span>
                    <span className="name">Login walls &amp; auth gates</span>
                    <span className="pct">handled</span>
                  </div>
                </div>
              </div>
              <div className="bypass-visual">
                <div style={{ width: "100%", height: "100%" }}>
                  <BypassVisual />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        id="clients"
        data-screen-label="06 Clients"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Trusted by</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Real partnerships. <em>Real outcomes.</em>
              </h2>
            </div>
            <p>
              Quotes from active production engagements — clients we ship data to every week.
              Average tenure is over two years; some have been with us since 2022.
            </p>
          </div>

          <div className="testimonials">
            <article className="testimonial big">
              <div className="quote-mark">&quot;</div>
              <p className="quote">
                Most likely no one is able to do it except you. We will see :-)
              </p>
              <div className="who">
                <div className="av">AM</div>
                <div>
                  <div className="name">Adrian Mayer</div>
                  <div className="role">Founder, TheDataHive</div>
                </div>
              </div>
              <div className="project">Project · Switzerland real-estate APIs</div>
            </article>

            <article className="testimonial small">
              <div className="quote-mark">&quot;</div>
              <p className="quote">
                I&apos;m satisfied with the results for today, so you can add a $400 setup fee to
                the next invoice. Thank you for your hard work.
              </p>
              <div className="who">
                <div className="av">SV</div>
                <div>
                  <div className="name">Scott Vahey</div>
                  <div className="role">Owner, Ficstar</div>
                </div>
              </div>
              <div className="project">Project · StubHub pipeline</div>
            </article>

            <article className="testimonial small">
              <div className="quote-mark">&quot;</div>
              <p className="quote">
                You&apos;re doing a great job with the Indeed US numbers over the last couple
                months. Thank you for your efforts — much appreciated!
              </p>
              <div className="who">
                <div className="av">SV</div>
                <div>
                  <div className="name">Scott Vahey</div>
                  <div className="role">Owner, Ficstar</div>
                </div>
              </div>
              <div className="project">Project · Indeed US pipeline</div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        id="contact"
        data-screen-label="07 CTA"
      >
        <div className="container">
          <div className="cta">
            <div>
              <span className="eyebrow">Get started</span>
              <h2 style={{ marginTop: 18 }}>
                Ready to scale your <em>data pipeline?</em>
              </h2>
              <p>
                Tell us your target platforms and volume. We&apos;ll send you a free sample
                within 48–72 hours, and we&apos;ll match or beat your current vendor&apos;s
                pricing — with better quality and coverage.
              </p>
              <div className="hero-bullets" style={{ marginTop: 28 }}>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  48–72h sample
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free consultation
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
                  <div className="r">Founder · The anti-bot expert</div>
                </div>
              </div>
              <div className="meta-row">
                <span className="k">Email</span>
                <span
                  className="v"
                  style={{ fontFamily: "var(--font-mono)", fontSize: 12.5 }}
                >
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
                <a href="#" className="btn btn-accent">
                  Book a call
                </a>
                <a href="#" className="btn btn-ghost">
                  Send brief
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
