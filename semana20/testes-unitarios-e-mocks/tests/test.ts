import { decreaseCharacterDefense, performAttack, recoverCharacters, validateCharacter } from '../src/index';
import { Character } from '../src/types';

describe("Validate character", () => {
    test("Should return false for empty name", () => {
        const result = validateCharacter({
            name: "",
            attack: 0,
            defense: 0,
            life: 0
        })
        
        expect(result).toBe(false);
    })

    test("Should return false for character life equal to zero", () => {
        const result = validateCharacter({
            name: "Bruce Lee",
            attack: 850,
            defense: 750,
            life: 0
        })
        
        expect(result).toBe(false);
    })

    test("Should return false for character attack equal to zero", () => {
        const result = validateCharacter({
            name: "Bruce Lee",
            attack: 0,
            defense: 750,
            life: 500
        })
        
        expect(result).toBe(false);
    })

    test("Should return false for character defense equal to zero", () => {
        const result = validateCharacter({
            name: "Bruce Lee",
            attack: 850,
            defense: 0,
            life: 500
        })
        
        expect(result).toBe(false);
    })

    test("Should return false for character life with negative value", () => {
        const result = validateCharacter({
            name: "Bruce Lee",
            attack: 850,
            defense: 750,
            life: -500
        })
        
        expect(result).toBe(false);
    })

    test("Should return true for character properties all valid", () => {
        const result = validateCharacter({
            name: "Bruce Lee",
            attack: 850,
            defense: 750,
            life: 500
        })
        
        expect(result).toBe(true);
    })
})

describe("Validate perfoming an attack", () => {
    test("Should return", () => {
        const valitadorMock = jest.fn(()=> {
            return true;
        })
    })

    test("Should return", () => {
        const validatorMock = jest.fn(() => {
            return false
        });
    })

    test("Should return", () => {
        const validatorMock = jest.fn(() => {
            return true
        });

        const attacker: Character = {
            name: "Myke Tyson",
            attack: 1000,
            defense: 850,
            life: 700
        }

        const defender: Character = {
            name: "Bruce Lee",
            attack: 850,
            defense: 800,
            life: 400
        }

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(200);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    })

    test("Should return", () => {
        const validatorMock = jest.fn(() => {
            return false
        });

        const attacker: Character = {
            name: "Chuck Norris",
            attack: -650,
            defense: 750,
            life: 500
        }

        const defender: Character = {
            name: "Myke Tyson",
            attack: 1000,
            defense: 850,
            life: 700
        }

        try {
            performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    })

    test("Should return", () => {
        let validatorMock = jest.fn(() => {
            return false
        });

        const attacker: Character = {
            name: "Chuck Norris",
            attack: 0,
            defense: 750,
            life: 500
        }

        const defender: Character = {
            name: "Myke Tyson",
            attack: 1000,
            defense: 850,
            life: 700
        }

         validatorMock = jest.fn(() => {
            return true
        });

        try {
            performAttack(attacker, defender, validatorMock as any);
            performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(2);
            expect(validatorMock).toHaveReturnedTimes(2);
        }
    })

    test("Should return", () => {
        let validatorMock = jest.fn(() => {
            return false
        });

        const attacker: Character = {
            name: "Chuck Norris",
            attack: 0,
            defense: 750,
            life: 500
        }

        const defender: Character = {
            name: "Myke Tyson",
            attack: 1000,
            defense: 850,
            life: 700
        }

         validatorMock = jest.fn(() => {
            return true
        });

        try {
            performAttack(attacker, defender, validatorMock as any);
            performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
            expect(validatorMock).toBe(false);
            expect(err.message).toBe("Invalid character");
            expect(defender.life).toBe(700);
        }
    })

    test("Should return", () => {
        let validatorMock = jest.fn(() => {
            return false
        });

        const attacker: Character = {
            name: "",
            attack: 0,
            defense: 750,
            life: 500
        }

        const defender: Character = {
            name: "Myke Tyson",
            attack: 1000,
            defense: -850,
            life: 0
        }

        try {
            performAttack(attacker, defender, validatorMock as any);
            performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
            expect(validatorMock).toReturnWith(false);
            expect(err.message).toBe("Invalid character");
            expect(defender.life).toBe(0);
        }
    })

    test("Should return", () => {
        let validatorMock = jest.fn(() => {
            return false
        });

        const characters = [
            {
                name: "",
                attack: 0,
                defense: 750,
                life: 500
            },
            {
                name: "Myke Tyson",
                attack: 1000,
                defense: -850,
                life: 0
            }
        ]

        try {
            recoverCharacters(characters, validatorMock as any);
            recoverCharacters(characters, validatorMock as any);
        } catch (err) {
            expect(validatorMock).toReturnWith(false);
            expect(err.message).toBe("Invalid character");
        }
    })

    test("Should return", () => {
        let validatorMock = jest.fn(() => {
            return false
        });

        const characters = [
            {
                name: "",
                attack: 0,
                defense: 750,
                life: 500
            },
            {
                name: "Myke Tyson",
                attack: 1000,
                defense: -850,
                life: 0
            }
        ]

        try {
            recoverCharacters(characters, validatorMock as any);
            recoverCharacters(characters, validatorMock as any);
        } catch (err) {
            expect(validatorMock).toReturnWith(false);
            expect(err.message).toBe("Invalid character");
        }
    })

    test("Should return", () => {
        let validatorMock = jest.fn(() => {
            return false
        });

        const character = {
            name: "",
            attack: 0,
            defense: 750,
            life: 500
        }

        try {
            decreaseCharacterDefense(character, 500, validatorMock as any);
            decreaseCharacterDefense(character, 500, validatorMock as any);
        } catch (err) {
            expect(validatorMock).toReturnWith(false);
            expect(err.message).toBe("Invalid character");
        }
    })
})