// Exercicio 1

// A) Metódo GET
// B) "/users"

// Exercicio 2

// A) Depois do path eu coloquei search?type=<o type>
// B) Sim
import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { users } from './users';

const app = express();

app.use(express.json());
app.use(cors());

enum UserType {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

type users = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

app.get("/users/search", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
        if (!req.query.type) {
            errorCode = 400;
            throw new Error();
        }
        
        const result = users.filter(user => user.type === req.query.type );
        
        if (!result.length) {
            errorCode = 404;
            throw new Error();
        }
        
        res.status(200).send(result);
    } catch {
        res.status(errorCode).send("Tipo de usuário inexistente.");
    }
})


// Exercicio 3
// A) path param
app.get("/users/:name", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
        if (!req.params.name) {
            errorCode = 400;
            throw new Error();
        }
        
        const result = users.filter(user => user.name === req.params.name);
        
        if (!result.length) {
            errorCode = 404;
            throw new Error();
        }
        
        res.status(200).send(result);
    } catch {
        // B)
        res.status(errorCode).send("Usuário não encontrado.");
    }
})


// Exercicio 4
// A) Nada
// B) Sim, porque até onde eu sei, não há diferença. Além disso, torna o app mais consistente
app.put("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
        if (!req.body.name || !req.body.email || !req.body.type || !req.body.age) {
            errorCode = 400;
            throw new Error();
        }
        
        const newUser: users = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        users.push(newUser);

        res.status(200).send(newUser);
    } catch {
        res.status(errorCode).send("Usuário não encontrado.");
    }
})

// Exercicio 5
app.put("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
        if (!req.body.name) {
            errorCode = 400;
            throw new Error();
        }

        const result = users.find(user => user.id === Number(req.params.id));

        if (result) {
            result.name = `${req.body.name} -ALTERADO`
        } else {
            errorCode = 404;
        }

        res.status(200).send(result);
    } catch {
        res.status(errorCode).send("Usuário não encontrado.");
    }
})

// Exercicio 6
app.patch("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
        if (!req.params.id) {
            errorCode = 400;
            throw new Error();
        }

        if (!req.body.name) {
            errorCode = 400;
            throw new Error();
        }

        const result = users.find(user => user.id === Number(req.params.id));

        if (result) {
            result.name = `${req.body.name} -REALTERADO`
        } else {
            errorCode = 404;
        }

        res.status(200).send(result);
    } catch {
        res.status(errorCode).send("Usuário não encontrado.");
    }
})

// Exercicio 7
app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
        if (!req.params.id) {
            errorCode = 400;
            throw new Error();
        }

        const result = users.find(user => user.id === Number(req.params.id));

        if (result) {
            users.splice(result.id, 1)
        } else {
            errorCode = 404;
        }

        res.status(200).send(result);
    } catch {
        res.status(errorCode).send("Usuário não encontrado.");
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