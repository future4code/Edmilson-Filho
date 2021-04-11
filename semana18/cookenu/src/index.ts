import express, { Express, request, Request, Response } from 'express';
import knex from 'knex';
import cors from 'cors';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';
import { createUser } from './endpoints/createUser';
import { getUserByEmail } from './endpoints/getUserByEmail';
import { getUserById } from './endpoints/getUserById';
import { createRecipe } from './endpoints/createRecipe';
import { followUser } from './endpoints/followUser';

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

export const connection: knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
});

app.post("/signup", createUser);
app.post("/login", getUserByEmail);
app.get("/user", getUserById);
app.post("/recipe", createRecipe);
app.post("/follow", followUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in: http://localhost:${address.port}`);
    } else {
        console.log("Error upon starting server.");
    }
});