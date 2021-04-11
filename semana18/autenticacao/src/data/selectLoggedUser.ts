import { connection } from ".."
import { AuthenticationData } from "../types/types";
import { UserData } from "../types/types";

export const selectLoggedUser = async (id: AuthenticationData): Promise<UserData> => {
    const result: any = await connection
    .select("*")
    .from("User")
    .where({ id });

    return result[0];
} 