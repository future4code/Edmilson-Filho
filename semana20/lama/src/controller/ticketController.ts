import { Request, Response } from 'express';
import { businessBuyTicket, businessCreateTicket } from '../business/ticketBusiness';

export const createTicket = async (
    req: Request,
    res: Response
): Promise<void> => {
   try {
        const { name, bandConcertId, price, quantity } = req.body;
        const token = req.headers.authorization as string;

        const ticket = {
            name,
            bandConcertId,
            price,
            quantity
        }

        await businessCreateTicket(ticket, token);
        
        res.status(201).send({message: "Ticket criado com sucesso!"});
   } catch (err) {
       res.send(err.message)
   }
}

export const buyTicket = async (
    req: Request,
    res: Response
): Promise<void> => {
   try {
        const name = req.body.name;
        const quantity = Number(req.body.quantity);
        const token = req.headers.authorization as string;

        const ticketData = {
            name,
            quantity
        }

        await businessBuyTicket(ticketData, token);
        
        res.status(201).send({message: "Ticket criado com sucesso!"});
   } catch (err) {
       res.send(err.message)
   }
}