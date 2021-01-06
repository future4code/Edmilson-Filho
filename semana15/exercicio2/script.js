// Exercício 2

const firstNumber = process.argv[2];
const firstNumberToNumber = Number(process.argv[2]);
let operation = process.argv[3];
const secondNumber = process.argv[4];
const secondNumberToNumber = Number(process.argv[4]);

let result;

const red = "\x1b[31m%s\x1b[0m";
const cian = "\x1b[36m%s\x1b[0m";

const printResult = (firstNumber, operation, secondNumber, valid) => {
    console.log(cian, `${firstNumber} ${operation} ${secondNumber} = ${result}`);
}

switch(operation) {
    case "+":
        result = firstNumber + secondNumber;
    break;
    case "-":
        result = firstNumber - secondNumber;
    break;
    case "/":
        result = firstNumber / secondNumber;
    break;
    case "*":
        result = firstNumber * secondNumber;
    break;
    default:
        operation = operation != undefined ? "invalid" : operation;
}

console.log(isNaN(Number(secondNumber)))
console.log(operation)
if (firstNumber === undefined) {
    console.log(red, "Parâmetro faltando. Esperava 3 parâmetros, mas não recebi nenhum");
} else if (operation === undefined) {
    console.log(red, "Parâmetro faltando. Esperava 3 parâmetros, mas recebi apenas 1");
} else if (operation !== undefined && secondNumber === undefined) {
    console.log(red, "Parâmetro faltando. Esperava 3 parâmetros, mas recebi apenas 2");
} else if (isNaN(Number(firstNumber))) {
    console.log(red, "Tipo inválido. Esperava número como primeiro parâmetro");
} else if (isNaN(Number(secondNumber))) {
    console.log(red, "Tipo inválido. Esperava número como terceiro parâmetro");
} else if (operation === "invalid") {
    console.log(red, "Operação inválida. \nDigite: \"+\", \"-\", \"/\" ou \"*\"");
} else {
    printResult(firstNumber, operation, secondNumber);
}