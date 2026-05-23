/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

/* ---------- Animated counter ---------- */
function AnimatedNumber({ to, format = (n) => n.toLocaleString(), duration = 1400, suffix = "", className = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref} className={className}>{format(val)}{suffix}</span>;
}

/* ---------- Live records ticker ---------- */
function LiveTicker({ start = 24_318_240, perSecond = 280 }) {
  const [n, setN] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => v + Math.floor(perSecond / 4) + Math.floor(Math.random() * 20));
    }, 250);
    return () => clearInterval(id);
  }, [perSecond]);
  return <span style={{ fontVariantNumeric: "tabular-nums" }}>{n.toLocaleString()}</span>;
}

/* ---------- Live console stream ---------- */
const PLATFORMS = [
  { name: "StubHub",     color: "#7e2e8a", abbr: "S",  cat: "ticketing" },
  { name: "Indeed",      color: "#2557a7", abbr: "I",  cat: "jobs" },
  { name: "LinkedIn",    color: "#0a66c2", abbr: "in", cat: "b2b" },
  { name: "DoorDash",    color: "#ef2a39", abbr: "D",  cat: "delivery" },
  { name: "SeatGeek",    color: "#ff5b49", abbr: "Sg", cat: "ticketing" },
  { name: "ImmoScout24", color: "#e3000f", abbr: "Im", cat: "realestate" },
  { name: "Starbucks",   color: "#006241", abbr: "Sb", cat: "restaurant" },
  { name: "Amazon",      color: "#ff9900", abbr: "Az", cat: "ecom" },
  { name: "Walmart",     color: "#0071ce", abbr: "W",  cat: "ecom" },
  { name: "McDonald's",  color: "#ffbc0d", abbr: "Mc", cat: "restaurant" },
  { name: "Glassdoor",   color: "#0caa41", abbr: "Gd", cat: "jobs" },
];
const ACTIONS = [
  { txt: "200 records",  status: "ok",   tone: "ok"  },
  { txt: "TLS handshake", status: "ok",  tone: "ok"  },
  { txt: "Captcha bypass", status: "ok", tone: "ok"  },
  { txt: "DataDome OK",  status: "ok",   tone: "ok"  },
  { txt: "Page 47 / 250", status: "ok",  tone: "ok"  },
  { txt: "Proxy rotated", status: "ok",  tone: "warn"},
  { txt: "Cloudflare passed", status: "ok", tone: "ok" },
  { txt: "Akamai bypass", status: "ok",  tone: "ok"  },
  { txt: "Stream → S3",  status: "ok",   tone: "ok"  },
];

function pad2(n){ return n.toString().padStart(2, "0"); }
function fmtT() {
  const d = new Date();
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
}

function LiveConsole() {
  const [rows, setRows] = useState(() => {
    return Array.from({ length: 7 }).map((_, i) => mkRow(i));
  });
  const seedRef = useRef(7);

  function mkRow(seed) {
    const p = PLATFORMS[(seed * 3 + 1) % PLATFORMS.length];
    const a = ACTIONS[(seed * 5 + 2) % ACTIONS.length];
    return { id: seed, t: fmtT(), p, a, fresh: false };
  }

  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) => {
        seedRef.current += 1;
        const next = mkRow(seedRef.current);
        next.fresh = true;
        return [next, ...prev.slice(0, 6)].map((r, i) => ({ ...r, fresh: i === 0 }));
      });
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="console">
      <div className="console-bar">
        <div className="dots"><i></i><i></i><i></i></div>
        <span className="console-title">fastscraping <b>~ pipeline.live</b></span>
        <div className="right">
          <span className="live-dot"></span>
          <span>LIVE</span>
        </div>
      </div>
      <div className="console-body">
        <div className="console-meta">
          <div className="cell">
            <div className="k">Records today</div>
            <div className="v"><LiveTicker /></div>
          </div>
          <div className="cell">
            <div className="k">Bypass success</div>
            <div className="v green">99.7%</div>
          </div>
          <div className="cell">
            <div className="k">Active pipelines</div>
            <div className="v">42</div>
          </div>
        </div>
        <div className="console-stream">
          {rows.map((r) => (
            <div className={`row ${r.fresh ? "new" : ""}`} key={r.id}>
              <span className="t">{r.t}</span>
              <span className="platform">
                <span className="logo" style={{ background: r.p.color }}>{r.p.abbr}</span>
                <span>{r.p.name}</span>
                <span style={{ color: "#6f7672", marginLeft: 6, fontSize: 11 }}>· {r.a.txt}</span>
              </span>
              <span className={`status ${r.a.tone === "warn" ? "warn" : ""}`}>
                <span className="dot"></span>
                {r.a.tone === "warn" ? "rotated" : "200 OK"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="console-footer">
        <span className="stat">→ <b>Cloudflare</b> · <b>DataDome</b> · <b>PerimeterX</b> · <b>Akamai</b></span>
        <span className="stat"><b>SFTP</b> · <b>S3</b> · <b>API</b> · <b>Webhook</b></span>
      </div>
    </div>
  );
}

/* ---------- Bypass orbit visual ---------- */
function BypassVisual() {
  const SHIELDS = [
    { name: "Cloudflare",  angle: 0,    color: "#f48120" },
    { name: "DataDome",    angle: 72,   color: "#ff4d6d" },
    { name: "PerimeterX",  angle: 144,  color: "#a560f7" },
    { name: "Akamai",      color: "#3d8af7", angle: 216 },
    { name: "Turnstile",   color: "#7ad19a", angle: 288 },
  ];
  return (
    <svg viewBox="0 0 480 460" width="100%" height="100%" style={{ display: "block" }}>
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0e5d44" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0e5d44" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0e5d44" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>
      </defs>

      {/* outer rings */}
      <circle cx="240" cy="230" r="200" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="2 6"/>
      <circle cx="240" cy="230" r="150" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="240" cy="230" r="100" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* core */}
      <circle cx="240" cy="230" r="76" fill="url(#core)"/>
      <circle cx="240" cy="230" r="44" fill="#0e1311" stroke="#0e5d44" strokeWidth="1.5"/>
      <text x="240" y="227" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="14" fontStyle="italic" fill="#eaf2ed">Fast</text>
      <text x="240" y="245" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="9" letterSpacing="0.1em" fill="#7ad19a">SCRAPING</text>

      {/* shields orbiting */}
      {SHIELDS.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const r = 150;
        const x = 240 + r * Math.cos(rad);
        const y = 230 + r * Math.sin(rad);
        return (
          <g key={s.name} style={{ transformOrigin: `${x}px ${y}px` }}>
            {/* line */}
            <line x1="240" y1="230" x2={x} y2={y} stroke="rgba(122,209,154,0.16)" strokeWidth="1" strokeDasharray="3 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-14" dur={`${2 + i * 0.2}s`} repeatCount="indefinite"/>
            </line>
            {/* shield ring */}
            <circle cx={x} cy={y} r="26" fill="#1a201d" stroke={s.color} strokeWidth="1.4" opacity="0.9"/>
            <circle cx={x} cy={y} r="26" fill="none" stroke={s.color} strokeOpacity="0.4" strokeWidth="6">
              <animate attributeName="r" from="26" to="38" dur={`${1.6 + i * 0.15}s`} begin={`${i * 0.25}s`} repeatCount="indefinite"/>
              <animate attributeName="opacity" from="0.5" to="0" dur={`${1.6 + i * 0.15}s`} begin={`${i * 0.25}s`} repeatCount="indefinite"/>
            </circle>
            <text x={x} y={y - 32} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="9.5" letterSpacing="0.06em" fill="rgba(245,243,238,0.78)">{s.name}</text>
            {/* check */}
            <path d={`M ${x - 7} ${y} L ${x - 1} ${y + 6} L ${x + 9} ${y - 6}`} fill="none" stroke="#7ad19a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        );
      })}

      {/* data droplets */}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} r="3" fill="#7ad19a">
          <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} path="M 240 230 L 50 230" />
          <animate attributeName="opacity" from="1" to="0" dur={`${2.5 + i * 0.3}s`} begin={`${i * 0.6}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  );
}

/* ---------- Mount points ---------- */
const consoleRoot = document.getElementById("live-console");
if (consoleRoot) ReactDOM.createRoot(consoleRoot).render(<LiveConsole />);

const bypassRoot = document.getElementById("bypass-visual");
if (bypassRoot) ReactDOM.createRoot(bypassRoot).render(<BypassVisual />);

document.querySelectorAll("[data-num]").forEach((el) => {
  const to = Number(el.dataset.num);
  const suffix = el.dataset.suffix || "";
  const decimals = Number(el.dataset.decimals || 0);
  const format = (n) => {
    if (decimals > 0) return (n / Math.pow(10, decimals)).toFixed(decimals);
    return n.toLocaleString();
  };
  ReactDOM.createRoot(el).render(<AnimatedNumber to={to} suffix={suffix} format={format} />);
});

/* ---------- Tweaks ---------- */
const { TweaksPanel, useTweaks, TweakSection, TweakSelect, TweakToggle } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "emerald",
  "showLive": true,
  "density": "comfortable"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", t.accent);
    document.documentElement.setAttribute("data-density", t.density);
    document.documentElement.classList.toggle("hide-live", !t.showLive);
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
      <TweakSection title="Hero">
        <TweakToggle
          value={t.showLive}
          onChange={(v) => setTweak("showLive", v)}
          label="Live pipeline panel"
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const tweaksRoot = document.getElementById("tweaks-root");
if (tweaksRoot) ReactDOM.createRoot(tweaksRoot).render(<TweaksApp />);
