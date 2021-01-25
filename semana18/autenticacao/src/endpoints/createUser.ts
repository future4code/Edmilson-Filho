import axios from 'axios';
import { Request, Response } from 'express';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { insertUser } from '../data/insertUser';

axios.post("/signup", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Fill out all of the fields.")
        }

        if (email === "" || password === "") {
            throw new Error("Don't leave the fields in blank.")
        }

        const input = {
            "email": email,
            "password": password
        }

        const id = generateId();

        await insertUser(id, input.email, input.password);
        
        const token = generateToken({
            id
        });
        
        res.status(200).send({
            token
        });
    } catch (err) {
        err.status(400).send({
            message: err.message
        });
    }
});