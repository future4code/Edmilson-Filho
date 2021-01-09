import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
const app = express()
app.use(express.json())
app.use(cors())

// const accounts:  = []
type account = {
    name: string,
    cpf: string,
    birthday: string,
    balance: number,
    bills: object[],
}

type payment = {
    value: number,
    date: string
    description: string,
}

const accounts: account[] = [
    {
        name: "Pedro",
        cpf: "932.231.293-95",
        birthday: "13, 02, 2000",
        balance: 50,
        bills: [
            {
                value: 40,
                data: "19, 06, 2020",
                description: "Ifood hamburguer"
            }
        ],
    },
    {
        name: "Mateus",
        cpf: "630.223.213-25",
        birthday: "04, 07, 1994",
        balance: 150,
        bills: [
            {
                value: 5,
                data: "04, 09, 2020",
                description: "Uber"
            }
        ],
    },
]

app.put("/profile", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.body.name || !req.body.cpf || !req.body.birthday) {
            errorCode = 401;
        }

        const result = accounts.find(account => account.cpf === req.body.cpf)
        
        if (result) {
            errorCode = 505;
        }
        
        const newAccount: account = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthday: req.body.birthday,
            balance: 0,
            bills: []
        }

        accounts.push(newAccount);

        res.status(200).send(accounts[accounts.length]);
    } catch {
        res.status(401).send("Erro ao criar conta.");
    }
})

app.get("/profile/:name/balance", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.params.name) {
            errorCode = 401;
        }

        const result = accounts.find(account => account.name === req.params.name)

        if (!result) {
            errorCode = 505;
        }

        console.log(result)
        res.status(200).send(result?.balance);
    } catch {
        res.status(401).send("Erro ao exibir saldo.");
    }
})

app.put("/profile/:name/balance", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.params.name) {
            errorCode = 401;
        }

        const result = accounts.find(account => account.name === req.params.name)

        if (!result) {
            errorCode = 505;
        }

        console.log(result)
        res.status(200).send(result?.balance);
    } catch {
        res.status(401).send("Erro ao exibir saldo.");
    }
})

app.put("/profile/:name/payment", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.body.value || !req.body.date || !req.body.description) {
            errorCode = 401;
        }

        let result = accounts.find(account => account.name === req.params.name)

        if (!result) {
            errorCode = 505;
        }

        const payment: payment = {
            value: req.body.value,
            date: req.body.date,
            description: req.body.description,
        }

        const balance = result.balance - payment.value;
        // const result2 = {...result, balance: balance - payment.value}

        result?.bills.push(payment)

        res.status(200).send(result?.bills);
    } catch {
        res.status(401).send("Erro ao fazer pagamento.");
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo ;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.` );
    }
});