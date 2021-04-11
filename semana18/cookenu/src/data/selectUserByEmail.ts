import { connection } from '..';

const tableName = "User";

export async function selectUserByEmail(email: string): Promise<any> {
    try {
        const result: any = await connection
        .select("*")
        .from(tableName)
        .where({ email })
        
        return result[0];
    } catch (err) {
        console.log(err.message);
    }
}