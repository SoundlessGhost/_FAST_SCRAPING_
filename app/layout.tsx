import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles/base.css";
import "./globals.css";
import "./styles/nav-mobile.css";

const SITE_URL = "https://fastscraping.com";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--next-font-geist",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--next-font-geist-mono",
  display: "swap",
  preload: false,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--next-font-instrument-serif",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fastscraping — Your web scraping team on demand",
    template: "%s · Fastscraping",
  },
  description:
    "Enterprise-grade data extraction. Structured data delivered reliably at any scale — bypassing Cloudflare, DataDome, PerimeterX and login walls. No proxies, no infrastructure, no babysitting.",
  applicationName: "Fastscraping",
  authors: [{ name: "Md Khalid Mahmud Shawon", url: SITE_URL }],
  creator: "Md Khalid Mahmud Shawon",
  publisher: "Fastscraping",
  keywords: [
    "web scraping",
    "data extraction",
    "enterprise scraping",
    "Cloudflare bypass",
    "DataDome bypass",
    "PerimeterX bypass",
    "Akamai bypass",
    "anti-bot bypass",
    "managed scraping",
    "data pipelines",
    "ETL",
    "LinkedIn data",
    "pricing intelligence",
    "marketplace intelligence",
    "job market data",
    "web data API",
    "stealth scraping",
    "headless browser",
    "proxy rotation",
    "Fastscraping",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Fastscraping",
    title: "Fastscraping — Your web scraping team on demand",
    description:
      "Structured data delivered reliably, at any scale — bypassing Cloudflare, DataDome and login walls.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fastscraping — Your web scraping team on demand",
    description:
      "Structured data delivered reliably, at any scale — bypassing Cloudflare, DataDome and login walls.",
    creator: "@fastscraping",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#131613" },
  ],
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fastscraping",
  alternateName: "Fastscraping — Your web scraping team on demand",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.svg`,
  email: "khalid@fastscraping.com",
  foundingDate: "2023",
  founder: {
    "@type": "Person",
    name: "Md Khalid Mahmud Shawon",
    jobTitle: "Founder",
    sameAs: [
      "https://linkedin.com/in/md-khalid-mahmud-shawon",
      "https://upwork.com/freelancers/khalidalsaba",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sirajganj",
    addressRegion: "Rajshahi",
    addressCountry: "BD",
  },
  sameAs: [
    "https://linkedin.com/in/md-khalid-mahmud-shawon",
    "https://upwork.com/freelancers/khalidalsaba",
  ],
  description:
    "Managed enterprise web scraping service for data teams, AI companies and agencies. Anti-bot bypass, custom pipelines, white-label delivery.",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fastscraping",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const fontClass = `${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-accent="emerald" className={fontClass}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
