// Exercício 1

// A) Utilizando o array de argumentos atribuído ao processo do Node. Exemplo: process.argsv
// B)
// const firstName = process.argv[2];
// const age = Number(process.argv[3]);
const red = "\x1b[31m%s\x1b[0m";
const cian = "\x1b[36m%s\x1b[0m";

// console.log(isNaN(age))
// if (firstName === undefined || age === undefined) {
//     console.log(red, "Parâmetro faltando. Esperava 2 parâmetros, mas recebi apenas 1");
// } else if (firstName === undefined && age === undefined) {
//     console.log(red, "Parâmetro faltando. Esperava 2 parâmetros, mas não recebi nenhum");
// } else if (typeof firstName !== "string" || !isNaN(Number(firstName))) {
//     console.log(red, "Tipo incorreto. Esperava string como primeiro parâmetro");
// } else if (isNaN(age)) {
//     console.log(red, "Tipo incorreto. Esperava número como segundo parâmetro");
// } else {
//     console.log(cian, `Olá, ${firstName}! Você tem ${age} anos`);
// }

// C)
const firstName = process.argv[2];
const age = process.argv[3];
const ageToNumber = Number(process.argv[3]);
const ageAfter7y = ageToNumber + 7;

if (firstName === undefined) {
    console.log(red, "Parâmetro faltando. Esperava 2 parâmetros, mas não recebi nenhum");
} else if (age === undefined) {
    console.log(red, "Parâmetro faltando. Esperava 2 parâmetros, mas recebi apenas 1");
} else if (typeof firstName !== "string" || !isNaN(Number(firstName))) {
    console.log(red, "Tipo incorreto. Esperava string como primeiro parâmetro");
} else if (isNaN(age)) {
    console.log(red, "Tipo incorreto. Esperava número como segundo parâmetro");
} else {
    console.log(cian, `Olá, ${firstName}! Você tem ${ageToNumber} anos. Em sete anos você terá ${ageAfter7y}`);
}
