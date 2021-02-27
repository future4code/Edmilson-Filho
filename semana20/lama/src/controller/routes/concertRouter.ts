import express from 'express';
import { createConcert, getConcert } from '../concertController';

export const concertRouter = express.Router();

concertRouter.post("/create", createConcert);
concertRouter.get("/", getConcert);