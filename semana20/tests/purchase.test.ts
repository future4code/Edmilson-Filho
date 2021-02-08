import { performPurchase } from '../src/index';

describe("Payment tests", () => {
    test("Testing balance greater than value", async () => {
        const user = {
            name: "Ed",
            balance: 50
        }

        const value = 25;
        
        const result = performPurchase(user, value);

        expect(result).toEqual({
            ...user,
            balance: 25
        })
    })

    test("Testing balance equal value", async () => {
        const user = {
            name: "Ed",
            balance: 50
        }

        const value = 50;
        
        const result = performPurchase(user, value);

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance less than value", async () => {
        const user = {
            name: "Ed",
            balance: 50
        }

        const value = 100;
        
        const result = performPurchase(user, value);

        expect(result).toEqual(undefined)
    })
})