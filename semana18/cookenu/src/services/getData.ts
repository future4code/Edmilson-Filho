import * as jwt from 'jsonwebtoken';

export function getData(token: any) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id,
        role: payload.role
    };

    return result;
};