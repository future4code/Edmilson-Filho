import { Request, Response } from 'express';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { insertUser } from '../data/insertUser';
import { hash } from '../services/hashManager';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            throw new Error("Fill out all of the fields.");
        };

        if (name === "" || email === "" || password === "") {
            throw new Error("Don't leave the fields in blank.");
        };

        const cypherPassword = await hash(password);

        const id = generateId();
        
        const userData = {
            "id": id,
            "name": name,
            "email": email,
            "password": cypherPassword,
            "role": role,
        };

        await insertUser(userData);
        
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