import { Request, Response } from 'express';

export async function getUserByEmail(req: Request, res: Response) {
    try {
        const { email, password } req.body;

        if (!email, !password) {
            throw new Error("Please, fill out all of the fields.");
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

        if (!correctPassword) {
            throw new Error("Invalid password.");
        }

        if (!email === "") {
            throw new Error("Invalid password.");
        }

        if (password !== userData.password) {
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