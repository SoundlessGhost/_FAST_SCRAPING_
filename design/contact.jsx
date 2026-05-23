/* global React, ReactDOM */
const { useState, useEffect, useMemo } = React;

/* ============================================================
   LETTER FORM
   ============================================================ */

const VOLUME_CHIPS = [
  { v: "small",  l: "Under 100K records / day",   mk: "S" },
  { v: "medium", l: "100K – 1M records / day",    mk: "M" },
  { v: "large",  l: "1M – 10M records / day",     mk: "L" },
  { v: "huge",   l: "10M+ records / day",         mk: "XL" },
  { v: "unsure", l: "Not sure yet",               mk: "?" },
];

const CADENCE_OPTS = ["Real-time", "Hourly", "Daily", "Weekly", "Monthly", "One-time"];
const DELIVERY_OPTS = ["REST API", "Webhook", "S3 / GCS", "SFTP", "Snowflake", "CSV"];

function LetterForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [cadence, setCadence] = useState("Daily");
  const [delivery, setDelivery] = useState("REST API");
  const [volume, setVolume] = useState("medium");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const charCount = message.length;
  const maxChars = 1200;

  const canSubmit = name.trim() && email.trim() && message.trim().length >= 20;

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="lt-sent">
        <div className="lt-sent-mark">✓</div>
        <h3>Note received.</h3>
        <p>
          Khalid will read this personally and reply within 24 hours.
          If you don't see a reply, check spam — sometimes Cloudflare gets us too.
        </p>
        <div className="lt-summary">
          <div><b>From:</b> {name || "—"}{company ? ` · ${company}` : ""}</div>
          <div><b>Reply to:</b> {email || "—"}</div>
          <div><b>Cadence:</b> {cadence} · <b>Delivery:</b> {delivery}</div>
          <div><b>Volume:</b> {VOLUME_CHIPS.find(c => c.v === volume)?.l}</div>
          <div><b>Message:</b> {message.slice(0, 80)}{message.length > 80 ? "…" : ""}</div>
        </div>
        <button className="btn btn-ghost" onClick={() => { setSent(false); setMessage(""); }}>
          Write another
        </button>
      </div>
    );
  }

  return (
    <form className="lt-form" onSubmit={handleSubmit}>
      <p className="lt-greet">
        Hi Khalid, <em>I'd like to talk to you.</em>
      </p>

      {/* About me */}
      <div className="lt-field">
        <div className="lt-field-h"><span>About me</span><span className="opt">required</span></div>
        <div className="lt-row">
          <span>My name is</span>
          <input
            type="text"
            placeholder="(your name)"
            className="short"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span>at</span>
          <input
            type="text"
            placeholder="(company)"
            className="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <span>.</span>
        </div>
        <div className="lt-row">
          <span>You can reach me at</span>
          <input
            type="email"
            placeholder="(your email)"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>.</span>
        </div>
      </div>

      {/* Project shape */}
      <div className="lt-field">
        <div className="lt-field-h"><span>Project shape</span><span className="opt">rough is fine</span></div>
        <div className="lt-row">
          <span>I need data delivered</span>
          <select value={cadence} onChange={(e) => setCadence(e.target.value)}>
            {CADENCE_OPTS.map((c) => <option key={c}>{c}</option>)}
          </select>
          <span>via</span>
          <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
            {DELIVERY_OPTS.map((d) => <option key={d}>{d}</option>)}
          </select>
          <span>.</span>
        </div>
      </div>

      {/* Volume chips */}
      <div className="lt-field">
        <div className="lt-field-h"><span>Expected volume</span></div>
        <div className="lt-chips">
          {VOLUME_CHIPS.map((c) => (
            <button
              type="button"
              key={c.v}
              className={`lt-chip ${volume === c.v ? "on" : ""}`}
              onClick={() => setVolume(c.v)}
            >
              <span className="lt-chip-mark">{c.mk}</span>
              <span>{c.l}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="lt-field">
        <div className="lt-field-h">
          <span>The project</span>
          <span className="opt">{charCount} / {maxChars}</span>
        </div>
        <div className="lt-area-wrap">
          <textarea
            className="lt-area"
            placeholder="Which websites? Which fields? Any deadlines, NDA, or vendor you'd like us to match? The more specific, the faster we can quote."
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
            maxLength={maxChars}
            required
          />
        </div>
      </div>

      <div className="lt-foot">
        <div className="lt-sig">
          <div className="lt-sig-mark">↵</div>
          <div className="lt-sig-text">
            <span className="lt-sig-name">Encrypted in transit · we never share your brief</span>
            <span className="lt-sig-role">Reply within 24 hours · usually faster</span>
          </div>
        </div>
        <div className="lt-submit">
          <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
            Send note <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </form>
  );
}

const formRoot = document.getElementById("form-root");
if (formRoot) ReactDOM.createRoot(formRoot).render(<LetterForm />);

/* ============================================================
   TIMEZONE CLOCKS (no React, just DOM ticking)
   ============================================================ */

const TZ_OFFSETS = { us: -7, ny: -4, uk: 1, bd: 6 }; // simplified, ignoring DST

function pad(n) { return n.toString().padStart(2, "0"); }
function fmtTime(d) { return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; }

function tick() {
  const now = new Date();
  const utcH = now.getUTCHours() + now.getUTCMinutes() / 60;
  for (const tz in TZ_OFFSETS) {
    const offset = TZ_OFFSETS[tz];
    const local = new Date(now.getTime() + offset * 3600 * 1000);
    const el = document.querySelector(`[data-clock="${tz}"]`);
    if (el) el.textContent = fmtTime(local);
    // state
    const localH = (utcH + offset + 48) % 24;
    const stateEl = document.querySelector(`[data-state="${tz}"]`);
    if (stateEl) {
      let label = "off hours";
      let cls = "";
      if (localH >= 9 && localH < 18) { label = "working"; cls = "is-working"; }
      else if (localH >= 6 && localH < 22) { label = "overlap"; cls = "is-overlap"; }
      stateEl.textContent = label;
      stateEl.className = `tz-state ${cls}`;
    }
  }
  // GMT+6 now marker on the band
  const bdH = (utcH + 6 + 48) % 24;
  const now$ = document.getElementById("tz-now");
  if (now$) now$.style.left = `${(bdH / 24) * 100}%`;
}

tick();
setInterval(tick, 30000);

// set today's date
const dateEl = document.getElementById("lt-date");
if (dateEl) {
  const d = new Date();
  dateEl.textContent = `${pad(d.getDate())} · ${pad(d.getMonth() + 1)} · ${d.getFullYear()}`;
}

/* ============================================================
   TWEAKS
   ============================================================ */

const { TweaksPanel, useTweaks, TweakSection, TweakSelect } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "emerald"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useEffect(() => { document.documentElement.setAttribute("data-accent", t.accent); }, [t]);
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
