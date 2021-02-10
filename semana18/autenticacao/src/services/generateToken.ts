import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types/types';

const expiresIn = "1min";

export const generateToken = (
    input: AuthenticationData ) => {
    const token = jwt.sign(
        { id: input.id },
        process.env.JWT_KEY as string,
        { expiresIn: expiresIn }
    );

    return token;
};