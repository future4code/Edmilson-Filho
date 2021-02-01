import { Request, Response } from 'express';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { insertUser } from '../data/insertUser';
import { hash } from '../services/hashManager';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            throw new Error("Fill out all of the fields.");
        }

        if (email === "" || password === "" || role === "") {
            throw new Error("Don't leave the fields in blank.");
        }

        const cypherPassword = await hash(password);

        const userData = {
            "email": email,
            "password": cypherPassword,
            "role": role,
        }

        const id = generateId();

        await insertUser(id, userData.email, userData.password, userData.role);
        
        const token = generateToken({
            id,
            role
        });
        
        res.status(200).send({
            token
        });
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
};