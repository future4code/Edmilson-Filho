import { Request, Response } from "express";
import { signupInputDTO } from "../business/entities/user";
import { getTokenData } from "../business/services/authenticator";
import { businessLogin, businessSignup } from "../business/userBusiness";
// import { setPosts } from "../data/model/userModel";
import { selectPostById } from "../data/postDatabase";

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password);

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password } = req.body

      const input: signupInputDTO = {
         name,
         email,
         password
      }

      const token = await businessSignup(
         input
      )

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}

// export const getProfile = async(req: Request, res: Response) => {
//    const verifiedToken = getTokenData(req.headers.authorization as string);
//    const id = verifiedToken.id;

//    const profile = await businessGetProfile(id);

//    res.status(200).send(profile);
// }