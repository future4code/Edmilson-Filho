import { connection } from "./connection"

const ticketTableName = "Ingresso"

export const insertTicket = async (
    ticket: any
): Promise<void> => {
    try {
        await connection
        .insert(ticket)
        .into(ticketTableName)
    } catch (err) {
        throw new Error(err.message);
    }
}

export const removeTicket = async (
    ticket: any
): Promise<void> => {
    try {
        await connection
        
        .into(ticketTableName)
    } catch (err) {
        throw new Error(err.message);
    }
}