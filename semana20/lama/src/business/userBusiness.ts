import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail } from "../data/userDatabase";
import { authenticationData, loginInputDTO, signupInputDTO, User } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { convertStringToUserRole } from "../data/model/userModel";

export const businessSignup = async (
    input: signupInputDTO
): Promise<string> => {
    if (
        !input.email ||
        !input.name ||
        !input.password ||
        !input.role
    ) {
        throw new Error("Por favor, preencha todos os campos (email, nome, senha e tipo de usuário)");
    }

    if (!input.email.includes("@")) {
        throw new Error("Email inválido.");
    }

    const id: string = generateId();

    const cypherPassword: string = await hash(input.password);

    const userData: User = {
        id,
        email: input.email,
        name: input.name,
        password: cypherPassword,
        role: convertStringToUserRole(input.role)
    }

    await insertUser(userData);

    const token: string = generateToken({
        id,
        role: userData.role
    });

    return token;
}

export const businessLogin = async (
    input: loginInputDTO
) => {
    if (
        !input.email ||
        !input.password
    ) {
        throw new Error("Por favor, preencha todos campos (email e senha)")
    }

    const userData: User = await selectUserByEmail(input);

    const isValidPassword: boolean = await compare(input.password, userData.password);

    if (!isValidPassword) {
        throw new Error("Senha incorreta.");
    }
    
    const token: string = generateToken({
        id: userData.id,
        role: convertStringToUserRole(userData.role)
    });

    return token;
}