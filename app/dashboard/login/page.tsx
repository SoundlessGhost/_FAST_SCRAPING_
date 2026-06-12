"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/login.css";

const MAIL = "https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com";

export default function DashboardLogin() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<"idle" | "checking" | "success">("idle");
  const [fieldState, setFieldState] = useState<"" | "ok" | "error">("");
  const [hint, setHint] = useState<{ text: string; error: boolean }>({ text: "", error: false });
  const [clock, setClock] = useState("--:--:-- UTC");

  useEffect(() => {
    const p = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const d = new Date();
      setClock(`${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:${p(d.getUTCSeconds())} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  function onInput() {
    const v = inputRef.current?.value.trim() ?? "";
    setHint({ text: "", error: false });
    setFieldState(v.length > 8 && v.startsWith("sk_") ? "ok" : "");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "checking") return;
    const v = inputRef.current?.value.trim() ?? "";
    if (!v) {
      setFieldState("error");
      setHint({ text: "Enter your API key.", error: true });
      inputRef.current?.focus();
      return;
    }
    setStatus("checking");
    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: v }),
      });
      const d = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!r.ok || !d.ok) {
        setStatus("idle");
        setFieldState("error");
        setHint({ text: d.error || "Invalid API key.", error: true });
        inputRef.current?.focus();
        return;
      }
      setStatus("success");
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 900);
    } catch {
      setStatus("idle");
      setFieldState("error");
      setHint({ text: "Network error. Try again.", error: true });
    }
  }

  return (
    <main className="lg-split">
      {/* LEFT · editorial */}
      <section className="lg-left">
        <header className="lg-brandrow">
          <Link href="/" className="brand">
            <span className="brand-mark">f</span>
            <span>Fastscraping</span>
          </Link>
          <Link href="/" className="lg-back">
            ← fastscraping.com
          </Link>
        </header>

        <div className="lg-left-body">
          <span className="eyebrow">Client access · live usage</span>
          <h1 className="lg-h1">
            Your pipeline,
            <em>live —</em>
            <span className="lg-h1-line">as it flows.</span>
          </h1>
          <p className="lg-sub">
            Requests by region, daily traffic, and job health — in one place.{" "}
            <strong>One key in, the whole picture out.</strong>
          </p>
          <ul className="lg-points">
            <li>
              <span className="lg-arrow">→</span> Usage across all your markets
            </li>
            <li>
              <span className="lg-arrow">→</span> Daily traffic &amp; day-by-day breakdown
            </li>
            <li>
              <span className="lg-arrow">→</span> Job health · success / fail / pending
            </li>
          </ul>
          <div className="lg-nokey">
            Don&apos;t have a key?{" "}
            <a href={MAIL} target="_blank" rel="noopener noreferrer">
              Email Khalid →
            </a>
          </div>
        </div>

        <footer className="lg-left-foot">
          <span>© 2026 Fastscraping</span>
          <span className="lg-foot-sep">·</span>
          <Link href="/privacy">Privacy</Link>
          <span className="lg-foot-sep">·</span>
          <Link href="/terms">Terms</Link>
        </footer>
      </section>

      {/* RIGHT · terminal */}
      <section className="lg-right">
        <div className="lg-right-inner">
          <div className="lg-status-strip">
            <span className="lg-live">
              <span className="lg-live-dot" />
              All pipelines healthy
            </span>
            <span className="lg-utc">{clock}</span>
          </div>

          <div className={`lg-card${status === "success" ? " done" : ""}`}>
            <div className="lg-card-bar">
              <span className="lg-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="lg-card-title">
                fastscraping ~ <b>secure-login</b>
              </span>
              <svg
                className="lg-lock"
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </div>

            {status !== "success" ? (
              <form className="lg-card-body" onSubmit={onSubmit} noValidate>
                <div className="lg-prompt">
                  <span className="lg-ps">$</span> auth --key
                </div>
                <div className="lg-comment"># the same API key you use to make requests</div>

                <label className="lg-label" htmlFor="lg-key">
                  API key
                </label>
                <div className={`lg-field${fieldState ? ` ${fieldState}` : ""}`}>
                  <input
                    ref={inputRef}
                    id="lg-key"
                    name="apiKey"
                    type={show ? "text" : "password"}
                    placeholder="sk_…"
                    autoComplete="off"
                    spellCheck={false}
                    onChange={onInput}
                    autoFocus
                  />
                  <button
                    type="button"
                    className={`lg-eye${show ? " on" : ""}`}
                    aria-label={show ? "Hide key" : "Show key"}
                    onClick={() => {
                      setShow((s) => !s);
                      inputRef.current?.focus();
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
                <div className={`lg-hint${hint.error ? " error" : ""}`}>
                  {hint.text ? (
                    hint.text
                  ) : (
                    <>
                      Keys start with <b>sk_</b> · paste it whole
                    </>
                  )}
                </div>

                <button
                  type="submit"
                  className={`lg-auth${status === "checking" ? " busy" : ""}`}
                  disabled={status === "checking"}
                >
                  <span className="lg-auth-label">
                    {status === "checking" ? "Authenticating" : "Authenticate"}
                  </span>
                  <span className="lg-auth-arrow">→</span>
                </button>

                <div className="lg-fine">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  Encrypted · stays logged in · never stored in your browser
                </div>
              </form>
            ) : (
              <div className="lg-success">
                <div className="lg-success-mark">
                  <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="lg-success-t">Key accepted.</div>
                <div className="lg-success-s">Loading your dashboard…</div>
                <div className="lg-success-bar">
                  <span />
                </div>
              </div>
            )}
          </div>

          <div className="lg-under">
            <span>Trouble logging in? </span>
            <a href={MAIL} target="_blank" rel="noopener noreferrer">
              khalid@fastscraping.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
