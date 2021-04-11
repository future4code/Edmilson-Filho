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
   post: any
) => {
   try {
      await connection('Post')
         .insert({
            id: post.id,
            photo: post.photo,
            descricao: post.descricao,
            created_at: post.created_atDate,
            type: post.type,
            user_id: post.userId
         })
   } catch (err) {
      console.log(err.message);
   }
}

export const insertPostLike = async (
   postData: any
) => {
   console.log(postData.id)
   console.log(postData.postId)
   try {
      await connection('Post_likes')
         .insert({
            id: postData.postId,
            user_id: postData.userId
         })
   } catch (err) {
      console.log(err.message);
   }
}

export const removePostLike = async (
   postData: any
) => {
   console.log(postData.id)
   console.log(postData.postId)
   try {
      await connection('Post_likes')
         .delete()
         .where({id: postData.postId})
         .andWhere({user_id: postData.userId})
   } catch (err) {
      console.log(err.message);
   }
}

export const insertPostComment = async (
   postData: any
) => {
   console.log(postData.postId)
   console.log(postData.comment)
   try {
      await connection('Post_comments')
         .insert({
            post_id: postData.postId,
            comment: postData.comment,
            user_id: postData.userId
         })
   } catch (err) {
      console.log(err.message);
   }
}