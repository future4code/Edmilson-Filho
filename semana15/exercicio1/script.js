// Exercício 1

// A) Utilizando o array de argumentos atribuído ao processo do Node. Exemplo: process.argsv
// B)
const firstName = process.argv[2];
const age = Number(process.argv[3]);

if (process.argv.length < 3) {
    console.log("\x1b[31m%s\x1b[0m", "Parâmetro faltando. Esperava 2 parâmetros, mas recebi apenas 1");
} else if (typeof firstName !== "string") {
    console.log("\x1b[31m%s\x1b[0m", "Tipo incorreto. Esperava string como primeiro parâmetro");
} else if (typeof age !== "number") {
    console.log("\x1b[31m%s\x1b[0m", "Tipo incorreto. Esperava número como segundo parâmetro");
} else {
    console.log("\x1b[36m%s\x1b[0m", "Olá, ${firstName}! Você tem ${age} anos");
}

// C)
const firstName = process.argv[2];
const age = Number(process.argv[3]);
const ageAfter7y = age + 7;

if (process.argv.length < 3) {
    console.log("\x1b[31m%s\x1b[0m", "Parâmetro faltando. Esperava 2 parâmetros, mas recebi apenas 1");
} else if (typeof firstName !== "string") {
    console.log("\x1b[31m%s\x1b[0m", "Tipo incorreto. Esperava string como primeiro parâmetro");
} else if (typeof age !== "number") {
    console.log("\x1b[31m%s\x1b[0m", "Tipo incorreto. Esperava número como segundo parâmetro");
} else {
    console.log("\x1b[36m%s\x1b[0m", `Olá, ${firstName}! Você tem ${age} anos. Em sete anos você terá ${ageAfter7y}`);
}
