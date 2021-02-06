import { Request, Response } from "express";
import { businessCreatePost, businessGetPostById } from "../business/postBusiness";
import { getTokenData } from "../business/services/authenticator";

export const getPostById = async (
   req: Request,
   res: Response
) => {
   try {
      const { id } = req.params;
      const token = req.headers.authorization as string;

      if (
         !id ||
         !token ||
         id === "" ||
         token === ""
         ) {
         throw new Error("Preencha os campos de id e token.");
      }

      if (!token) {
         throw new Error("Token inválido.");
      }

      getTokenData(token);

      const postWithUserInfo = await businessGetPostById(id)
      
      res.status(200).send(postWithUserInfo)

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const createPost = async (
   req: Request,
   res: Response
) => {
   try {

      const {
         photo,
         descricao,
         created_at,
         type
      } = req.body

      const token = req.headers.authorization as string;

      getTokenData(token);

      await businessCreatePost(
         photo,
         descricao,
         created_at,
         type
      )

      res.status(201).end()

   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end()
   }
}