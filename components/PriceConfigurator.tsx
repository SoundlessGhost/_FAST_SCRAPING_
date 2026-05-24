"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";

const PLATFORMS = [
  { id: "easy", label: "Easy", lvl: "L1", mult: 1.0, hint: "Static HTML, no anti-bot" },
  { id: "medium", label: "Medium", lvl: "L2", mult: 1.6, hint: "JS-rendered, light bot detection" },
  { id: "hard", label: "Hard", lvl: "L3", mult: 2.4, hint: "Cloudflare / DataDome" },
  { id: "extreme", label: "Extreme", lvl: "L4", mult: 3.6, hint: "PerimeterX, Akamai, auth walls" },
];

const FREQUENCIES = [
  { id: "monthly", label: "Monthly", mult: 0.55, sla: "10 days" },
  { id: "weekly", label: "Weekly", mult: 1.0, sla: "2 days" },
  { id: "daily", label: "Daily", mult: 1.85, sla: "8 hours" },
  { id: "hourly", label: "Hourly", mult: 3.2, sla: "30 min" },
  { id: "realtime", label: "Real-time", mult: 5.4, sla: "< 1 min" },
];

const DELIVERIES = [
  { id: "api", label: "REST API", add: 350 },
  { id: "webhook", label: "Webhook", add: 250 },
  { id: "s3", label: "S3 / GCS", add: 150 },
  { id: "sftp", label: "SFTP", add: 150 },
  { id: "csv", label: "CSV / email", add: 0 },
];

function sliderToRecords(s: number) {
  const min = Math.log10(5_000);
  const max = Math.log10(5_000_000);
  const v = min + (max - min) * (s / 100);
  return Math.round(Math.pow(10, v));
}
function recordsLabel(n: number) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, "") + "K";
  return n.toString();
}
function money(n: number) {
  if (n >= 10_000) return "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  if (n >= 1_000) return "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return "$" + n.toLocaleString();
}

export default function PriceConfigurator() {
  const [platforms, setPlatforms] = useState<string[]>(["medium", "hard"]);
  const [volume, setVolume] = useState(45);
  const [frequency, setFrequency] = useState("daily");
  const [delivery, setDelivery] = useState("api");
  const [animKey, setAnimKey] = useState(0);

  function togglePlatform(id: string) {
    setPlatforms((cur) => {
      if (cur.includes(id)) {
        if (cur.length === 1) return cur;
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
    const volFactor = Math.pow(records / 50_000, 0.55);
    const base = 700;
    const platformsCost = 380 * platMult;
    const cadenceCost = 480 * freqMult * volFactor;
    const deliveryCost = DELIVERIES.find((d) => d.id === delivery)?.add ?? 0;

    const sub = base + platformsCost + cadenceCost + deliveryCost;
    const mid = Math.max(1200, Math.round(sub));
    const lo = Math.round(mid * 0.82);
    const hi = Math.round(mid * 1.22);
    const roundTo = (n: number, step: number) => Math.round(n / step) * step;

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
      },
    };
  }, [platforms, volume, frequency, delivery]);

  useEffect(() => {
    setAnimKey((k) => k + 1);
  }, [calc.lo, calc.hi]);

  const sliderPct = volume;
  const selectedFreq = FREQUENCIES.find((f) => f.id === frequency);
  const sliderStyle = { "--p": `${sliderPct}%` } as CSSProperties;

  return (
    <>
      <div className="calc-form">
        {/* 1 — Platforms */}
        <div className="calc-section">
          <div className="cs-head">
            <span className="cs-label">
              <span className="step-i">1</span>Platforms · complexity
            </span>
            <span className="cs-val">
              {platforms.length} <em>selected</em>
            </span>
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
            <span className="cs-label">
              <span className="step-i">2</span>Volume · records / day
            </span>
            <span className="cs-val">
              <em>{recordsLabel(calc.records)}</em>
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="cs-slider"
            style={sliderStyle}
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
            <span className="cs-label">
              <span className="step-i">3</span>Refresh frequency
            </span>
            <span className="cs-val">
              SLA · <em>{selectedFreq?.sla}</em>
            </span>
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
            <span className="cs-label">
              <span className="step-i">4</span>Delivery format
            </span>
            <span className="cs-val">
              {DELIVERIES.find((d) => d.id === delivery)?.label}
            </span>
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
            <span className="k">
              <span className="ic">·</span> Base operations
            </span>
            <span className="v">{money(calc.breakdown.base)}</span>
          </div>
          <div className="cs-row">
            <span className="k">
              <span className="ic">{platforms.length}×</span> Platforms (
              {platforms.map((id) => PLATFORMS.find((p) => p.id === id)?.lvl).join(", ")})
            </span>
            <span className="v">{money(calc.breakdown.platforms)}</span>
          </div>
          <div className="cs-row">
            <span className="k">
              <span className="ic">↻</span> {selectedFreq?.label} ·{" "}
              {recordsLabel(calc.records)} rec/day
            </span>
            <span className="v">{money(calc.breakdown.cadence)}</span>
          </div>
          <div className="cs-row">
            <span className="k">
              <span className="ic">→</span> Delivery via{" "}
              {DELIVERIES.find((d) => d.id === delivery)?.label}
            </span>
            <span className="v">
              {calc.breakdown.delivery === 0 ? "incl." : money(calc.breakdown.delivery)}
            </span>
          </div>
          <div className="cs-row">
            <span className="k">
              <span className="ic" style={{ color: "#6fd0a3" }}>
                ✓
              </span>{" "}
              Anti-bot bypass · monitoring · support
            </span>
            <span className="v delta">included</span>
          </div>
        </div>

        <div className="cs-foot">
          <div className="cs-cta">
            <a href="#contact" className="btn btn-primary">
              Get exact quote <span className="arrow">→</span>
            </a>
            <a href="mailto:khalid@fastscraping.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Email Khalid
            </a>
          </div>
          <div className="cs-fine">
            Indicative range. Final quote depends on the specific sites &amp; SLA.
          </div>
        </div>
      </div>
    </>
  );
}
