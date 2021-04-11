export enum ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type AuthenticationData = {
    id: string,
    role: ROLE
};

export type UserData = {
    id: string,
    email: string,
    password: string
};

export type UserEmail = {
    email: string,
    password: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
}

export type UserOutputDTO = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE
}