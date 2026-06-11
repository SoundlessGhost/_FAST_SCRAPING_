"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { REGION_ORDER, regionName, regionColor } from "@/lib/regions";

type Period = { all: number } & Record<string, number>;
type DailyRow = { date: string } & Record<string, number>;

type UsageData = {
  owner: string;
  request_count: number;
  jobs: { total: number; completed: number; failed: number; pending: number };
  timezone: string;
  interval_days: number;
  totals: Record<string, Period>;
  daily: DailyRow[];
  monthly: Array<{ month: string } & Record<string, number>>;
  monthly_breakdown?: Record<string, Record<string, number | Period> | null>;
};

type DayResult = { status: "data" | "zero" | "none"; period?: Period };

// Look up a single date (YYYY-MM-DD). First the daily[] window, then the
// monthly_breakdown (current + previous month). "none" = outside tracked range.
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

const INTERVALS = [
  { label: "24h", v: 1 },
  { label: "3d", v: 3 },
  { label: "7d", v: 7 },
  { label: "30d", v: 30 },
];

const POLL_MS = 45000;
const nf = new Intl.NumberFormat("en-US");

function shortDate(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function splitText(p: Period | undefined) {
  if (!p) return "—";
  const parts = Object.entries(p)
    .filter(([k]) => k !== "all")
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${regionName(k).slice(0, 2).toLowerCase()} ${nf.format(v)}`);
  if (parts.length === 0) return p.all === 0 ? "no activity" : "single region";
  return parts.join(" · ");
}

export default function UsageDashboard() {
  const [data, setData] = useState<UsageData | null>(null);
  const [interval, setIntervalDays] = useState(7);
  const [region, setRegion] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastSync, setLastSync] = useState<string>("");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [pickDate, setPickDate] = useState<string>(() => new Date().toISOString().slice(0, 10));

  const load = useCallback(async (iv: number, spinner: boolean) => {
    if (spinner) setLoading(true);
    try {
      const r = await fetch(`/api/usage?interval=${iv}`, { cache: "no-store" });
      if (r.status === 401) {
        window.location.href = "/dashboard/login";
        return;
      }
      const d = (await r.json().catch(() => ({}))) as UsageData & { ok?: boolean; error?: string };
      if (!r.ok || d.ok === false) {
        setError(d.error || "Could not load usage.");
      } else {
        setData(d);
        setError("");
        setLastSync(
          new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        );
      }
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(interval, true);
  }, [interval, load]);

  useEffect(() => {
    const id = setInterval(() => load(interval, false), POLL_MS);
    return () => clearInterval(id);
  }, [interval, load]);

  // Which region codes actually appear in the data, in stable order.
  const active = useMemo(() => {
    if (!data) return [] as string[];
    const s = new Set<string>();
    data.daily.forEach((row) =>
      Object.keys(row).forEach((k) => {
        if (k !== "date" && k !== "all") s.add(k);
      }),
    );
    Object.values(data.totals).forEach((p) =>
      Object.keys(p).forEach((k) => {
        if (k !== "all") s.add(k);
      }),
    );
    const ordered = REGION_ORDER.filter((c) => s.has(c));
    const extra = [...s].filter((c) => !REGION_ORDER.includes(c));
    return [...ordered, ...extra];
  }, [data]);

  const bars = region === "all" ? active : [region];
  const lineKey = region === "all" ? "all" : region;

  const chartData = useMemo(() => {
    if (!data) return [];
    return data.daily.map((row) => {
      const out: Record<string, number | string> = { date: shortDate(row.date), all: row.all ?? 0 };
      active.forEach((c) => {
        out[c] = row[c] ?? 0;
      });
      return out;
    });
  }, [data, active]);

  const jobs = data?.jobs;
  const successPct =
    jobs && jobs.total > 0 ? Math.round((jobs.completed / jobs.total) * 1000) / 10 : 0;
  const failPct = jobs && jobs.total > 0 ? 100 - successPct : 0;

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    window.location.href = "/dashboard/login";
  }

  return (
    <div className="dash-shell">
      {/* top bar */}
      <header className="dash-top">
        <div className="dash-brand">
          <Link href="/" className="dash-brandlink" aria-label="Back to home">
            <span className="dash-mark">f</span>
            <span>Fastscraping</span>
          </Link>
          <span className="dash-kbd">Shopee API · usage</span>
        </div>
        <div className="dash-top-r">
          <span className="dash-online">
            <span className="dash-dot" />
            {data ? `${data.owner}` : "…"}
          </span>
          <button className="dash-logout" onClick={logout} type="button">
            Log out
          </button>
        </div>
      </header>

      {/* head row */}
      <div className="dash-headrow">
        <div>
          <h1 className="dash-h1">
            Shopee usage <em>overview</em>
          </h1>
          <div className="dash-sub">
            owner · {data?.owner ?? "—"} · all times UTC
            {lastSync ? ` · last sync ${lastSync}` : ""}
          </div>
        </div>
        <div className="dash-controls">
          <div className="dash-pills" role="group" aria-label="Time range">
            {INTERVALS.map((it) => (
              <button
                key={it.v}
                type="button"
                className={`dash-pill${interval === it.v ? " on" : ""}`}
                onClick={() => setIntervalDays(it.v)}
              >
                {it.label}
              </button>
            ))}
          </div>
          <select
            className="dash-select"
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

      {error ? <div className="dash-banner">{error}</div> : null}

      {/* summary cards */}
      <div className="dash-cards">
        {[
          { k: "today", label: "Today" },
          { k: "last_7_days", label: "Last 7 days" },
          { k: "this_month", label: "This month" },
          { k: "lifetime", label: "Lifetime", dark: true },
        ].map((c) => {
          const p = data?.totals?.[c.k];
          return (
            <div key={c.k} className={`dash-card${c.dark ? " dark" : ""}`}>
              <div className="dash-card-l">{c.label}</div>
              <div className="dash-card-v">{loading && !data ? "—" : nf.format(p?.all ?? 0)}</div>
              <div className="dash-card-s">{loading && !data ? " " : splitText(p)}</div>
            </div>
          );
        })}
      </div>

      {/* main: chart (left) + side widgets (right) */}
      <div className="dash-main">
      <div className="dash-panel dash-panel--chart">
        <div className="dash-panel-h">
          <div className="dash-panel-t">
            Traffic overview <span>· requests / day, stacked by region</span>
          </div>
          <div className="dash-legend">
            {bars.map((c) => (
              <span key={c} className="dash-leg">
                <span className="dash-leg-sw" style={{ background: regionColor(c) }} />
                {regionName(c)}
              </span>
            ))}
          </div>
        </div>
        <div className="dash-chart">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={chartData} margin={{ top: 8, right: 8, left: -14, bottom: 0 }}>
              <CartesianGrid stroke="rgba(19,22,19,0.07)" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "#6b6e69" }}
                tickLine={false}
                axisLine={{ stroke: "rgba(19,22,19,0.15)" }}
                minTickGap={8}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#6b6e69" }}
                tickLine={false}
                axisLine={false}
                width={40}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  background: "#131613",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 12,
                  color: "#f4f1ea",
                }}
                labelStyle={{ color: "#9aa39c" }}
                formatter={(value, name) => [nf.format(Number(value) || 0), String(name)]}
              />
              {bars.map((c) => (
                <Bar
                  key={c}
                  dataKey={c}
                  name={regionName(c)}
                  stackId="r"
                  fill={regionColor(c)}
                  maxBarSize={36}
                  radius={[2, 2, 0, 0]}
                />
              ))}
              <Line
                type="monotone"
                dataKey={lineKey}
                name="Total"
                stroke="#131613"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                dot={{ r: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <aside className="dash-side">
        <div className="dash-panel sm">
          <div className="dash-panel-t">Job health</div>
          <div className="dash-jobs">
            <div>
              <div className="dash-job-v ok">{nf.format(jobs?.completed ?? 0)}</div>
              <div className="dash-job-l">completed</div>
            </div>
            <div>
              <div className="dash-job-v bad">{nf.format(jobs?.failed ?? 0)}</div>
              <div className="dash-job-l">failed</div>
            </div>
            <div>
              <div className="dash-job-v">{nf.format(jobs?.pending ?? 0)}</div>
              <div className="dash-job-l">pending</div>
            </div>
          </div>
          <div className="dash-jobbar">
            <span style={{ width: `${successPct}%`, background: "#1d9e75" }} />
            <span style={{ width: `${failPct}%`, background: "#d65730" }} />
          </div>
          <div className="dash-job-foot">
            {successPct}% success · {nf.format(jobs?.total ?? 0)} total
          </div>
        </div>

        <div className="dash-panel sm">
          <div className="dash-panel-t">Top regions · this range</div>
          <RegionBars data={data} active={active} />
        </div>
      </aside>
      </div>

      {/* day breakdown */}
      <div className="dash-panel">
        <div className="dash-panel-h">
          <div className="dash-panel-t">
            Day breakdown <span>· requests on a specific date (UTC)</span>
          </div>
          <input
            type="date"
            className="dash-date"
            value={pickDate}
            max={today}
            onChange={(e) => setPickDate(e.target.value)}
            aria-label="Pick a date"
          />
        </div>
        {(() => {
          if (!data) return <div className="dash-day-none">Loading…</div>;
          const r = dayLookup(data, pickDate);
          if (r.status === "none") {
            return (
              <div className="dash-day-none">
                No data tracked for {pickDate}. Switch to a longer range, or it&apos;s outside the
                tracked window (current + previous month).
              </div>
            );
          }
          const total = r.status === "zero" ? 0 : r.period?.all ?? 0;
          const chips =
            r.status === "data"
              ? Object.entries(r.period ?? {})
                  .filter(([k]) => k !== "all")
                  .sort((a, b) => (b[1] as number) - (a[1] as number))
              : [];
          return (
            <>
              <div className="dash-day">
                <span className="dash-day-v">{nf.format(total)}</span>
                <span className="dash-day-sub">
                  requests on {pickDate}
                  {total === 0 ? " · no activity" : ""}
                </span>
              </div>
              {chips.length > 0 ? (
                <div className="dash-day-chips">
                  {chips.map(([c, v]) => (
                    <span className="dash-chip" key={c}>
                      <i style={{ background: regionColor(c) }} /> {regionName(c)} ·{" "}
                      {nf.format(v as number)}
                    </span>
                  ))}
                </div>
              ) : null}
            </>
          );
        })()}
      </div>

      <div className="dash-foot-note">
        Polls every 45s · data is per-day (UTC). Regions appear here once they have activity.
      </div>
    </div>
  );
}

function RegionBars({ data, active }: { data: UsageData | null; active: string[] }) {
  const key = `last_${data?.interval_days ?? 7}_days`;
  const period =
    data?.totals?.[key] ?? data?.totals?.last_30_days ?? data?.totals?.lifetime;
  const sums = active.map((c) => ({ c, v: period?.[c] ?? 0 }));
  const max = Math.max(1, ...sums.map((s) => s.v));
  const sorted = sums.sort((a, b) => b.v - a.v);

  if (sorted.length === 0) {
    return <div className="dash-empty">No regional activity in this range.</div>;
  }

  return (
    <div className="dash-rbars">
      {sorted.map(({ c, v }) => (
        <div className="dash-rbar" key={c}>
          <span className="dash-rbar-n">{regionName(c)}</span>
          <span className="dash-rbar-t">
            <span style={{ width: `${Math.round((v / max) * 100)}%`, background: regionColor(c) }} />
          </span>
          <span className="dash-rbar-v">{nf.format(v)}</span>
        </div>
      ))}
    </div>
  );
}
