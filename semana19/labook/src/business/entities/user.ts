import { post } from "./post"

export enum POST_TYPE {
   NORMAL = 'NORMAL',
   EVENT = 'EVENT'
}

export type authenticationData = {
   id: string
}

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   posts?: post[]
}

export type signupInputDTO = {
   name: string,
   email: string,
   password: string
}