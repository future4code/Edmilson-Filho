import { Request, Response } from 'express';
import { connection } from "../index"
import selectByAllFilters from '../data/selectByAllFilters'

export default async function getByAllFilters(req: Request,res: Response): Promise<void>{
    try {
        let { type = "id", order = "name DESC" } = req.params;
        const { limit = 5 } = req.params;
        let { offset = 0 } = req.params;
       const users = await selectByAllFilters(type, order, Number(limit), Number(offset))
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

       res.status(200).send(users)

       if (offset !== 0) {
          offset = Number(offset) + Number(limit)
       }
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }