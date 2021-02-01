import { Request, Response } from 'express';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { insertUser } from '../data/insertUser';
import { hash } from '../services/hashManager';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, cep, numero, role, complemento } = req.body;

        if (!email || !password || !role || !cep || !numero || !complemento) {
            throw new Error("Fill out all of the fields.");
        }

        if (email === "" || password === "" || role === "" || cep === ""|| numero === "" || complemento === "") {
            throw new Error("Don't leave the fields in blank.");
        }

        const cypherPassword = await hash(password);

        const id = generateId();

        let userData = {
            "id": id,
            "email": email,
            "password": cypherPassword,
            "cep": cep,
            "numero": numero,
            "role": role,
            "complemento": complemento
        }

        await insertUser(userData);
        
        console.log("userData", userData)
        const token = generateToken({
            id,
            role,
            cep
        });

        console.log("Token", token)
        
        res.status(200).send({
            token
        });
    } catch (err) {
        res.status(400).send(
            err.message || err.sqlMessage
        );
    }
};