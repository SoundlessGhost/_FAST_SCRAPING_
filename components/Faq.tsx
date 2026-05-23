"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How does Fastscraping pricing work?",
    a1: "We don't publish fixed tiers because every pipeline is different. A daily Cloudflare-defended ticketing scraper is a very different engineering job than a monthly job-board sync.",
    a2: "Instead we quote each engagement based on what it costs us to run — your platforms, volume, refresh cadence, and delivery format. Use the calculator above for a directional estimate, then email us for an exact quote within 24 hours.",
  },
  {
    q: "Do you offer a trial or sample data?",
    a1: "Yes. Before any contract, we deliver a free sample dataset within 48–72 hours so you can verify the data quality, schema, and coverage match what you need.",
    a2: "If the sample isn't right, we either iterate until it is or we walk away — no obligation. We'd rather not start a partnership we can't deliver on.",
  },
  {
    q: "Are there any setup fees?",
    a1: "No setup fees, no onboarding fees, no \"professional services\" fees. The price you see in the calculator is the all-in monthly figure.",
    a2: "If your project needs unusual one-time work — say, a complex historical backfill — we'll quote that separately and clearly, never bundled or hidden.",
  },
  {
    q: "Can you match my current vendor's pricing?",
    a1: "Often, yes — and usually with better quality and broader coverage. Share what you're paying and what you're getting today, and we'll tell you honestly whether we can match or beat it.",
    a2: "If we can't, we'll tell you that too. We'd rather lose a deal than overpromise.",
  },
  {
    q: "What delivery formats do you support?",
    a1: "REST API · Webhook · S3 / GCS · SFTP · CSV via email · Parquet · JSON · NDJSON · Snowflake, BigQuery and Postgres direct write.",
    a2: "If you want it delivered somewhere we haven't listed, ask. We've built every kind of delivery integration over the years and a custom destination is almost always possible.",
  },
  {
    q: "What anti-bot systems can you bypass?",
    a1: "Cloudflare (including Turnstile), DataDome, PerimeterX, Akamai Bot Manager, Imperva, F5 Shape, plus all common CAPTCHA challenges and browser-fingerprint detection.",
    a2: "Bypass is included in every price — we don't charge extra for \"hard\" sites the way most vendors do.",
  },
  {
    q: "Is there a minimum contract length?",
    a1: "No long-term contracts and no annual lock-ins. Billing is month-to-month and you can cancel with 30 days' notice.",
    a2: "Our average client tenure is over two years, but we want you to stay because the data is good — not because the contract makes you.",
  },
  {
    q: "What's included in the monthly price?",
    a1: "Everything to run the pipeline: anti-bot bypass, residential and mobile proxies, headless infrastructure, 24/7 monitoring, alerting, selector-drift auto-adaptation, 50+ QA checks per dataset, and direct access to a dedicated account manager.",
    a2: "What isn't included: unusual one-time backfills, full historical archives, and bespoke ML/parsing work — those we quote separately.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="faq">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
            <button
              className="faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="faq-i">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-q-text">{f.q}</span>
              <span className="faq-toggle">+</span>
            </button>
            <div className="faq-a">
              <div>
                <div className="faq-a-inner">
                  <p>{f.a1}</p>
                  <p>{f.a2}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
