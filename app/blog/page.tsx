import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "@/lib/blog/posts";
import "../styles/blog.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes on web scraping at scale — honest writing on anti-bot bypass, managed scraping, and reliable data pipelines.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Fastscraping",
    description:
      "Honest, practical writing on anti-bot bypass, managed scraping, and data pipelines.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · Fastscraping",
    description: "Field notes on web scraping at scale.",
  },
};

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <section className="block blog-wrap" data-screen-label="01 Blog">
      <div className="container">
        <header className="blog-head">
          <span className="eyebrow">Field notes</span>
          <h1 className="display blog-h1">
            The <em>scraping</em> journal.
          </h1>
          <p className="blog-deck">
            Honest, practical writing on anti-bot bypass, managed scraping, and keeping
            data pipelines alive at scale.
          </p>
        </header>

        <div className="blog-list">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
              <span className="blog-card-tag">{p.tag}</span>
              <h2 className="blog-card-t">{p.title}</h2>
              <p className="blog-card-d">{p.description}</p>
              <span className="blog-card-meta">
                {fmtDate(p.date)} · {p.readMins} min read
                <span className="blog-card-arr">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
