import { Request, Response } from 'express';
import selectUser from '../data/selectUser'

export default async function getUser(
   req: Request,
   res: Response
){
   try {
      const users = await selectUser(req.query.query)

      if(!users){
         res.status(404).send({
            message: "Usuário não encontrado"
         })
      }
      console.log(users)

      res.status(200).send({
         id: users.id,
         name: users.name,
         email: users.email,
         password: users.password,
      })
   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}