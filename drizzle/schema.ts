import { int } from "drizzle-orm/mysql-core";
import { boolean, index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow()
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date())
// Define events table with all the fields
export default pgTable(
    "events",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        // uuid("id") unique name id
        uname: text("uname").notNull(),
        description: text("description"),
        durationInMinutes: int("durationInMinutes").notNull(),
        clerkUserId: text("clerkUserId").notNull(),
        isActive: boolean("isActive").notNull().default(true),
        createdAt: createdAt,
        updatedAt: updatedAt
    },
    table => ([
        index("clerkUserIdIndex").on(table.clerkUserId)
    ])
);