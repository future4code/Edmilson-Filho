import { connection } from "./connection"
import { signupInputDTO, user } from "../business/entities/user"
import { friend, friendInputDTO } from "../business/entities/friend"

export const insertFriend = async(
   userData: friend
) => {
   try {
      await connection.insert({
         friend_one_id: userData.id,
         friend_two_id: userData.friendId
      })
      .into('followed_user')

   } catch (err) {
      console.log(err.message)
   }
}

export const deleteFriend = async(
   userData: friend
) => {
   try {
      await connection.delete()
      .where("friend_one_id", userData.id)
      .into('followed_user')
   } catch (err) {
      console.log(err.message)
   }
}