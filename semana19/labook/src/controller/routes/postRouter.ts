import express from 'express';
import { insertPostLike } from '../../data/postDatabase';
import { commentPost, createPost, deslikePost, getPostById, likePost} from '../postController';

export const postRouter = express.Router();

postRouter.put("/create", createPost);
postRouter.get("/:id", getPostById);
postRouter.post("/like", likePost);
postRouter.delete("/like", deslikePost);
postRouter.put("/comment", commentPost);