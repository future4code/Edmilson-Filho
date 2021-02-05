import { insertPost, selectPostById } from "../data/postDatabase"
import { generateId } from "./services/idGenerator"

export const businessCreatePost = async (
   photo: string,
   descricao: string,
   created_at: string,
   type: string
   ) => {

   if (
      !photo ||
      !descricao ||
      !created_at ||
      !type
   ) {
      throw new Error('"photo", "descricao", "created_at" e "type" são obrigatórios')
   }

   const id: string = generateId()

   await insertPost({
      id,
      photo,
      descricao,
      created_at,
      type
   })
}

export const businessGetPostById = async(
   id: string
)=>{

   const result = await selectPostById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const postWithUserInfo = {
      id: result.id,
      photo: result.photo,
      descricao: result.descricao,
      created_at: result.created_at,
      type: result.type
   }

   return postWithUserInfo
}