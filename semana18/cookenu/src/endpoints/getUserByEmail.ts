import { Request, Response } from 'express';
import { generateToken } from '../services/generateToken';
import { compare } from '../services/hashManager';
import { selectUserByEmail } from '../data/selectUserByEmail';

export async function getUserByEmail(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Please, fill out all of the fields.");
        }

        if (email === "" || password === "") {
            throw new Error("Don't leave any field in blank.");
        }
        
        if (!email.includes("@")) {
            throw new Error("Invalid email.");
        }

        const userData = {
            "email": email,
            "password": password
        }

        const user = await selectUserByEmail(userData.email);

        const correctPassword = compare(userData.password, user.password);
        console.log(userData.password, user.password)

        if (!correctPassword) {
            throw new Error("Invalid password.");
        }

        const token = generateToken({
            id: user.id,
            role: user.role
        });

        res.status(200).send({
            token
        });
    } catch (err) {
        res.status(400).send(
            err.message | err.sqlMessage
        )
    }
}