import { post } from "./post"

export enum POST_TYPE {
   NORMAL = 'NORMAL',
   EVENT = 'EVENT'
}

export enum USER_ROLE {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string
}

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   role: USER_ROLE
}

export type signupInputDTO = {
   name: string,
   email: string,
   password: string
}