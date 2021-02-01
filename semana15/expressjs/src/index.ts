import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { countries } from './countries';

const app = express();

app.use(express.json());
app.use(cors());

type country = {
    id: number,
    name: string,
    capital: string,
    continent: string
 }

app.get('/countries/all', (req: Request, res: Response ) => {
    const result: any | undefined = countries.map(
        country => ({
            id: country.id,
            name: country.name
        })
    )
    
    res.status(200).send(result)
})

app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    );

    if (result) {
        res.status(200).send(result)
     } else {
        res.status(404).send("Not found")
     }

    res.status(200).send(result);
})

app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries;
    
    try {
        if (!req.query.length) {
            throw new Error("Nenhum parâmetro foi passado");
        }

        result = result.filter(
            country => country.name.includes(req.query.name as string) &&
            country.capital.includes(req.query.capital as string) &&
            country.continent.includes(req.query.continent as string)
        )
    } catch {
        throw new Error("Nenhum parâmetro foi passado");
    }

    res.status(200).send(result)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }
})