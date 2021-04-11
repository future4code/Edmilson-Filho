import { connection } from "./connection";
import { post } from "../business/entities/post";
import { toPostModel } from "./model/postModel";

export const selectFeed = async (
   feed: any
) => {
   try {
      const result = await connection('Post')
         .select("*")
         .join('followed_user', 'followed_user.friend_two_id', 'Post.user_id')
         .orderBy('Post.created_at')
         
      return result;
   } catch (err) {
      console.log(err.message);
   }
}

export const selectFeedByType = async (
   type: any
) => {
   console.log('Database', type);
   try {
      const result = await connection('Post')
         .select("*")
         .where({type})
         .orderBy('created_at')
         .limit(5)
      return result;
   } catch (err) {
      console.log(err.message);
   }
}