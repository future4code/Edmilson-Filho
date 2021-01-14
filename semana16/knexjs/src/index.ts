// Exercicio 1

// A) Recebemos um array de arrays com objetos de meta dados do mysql e o resultado da requisição feita

import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";
import dotenv from 'dotenv';
import knex from 'knex';
import Knex from 'knex';

const app: Express = express();

app.use(express.json());
app.use(cors())

const pokemons: Pokemon[] = []

dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   }
});

const getActorById = async (id: string): Promise<any> => {
   const result: any = await connection.raw(`
   SELECT * FROM Actor WHERE id = ${id};
   `)

   console.log(result)
   return result[0][0];
}

// B )
const getActorByName = async (name: string): Promise<any> => {
   const result: any = await connection.raw(`
   SELECT * FROM Actor WHERE name = ${name};
   `)
   console.log(result[0])
   console.log(result[0][0])

   return result[0][0];
}

// C )
const getActorByGender = async (gender: string): Promise<any> => {
   const result: any = await connection.raw(`
   SELECT COUNT(*), gender FROM Actor WHERE gender = ${gender} GROUP BY gender;
   `)
   return result[0][0];
}

// Exercicio 2

// A )
const updateActor = async (id: number, salary: number): Promise<any> => {
   const result: any =   await connection("Actor")
   .update({
     salary: salary,
   })
   .where("id", id);

   return result[0][0];
}

// B )
const deleteActor = async (id: number): Promise<any> => {
   const result: any =   await connection("Actor")
   .delete()
   .where("id", id);

   return result[0][0];
}

// C )
const getActorAvgSalary = async (gender: string): Promise<any> => {
   const result: any = await connection("Actor")
   .avg("salary as average")
   .where({ gender });

   return result[0][0];
}

const createActor = async (id: string, name: string, salary: string, dateOfBirth: Date, gender: string): Promise<any> => {
   const result: any = await connection("Actor").insert({
      id: id,
      name: name,
      salary: salary,
      dateOfBirth: dateOfBirth,
      gender: gender,
    })
    .into("Movie");

   return result[0][0];
}

const createMovie = async (id: string, title: string, synopsis: string, releaseDate: string, playingLimitDate: string): Promise<any> => {
   const result: any = await connection("Actor").insert({
      id: id,
      title: title,
      synopsis: synopsis,
      releas_date: releaseDate,
      playing_limit_date: playingLimitDate,
    })
    .into("Movie");

   return result[0][0];
}

const getAllMovies = async (): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Movie LIMIT 15
   `)

   return result[0];
}

const searchMovie = async (searchTerm: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Movie WHERE title = ${searchTerm} OR synopsis = ${searchTerm} ORDER BY release_date
   `)

   return result[0];
}

// Exercicio 3

// A )
app.get("/actor/:id", async (req: Request, res: Response) => {
   try {
      const actor = await getActorById(req.params.id);

      if (!actor) {
         res.statusCode = 404
         throw new Error("No actor found")
      }
      console.log(req.params.id)
      
      res.status(200).send(actor)
   } catch (error) {
      console.log(req.params.id)
      res.send(error.message)
   }
});


// B )
app.get("/actor", async (req: Request, res: Response) => {
   try {
      const gender = await getActorByName(req.query.gender as string);

      if (!gender) {
         res.statusCode = 404
         throw new Error("No gender found")
      }

      console.log(req.params.name);
      console.log(gender);
      res.status(200).send(gender)
   } catch (error) {
      res.send(error.message)
   }
});


// Exercicio 4 

app.put("/actor", async (req: Request, res: Response) => {
   try {
      await createActor(
         req.body.id,
         req.body.name,
         req.body.salary,
         new Date(req.body.dateOfBirth),
         req.body.salary
       );

      console.log(req.body.gender)
      res.status(200).send()
   } catch (error) {
      res.send(error.message)
   }
});

// A )
app.post("/actor", async (req: Request, res: Response) => {
   try {
      const actor = await updateActor(req.body.id, req.body.salary)
      
      res.status(200).send({
         message: "Success",
       })
   } catch (error) {
      res.status(400).send({message: error.message})
   }
});

// B )
app.delete("/actor/:id", async (req: Request, res: Response) => {
   try {
      const actor = await deleteActor(req.body.id)
      
      res.status(200).send(actor)
   } catch (error) {
      res.send(error.message)
   }
});

// Exercicio 5

// A )
app.post("/movie", async (req: Request, res: Response) => {
   const newMovie = {
      id: req.body.id,
      title: req.body.title,
      synopsis: req.body.synopsis,
      releas_date: req.body.releaseDate,
      playing_limit_date: req.body.playingLimitDate,
   }
   
   try {
      const actor = await deleteActor(req.body.id)
      
      res.status(200).send(actor)
   } catch (error) {
      res.send(error.message)
   }
});


// Exercicio 6

app.get("/movie/all", async (req: Request, res: Response) => {
   
   try {
      const movies = await getAllMovies();
      
      res.status(200).send(movies)
   } catch (error) {
      res.send(error.message)
   }
});

// Exercicio 7

app.get("/movie/search", async (req: Request, res: Response) => {
   
   try {
      const movies = await searchMovie(req.query.searchTerm as string);
      
      res.status(200).send(movies)
   } catch (error) {
      res.send(error.message)
   }
});


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
