import { Router, type IRouter } from "express";
import {
  SubscribeNewsletterBody,
  SubmitVolunteerBody,
  SubmitContactBody,
  SubmitSuggestionBody,
} from "@workspace/api-zod";
import {
  db,
  newsletterSubscribers,
  volunteerSubmissions,
  contactSubmissions,
  suggestions,
} from "@workspace/db";
import { sendEmail, getSenderEmail } from "../lib/email";

const router: IRouter = Router();

const interestLabels: Record<string, string> = {
  mentoring: "Mentoring",
  events: "Events",
  fundraising: "Fundraising",
  skilled_trade_teaching: "Skilled Trade Teaching",
  administrative: "Administrative",
  security_monitoring: "Security / Monitoring",
  other: "Other",
};

router.post("/newsletter", async (req, res) => {
  const parsed = SubscribeNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, message: "Invalid input" });
    return;
  }
  const { name, email } = parsed.data;

  await db.insert(newsletterSubscribers).values({ name, email });

  await sendEmail({
    to: email,
    subject: "Welcome to The Summit Center newsletter",
    text: `Hi ${name},\n\nThanks for signing up for updates from The Summit Center. You'll be the first to hear about progress on the build, volunteer opportunities, and community events in the 29229 area.\n\n— The Summit Center team`,
  });

  res.json({ ok: true, message: "You're on the list. Check your inbox for a welcome note." });
});

router.post("/volunteer", async (req, res) => {
  const parsed = SubmitVolunteerBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, message: "Invalid input" });
    return;
  }
  const { name, email, phone, neighborhood, interests, message } = parsed.data;

  await db.insert(volunteerSubmissions).values({
    name,
    email,
    phone,
    neighborhood,
    interests: interests as string[],
    message: message ?? null,
  });

  const interestList = interests.map((i) => interestLabels[i] ?? i).join(", ");

  // Confirmation to volunteer
  await sendEmail({
    to: email,
    subject: "Thanks for volunteering with The Summit Center",
    text: `Hi ${name},\n\nThank you for offering your time. We've received your volunteer interest form and someone from our team will reach out within a few days.\n\nYou told us you'd like to help with: ${interestList}\n\nIf any details change, just reply to this email.\n\n— The Summit Center team`,
  });

  // Notify staff
  const sender = getSenderEmail();
  if (sender) {
    await sendEmail({
      to: sender,
      replyTo: email,
      subject: `New volunteer interest: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nNeighborhood: ${neighborhood}\nInterests: ${interestList}\nMessage:\n${message ?? "(none)"}`,
    });
  }

  res.json({ ok: true, message: "Thanks for stepping up — we'll be in touch soon." });
});

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, message: "Invalid input" });
    return;
  }
  const { name, email, subject, message } = parsed.data;

  await db.insert(contactSubmissions).values({ name, email, subject, message });

  const sender = getSenderEmail();
  if (sender) {
    await sendEmail({
      to: sender,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  }

  // Auto-acknowledge to sender
  await sendEmail({
    to: email,
    subject: "We got your message — The Summit Center",
    text: `Hi ${name},\n\nThanks for reaching out about "${subject}". We've received your message and will get back to you as soon as we can.\n\n— The Summit Center team`,
  });

  res.json({ ok: true, message: "Message sent. We'll get back to you soon." });
});

router.post("/suggestions", async (req, res) => {
  const parsed = SubmitSuggestionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, message: "Invalid input" });
    return;
  }
  const { name, neighborhood, suggestion } = parsed.data;

  await db.insert(suggestions).values({
    name: name ?? null,
    neighborhood: neighborhood ?? null,
    suggestion,
  });

  // Notify staff (no auto-reply since name/email are optional)
  const sender = getSenderEmail();
  if (sender) {
    await sendEmail({
      to: sender,
      subject: "New community suggestion",
      text: `From: ${name ?? "(anonymous)"} ${neighborhood ? `(${neighborhood})` : ""}\n\n${suggestion}`,
    });
  }

  res.json({ ok: true, message: "Thanks for the suggestion. We read every one." });
});

export default router;
