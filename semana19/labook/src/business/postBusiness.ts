import { insertPost, insertPostComment, insertPostLike, removePostLike, selectPostById } from "../data/postDatabase"
import { getTokenData } from "./services/authenticator"
import { generateId } from "./services/idGenerator"

export const businessCreatePost = async (
      photo: string,
      descricao: string,
      created_at: any,
      type: string,
      tokenData: any
   ) => {

   if (
      !photo ||
      !descricao ||
      !created_at ||
      !type ||
      photo === "" ||
      descricao === "" ||
      created_at === "" ||
      type === ""
   ) {
      throw new Error('"photo", "descricao", "created_at" e "type" são obrigatórios')
   }

   if (!tokenData) {
      throw new Error("Token inválido.")
   }

   const created_atDate = new Date(created_at);
   console.log(created_atDate)

   const id: string = generateId()

   await insertPost({
      id,
      photo,
      descricao,
      created_atDate,
      type,
      userId: tokenData.id
   })
}

export const businessGetPostById = async(
   id: string,
   token: string
) => {
   
   if (!token) {
      throw new Error("Token inválido.")
   }

   const result = await selectPostById(id)

   if (!result) {
      throw new Error("Post não encontrado")
   }

   const postWithUserInfo = {
      id: result.id,
      photo: result.photo,
      descricao: result.descricao,
      created_at: result.created_at,
      type: result.type,
      userId: result.user_id
   }

   return postWithUserInfo
}

export const businessLikePost = async(
   postId: string,
   tokenData: any
) => {
   
   if (!tokenData) {
      throw new Error("Token inválido.")
   }

   const postData = {
      postId,
      userId: tokenData.id
   }

   console.log(postData)

   await insertPostLike(postData)
}

export const businessDeslikePost = async(
   postId: string,
   tokenData: any
) => {
   
   if (!tokenData) {
      throw new Error("Token inválido.")
   }

   const postData = {
      postId,
      userId: tokenData.id
   }

   console.log(postData)

   await removePostLike(postData)
}

export const businessCommentPost = async(
   tokenData: any,
   comment: string,
   postId: string
) => {
   
   if (!tokenData) {
      throw new Error("Token inválido.")
   }

   const postData = {
      userId: tokenData.id,
      comment,
      postId
   }

   console.log(postData)

   await insertPostComment(postData)
}