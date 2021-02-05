import express, { Express } from 'express';
import { AddressInfo } from 'net';
import { signup, login, getAllUsers, removeUser } from './controller/userController';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/signup", signup);
app.post("/login", login);
app.get("/user/all", getAllUsers);
app.delete("/user/:id", removeUser);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in: http://localhost:${address.port}`);
    } else {
        console.log("Error upon starting server.");
    }
});