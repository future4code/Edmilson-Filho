import { connection } from "./connection"
import knex from 'knex';
const ticketTableName = "Ingresso"
const UserTicketTableName = "User_ticket"

export const insertTicket = async (
    ticket: any
): Promise<void> => {
    try {
        await connection
        .insert({
            name: ticket.name,
            band_concert_id: ticket.bandConcertId,
            price: ticket.price,
            quantity: ticket.quantity
        })
        .into(ticketTableName)
    } catch (err) {
        throw new Error(err.message);
    }
}

export const removeTicket = async (
    ticket: any,
    tokenData: any
): Promise<any> => {
    try {
        let result2;
        await connection
        // .raw(`
        //     UPDATE ${ticketTableName}
        //     SET quantity = quantity - ${ticket.quantity}, totalQuantity = totalQuantity + ${ticket.quantity};
            
        //     INSERT INTO ${UserTicketTableName} (user_id, quantity) VALUES (
        //         '${tokenData.id}',
        //         ${ticket.quantity}
        //     );
        // `)
        // .update(ticketTableName, `quantity - ${ticket.quantity}`, `totalQuantity = totalQuantity + ${ticket.quantity}`)
        
        .update(result2 = await connection.raw(`UPDATE ${ticketTableName}
        SET quantity = quantity - ${ticket.quantity},
        totalQuantity = totalQuantity + ${ticket.quantity}
        WHERE name = '${ticket.name}'`))
        .insert({
            user_id: tokenData.id,
            quantity: ticket.quantity
        })
        .into(UserTicketTableName)

        return result2[0];
    } catch (err) {
        throw new Error(err.message);
    }
}