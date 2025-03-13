import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const shortLinksTable = mysqlTable('short_links', {
  id: int().autoincrement().primaryKey(),
  url: varchar({ length: 255 }).notNull(),
  shortcode: varchar( "short_code",{length:20 }).notNull().unique(),
});
