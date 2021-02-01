import { connection } from '..';

const tableName = "User";

export async function insertUser(userData: any) {
    try {
        const result: any = await connection
        .insert({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: userData.password
        })
        .into(tableName);

        return result[0];
    } catch (err) {
        console.log(err.message)
    };
};