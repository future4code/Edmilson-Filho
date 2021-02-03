import { connection } from '..';

const userTableName = "User";

export const insertUser = async (
    userData: any
    ) => {

    const id = userData.id;
    const name = userData.name;
    const email = userData.email;
    const password = userData.password;
    const role = userData.role;
        
    await connection
    .insert({
        id,
        name,
        email,
        password,
        role
    })
    .into(userTableName);
}; 