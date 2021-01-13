import express, {Express, Request, Response} from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import knex from 'knex';
import dotenv from "dotenv";

const app: Express = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const getActorById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0];
}

const getActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)

    const count = result[0][0];
    return count;
}

app.get("/")

getActorById(1);
getActorsByGender("male");

const server = app.listen(process.env.PORT || 3303, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.log("Failure upon starting server.");
    }
});