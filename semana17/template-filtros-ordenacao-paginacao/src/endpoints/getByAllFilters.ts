import { Request, Response } from 'express';
import { connection } from "../index"
import selectByAllFilters from '../data/selectByAllFilters'

export const getByAllFilters = async(req: Request,res: Response): Promise<void> =>{
    try {
        let { filter = "id", order = "name DESC"} = req.params;
        let { offset = 0 } = req.params;
       const users = await selectByAllFilters(filter, order, offset)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

       res.status(200).send(users)

       if (offset !== 0) {
           offset += 5;
       }
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }