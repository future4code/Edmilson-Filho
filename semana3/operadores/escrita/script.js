// Exercicio 1

let idade = prompt("Qual é a sua idade?");
let idadeMelhorAmigoa = prompt("Qual é a idade do seu(a) melhor amigo(a)?");
console.log("Sua idade é maior do que a do(a) seu(a) melhor amigo(a)? " + (Number(idade) - Number(idadeMelhorAmigoa) > 0));
console.log("Diferença de idade: " + (Number(idade) - Number(idadeMelhorAmigoa)));

// Exercicio 2

let numeroPar = prompt("Insira um número par");
numeroPar = Number(numeroPar);
console.log("Resto da divisão por 2: " + (numeroPar%2));
// O resto de todas as divisoes por 2 dao o resultado 0
// Se o usuario inserir um numero impar o resultado sera 1

// Exercicio 3

let listaDeTarefas = [];
listaDeTarefas[0] = prompt("Tres tarefas que você precisa realizar no dia. Primeira: ");
listaDeTarefas[1] = prompt("Tres tarefas que você precisa realizar no dia. Segunda: ");
listaDeTarefas[2] = prompt("Tres tarefas que você precisa realizar no dia. Terceira: ");
console.log(listaDeTarefas);
let itemDaLista = prompt("Escolha o indice de uma tarefa que voce ja realizou: 0, 1 ou 2");
listaDeTarefas.splice(itemDaLista, 1);
console.log(listaDeTarefas);

// Exercicio 4

let nome = prompt("Seu nome é: ");
let email = prompt("Seu email: ");
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`);

// Desafio 1

let setentaESeteGraus = (77 - 32)*5/9 + 273.15;
console.log(setentaESeteGraus + 'K');
let oitentaGraus = (80*9/5 + 32);
console.log(oitentaGraus + '°F');
let trintaGraus = (30*9/5 + 32);
console.log(trintaGraus + '°F');
let trintaGrausKel = (trintaGraus - 32)*5/9 + 273.15;
console.log(trintaGrausKel + 'K');

trintaGraus = prompt("Insira uma temperatura em graus Celsius");
console.log(trintaGraus + 'K');

// Desafio 2

let kWh280 = 280;
let conta = kWh280 * 0.05;
console.log("Custo do consumo: " + conta);
let desconto = 15;
console.log('Custo com desconto: ' + (conta - (conta * 0.15)));

// Desafio 3
console.log((20 * 0.45359237) + "kg");
console.log((10.5 * 0.02834952) + "kg");
console.log((100 * 1609.344) + "m");
console.log((50 * 0.3048) + "m");
console.log((103.56 * 3.785411784) + "l");
let xicaras = 450;
console.log((xicaras * 0.24) + "l");
xicaras = prompt("Digite um valor em xicaras:");
console.log((xicaras * 0.24) + "l");