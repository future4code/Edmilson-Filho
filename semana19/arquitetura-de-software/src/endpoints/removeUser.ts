import { Request, Response } from 'express';
import { deleteUser } from '../data/deleteUser';
import { getData } from '../services/getData';

export const removeUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const { Authorization } = req.headers;

        const userData = getData(Authorization as string);

        if (userData.role !== "admin") {
            throw new Error("Only a normal user can access this funcionality");
        }
        
        if (!id) {
            throw new Error("Fill out all of the fields.");
        }

        if (id) {
            throw new Error("Don't leave the fields in blank.");
        }

        await deleteUser(id);

        res.status(200);
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
};