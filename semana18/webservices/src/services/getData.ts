import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types/types';

export async function getData (token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id,
        role: payload.role,
        cep: payload.cep,
    };
    
    return result;
}