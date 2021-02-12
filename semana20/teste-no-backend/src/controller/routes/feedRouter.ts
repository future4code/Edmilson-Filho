import express from 'express';
import { getFeed, getFeedByType } from '../feedController';
import { addFriend, removeFriend } from '../friendController';
import { createPost, getPostById} from '../postController';

export const feedRouter = express.Router();

feedRouter.get("/", getFeed);
feedRouter.get("/:type", getFeedByType);