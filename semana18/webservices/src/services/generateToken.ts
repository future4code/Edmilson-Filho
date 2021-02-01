import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types/types';
import dotenv from 'dotenv';
const expiresIn = "1min";

dotenv.config();

export function generateToken (
    userData: AuthenticationData ): string {

        console.log("JWT_KEY", process.env.JWT_KEY)
        console.log("DB_USER", process.env.DB_USER)
    const token = jwt.sign(
        {
            id: userData.id,
            role: userData.role,
            cep: userData.cep
        },
        process.env.JWT_KEY as string,
        { expiresIn: expiresIn }
        );
    return token;
};