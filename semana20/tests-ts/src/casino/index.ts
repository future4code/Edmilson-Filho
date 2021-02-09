import { LOADIPHLPAPI } from "dns";
import { Casino, LOCATION, NATIONALITY, Result, ResultItem, User } from "./types";
const casino = {
    name: "Clandestino",
    location: LOCATION.BRAZIL
}

const users = [
    {
        name: "John Cena!",
        nacionality: NATIONALITY.AMERICAN,
        age: 19
    }
]

export function identifyWhoCanEnter(casino: Casino, users: User[]): Result {
    // users.forEach(user => {
    //     return user.name
    // })
    const braziliansAllowed: string[] = [];
    const braziliansUnallowed: string[] = [];
    const americansAllowed: string[] = [];
    const americansUnallowed: string[] = [];

    const allowed: string[] = []
    const unallowed: string[] = []
    

    for (let user of users){
        if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18 && user.nacionality === NATIONALITY.BRAZILIAN) {
                braziliansAllowed.push(user.name)
            }

            if (user.age < 18 && user.nacionality === NATIONALITY.BRAZILIAN) {
                braziliansUnallowed.push(user.name)
            }
            
            if (user.age >= 18 && user.nacionality === NATIONALITY.AMERICAN) {
                americansAllowed.push(user.name)
            }
            
            if (user.age < 18 && user.nacionality === NATIONALITY.AMERICAN) {
                americansUnallowed.push(user.name)
            }
        }

        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21 && user.nacionality === NATIONALITY.BRAZILIAN) {
                braziliansAllowed.push(user.name)
            }              
            
            if (user.age >= 21 && user.nacionality === NATIONALITY.AMERICAN) {
                americansAllowed.push(user.name)
            }

            if (user.age < 21 && user.nacionality === NATIONALITY.BRAZILIAN) {
                braziliansUnallowed.push(user.name)
            }              
            
            if (user.age < 21 && user.nacionality === NATIONALITY.AMERICAN) {
                americansUnallowed.push(user.name)
            }
        }
    }

    // const braziliansAllowed = users.filter(user => {user.nacionality === "BRAZILIAN" && user.age >= 18; return user.name});
    // const braziliansUnallowed = users.filter(user => { user.nacionality === "BRAZILIAN" && user.age <= 18; return user.name});
    // const americansAllowed = users.filter(user => {user.nacionality === "AMERICAN" && user.age >= 21; return user.name});
    // const americansUnallowed = users.filter(user => {user.nacionality === "AMERICAN" && user.age <= 21; return user.name});

    const resultItem1: ResultItem = {
        allowed: braziliansAllowed,
        unallowed: braziliansUnallowed
    }

    const resultItem2: ResultItem = {
        allowed: americansAllowed,
        unallowed: americansUnallowed
    }

    const result: Result = {
        brazilians: resultItem1,
        americans: resultItem2
    }

    return result;
}

identifyWhoCanEnter(casino, users)