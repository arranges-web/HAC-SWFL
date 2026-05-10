import { pgTable, serial, text, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

/**
 * Contact form submissions from the homepage Contact section and /contact page.
 * Captured by ContactWizard.
 */
export const contactLeadsTable = pgTable("contact_leads", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  service: text("service"),           // repair / tune-up / install / emergency / air-quality / other
  urgency: text("urgency"),           // today / this-week / this-month / exploring
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  zip: text("zip"),
  contactPref: text("contact_pref"),  // phone / text / email
  details: text("details"),
  source: text("source"),             // url path the submission came from
  status: text("status").notNull().default("new"), // new / contacted / converted / dismissed
});

export const insertContactLeadSchema = createInsertSchema(contactLeadsTable).omit({
  id: true,
  createdAt: true,
  status: true,
});
export type InsertContactLead = z.infer<typeof insertContactLeadSchema>;
export type ContactLead = typeof contactLeadsTable.$inferSelect;

/**
 * Comfort Club PMA enrollments from the multi-step PmaSignupWizard on /membership.
 */
export const pmaEnrollmentsTable = pgTable("pma_enrollments", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  propertyType: text("property_type"),  // single-family / condo / multi-family / commercial
  systems: integer("systems").notNull().default(1),
  systemAge: text("system_age"),        // 0-5 / 5-10 / 10-15 / 15+ / unknown
  billing: text("billing").notNull(),   // annual / monthly
  startDate: text("start_date"),        // asap / next-30 / after-60
  annualPriceCents: integer("annual_price_cents").notNull(),
  monthlyPriceCents: integer("monthly_price_cents").notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  address: text("address"),
  city: text("city"),
  zip: text("zip"),
  notes: text("notes"),
  status: text("status").notNull().default("pending"), // pending / active / cancelled
});

export const insertPmaEnrollmentSchema = createInsertSchema(pmaEnrollmentsTable).omit({
  id: true,
  createdAt: true,
  status: true,
});
export type InsertPmaEnrollment = z.infer<typeof insertPmaEnrollmentSchema>;
export type PmaEnrollment = typeof pmaEnrollmentsTable.$inferSelect;

/**
 * AI Comfort Specialist (SupportBot) chat inquiries.
 * Stored as the bot completes its scripted lead-capture flow.
 */
export const botInquiriesTable = pgTable("bot_inquiries", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  issue: text("issue"),                       // user-described or quick-pick category
  choice: text("choice"),                     // schedule / callback
  transcript: jsonb("transcript"),            // optional full message log
  source: text("source"),                     // url path the bot was opened on
  status: text("status").notNull().default("new"),
});

export const insertBotInquirySchema = createInsertSchema(botInquiriesTable).omit({
  id: true,
  createdAt: true,
  status: true,
});
export type InsertBotInquiry = z.infer<typeof insertBotInquirySchema>;
export type BotInquiry = typeof botInquiriesTable.$inferSelect;
