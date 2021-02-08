import { Request, Response } from "express";
import { friendInputDTO } from "../business/entities/friend";
import { signupInputDTO } from "../business/entities/user";
import { businessGetFeed, businessGetFeedByType } from "../business/feedBussiness";
import { businessAddFriend, businessRemoveFriend } from "../business/friendBusiness";
import { getTokenData } from "../business/services/authenticator";
import { businessLogin, businessSignup } from "../business/userBusiness";
// import { setPosts } from "../data/model/userModel";
import { selectPostById } from "../data/postDatabase";

export const getFeed = async (
   req: Request,
   res: Response
) => {
   try {
      const token = req.headers.authorization as string;

      const tokenData = getTokenData(token);

      const feedData = await businessGetFeed(
         tokenData
      )

      res
         .status(200)
         .send(
            feedData
         )

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const getFeedByType = async (
   req: Request,
   res: Response
) => {
   try {
      const token = req.headers.authorization as string;
      const { type } = req.params;

      const tokenData = getTokenData(token);

      const feedData = await businessGetFeedByType(
         type,
         tokenData
      )

      console.log(type);
      res
         .status(200)
         .send(
            feedData
         )

   } catch (error) {
      res.status(400).send(error.message)
   }
}