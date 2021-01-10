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

type addBalance = {
    name: string,
    cpf: string,
    value: number
}

type transfer = {
    seName: string,
    seCpf: string,
    reName: string,
    reCpf: string,
    value: number,
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

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const result = accounts.map(account => account.name)
        
        res.status(200).send(result);
    } catch {
        res.status(errorCode).send("Erro ao exibir usuários.");
    }
})

app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400;
    // let birthday = req.body.birthday.split(", ");
    // birthday = birthday.reverse();
    // let leapYears = 0;

    // for (let i = new Date(birthday).getFullYear(); i < new Date().getFullYear(); i++) {
    //     console.log("Ano: ", i, "Anos bissextos: ", leapYears);
    //     if (i % 4 === 0) {
    //         console.log("Ano: ", i, "Anos bissextos: ", leapYears);
    //         if (i % 100 === 0 && i % 400 === 0) {
    //             leapYears++;
    //             console.log("Ano: ", i, "Anos bissextos: ", leapYears);
    //             if ((new Date("22, 03, " + new Date().getFullYear()).getTime() - new Date("01, 01, " + new Date().getFullYear()).getTime()) >= 172800000) {
    //                 console.log("Ano bissexto: ", leapYears);
    //                 leapYears++;
    //             }
    //         }
    //     }
    // }

    // let dateLeap = ("01, 03, " + new Date().getFullYear()).split(", ").reverse().join(", ");
    // let startYear = ("01, 01, " + new Date().getFullYear()).split(", ").reverse().join(", ");
    // console.log("Teste: ", new Date(dateLeap).getTime() - new Date(startYear).getTime());
    // console.log("Data formatada: ", birthday);
    // console.log(new Date("01, 03, " + new Date().getFullYear()).getTime() - new Date("01, 01, " + new Date().getFullYear()).getTime());
    // console.log(Date.now());
    // console.log(new Date().getFullYear());
    // console.log("Data: " + new Date(birthday).getTime(), " Agora: " + Date.now())

    // console.log(leapYears)
    // console.log(((Date.now() - new Date(birthday).getTime()) - leapYears * 86400000) < 567648000000);
    // console.log(Date.now() - new Date(birthday).getTime());
    
    try {
        if (!req.body.name || !req.body.cpf || !req.body.birthday) {
            errorCode = 401;
            throw new Error;
        }

        if (Date.now() - req.body.birthday < 18) {
            errorCode = 405;
            throw new Error;
        }

        const result = accounts.find(account => account.cpf === req.body.cpf)
        
        if (result) {
            errorCode = 505;
            throw new Error;
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
        res.status(errorCode).send("Erro ao criar conta.");
    }
})

app.get("/users/:name/balance", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.params.name) {
            errorCode = 403;
        }

        let result: object | any = accounts.find(account => account.name === req.params.name
            && account.cpf === req.body.cpf
        );
        
        if (!result) {
            errorCode = 505;
        }
        
        if (result && result.balance) {
            // result = result.balance;
            let resultBalance: object = {
                saldo: result.balance
            }

            console.log(result.balance)
            res.status(200).send(resultBalance);
        }

    } catch {
        res.status(errorCode).send("Erro ao exibir saldo.");
    }
})

app.put("/users/:name/balance", (req: Request, res: Response) => {
    let errorCode = 400;
    
    try {
        if (!req.params.name || !req.body.cpf) {
            errorCode = 401;
        }
        
        const addBalance: addBalance = {
            name: req.body.name,
            cpf: req.body.cpf,
            value: req.body.value,
        }

        const result: object | any = accounts.find(account => account.name === addBalance.name
            && account.cpf === req.body.cpf
            )

        result.balance = result.balance + addBalance.value;

        const resultBalance: object = {
            saldo: result.balance
        }

        const payment: payment = {
            value: req.body.value,
            date: Date.now().toString(),
            description: "Depósito de dinheiro",
        }

        result.bills.push(payment);
        
        if (!result) {
            errorCode = 505;
        }

        console.log(result)
        res.status(200).send(resultBalance);
    } catch {
        res.status(401).send("Erro ao exibir saldo.");
    }
})

app.post("/users/:name/payment", (req: Request, res: Response) => {
    let errorCode = 400;
    let message = "Erro ao fazer pagamento.";
    
    try {
        if (!req.body.value || !req.body.description) {
            errorCode = 401;
        }

        const payment: payment = {
            value: req.body.value,
            date: !req.body.date ? Date.now() : req.body.date,
            description: req.body.description,
        }

        let result: object | any = accounts.find(account => account.name === req.params.name)

        if (!result) {
            errorCode = 505;
        }

        let date = req.body.date.split(", ");
        date = date.reverse();
        // let date = req.body.date.split(", ");
        // let newDate: any = [];
        // newDate = newDate.push(date[1], date[0], date[2])
        // newDate = newDate.join(", ");
        console.log("Data formatada: ", date);
        console.log("Data: " + new Date(date).getTime(), " Agora: " + new Date().getTime())
        // const balance = result.balance - payment.value;
        if (new Date(date).getTime() < Date.now()) {
            errorCode = 502;
            message = "Data inválida.";
            throw new Error;
        }

        if (result.balance - payment.value < 0) {
            errorCode = 502;
            message = "Saldo insuficiente.";
            throw new Error;
        }

        result.balance = result.balance - payment.value;

        result?.bills.push(payment);

        res.status(200).send([result?.bills, result.balance]);
    } catch {
        res.status(errorCode).send(message);
    }
})

app.post("/users/:name/transfer", (req: Request, res: Response) => {
    let errorCode = 400;
    let message = "Erro ao fazer pagamento.";
    
    try {
        if (!req.body.value || !req.body.date || !req.body.description) {
            errorCode = 401;
        }

        const transfer: transfer = {
            seName: req.body.seName,
            seCpf: req.body.seCpf,
            reName: req.body.reName,
            reCpf: req.body.reCpf,
            value: req.body.value,
        }

        let sender: object | any = accounts.find(account => account.name === req.params.name
            && account.cpf === req.body.seCpf)
        let receiver: object | any = accounts.find(account => account.name === req.params.name
            && account.cpf === req.body.reCpf)

        if (!sender || !receiver) {
            errorCode = 505;
        }

        if (sender.balance - transfer.value < 0) {
            errorCode = 502;
            message = "Saldo insuficiente.";
            throw new Error;
        }

        sender.balance = sender.balance - transfer.value;
        receiver.balance = receiver.balance + transfer.value;

        const payment: payment = {
            value: req.body.value,
            date: !req.body.date ? Date.now() : req.body.date,
            description: req.body.description,
        }

        sender.bills.push(payment);
        receiver.bills.push(payment);

        res.status(200).send([sender.balance, receiver.balance]);
    } catch {
        res.status(errorCode).send(message);
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