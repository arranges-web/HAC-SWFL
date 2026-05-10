import { Router, type Request, type Response, type NextFunction } from "express";
import { desc, eq } from "drizzle-orm";
import {
  db,
  contactLeadsTable,
  pmaEnrollmentsTable,
  botInquiriesTable,
  insertContactLeadSchema,
  insertPmaEnrollmentSchema,
  insertBotInquirySchema,
} from "@workspace/db";

const router: Router = Router();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const provided =
    req.header("x-admin-password") ?? (typeof req.query.key === "string" ? req.query.key : "");
  if (!ADMIN_PASSWORD) {
    res.status(503).json({ error: "ADMIN_PASSWORD env var not set on the server" });
    return;
  }
  if (!provided || provided !== ADMIN_PASSWORD) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }
  next();
}

// Public: submit contact lead
router.post("/leads/contact", async (req, res) => {
  const parsed = insertContactLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_payload", issues: parsed.error.issues });
    return;
  }
  const [row] = await db.insert(contactLeadsTable).values(parsed.data).returning();
  res.status(201).json({ id: row.id, ok: true });
});

// Public: submit PMA enrollment
router.post("/leads/pma", async (req, res) => {
  const parsed = insertPmaEnrollmentSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_payload", issues: parsed.error.issues });
    return;
  }
  const [row] = await db.insert(pmaEnrollmentsTable).values(parsed.data).returning();
  res.status(201).json({ id: row.id, ok: true });
});

// Public: submit bot inquiry
router.post("/leads/bot", async (req, res) => {
  const parsed = insertBotInquirySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "invalid_payload", issues: parsed.error.issues });
    return;
  }
  const [row] = await db.insert(botInquiriesTable).values(parsed.data).returning();
  res.status(201).json({ id: row.id, ok: true });
});

// Admin: list all leads (most recent first)
router.get("/admin/leads", requireAdmin, async (_req, res) => {
  const [contacts, pmas, bots] = await Promise.all([
    db.select().from(contactLeadsTable).orderBy(desc(contactLeadsTable.createdAt)).limit(500),
    db.select().from(pmaEnrollmentsTable).orderBy(desc(pmaEnrollmentsTable.createdAt)).limit(500),
    db.select().from(botInquiriesTable).orderBy(desc(botInquiriesTable.createdAt)).limit(500),
  ]);
  res.json({
    contacts,
    pmaEnrollments: pmas,
    botInquiries: bots,
    counts: {
      contacts: contacts.length,
      pmaEnrollments: pmas.length,
      botInquiries: bots.length,
    },
  });
});

// Admin: update lead status (works for any of the 3 tables via `?type=`)
router.patch("/admin/leads/:type/:id", requireAdmin, async (req, res) => {
  const { type, id } = req.params;
  const parsedId = Number(id);
  if (!Number.isFinite(parsedId)) {
    res.status(400).json({ error: "invalid_id" });
    return;
  }
  const status = typeof req.body?.status === "string" ? req.body.status : null;
  if (!status) {
    res.status(400).json({ error: "missing_status" });
    return;
  }
  if (type === "contact") {
    await db
      .update(contactLeadsTable)
      .set({ status })
      .where(eq(contactLeadsTable.id, parsedId));
  } else if (type === "pma") {
    await db
      .update(pmaEnrollmentsTable)
      .set({ status })
      .where(eq(pmaEnrollmentsTable.id, parsedId));
  } else if (type === "bot") {
    await db
      .update(botInquiriesTable)
      .set({ status })
      .where(eq(botInquiriesTable.id, parsedId));
  } else {
    res.status(400).json({ error: "unknown_type" });
    return;
  }
  res.json({ ok: true });
});

export default router;
