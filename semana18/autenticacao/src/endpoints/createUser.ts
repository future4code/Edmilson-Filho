import { Request, Response } from 'express';
import { generateId } from '../services/generateId';
import { generateToken } from '../services/generateToken';
import { insertUser } from '../data/insertUser';
var bcrypt = require('bcryptjs');

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Fill out all of the fields.")
        }

        if (email === "" || password === "") {
            throw new Error("Don't leave the fields in blank.")
        }

        const cryptedPassword = bcrypt.genSalt(10, function(err: string, salt: string) {
            bcrypt.hash(password, salt, function(err: string, hash: string) {
                return hash;
            });
        });

        console.log(cryptedPassword)

        const input = {
            "email": email,
            "password": cryptedPassword
        }

        const id = generateId();

        await insertUser(id, input.email, input.password);
        
        const token = generateToken({
            id
        });
        
        res.status(200).send({
            token
        });
    } catch (err) {
        err.status(400).send({
            message: err.message
        });
    }
};