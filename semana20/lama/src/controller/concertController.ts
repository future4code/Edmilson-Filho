import { Request, Response } from "express";
import { businessAddConcertImage, businessCreateConcert, businessGetConcert, businessGetConcertImage } from "../business/concertBusiness";
import dayjs from 'dayjs';
import { USER_ROLES } from "../business/entities/user";
import { getTokenData } from "../business/services/authenticator";

export const createConcert = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = req.body.id as number;
        const date = req.body.date as Date;
        const datetime = req.body.datetime as number;

        const concert = {
            id,
            date,
            datetime
        }

        await businessCreateConcert(concert)
    } catch (err) {
        res.send(err.message);
    }
}

export const getConcert = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { date } = req.query;

        const result = await businessGetConcert(date)

        res.send(result)
    } catch (err) {
        res.send(err.message);
    }
}

export const addConcertImage = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const bandConcertId = req.body.bandConcertId as number;
        const photo = req.body.photo as string;

        const concertImage = {
            bandConcertId,
            photo
        }

        const token = req.headers.authorization as string;

        const tokenData = getTokenData(token);

        await businessAddConcertImage(concertImage, tokenData)

        res.send({message: "Imagem adicionada ao evento com sucesso!"})
    } catch (err) {
        res.send(err.message);
    }
}

export const getConcertImage = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id = Number(req.params.id);
        const token = req.headers.authorization as string;

        const tokenData = getTokenData(token);
        
        const result = await businessGetConcertImage(id, tokenData)

        res.send({result})
    } catch (err) {
        res.send(err.message);
    }
}