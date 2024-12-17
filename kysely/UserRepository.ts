import { db } from './database'
import {NewUser, User} from "@/kysely/types";



export async function createUser(user: NewUser) {
    return await db.insertInto('user')
        .values(user)
        .returningAll()
        .executeTakeFirstOrThrow()
}

export async function findUserById(id: number) {
    return await db.selectFrom('user')
        .where('id', '=', id)
        .selectAll()
        .executeTakeFirst()
}

export async function findUsers(criteria: Partial<User>) {
    let query = db.selectFrom('user')

    if (criteria.user_id) {
        query = query.where('id', '=', criteria.user_id)
    }

    if (criteria.created_at) {
        query = query.where('created_at', '=', criteria.created_at)
    }
    return await query.selectAll().execute()
}