import knex from 'knex';
import { connection } from '..';

const tableName = "User";

export async function selectUser(id: any) {
    try {
        const result: any = connection
        .select("id", "email")
        .from(tableName)
        .where(id)
        
        return result[0];
    } catch (err) {
        console.log(err.message);
    }
}