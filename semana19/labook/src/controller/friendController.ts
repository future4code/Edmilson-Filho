import { Request, Response } from "express";
import { friendInputDTO } from "../business/entities/friend";
import { signupInputDTO } from "../business/entities/user";
import { businessAddFriend, businessRemoveFriend } from "../business/friendBusiness";
import { getTokenData } from "../business/services/authenticator";
import { businessLogin, businessSignup } from "../business/userBusiness";
// import { setPosts } from "../data/model/userModel";
import { selectPostById } from "../data/postDatabase";

export const addFriend = async (
   req: Request,
   res: Response
) => {
   try {
      const { friendId } = req.body
      const token = req.headers.authorization as string;

      const input: friendInputDTO = {
         friendId
      }

      const tokenData = getTokenData(token);

      await businessAddFriend(
         input,
         tokenData
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

export const removeFriend = async (
   req: Request,
   res: Response
) => {
   try {
      const { friendId } = req.body
      const token = req.headers.authorization as string;

      const input: friendInputDTO = {
         friendId
      }

      const tokenData = getTokenData(token);

      await businessRemoveFriend(
         input,
         tokenData
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
