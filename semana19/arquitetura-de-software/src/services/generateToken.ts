import * as JWT from 'jsonwebtoken';

const expiresIn = "1min";

export async function generateToken(userData) {
    const token = JWT.sign(
        {
            id: userData.id,
            password: userData.password,
            role: userData.role
        },
        { process.env.JWT_KEY as string },
        { expiresIn: expiresIn }
    )

    return token;
}