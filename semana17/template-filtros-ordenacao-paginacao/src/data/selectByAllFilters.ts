import { connection } from "../index"

export default async function selectByAllFilters(type: string, order: string, limit: number, offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ${type && `WHERE type = "${type}"`}
       ORDER BY ${order}
       LIMIT ${limit}
       OFFSET ${offset}
    `)
 
    return result[0]
 }