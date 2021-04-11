import * as bcrypt from 'bcryptjs';

export async function hash(s: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);

    return result;
}

export async function compare(s: string, hash: string): Promise<boolean> {
    const result = bcrypt.compare(s, hash);

    return result;
}