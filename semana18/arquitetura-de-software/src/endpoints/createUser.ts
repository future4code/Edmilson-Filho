import { Request, Response } from 'express';

export async function createUser(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body;

        if (!name, !email, !password) {
            throw new Error("Field name, email or password wasn't fill out.");
        }

        if (!name, !email, !password) {
            throw new Error("Field name, email or password wasn't fill out.");
        }

        const tokenData = {
            "password": password,
            "role": role
        }
        
        const id = generateId();
        
        const token = generateToken(tokenData);
        
        const cypherPassword = await hash(userDataToken.password);

        const userData = {
            "id": id,
            "name": name,
            "password": cypherPassword,
            "role": role
        }

        res.status(200).send({token});
    } catch (err) {
        res.status(400).send(err.message | err.sqlMessage);
    }
}