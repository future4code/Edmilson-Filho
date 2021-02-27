import { insertBand, selectBand } from "../data/bandDatabase";
import { Band } from "./entities/band";
import { getTokenData } from "./services/authenticator";

export const businessCreateBand = async (
    input: Band,
    token: string
): Promise<void> => {
    if (
        !input.name ||
        !input.gender ||
        !input.responsible
    ) {
        throw new Error("Por favor, preencha todos os campos (name, gender e responsible)");
    }

    const tokenData = await getTokenData(token);

    if (!tokenData) {
        throw new Error("Token inválido");
    }

    if (tokenData.role !== "admin") {
        throw new Error("Apenas administradores podem criar uma banda");
    }

    await insertBand(input);
}

export const businessGetBand = async (
    input: any
): Promise<Band | undefined> => {
    if (!input) {
        throw new Error("Por favor, informe o id ou o nome");
    };

    
    const bandData = await selectBand(input);

    return bandData
}