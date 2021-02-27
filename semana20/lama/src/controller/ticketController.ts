import { Request, Response } from 'express';

export const createTicket = async (
    req: Request,
    res: Response
): Promise<void> => {
   try {
        const { name, id, bandConcertId, price } = req.body;
        const token = req.headers.authorization;

        const ticket = {
            name,
            id,
            bandConcertId,
            price
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
        const { name, quantity } = req.body;

        const ticketData = {
            name,
            quantity
        }

        await businessBuyTicket(ticketData);
        
        res.status(201).send({message: "Ticket criado com sucesso!"});
   } catch (err) {
       res.send(err.message)
   }
}