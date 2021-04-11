import express from 'express';
import { addFriend, removeFriend } from '../friendController';
import { createPost, getPostById} from '../postController';

export const friendRouter = express.Router();

friendRouter.put("/add", addFriend);
friendRouter.delete("/remove", removeFriend);