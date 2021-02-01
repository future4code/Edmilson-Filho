import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import dotenv from 'dotenv';
import knex from 'knex';
import { getUserById } from './endpoints/getUserById';
import { createUser } from '../../webservices/src/endpoints/createUser';
import { getUserByEmail } from '../../webservices/src/endpoints/getUserByEmail';
import { getUserByIdAdmin } from '../../webservices/src/endpoints/getUserByIdAdmin';
import { removeUser } from '../../webservices/src/endpoints/removeUser';

dotenv.config();
console.log("DB_HOST", process.env.DB_HOST)
export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
})

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", createUser);
app.post("/login", getUserByEmail);
app.delete("/user/:id", removeUser);
app.get("/user/", getUserById);
app.get("/user/profile", getUserByIdAdmin);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in: http://localhost:${address.port}`);
    } else {
        console.log("Error upon starting server")
    }
})