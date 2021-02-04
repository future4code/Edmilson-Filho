import { connection } from "../index"

export default async function selectAllUsersOrdered(order: string):Promise<any> {
   const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio
      ORDER BY ${order}
   `)

   return result[0]
}