import Link from "next/link";
import Image from "next/image";
import AnimatedNumber from "@/components/AnimatedNumber";
import KMAvatar from "@/components/KMAvatar";
import "../styles/about.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fastscraping is a fully managed web scraping service for data teams, AI companies, and enterprises. Founded 2023. Three engineers. 100M+ records / month.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Fastscraping",
    description:
      "Founded 2023. Three engineers. 100M+ records per month. Anti-bot bypass experts.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About · Fastscraping",
    description: "Founded 2023. Three engineers. 100M+ records per month.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ===================== ABOUT HERO ===================== */}
      <section className="about-hero" data-screen-label="01 About hero">
        <div className="container">
          <div className="ah-band">
            <span className="eyebrow">About us · est. 2023</span>
            <div className="ah-band-right">
              <span className="kbd">Bangladesh</span>
              <span className="kbd">→</span>
              <span className="kbd">5+ countries</span>
              <span className="kbd">→</span>
              <span className="kbd">100M records / mo</span>
            </div>
          </div>

          <div className="ah-headline">
            <h1 className="display">
              We make <em>web&nbsp;data</em>
              <span className="ah-line">accessible.</span>
            </h1>
            <aside className="ah-deck">
              <p>
                Fastscraping is a fully managed web scraping service built for
                data teams, AI companies, and enterprises who need{" "}
                <strong>reliable, large-scale data extraction</strong> without
                the infrastructure headaches.
              </p>
              <div className="ah-deck-foot">
                <div className="ah-stat">
                  <div className="ah-stat-v">2023</div>
                  <div className="ah-stat-l">Founded</div>
                </div>
                <div className="ah-stat">
                  <div className="ah-stat-v">3</div>
                  <div className="ah-stat-l">Engineers</div>
                </div>
                <div className="ah-stat">
                  <div className="ah-stat-v">2</div>
                  <div className="ah-stat-l">Brands</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================== MISSION + PRINCIPLES ===================== */}
      <section className="block mission-block" data-screen-label="02 Mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-left">
              <span className="eyebrow">Our mission</span>
              <h2 className="display mission-title">
                The <em>invisible data layer</em>
                <span>for data-first companies.</span>
              </h2>
              <p className="mission-body">
                We believe every company should have access to the web data they
                need — without building complex infrastructure, managing proxy
                pools, or fighting anti-bot systems. We handle the complexity so
                you can focus on what matters: turning data into insights.
              </p>
              <div className="mission-quote">
                <div className="mq-mark">&quot;</div>
                <p>Your web scraping team on demand.</p>
                <div className="mq-sub">
                  — Our promise to every client since day one
                </div>
              </div>
            </div>

            <div className="mission-right">
              <article className="principle">
                <div className="p-num">01</div>
                <div className="p-body">
                  <h3>Silent backend vendor.</h3>
                  <p>
                    We operate invisibly behind your brand. Your clients never
                    know we exist. White-label by default.
                  </p>
                </div>
              </article>
              <article className="principle">
                <div className="p-num">02</div>
                <div className="p-body">
                  <h3>Production-grade infrastructure.</h3>
                  <p>
                    Built to scale with you — from a single source today to
                    fifty in a year. No re-architectures.
                  </p>
                </div>
              </article>
              <article className="principle">
                <div className="p-num">03</div>
                <div className="p-body">
                  <h3>Anti-bot is our specialty.</h3>
                  <p>
                    Not an afterthought. Not &quot;best effort.&quot; It&apos;s
                    the core competency we built the company around.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section
        className="block team-block"
        id="team"
        data-screen-label="03 Team"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our team</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Meet the <em>people.</em>
              </h2>
            </div>
            <p>
              The battle-tested engineers and data specialists behind
              Fastscraping&apos;s enterprise-grade success. Three people doing
              the work of a thirty-person team — by automating everything we
              possibly can.
            </p>
          </div>

          <article className="founder">
            <div className="founder-portrait">
              <Image
                src="/team/shawon.jpg"
                alt="Md Khalid Mahmud Shawon — Founder & CEO"
                fill
                sizes="(min-width: 960px) 40vw, 100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="founder-body">
              <div className="founder-role">
                <span className="eyebrow hot" style={{ marginBottom: 16 }}>
                  Founder &amp; CEO
                </span>
              </div>
              <h3 className="founder-name display">
                Md Khalid <em>Mahmud</em> Shawon
              </h3>
              <div className="founder-title">
                Enterprise Web Scraping Expert
              </div>

              <p className="founder-bio">
                Specializing in <strong>enterprise web scraping</strong>, data
                pipeline engineering, and LinkedIn API solutions. Built
                Fastscraping to solve data extraction challenges that other
                vendors couldn&apos;t handle — Cloudflare-defended targets,
                scaled LinkedIn pipelines, and silent white-label partnerships
                for agencies.
              </p>

              <ul className="founder-list">
                <li>
                  <span className="fl-k">Specialty</span>
                  <span className="fl-v">
                    Anti-bot bypass · Cloudflare, DataDome, PerimeterX
                  </span>
                </li>
                <li>
                  <span className="fl-k">Built</span>
                  <span className="fl-v">
                    Fastscraping · Scrayz LinkedIn API
                  </span>
                </li>
                <li>
                  <span className="fl-k">Based in</span>
                  <span className="fl-v">Sirajganj, Rajshahi · Bangladesh</span>
                </li>
                <li>
                  <span className="fl-k">Reach</span>
                  <span className="fl-v">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      khalid@fastscraping.com
                    </a>
                  </span>
                </li>
              </ul>

              <div className="founder-links">
                <a
                  href="https://linkedin.com/in/md-khalid-mahmud-shawon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://upwork.com/freelancers/khalidalsaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Upwork profile
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Contact Khalid
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </article>

          <div className="team-row">
            <article className="member">
              <div className="member-portrait">
                <Image
                  src="/team/kashru.png"
                  alt="Kashru Bin Hadi Sumon — CTO"
                  fill
                  sizes="(min-width: 960px) 25vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="member-body">
                <div className="member-role">CTO</div>
                <h3 className="member-name">Kashru Bin Hadi Sumon</h3>
                <div className="member-title">Data Pipeline Architect</div>
                <p>
                  Leading technical architecture and infrastructure decisions.
                  Expert in building scalable data pipelines and distributed
                  systems.
                </p>
                <div className="member-tags">
                  <span>distributed systems</span>
                  <span>pipelines</span>
                  <span>infra</span>
                </div>
              </div>
            </article>

            <article className="member">
              <div className="member-portrait member-portrait--alt">
                <Image
                  src="/team/rejwan.png"
                  alt="MD Rejwan Habib — Head of Anti-Bot Research"
                  fill
                  sizes="(min-width: 960px) 25vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="member-body">
                <div className="member-role">Head of Anti-Bot Research</div>
                <h3 className="member-name">MD Rejwan Habib</h3>
                <div className="member-title">Anti-Bot Research Lead</div>
                <p>
                  Expert in bypassing Cloudflare, DataDome, PerimeterX, and
                  Akamai. Developing cutting-edge stealth browser technology.
                </p>
                <div className="member-tags">
                  <span>Cloudflare</span>
                  <span>DataDome</span>
                  <span>stealth browser</span>
                </div>
              </div>
            </article>
          </div>

          <p className="team-foot">
            We work in small teams of high-leverage engineers — never armies of
            operators. Open seats:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              we&apos;re hiring senior scraping engineers
            </a>
            .
          </p>
        </div>
      </section>

      {/* ===================== NUMBERS ===================== */}
      <section
        className="block"
        style={{ paddingTop: 0 }}
        data-screen-label="04 Numbers"
      >
        <div className="container">
          <div className="numbers-block dark-numbers">
            <div className="numbers-head">
              <h2>
                <em style={{ color: "#6fd0a3" }}>Real</em> numbers.
              </h2>
              <div className="meta">
                Aggregate across all active client engagements.
                <br />
                Pulled directly from our ops dashboard.
              </div>
            </div>
            <div className="numbers-grid">
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={15} suffix="+" />
                </div>
                <div className="l">Months · longest client relationship</div>
                <div className="s">Ficstar · since 2024</div>
              </div>
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={100} suffix="M+" />
                </div>
                <div className="l">Records processed monthly</div>
                <div className="s">LinkedIn + ticketing + real estate</div>
              </div>
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={0} />
                </div>
                <div className="l">Account bans for any client</div>
                <div className="s">Across all platforms, all time</div>
              </div>
              <div className="num">
                <div className="v">
                  <AnimatedNumber to={5} suffix="+" />
                </div>
                <div className="l">Countries with active operations</div>
                <div className="s">CH · US · CA · DE · UK · BD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="block values-block" data-screen-label="05 Values">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our values</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                What we <em>stand for.</em>
              </h2>
            </div>
            <p>
              Four principles that guide every decision — from how we architect
              a pipeline to how we write an invoice.
            </p>
          </div>

          <div className="values-grid">
            <article className="value">
              <div className="v-rule">
                <span>I</span>
              </div>
              <h3>Reliability first.</h3>
              <p>
                We build infrastructure that runs 24/7. Our clients depend on us
                for production data pipelines — not experiments.
              </p>
              <div className="v-tag">always on</div>
            </article>

            <article className="value">
              <div className="v-rule">
                <span>II</span>
              </div>
              <h3>Technical excellence.</h3>
              <p>
                We solve problems others can&apos;t. From Cloudflare to DataDome
                — we bypass what blocks others. The hard problems are why
                clients hire us.
              </p>
              <div className="v-tag">depth over breadth</div>
            </article>

            <article className="value">
              <div className="v-rule">
                <span>III</span>
              </div>
              <h3>Client success.</h3>
              <p>
                We measure success by our clients&apos; success. Long-term
                partnerships, not one-off projects. Average tenure: 24+ months.
              </p>
              <div className="v-tag">partnerships</div>
            </article>

            <article className="value">
              <div className="v-rule">
                <span>IV</span>
              </div>
              <h3>Transparency.</h3>
              <p>
                Clear pricing, honest timelines, and direct communication. No
                surprises. No &quot;we&apos;ll have to circle back on
                that.&quot;
              </p>
              <div className="v-tag">no surprises</div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE ===================== */}
      <section className="block timeline-block" data-screen-label="06 Timeline">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our journey</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Key <em>milestones.</em>
              </h2>
            </div>
            <p>
              Three years, five countries, one hundred million records a month.
              Here&apos;s how Fastscraping got here.
            </p>
          </div>

          <ol className="timeline">
            <li className="tl-item" data-year="2023">
              <div className="tl-year">2023</div>
              <div className="tl-content">
                <div className="tl-tag">Founded</div>
                <h3>Fastscraping starts.</h3>
                <p>
                  Khalid launches Fastscraping with a vision to simplify
                  enterprise data extraction. First project: a scraper that
                  other vendors had given up on.
                </p>
              </div>
            </li>
            <li className="tl-item" data-year="2024">
              <div className="tl-year">2024</div>
              <div className="tl-content">
                <div className="tl-tag">Enterprise</div>
                <h3>First enterprise client.</h3>
                <p>
                  Partnered with <strong>Ficstar</strong> for ticketing data
                  pipelines — StubHub, SeatGeek, and more. Still running, still
                  ours.
                </p>
              </div>
            </li>
            <li className="tl-item" data-year="2024">
              <div className="tl-year">2024</div>
              <div className="tl-content">
                <div className="tl-tag">Scale</div>
                <h3>100M+ records milestone.</h3>
                <p>
                  Crossed 100 million LinkedIn profiles processed through our
                  infrastructure — without a single account ban.
                </p>
              </div>
            </li>
            <li className="tl-item" data-year="2025">
              <div className="tl-year">2025</div>
              <div className="tl-content">
                <div className="tl-tag">Product</div>
                <h3>
                  Launched <em>Scrayz</em> API.
                </h3>
                <p>
                  Self-serve LinkedIn API product for developers and small
                  teams. Born from three years of solving the LinkedIn problem
                  at enterprise scale.
                </p>
              </div>
            </li>
            <li className="tl-item" data-year="2025">
              <div className="tl-year">2025</div>
              <div className="tl-content">
                <div className="tl-tag">Expansion</div>
                <h3>Switzerland market expansion.</h3>
                <p>
                  Built custom real estate APIs for <strong>TheDataHive</strong>{" "}
                  — ImmoScout24, Homegate, and more. Multi-source, daily
                  refresh, white-label.
                </p>
              </div>
            </li>
            <li className="tl-item tl-current" data-year="2026">
              <div className="tl-year">2026</div>
              <div className="tl-content">
                <div className="tl-tag">Today</div>
                <h3>Global operations.</h3>
                <p>
                  Active pipelines across 5+ countries with zero downtime. Still
                  three engineers. Still no junior intern babysitting scrapers
                  at 3 a.m.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ===================== TWO BRANDS ===================== */}
      <section
        className="block brands-block"
        id="brands"
        data-screen-label="07 Brands"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our brands</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                Two brands, <em>one mission.</em>
              </h2>
            </div>
            <p>
              Two products serving two different audiences — both powered by the
              same anti-bot and infrastructure stack we&apos;ve been building
              since 2023.
            </p>
          </div>

          <div className="brands-grid">
            <article className="brand-card brand-card--fs">
              <div className="bc-head">
                <div className="bc-logo">
                  <span className="brand-mark">f</span>
                  <span>Fastscraping</span>
                </div>
                <a
                  href="https://fastscraping.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bc-url"
                >
                  fastscraping.com →
                </a>
              </div>
              <h3>
                Managed enterprise service
                <br />
                for data teams and agencies.
              </h3>
              <p className="bc-pitch">
                Any platform, any scale, fully managed. We build it, we run it,
                we hand you the data on schedule.
              </p>
              <ul className="bc-list">
                <li>
                  <span className="dot"></span> Custom data pipelines
                </li>
                <li>
                  <span className="dot"></span> Anti-bot bypass included
                </li>
                <li>
                  <span className="dot"></span> Dedicated support
                </li>
                <li>
                  <span className="dot"></span> Enterprise SLAs
                </li>
              </ul>
              <div className="bc-foot">
                <span className="bc-tag">B2B · Managed · Custom</span>
                <Link href="/contact" className="btn btn-primary">
                  Book a demo <span className="arrow">→</span>
                </Link>
              </div>
            </article>

            <article className="brand-card brand-card--sz">
              <div className="bc-head">
                <div className="bc-logo">
                  <span
                    className="brand-mark"
                    style={{ background: "var(--hot)", borderRadius: 999 }}
                  >
                    s
                  </span>
                  <span>Scrayz</span>
                </div>
                <a
                  href="https://scrayz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bc-url"
                >
                  scrayz.com →
                </a>
              </div>
              <h3>
                Self-serve LinkedIn API
                <br />
                for developers and small teams.
              </h3>
              <p className="bc-pitch">
                No cookies, no account bans, no babysitting. A real REST API
                that just returns the data.
              </p>
              <ul className="bc-list">
                <li>
                  <span className="dot"></span> LinkedIn profiles &amp;
                  companies
                </li>
                <li>
                  <span className="dot"></span> Simple REST API
                </li>
                <li>
                  <span className="dot"></span> Pay-as-you-go pricing
                </li>
                <li>
                  <span className="dot"></span> GDPR compliant
                </li>
              </ul>
              <div className="bc-foot">
                <span className="bc-tag">Self-serve · API · Pay-as-you-go</span>
                <a
                  href="https://scrayz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Explore Scrayz <span className="arrow">→</span>
                </a>
              </div>
            </article>
          </div>
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
              <span className="eyebrow">Work with us</span>
              <h2 style={{ marginTop: 18 }}>
                Let&apos;s talk about your <em>data problem.</em>
              </h2>
              <p>
                Tell us what you need scraped and at what cadence. We&apos;ll
                send a free sample inside 48–72 hours and tell you honestly
                whether we&apos;re the right team for the job.
              </p>
              <div className="hero-bullets" style={{ marginTop: 28 }}>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  48–72h sample
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  30-min call
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  White-label friendly
                </span>
              </div>
            </div>

            <div className="cta-card">
              <div className="label">Direct line</div>
              <div className="person">
                <KMAvatar variant="large" />
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
                <a href="/contact" className="btn btn-accent">
                  Book a call
                </a>
                <a href="/contact#letter" className="btn btn-ghost">
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
