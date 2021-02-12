import { Request, Response } from "express";
import { businessCommentPost, businessCreatePost, businessDeslikePost, businessGetPostById, businessLikePost } from "../business/postBusiness";
import { getTokenData } from "../business/services/authenticator";

export const getPostById = async (
   req: Request,
   res: Response
) => {
   try {
      const { id } = req.params;
      const token = req.headers.authorization as string;

      getTokenData(token);

      const postWithUserInfo = await businessGetPostById(id, token)
      
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
         type
      } = req.body

      const token = req.headers.authorization as string;

      const tokenData = getTokenData(token);

      const created_at = Date.now();

      await businessCreatePost(
         photo,
         descricao,
         created_at,
         type,
         tokenData
      )

      res.status(201).end()

   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end()
   }
}

export const likePost = async (
   req: Request,
   res: Response
) => {
   try {

      const {
         postId
      } = req.body

      const token = req.headers.authorization as string;

      const tokenData = getTokenData(token);

      console.log(tokenData)
      console.log(postId)

      await businessLikePost(
         postId,
         tokenData
      )

      res.status(201).end()
   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end()
   }
}

export const deslikePost = async (
   req: Request,
   res: Response
) => {
   try {

      const {
         postId
      } = req.body

      const token = req.headers.authorization as string;

      const tokenData = getTokenData(token);

      console.log(tokenData)
      console.log(postId)

      await businessDeslikePost(
         postId,
         tokenData
      )

      res.status(201).end()
   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end()
   }
}

export const commentPost = async (
   req: Request,
   res: Response
) => {
   try {

      const {
         postId,
         comment
      } = req.body

      const token = req.headers.authorization as string;

      const tokenData = getTokenData(token);

      await businessCommentPost(
         tokenData,
         comment,
         postId
      )

      res.status(201).end()
   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end()
   }
}
