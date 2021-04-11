import { connection } from '..';

const userTableName = "User";

export const insertUser = async (
    id: string,
    email: string,
    password: string) => {
    await connection
    .insert({
        id,
        email,
        password
    })
    .into(userTableName);
}; 