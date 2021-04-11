import knex from 'knex';
import { Band } from '../business/entities/band';
import { connection } from './connection';


const bandTableName = "Band"

export const insertBand = async (
    input: Band
): Promise<void> => {
    await connection
    .insert({
        name: input.name,
        gender: input.gender,
        responsible: input.responsible
    })
    .into(bandTableName);
}

export const selectBand = async (
    input: any
): Promise<Band | undefined> => {
    const tableName = "Band";

    try {
        const result = await connection
        .select("*")
        .from(tableName)
        .where(input);

        return result[0];
    } catch (err) {
        throw new Error("Banda não encontrada");
    }
}