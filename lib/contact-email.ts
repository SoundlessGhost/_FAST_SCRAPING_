/**
 * Branded HTML email template for incoming contact-form notes.
 * Mirrors the Fastscraping site palette + typography.
 */

const VOLUME_LABELS: Record<string, string> = {
  small: "Under 100K records / day",
  medium: "100K – 1M records / day",
  large: "1M – 10M records / day",
  huge: "10M+ records / day",
  unsure: "Not sure yet",
};

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  cadence: string;
  delivery: string;
  volume: string;
  message: string;
};

const ink = "#131613";
const paper = "#faf8f3";
const bg = "#f4f1ea";
const accent = "#0e5d44";
const muted = "#6b6e69";
const hairline = "rgba(19, 22, 19, 0.10)";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const para = (s: string) => esc(s).replace(/\n/g, "<br />");

export function buildContactHtml(p: ContactPayload): string {
  const volume = VOLUME_LABELS[p.volume] ?? p.volume;
  const company = p.company.trim() ? ` at ${esc(p.company)}` : "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>New note from ${esc(p.name)} — Fastscraping</title>
</head>
<body style="margin:0;padding:0;background:${bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${ink};">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${bg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:${paper};border:1px solid ${hairline};border-radius:16px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:28px 32px;border-bottom:1px solid ${hairline};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:${ink};color:${paper};width:32px;height:32px;border-radius:8px;font-family:Georgia,serif;font-style:italic;font-size:22px;text-align:center;line-height:32px;">f</td>
                        <td style="padding-left:10px;font-weight:600;font-size:16px;color:${ink};">Fastscraping</td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="font-family:ui-monospace,'Segoe UI Mono','SFMono-Regular',Menlo,monospace;font-size:11px;color:${muted};letter-spacing:0.08em;text-transform:uppercase;">
                    New contact note
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding:36px 32px 8px;">
              <div style="font-family:ui-monospace,'Segoe UI Mono','SFMono-Regular',Menlo,monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${muted};">
                Hi Khalid,
              </div>
              <h1 style="margin:8px 0 0;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:32px;line-height:1.15;letter-spacing:-0.02em;color:${ink};">
                ${esc(p.name)}<span style="color:${muted};font-style:italic;">${company}</span><br/>
                <span style="color:${accent};font-style:italic;">would like to talk to you.</span>
              </h1>
            </td>
          </tr>

          <!-- Project shape -->
          <tr>
            <td style="padding:24px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                ${[
                  ["Reply to", `<a href="mailto:${esc(p.email)}" style="color:${accent};text-decoration:none;border-bottom:1px solid ${hairline};">${esc(p.email)}</a>`],
                  ["Company", esc(p.company || "—")],
                  ["Cadence", esc(p.cadence)],
                  ["Delivery", esc(p.delivery)],
                  ["Volume", esc(volume)],
                ]
                  .map(
                    ([k, v]) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid ${hairline};font-family:ui-monospace,'Segoe UI Mono','SFMono-Regular',Menlo,monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${muted};width:120px;vertical-align:top;">${k}</td>
                  <td style="padding:10px 0;border-bottom:1px solid ${hairline};font-size:14px;color:${ink};">${v}</td>
                </tr>`,
                  )
                  .join("")}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 32px 4px;">
              <div style="font-family:ui-monospace,'Segoe UI Mono','SFMono-Regular',Menlo,monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${muted};margin-bottom:10px;">
                The project
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:17px;line-height:1.55;color:${ink};white-space:pre-wrap;">${para(p.message)}</div>
            </td>
          </tr>

          <!-- CTA strip -->
          <tr>
            <td style="padding:28px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:${ink};border-radius:999px;">
                    <a href="mailto:${esc(p.email)}?subject=Re%3A%20your%20Fastscraping%20brief" style="display:inline-block;padding:12px 22px;color:${paper};font-size:14px;font-weight:500;text-decoration:none;letter-spacing:-0.005em;">
                      Reply to ${esc(p.name.split(" ")[0] || p.name)} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 32px 24px;border-top:1px solid ${hairline};background:${bg};">
              <div style="font-family:ui-monospace,'Segoe UI Mono','SFMono-Regular',Menlo,monospace;font-size:11px;color:${muted};letter-spacing:0.04em;">
                Fastscraping · contact-form delivery<br/>
                Encrypted in transit · we never share client briefs.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactText(p: ContactPayload): string {
  const volume = VOLUME_LABELS[p.volume] ?? p.volume;
  return [
    `New contact note from ${p.name}${p.company ? ` at ${p.company}` : ""}.`,
    ``,
    `Reply to : ${p.email}`,
    `Company  : ${p.company || "—"}`,
    `Cadence  : ${p.cadence}`,
    `Delivery : ${p.delivery}`,
    `Volume   : ${volume}`,
    ``,
    `--- The project ---`,
    p.message,
    ``,
    `— Fastscraping contact form`,
  ].join("\n");
}
