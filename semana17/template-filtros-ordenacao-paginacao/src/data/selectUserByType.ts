import { connection } from "../index"

export default async function selectUser(
   type: any
) {
   console.log(type)
   const result = await connection
   .select("*")
   .from("aula48_exercicio")
   .where("type", type)

   console.log("Type em select", result)
   
   return result
 }