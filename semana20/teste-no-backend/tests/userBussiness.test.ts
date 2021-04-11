import { USER_ROLE } from "../src/business/entities/user";
import { businessGetUserById, getAllUsers } from "../src/business/userBusiness";
import { connection } from "../src/data/connection";
import { convertStringToUserRole } from "../src/data/model/userModel";

describe("", () => {    
    const idGenerator = { generate: jest.fn(() => "bananinha") };
   
    const userGenerator = { createUser: jest.fn() as any};
   // const hashGenerator = { hash: jest.fn(async () => "senha cripto"), compareHash: jest.fn() };
   // const tokenGenerator = { generate: jest.fn(() => "token"), verify: jest.fn() };

    test("", async () => {
        
        try {
            const user = await businessGetUserById(
                "ed"
            );
        } catch (err) {
            expect(err.message).toEqual("Usuário não encontrado ou senha incorreta");
        }
    })

    test("", async () => {
            const getUserById = jest.fn(
                (id: string) => ({
                    id: "id",
                    username: "Astrodev",
                    email: "astrodev@gmail.com",
                    role: USER_ROLE.ADMIN
                })
            )

            const user = await getUserById(
                "id"
            );

            expect(getUserById).toHaveBeenCalledWith("id");
            expect(user).toEqual({
                    id: "id",
                    username: "Astrodev",
                    email: "astrodev@gmail.com",
                    role: "ADMIN"
            });
    })

    test("", async () => {
        try {
            await getAllUsers("NORMAL")
        } catch (err) {
            expect(err.message).toBe("You must be an admin to access this endpoint");
        }
    })

    test("", async () => {
        const getAllUsers = jest.fn(
            (id: string) => [
                "id",
                "Astrodev",
                "astrodev@gmail.com",
                "hash",
                convertStringToUserRole("ADMIN")
            ])
        

        const result = await getAllUsers(
            USER_ROLE.ADMIN
        );

        expect(getAllUsers).toHaveBeenCalledTimes(1);
        expect(result).toContainEqual({
            id: "id",
            name: "Astrodev",
            hash: "hash",
            email: "astrodev@gmail.com",
            role: USER_ROLE.ADMIN,
        });
})

    test("", async () => {
        let result;
        try {
            result = await businessGetUserById("id");
            console.log(result)
        } catch (err) {
            expect(err.message).toBe("Usuário não encontrado ou senha incorreta");
            expect(result).toHaveBeenCalledWith("id");
            expect(businessGetUserById).toHaveBeenCalledTimes(1);
        }
})

    test("", async () => {
        const getUserById = jest.fn(
            (id: string) => ({
                id: "id",
                username: "Astrodev",
                email: "astrodev@gmail.com",
                role: USER_ROLE.ADMIN
            })
        )

        
        try {
            const result = await getUserById("id");
        } catch (err) {
            expect(getUserById).toHaveBeenCalledWith("id");
            expect(getUserById).toHaveBeenCalledTimes(1);
        }
})
})

afterAll(() => {
    connection.destroy();
})