import { post } from "../../business/entities/post";
import { user, USER_ROLE } from "../../business/entities/user"
import { userRouter } from "../../controller/routes/userRouter";

export const convertUserRoleToString = (role: USER_ROLE): string => {
    return role === USER_ROLE.ADMIN ? "ADMIN" : "NORMAL";
}

export const convertStringToUserRole = (role: string): USER_ROLE => {
    if (role === "ADMIN") {
        return USER_ROLE.ADMIN
    } else if (role === "NORMAL") {
        return USER_ROLE.NORMAL
    };
    
    throw new Error("Invalid User Role");
};