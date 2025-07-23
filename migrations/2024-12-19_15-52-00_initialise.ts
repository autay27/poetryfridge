import {Kysely, sql} from 'kysely'

export async function up(db: Kysely<never>): Promise<void> {

    await db.schema.createTable('user')
        .addColumn('user_id', 'serial', (cb) => cb.primaryKey())
        .addColumn('email', 'varchar', (cb) => cb.notNull())
        .addColumn('created_at', 'timestamp', (cb) =>
            cb.defaultTo(sql`now()`).notNull()
        )
        .execute()

    console.log('User table created successfully')

    await db.schema.createTable('word')
        .addColumn('word', 'varchar', (cb) => cb.primaryKey())
        .execute()

    console.log('Word table created successfully')

    await db.schema.createTable('user_word_quantity')
        .addColumn('user_id', 'serial', (cb) => cb.primaryKey())
        .addColumn('word', 'varchar', (cb) => cb.primaryKey())
        .execute()

    console.log('Word quantity table created successfully')
}