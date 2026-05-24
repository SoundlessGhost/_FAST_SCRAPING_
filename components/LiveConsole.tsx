"use client";

import { useEffect, useRef, useState } from "react";
import LiveTicker from "./LiveTicker";

const PLATFORMS = [
  { name: "StubHub", color: "#7e2e8a", abbr: "S", cat: "ticketing" },
  { name: "Indeed", color: "#2557a7", abbr: "I", cat: "jobs" },
  { name: "LinkedIn", color: "#0a66c2", abbr: "in", cat: "b2b" },
  { name: "DoorDash", color: "#ef2a39", abbr: "D", cat: "delivery" },
  { name: "SeatGeek", color: "#ff5b49", abbr: "Sg", cat: "ticketing" },
  { name: "ImmoScout24", color: "#e3000f", abbr: "Im", cat: "realestate" },
  { name: "Starbucks", color: "#006241", abbr: "Sb", cat: "restaurant" },
  { name: "Amazon", color: "#ff9900", abbr: "Az", cat: "ecom" },
  { name: "Walmart", color: "#0071ce", abbr: "W", cat: "ecom" },
  { name: "McDonald's", color: "#ffbc0d", abbr: "Mc", cat: "restaurant" },
  { name: "Glassdoor", color: "#0caa41", abbr: "Gd", cat: "jobs" },
];

const ACTIONS = [
  { txt: "200 records", status: "ok", tone: "ok" },
  { txt: "TLS handshake", status: "ok", tone: "ok" },
  { txt: "Captcha bypass", status: "ok", tone: "ok" },
  { txt: "DataDome OK", status: "ok", tone: "ok" },
  { txt: "Page 47 / 250", status: "ok", tone: "ok" },
  { txt: "Proxy rotated", status: "ok", tone: "warn" },
  { txt: "Cloudflare passed", status: "ok", tone: "ok" },
  { txt: "Akamai bypass", status: "ok", tone: "ok" },
  { txt: "Stream → S3", status: "ok", tone: "ok" },
];

const pad2 = (n: number) => n.toString().padStart(2, "0");
const fmtT = () => {
  const d = new Date();
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
};

type Row = {
  id: number;
  t: string;
  p: (typeof PLATFORMS)[number];
  a: (typeof ACTIONS)[number];
  fresh: boolean;
};

const mkRow = (seed: number): Row => {
  const p = PLATFORMS[(seed * 3 + 1) % PLATFORMS.length];
  const a = ACTIONS[(seed * 5 + 2) % ACTIONS.length];
  return { id: seed, t: fmtT(), p, a, fresh: false };
};

export default function LiveConsole() {
  const [rows, setRows] = useState<Row[]>([]);
  const seedRef = useRef(7);

  useEffect(() => {
    setRows(Array.from({ length: 7 }).map((_, i) => mkRow(i)));
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
        <div className="dots">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <span className="console-title">
          fastscraping <b>~ pipeline.live</b>
        </span>
        <div className="right">
          <span className="live-dot"></span>
          <span>LIVE</span>
        </div>
      </div>
      <div className="console-body">
        <div className="console-meta">
          <div className="cell">
            <div className="k">Records today</div>
            <div className="v">
              <LiveTicker />
            </div>
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
                <span className="logo" style={{ background: r.p.color }}>
                  {r.p.abbr}
                </span>
                <span>{r.p.name}</span>
                <span style={{ color: "#6f7672", marginLeft: 6, fontSize: 11 }}>
                  · {r.a.txt}
                </span>
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
        <span className="stat">
          → <b>Cloudflare</b> · <b>DataDome</b> · <b>PerimeterX</b> · <b>Akamai</b>
        </span>
        <span className="stat">
          <b>SFTP</b> · <b>S3</b> · <b>API</b> · <b>Webhook</b>
        </span>
      </div>
    </div>
  );
}
