"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { REGION_ORDER, regionName } from "@/lib/regions";

// Chart palette tuned to match the design (green / gold / blue / coral …).
const DASH_COLORS: Record<string, string> = {
  id: "#0e5d44",
  my: "#c79b3a",
  th: "#2f6f9e",
  vn: "#d65730",
  ph: "#7e2e8a",
  sg: "#1d9e75",
  tw: "#0f6e56",
  br: "#b5532a",
  mx: "#9a7d2e",
};
const colorOf = (c: string) => DASH_COLORS[c] ?? "#888780";

const nf = new Intl.NumberFormat("en-US");
const INTERVALS = [
  { l: "24h", v: 1 },
  { l: "3d", v: 3 },
  { l: "7d", v: 7 },
  { l: "30d", v: 30 },
];
const POLL_MS = 45000;

type Period = { all: number } & Record<string, number>;
type DailyRow = { date: string } & Record<string, number>;
type UsageData = {
  owner: string;
  jobs: { total: number; completed: number; failed: number; pending: number };
  interval_days: number;
  totals: Record<string, Period>;
  daily: DailyRow[];
  monthly_breakdown?: Record<string, Record<string, number | Period> | null>;
};

type DayResult = { status: "data" | "zero" | "none"; period?: Period };

function dayLookup(data: UsageData, date: string): DayResult {
  const row = data.daily.find((d) => d.date === date);
  if (row) {
    if ((row.all ?? 0) === 0) return { status: "zero" };
    const { date: _omit, ...rest } = row;
    void _omit;
    return { status: "data", period: rest as Period };
  }
  const ym = date.slice(0, 7);
  const day = String(parseInt(date.slice(8, 10), 10));
  const mb = data.monthly_breakdown?.[ym];
  if (mb && typeof mb === "object") {
    const cell = (mb as Record<string, number | Period>)[day];
    if (cell === undefined) return { status: "none" };
    if (typeof cell === "number") {
      return cell === 0 ? { status: "zero" } : { status: "data", period: { all: cell } as Period };
    }
    if (cell && typeof cell === "object") return { status: "data", period: cell as Period };
  }
  return { status: "none" };
}

function niceTop(max: number): number {
  if (!isFinite(max) || max <= 0) return 4;
  const pow = Math.pow(10, Math.floor(Math.log10(max)));
  const n = max / pow;
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return nice * pow;
}
function fmtAxis(v: number): string {
  if (v === 0) return "0";
  if (v >= 1000) return `${Math.round(v / 100) / 10}k`;
  return String(Math.round(v));
}
function shortDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

export default function UsageDashboard() {
  const [data, setData] = useState<UsageData | null>(null);
  const [interval, setIntervalDays] = useState(7);
  const [region, setRegion] = useState("all");
  const [lastSync, setLastSync] = useState("—");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [pickDate, setPickDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [tip, setTip] = useState<{ x: number; y: number; row: DailyRow } | null>(null);

  const load = useCallback(async (iv: number) => {
    try {
      const r = await fetch(`/api/usage?interval=${iv}`, { cache: "no-store" });
      if (r.status === 401) {
        window.location.href = "/dashboard/login";
        return;
      }
      const d = (await r.json().catch(() => ({}))) as UsageData & { ok?: boolean };
      if (r.ok && d.ok !== false) {
        setData(d);
        const now = new Date();
        const p = (n: number) => String(n).padStart(2, "0");
        setLastSync(`${p(now.getUTCHours())}:${p(now.getUTCMinutes())} UTC`);
      }
    } catch {
      /* keep last good data */
    }
  }, []);

  useEffect(() => {
    load(interval);
  }, [interval, load]);
  useEffect(() => {
    const id = setInterval(() => load(interval), POLL_MS);
    return () => clearInterval(id);
  }, [interval, load]);

  const active = useMemo(() => {
    if (!data) return [] as string[];
    const s = new Set<string>();
    data.daily.forEach((row) =>
      Object.keys(row).forEach((k) => k !== "date" && k !== "all" && s.add(k)),
    );
    Object.values(data.totals).forEach((p) =>
      Object.keys(p).forEach((k) => k !== "all" && s.add(k)),
    );
    return [
      ...REGION_ORDER.filter((c) => s.has(c)),
      ...[...s].filter((c) => !REGION_ORDER.includes(c)),
    ];
  }, [data]);

  const shown = region === "all" ? active : [region];
  const t = data?.totals;
  const jobs = data?.jobs;
  const total7 = t?.last_7_days?.all ?? 0;
  const successPct =
    jobs && jobs.total > 0 ? Math.round((jobs.completed / jobs.total) * 1000) / 10 : 0;

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    window.location.href = "/dashboard/login";
  }

  // ---- chart geometry ----
  const days = data?.daily ?? [];
  const VBW = 960,
    VBH = 300,
    PADL = 42,
    PADR = 12,
    PADT = 14,
    PADB = 28;
  const plotW = VBW - PADL - PADR;
  const plotH = VBH - PADT - PADB;
  const colW = days.length ? plotW / days.length : plotW;
  const barW = Math.min(36, colW * 0.46);
  const maxVal = Math.max(
    0,
    ...days.map((d) => shown.reduce((sum, c) => sum + (d[c] ?? 0), 0)),
  );
  const top = niceTop(maxVal);
  const yOf = (v: number) => PADT + plotH * (1 - v / top);
  const grid = [0, 0.25, 0.5, 0.75, 1].map((f) => ({ v: top * f, y: yOf(top * f) }));
  // thin out x-axis labels so 30-day ranges don't collide
  const lblStep = Math.max(1, Math.ceil((days.length || 1) / 9));

  // ---- day breakdown ----
  const dayRes = data ? dayLookup(data, pickDate) : null;
  const dayTotal = dayRes ? (dayRes.status === "zero" ? 0 : dayRes.period?.all ?? 0) : 0;
  const dayChips =
    dayRes?.status === "data"
      ? Object.entries(dayRes.period ?? {})
          .filter(([k]) => k !== "all")
          .sort((a, b) => (b[1] as number) - (a[1] as number))
      : [];

  // ---- top regions ----
  const rangePeriod =
    t?.[`last_${interval}_days`] ?? t?.last_30_days ?? t?.lifetime;
  const regionRows = active
    .map((c) => ({ c, v: rangePeriod?.[c] ?? 0 }))
    .filter((r) => r.v > 0)
    .sort((a, b) => b.v - a.v);
  const regionMax = Math.max(1, ...regionRows.map((r) => r.v));

  return (
    <div className="dash-body">
      {/* TOP BAR */}
      <header className="dash-topbar">
        <div className="dash-wrap dash-topbar-inner">
          <div className="dash-brandside">
            <Link href="/" className="brand">
              <span className="brand-mark">f</span>
              <span>Fastscraping</span>
            </Link>
            <span className="dash-crumb">
              Shopee API · <b>usage</b>
            </span>
          </div>
          <div className="dash-topbar-right">
            <span className="dash-admin">
              <span className="dash-admin-dot" />
              {data?.owner ?? "…"}
            </span>
            <button type="button" className="btn btn-ghost dash-logout" onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      </header>

      {/* APP */}
      <main className="dash-wrap">
        <div className="dash-head">
          <div>
            <h1 className="dash-title">
              Shopee usage <em>overview</em>
            </h1>
            <div className="dash-meta">
              owner · <b>{data?.owner ?? "—"}</b> · all times UTC · last sync{" "}
              <b>{lastSync}</b>
            </div>
          </div>
          <div className="dash-controls">
            <div className="dash-seg" role="group" aria-label="Time range">
              {INTERVALS.map((it) => (
                <button
                  key={it.v}
                  type="button"
                  className={interval === it.v ? "on" : ""}
                  onClick={() => setIntervalDays(it.v)}
                >
                  {it.l}
                </button>
              ))}
            </div>
            <select
              className="dash-region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              aria-label="Region filter"
            >
              <option value="all">All regions</option>
              {active.map((c) => (
                <option key={c} value={c}>
                  {regionName(c)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* STAT STRIP */}
        <div className="dash-stats">
          <div className="dash-stat">
            <div className="dash-stat-k">Today</div>
            <div className="dash-stat-v">{nf.format(t?.today?.all ?? 0)}</div>
            <div className="dash-stat-s">requests so far · UTC</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-k">Last 7 days</div>
            <div className="dash-stat-v">{nf.format(total7)}</div>
            <div className="dash-stat-s">avg {nf.format(Math.round(total7 / 7))} / day</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-k">This month</div>
            <div className="dash-stat-v">{nf.format(t?.this_month?.all ?? 0)}</div>
            <div className="dash-stat-s">rolling 30 days</div>
          </div>
          <div className="dash-stat dash-stat--dark">
            <div className="dash-stat-k">Lifetime</div>
            <div className="dash-stat-v">{nf.format(t?.lifetime?.all ?? 0)}</div>
            <div className="dash-stat-s">since first request</div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="dash-grid">
          {/* chart */}
          <div className="dash-card">
            <div className="dash-card-h">
              <div className="dash-card-t">
                Traffic overview <small>requests / day · stacked by region</small>
              </div>
              <div className="dash-legend">
                {shown.map((c) => (
                  <span key={c}>
                    <i style={{ background: colorOf(c) }} />
                    {regionName(c)}
                  </span>
                ))}
              </div>
            </div>
            <div className="dash-chart">
              <svg viewBox={`0 0 ${VBW} ${VBH}`} preserveAspectRatio="none" onMouseLeave={() => setTip(null)}>
                {grid.map((g, i) => (
                  <g key={i}>
                    <line
                      x1={PADL}
                      x2={VBW - PADR}
                      y1={g.y}
                      y2={g.y}
                      stroke="rgba(19,22,19,0.07)"
                      strokeWidth={1}
                    />
                    <text x={PADL - 8} y={g.y + 3} textAnchor="end" fontSize="9.5" fontWeight="500" fontFamily="var(--font-mono)" fill="#6b6e69">
                      {fmtAxis(g.v)}
                    </text>
                  </g>
                ))}
                {days.map((d, i) => {
                  const cx = PADL + colW * (i + 0.5);
                  let acc = 0;
                  return (
                    <g key={d.date}>
                      {shown.map((c) => {
                        const v = d[c] ?? 0;
                        if (v <= 0) return null;
                        const h = (v / top) * plotH;
                        const y = yOf(acc + v);
                        acc += v;
                        return (
                          <rect
                            key={c}
                            x={cx - barW / 2}
                            y={y}
                            width={barW}
                            height={Math.max(0, h)}
                            fill={colorOf(c)}
                            rx={2}
                          />
                        );
                      })}
                      <rect
                        x={cx - colW / 2}
                        y={PADT}
                        width={colW}
                        height={plotH}
                        fill="transparent"
                        onMouseMove={(e) => setTip({ x: e.clientX, y: e.clientY, row: d })}
                      />
                      {(days.length - 1 - i) % lblStep === 0 ? (
                        <text x={cx} y={VBH - 8} textAnchor="middle" fontSize="9.5" fontWeight="500" fontFamily="var(--font-mono)" fill="#6b6e69">
                          {shortDate(d.date)}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* right column */}
          <div className="dash-col">
            <div className="dash-card">
              <div className="dash-card-h">
                <div className="dash-card-t">Job health</div>
              </div>
              <div className="dash-health-row">
                <div className="dash-health-cell">
                  <div className="dash-health-v ok">{nf.format(jobs?.completed ?? 0)}</div>
                  <div className="dash-health-l">completed</div>
                </div>
                <div className="dash-health-cell">
                  <div className="dash-health-v bad">{nf.format(jobs?.failed ?? 0)}</div>
                  <div className="dash-health-l">failed</div>
                </div>
                <div className="dash-health-cell">
                  <div className="dash-health-v">{nf.format(jobs?.pending ?? 0)}</div>
                  <div className="dash-health-l">pending</div>
                </div>
              </div>
              <div className="dash-meter">
                <span
                  className="m-ok"
                  style={{ width: jobs && jobs.total ? `${(jobs.completed / jobs.total) * 100}%` : "0%" }}
                />
                <span
                  className="m-bad"
                  style={{ width: jobs && jobs.total ? `${(jobs.failed / jobs.total) * 100}%` : "0%" }}
                />
              </div>
              <div className="dash-meter-s">
                <b>{successPct}% success</b> · {nf.format(jobs?.total ?? 0)} total · this range
              </div>
            </div>

            <div className="dash-card">
              <div className="dash-card-h">
                <div className="dash-card-t">
                  Top regions <small>this range</small>
                </div>
              </div>
              {regionRows.length > 0 ? (
                <div className="dash-regions">
                  {regionRows.map(({ c, v }) => (
                    <div className="dash-region-row" key={c}>
                      <span className="dash-region-name">{regionName(c)}</span>
                      <span className="dash-region-bar">
                        <span style={{ width: `${Math.round((v / regionMax) * 100)}%` }} />
                      </span>
                      <span className="dash-region-n">{nf.format(v)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="dash-empty">
                  <div className="dash-empty-t">No activity yet</div>
                  <div className="dash-empty-s">regions appear once they have requests</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DAY BREAKDOWN */}
        <div className="dash-card" style={{ marginTop: 12 }}>
          <div className="dash-card-h">
            <div className="dash-card-t">
              Day breakdown <small>requests on a specific date (UTC)</small>
            </div>
          </div>
          <div className="dash-day">
            <div className="dash-day-row">
              <span className="dash-day-v">{nf.format(dayTotal)}</span>
              <span className="dash-day-s">
                {dayRes?.status === "none" ? (
                  <>no data tracked for {pickDate} — try a longer range</>
                ) : (
                  <>
                    requests on <b>{pickDate}</b>
                    {dayTotal === 0 ? " · no activity" : ""}
                  </>
                )}
              </span>
              <input
                type="date"
                className="dash-date"
                value={pickDate}
                max={today}
                onChange={(e) => setPickDate(e.target.value)}
                aria-label="Pick a date"
              />
            </div>
            {dayChips.length > 0 ? (
              <div className="dash-day-regions">
                {dayChips.map(([c, v]) => (
                  <span className="dash-day-chip" key={c}>
                    {regionName(c)} · <b>{nf.format(v as number)}</b>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </main>

      <footer className="dash-foot">
        <div className="dash-wrap">
          <span>
            Polls every 45s · data is per-day (UTC) · regions appear once they have activity.
          </span>
        </div>
      </footer>

      {tip ? (
        <div className="dash-tip" style={{ left: tip.x, top: tip.y }}>
          <div style={{ marginBottom: 4 }}>{shortDate(tip.row.date)}</div>
          {shown
            .filter((c) => (tip.row[c] ?? 0) > 0)
            .map((c) => (
              <div key={c}>
                {regionName(c)} <b>{nf.format(tip.row[c] ?? 0)}</b>
              </div>
            ))}
          <div>
            Total <b>{nf.format(shown.reduce((s, c) => s + (tip.row[c] ?? 0), 0))}</b>
          </div>
        </div>
      ) : null}
    </div>
  );
}
