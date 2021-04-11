import { Request, Response } from 'express';
import { businessCreateBand, businessGetBand } from '../business/bandBusiness';

export const createBand = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, gender, responsible } = req.body;
        const token = req.headers.authorization as string;

        const bandData = {
            name,
            gender,
            responsible
        }

        await businessCreateBand(bandData, token);

        res.status(201).send({
            message: "Banda criada com sucesso!"
        })
    } catch (err) {
        res.send(err.message)
    }
}

export const getBand = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const input = req.query;

        const result = await businessGetBand(input);

        res.send({
            result
        })
    } catch (err) {
        res.send(err.message)
    }
}