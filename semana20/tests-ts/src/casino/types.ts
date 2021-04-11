export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export enum NATIONALITY {
    AMERICAN = "AMERICAN",
    BRAZILIAN = "BRAZILIAN"
}

export interface Casino {
    name: string,
    location: LOCATION
}

export interface User {
    name: string,
    nacionality: NATIONALITY,
    age: number
}

export interface Result {
    brazilians: ResultItem,
    americans: ResultItem
}

export interface ResultItem {
    allowed: string[],
    unallowed: string[]
}