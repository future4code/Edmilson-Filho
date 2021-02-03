import { Request, Response } from 'express';
import { generateToken } from '../services/generateToken';
import { selectAllUsers } from '../data/selectAllUsers';
var bcrypt = require('bcryptjs');

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            throw new Error("Fill out the header.")
        }

        if (token === "") {
            throw new Error("Don't leave the headers in blank.")
        }

        const user = await selectAllUsers();
        console.log("getAllUsers", user);
        res.status(200).send(
            user);
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}