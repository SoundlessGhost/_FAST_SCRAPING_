"use client";

import { useState, type FormEvent } from "react";

const VOLUME_CHIPS = [
  { v: "small", l: "Under 100K records / day", mk: "S" },
  { v: "medium", l: "100K – 1M records / day", mk: "M" },
  { v: "large", l: "1M – 10M records / day", mk: "L" },
  { v: "huge", l: "10M+ records / day", mk: "XL" },
  { v: "unsure", l: "Not sure yet", mk: "?" },
];

const CADENCE_OPTS = ["Real-time", "Hourly", "Daily", "Weekly", "Monthly", "One-time"];
const DELIVERY_OPTS = ["REST API", "Webhook", "S3 / GCS", "SFTP", "Snowflake", "CSV"];

type Status = "idle" | "sending" | "sent" | "error";

export default function LetterForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [cadence, setCadence] = useState("Daily");
  const [delivery, setDelivery] = useState("REST API");
  const [volume, setVolume] = useState("medium");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const charCount = message.length;
  const maxChars = 1200;
  const canSubmit =
    status !== "sending" &&
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length >= 20;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          cadence,
          delivery,
          volume,
          message: message.trim(),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || "Could not send your note. Try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="lt-sent">
        <div className="lt-sent-mark">✓</div>
        <h3>Note received.</h3>
        <p>
          Khalid will read this personally and reply within 24 hours. If you don&apos;t see a
          reply, check spam — sometimes Cloudflare gets us too.
        </p>
        <div className="lt-summary">
          <div>
            <b>From:</b> {name || "—"}
            {company ? ` · ${company}` : ""}
          </div>
          <div>
            <b>Reply to:</b> {email || "—"}
          </div>
          <div>
            <b>Cadence:</b> {cadence} · <b>Delivery:</b> {delivery}
          </div>
          <div>
            <b>Volume:</b> {VOLUME_CHIPS.find((c) => c.v === volume)?.l}
          </div>
          <div>
            <b>Message:</b> {message.slice(0, 80)}
            {message.length > 80 ? "…" : ""}
          </div>
        </div>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          Write another
        </button>
      </div>
    );
  }

  return (
    <form className="lt-form" onSubmit={handleSubmit}>
      <p className="lt-greet">
        Hi Khalid, <em>I&apos;d like to talk to you.</em>
      </p>

      <div className="lt-field">
        <div className="lt-field-h">
          <span>About me</span>
          <span className="opt">required</span>
        </div>
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

      <div className="lt-field">
        <div className="lt-field-h">
          <span>Project shape</span>
          <span className="opt">rough is fine</span>
        </div>
        <div className="lt-row">
          <span>I need data delivered</span>
          <select value={cadence} onChange={(e) => setCadence(e.target.value)}>
            {CADENCE_OPTS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <span>via</span>
          <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
            {DELIVERY_OPTS.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <span>.</span>
        </div>
      </div>

      <div className="lt-field">
        <div className="lt-field-h">
          <span>Expected volume</span>
        </div>
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

      <div className="lt-field">
        <div className="lt-field-h">
          <span>The project</span>
          <span className="opt">
            {charCount} / {maxChars}
          </span>
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

      {status === "error" && errorMsg ? (
        <div
          role="alert"
          style={{
            margin: "12px 0 0",
            padding: "10px 14px",
            border: "1px solid rgba(214,87,48,0.4)",
            background: "rgba(214,87,48,0.08)",
            color: "var(--hot, #d65730)",
            borderRadius: 8,
            fontSize: 13.5,
          }}
        >
          {errorMsg}
        </div>
      ) : null}

      <div className="lt-foot">
        <div className="lt-sig">
          <div className="lt-sig-mark">↵</div>
          <div className="lt-sig-text">
            <span className="lt-sig-name">
              Encrypted in transit · we never share your brief
            </span>
            <span className="lt-sig-role">Reply within 24 hours · usually faster</span>
          </div>
        </div>
        <div className="lt-submit">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!canSubmit}
            aria-busy={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send note"}{" "}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </form>
  );
}
