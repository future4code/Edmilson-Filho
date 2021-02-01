import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const hash = async (password: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    console.log("Rounds", rounds)
    const salt = await bcrypt.genSalt(rounds);
    console.log("Salt", salt)
    const result = await bcrypt.hash(password, salt);

    console.log(result)
    return result;
}

export const compare = async (password: string, hash: string): Promise<boolean> => {
    const result = bcrypt.compare(password, hash);
    
    return result;
}