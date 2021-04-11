import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../entities/user';

const expiresIn = "1min";

export const generateToken = (
    input: AuthenticationData ): string => {
    const token = jwt.sign(
        {
            id: input.id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        { expiresIn: expiresIn }
    );

    return token;
};