import { connection } from ".."
import { AuthenticationData } from "../types/types";
import { UserData } from "../types/types";

export async function selectUserById (id: AuthenticationData): Promise<UserData> {
    const result: any = await connection
    .select("*")
    .from("User")
    .where({ id });

    return result[0];
} 