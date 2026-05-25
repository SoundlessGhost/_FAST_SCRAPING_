import Link from "next/link";
import TocSpy from "@/components/TocSpy";
import "../styles/about.css";
import "../styles/legal.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Fastscraping collects, uses, and protects your information. GDPR and CCPA compliant.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy policy · Fastscraping",
    description: "GDPR and CCPA compliant. We never sell your data.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy policy · Fastscraping",
    description: "GDPR and CCPA compliant.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <TocSpy />

      {/* ===================== HERO ===================== */}
      <section className="legal-hero" data-screen-label="01 Privacy hero">
        <div className="container">
          <div className="lh-band">
            <div className="lh-trail">
              <Link href="/">Home</Link>
              <span className="sep">→</span>
              <span>Legal</span>
              <span className="sep">→</span>
              <span style={{ color: "var(--ink)" }}>Privacy</span>
            </div>
            <div className="lh-stamp">
              <span className="lh-stamp-label">Last updated</span>
              <span className="lh-stamp-date">23 May · 2026</span>
            </div>
          </div>

          <div className="lh-headline">
            <h1 className="lh-h1">
              <em>Privacy.</em>
            </h1>
            <aside className="lh-deck">
              <p>
                The shortest version: <strong>your brief stays with us</strong>,
                we don&apos;t sell anyone&apos;s data, and we collect only what
                we need to give you a quote, deliver the data you ordered, and
                run the business.
              </p>
              <div className="lh-deck-meta">
                <span className="lh-tag">GDPR · compliant</span>
                <span className="lh-tag">CCPA · compliant</span>
                <span className="lh-tag">Encrypted in transit</span>
              </div>
            </aside>
          </div>

          <div className="tldr-card">
            <div>
              <div className="tldr-h">The gist</div>
              <div className="tldr-sub">In 60 seconds</div>
            </div>
            <ul className="tldr-list">
              <li>
                We collect only what&apos;s needed to do business — name, email,
                project brief.
              </li>
              <li>We never sell, rent, or trade your data to anyone, ever.</li>
              <li>Your project brief is treated as confidential by default.</li>
              <li>
                You can request access, correction, or deletion at any time.
              </li>
              <li>
                We use standard analytics (Plausible — no cookies) on the
                website.
              </li>
              <li>
                For any privacy question, email{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                  target="_blank"
                  style={{ color: "var(--accent)" }}
                >
                  khalid@fastscraping.com
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== MAIN ===================== */}
      <section className="legal-main" data-screen-label="02 Privacy body">
        <div className="container">
          <div className="legal-grid">
            <nav className="toc">
              <div className="toc-h">On this page</div>
              <ol className="toc-list">
                <li>
                  <a href="#s-intro">
                    <span className="toc-n">01</span>
                    <span>Introduction</span>
                  </a>
                </li>
                <li>
                  <a href="#s-collect">
                    <span className="toc-n">02</span>
                    <span>What we collect</span>
                  </a>
                </li>
                <li>
                  <a href="#s-use">
                    <span className="toc-n">03</span>
                    <span>How we use it</span>
                  </a>
                </li>
                <li>
                  <a href="#s-share">
                    <span className="toc-n">04</span>
                    <span>Sharing &amp; disclosure</span>
                  </a>
                </li>
                <li>
                  <a href="#s-cookies">
                    <span className="toc-n">05</span>
                    <span>Cookies &amp; tracking</span>
                  </a>
                </li>
                <li>
                  <a href="#s-retain">
                    <span className="toc-n">06</span>
                    <span>Data retention</span>
                  </a>
                </li>
                <li>
                  <a href="#s-rights">
                    <span className="toc-n">07</span>
                    <span>Your rights</span>
                  </a>
                </li>
                <li>
                  <a href="#s-security">
                    <span className="toc-n">08</span>
                    <span>Security</span>
                  </a>
                </li>
                <li>
                  <a href="#s-intl">
                    <span className="toc-n">09</span>
                    <span>International transfers</span>
                  </a>
                </li>
                <li>
                  <a href="#s-children">
                    <span className="toc-n">10</span>
                    <span>Children&apos;s privacy</span>
                  </a>
                </li>
                <li>
                  <a href="#s-changes">
                    <span className="toc-n">11</span>
                    <span>Changes</span>
                  </a>
                </li>
                <li>
                  <a href="#s-contact">
                    <span className="toc-n">12</span>
                    <span>Contact us</span>
                  </a>
                </li>
              </ol>
              <div className="toc-foot">
                <span>Have a question?</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                  target="_blank"
                >
                  khalid@fastscraping.com
                </a>
              </div>
            </nav>

            <article className="prose">
              <p className="prose-intro">
                This privacy policy describes how Fastscraping (&quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) collects, uses, and protects
                information when you visit our website, contact us about a
                project, or use our services. It is written in plain English so
                you can actually read it.
              </p>

              <section id="s-intro">
                <div className="prose-num">01 · Introduction</div>
                <h2>Who we are.</h2>
                <p>
                  Fastscraping is a managed web scraping service operated by Md
                  Khalid Mahmud Shawon (the &quot;Founder&quot;), based in
                  Sirajganj, Bangladesh. We help data teams, AI companies, and
                  enterprises extract structured data from public web sources at
                  scale.
                </p>
                <p>
                  This policy applies to <Link href="/">fastscraping.com</Link>,
                  our pricing pages, our contact form, and any direct
                  communication you have with our team. If you also use our
                  companion product <em>Scrayz</em>, a separate policy applies
                  on scrayz.com.
                </p>
                <p>
                  We are the data controller for personal information you give
                  us directly. When we deliver client engagements, we act as a
                  data processor for the data your contract covers — those terms
                  are governed by your Services Agreement.
                </p>
              </section>

              <section id="s-collect">
                <div className="prose-num">02 · What we collect</div>
                <h2>
                  Only what we <em>need.</em>
                </h2>

                <div className="prose-pull">
                  <div className="prose-pull-label">In short</div>
                  <p>
                    Your name, email, company, and what you&apos;re asking us to
                    build. That&apos;s it.
                  </p>
                </div>

                <p>The information we collect falls into three categories:</p>

                <h3>Information you give us</h3>
                <dl>
                  <dt>Identity</dt>
                  <dd>
                    Your name and company, when you contact us or sign a
                    contract.
                  </dd>
                  <dt>Contact</dt>
                  <dd>
                    Your email address (and phone number if you provide one).
                  </dd>
                  <dt>Project brief</dt>
                  <dd>
                    The details you share about what you want us to build —
                    target sites, fields, volume, cadence, and any context you
                    choose to include.
                  </dd>
                  <dt>Billing</dt>
                  <dd>
                    Company name, billing address, VAT/EIN, and the bank or card
                    information you use to pay. Card data is held by our payment
                    processor; we never see the full number.
                  </dd>
                </dl>

                <h3>Information collected automatically</h3>
                <ul>
                  <li>
                    Visit data — pages viewed, referrer, country (from IP),
                    device class. We use <strong>Plausible</strong>, which is
                    cookieless and never tracks individuals.
                  </li>
                  <li>
                    Email engagement — opens and clicks on transactional emails,
                    used only to know if our quote actually reached you.
                  </li>
                  <li>
                    Server logs — request URLs, HTTP status, timestamps. Kept
                    for 30 days for security and debugging.
                  </li>
                </ul>

                <h3>Information from third parties</h3>
                <p>
                  If you reach us through LinkedIn, Upwork, or WhatsApp, those
                  platforms pass us the information you&apos;ve made available
                  on them (name, profile URL, message text). We don&apos;t
                  scrape, enrich, or buy contact data about you from anywhere
                  else.
                </p>
              </section>

              <section id="s-use">
                <div className="prose-num">03 · How we use it</div>
                <h2>How we use your information.</h2>
                <p>
                  We use information for the following purposes, and only these:
                </p>
                <ul>
                  <li>
                    <strong>Quoting.</strong> To respond to your contact-form
                    note, scope the work, and send you a price.
                  </li>
                  <li>
                    <strong>Service delivery.</strong> To build and run the data
                    pipelines you&apos;ve hired us to operate, including the
                    destinations you&apos;ve asked us to deliver to.
                  </li>
                  <li>
                    <strong>Communications.</strong> Project updates, invoices,
                    and the occasional once-a-quarter heads-up about new things.
                    We do not run marketing campaigns.
                  </li>
                  <li>
                    <strong>Billing.</strong> To send invoices and collect
                    payment.
                  </li>
                  <li>
                    <strong>Security &amp; debugging.</strong> To investigate
                    suspicious traffic, fix bugs, and keep the infrastructure
                    healthy.
                  </li>
                  <li>
                    <strong>Legal compliance.</strong> To comply with applicable
                    laws (GDPR, CCPA, tax, accounting).
                  </li>
                </ul>
                <p>
                  Our legal basis under GDPR is either your{" "}
                  <strong>consent</strong> (when you write to us), performance
                  of a <strong>contract</strong> (once we&apos;re working
                  together), or our <strong>legitimate interest</strong> in
                  running the business (security, accounting).
                </p>
              </section>

              <section id="s-share">
                <div className="prose-num">04 · Sharing &amp; disclosure</div>
                <h2>Who else sees your data.</h2>

                <div className="prose-pull">
                  <div className="prose-pull-label">Important</div>
                  <p>
                    We never sell, rent, or trade your personal information. Not
                    to anyone, ever.
                  </p>
                </div>

                <p>
                  We share your information with the following limited
                  categories of third parties:
                </p>
                <ul>
                  <li>
                    <strong>Sub-processors</strong> — the cloud and
                    infrastructure providers we use to run the service (AWS,
                    Cloudflare, our email host). They process data on our behalf
                    under strict contracts.
                  </li>
                  <li>
                    <strong>Payment processor</strong> — Stripe or Wise,
                    depending on your geography. They handle card and bank
                    details directly; we don&apos;t store them.
                  </li>
                  <li>
                    <strong>Professional advisors</strong> — accountants and
                    lawyers, when required.
                  </li>
                  <li>
                    <strong>Authorities</strong> — only when legally compelled
                    by a valid court order or subpoena, and we will notify you
                    unless the order forbids it.
                  </li>
                </ul>
                <p>
                  We do <em>not</em> share your project brief, target sites, or
                  extracted data with anyone outside our team without your
                  written consent.
                </p>
              </section>

              <section id="s-cookies">
                <div className="prose-num">05 · Cookies &amp; tracking</div>
                <h2>Cookies (or rather, the absence of them).</h2>
                <p>
                  Our website does not use tracking cookies. We use a single
                  first-party preference cookie to remember UI choices (like the
                  design accent toggle in our prototype views), and that&apos;s
                  it.
                </p>
                <p>
                  For website analytics we use <strong>Plausible</strong>, a
                  privacy-focused analytics tool that does not use cookies, does
                  not track individuals, does not transfer data to third
                  countries, and is fully GDPR-compliant by design.
                </p>
              </section>

              <section id="s-retain">
                <div className="prose-num">06 · Data retention</div>
                <h2>How long we keep things.</h2>
                <dl>
                  <dt>Contact-form notes</dt>
                  <dd>24 months after last activity. Then deleted.</dd>
                  <dt>Active client data</dt>
                  <dd>
                    For the duration of the engagement and 12 months after, for
                    support continuity.
                  </dd>
                  <dt>Invoices &amp; tax records</dt>
                  <dd>
                    7 years, as required by Bangladeshi and applicable EU tax
                    law.
                  </dd>
                  <dt>Server logs</dt>
                  <dd>30 days.</dd>
                  <dt>Email analytics</dt>
                  <dd>12 months.</dd>
                </dl>
                <p>
                  You can request earlier deletion at any time — see{" "}
                  <a href="#s-rights">section 07</a>.
                </p>
              </section>

              <section id="s-rights">
                <div className="prose-num">07 · Your rights</div>
                <h2>Your rights under GDPR &amp; CCPA.</h2>
                <p>You have the right to:</p>
                <ol>
                  <li>
                    <strong>Access</strong> — get a copy of the personal
                    information we hold about you.
                  </li>
                  <li>
                    <strong>Rectification</strong> — correct any inaccurate
                    information.
                  </li>
                  <li>
                    <strong>Erasure</strong> — ask us to delete your data (the
                    &quot;right to be forgotten&quot;), subject to legal
                    retention obligations.
                  </li>
                  <li>
                    <strong>Restriction</strong> — limit how we process your
                    data.
                  </li>
                  <li>
                    <strong>Portability</strong> — receive your data in a
                    portable, machine-readable format.
                  </li>
                  <li>
                    <strong>Object</strong> — object to processing based on our
                    legitimate interest.
                  </li>
                  <li>
                    <strong>Withdraw consent</strong> — at any time, without
                    affecting prior lawful processing.
                  </li>
                  <li>
                    <strong>Lodge a complaint</strong> — with your local data
                    protection authority.
                  </li>
                </ol>
                <p>
                  To exercise any of these rights, email{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                    target="_blank"
                  >
                    khalid@fastscraping.com
                  </a>
                  . We respond within 30 days, and usually much sooner.
                </p>
              </section>

              <section id="s-security">
                <div className="prose-num">08 · Security</div>
                <h2>How we protect your data.</h2>
                <p>
                  We take security seriously because our clients depend on us
                  operating quietly and invisibly. Our security posture
                  includes:
                </p>
                <ul>
                  <li>TLS 1.3 for all data in transit, end-to-end.</li>
                  <li>
                    Encryption at rest for backups, briefs, and any client data
                    we hold.
                  </li>
                  <li>
                    Principle-of-least-privilege access — only the engineers who
                    need a given dataset have access to it.
                  </li>
                  <li>
                    Multi-factor authentication on every operational account.
                  </li>
                  <li>Quarterly access reviews and key rotation.</li>
                  <li>
                    Incident response within 72 hours, with notification to
                    affected clients.
                  </li>
                </ul>
                <p>
                  No system is perfectly secure. If you discover a
                  vulnerability, email{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                    target="_blank"
                  >
                    khalid@fastscraping.com
                  </a>{" "}
                  and we&apos;ll respond within 24 hours.
                </p>
              </section>

              <section id="s-intl">
                <div className="prose-num">09 · International transfers</div>
                <h2>Where your data lives.</h2>
                <p>
                  Our infrastructure runs primarily in the EU (Frankfurt) and
                  the US (Virginia and Oregon). Bangladesh is where the team is
                  based, so a copy of metadata may transit through there for
                  operational purposes.
                </p>
                <p>
                  For data subject to GDPR, transfers outside the EU are covered
                  by Standard Contractual Clauses (SCCs) and supplementary
                  measures as required by the EDPB. You can request a copy of
                  our SCCs at any time.
                </p>
              </section>

              <section id="s-children">
                <div className="prose-num">10 · Children&apos;s privacy</div>
                <h2>Children&apos;s privacy.</h2>
                <p>
                  Our services are intended for businesses and adult
                  professionals. We do not knowingly collect personal
                  information from anyone under 16. If you believe a minor has
                  provided us with personal information, please email us and we
                  will delete it immediately.
                </p>
              </section>

              <section id="s-changes">
                <div className="prose-num">11 · Changes</div>
                <h2>Changes to this policy.</h2>
                <p>
                  We may update this policy occasionally — to reflect new
                  services, new regulations, or new things we&apos;ve learned.
                  When we make material changes, we&apos;ll update the
                  &quot;Last updated&quot; date at the top and, for changes that
                  materially affect your rights, send an email to active clients
                  at least 30 days before the change takes effect.
                </p>
                <p>
                  The current version is the only one that applies. Previous
                  versions are archived; ask us if you&apos;d like a copy.
                </p>
              </section>

              <section id="s-contact">
                <div className="prose-num">12 · Contact us</div>
                <h2>Talk to us.</h2>
                <p>For any privacy-related question or request, contact:</p>
                <dl>
                  <dt>Email</dt>
                  <dd>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                      target="_blank"
                    >
                      khalid@fastscraping.com
                    </a>{" "}
                    — replies within 24 hours
                  </dd>
                  <dt>WhatsApp</dt>
                  <dd>+880 1788 791 134</dd>
                  <dt>Mail</dt>
                  <dd>Fastscraping · Sirajganj, Rajshahi · Bangladesh</dd>
                </dl>
                <p>
                  EU residents may also contact their local data protection
                  authority directly. UK residents can contact the Information
                  Commissioner&apos;s Office (ICO).
                </p>
              </section>

              <div className="legal-foot-card">
                <div>
                  <span
                    className="eyebrow hot"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Still have questions?
                  </span>
                  <h3>
                    Privacy isn&apos;t a checkbox —{" "}
                    <em>it&apos;s a conversation.</em>
                  </h3>
                  <p>
                    If anything in this policy isn&apos;t clear, or you want a
                    deeper conversation about how we handle a specific dataset,
                    Khalid will answer personally.
                  </p>
                </div>
                <div className="legal-foot-actions">
                  <Link href="/contact#letter" className="btn btn-primary">
                    Send us a note <span className="arrow">→</span>
                  </Link>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                    target="_blank"
                    className="btn btn-ghost"
                  >
                    Email directly
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
