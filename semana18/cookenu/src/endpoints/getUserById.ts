import { Request, Response } from 'express';
import { getData } from '../services/getData';
import { selectUserById } from '../data/selectUserById';

export const getUserById = async (req: Request, res: Response) => {
    try {        
        const { authorization } = req.headers;

        if (!authorization) {
            throw new Error("Fill out the field.");
        }

        if (authorization === "") {
            throw new Error("Don't leave the field in blank.");
        }

        console.log(authorization)
        console.log(req.headers)

        const token = getData(authorization as string);

        const userData: any = await selectUserById(token);

        res.status(200).send({
            id: userData.id,
            email: userData.email
        })
    } catch (err) {
        res.send({ message: err.message })
    }
}