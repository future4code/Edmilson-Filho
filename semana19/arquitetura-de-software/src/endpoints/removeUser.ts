import { Request, Response } from 'express';
import { deleteUser } from '../data/deleteUser';
import { getData } from '../services/getData';

export const removeUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const token = req.headers.authorization;

        const userData = getData(token as string);

        console.log(userData)
        if (userData.role !== "ADMIN") {
            throw new Error("Only a admin user can access this funcionality");
        }
        
        if (!id) {
            throw new Error("Fill out all of the fields.");
        }

        await deleteUser(id);

        res.status(200).end();
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
};