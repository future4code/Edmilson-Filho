import { connection } from '..';

const userTableName = "User";

export const insertUser = async (
    id: string,
    email: string,
    password: string,
    role: string
    ) => {
    await connection
    .insert({
        id,
        email,
        password,
        role
    })
    .into(userTableName);
}; 