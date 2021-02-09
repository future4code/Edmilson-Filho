import { identifyWhoCanEnter } from './casino';
import { LOCATION, NATIONALITY } from './casino/types';
import { performPurchase } from './purchase';

const user = {
    name: "Ed",
    balance: 50
}

const value = 25;

const resultPurchase = performPurchase(user, value);

const casino = {
    name: "Ah, ah",
    location: LOCATION.BRAZIL
}

const users = [
    {
        name: "Ed",
        nacionality: NATIONALITY.BRAZILIAN,
        age: 20
    }
]

const resultCasino = identifyWhoCanEnter(casino, users);