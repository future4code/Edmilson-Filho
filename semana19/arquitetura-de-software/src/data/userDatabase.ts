import { connection } from './connection';
import { User } from '../business/entities/user';

const userTableName = "User";

export const insertUser = async (
    userData: User
    ) => {

    await connection
    .insert({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role
    })
    .into(userTableName);
}; 

export const selectUserByEmail = async(email: string): Promise<any> => {
    const result: any = await connection
    .select("*")
    .from(userTableName)
    .where({ email });

    console.log(result);
    return result[0];
} 

export const selectAllUsers = async(): Promise<User> => {
    const result: User = await connection
    .select("*")
    .from(userTableName);

    return result;
} ;

export const deleteUser = async(
    id: string
    ): Promise<any> => {
    try {
        await connection
        .delete()
        .from(userTableName)
        .where({ id });
    } catch (err) {
        console.log(err)
    }
} 