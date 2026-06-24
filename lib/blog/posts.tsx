import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO, UTC
  readMins: number;
  tag: string;
  body: ReactNode;
};

export const POSTS: Post[] = [
  {
    slug: "anti-bot-bypass-what-actually-works",
    title: "Anti-bot bypass, honestly: what we crack and what's genuinely hard",
    description:
      "A candid look at bypassing Cloudflare, DataDome, PerimeterX and Akamai at scale — what works reliably, what stays hard, and how we get partial wins on the toughest targets.",
    date: "2026-06-20",
    readMins: 6,
    tag: "Anti-bot",
    body: (
      <>
        <p>
          Most scraping vendors promise they bypass &quot;everything.&quot; That&apos;s
          marketing, not engineering. Anti-bot is an arms race — vendors like Cloudflare,
          DataDome, PerimeterX and Akamai ship changes weekly. Here is an honest map of
          what we crack reliably, what stays genuinely hard, and how we still ship data
          on the toughest targets.
        </p>

        <h2>What we crack reliably</h2>
        <p>
          The majority of protected sites fall to a properly emulated browser — not a
          headless shell with default fingerprints, but a complete, consistent identity:
        </p>
        <ul>
          <li>
            <strong>Cloudflare Turnstile &amp; managed challenges</strong> — solved with
            real browser execution, matching TLS/JA3 fingerprints, and aged profiles.
          </li>
          <li>
            <strong>DataDome &amp; PerimeterX</strong> — handled by passing the behavioral
            and device signals they score, not just rotating IPs.
          </li>
          <li>
            <strong>Akamai Bot Manager</strong> — sensor data generated correctly per
            session rather than replayed blindly.
          </li>
          <li>
            <strong>Login walls &amp; auth gates</strong> — persistent, aged cookie
            sessions instead of fresh logins that trip risk scoring.
          </li>
        </ul>

        <h2>What stays genuinely hard</h2>
        <p>
          We don&apos;t pretend everything is solvable on day one. The hardest cases we
          see:
        </p>
        <ul>
          <li>
            <strong>Region-locked marketplaces.</strong> Some targets gate behind
            region-specific defenses — a marketplace can be open in one country and
            heavily fortified in another. On one large marketplace we run today, several
            regions extract cleanly while a few remain partial.
          </li>
          <li>
            <strong>Heavy ML behavioral + device attestation</strong> stacked together,
            where a single wrong signal burns the session.
          </li>
          <li>
            <strong>App-only data with certificate pinning</strong> that resists protocol
            replay.
          </li>
        </ul>

        <h2>How we get partial wins</h2>
        <p>
          &quot;Hard&quot; rarely means &quot;impossible&quot; — it means
          uneven. Our approach on tough targets:
        </p>
        <ul>
          <li>Per-region strategies and in-region residential / mobile proxies.</li>
          <li>Reverse-engineering the mobile protocol when the web is locked tighter.</li>
          <li>Shipping the endpoints and regions that work first, then expanding coverage.</li>
        </ul>

        <h2>The honest bottom line</h2>
        <p>
          We won&apos;t quote you a fictional 100%. We tell you up front what&apos;s
          feasible, prove it with a free sample within 48–72 hours, and price only what we
          can actually deliver. That candor is why clients stay with us for years rather
          than months.
        </p>
      </>
    ),
  },
  {
    slug: "managed-scraping-vs-diy-vs-proxies",
    title: "Managed scraping vs DIY vs proxy providers: the real trade-offs",
    description:
      "Build it in-house, buy proxies, or hire a managed team? An honest comparison of cost, reliability and maintenance for web data at scale.",
    date: "2026-06-12",
    readMins: 5,
    tag: "Buyer's guide",
    body: (
      <>
        <p>
          If you need web data at scale, you have three real options. Each is right for
          someone — and wrong for someone else. Here&apos;s the unmarketed version.
        </p>

        <h2>1. Do it yourself</h2>
        <p>
          Full control, and free if you ignore engineering time — which you shouldn&apos;t.
          A DIY scraper is cheap until the target adds anti-bot, changes its layout, or
          rate-limits you. Then it becomes a standing maintenance burden that competes with
          your actual roadmap. DIY makes sense when the targets are simple and stable, and
          you already have idle engineering capacity.
        </p>

        <h2>2. Proxy providers</h2>
        <p>
          Bright Data, Oxylabs and similar sell <em>IP addresses</em>, not data. Proxies
          solve one slice of the problem — your origin — but you still build and maintain
          the scraper, the parser, the anti-bot bypass, the scheduling and the QA. You also
          still get blocked if your fingerprints and behavior don&apos;t hold up. Proxies
          are a component, not a solution.
        </p>

        <h2>3. Managed scraping</h2>
        <p>
          One contract, one team that owns the whole stack: bypass, infrastructure,
          extraction, QA and delivery. You describe the data; clean records land on your
          schedule. You trade some control for not carrying any of the maintenance. This
          wins when the targets are hard, the data matters to the business, and you&apos;d
          rather your engineers build product than babysit scrapers.
        </p>

        <h2>The cost reality</h2>
        <p>
          DIY looks cheapest on paper and is often the most expensive once you count an
          engineer&apos;s time and the opportunity cost of broken pipelines. Proxies have a
          low sticker price but leave the hard, ongoing work with you. Managed has the
          highest line-item cost and the lowest total cost when reliability matters.
        </p>

        <h2>How to choose</h2>
        <ul>
          <li><strong>Simple, stable targets + spare engineers</strong> → DIY.</li>
          <li><strong>You&apos;ve built the scraper, just need clean IPs</strong> → proxies.</li>
          <li><strong>Hard targets, data the business depends on</strong> → managed.</li>
        </ul>
        <p>Not sure which? Tell us the targets and we&apos;ll give you an honest answer — even if the answer is &quot;do it yourself.&quot;</p>
      </>
    ),
  },
  {
    slug: "reliable-web-data-pipelines",
    title: "Reliable web-data pipelines: selector drift, QA, and delivery",
    description:
      "Why scraping pipelines break and how to keep them running — selector drift, schema validation, quality checks, and getting data into your API, S3, SFTP or warehouse.",
    date: "2026-06-05",
    readMins: 6,
    tag: "Pipelines",
    body: (
      <>
        <p>
          A one-off scrape is easy. A pipeline that delivers correct data every day for two
          years is a different discipline. The web changes underneath you constantly —
          here&apos;s what actually breaks pipelines and how we keep them alive.
        </p>

        <h2>Why pipelines break</h2>
        <ul>
          <li>
            <strong>Selector drift.</strong> The site ships a layout tweak and your
            selectors silently return empty or wrong values.
          </li>
          <li>
            <strong>Anti-bot drift.</strong> A defense you bypassed last month gets an
            update and starts blocking.
          </li>
          <li>
            <strong>Schema changes.</strong> A field moves, a currency format changes, a new
            variant type appears.
          </li>
        </ul>

        <h2>How to make a pipeline reliable</h2>
        <ul>
          <li>
            <strong>Validate every run against a schema.</strong> Types, required fields,
            value ranges — a price of <code>0</code> or a null title should fail loudly, not
            ship.
          </li>
          <li>
            <strong>Run quality checks, not just &quot;did it run.&quot;</strong> Row-count
            deltas, duplicate rates, field-fill rates. A pipeline that returns 10% of
            yesterday&apos;s rows is broken even if it exited cleanly.
          </li>
          <li>
            <strong>Monitor and alert</strong> so issues are caught and fixed before you
            notice — not after a stakeholder does.
          </li>
          <li>
            <strong>Auto-adapt where possible</strong> and isolate failures so one broken
            source doesn&apos;t take down the whole feed.
          </li>
        </ul>

        <h2>Delivery is part of the pipeline</h2>
        <p>
          Data you can&apos;t use isn&apos;t delivered. We land it where it&apos;s useful:
          REST API, webhook, S3/GCS, SFTP, or a direct write to Snowflake / BigQuery — as
          CSV, JSON or Parquet. On the cadence you need: real-time, hourly, daily, weekly.
        </p>

        <h2>Freshness and SLA</h2>
        <p>
          Reliability is a number, not a vibe. We agree an uptime SLA, a freshness target,
          and a response time for incidents up front — then hold to it. That&apos;s the
          difference between a script and a pipeline.
        </p>
      </>
    ),
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
