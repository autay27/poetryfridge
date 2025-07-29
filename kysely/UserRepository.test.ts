import { db } from './database'
import * as UserRepository from './UserRepository'
import {after, afterEach, before, describe, it} from "node:test";
import { strict as assert } from "node:assert";
import {sql} from "kysely";
import dotenv from "dotenv";

dotenv.config({ path: '.env.test', override: true })

describe('UserRepository', () => {
    before(async () => {
        console.log("Testing on database " + process.env.POSTGRES_DB)
        // eventually this part will be replaced by a migration to insert useful test data
        await db.schema.createTable('user')
            .addColumn('user_id', 'serial', (cb) => cb.primaryKey())
            .addColumn('email', 'varchar', (cb) => cb.notNull())
            .addColumn('created_at', 'timestamp', (cb) =>
                cb.defaultTo(sql`now()`).notNull()
            )
            .execute()
    })

    afterEach(async () => {
        await sql`truncate table ${sql.table('user')}`.execute(db)
    })

    after(async () => {
        await db.schema.dropTable('user').execute()
    })

    it('should create a person', async () => {
        await UserRepository.createUser({
            email: 'hi@bye.com'
        })

        const users = await db.selectFrom('user').selectAll().execute()
        assert.strictEqual(users.length, 1)
        assert.strictEqual(users[0].email, 'hi@bye.com')
    })

})