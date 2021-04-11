import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import knex from 'knex';
import dotenv from 'dotenv';
import { getLoggedUser } from '../../autenticacao/src/endpoints/getLoggedUser';
import { createUser } from '../../autenticacao/src/endpoints/createUser';
import { getUserByEmail } from '../../autenticacao/src/endpoints/getUserByEmail';

dotenv.config();

export const connection: knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3006"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/signup", createUser);
app.get("/login", getUserByEmail);
app.get("/user/profile", getLoggedUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    } 
});