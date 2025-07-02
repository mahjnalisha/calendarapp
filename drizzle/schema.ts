import { DAYS_OF_WEEK_IN_ORDER } from "@/constants";
import { int } from "drizzle-orm/mysql-core";
import { boolean, index, integer, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow()
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date())
// Define events table with all the fields

export const EventTable = pgTable("events",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        // uuid("id") unique name id
        uname: text("uname").notNull(),
        description: text("description"),
        durationInMinutes: integer("durationInMinutes").notNull(),
        clerkUserId: text("clerkUserId").notNull(),
        isActive: boolean("isActive").notNull().default(true),
        createdAt: createdAt,
        updatedAt: updatedAt
    },
    table => ([
        index("clerkUserIdIndex").on(table.clerkUserId) // index on clerkUserId for fast quering
    ])

)

export const ScheduleTable = pgTable("schedules", {

    id: uuid("id").primaryKey().defaultRandom(),
    timezone: text("timezone").notNull(),
    clerkUserId: text("clerkUserId").notNull().unique(),
    createdAt,
    updatedAt

})

//Define postgres enum for ScheduleDayofWeek
export const scheduleDayOfWeekEnum = pgEnum("day", DAYS_OF_WEEK_IN_ORDER);


export const ScheduleAvailabilities = pgTable("scheduleavailabilites",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        scheduleId: uuid("scheduleId").notNull().references(() => ScheduleTable.id, { onDelete: "cascade" }), //cascade delete when schedule is delete 
        startTime: text("startTime").notNull(),
        endTime: text("endTime").notNull(),
        dayOfWeek: scheduleDayOfWeekEnum("dayOfWeek").notNull(),

    },
    table => ([
        index("scheduleId").on(table.scheduleId)
    ])

)