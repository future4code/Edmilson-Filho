import { Request, Response } from 'express';
import axios from 'axios';
import { generateToken } from '../services/generateToken';
import { selectUserByEmail } from '../data/selectUserByEmail';

axios.get("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Fill out all of the fields.")
        }

        const userData = {
            "email": email,
            "password": password
        }

        const user = await selectUserByEmail(userData.email);

        if (email === "") {
            throw new Error("Don't leave the fields in blank.")
        }

        if (!email.includes("@")) {
            throw new Error("Invalid email.")
        }

        if (password !== userData.password) {
            throw new Error("Invalid password.")
        }
        
        const token = generateToken({
            id: user.id
        });
        
        res.status(200).send({
            token
        });
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
})