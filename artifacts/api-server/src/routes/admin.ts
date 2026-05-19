import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { db, newsletterSubscribers, volunteerSubmissions, contactSubmissions, suggestions } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

const ADMIN_PASSWORD = process.env["ADMIN_PASSWORD"] ?? "summit2029";

function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers["x-admin-token"];
  if (!token || token !== ADMIN_PASSWORD) {
    res.status(401).json({ ok: false, message: "Unauthorized" });
    return;
  }
  next();
}

router.post("/admin/auth", (req, res) => {
  const { password } = req.body as { password?: string };
  if (password === ADMIN_PASSWORD) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ ok: false, message: "Incorrect password" });
  }
});

router.get("/admin/newsletter", requireAdmin, async (_req, res) => {
  const rows = await db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.createdAt));
  res.json(rows);
});

router.get("/admin/volunteers", requireAdmin, async (_req, res) => {
  const rows = await db.select().from(volunteerSubmissions).orderBy(desc(volunteerSubmissions.createdAt));
  res.json(rows);
});

router.get("/admin/contacts", requireAdmin, async (_req, res) => {
  const rows = await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  res.json(rows);
});

router.get("/admin/suggestions", requireAdmin, async (_req, res) => {
  const rows = await db.select().from(suggestions).orderBy(desc(suggestions.createdAt));
  res.json(rows);
});

export default router;
