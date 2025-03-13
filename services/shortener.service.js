import { db } from "../config/db.js";
import { shortLinksTable } from "../drizzle/schema.js";
import { eq } from "drizzle-orm"; // Equality helper

// Retrieve all short links from the database
export const getAllShortLinks = async () => {
  return await db.select().from(shortLinksTable);
};

// Retrieve a link by its shortcode
export const getLinkByShortcode = async (shortcode) => {
  const results = await db
    .select()
    .from(shortLinksTable)
    .where(eq(shortLinksTable.shortcode, shortcode));
  return results[0];
};

// Insert a new short link record into the database
export const insertShortLink = async ({ url, finalshortcode }) => {
  await db.insert(shortLinksTable).values({ url, shortcode: finalshortcode });
};
