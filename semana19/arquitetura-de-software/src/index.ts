import express, { Express, Request, Response } from 'express';
import { AddressInfo } from 'net';
import knex from 'knex';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

export const connection: knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in: http://localhost:${address.port}`);
    } else {
        console.log("Error upon starting server.");
    }
});