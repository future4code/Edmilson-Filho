import { connection } from ".."
import { AuthenticationData } from "../types/types";
import { UserData } from "../types/types";

export const selectUserById = async (
    userData: any
    ): Promise<UserData> => {
        const id = userData.id;
        
    const result: any = await connection
    .select("*")
    .from("User")
    .where({ id });

    return result[0];
} 