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