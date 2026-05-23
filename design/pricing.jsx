/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   PRICE CONFIGURATOR
   ============================================================ */

const PLATFORMS = [
  { id: "easy",     label: "Easy",     lvl: "L1", mult: 1.0,  hint: "Static HTML, no anti-bot" },
  { id: "medium",   label: "Medium",   lvl: "L2", mult: 1.6,  hint: "JS-rendered, light bot detection" },
  { id: "hard",     label: "Hard",     lvl: "L3", mult: 2.4,  hint: "Cloudflare / DataDome" },
  { id: "extreme",  label: "Extreme",  lvl: "L4", mult: 3.6,  hint: "PerimeterX, Akamai, auth walls" },
];

const FREQUENCIES = [
  { id: "monthly",  label: "Monthly",   mult: 0.55, sla: "10 days" },
  { id: "weekly",   label: "Weekly",    mult: 1.00, sla: "2 days"  },
  { id: "daily",    label: "Daily",     mult: 1.85, sla: "8 hours" },
  { id: "hourly",   label: "Hourly",    mult: 3.20, sla: "30 min"  },
  { id: "realtime", label: "Real-time", mult: 5.40, sla: "< 1 min" },
];

const DELIVERIES = [
  { id: "api",     label: "REST API",   add: 350 },
  { id: "webhook", label: "Webhook",    add: 250 },
  { id: "s3",      label: "S3 / GCS",   add: 150 },
  { id: "sftp",    label: "SFTP",       add: 150 },
  { id: "csv",     label: "CSV / email",add: 0   },
];

// Slider: 0..100 maps log-scale to records/day
function sliderToRecords(s) {
  // 0 → 5k, 100 → 5M
  const min = Math.log10(5_000);
  const max = Math.log10(5_000_000);
  const v = min + (max - min) * (s / 100);
  return Math.round(Math.pow(10, v));
}
function recordsLabel(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1).replace(/\.0$/, "") + "M";
  if (n >= 1_000)     return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, "") + "K";
  return n.toString();
}
function money(n) {
  if (n >= 10_000) return "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  if (n >= 1_000)  return "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return "$" + n.toLocaleString();
}

function PriceConfigurator() {
  const [platforms, setPlatforms] = useState(["medium", "hard"]);
  const [volume, setVolume] = useState(45);            // slider position
  const [frequency, setFrequency] = useState("daily");
  const [delivery, setDelivery] = useState("api");
  const [animKey, setAnimKey] = useState(0);

  function togglePlatform(id) {
    setPlatforms((cur) => {
      if (cur.includes(id)) {
        if (cur.length === 1) return cur; // keep at least 1
        return cur.filter((x) => x !== id);
      }
      return [...cur, id];
    });
  }

  const calc = useMemo(() => {
    const platMult = platforms.reduce((sum, id) => {
      const p = PLATFORMS.find((x) => x.id === id);
      return sum + (p ? p.mult : 0);
    }, 0);

    const freqMult = FREQUENCIES.find((f) => f.id === frequency)?.mult ?? 1;
    const records = sliderToRecords(volume);
    // volume factor scales sub-linearly (you don't pay 10x for 10x records)
    const volFactor = Math.pow(records / 50_000, 0.55);

    const base = 700;
    const platformsCost = 380 * platMult;
    const cadenceCost   = 480 * freqMult * volFactor;
    const deliveryCost  = DELIVERIES.find((d) => d.id === delivery)?.add ?? 0;

    const sub = base + platformsCost + cadenceCost + deliveryCost;
    // Clamp to a reasonable floor; produce ±20% range.
    const mid = Math.max(1200, Math.round(sub));
    const lo = Math.round(mid * 0.82);
    const hi = Math.round(mid * 1.22);

    // Round to nearest 100
    const roundTo = (n, step) => Math.round(n / step) * step;
    return {
      records,
      lo: roundTo(lo, 100),
      hi: roundTo(hi, 100),
      mid: roundTo(mid, 100),
      breakdown: {
        base: Math.round(base),
        platforms: Math.round(platformsCost),
        cadence: Math.round(cadenceCost),
        delivery: Math.round(deliveryCost),
      }
    };
  }, [platforms, volume, frequency, delivery]);

  useEffect(() => { setAnimKey((k) => k + 1); }, [calc.lo, calc.hi]);

  const sliderPct = volume; // 0–100
  const selectedFreq = FREQUENCIES.find((f) => f.id === frequency);

  return (
    <>
      {/* ----- Form (left) ----- */}
      <div className="calc-form">
        {/* 1 — Platforms */}
        <div className="calc-section">
          <div className="cs-head">
            <span className="cs-label"><span className="step-i">1</span>Platforms · complexity</span>
            <span className="cs-val">{platforms.length} <em>selected</em></span>
          </div>
          <div className="chip-row">
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                className={`chip-opt ${platforms.includes(p.id) ? "on" : ""}`}
                onClick={() => togglePlatform(p.id)}
                title={p.hint}
              >
                <span>{p.label}</span>
                <span className="lvl">{p.lvl}</span>
              </button>
            ))}
          </div>
          <div className="cs-axis" style={{ marginTop: 4 }}>
            <span>Static HTML</span>
            <span>Cloudflare</span>
            <span>PerimeterX · Akamai</span>
          </div>
        </div>

        {/* 2 — Volume */}
        <div className="calc-section">
          <div className="cs-head">
            <span className="cs-label"><span className="step-i">2</span>Volume · records / day</span>
            <span className="cs-val"><em>{recordsLabel(calc.records)}</em></span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="cs-slider"
            style={{ "--p": `${sliderPct}%` }}
          />
          <div className="cs-axis">
            <span>5K</span>
            <span>50K</span>
            <span>500K</span>
            <span>5M</span>
          </div>
        </div>

        {/* 3 — Frequency */}
        <div className="calc-section">
          <div className="cs-head">
            <span className="cs-label"><span className="step-i">3</span>Refresh frequency</span>
            <span className="cs-val">SLA · <em>{selectedFreq?.sla}</em></span>
          </div>
          <div className="chip-row">
            {FREQUENCIES.map((f) => (
              <button
                key={f.id}
                className={`chip-opt ${frequency === f.id ? "on" : ""}`}
                onClick={() => setFrequency(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 — Delivery */}
        <div className="calc-section">
          <div className="cs-head">
            <span className="cs-label"><span className="step-i">4</span>Delivery format</span>
            <span className="cs-val">{DELIVERIES.find((d) => d.id === delivery)?.label}</span>
          </div>
          <div className="chip-row">
            {DELIVERIES.map((d) => (
              <button
                key={d.id}
                className={`chip-opt ${delivery === d.id ? "on" : ""}`}
                onClick={() => setDelivery(d.id)}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----- Summary (right) ----- */}
      <div className="calc-summary">
        <div className="cs-head-r">
          <span className="cs-quote-tag">Estimated · monthly</span>
          <span className="cs-quote-live">Live</span>
        </div>

        <div className="cs-range" key={animKey}>
          {money(calc.lo)} <em>–</em> {money(calc.hi)}
        </div>
        <div className="cs-range-sub">
          ≈ {money(calc.mid)} per month · billed monthly · no setup fees
        </div>

        <div className="cs-breakdown">
          <div className="cs-row">
            <span className="k"><span className="ic">·</span> Base operations</span>
            <span className="v">{money(calc.breakdown.base)}</span>
          </div>
          <div className="cs-row">
            <span className="k"><span className="ic">{platforms.length}×</span> Platforms ({platforms.map(id => PLATFORMS.find(p => p.id === id)?.lvl).join(", ")})</span>
            <span className="v">{money(calc.breakdown.platforms)}</span>
          </div>
          <div className="cs-row">
            <span className="k"><span className="ic">↻</span> {selectedFreq?.label} · {recordsLabel(calc.records)} rec/day</span>
            <span className="v">{money(calc.breakdown.cadence)}</span>
          </div>
          <div className="cs-row">
            <span className="k"><span className="ic">→</span> Delivery via {DELIVERIES.find(d => d.id === delivery)?.label}</span>
            <span className="v">{calc.breakdown.delivery === 0 ? "incl." : money(calc.breakdown.delivery)}</span>
          </div>
          <div className="cs-row">
            <span className="k"><span className="ic" style={{color:"#6fd0a3"}}>✓</span> Anti-bot bypass · monitoring · support</span>
            <span className="v delta">included</span>
          </div>
        </div>

        <div className="cs-foot">
          <div className="cs-cta">
            <a href="#contact" className="btn btn-primary">Get exact quote <span className="arrow">→</span></a>
            <a href="mailto:khalid@fastscraping.com" className="btn btn-ghost">Email Khalid</a>
          </div>
          <div className="cs-fine">Indicative range. Final quote depends on the specific sites &amp; SLA.</div>
        </div>
      </div>
    </>
  );
}

const calcRoot = document.getElementById("calc-root");
if (calcRoot) ReactDOM.createRoot(calcRoot).render(<PriceConfigurator />);

/* ============================================================
   FAQ ACCORDION
   ============================================================ */

const FAQS = [
  {
    q: "How does Fastscraping pricing work?",
    a1: "We don't publish fixed tiers because every pipeline is different. A daily Cloudflare-defended ticketing scraper is a very different engineering job than a monthly job-board sync.",
    a2: "Instead we quote each engagement based on what it costs us to run — your platforms, volume, refresh cadence, and delivery format. Use the calculator above for a directional estimate, then email us for an exact quote within 24 hours."
  },
  {
    q: "Do you offer a trial or sample data?",
    a1: "Yes. Before any contract, we deliver a free sample dataset within 48–72 hours so you can verify the data quality, schema, and coverage match what you need.",
    a2: "If the sample isn't right, we either iterate until it is or we walk away — no obligation. We'd rather not start a partnership we can't deliver on."
  },
  {
    q: "Are there any setup fees?",
    a1: "No setup fees, no onboarding fees, no \"professional services\" fees. The price you see in the calculator is the all-in monthly figure.",
    a2: "If your project needs unusual one-time work — say, a complex historical backfill — we'll quote that separately and clearly, never bundled or hidden."
  },
  {
    q: "Can you match my current vendor's pricing?",
    a1: "Often, yes — and usually with better quality and broader coverage. Share what you're paying and what you're getting today, and we'll tell you honestly whether we can match or beat it.",
    a2: "If we can't, we'll tell you that too. We'd rather lose a deal than overpromise."
  },
  {
    q: "What delivery formats do you support?",
    a1: "REST API · Webhook · S3 / GCS · SFTP · CSV via email · Parquet · JSON · NDJSON · Snowflake, BigQuery and Postgres direct write.",
    a2: "If you want it delivered somewhere we haven't listed, ask. We've built every kind of delivery integration over the years and a custom destination is almost always possible."
  },
  {
    q: "What anti-bot systems can you bypass?",
    a1: "Cloudflare (including Turnstile), DataDome, PerimeterX, Akamai Bot Manager, Imperva, F5 Shape, plus all common CAPTCHA challenges and browser-fingerprint detection.",
    a2: "Bypass is included in every price — we don't charge extra for \"hard\" sites the way most vendors do."
  },
  {
    q: "Is there a minimum contract length?",
    a1: "No long-term contracts and no annual lock-ins. Billing is month-to-month and you can cancel with 30 days' notice.",
    a2: "Our average client tenure is over two years, but we want you to stay because the data is good — not because the contract makes you."
  },
  {
    q: "What's included in the monthly price?",
    a1: "Everything to run the pipeline: anti-bot bypass, residential and mobile proxies, headless infrastructure, 24/7 monitoring, alerting, selector-drift auto-adaptation, 50+ QA checks per dataset, and direct access to a dedicated account manager.",
    a2: "What isn't included: unusual one-time backfills, full historical archives, and bespoke ML/parsing work — those we quote separately."
  },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
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

const faqRoot = document.getElementById("faq-root");
if (faqRoot) ReactDOM.createRoot(faqRoot).render(<Faq />);

/* ============================================================
   TWEAKS
   ============================================================ */
const { TweaksPanel, useTweaks, TweakSection, TweakSelect } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "emerald"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => {
    document.documentElement.setAttribute("data-accent", t.accent);
  }, [t]);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakSelect
          label="Accent color"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={[
            { value: "emerald", label: "Emerald (default)" },
            { value: "indigo",  label: "Indigo"  },
            { value: "rust",    label: "Rust"    },
            { value: "slate",   label: "Slate"   },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const tweaksRoot = document.getElementById("tweaks-root");
if (tweaksRoot) ReactDOM.createRoot(tweaksRoot).render(<TweaksApp />);
