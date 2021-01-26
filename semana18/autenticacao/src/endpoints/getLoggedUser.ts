import { Request, Response } from 'express';
import { getData } from '../services/getData';
import { selectLoggedUser } from '../data/selectLoggedUser';

export const getLoggedUser = async (req: Request, res: Response) => {
    try {        
        const { Authorization } = req.headers;

        if (!Authorization) {
            throw new Error("Fill out the field.");
        }

        if (Authorization === "") {
            throw new Error("Don't leave the field in blank.");
        }

        const token = getData(Authorization as string);

        const userData = await selectLoggedUser(token);

        res.status(200).send({
            id: userData.id,
            email: userData.email
        })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}