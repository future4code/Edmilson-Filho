import { connection } from "../index"

export default async function selectUser(
   query: any
) {
   console.log(query)
   const result = await connection
   .select("*")
   .from("aula48_exercicio")
   .where("name", "like", `%${query}%`)

   console.log(result)
   
   return result[0]
 }