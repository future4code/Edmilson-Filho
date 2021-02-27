import { connection } from "./connection"
import { signupInputDTO, user } from "../business/entities/user"

// export const insertUser = async(
//    user: user
// ) => {
//    await connection.insert({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       password: user.password,
//    }).into('User')
// }

// export const selectUserByEmail = async (
//    email: string
// ): Promise<user> => {
//    try {
//       const result = await connection("User")
//          .select("*")
//          .where({ email })

//       return {
//          id: result[0].id,
//          name: result[0].name,
//          email: result[0].email,
//          password: result[0].password
//       }

//    } catch (error) {
//       throw new Error(error.slqMessage || error.message)
//    }
// }

export const selectUserById = async (
   id: string
): Promise<user> => {
   try {
      const result = await connection("User")
         .select("*")
         .where({ id })
         console.log(result[0])
         
      return result[0];

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}

export const selectAllUsers = async (
): Promise<user> => {
   try {
      const result = await connection("User")
         .select("*")
         console.log(result[0])
      return result[0];
   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}