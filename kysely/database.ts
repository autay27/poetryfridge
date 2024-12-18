import { Database } from "@/kysely/types";
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import dotenv from "dotenv";

dotenv.config()

const dialect = new PostgresDialect({
    pool: new Pool({
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_DB,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT),
        max: 10
    })
})

export const db = new Kysely<Database>({
    dialect,
})