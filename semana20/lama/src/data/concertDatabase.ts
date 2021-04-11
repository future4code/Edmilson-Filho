import { connection } from './connection';
import knex from 'knex';
import { Concert } from '../business/entities/concert';

const tableName = "band_concert";
const concertImageTableName = "band_concert_photo";

export const insertConcert = async (
    input: any
): Promise<void> => {
    try {
        await connection
        .insert({
            id: input.id,
            datetime: input.datetime
        })
        .into(tableName);
    } catch (err) {
        throw new Error("Erro ao criar show.")
    }
}

export const selectConcert = async (
    date: any,
    nextDate: any
): Promise<any> => {
    try {
        const result = await connection
        .join("Band", "band_concert.id", "Band.id")
        .select("Band.name", "Band.gender")
        .orderBy("band_concert.datetime")
        .from(tableName)
        .where("band_concert.datetime", ">", date)
        .andWhere("band_concert.datetime", "<", nextDate)

        return result;
    } catch (err) {
        throw new Error("Erro ao exibir show(s).")
    }
}

export const insertConcertImage = async (
    concertImage: any
): Promise<any> => {
    try {
        await connection
        .insert({
            band_concert_id: concertImage.bandConcertId,
            photo: concertImage.photo
        })
        .into(concertImageTableName);
    } catch (err) {
        throw new Error("Erro ao adicionar image.")
    }
}

export const selectConcertImages = async (
    id: any
): Promise<any> => {
    try {
        const result = await connection
        .select("photo")
        .from(concertImageTableName)
        .where({band_concert_id: id});

        return result;
    } catch (err) {
        throw new Error("Erro ao adicionar image.")
    }
}