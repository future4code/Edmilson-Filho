import express, {Express} from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { countries } from './countries';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("countries/all", (req: Request, res: Response) => {
    try {
        const result: country[] = countries;
    } catch {

    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }
})