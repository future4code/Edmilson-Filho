import { connection } from ".."

const userTableName = "User";

export const selectAllUsers = async(): Promise<any> => {
    const result = await connection
    .select("*")
    .from(userTableName)
console.log(result)
    return result;
} 