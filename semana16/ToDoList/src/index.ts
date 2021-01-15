import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import knex from 'knex';
import knex from 'knex';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

let usersId = 1;
let tasksId = 0;

const connection: knex = knex({
    client: "mysql",
    connection: {
        host: "",
        user: "",
        password: "",
        port: 3306,
        database: ""
    }
});

type tasks = {
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string,
}

type users = {
    id: 1,
    name: "Clara",
    nickname: "Clarinha",
    email: "clara@gmail.com"
}

const users: users[] = [
    {
        id: 1,
        name: "Clara",
        nickname: "Clarinha",
        email: "clara@gmail.com"
    }
]

const tasks: tasks[] = [
    {
        title: "gsdfds",
        description: "asdasd",
        limitDate: "16/02/2021",
        creatorUserId: "1",
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

        const result = connection.raw(`
            
        `)

        res.status(200).send();
    } catch {
        res.status(errorCode).send();
    }
})

// app.get("/user/:id", (req: Request, res: Response) => {
//     let errorCode = 401;
    
//     try {
//         // if (!req.body.id || req.body.id === "" || !req.body.nickname || req.body.nickname === "") {
//         //     errorCode = 505;
//         // }

//         const result: object | any = users.find(user => user.id === req.body.id);

//         if (!req.body.id || req.body.id === "") {
//             errorCode = 505;
//         }

//         if (!req.body.name || req.body.name === "") {
//             errorCode = 505;
//         } else {
//             result.name = req.body.name
//         }

//         if (!req.body.nickname || req.body.nickname === "") {
//             errorCode = 505;
//         } else {
//             result.nickname = req.body.nickname
//         }


//         if (!result) {
//             errorCode = 404;
//             throw new Error;
//         }

//         res.status(200).send(result);
//     } catch {
//         res.status(errorCode).send("Erro ao buscar usuário.");
//     }
// })

// app.put("/task", (req: Request, res: Response) => {
//     let errorCode = 401;
    
//     try {
//         if (!req.body.title || req.body.title === "" ||  !req.body.description || req.body.description === "" || !req.body.limitDate || req.body.limitDate === "" || !req.body.creatorUserId || req.body.creatorUserId === "") {
//             errorCode = 505;
//         }

//         tasksId++;

//         const revLimitDate = req.body.limitDate.split("/").reverse().join("/");

//         const newTask = {
//             id: tasksId,
//             task: req.body.task,
//             description: req.body.description,
//             limitDate: revLimitDate,
//             creatorUserId: req.body.creatorUserId
//         }

//         res.status(200).send();
//     } catch {
//         res.status(errorCode).send();
//     }
// })

// app.get("/task/:id", (req: Request, res: Response) => {
//     let errorCode = 401;
    
//     try {
//         if (!req.body.id || req.body.id === "") {
//             errorCode = 505;
//         }

//         const task: tasks | undefined = tasks.find(task => task.id === req.body.id);
//         const creator: object | any = users.find(user => user.id === req.body.id);

//         const revLimitDate = req.body.limitDate.split("/").reverse().join("/");

//         const newTask = {
//             taskId: task.id,
//             title: task.title,
//             description: task.description,
//             limitDate: revLimitDate,
//             status: task.status,
//             creatorUserId: task.status.creatorUserId,
//             creatorUserNickname: creator.status.creatorUserNickname,
//         }

//         res.status(200).send();
//     } catch {
//         res.status(errorCode).send();
//     }
// })

// app.get("/user/all", (req: Request, res: Response) => {
//     let errorCode = 401;
    
//     try {
//         if (!req.body.id || req.body.id === "") {
//             errorCode = 505;
//         }

//         let result: object | any = users.find(user => user.id === req.body.id);
//         let newResult;

//         if (!result) {
//             newResult = []
//         } else {
//             newResult = result;
//         }

//         res.status(200).send(newResult);
//     } catch {
//         res.status(errorCode).send();
//     }
// })

const server = app.listen(process.env.PORT || "3003", () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in: http//localhost: ${address.port}`);
    } else {
        console.error("Failed upon starting server.")
    }
})