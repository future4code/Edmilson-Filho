import { connection } from "../index"

export default async function selectAllUsers(filter: string, order: string, offset: number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${filter}
       LIMIT ${offset}
       OFFSET ${offset}
    `)
 
    return result[0]
 }