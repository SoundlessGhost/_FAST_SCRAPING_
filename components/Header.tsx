"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PageMeta = { cta: string; ctaHref: string; status: string };

const DEFAULT_STATUS = "All pipelines healthy";

const PAGE_META: Record<string, PageMeta> = {
  "/": { cta: "Talk to Khalid", ctaHref: "/contact", status: DEFAULT_STATUS },
  "/about": { cta: "Book a demo", ctaHref: "/contact", status: DEFAULT_STATUS },
  "/pricing": { cta: "Get a quote", ctaHref: "/contact", status: "Replies in < 24h" },
  "/solutions": { cta: "Book a demo", ctaHref: "/contact", status: DEFAULT_STATUS },
  "/contact": { cta: "Write us a note", ctaHref: "/contact#letter", status: "Online · GMT+6" },
  "/privacy": { cta: "Talk to Khalid", ctaHref: "/contact", status: "Reviewed quarterly" },
  "/terms": { cta: "Talk to Khalid", ctaHref: "/contact", status: "Reviewed quarterly" },
};

export default function Header() {
  const pathname = usePathname();
  const meta = PAGE_META[pathname] ?? PAGE_META["/"];

  const isActive = (href: string) => pathname === href;

  // Smooth-scroll to top when clicking a nav link to the current route
  // (Next.js doesn't re-navigate, so default behavior is a hard jump.)
  const sameRouteScroll =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href === pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand" onClick={sameRouteScroll("/")}>
          <span className="brand-mark">f</span>
          <span>Fastscraping</span>
        </Link>
        <nav className="nav">
          <div className="nav-dropdown">
            <Link
              href="/solutions"
              className={`nav-trigger${isActive("/solutions") ? " active" : ""}`}
              onClick={sameRouteScroll("/solutions")}
            >
              Solutions <span className="caret">▾</span>
            </Link>
            <div className="megamenu">
              <div className="mm-head">
                <span className="mm-head-l">Solutions · 6 areas</span>
                <span className="mm-head-r">Click any card to dive in</span>
              </div>
              <div className="mm-grid">
                <Link className="mm-card" href="/solutions#pricing-intelligence">
                  <span className="mm-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m7 14 4-4 4 4 5-6" />
                    </svg>
                  </span>
                  <span className="mm-body">
                    <span className="mm-h">Pricing intelligence</span>
                    <span className="mm-d">Track competitor prices in real time</span>
                  </span>
                  <span className="mm-m">60M+/day</span>
                </Link>
                <Link className="mm-card" href="/solutions#marketplace-intelligence">
                  <span className="mm-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9h18l-1 11H4L3 9Z" />
                      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
                    </svg>
                  </span>
                  <span className="mm-body">
                    <span className="mm-h">Marketplace intelligence</span>
                    <span className="mm-d">Product data from any marketplace</span>
                  </span>
                  <span className="mm-m">10M+</span>
                </Link>
                <Link className="mm-card" href="/solutions#job-market">
                  <span className="mm-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="7" width="18" height="14" rx="2" />
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <path d="M3 13h18" />
                    </svg>
                  </span>
                  <span className="mm-body">
                    <span className="mm-h">Job market insights</span>
                    <span className="mm-d">50+ boards, hiring &amp; salary trends</span>
                  </span>
                  <span className="mm-m">1.4M/wk</span>
                </Link>
                <Link className="mm-card" href="/solutions#linkedin-data">
                  <span className="mm-ic">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </span>
                  <span className="mm-body">
                    <span className="mm-h">LinkedIn data platform</span>
                    <span className="mm-d">Profiles &amp; companies — zero ban risk</span>
                  </span>
                  <span className="mm-m">100M/mo</span>
                </Link>
                <Link className="mm-card" href="/solutions#web-data-apis">
                  <span className="mm-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="8 5 3 12 8 19" />
                      <polyline points="16 5 21 12 16 19" />
                    </svg>
                  </span>
                  <span className="mm-body">
                    <span className="mm-h">Web data APIs</span>
                    <span className="mm-d">Custom REST endpoints, any source</span>
                  </span>
                  <span className="mm-m">200ms</span>
                </Link>
                <Link className="mm-card" href="/solutions#data-pipelines">
                  <span className="mm-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="5" cy="6" r="2" />
                      <circle cx="19" cy="18" r="2" />
                      <path d="M5 8v4a4 4 0 0 0 4 4h6" />
                      <path d="M19 16v-4a4 4 0 0 0-4-4H9" />
                    </svg>
                  </span>
                  <span className="mm-body">
                    <span className="mm-h">Data pipelines &amp; ETL</span>
                    <span className="mm-d">Automated delivery, your schedule</span>
                  </span>
                  <span className="mm-m">99%+ SLA</span>
                </Link>
              </div>
              <div className="mm-foot">
                <Link href="/solutions">All solutions overview →</Link>
                <span className="mm-tip">Or email khalid@fastscraping.com</span>
              </div>
            </div>
          </div>
          <Link
            href={pathname === "/" ? "#services" : "/#services"}
            className={pathname === "/" ? "active" : ""}
          >
            Services
          </Link>
          <Link href={pathname === "/" ? "#industries" : "/#industries"}>Industries</Link>
          <Link
            href="/pricing"
            className={isActive("/pricing") ? "active" : ""}
            onClick={sameRouteScroll("/pricing")}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={sameRouteScroll("/about")}
          >
            About
          </Link>
        </nav>
        <div className="topbar-right">
          <span className="status-pill">
            <span className="status-dot"></span>
            <span>{meta.status}</span>
          </span>
          <Link href={meta.ctaHref} className="btn btn-primary">
            {meta.cta}
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
