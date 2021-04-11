import { Request, Response } from 'express';
import { getAddressByCep } from '../services/getAddressByCep';

const URL = "http://viacep/ws/";

export async function getAddressInfo (req: Request, res: Response): Promise<void> {
    let errorCode: number = 400;

    const { cep } = req.params;
    const address = await getAddressByCep(cep);
    
    try {
        if (isNaN(Number(cep)) || cep.includes("-") ) {
            throw new Error("Only numeric values are allowed.");
        }

        res.status(200).send(address);
    } catch (err) {
        res.status(errorCode).send({message: err.message})
    }
}