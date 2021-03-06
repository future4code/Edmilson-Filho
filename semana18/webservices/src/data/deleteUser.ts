import { connection } from ".."
import { UserData } from "../types/types";

export async function deleteUser (id: string): Promise<UserData> {
    const result: any = await connection
    .delete()
    .from("User")
    .where({ id });

    return result[0];
} 