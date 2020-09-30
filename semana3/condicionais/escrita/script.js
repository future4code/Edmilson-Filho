// Exercício 4

const idade = Number(prompt("Qual é a sua idade?"));

if (idade >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

// Exercício 5

const turno = prompt("Em que turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno)").toLowerCase();

if (turno === 'm') {
    console.log("Bom Dia!");
} else if (turno === 'v') {
    console.log("Bom Tarde!");
} else if (turno === 'n') {
    console.log("Bom Noite!");
}

// Exercício 6

switch (turno) {
    case 'm':
        console.log("Bom Dia!");
        break;
    case 'v':
        console.log("Boa Tarde!");
        break;
    case 'n':
        console.log("Boa Norte!");
        break;
    default:
        console.log("Digite M (matutino), V (vespertino) ou N (noturno)");
        break;
}

// Exercício 7

const generoFilme = prompt("Que gênero de filme vocês vão assistir?").toLowerCase();
const precoFilme = Number(prompt("Qual é o preço do ingresso?"));
if (generoFilme === 'fantasia' && precoFilme < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

// Desafio 1

const generoFilme = prompt("Que gênero de filme vocês vão assistir?").toLowerCase();
const precoFilme = Number(prompt("Qual é o preço do ingresso?"));
if (generoFilme === 'fantasia' && precoFilme < 15) {
    const snackFilme = Number(prompt("Que snack você vai comprar?"));
    console.log("Bom filme!");
    console.log("... com " + snackFilme);
} else {
    console.log("Escolha outro filme :(");
}

// Desafio 2

const nomeCompleto = prompt("Insira o seu nome completo").toLowerCase();
const tipoJogo = Number(prompt("Digite o tipo de jogo"));
const etapaJogo = prompt("Qual a etapa do jogo? SF (semi-final), DT (decisão de 3º lugar) ou FI (final)?").toLowerCase();
const categoria = Number(prompt("A categoria do ingresso é (1, 2 , 3 ou 4):"));
const quantidade = Number(prompt("Quantidade de ingressos:"));

const valor = 0;

if (tipoJogo === "in") {
    if (etapaJogo === "sf") {
        switch (categoria) {
            case 1:
                valor = 5412;
                break;
            case 2:
                valor = 3608;
                break;
            case 3:
                valor = 8118;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    } else if (etapaJogo === "dt") {
        switch (categoria) {
            case 1:
                valor = 2706;
                break;
            case 2:
                valor = 2706;
                break;
            case 3:
                valor = 8118;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    } else if (etapaJogo === "fi") {
        switch (categoria) {
            case 1:
                valor = 8118;
                break;
            case 2:
                valor = 2706;
                break;
            case 3:
                valor = 8118;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    }
} else if (tipoJogo === "do") {
}

console.log(nomeCompleto, tipoJogo, etapaJogo, categoria, quantidade, ". O valor de cada ingresso é ");