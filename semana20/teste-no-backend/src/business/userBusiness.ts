// import { compare, hash } from "./services/hashManager";
import { selectAllUsers, selectUserById } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { authenticationData, signupInputDTO, user, USER_ROLE } from "./entities/user";
import { convertStringToUserRole,  } from "../data/model/userModel";

// export const businessSignup = async (
//    input: signupInputDTO
// ) => {

//    if (
//       !input.name ||
//       !input.email ||
//       !input.password
//    ) {
//       throw new Error('Preencha os campos "name", "email" e "password"')
//    }

//    const id: string = generateId()

//    const cypherPassword: string = await hash(input.password);

//    const userData: any = {...input, id, password: cypherPassword}

//    await insertUser(userData)

//    // const token: string = generateToken({
//    //    id
//    // });

//    const token = await businessLogin(input.email, input.password)

//    return token
// }

export const businessGetUserById = async (
   id: string
) => {
   // if (!id ) {
   //    throw new Error("'id' é obrigatório")
   // }

   const user: user = await selectUserById(id)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   // const passwordIsCorrect: boolean = await compare(password, user.password)
  
   // const passwordIsCorrect: boolean = await hashGenerator.compareHash(password, user.password)
   
   // if (!passwordIsCorrect) {
   //    throw new Error("Usuário não encontrado ou senha incorreta")
   // }

   // const token: string = generateToken({
   //    id: user.id
   // })


   // const token = tokenGenerator.generate;
   
   return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
   }
}

export const getAllUsers = async (role: string) => {
   if (convertStringToUserRole(role) !== USER_ROLE.ADMIN) {
      throw new Error("You must be an admin to access this endpoint")
   }

   const users: any = await selectAllUsers();

   return users.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
   }))
}

export const businessGetProfile = async (id: string) => {
   const user = await selectUserById(id);
}