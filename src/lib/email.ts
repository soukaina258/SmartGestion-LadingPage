import "server-only";

import { Resend } from "resend";

import { getServerEnv } from "@/lib/env";
import type { CleanContact } from "@/lib/validation/contact";

/**
 * Lazily-instantiated Resend client. Created on first use so that simply
 * importing this module doesn't throw when the API key is absent at build time.
 */
let client: Resend | null = null;

/** Returns true only if an email provider is actually configured. */
export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY?.trim();
}

function getResend(): Resend {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

/** Basic HTML-escaping so user input can't inject markup into the email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface SendLeadEmailResult {
  ok: boolean;
  id?: string;
  error?: string;
  /** True when no email provider is configured (email intentionally skipped). */
  skipped?: boolean;
}

/**
 * Send the "new lead" notification email to the business inbox.
 *
 * Returns a result object instead of throwing, so the caller can decide how to
 * react (the lead is already persisted in the DB, so a failed email should NOT
 * fail the whole request — it should just be logged/flagged).
 */
export async function sendLeadNotification(
  lead: CleanContact & { id: string; createdAt: string },
): Promise<SendLeadEmailResult> {
  // No provider configured yet — skip cleanly instead of throwing.
  if (!isEmailConfigured()) {
    return { ok: true, skipped: true };
  }

  const { notificationTo, notificationFrom } = getServerEnv();

  const subject = `New lead: ${lead.name}`;

  const rows: Array<[string, string]> = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone ?? "—"],
    ["Company", lead.company ?? "—"],
    ["Received", new Date(lead.createdAt).toLocaleString("en-GB")],
    ["Lead ID", lead.id],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;color:#0f172a;">
      <h2 style="margin:0 0 16px;font-size:18px;">New contact / demo request</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;background:#f1f5f9;font-weight:600;width:120px;vertical-align:top;border-bottom:1px solid #e2e8f0;">${escapeHtml(
              label,
            )}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${escapeHtml(
              value,
            )}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 8px;font-size:15px;">Message</h3>
      <div style="white-space:pre-wrap;padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;line-height:1.5;">${escapeHtml(
        lead.message,
      )}</div>
    </div>
  `;

  const text = [
    "New contact / demo request",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    lead.message,
  ].join("\n");

  try {
    const { data, error } = await getResend().emails.send({
      from: notificationFrom,
      to: notificationTo,
      subject,
      // Lets the business reply straight to the lead.
      replyTo: lead.email,
      html,
      text,
    });

    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true, id: data?.id };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown email error",
    };
  }
}
