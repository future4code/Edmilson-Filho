// Exercício 2

const firstNumber = Number(process.argv[2]);
let operation = process.argv[3];
const secondNumber = Number(process.argv[4]);
let result;

const printResult = (firstNumber, operation, secondNumber, valid) => {
    console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
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
        operation = "invalid";
}

if (process.argv.length < 3) {
    console.log(`Parâmetro faltando. Esperava 2 parâmetros, mas recebi apenas 1`);
} else if (typeof firstNumber !== "number") {
    console.log(`Tipo incorreto. Esperava número como primeiro parâmetro`);
} else if (typeof secondNumber !== "number") {
    console.log(`Tipo incorreto. Esperava número como segundo parâmetro`);
} else if (operation === "invalid") {
    console.log("\x1b[31m%s\x1b[0m", "Operação inválida.", "\nOperações possíveis: \"+\", \"-\", \"/\" ou \"*\"");
} else {
    printResult(firstNumber, operation, secondNumber);
}