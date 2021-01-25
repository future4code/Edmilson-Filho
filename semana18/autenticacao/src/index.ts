import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_anem
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.

const server = app.listen(process.env.PORT || 3306, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    } 
});