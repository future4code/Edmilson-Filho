export enum ROLE {
    NORMAL = "normal",
    ADMIN = "admin"
}

export type AuthenticationData = {
    id: string,
    role?: ROLE
};

export type UserData = {
    id: string,
    email: string,
    password: string
};