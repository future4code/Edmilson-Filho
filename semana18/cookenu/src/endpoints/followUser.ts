import { Request, Response } from 'express';
import { generateToken } from '../services/generateToken';
import { compare } from '../services/hashManager';
import { selectUserByEmail } from '../data/selectUserByEmail';
import { InsertFollowedUser } from '../data/InsertFollowedUser';
import { getData } from '../services/getData';

export async function followUser(req: Request, res: Response) {
    try {
        const { userId } = req.body;
        const token = req.headers.authorization as string;

        // if (!token || !userId) {
        //     throw new Error("Please, fill out all of the fields.");
        // }

        // if (token === "" || userId === "") {
        //     throw new Error("Don't leave any field in blank.");
        // }

        const user = getData(token);
        console.log(user);

        const userData = {
            "id": user.id,
            "userId": userId
        }
        
        console.log(userData);
        await InsertFollowedUser(userData);

        // const token = generateToken({
        //     id: user.id,
        //     role: user.role
        // });

        res.status(200).send({
            token
        });
    } catch (err) {
        res.status(400).send(
            err.message | err.sqlMessage
        )
    }
}