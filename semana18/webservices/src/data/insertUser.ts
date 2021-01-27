import { connection } from '..';

const userTableName = "User";

export const insertUser = async (
    id: string,
    email: string,
    password: string,
    cep: string,
    numero: number,
    complemento: string,
    role: string
    ) => {
    await connection
    .insert({
        id,
        email,
        password,
        cep,
        numero,
        complemento,
        role
    })
    .into(userTableName);
}; 