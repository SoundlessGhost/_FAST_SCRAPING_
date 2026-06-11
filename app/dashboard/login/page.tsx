"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLogin() {
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "error">("idle");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "checking") return;
    // Read straight from the field so a browser-autofilled key works even when
    // autofill didn't trigger React's onChange (the disabled-button bug).
    const fd = new FormData(e.currentTarget);
    const trimmed = ((fd.get("apiKey") as string) || "").trim();
    if (!trimmed) {
      setErr("Enter your API key.");
      setStatus("error");
      return;
    }
    setStatus("checking");
    setErr("");
    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: trimmed }),
      });
      const d = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!r.ok || !d.ok) {
        setErr(d.error || "Login failed.");
        setStatus("error");
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch {
      setErr("Network error. Try again.");
      setStatus("error");
    }
  }

  return (
    <div className="dl2-wrap">
      <div className="dl2-left">
        <Link href="/" className="dl2-brand">
          <span className="dl2-mark">f</span>
          <span>Fastscraping</span>
        </Link>
        <span className="dl2-eyebrow">Client access · live usage</span>
        <h1 className="dl2-h1">
          <span className="dl2-supra">Your Shopee pipeline,</span>
          <em>live —</em>
          <span className="dl2-line">as it flows.</span>
        </h1>
        <p className="dl2-deck">
          Your live Shopee usage — requests by region, daily traffic, and job health — in one
          place. One key in, the whole picture out.
        </p>
        <ul className="dl2-list">
          <li>
            <span className="dl2-tick">→</span> Usage across 9 Shopee markets
          </li>
          <li>
            <span className="dl2-tick">→</span> Daily traffic &amp; day-by-day breakdown
          </li>
          <li>
            <span className="dl2-tick">→</span> Job health · success / fail / pending
          </li>
        </ul>
        <div className="dl2-foot">
          Don&apos;t have a key?{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Khalid →
          </a>
        </div>
      </div>

      <div className="dl2-right">
        <form className="dl2-console" onSubmit={submit}>
          <div className="dl2-bar">
            <span className="dl2-dots">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span className="dl2-bar-t">fastscraping ~ secure-login</span>
            <span className="dl2-lock" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </span>
          </div>
          <div className="dl2-body">
            <div className="dl2-tline">
              <span className="dl2-prompt">$</span> auth --key
            </div>
            <div className="dl2-tline dim"># the same API key you use to make requests</div>

            <label className="dl2-label" htmlFor="apiKey">
              API key
            </label>
            <input
              id="apiKey"
              name="apiKey"
              type="password"
              className="dl2-input"
              placeholder="sk_…"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              autoFocus
            />

            {status === "error" && err ? (
              <div className="dl2-err">
                <span className="dl2-prompt err">!</span>
                {err}
              </div>
            ) : null}

            <button type="submit" className="dl2-btn" disabled={status === "checking"}>
              {status === "checking" ? "Authenticating…" : "Authenticate"}
              <span className="dl2-arr">→</span>
            </button>
            <div className="dl2-note">Encrypted · stays logged in · never stored in your browser</div>
          </div>
        </form>
      </div>
    </div>
  );
}
