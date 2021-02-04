import { Request, Response } from 'express';
import { connection } from "../index"
import selectAllUsersUpTo5 from '../data/selectAllUsersUpTo5'

export default async function getAllUsersUpTo5(req: Request,res: Response): Promise<void>{
    try {
       const users = await selectAllUsersUpTo5()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }