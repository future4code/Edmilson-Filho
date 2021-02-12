import { compare, hash } from "./services/hashManager";
import { deleteFriend, insertFriend } from "../data/friendDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { authenticationData, signupInputDTO, user } from "./entities/user";
import { setPosts } from "../data/model/userModel";
import { friendInputDTO } from "./entities/friend";

export const businessAddFriend = async (
   input: friendInputDTO,
   tokenData: any
) => {

   if (
      !input.friendId
   ) {
      throw new Error('Preencha o campo friendId')
   }
   
   if (!tokenData) {
      throw new Error('Token inválido')
   }

   let userData = {
      id: tokenData.id,
      friendId: input.friendId
   }

   const idArray = [ userData.id, userData.friendId];

   idArray.sort();
   console.log(idArray);

   userData = {
      id: idArray[0],
      friendId: idArray[1]
   }
   
   await insertFriend(userData)
}

export const businessRemoveFriend = async (
   input: friendInputDTO,
   tokenData: any
) => {

   if (
      !input.friendId
   ) {
      throw new Error('Preencha o campo friendId')
   }
   
   if (!tokenData) {
      throw new Error('Token inválido')
   }

   const userData = {
      id: tokenData.id,
      friendId: input.friendId
   }

   await deleteFriend(userData)
}