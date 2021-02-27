import { Request, Response } from "express";
import { businessCreateConcert, businessGetConcert } from "../business/concertBusiness";
import dayjs from 'dayjs';

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

        console.log(date)

        const result = await businessGetConcert(date)

        res.send(result)
    } catch (err) {
        res.send(err.message);
    }
}