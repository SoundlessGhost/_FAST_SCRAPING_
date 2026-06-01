import Link from "next/link";
import TocSpy from "@/components/TocSpy";
import "../styles/about.css";import "../styles/legal.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "Fastscraping terms of service. You own what we deliver, we own how we build it, we both act in good faith.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of service · Fastscraping",
    description: "Month-to-month. No lock-in. Cancel any time.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of service · Fastscraping",
    description: "Month-to-month. No lock-in.",
  },
};

export default function TermsPage() {
  return (
    <>
      <TocSpy />

      <section className="legal-hero" data-screen-label="01 Terms hero">
        <div className="container">
          <div className="lh-band">
            <div className="lh-trail">
              <Link href="/">Home</Link>
              <span className="sep">→</span>
              <span>Legal</span>
              <span className="sep">→</span>
              <span style={{ color: "var(--ink)" }}>Terms</span>
            </div>
            <div className="lh-stamp">
              <span className="lh-stamp-label">Last updated</span>
              <span className="lh-stamp-date">23 May · 2026</span>
            </div>
          </div>

          <div className="lh-headline">
            <h1 className="lh-h1">
              <em>Terms.</em>
            </h1>
            <aside className="lh-deck">
              <p>
                The contract between you and Fastscraping. Written in plain
                English where possible. The headline:{" "}
                <strong>
                  you own what we deliver, we own how we build it, and we both
                  act in good faith
                </strong>
                .
              </p>
              <div className="lh-deck-meta">
                <span className="lh-tag">Month-to-month</span>
                <span className="lh-tag">No lock-in</span>
                <span className="lh-tag">Cancel any time</span>
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
                We deliver data. You pay monthly. Cancel any time with 30
                days&apos; notice.
              </li>
              <li>
                You own the data we deliver to you, in full, with no claim on
                our side.
              </li>
              <li>
                We own the tools, scrapers, and infrastructure we build. Always
                have, always will.
              </li>
              <li>
                Either side can terminate for cause at any time, with reasonable
                notice.
              </li>
              <li>
                Liability is capped to fees paid in the prior twelve months —
                standard B2B.
              </li>
              <li>
                Governing law is Bangladesh; we cooperate with international
                arbitration.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="legal-main" data-screen-label="02 Terms body">
        <div className="container">
          <div className="legal-grid">
            <nav className="toc">
              <div className="toc-h">On this page</div>
              <ol className="toc-list">
                <li>
                  <a href="#s-accept">
                    <span className="toc-n">01</span>
                    <span>Acceptance</span>
                  </a>
                </li>
                <li>
                  <a href="#s-services">
                    <span className="toc-n">02</span>
                    <span>Our services</span>
                  </a>
                </li>
                <li>
                  <a href="#s-account">
                    <span className="toc-n">03</span>
                    <span>Accounts &amp; eligibility</span>
                  </a>
                </li>
                <li>
                  <a href="#s-scope">
                    <span className="toc-n">04</span>
                    <span>Engagement scope</span>
                  </a>
                </li>
                <li>
                  <a href="#s-fees">
                    <span className="toc-n">05</span>
                    <span>Fees &amp; payment</span>
                  </a>
                </li>
                <li>
                  <a href="#s-use">
                    <span className="toc-n">06</span>
                    <span>Acceptable use</span>
                  </a>
                </li>
                <li>
                  <a href="#s-ownership">
                    <span className="toc-n">07</span>
                    <span>Ownership of data</span>
                  </a>
                </li>
                <li>
                  <a href="#s-ip">
                    <span className="toc-n">08</span>
                    <span>Intellectual property</span>
                  </a>
                </li>
                <li>
                  <a href="#s-confid">
                    <span className="toc-n">09</span>
                    <span>Confidentiality</span>
                  </a>
                </li>
                <li>
                  <a href="#s-warranty">
                    <span className="toc-n">10</span>
                    <span>Warranties</span>
                  </a>
                </li>
                <li>
                  <a href="#s-liability">
                    <span className="toc-n">11</span>
                    <span>Limitation of liability</span>
                  </a>
                </li>
                <li>
                  <a href="#s-indemnity">
                    <span className="toc-n">12</span>
                    <span>Indemnification</span>
                  </a>
                </li>
                <li>
                  <a href="#s-term">
                    <span className="toc-n">13</span>
                    <span>Term &amp; termination</span>
                  </a>
                </li>
                <li>
                  <a href="#s-law">
                    <span className="toc-n">14</span>
                    <span>Governing law</span>
                  </a>
                </li>
                <li>
                  <a href="#s-changes">
                    <span className="toc-n">15</span>
                    <span>Changes</span>
                  </a>
                </li>
                <li>
                  <a href="#s-contact">
                    <span className="toc-n">16</span>
                    <span>Contact us</span>
                  </a>
                </li>
              </ol>
              <div className="toc-foot">
                <span>Need to negotiate?</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  khalid@fastscraping.com
                </a>
              </div>
            </nav>

            <article className="prose">
              <p className="prose-intro">
                These terms govern your use of Fastscraping&apos;s website and
                services. They form a binding agreement between you (or the
                entity you represent) and Fastscraping. Please read them —
                they&apos;re as short as we can make them.
              </p>

              <section id="s-accept">
                <div className="prose-num">01 · Acceptance</div>
                <h2>Accepting these terms.</h2>
                <p>
                  By visiting our website, signing a Statement of Work, or
                  otherwise using our services, you agree to these terms. If you
                  don&apos;t agree, please don&apos;t use the services.
                </p>
                <p>
                  If you&apos;re accepting these terms on behalf of a company,
                  you confirm that you have authority to do so. Where these
                  terms conflict with a signed Master Services Agreement or
                  Statement of Work, the signed document controls.
                </p>
              </section>

              <section id="s-services">
                <div className="prose-num">02 · Our services</div>
                <h2>
                  What we <em>do.</em>
                </h2>
                <p>
                  Fastscraping provides managed web data extraction services,
                  including:
                </p>
                <ul>
                  <li>Custom scraper development and operation</li>
                  <li>
                    Anti-bot bypass for Cloudflare, DataDome, PerimeterX, Akamai
                    and similar systems
                  </li>
                  <li>Recurring data delivery pipelines (ETL/ELT)</li>
                  <li>Custom web APIs built on extracted data</li>
                  <li>White-label data services for agencies and resellers</li>
                </ul>
                <p>
                  We do not promise to scrape sites whose terms of service
                  prohibit extraction or whose content is subject to applicable
                  legal restrictions. We retain the right to decline any project
                  for any reason.
                </p>
              </section>

              <section id="s-account">
                <div className="prose-num">03 · Accounts &amp; eligibility</div>
                <h2>Who can use Fastscraping.</h2>
                <p>
                  You must be at least 18 and able to enter into a binding
                  contract under the law of your jurisdiction. Our services are
                  intended for businesses and adult professionals — not
                  consumers.
                </p>
                <p>
                  You&apos;re responsible for keeping your credentials
                  confidential and for everything that happens under your
                  account. Tell us promptly if you suspect any unauthorized
                  access.
                </p>
              </section>

              <section id="s-scope">
                <div className="prose-num">04 · Engagement scope</div>
                <h2>Each engagement is custom.</h2>

                <div className="prose-pull">
                  <div className="prose-pull-label">Important</div>
                  <p>
                    Project scope is defined in your Statement of Work. These
                    terms cover everything not specified there.
                  </p>
                </div>

                <p>
                  For each engagement, we agree on a written Statement of Work
                  (&quot;SOW&quot;) that specifies the target sites, fields,
                  volume, cadence, delivery method, and price. Any change in
                  scope requires a written amendment.
                </p>
                <p>
                  Service levels — uptime SLA, response time, data freshness —
                  are specified in the SOW. If no SLA is specified, we provide
                  commercially reasonable best-effort service.
                </p>
              </section>

              <section id="s-fees">
                <div className="prose-num">05 · Fees &amp; payment</div>
                <h2>Pricing &amp; payment terms.</h2>
                <p>
                  Fees are specified in your SOW. Unless otherwise agreed in
                  writing:
                </p>
                <ul>
                  <li>Invoices are issued monthly in advance.</li>
                  <li>Payment is due within 14 days of invoice date.</li>
                  <li>
                    Late payments accrue interest at 1.5% per month or the
                    maximum permitted by law.
                  </li>
                  <li>
                    We reserve the right to suspend services for accounts more
                    than 30 days overdue, after written notice.
                  </li>
                  <li>
                    All fees are exclusive of taxes; you&apos;re responsible for
                    VAT, sales tax, and similar where applicable.
                  </li>
                </ul>
                <p>
                  Prices may be revised once per year, with at least 60
                  days&apos; prior written notice. If you don&apos;t agree to a
                  price change, you may terminate with 30 days&apos; notice at
                  no additional charge.
                </p>
              </section>

              <section id="s-use">
                <div className="prose-num">06 · Acceptable use</div>
                <h2>Use the data responsibly.</h2>
                <p>You agree that you will not:</p>
                <ul>
                  <li>
                    Use our services or delivered data for any unlawful purpose,
                    including violation of intellectual property,
                    anti-discrimination, anti-trust, or consumer-protection
                    laws.
                  </li>
                  <li>
                    Resell the delivered data as-is to third parties without our
                    written consent (you can use it to power your own services —
                    that&apos;s fine).
                  </li>
                  <li>
                    Attempt to reverse-engineer, decompile, or otherwise extract
                    the source code or operational logic of our infrastructure.
                  </li>
                  <li>
                    Use the services in a way that materially damages, disables,
                    or impairs them.
                  </li>
                  <li>
                    Use the services to scrape data we have specifically
                    declined to scrape.
                  </li>
                </ul>
              </section>

              <section id="s-ownership">
                <div className="prose-num">07 · Ownership of data</div>
                <h2>
                  You own what we <em>deliver.</em>
                </h2>

                <div className="prose-pull">
                  <div className="prose-pull-label">Plain language</div>
                  <p>
                    The data we hand over is yours. Use it in your products,
                    your reports, your dashboards.
                  </p>
                </div>

                <p>
                  On delivery, you receive a worldwide, perpetual, paid-up,
                  transferable license to use, store, process, and incorporate
                  the delivered data into your own products and services.
                </p>
                <p>
                  Where the source data is subject to third-party rights (for
                  example, copyright in article text), you&apos;re responsible
                  for complying with those rights when you use it.
                </p>
              </section>

              <section id="s-ip">
                <div className="prose-num">08 · Intellectual property</div>
                <h2>Our tools, our IP.</h2>
                <p>
                  We retain all rights, title, and interest in our scrapers,
                  parsers, anti-bot systems, infrastructure, dashboards,
                  methodologies, and any improvements we make to them — even
                  when those improvements are inspired by your engagement.
                </p>
                <p>
                  You&apos;re granted no rights to our IP except the right to
                  use the services we deliver during the term of your
                  engagement. Nothing in these terms transfers ownership of any
                  pre-existing IP from one party to the other.
                </p>
              </section>

              <section id="s-confid">
                <div className="prose-num">09 · Confidentiality</div>
                <h2>Your brief stays private.</h2>
                <p>
                  Each party will treat the other&apos;s confidential
                  information as confidential and use it only as needed to
                  perform the agreement. Confidential information includes your
                  project brief, target sites, business strategy, and any
                  non-public information you share with us.
                </p>
                <p>
                  This obligation survives termination of the agreement and
                  lasts for five years. Confidentiality does not apply to
                  information that is or becomes public, was already known, is
                  independently developed, or is required to be disclosed by
                  law.
                </p>
              </section>

              <section id="s-warranty">
                <div className="prose-num">10 · Warranties</div>
                <h2>What we promise — and don&apos;t.</h2>
                <p>
                  We warrant that the services will be performed with reasonable
                  skill and care, by qualified personnel, in accordance with the
                  SOW.
                </p>
                <p>
                  EXCEPT AS EXPRESSLY STATED, THE SERVICES ARE PROVIDED{" "}
                  <strong>&quot;AS IS&quot;</strong>. WE DISCLAIM ALL OTHER
                  WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES
                  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT.
                </p>
                <p>
                  We don&apos;t warrant that source websites will remain
                  available, that their data will remain consistent, or that
                  anti-bot systems we currently bypass will remain bypassable
                  indefinitely. We&apos;ll make commercially reasonable efforts
                  to adapt — but the web is what the web is.
                </p>
              </section>

              <section id="s-liability">
                <div className="prose-num">11 · Limitation of liability</div>
                <h2>Limits on liability.</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                  OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR
                  BUSINESS OPPORTUNITIES, ARISING FROM OR RELATED TO THIS
                  AGREEMENT.
                </p>
                <p>
                  EACH PARTY&apos;S TOTAL CUMULATIVE LIABILITY UNDER THIS
                  AGREEMENT WILL NOT EXCEED THE{" "}
                  <strong>
                    AMOUNTS PAID BY YOU TO US IN THE TWELVE MONTHS
                  </strong>{" "}
                  PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                </p>
                <p>
                  These limits do not apply to (i) breaches of confidentiality,
                  (ii) indemnification obligations, (iii) gross negligence or
                  wilful misconduct, or (iv) liabilities that cannot be limited
                  under applicable law.
                </p>
              </section>

              <section id="s-indemnity">
                <div className="prose-num">12 · Indemnification</div>
                <h2>Indemnification.</h2>
                <p>
                  You agree to indemnify and hold Fastscraping harmless from any
                  third-party claim arising from (i) your use of the delivered
                  data in violation of third-party rights, (ii) your breach of
                  these terms, or (iii) your violation of applicable law.
                </p>
                <p>
                  We agree to indemnify and hold you harmless from any
                  third-party claim that the services, as delivered by us and
                  used in accordance with these terms, infringe a valid patent,
                  copyright, or trademark.
                </p>
              </section>

              <section id="s-term">
                <div className="prose-num">13 · Term &amp; termination</div>
                <h2>How we end things.</h2>
                <p>
                  The agreement begins when you accept these terms or sign an
                  SOW, and continues until either party terminates it. Either
                  party may terminate for convenience with at least{" "}
                  <strong>30 days&apos; written notice</strong>. There are no
                  early-termination fees.
                </p>
                <p>
                  Either party may terminate for cause immediately, in writing,
                  if the other materially breaches the agreement and fails to
                  cure within 30 days of written notice.
                </p>
                <p>
                  On termination: (i) all unpaid fees become due, (ii) we
                  deliver any data already extracted and paid for, and (iii)
                  each party returns or deletes the other&apos;s confidential
                  information within 30 days.
                </p>
              </section>

              <section id="s-law">
                <div className="prose-num">14 · Governing law</div>
                <h2>Governing law &amp; disputes.</h2>
                <p>
                  These terms are governed by the laws of the People&apos;s
                  Republic of Bangladesh, without regard to conflict-of-laws
                  principles.
                </p>
                <p>
                  Any dispute that can&apos;t be resolved by good-faith
                  discussion will be finally settled by binding arbitration
                  under the rules of the Singapore International Arbitration
                  Centre (SIAC). The seat of arbitration is Singapore, the
                  language is English, and the tribunal consists of one
                  arbitrator.
                </p>
                <p>
                  Notwithstanding the above, either party may seek injunctive
                  relief in any court of competent jurisdiction to protect its
                  intellectual property or confidential information.
                </p>
              </section>

              <section id="s-changes">
                <div className="prose-num">15 · Changes</div>
                <h2>Changes to these terms.</h2>
                <p>
                  We may update these terms occasionally. For material changes
                  affecting active clients, we&apos;ll send written notice at
                  least 30 days before the new terms take effect. If you
                  disagree, you may terminate within that 30-day window with no
                  penalty.
                </p>
                <p>
                  For purely clarifying or non-material changes, we&apos;ll
                  update the &quot;Last updated&quot; date and notify on the
                  website.
                </p>
              </section>

              <section id="s-contact">
                <div className="prose-num">16 · Contact us</div>
                <h2>Get in touch.</h2>
                <p>
                  Questions about these terms? Want to negotiate a custom MSA?
                  Email:
                </p>
                <dl>
                  <dt>Email</dt>
                  <dd>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      khalid@fastscraping.com
                    </a>
                  </dd>
                  <dt>WhatsApp</dt>
                  <dd>+880 1788 791 134</dd>
                  <dt>Mail</dt>
                  <dd>Fastscraping · Sirajganj, Rajshahi · Bangladesh</dd>
                </dl>
              </section>

              <div className="legal-foot-card">
                <div>
                  <span
                    className="eyebrow hot"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    Want a custom agreement?
                  </span>
                  <h3>
                    For enterprise clients,{" "}
                    <em>we&apos;ll negotiate an MSA.</em>
                  </h3>
                  <p>
                    We routinely sign Master Services Agreements that override
                    these standard terms — bring yours, or we&apos;ll start from
                    ours and meet in the middle.
                  </p>
                </div>
                <div className="legal-foot-actions">
                  <Link href="/contact" className="btn btn-primary">
                    Send a brief <span className="arrow">→</span>
                  </Link>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                    target="_blank"
                    rel="noopener noreferrer"
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
