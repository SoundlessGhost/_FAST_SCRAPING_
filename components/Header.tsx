"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type PageMeta = { cta: string; ctaHref: string; status: string };

const DEFAULT_STATUS = "All pipelines healthy";

const PAGE_META: Record<string, PageMeta> = {
  "/": { cta: "Talk to Khalid", ctaHref: "/contact", status: DEFAULT_STATUS },
  "/about": { cta: "Book a demo", ctaHref: "/contact", status: DEFAULT_STATUS },
  "/pricing": { cta: "Get a quote", ctaHref: "/contact", status: "Replies in < 24h" },
  "/solutions": { cta: "Book a demo", ctaHref: "/contact", status: DEFAULT_STATUS },
  "/services": { cta: "Get a quote", ctaHref: "/contact", status: "8 active capabilities" },
  "/industries": { cta: "Talk to Khalid", ctaHref: "/contact", status: "6 verticals · 5 countries" },
  "/case-studies": { cta: "Become a case", ctaHref: "/contact", status: "4 active stories" },
  "/contact": { cta: "Write us a note", ctaHref: "/contact#letter", status: "Online · GMT+6" },
  "/privacy": { cta: "Talk to Khalid", ctaHref: "/contact", status: "Reviewed quarterly" },
  "/terms": { cta: "Talk to Khalid", ctaHref: "/contact", status: "Reviewed quarterly" },
};

const NAV = [
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/dashboard", label: "Client dashboard" },
];

const SOLUTIONS_SUB = [
  { href: "/solutions#pricing-intelligence", label: "Pricing intelligence" },
  { href: "/solutions#marketplace-intelligence", label: "Marketplace intelligence" },
  { href: "/solutions#job-market", label: "Job market insights" },
  { href: "/solutions#linkedin-data", label: "LinkedIn data platform" },
  { href: "/solutions#web-data-apis", label: "Web data APIs" },
  { href: "/solutions#data-pipelines", label: "Data pipelines & ETL" },
];

export default function Header() {
  const pathname = usePathname();
  const meta = PAGE_META[pathname] ?? PAGE_META["/"];
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const sameRouteScroll =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href === pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setOpen(false);
    };

  const closeDrawer = () => setOpen(false);

  // Toggle body class (CSS reads body.nav-open) + ESC + lock scroll
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Clean up body class on unmount
  useEffect(
    () => () => {
      document.body.classList.remove("nav-open");
    },
    [],
  );

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="brand" onClick={sameRouteScroll("/")}>
            <span className="brand-mark">f</span>
            <span>Fastscraping</span>
          </Link>

          {/* Desktop nav (hidden ≤ 1000px by CSS) */}
          <nav className="nav">
            <div className="nav-dropdown">
              <Link
                href="/solutions"
                className={`nav-trigger${isActive("/solutions") ? " active" : ""}`}
                onClick={sameRouteScroll("/solutions")}
              >
                Solutions
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
                      <span className="mm-d">Product data from any <br /> marketplace</span>
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
                      <span className="mm-d">50+ boards, hiring &amp; salary <br /> trends</span>
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
                      <span className="mm-d">Custom REST endpoints, any <br /> source</span>
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
              href="/services"
              className={isActive("/services") ? "active" : ""}
              onClick={sameRouteScroll("/services")}
            >
              Services
            </Link>
            <Link
              href="/industries"
              className={isActive("/industries") ? "active" : ""}
              onClick={sameRouteScroll("/industries")}
            >
              Industries
            </Link>
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
            <Link
              href="/dashboard"
              className={`nav-dash${isActive("/dashboard") ? " active" : ""}`}
            >
              Dashboard
            </Link>
          </nav>

          <div className="topbar-right">
            <Link href={meta.ctaHref} className="btn btn-primary">
              {meta.cta}
              <span className="arrow">→</span>
            </Link>
            <button
              type="button"
              className="nav-toggle"
              id="navToggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobileDrawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="mobile-drawer"
        id="mobileDrawer"
        aria-hidden={!open}
      >
        <div className="md-backdrop" onClick={closeDrawer} />
        <nav className="md-panel" aria-label="Mobile">
          <div className="md-top">
            <Link href="/" className="brand" onClick={sameRouteScroll("/")}>
              <span className="brand-mark">f</span>
              <span>Fastscraping</span>
            </Link>
            <button
              type="button"
              className="md-close"
              aria-label="Close menu"
              onClick={closeDrawer}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <div className="md-links">
            {NAV.map((l) => (
              <span key={l.href}>
                <Link
                  href={l.href}
                  className={`md-link${isActive(l.href) ? " active" : ""}`}
                  onClick={sameRouteScroll(l.href)}
                >
                  {l.label}
                </Link>
                {l.href === "/solutions" ? (
                  <div className="md-sub">
                    {SOLUTIONS_SUB.map((s) => (
                      <Link key={s.href} href={s.href} onClick={closeDrawer}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </span>
            ))}
          </div>

          <div className="md-foot">
            <Link
              href={meta.ctaHref}
              className="btn btn-primary md-cta"
              onClick={closeDrawer}
            >
              {meta.cta} <span className="arrow">→</span>
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=khalid@fastscraping.com"
              target="_blank"
              rel="noopener noreferrer"
              className="md-email"
            >
              khalid@fastscraping.com
            </a>
            <div className="md-social">
              <a
                href="https://wa.me/8801788791134"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/md-khalid-mahmud-shawon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href="https://upwork.com/freelancers/khalidalsaba"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
