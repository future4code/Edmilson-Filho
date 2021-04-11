import { v4 } from 'uuid';

export async function generateId() {
    return v4();
}