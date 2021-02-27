import { connection } from './connection';
import knex from 'knex';
import { Concert } from '../business/entities/concert';

const tableName = "band_concert";

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
        console.log(err.message || err.sqlMessage)
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
        console.log(err.message || err.sqlMessage)
        throw new Error("Erro ao exibir show(s).")
    }
}