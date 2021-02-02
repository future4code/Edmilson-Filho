import { connection } from '..';

const tableName = "Recipe";

export async function insertRecipe(recipeData: any) {
    try {
        const result: any = await connection
        .insert({
            title: recipeData.title,
            description: recipeData.description,
            date: recipeData.date
        })
        .into(tableName);

        return result[0];
    } catch (err) {
        console.log(err.message)
    };
};