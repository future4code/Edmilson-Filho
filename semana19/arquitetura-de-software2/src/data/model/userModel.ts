import { task } from "../../business/entities/task";
import { user, USER_ROLES } from "../../business/entities/user"
import { userRouter } from "../../controller/routes/userRouter";

export const convertUserRoleToString = (role: USER_ROLES): string => {
    return role === USER_ROLES.ADMIN ? "admin" : "normal";
}

export const convertStringToUserRole = (role: string): USER_ROLES => {
    if (role === "admin") {
        return USER_ROLES.ADMIN
    } else if (role === "normal") {
        return USER_ROLES.NORMAL
    };
    
    throw new Error("Invalid User Role");
};

export function setTasks(myUser: user, tasks: task[]):user {
    myUser.tasks = tasks;

    return myUser;
}