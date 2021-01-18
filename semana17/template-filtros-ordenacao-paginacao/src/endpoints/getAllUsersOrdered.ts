import { Request, Response } from 'express';
import { connection } from "../index"
import selectAllUsersOrdered from '../data/selectAllUsersOrdered'

export default async function getAllUsers(req: Request,res: Response): Promise<void>{
    try {
       const users = await selectAllUsersOrdered(req.params.order)
 
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