import { verify } from "jsonwebtoken"

export const businessCreateConcert = async (
    ticket: any,
    token: string
): Promise<void> => {
    if (
        !ticket.name ||
        !ticket.id ||
        !ticket.bandConcertId ||
        !ticket.price
    ) {
        throw new Error("Por favor, preencha todos os campos (name, id, bandConcertId e price)");
    }

    const userData = verify(token, process.env.JWT_KEY as string);

    if (!userData) {
        throw new Error("Token inválido")
    }

    if (userData.role != "admin") {
        throw new Error("Apenas administradores podem criar ticket.");
    }

    await insertTicket(ticket);
}