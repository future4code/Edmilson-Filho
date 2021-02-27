export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type authenticationData = {
    id: string,
    role: string
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
}

export type signupInputDTO = {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export type loginInputDTO = {
    email: string,
    password: string
}