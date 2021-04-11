import { Request, Response } from 'express';
import { getData } from '../services/getData';
import { selectUserById } from '../data/selectUserById';

export async function getUserByIdAdmin (req: Request, res: Response): Promise<void> {
    try {        
        const { Authorization } = req.headers;

        if (!Authorization) {
            throw new Error("Fill out the field.");
        }

        if (Authorization === "") {
            throw new Error("Don't leave the field in blank.");
        }

        const token = await getData(Authorization as string);

        const userData: any = await selectUserById(token);

        if (userData.role !== "normal") {
            res.statusCode = 401;
            throw new Error("Only a normal user can access this funcionality");
        }

        res.status(200).send({
            id: userData.id,
            email: userData.email
        })
    } catch (err) {
        res.send({ message: err.message })
    }
}