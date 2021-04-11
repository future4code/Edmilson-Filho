import express from 'express';
import { buyTicket, createTicket } from '../ticketController';

export const ticketRouter = express.Router();

ticketRouter.post("/create", createTicket);
ticketRouter.post("/buy", buyTicket);