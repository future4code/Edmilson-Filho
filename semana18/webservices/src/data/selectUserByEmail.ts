import { connection } from ".."

const userTableName = "User";

export async function selectUserByEmail (email: string): Promise<any> {
    try {
    const result = await connection
    .select("*")
    .from(userTableName)
    .where({ email });

    return result[0];
    } catch (err) {
        console.log(err.message)
    }
} 