import { Request, Response } from 'express';
import { generateId } from '../business/services/generateId';
import { generateToken } from '../business/services/generateToken';
import { insertUser, selectUserByEmail, selectAllUsers, deleteUser } from '../data/userDatabase';
import { hash } from '../business/services/hashManager';
import { AuthenticationData, ROLE, User, UserEmail, UserOutputDTO } from './entities/user';
import { getData } from './services/getData';
var bcrypt = require('bcryptjs');

export const businessSignup = async (
    name: string,
    email: string,
    password: string,
    role: ROLE
): Promise<any> => {
    try {
        if (!name || !email || !password) {
            throw new Error("Fill out all of the fields.");
        };

        if (name === "" || email === "" || password === "") {
            throw new Error("Don't leave the fields in blank.");
        };

        const cypherPassword = await hash(password);

        const id: string = generateId();
        
        const userData: User = {
            "id": id,
            "name": name,
            "email": email,
            "password": cypherPassword,
            "role": role,
        };

        await insertUser(userData);
        
        const token: string = generateToken({
            id,
            role
        });

        return token;
    } catch (err) {
        console.log(err);
    }
};

export const businessLogin = async (
    email: string,
    password: string
): Promise<any> => {
    try {
        if (!email || !password) {
            throw new Error("Fill out all of the fields.")
        }

        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }

        const userData: UserEmail = {
            "email": email,
            "password": password
        }

        const user: UserOutputDTO = await selectUserByEmail(userData.email);

        const validPassword: string = bcrypt.compare(userData.password, user.password);

        if (!validPassword) {
            throw new Error("Invalid password.");
        }

        if (email === "") {
            throw new Error("Don't leave the fields in blank.")
        }

        if (!email.includes("@")) {
            throw new Error("Invalid email.")
        }

        if (password !== userData.password) {
            throw new Error("Invalid password.")
        }
        
        const token: string = generateToken({
            id: user.id,
            role: user.role
        });

        return token;
    } catch (err) {
        console.log(err);
    }
}

export const businessGetAllUsers = async (
    token: string
): Promise<any> => {
    try {
        if (!token) {
            throw new Error("Fill out the header.")
        }

        if (token === "") {
            throw new Error("Don't leave the headers in blank.")
        }

        const user: User = await selectAllUsers();
        
        return user;
    } catch (err) {
        console.log(err);
    }
}

export const businessRemoveUser = async (
    id: string,
    token: string
): Promise<void> => {
    try {
        const userData: AuthenticationData = getData(token);

        if (userData.role !== "ADMIN") {
            throw new Error("Only a admin user can access this funcionality");
        }
        
        if (!id) {
            throw new Error("Fill out all of the fields.");
        }

        await deleteUser(id);
    } catch (err) {
        console.log(err);
    }
};