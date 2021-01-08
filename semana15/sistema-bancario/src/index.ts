import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
const app = express()
app.use(express.json())
app.use(cors())

const accounts = []

app.put("/profile", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.body.name || !req.body.cpf || !req.body.birthday) {
            errorCode = 401;
        }

        const newAccount = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthday: req.body.birthday,
            balance: 0
        }

        accounts.push(newAccount);

        res.status(200).send(accounts[accounts.length]);
    } catch {
        res.status(401).send("Erro ao criar conta.");
    }
})

// app.put("/profile", (req: Request, res: Response) => {
//     let errorCode = 400;
    
//     try {
//         if (!req.body.name || !req.body.cpf || !req.body.birthday) {
//             errorCode = 401;
//         }

//         const newAccount = {
//             name: req.body.name,
//             cpf: req.body.cpf,
//             birthday: req.body.birthday,
//             balance: 0
//         }

//         accounts.push(newAccount);

//         res.status(200).send(accounts[accounts.length]);
//     } catch {
//         res.status(401).send("Erro ao criar conta.");
//     }
// })

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo ;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.` );
    }
});