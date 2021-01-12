import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

const app = express();
app.use(express.json());
app.use(cors());

let usersId = 1;
let tasksId = 0;

const users: object[] = [
    {
        id: 1,
        name: "Clara",
        nickname: "Clarinha",
        email: "clara@gmail.com"
    }
]

app.put("/user", (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.body.name || req.body.name === "" ||  !req.body.nickname || req.body.nickname === "" || !req.body.email || req.body.email === "") {
            errorCode = 505;
        }

        usersId++;

        const newUser = {
            id: usersId,
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        res.status(200).send();
    } catch {
        res.status(errorCode).send();
    }
})

app.get("/user/:id", (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        // if (!req.body.id || req.body.id === "" || !req.body.nickname || req.body.nickname === "") {
        //     errorCode = 505;
        // }

        const result: object | any = users.find(user => user.id === req.body.id);

        if (!req.body.id || req.body.id === "") {
            errorCode = 505;
        }

        if (!req.body.name || req.body.name === "") {
            errorCode = 505;
        } else {
            result.name = req.body.name
        }

        if (!req.body.nickname || req.body.nickname === "") {
            errorCode = 505;
        } else {
            result.nickname = req.body.nickname
        }


        if (!result) {
            errorCode = 404;
            throw new Error;
        }

        res.status(200).send(result);
    } catch {
        res.status(errorCode).send("Erro ao buscar usuário.");
    }
})

app.put("/task", (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.body.title || req.body.title === "" ||  !req.body.description || req.body.description === "" || !req.body.limitDate || req.body.limitDate === "" || !req.body.creatorUserId || req.body.creatorUserId === "") {
            errorCode = 505;
        }

        tasksId++;

        const revLimitDate = req.body.limitDate.split("/").reverse().join("/");

        const newTask = {
            id: tasksId,
            task: req.body.task,
            description: req.body.description,
            limitDate: revLimitDate,
            creatorUserId: req.body.creatorUserId
        }

        res.status(200).send();
    } catch {
        res.status(errorCode).send();
    }
})

app.get("/task/:id", (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.body.id || req.body.id === "") {
            errorCode = 505;
        }

        const task: object | any = tasks.find(task => task.id === req.body.id);
        const creator: object | any = users.find(user => user.id === req.body.id);

        const revLimitDate = req.body.limitDate.split("/").reverse().join("/");

        const task = {
            taskId: task.id,
            title: task.title,
            description: task.description,
            limitDate: revLimitDate,
            status: task.status,
            creatorUserId: task.status.creatorUserId,
            creatorUserNickname: creator.status.creatorUserNickname,
        }

        res.status(200).send();
    } catch {
        res.status(errorCode).send();
    }
})

app.get("/user/all", (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.body.id || req.body.id === "") {
            errorCode = 505;
        }

        let result: object | any = users.find(user => user.id === req.body.id);
        let newResult;

        if (!result) {
            newResult = []
        } else {
            newResult = result;
        }

        res.status(200).send(newResult);
    } catch {
        res.status(errorCode).send();
    }
})

const server = app.listen(process.env.PORT || "3003", () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in: http//localhost: ${address.port}`);
    } else {
        console.error("Failed upon starting server.")
    }
})