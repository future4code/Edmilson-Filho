import { loginInputDTO, signupInputDTO, User } from '../business/entities/user';
import { connection } from './connection';

const tableName = "User";

export const insertUser = async (
    input: User
): Promise<void> => {
    try {
        await connection
        .insert({
            id: input.id,
            email: input.email,
            name: input.name,
            password: input.password,
            role: input.role
        })
        .into(tableName);
    } catch (err) {
        throw new Error(err.message || err.sqlMessage);
    }
}

export const selectUserByEmail = async (
    input: loginInputDTO
): Promise<User> => {
    try {
        const result = await connection
        .select("*")
        .where({email: input.email})
        .from(tableName)
        
        return result[0]
    } catch (err) {
        throw new Error(err.message || err.sqlMessage);
    }
}