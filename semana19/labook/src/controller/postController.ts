import { Request, Response } from "express";
import { businessCreatePost, businessGetPostById } from "../business/postBusiness";

export const getPostById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

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