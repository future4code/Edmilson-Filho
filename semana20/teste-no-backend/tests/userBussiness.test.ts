import { businessLogin } from "../src/business/userBusiness";

describe("", () => {
    const idGenerator = { generate: jest.fn(() => "bananinha") };
    const hashGenerator = { hash: jest.fn(async () => "senha cripto"), compareHash: jest.fn() };
    const userGenerator = { createUser: jest.fn() as any};
    const tokenGenerator = { generate: jest.fn(() => "token"), verify: jest.fn() };
    
    test("", async () => {
        
        try {
            const user = await businessLogin("ed@gmail.com", "password");
        } catch (err) {
            expect(err.statusCode).toBe(401);
            expect(err.message).toEqual("Invalid email");
        }
    })
})