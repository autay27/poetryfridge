import { db } from './kysely/database'
import * as UserRepository from './kysely/UserRepository'
import {after, afterEach, before, describe, it} from "node:test";
import {sql} from "kysely";

describe('UserRepository', () => {
    before(async () => {
        await db.schema.createTable('user')
            .addColumn('id', 'serial', (cb) => cb.primaryKey())
            .addColumn('email', 'varchar', (cb) => cb.notNull())
            .addColumn('created_at', 'timestamp', (cb) =>
                cb.notNull().defaultTo(new Date())
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
    })

})