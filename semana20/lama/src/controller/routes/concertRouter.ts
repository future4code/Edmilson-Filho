import express from 'express';
import { addConcertImage, createConcert, getConcert, getConcertImage } from '../concertController';

export const concertRouter = express.Router();

concertRouter.post("/create", createConcert);
concertRouter.get("/", getConcert);
concertRouter.post("/addImage", addConcertImage);
concertRouter.get("/:id/getImage", getConcertImage);