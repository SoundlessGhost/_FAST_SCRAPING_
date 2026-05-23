"use client";

import { useEffect, useState } from "react";

const TZ_OFFSETS: Record<string, number> = { us: -7, ny: -4, uk: 1, bd: 6 };
const TZ_LABELS: Record<string, string> = {
  us: "San Francisco",
  ny: "New York",
  uk: "London",
  bd: "Dhaka · us",
};

const pad = (n: number) => n.toString().padStart(2, "0");
const fmtTime = (d: Date) => `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;

type Snap = { time: string; state: "working" | "overlap" | "off"; label: string };

function computeSnap(tz: string, now: Date): Snap {
  const offset = TZ_OFFSETS[tz];
  const local = new Date(now.getTime() + offset * 3600 * 1000);
  const time = fmtTime(local);
  const utcH = now.getUTCHours() + now.getUTCMinutes() / 60;
  const localH = (utcH + offset + 48) % 24;
  let state: Snap["state"] = "off";
  let label = "off hours";
  if (localH >= 9 && localH < 18) {
    state = "working";
    label = "working";
  } else if (localH >= 6 && localH < 22) {
    state = "overlap";
    label = "overlap";
  }
  return { time, state, label };
}

export default function TimezoneClocks() {
  const [snaps, setSnaps] = useState<Record<string, Snap>>(() => {
    const init: Record<string, Snap> = {};
    Object.keys(TZ_OFFSETS).forEach((tz) => {
      init[tz] = { time: "—", state: "off", label: "—" };
    });
    return init;
  });
  const [bdLeftPct, setBdLeftPct] = useState(0);

  useEffect(() => {
    function tick() {
      const now = new Date();
      const next: Record<string, Snap> = {};
      Object.keys(TZ_OFFSETS).forEach((tz) => {
        next[tz] = computeSnap(tz, now);
      });
      setSnaps(next);
      const utcH = now.getUTCHours() + now.getUTCMinutes() / 60;
      const bdH = (utcH + 6 + 48) % 24;
      setBdLeftPct((bdH / 24) * 100);
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="tz-clock-row" id="tz-clocks">
        {(["us", "ny", "uk", "bd"] as const).map((tz) => {
          const snap = snaps[tz];
          const cls =
            snap.state === "working"
              ? "is-working"
              : snap.state === "overlap"
                ? "is-overlap"
                : "";
          return (
            <div
              className={`tz-clock${tz === "bd" ? " tz-clock--us" : ""}`}
              data-tz={tz}
              key={tz}
            >
              <div className="tz-name">{TZ_LABELS[tz]}</div>
              <div className="tz-time">
                <span>{snap.time}</span>
              </div>
              <div className={`tz-state ${cls}`}>— {snap.label}</div>
            </div>
          );
        })}
      </div>
      <div className="tz-band">
        <div className="tz-band-bar">
          <span className="tz-band-fill"></span>
          <span
            className="tz-band-now"
            id="tz-now"
            style={{ left: `${bdLeftPct}%` }}
          ></span>
        </div>
        <div className="tz-band-axis">
          <span>00</span>
          <span>06</span>
          <span>12</span>
          <span>18</span>
          <span>24</span>
        </div>
        <div className="tz-band-legend">
          <span>
            <i className="tz-i-on"></i> Working hours · GMT+6
          </span>
          <span>
            <i className="tz-i-now"></i> Now
          </span>
        </div>
      </div>
    </>
  );
}
