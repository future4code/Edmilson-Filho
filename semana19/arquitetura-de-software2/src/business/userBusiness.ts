import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail, selectUserById } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { authenticationData, signupInputDTO, user, USER_ROLES } from "./entities/user";
import { selectTaskByUserId } from "../data/taskDatabase";
import { setTasks } from "../data/model/userModel";

export const businessSignup = async (
   input: signupInputDTO
) => {

   if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const id: string = generateId()

   const cypherPassword: string = await hash(input.password);

   await insertUser(input)

   const token: string = generateToken({
      id,
      role: input.role
   })

   return token
}

export const businessLogin = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
   }

   const user: user = await selectUserByEmail(email)

   if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const passwordIsCorrect: boolean = await compare(password, user.password)

   if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
   }

   const token: string = generateToken({
      id: user.id,
      role: user.role
   })

   return token
}

export const businessGetProfile = async (id: string) => {
   const user = await selectUserById(id);

   const userTasks = await selectTaskByUserId(id);
   setTasks(user, userTasks);
}