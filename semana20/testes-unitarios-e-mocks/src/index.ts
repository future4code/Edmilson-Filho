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
        defender.life -= attacker.attack - defender.defense;
    }
}

export const recoverCharacters = (
    characters: Character[],
    validator: (input: Character) => boolean
    ) => {
        for (let character of characters) {
            if (!validator(character)) {
                throw new Error("Invalid character");
            }
        }
        
        for (let character of characters) {
            character.life = 1500;
        }

    if (characters.length < 2) {
        throw new Error("The characters minimum amount is 2");
    }
}

export const increaseCharacterStrength = (
    character: Character,
    newStrength: number,
    validator: (input: Character) => boolean
    ) => {
        if (!validator(character)) {
            throw new Error("Invalid character");
        }
        
        if (newStrength < character.attack) {
            throw new Error("newStrength value must be greater than character's current attack")
        }
        
        character.attack = newStrength;
}

export const decreaseCharacterDefense = (
    character: Character,
    newDefense: number,
    validator: (input: Character) => boolean
    ) => {
        if (!validator(character)) {
            throw new Error("Invalid character");
        }
        
        if (newDefense < character.defense) {
            throw new Error("newDefense value must be greater than character's current defense")
        }
        
        character.defense = newDefense;
}