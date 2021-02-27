import express from 'express';

export const ticketRouter = express.Router();

ticketRouter.post("/create", ticketController);