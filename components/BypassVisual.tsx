"use client";

const SHIELDS = [
  { name: "Cloudflare", angle: 0, color: "#f48120" },
  { name: "DataDome", angle: 72, color: "#ff4d6d" },
  { name: "PerimeterX", angle: 144, color: "#a560f7" },
  { name: "Akamai", color: "#3d8af7", angle: 216 },
  { name: "Turnstile", color: "#7ad19a", angle: 288 },
];

export default function BypassVisual() {
  return (
    <svg
      viewBox="0 0 480 460"
      width="100%"
      height="100%"
      style={{ display: "block" }}
    >
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

      <circle
        cx="240"
        cy="230"
        r="200"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle
        cx="240"
        cy="230"
        r="150"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      <circle
        cx="240"
        cy="230"
        r="100"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />

      <circle cx="240" cy="230" r="76" fill="url(#core)" />
      <circle
        cx="240"
        cy="230"
        r="44"
        fill="#0e1311"
        stroke="#0e5d44"
        strokeWidth="1.5"
      />
      <text
        x="240"
        y="227"
        textAnchor="middle"
        fontFamily="Instrument Serif, serif"
        fontSize="14"
        fontStyle="italic"
        fill="#eaf2ed"
      >
        Fast
      </text>
      <text
        x="240"
        y="245"
        textAnchor="middle"
        fontFamily="Geist Mono, monospace"
        fontSize="9"
        letterSpacing="0.1em"
        fill="#7ad19a"
      >
        SCRAPING
      </text>

      {SHIELDS.map((s, i) => {
        const rad = (s.angle * Math.PI) / 180;
        const r = 150;
        const round = (n: number) => Math.round(n * 100) / 100;
        const x = round(240 + r * Math.cos(rad));
        const y = round(230 + r * Math.sin(rad));
        return (
          <g key={s.name}>
            <line
              x1="240"
              y1="230"
              x2={x}
              y2={y}
              stroke="rgba(122,209,154,0.16)"
              strokeWidth="1"
              strokeDasharray="3 4"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-14"
                dur={`${2 + i * 0.2}s`}
                repeatCount="indefinite"
              />
            </line>
            <circle
              cx={x}
              cy={y}
              r="26"
              fill="#1a201d"
              stroke={s.color}
              strokeWidth="1.4"
              opacity="0.9"
            />
            <circle
              cx={x}
              cy={y}
              r="26"
              fill="none"
              stroke={s.color}
              strokeOpacity="0.4"
              strokeWidth="6"
            >
              <animate
                attributeName="r"
                from="26"
                to="38"
                dur={`${1.6 + i * 0.15}s`}
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur={`${1.6 + i * 0.15}s`}
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={x}
              y={y - 32}
              textAnchor="middle"
              fontFamily="Geist Mono, monospace"
              fontSize="9.5"
              letterSpacing="0.06em"
              fill="rgba(245,243,238,0.78)"
            >
              {s.name}
            </text>
            <path
              d={`M ${x - 7} ${y} L ${x - 1} ${y + 6} L ${x + 9} ${y - 6}`}
              fill="none"
              stroke="#7ad19a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        );
      })}

      {[0, 1, 2, 3].map((i) => (
        <circle key={i} r="3" fill="#7ad19a">
          <animateMotion
            dur={`${2.5 + i * 0.3}s`}
            repeatCount="indefinite"
            begin={`${i * 0.6}s`}
            path="M 240 230 L 50 230"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur={`${2.5 + i * 0.3}s`}
            begin={`${i * 0.6}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
