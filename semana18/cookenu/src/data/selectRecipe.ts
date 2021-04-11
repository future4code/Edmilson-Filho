import { connection } from '..';

const tableName = "Recipe";

export async function selectRecipe(id: string): Promise<any> {
    try {
        const result: any = await connection
        .select("*")
        .from(tableName)
        .where({ id })
        
        return result[0];
    } catch (err) {
        console.log(err.message);
    }
}