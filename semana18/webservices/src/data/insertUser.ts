import { connection } from '..';

const userTableName = "User";

export async function insertUser (
    userData: any
) {
    console.log(user)
    try {
        const id: string = userData.id;
        const email: string = userData.email;
        const password: string = userData.password;
        const cep: string = userData.cep;
        const numero: string = userData.numero;
        const complemento: string = userData.complemento;
        const role: string = userData.role;

        const result = await connection
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

        return result[0];
    } catch (err) {
        console.log(err.message)
    }
}; 