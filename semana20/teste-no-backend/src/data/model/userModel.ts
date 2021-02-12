import { post } from "../../business/entities/post";
import { user, POST_TYPE } from "../../business/entities/user"
import { userRouter } from "../../controller/routes/userRouter";

export const convertUserRoleToString = (role: POST_TYPE): string => {
    return role === POST_TYPE.EVENT ? "event" : "normal";
}

export const convertStringToUserRole = (role: string): POST_TYPE => {
    if (role === "event") {
        return POST_TYPE.EVENT
    } else if (role === "normal") {
        return POST_TYPE.NORMAL
    };
    
    throw new Error("Invalid User Role");
};

export function setPosts(myUser: user, posts: post[]):user {
    myUser.posts = posts;

    return myUser;
}