import { connection } from '..';

const tableName = "followed_user";

export async function InsertFollowedUser(userData: any) {
    try {
        const id = userData.id;
        const user_id = userData.userId;

        const result: any = await connection
        .insert({
            id,
            user_id
        })
        .into(tableName);

        return result[0];
    } catch (err) {
        console.log(err.message);
    };
};