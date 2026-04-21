import sgMail from "@sendgrid/mail";
import { logger } from "./logger";

let configured = false;

function ensureConfigured(): boolean {
  const apiKey = process.env["SENDGRID_API_KEY"];
  const sender = process.env["SENDGRID_SENDER"];

  if (!apiKey || !sender) {
    return false;
  }

  if (!configured) {
    sgMail.setApiKey(apiKey);
    configured = true;
  }
  return true;
}

export function getSenderEmail(): string | undefined {
  return process.env["SENDGRID_SENDER"];
}

export interface EmailMessage {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

/**
 * Send an email via SendGrid. If SendGrid env vars are not configured,
 * log the intended message and return false rather than failing the request.
 * This lets the form endpoints work end-to-end before keys are added.
 */
export async function sendEmail(msg: EmailMessage): Promise<boolean> {
  const sender = getSenderEmail();

  if (!ensureConfigured() || !sender) {
    logger.warn(
      { to: msg.to, subject: msg.subject },
      "SendGrid not configured (SENDGRID_API_KEY / SENDGRID_SENDER missing) — email queued in logs only",
    );
    return false;
  }

  try {
    await sgMail.send({
      to: msg.to,
      from: sender,
      subject: msg.subject,
      text: msg.text,
      ...(msg.html ? { html: msg.html } : {}),
      ...(msg.replyTo ? { replyTo: msg.replyTo } : {}),
    });
    logger.info({ to: msg.to, subject: msg.subject }, "Email sent");
    return true;
  } catch (err) {
    logger.error({ err, to: msg.to }, "Failed to send email");
    return false;
  }
}
