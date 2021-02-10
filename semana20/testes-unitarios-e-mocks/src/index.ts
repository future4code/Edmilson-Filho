import { Character } from './types';

export const validateCharacter = (input: Character): boolean => {             
    if (input.name === "" || !input.attack || !input.defense || !input.life) {
        return false;
    }

    if (input.attack <= 0 || input.defense <= 0 || input.life <= 0) {
        return false
    }

    return true;
}

export const performAttack = (
    attacker: Character, defender: Character,
    validator: (input: Character) => boolean
    ) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.attack > defender.defense) {
        defender.life -= defender.attack - attacker.defense;
    }
}