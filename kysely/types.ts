import {
    ColumnType,
    Generated,
    Insertable,
    Selectable,
    Updateable,
} from 'kysely'

export interface Database {
    user: UserTable
    user_word_inventory: UserWordQuantityTable
    word: WordTable
}

export interface UserTable {
    user_id: Generated<number>
    email: string //how to validate?
    created_at: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

export interface WordTable {
    word: string
}

export type Word = Selectable<WordTable>

export interface UserWordQuantityTable {
    user_id: number
    word: string
}

export type UserWordQuantity = Selectable<UserWordQuantityTable>
export type NewUserWordQuantity = Insertable<UserWordQuantityTable>
export type UserWordQuantityUpdate = Updateable<UserWordQuantityTable>