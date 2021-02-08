interface User {
    name: string,
    balance: number
}

enum COUNTRY {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

enum NATIONALITY {
    AMERICAN = "AMERICAN",
    BRAZILIAN = "BRAZILIAN"
}

interface Casino {
    name: string,
    country: COUNTRY
}

interface User {
    name: string,
    nacionality: NATIONALITY,
    age: number
}

interface Result {
    brazilians: ResultItem,
    americans: ResultItem
}

interface ResultItem {
    allowed: string[],
    unallowed: string[]
}

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }

    return undefined;
}

export function identifyWhoCanEnter(casino: Casino, users: User[]): Result {
    // users.forEach(user => {
    //     return user.name
    // })
    const braziliansAllowed: string[] = [];
    const braziliansUnallowed: string[] = [];
    const americansAllowed = [];
    const americansUnallowed = [];

    users.map(user => {
        if (user.nacionality === "BRAZILIAN") {
            if (user.age >= 18 ) {
                braziliansAllowed.push(user.name)
            } else {
                braziliansUnallowed.push(user.name)
            }
        }
        
        if (user.nacionality === "AMERICAN") {
            if (user.age >= 18 ) {
                americansAllowed.push(user.name)
            } else {
                americansUnallowed.push(user.name)
            }
        }
    })
    
    // const braziliansAllowed = users.filter(user => user.nacionality === "BRAZILIAN" && user.age >= 18);
    // const braziliansUnallowed = users.filter(user => user.nacionality === "BRAZILIAN" && user.age <= 18);
    // const americansAllowed = users.filter(user => user.nacionality === "AMERICAN" && user.age >= 21);
    // const americansUnallowed = users.filter(user => user.nacionality === "AMERICAN" && user.age <= 21);

    const resultItem1: ResultItem = {
        allowed: braziliansAllowed,
        unallowed: braziliansUnallowed
    }

    const resultItem2: ResultItem = {
        allowed: braziliansAllowed,
        unallowed: braziliansUnallowed
    }

    const result: Result = {
        brazilians: resultItem1,
        americans: resultItem2
    }

    return result;
}
