import { Request, Response } from 'express';
import { generateToken } from '../services/generateToken';
import { selectUserByEmail } from '../data/selectUserByEmail';
var bcrypt = require('bcryptjs');

export async function getUserByEmail (req: Request, res: Response): Promise<void> {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Fill out all of the fields.")
        }

        if (!req.body.email.includes("@")) {
            throw new Error("Invalid email");
        }

        const userData = {
            "email": email,
            "password": password
        }

        console.log("User", userData.email)
        const user = await selectUserByEmail(userData.email);
        console.log("User", user)

        const validPassword = bcrypt.compare(userData.password, user.password);

        if (!validPassword) {
            throw new Error("Invalid password.");
        }

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
            id: user.id,
            role: user.role,
            cep: user.cep
        });
        
        res.status(200).send({
            token
        });

}