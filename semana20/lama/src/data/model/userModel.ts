import { USER_ROLES } from "../../business/entities/user"

export const convertStringToUserRole = (
    role: string
): USER_ROLES => {
    if (role === "admin") {
        return USER_ROLES.ADMIN;
    } else if (role === "normal") {
        return USER_ROLES.NORMAL
    }

    throw new Error("Tipo de usuário inválido.")
}

export const converUserRoleToString = (
    role: USER_ROLES
    ): string => {
    return role === USER_ROLES.ADMIN ? "admin" : "normal"
}