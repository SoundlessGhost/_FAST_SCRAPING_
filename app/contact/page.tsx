import Image from "next/image";
import LetterForm from "@/components/LetterForm";
import TimezoneClocks from "@/components/TimezoneClocks";
import LetterDate from "@/components/LetterDate";
import "../styles/about.css";import "../styles/contact.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you need scraped — sites, volume, cadence, delivery — and we'll send a tailored quote within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Fastscraping",
    description:
      "Quote within 24 hours. Free sample in 48–72 hours. No commitment.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · Fastscraping",
    description: "Quote within 24 hours. Free sample in 48–72 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero" data-screen-label="01 Contact hero">
        <div className="container">
          <div className="ah-band">
            <span className="eyebrow">Contact · we read every note</span>
            <div className="ah-band-right">
              <span className="kbd">Quote in &lt; 24h</span>
              <span className="kbd">→</span>
              <span className="kbd">Sample in 48–72h</span>
              <span className="kbd">→</span>
              <span className="kbd">No commitment</span>
            </div>
          </div>

          <div className="ch-headline">
            <h1 className="display ch-h1">
              Let&apos;s start a <em>conversation.</em>
            </h1>
            <aside className="ch-deck">
              <p>
                Tell us what you need scraped — sites, volume, cadence, delivery
                — and we&apos;ll send a{" "}
                <strong>tailored quote within 24 hours</strong>. If it&apos;s
                something we can deliver well, we&apos;ll follow with a free
                sample inside 48–72 hours. If we can&apos;t, we&apos;ll tell you
                that too.
              </p>
              <div className="ch-deck-foot">
                <a href="#letter" className="btn btn-primary">
                  Write us a note <span className="arrow">↓</span>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Or email directly
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="block letter-block"
        id="letter"
        data-screen-label="02 Letter"
      >
        <div className="container">
          <div className="letter-grid">
            <article className="letter">
              <header className="lt-head">
                <div className="lt-stamp">
                  <span className="lt-stamp-l1">FROM</span>
                  <span className="lt-stamp-l2">You</span>
                </div>
                <div className="lt-meta">
                  <span className="lt-meta-l">RE</span>
                  <span className="lt-meta-v">A data extraction project</span>
                  <span className="lt-meta-l">DATE</span>
                  <span className="lt-meta-v" id="lt-date">
                    <LetterDate />
                  </span>
                </div>
              </header>
              <LetterForm />
            </article>

            <aside className="direct-lines">
              <div className="dl-card dl-card--founder">
                <div className="dl-portrait">
                  <Image
                    src="/team/shawon.jpg"
                    alt="Md Khalid Mahmud Shawon — Founder"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="dl-founder-body">
                  <div className="dl-eyebrow">Founder · direct</div>
                  <h3>
                    Khalid <em>Mahmud</em>
                  </h3>
                  <p>
                    You&apos;ll be talking to me. I personally reply to every
                    first email within 24 hours.
                  </p>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dl-mail"
                  >
                    <span>khalid@fastscraping.com</span>
                    <span className="dl-mail-arr">→</span>
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/8801788791134"
                target="_blank"
                rel="noopener noreferrer"
                className="dl-row dl-row--wa"
              >
                <span className="dl-ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                  </svg>
                </span>
                <div className="dl-row-body">
                  <div className="dl-row-h">WhatsApp</div>
                  <div className="dl-row-v">+880 1788 791 134</div>
                  <div className="dl-row-s">Fastest for quick questions</div>
                </div>
                <span className="dl-row-arr">→</span>
              </a>

              <a
                href="https://linkedin.com/in/md-khalid-mahmud-shawon"
                target="_blank"
                rel="noopener noreferrer"
                className="dl-row dl-row--li"
              >
                <span className="dl-ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </span>
                <div className="dl-row-body">
                  <div className="dl-row-h">LinkedIn</div>
                  <div className="dl-row-v">/in/md-khalid-mahmud-shawon</div>
                  <div className="dl-row-s">Connect &amp; DM</div>
                </div>
                <span className="dl-row-arr">→</span>
              </a>

              <a href="#letter" className="dl-row dl-row--call">
                <span className="dl-ic">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <div className="dl-row-body">
                  <div className="dl-row-h">Book a 30-min call</div>
                  <div className="dl-row-v">Calendly · zero slides</div>
                  <div className="dl-row-s">
                    Best for deeper project scoping
                  </div>
                </div>
                <span className="dl-row-arr">→</span>
              </a>

              <a
                href="https://upwork.com/freelancers/khalidalsaba"
                target="_blank"
                rel="noopener noreferrer"
                className="dl-row dl-row--up"
              >
                <span className="dl-ic">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </span>
                <div className="dl-row-body">
                  <div className="dl-row-h">Upwork</div>
                  <div className="dl-row-v">Top Rated Plus · 100% JSS</div>
                  <div className="dl-row-s">
                    For platform-mediated engagements
                  </div>
                </div>
                <span className="dl-row-arr">→</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="block include-block"
        data-screen-label="03 What to include"
      >
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Tips for a great first note</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                What to include in your <em>message.</em>
              </h2>
            </div>
            <p>
              The more specifics you share, the faster (and more accurate) we
              can be with the quote. Don&apos;t worry if you don&apos;t know all
              of these — we&apos;ll ask the rest on the intro call.
            </p>
          </div>

          <div className="incl-list">
            <article className="incl-item">
              <span className="incl-num">01</span>
              <div>
                <h3>The websites</h3>
                <p>
                  URLs of the sites or platforms you want data from. The more
                  specific the better — a category page is more useful than just
                  the homepage.
                </p>
              </div>
            </article>
            <article className="incl-item">
              <span className="incl-num">02</span>
              <div>
                <h3>The fields</h3>
                <p>
                  What data points matter? Price, title, image, stock, reviews,
                  contact info — list what you actually need to act on.
                </p>
              </div>
            </article>
            <article className="incl-item">
              <span className="incl-num">03</span>
              <div>
                <h3>The volume</h3>
                <p>
                  Rough scale — 1K records a day? 1M? 100M? It dictates
                  infrastructure choices and pricing tier.
                </p>
              </div>
            </article>
            <article className="incl-item">
              <span className="incl-num">04</span>
              <div>
                <h3>The cadence</h3>
                <p>
                  Real-time, hourly, daily, weekly, monthly? Or just a one-time
                  historical pull?
                </p>
              </div>
            </article>
            <article className="incl-item">
              <span className="incl-num">05</span>
              <div>
                <h3>The delivery</h3>
                <p>
                  REST API, webhook, S3, SFTP, direct DB write, plain CSV via
                  email — tell us how you want it landing.
                </p>
              </div>
            </article>
            <article className="incl-item">
              <span className="incl-num">06</span>
              <div>
                <h3>Anything else</h3>
                <p>
                  Existing vendor and pricing (so we can match/beat), deadline,
                  white-label needs, NDA requirements.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="block tz-block" data-screen-label="04 Timezone">
        <div className="container">
          <div className="tz-card">
            <div className="tz-left">
              <span className="eyebrow">Where &amp; when</span>
              <h2 className="display" style={{ marginTop: 18 }}>
                We&apos;re in Sirajganj, Ullapara, BD —{" "}
                <em>already working when you wake up.</em>
              </h2>
              <p>
                The team is based in Bangladesh (GMT+6). That overlaps with EU
                business hours every morning and with US East Coast every
                afternoon. We answer urgent issues 24/7 — non-urgent ones,
                inside 24 hours.
              </p>
            </div>

            <div className="tz-right">
              <TimezoneClocks />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
