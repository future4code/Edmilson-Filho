// Exercicio 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// O código realiza um teste para saber se o número digitado e par ou ímpar
// Para números pares é impresso "Passou no teste", já para números ímpares imprime-se "Não passou no teste" 


// Exercicio 2

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a. O código serve para dizer o preço da laranja, da maçã, da uva, da pêra e de outras frutas
// b. Imprimirá 2.25
// c. Seria exibido 5

// Exercicio 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a. Está atribuindo um prompt com o valor alterado para número á const numero
// b. Com o número 10 vai ser "Esse número passou no teste" e mensagem is not defined. Já com o -10, será mensagem is not defined
// c. Sim, porque a váriavel mensagem foi declarada dentro do bloco if(numero > 0){...} através do tipo de variável let
