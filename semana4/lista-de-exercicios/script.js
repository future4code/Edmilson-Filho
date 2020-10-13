// Exercício 1

// O código recebe o valor 100 como parâmetro, pede ao usuario para informar a cotacao do dolar, retorna o valor recebido como parametro multiplcado por 100 e exibido em reais e no final imprimi o resultado

// Exercicio 2

// Recebe uma string com um tipo de investimento e um valor como parâmetros para determinar o valor após o investimento de acordo com o tipo de investimento

// Exercicio 3

// Itera sobre o array numeros colocando os seus numeros pares no array1 e seus impares no array2, então exibe comprimento de numeros, array1 e array2

// Exercicio 4

// Verifica se cada item do array numeros não é infinito, atribuindo numero1 a numero se verdadeiro. Verifica também se cada numero é positivo atribuindo, se verdadeiro, esse número a numero2

// Exercício 5

// for, for ... of ... e for ... in ...
// let numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i <= numeros.length; i++) {
//     console.log(numeros[i]);
// }

// for (let i of numeros) {
//     console.log(numeros);
// }

// for (let i in numeros) {
//     console.log(numeros);
// }

// Exercício 6

// a. false
// b. true
// c. true
// d. false
// e. false


// Exercício 7

// Não, porque quantidadeDeNumerosPares é indefinido e i é estático
// const quantidadeDeNumerosPares = prompt("Digite a quantidade de números pares");
// let i = 0

// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++;
// }

// Exercício 8

// const trianguloLado1 = prompt("Insira o tamanho do 1º lado do triângulo");
// const trianguloLado2 = prompt("Insira o tamanho do 2º lado do triângulo");
// const trianguloLado3 = prompt("Insira o tamanho do 3º lado do triângulo");

// const classificarTriangulo = (lado1, lado2, lado3) => {
//     if (lado1 === lado2 === lado3) {
//         return "Equilátero";
//     } else if (lado1 === lado2 || lado1 === lado3 || lado === lado3) {
//         return "Isósceles"
//     } else {
//         return "Escaleno";
//     }
// }

// classificarTriangulo(trianguloLado1, trianguloLado2, trianguloLado3);

// Exercício 9

const numero1 = prompt("Insira o primeiro número");
const numero2 = prompt("Insira o segundo número");

const diferencarDoisNumeros = (numero1, numero2) => {
    let maior;
    let divisivel;
    let diferenca;
    
    if (numero1 > numero2) {
        maior = `${numero1} é maior`;
    } else {
        maior = `${numero2} é maior`;
    }

    if (numero1 % numero2 === 0) {
        divisivel = `${numero1} é divisível por ${numero2}`;
    }

    diferenca = abs(numero1 - numero2);

    console.log(maior);
    console.log(divisivel);
    console.log(diferenca);
}

diferencarDoisNumeros(numero1, numero2);