import { connection } from ".."
import { UserData } from "../types/types";

export const deleteUser = async (id: string): Promise<UserData> => {
    const result: any = await connection
    .delete()
    .from("User")
    .where({ id });

    return result[0];
} 