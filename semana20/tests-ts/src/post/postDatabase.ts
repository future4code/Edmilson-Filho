import { connection } from "./connection";

export const insertPost = async (
   post: any
) => {
   try {
      await connection('Post')
         .insert({
            id: post.id,
            photo: post.photo,
            descricao: post.descricao,
            created_at: post.created_at,
            type: post.type,
            user_id: post.user_id
         })
   } catch (err) {
      console.log(err.message);
   }
}

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

export const removePost = async (
   postData: any
) => {
   console.log(postData.id)
   console.log(postData.id)
   try {
      await connection('Post')
         .delete()
         .where({id: postData.id})
   } catch (err) {
      console.log(err.message);
   }
}