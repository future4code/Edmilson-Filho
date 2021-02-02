import { Request, Response } from 'express';
import { insertRecipe } from '../data/insertRecipe';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { hash } from '../services/hashManager';

export async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { title, description, date } = req.body;

        if (!title || !description || !date) {
            throw new Error("Por favor, preencha todos os campos.");
        }

        if (title === "" || description === "" || date === "") {
            throw new Error("Nome, description ou senha em branco.");
        }

        const recipeData = {
            "title": title,
            "description": description,
            "date": date
        }

        await insertRecipe(recipeData);

        res.status(200).send("Receita criada com sucesso");
    } catch (err) {
        res.status(400).send(err.message | err.sqlMessage);
    }
}