import express from 'express';
import { createBand, getBand } from '../bandController';

export const bandRouter = express.Router();

bandRouter.post("/create", createBand);
bandRouter.get("/get", getBand);