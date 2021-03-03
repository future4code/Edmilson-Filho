import { loginInputDTO } from "../src/business/entities/user";
import { hash } from "../src/business/services/hashManager";
import { generateId } from "../src/business/services/idGenerator";
import { businessLogin } from "../src/business/userBusiness";
import { connection } from "../src/data/connection";

describe("", () => {
    const id = { generate: jest.fn(() => "bananinha") };
    const cypherPassword = { hash: jest.fn(async () => "senha cripto"), compareHash: jest.fn()};
    const userDatabase = {
        createUser: jest.fn()} as any;
    const token = { generate: jest.fn(() =>"token" ), verify: jest.fn()};
    const role = { generate: jest.fn(() =>"role" )};

    userDatabase.createUser = {
        id,
        name: "name",
        cypherPassword,
        role: role.generate
    }
    
    test("Should return ", async () => {
        expect.assertions(1);
        
        try {
            const result: any = connection.raw(`
                INSERT INTO (
                    '${id}',
                    '${cypherPassword}',
                    '${userDatabase}',
                    '${id}'
            `)

            expect(result).toBe({
                
            })
        } catch(err) {
            expect(err).toBe("Por favor, preencha todos os campos (email e password)")
        }
    })
})