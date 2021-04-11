import { compare, hash } from "./services/hashManager";
import { deleteFriend, insertFriend } from "../data/friendDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { authenticationData, signupInputDTO, user } from "./entities/user";
import { setPosts } from "../data/model/userModel";
import { friendInputDTO } from "./entities/friend";
import { getFeed, getFeedByType } from "../controller/feedController";
import { selectFeed, selectFeedByType } from "../data/feedDatabase";

export const businessGetFeed = async (
   tokenData: any
) => {
   
   if (!tokenData) {
      throw new Error('Token inválido')
   }

   const userData = {
      id: tokenData.id
   }

   const feedData = await selectFeed(userData);

   return feedData;
}

export const businessGetFeedByType = async (
   type: any,
   tokenData: any
) => {
   
   if (!type) {
      throw new Error('Por favor, preencha o campo tipo')
   }

   if (!tokenData) {
      throw new Error('Token inválido')
   }

   const feedData = await selectFeedByType(type);

   return feedData;
}