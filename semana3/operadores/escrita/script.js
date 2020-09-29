// Exercicio 1

let idade = prompt("Qual é a sua idade?");
let idadeMelhorAmigoa = prompt("Qual é a idade do seu(a) melhor amigo(a)?");
console.log("Sua idade é maior do que a do(a) seu(a) melhor amigo(a)?" + (Number(idade) - Number(idadeMelhorAmigoa)) > 0);
console.log("Diferença de idade: " + (Number(idade) - Number(idadeMelhorAmigoa)));

// Exercicio 2

let numeroPar = prompt("Insira um número par");
numeroPar = Number(numeroPar);
console.log("Resto da divisão por 2: " + numeroPar%2);
// O resto de todas as divisoes por 2 dao o resultado 0
// Se o usuario inserir um numero impar o resultado sera 1

// Exercicio 3

let listaDeTarefas = [];
listaDeTarefas[0] = prompt("Tres tarefas que você precisa realizar no dia. Primeira: ");
listaDeTarefas[1] = prompt("Tres tarefas que você precisa realizar no dia. Segunda: ");
listaDeTarefas[2] = prompt("Tres tarefas que você precisa realizar no dia. Terceira: ");
console.log(listaDeTarefas);
let itemDaLista = prompt("Escolha o indice de uma tarefa que voce ja realizou: 0, 1 ou 2");
itemDaLista.splice(1, itemDaLista);
console.log(listaDeTarefas);

// Exercicio 4

let nome = prompt("Seu nome é: ");
let email = prompt("Seu email: ");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`);

// Desafios

// Exercicio 1

// (77 - 32)*5/9 + 273.15