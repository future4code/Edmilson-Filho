import { Request, Response } from 'express';
import { loginInputDTO, signupInputDTO } from '../business/entities/user';
import { businessLogin, businessSignup } from '../business/userBusiness';

export const signup = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { email, name, password, role } = req.body;

        const inputData: signupInputDTO = {
            email,
            name,
            password,
            role
        }

        const token: string = await businessSignup(inputData);

        res
        .status(201)
        .send({
            message: "Conta criada com sucesso!",
            token
        })
    } catch (err) {
        res
        .status(400)
        .send(err.message);
    }
}

export const login = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, password } = req.body;

        const inputData: loginInputDTO = {
            email,
            password
        }

        const token: string = await businessLogin(inputData);
        
        res
        .send({
            message: "Logado com sucesso!",
            token
        })
    } catch (err) {
        res
        .status(400)
        .send(err.message);
    }
}