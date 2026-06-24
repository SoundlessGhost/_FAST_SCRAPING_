import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "@/lib/blog/posts";
import "../../styles/blog.css";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} · Fastscraping`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Fastscraping" },
    publisher: {
      "@type": "Organization",
      name: "Fastscraping",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fastscraping.com/apple-icon.svg",
      },
    },
    mainEntityOfPage: `https://www.fastscraping.com/blog/${post.slug}`,
  };

  return (
    <article className="block blog-article" data-screen-label="01 Article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div className="container blog-article-inner">
        <Link href="/blog" className="blog-back">
          ← All articles
        </Link>
        <span className="blog-art-tag">{post.tag}</span>
        <h1 className="blog-art-h1">{post.title}</h1>
        <div className="blog-art-meta">
          {fmtDate(post.date)} · {post.readMins} min read
        </div>

        <div className="blog-prose">{post.body}</div>

        <div className="blog-cta">
          <div>
            <h2>Need this kind of data?</h2>
            <p>Tell us your targets — we&apos;ll send a free sample within 48–72 hours.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Start a brief <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
