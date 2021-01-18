import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';
import dayjs from 'dayjs';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

let usersId = 1;
let tasksId = 0;

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: 3306,
        database: process.env.DB_NAME
    }
});

type tasks = {
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string,
}

type users = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

const users: users[] = [
    {
        id: "dasdasd",
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

const createUser = async(name: string, nickname: string, email: string):Promise<void> => {
        const result = connection.raw(`
        INSERT INTO user (name, nickname, email) VALUES (
            "${name}",
            "${nickname}",
            "${email}"
        )
    `)

    return result;
}

const getUser = async (id: number):Promise<void> => {
    const result = await connection.raw(`
        SELECT id, nickname FROM user
        WHERE id = ${id}
    `)

    console.log(result)
    return result[0];
}

const editUser = async(id: number, name: string, nickname: string):Promise<void> => {
        const result = await connection.raw(`
        UPDATE user
        SET name = "${name}", nickname = "${nickname}"
        WHERE id = ${id}
    `)

    return result[0];
}

const createTask = async (title: string, description: string, limitDate: Date, creatorUserId: number):Promise<void> => {
        const result = await connection.raw(`
        INSERT INTO task (title, description, limitDate, creatorUserId) VALUES (
            "${title}",
            "${description}",
            "${limitDate}",
            "${creatorUserId}"
        )
    `)

    return result[0];
}

const getTask = async (id: number):Promise<void> => {
        const result = await connection.raw(`
            SELECT * FROM task INNER JOIN user ON task.creatorUserId = user.id WHERE taskId = ${id}
        `)
        // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

const getAllUsers = async ():Promise<void> => {
    const result = await connection.raw(`
        SELECT * FROM users
    `)
    // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

const getUserTasks = async (creatorUserId: number):Promise<void> => {
    const result = await connection.raw(`
        SELECT * FROM task INNER JOIN user ON task.creatorUserId = user.id WHERE creatorUserId = ${creatorUserId}
    `)
    // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

const searchUser = async (query: number):Promise<void> => {
    const result = await connection.raw(`
        SELECT * FROM users WHERE nickname LIKE "%${query}%" OR nickname LIKE "%${query}%"
    `)
    // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

const setResponsible = async (task_id: number):Promise<void> => {
    await connection.raw(`
        ALTER TABLE task ADD COLUMN responsible_user_id varchar(255)
    `);
    
    const result = await connection.raw(`
        SELECT * FROM users WHERE nickname LIKE "%${task_id}%" OR nickname LIKE "%${task_id}%"
    `)
    // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

const getResponsible = async (task_id: number):Promise<void> => {
    const result = await connection.raw(`
        SELECT responsible FROM tasks WHERE task_id = ${task_id}"
    `)
    // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

const getTaskById = async (task_id: number):Promise<void> => {
    const result = await connection.raw(`
        SELECT * FROM task INNER JOIN user ON task.creatorUserId = user.id WHERE taskId = ${task_id}
    `)
    // const result = await connection.select('*').from('task').where('taskId', id).innerJoin('task', 'task.creatorUserId', 'userId')

    console.log(result[0])
    return result[0];
}

app.put("/user", async(req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.body.name || req.body.name === "" ||  !req.body.nickname || req.body.nickname === "" || !req.body.email || req.body.email === "") {
            errorCode = 505;
        }

        usersId++;

        const newUser = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }
        console.log(newUser.name);

        const result = await createUser(newUser.name, newUser.nickname, newUser.email);

        res.status(200).send(result);
    } catch (error){
        res.send(error)
        // res.status(200).send({message: error.message || error.sqlMessage})
        // res.status(errorCode).send();
    }
})

app.get("/user/:id", async(req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        // if (!req.body.id || req.body.id === "" || !req.body.nickname || req.body.nickname === "") {
        //     errorCode = 505;
        // }

        // const result: object | any = users.find(user => user.id === req.body.id);

        if (!req.body.id || req.body.id === "") {
            errorCode = 505;
        }

        const id: number = Number(req.params.id);

        // if (!result) {
        //     errorCode = 404;
        //     throw new Error;
        // }

        const result = await getUser(id);

        res.status(200).send(result);
    } catch (error) {
        res.send(error);
    }
})

app.post("/user/edit/:id", async (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        // if (!req.body.id || req.body.id === "" || !req.body.nickname || req.body.nickname === "") {
        //     errorCode = 505;
        // }

        // const result: object | any = users.find(user => user.id === req.body.id);

        if (!req.body.name || req.body.nickname === "") {
            errorCode = 505;
        }

        const id: number = Number(req.params.id);
        const name = req.body.name;
        const nickname = req.body.nickname;


        // if (!result) {
        //     errorCode = 404;
        //     throw new Error;
        // }

        const result = await editUser(id, name, nickname);

        res.status(200).send(result);
    } catch (error) {
        res.send(error);
    }
})

app.put("/task", async (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.body.title || req.body.title === "" ||  !req.body.description || req.body.description === "" || !req.body.limitDate || req.body.limitDate === "" || !req.body.creatorUserId || req.body.creatorUserId === "") {
            errorCode = 505;
        }

        tasksId++;

        const revLimitDate = req.body.limitDate.split("/").reverse().join("/");

        const title =  req.body.title;
        const description =  req.body.description;
        const limitDate =  revLimitDate;
        const creatorUserId =  req.body.creatorUserId;

        const result = await createTask(title, description, limitDate, creatorUserId);

        res.status(200).send(result);
    } catch (error) {
        res.send(error);
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode = 401;
    
    try {
        if (!req.params.id || req.params.id === "") {
            errorCode = 505;
        }

        // const task: tasks | undefined = tasks.find(task => task.id === req.body.id);
        // const creator: object | any = users.find(user => user.id === req.body.id);

        const id = Number(req.params.id);
        // const revLimitDate = req.body.limitDate.split("/").reverse().join("/");

        const result = await getTask(id);
        console.log(result)

        res.status(200).send(result);
    } catch (error) {
        res.send(error);
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