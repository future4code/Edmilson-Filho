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
        console.log("Boa Noite!");
        break;
    default:
        console.log("Digite M (matutino), V (vespertino) ou N (noturno)");
        break;
}

// Exercício 7

let generoFilme = prompt("Que gênero de filme vocês vão assistir?").toLowerCase();
let precoFilme = Number(prompt("Qual é o preço do ingresso?"));
if (generoFilme === 'fantasia' && precoFilme < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

// Desafio 1

generoFilme = prompt("Que gênero de filme vocês vão assistir?").toLowerCase();
precoFilme = Number(prompt("Qual é o preço do ingresso?"));
if (generoFilme === 'fantasia' && precoFilme < 15) {
    const snackFilme = prompt(("Que snack você vai comprar?"));
    console.log("Bom filme!");
    console.log("... com " + snackFilme);
} else {
    console.log("Escolha outro filme :(");
}

// Desafio 2

const nomeCompleto = prompt("Insira o seu nome completo").toLowerCase();
const tipoJogo = prompt("Digite o tipo de jogo").toLowerCase();
const etapaJogo = prompt("Qual a etapa do jogo? SF (semi-final), DT (decisão de 3º lugar) ou FI (final)?").toLowerCase();
const categoria = Number(prompt("A categoria do ingresso é (1, 2 , 3 ou 4):"));
const quantidade = Number(prompt("Quantidade de ingressos:"));

let valor = 0;

if (tipoJogo === "in") {
    if (etapaJogo === "sf") {
        switch (categoria) {
            case 1:
                valor = 321.95;
                break;
            case 2:
                valor = 214.63;
                break;
            case 3:
                valor = 134.146;
                break;
            case 4:
                valor = 53.658;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    } else if (etapaJogo === "dt") {
        switch (categoria) {
            case 1:
                valor = 160.975;
                break;
            case 2:
                valor = 107.317;
                break;
            case 3:
                valor = 80.487;
                break;
            case 4:
                valor = 41.463;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    } else if (etapaJogo === "fi") {
        switch (categoria) {
            case 1:
                valor = 482.926;
                break;
            case 2:
                valor = 321.951;
                break;
            case 3:
                valor = 214.634;
                break;
            case 4:
                valor = 80.487;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    }
} else if (tipoJogo === "do") {
    if (etapaJogo === "sf") {
        switch (categoria) {
            case 1:
                valor = 1320;
                break;
            case 2:
                valor = 880;
                break;
            case 3:
                valor = 550;
                break;
            case 4:
                valor = 220;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    } else if (etapaJogo === "dt") {
        switch (categoria) {
            case 1:
                valor = 660;
                break;
            case 2:
                valor = 440;
                break;
            case 3:
                valor = 330;
                break;
            case 4:
                valor = 170;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    } else if (etapaJogo === "fi") {
        switch (categoria) {
            case 1:
                valor = 1980;
                break;
            case 2:
                valor = 1320;
                break;
            case 3:
                valor = 880;
                break;
            case 4:
                valor = 330;
                break;
            default:
                console.log("A categoria pode ser apenas 1, 2, 3 ou 4");
                break;
        }
    }
}

if (tipoJogo === "do") {
    console.log("---Dados da compra---");
    console.log("Nome do cliente: " + nomeCompleto);
    console.log("Tipo do jogo: nacional");
    console.log("Etapa do jogo: " + etapaJogo);
    console.log("Categoria: " + categoria);
    console.log("Quantidade de ingressos: " + quantidade + " ingressos");
    console.log("---Valores---");
    console.log("Valor do ingresso: R$" + valor);
    console.log("Valor total: R$" + (valor * quantidade));
}

if (tipoJogo === "in") {
    console.log("---Dados da compra---");
    console.log("Nome do cliente: " + nomeCompleto);
    console.log("Tipo do jogo: internacional");
    console.log("Etapa do jogo: " + etapaJogo);
    console.log("Categoria: " + categoria);
    console.log("Quantidade de ingressos: " + quantidade + " ingressos");
    console.log("---Valores---");
    console.log("Valor do ingresso: U$ " + valor);
    console.log("Valor total: U$ " + (valor * quantidade));
}