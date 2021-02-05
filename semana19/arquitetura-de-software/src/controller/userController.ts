import destroyConnection, { Request, Response } from 'express';
import * as userBusiness from '../business/userBusiness';

export const signup = async (
        req: Request,
        res: Response
    ): Promise<void> => {
    try {
        const { name, email, password, role } = req.body;

        const token = await userBusiness.businessSignup(
            name, email, password, role
        );
        
        res.status(201).send({
            message: "Usuário criado!",
            token
        });
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    };

    await destroyConnection();
};

export const login = async (
        req: Request,
        res: Response
    ): Promise<void> => {
    try {
        const { email, password } = req.body;

        const token = await userBusiness.businessLogin(email, password);
        
        res.status(200).send({
            token
        });
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    };

    await destroyConnection();
};

export const getAllUsers = async (
        req: Request,
        res: Response
    ): Promise<void> => {
    try {
        const token = req.headers.authorization as string;

        const user = userBusiness.businessGetAllUsers(token);

        res.status(200).send(
            user
        );
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    };
};

export const removeUser = async (
        req: Request,
        res: Response
    ): Promise<void> => {
    try {
        const { id } = req.params;
        const token: string = req.headers.authorization as string;

        await userBusiness.businessRemoveUser(id, token);

        res.status(201).send("Usuário deletado!");
    } catch (err) {
        res.status(400).send(
            err.message || err.sqlMessage
        );
    };
};