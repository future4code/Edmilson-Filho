import { Request, Response } from 'express';
import { generateToken } from '../services/generateToken';
import { compare } from '../services/hashManager';
import { selectRecipe } from '../data/selectRecipe';
import { getData } from '../services/getData';
import dayjs from 'dayjs'

export async function getRecipe(req: Request, res: Response) {
    try {
        const { id, role = "normal" } = req.params;
        const token = req.headers.authorization as string;

        if (!id) {
            throw new Error("Please, fill out all of the fields.");
        }

        if (id === "") {
            throw new Error("Don't leave any field in blank.");
        }
        
        let recipe = await selectRecipe(id);

        const date = dayjs(recipe.date, "YYYY-MM-DD").format('DD/MM/YYYY');
        console.log(date);
        recipe = {...recipe, date}
        
        console.log(recipe);

        if (!recipe) {
            throw new Error("Invalid ID.");
        }
        
        const correctToken = getData(token);
        console.log(correctToken);
        if (!correctToken) {
            throw new Error("Invalid token.");
        }

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            date: recipe.date
        });
    } catch (err) {
        res.status(400).send(
            err.message | err.sqlMessage
        )
    }
}