import { performPurchase } from '../src/purchase/index';
import { identifyWhoCanEnter } from '../src/casino/index';
import { LOCATION, NATIONALITY } from '../src/casino/types';
import 'jest-extended';
import { insertPost, removePost, selectPostById } from '../src/post/postDatabase';
import { connection } from '../src/post/connection';

declare global {
    namespace jest {
      interface Matchers<R> {
        toBeWithinRange(a: number, b: number): R;
      }
    }
  }

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

describe("Test casino", () => {
    test("Who can enter the casino", async () => {
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
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result).toEqual({
            brazilians: { allowed: [ 'Ed' ], unallowed: [] },
            americans: { allowed: [], unallowed: [] }
          })
    })

    test("Who can enter the casino", async () => {
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
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result).toEqual({
            brazilians: { allowed: [], unallowed: [] },
            americans: { allowed: ['John Cena!'], unallowed: [] }
          })
    })

    test("Who can enter the casino", async () => {
        const casino = {
            name: "Las Vegas Casino",
            location: LOCATION.EUA
        }

        const users = [
            {
                name: "Ah, ah",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Et Bilu",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "John Cena!",
                nacionality: NATIONALITY.AMERICAN,
                age: 19
            },
            {
                name: "Will Smith",
                nacionality: NATIONALITY.AMERICAN,
                age: 19
            }
        ]
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result).toEqual({
            brazilians: { allowed: [], unallowed: ['Ah, ah', 'Et Bilu'] },
            americans: { allowed: [], unallowed: ['John Cena!', 'Will Smith'] }
          })
    })

    test("Who can enter the casino", async () => {
        const casino = {
            name: "Clandestine Casino",
            location: LOCATION.EUA
        }

        const users = [
            {
                name: "Ah, ah",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Et Bilu",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "John Cena!",
                nacionality: NATIONALITY.AMERICAN,
                age: 21
            },
            {
                name: "Will Smith",
                nacionality: NATIONALITY.AMERICAN,
                age: 21
            }
        ]
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result).toEqual({
            brazilians: { allowed: [], unallowed: ['Ah, ah', 'Et Bilu'] },
            americans: { allowed: ['John Cena!', 'Will Smith'], unallowed: [] }
          })
    })

    test("Who can enter the casino", async () => {
        const casino = {
            name: "Clandestine Casino",
            location: LOCATION.BRAZIL
        }

        const users = [
            {
                name: "Ah, ah",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 20
            }
        ]
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test("Who can enter the casino", async () => {
        const casino = {
            name: "Clandestine Casino",
            location: LOCATION.BRAZIL
        }

        const users = [
            {
                name: "John Cena!",
                nacionality: NATIONALITY.AMERICAN,
                age: 18
            }
        ]
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result.americans.unallowed.length).toBe(0)
    })

    test("Who can enter the casino", async () => {
        const casino = {
            name: "Clandestine Casino",
            location: LOCATION.EUA
        }

        const users = [
            {
                name: "Ah, ah",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Et Bilu",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "John Cena!",
                nacionality: NATIONALITY.AMERICAN,
                age: 19
            },
            {
                name: "Will Smith",
                nacionality: NATIONALITY.AMERICAN,
                age: 19
            }
        ]
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result.brazilians.unallowed).toContainEqual("Ah, ah")
        console.log("Ah, ah", result.brazilians.unallowed)
        expect(result.americans.unallowed).toContainEqual("John Cena!")
        console.log("John Cena!", result.americans.unallowed)
    })

    test("Who can enter the casino", async () => {
        const casino = {
            name: "Clandestine Casino",
            location: LOCATION.EUA
        }

        const users = [
            {
                name: "Ah, ah",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Et Bilu",
                nacionality: NATIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "John Cena!",
                nacionality: NATIONALITY.AMERICAN,
                age: 21
            },
            {
                name: "Will Smith",
                nacionality: NATIONALITY.AMERICAN,
                age: 21
            }
        ]
        
        const result = await identifyWhoCanEnter(casino, users);

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed).toHaveLength(2);
    })
})

describe("Test create post to LaBook", () => {
    test("Description", async () => {
        const post = {
            id: "fasdasd",
            photo: "ffsdfdsf",
            descricao: "fdsfdsf",
            created_at: "2021-02-09 03:14:07",
            type: "NORMAL",
            user_id: "9ced538a-0031-4825-9c27-fd1d9aa0dbaa"
        }
        console.log("Date", new Date())
        console.log(Date.now())


        insertPost(post);

        const result: any = await selectPostById(post.id);

        expect(result).toBeTruthy();
        
        afterAll(async() => await removePost(post));
    })
})

afterAll(async () => {
    
    await connection.destroy();
})