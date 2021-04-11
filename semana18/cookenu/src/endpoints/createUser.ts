import { Request, Response } from 'express';
import { insertUser } from '../data/insertUser';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { hash } from '../services/hashManager';

export async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password, role = "normal" } = req.body;

        if (!email || !name || !password) {
            throw new Error("Por favor, preencha todos os campos.");
        }

        if (email === "" || name === "" || password === "") {
            throw new Error("Nome, email ou senha em branco.");
        }

        if (password.length < 7) {
            throw new Error("A senha precisa ter o mínimo de 7 caracteres.");
        }

        const id = generateId();

        const token = generateToken({
            id: id,
            role: role
        });

        const cypherPassword = await hash(password)

        const userData = {
            "id": id,
            "name": name,
            "email": email,
            "password": cypherPassword
        }

        await insertUser(userData);

        res.status(200).send(token);
    } catch (err) {
        res.status(400).send(err.message | err.sqlMessage);
    }
}