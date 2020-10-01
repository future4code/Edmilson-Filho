// Exercicio 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

// O resultado será 5

// Exercicio 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a. Imprime 19
// 21
// 23
// 25
// 27
// 30
// b. Não.
// for (let numero = 0; lista.length - 1; numero++) {
    // numero[i];
// }

// Desafio 1

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

// Imprimiria 0
// 00
// 000
// 0000
// 00000

// Exercício 3

const arrayOriginal = [1, 2, 3, 4, 5];

// a.
for (let i of arrayOriginal) {
    console.log(i);
}

// b.
for (let i of arrayOriginal) {
    console.log(i/10);
}

// c.
let arrayNovo = [];
for (let i of arrayOriginal) {
if (i % 2 === 0) {
    arrayNovo.push(i);
}
}
console.log(arrayNovo)

// d.
let arrayNovoString = [];
for (let i = 0; i < arrayOriginal.length - 1; i++) {
    arrayNovoString.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`);
}

console.log(arrayNovoString);

// e.
let maior = 0;
for (let i of arrayOriginal) {
    for (let ii = 0; ii < arrayOriginal.length; ii++) {
        if (i > arrayOriginal[ii]) {
            maior += 1;
        }
    }

    // console.log(maior);
    if (maior === arrayOriginal.length - 1) {
        console.log(i);
    }

    maior = 0;
}

// Desafio 2
let numeroPensado = Number(prompt("Escolha um número, 1º jogador"));
console.log("Vamos jogar!");

let numeroChute;
let numeroTentativas = 0;
while (numeroChute !== numeroPensado) {
    numeroChute = Number(prompt("2º jogador, Advinhe o número"));
    numeroTentativas++;
    console.log("O número chutado foi " + numeroChute);
    
    if (numeroChute > numeroPensado) {
        console.log("Errou. O número escolhido é menor");
    }
    
    if (numeroChute < numeroPensado){
        console.log("Errou. O número escolhido é maior");
    }
}

if (numeroChute === numeroPensado) {
    console.log("Acertou");
    console.log(`O número de tentativas foi : ${numeroTentativas}`);
}

// Desafio 3
console.log("Vamos jogar!");
let numeroChute;
let numeroPensado = Math.floor((Math.random() * 100) + 1);;
let numeroTentativas = 0;

while (numeroChute !== numeroPensado) {
    numeroChute = Number(prompt("Advinhe o número"));
    numeroTentativas++;
    console.log("O número chutado foi " + numeroChute);
    
    if (numeroChute > numeroPensado) {
        console.log("Errou. O número escolhido é menor");
    }
    
    if (numeroChute < numeroPensado){
        console.log("Errou. O número escolhido é maior");
    }
}

if (numeroChute === numeroPensado) {
    console.log("Acertou");
    console.log(`O número de tentativas foi : ${numeroTentativas}`);
}