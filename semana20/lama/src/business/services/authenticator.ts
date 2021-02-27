import * as JWT from 'jsonwebtoken';
import { authenticationData } from '../entities/user';

export const generateToken = (
    payload: authenticationData
): string => {
    return JWT.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: "24min"
        }
    )
}

export const getTokenData = (
    token: string
): authenticationData => {
    return JWT.verify(
        token,
        process.env.JWT_KEY as string
    ) as authenticationData
}