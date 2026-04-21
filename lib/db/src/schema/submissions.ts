import { pgTable, serial, text, timestamp, jsonb } from "drizzle-orm/pg-core";

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const volunteerSubmissions = pgTable("volunteer_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  neighborhood: text("neighborhood").notNull(),
  interests: jsonb("interests").notNull().$type<string[]>(),
  message: text("message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const suggestions = pgTable("suggestions", {
  id: serial("id").primaryKey(),
  name: text("name"),
  neighborhood: text("neighborhood"),
  suggestion: text("suggestion").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
