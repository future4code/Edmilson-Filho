import { connection } from '..';

const TABLE_NAME: string = "User";

export async function updatePassword(email: string, password: string) {
    await connection.raw(`
        UPDATE ${TABLE_NAME}
        SET password = "${password}"
        WHERE email = "${email}";
    `)
}