import { connection } from "./connection";
import { post } from "../business/entities/post";
import { toPostModel } from "./model/postModel";

export const selectPostById = async (
   id: string
): Promise<any> => {
   const result = await connection.raw(`
        SELECT *
        FROM Post
        WHERE Post.id = '${id}';
    `)

   return result[0][0]
}

export const insertPost = async (
   post: post
) => {
   await connection('Post')
      .insert({
         id: post.id,
         photo: post.photo,
         descricao: post.descricao,
         created_at: post.created_at,
         type: post.type
      })
}