import { Request, Response } from 'express';
import { getData } from '../services/getData';
import { selectUserById } from '../data/selectUserById';

export const getUserById = async (req: Request, res: Response) => {
    try {        
        const { Authorization } = req.headers;

        if (!Authorization) {
            throw new Error("Fill out the field.");
        }

        if (Authorization === "") {
            throw new Error("Don't leave the field in blank.");
        }

        const token = getData(Authorization as string);

        const userData: any = await selectUserById(token);

        res.status(200).send({
            id: userData.id,
            email: userData.email,
            role: userData.role,
        })
    } catch (err) {
        res.send({ message: err.message })
    }
}