import * as JWT from 'jsonwebtoken';

const expiresIn = "1min";

export function generateToken(input: any): string {
    const token = JWT.sign(
        {
            id: input.id
        },
        process.env.JWT_KEY as string,
        { expiresIn: expiresIn }
    )

    return token;
}