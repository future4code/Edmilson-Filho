import { buyTicket } from "../controller/ticketController";
import { insertTicket, removeTicket } from "../data/ticketDatabase";
import { USER_ROLES } from "./entities/user";
import { getTokenData } from "./services/authenticator";

export const businessCreateTicket = async (
    ticket: any,
    token: string
): Promise<void> => {
    if (
        !ticket.name ||
        !ticket.bandConcertId ||
        !ticket.price ||
        !ticket.quantity
    ) {
        throw new Error("Por favor, preencha todos os campos (name, id, bandConcertId e price)");
    }

    const tokenData = getTokenData(token);

    if (!tokenData) {
        throw new Error("Token inválido")
    }

    if (tokenData.role !== USER_ROLES.ADMIN) {
        throw new Error("Apenas administradores podem criar ticket.");
    }

    await insertTicket(ticket);
}

export const businessBuyTicket = async (
    ticket: any,
    token: string
): Promise<void> => {
    if (
        !ticket.name ||
        !ticket.quantity
    ) {
        throw new Error("Por favor, preencha todos os campos (name, quantity)");
    }

    const tokenData = getTokenData(token);

    if (!tokenData) {
        throw new Error("Token inválido");
    }

    const result = await removeTicket(ticket, tokenData);

    if (result.changedRows === 0) {
        throw new Error("Nome inválido")
    }
    
}