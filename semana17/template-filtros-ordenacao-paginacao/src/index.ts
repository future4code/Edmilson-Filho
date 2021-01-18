import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { recipe } from "./types/recipe";
import getUser from "./endpoints/getUser";
import getUserByType from "./endpoints/getUserByType";
import getAllUsersOrdered from "./endpoints/getAllUsersOrdered";
import getAllUsersUpTo5 from "./endpoints/getAllUsersUpTo5";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get("/user/search", getUser);
app.get("/user/:type", getUserByType);
app.get("/user/all/:order", getAllUsersOrdered);
app.get("/user/all/top5", getAllUsersUpTo5);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});