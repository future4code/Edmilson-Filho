import { Request, Response } from 'express';
import selectUserByType from '../data/selectUserByType'

export default async function getUser(
   req: Request,
   res: Response
){
   try {
      const users = await selectUserByType(req.params.type)

      if(!users){
         res.status(404).send({
            message: "Usuário não encontrado"
         })
      }
      console.log(users)

      res.status(200).send(users)
   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}