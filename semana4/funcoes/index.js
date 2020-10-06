// Exercício 1


// a. Vai ser impresso 10
// 50

// b. Apareceria 10
// 50

// Exercício 2


// a. As saídas serão Darvas
// Caio
// João

// b. Vai ser impresso Amanha
// Caio
// undefined

// Exercício 3


// Ela recebe um array, escolhe apenas os itens pares e põe o item ao quadrado no novo array
// Sugestão de nome: paresAoQuadrado

// Exercício 4


// a.
function exibirMinhaBio() {
    console.log("Eu sou Edmilson, tenho 20 anos, moro em Lauro de Freitas e sou estudante.");
}

// b.
function exibirBio(nome, idade, cidade, boolean) {
    if (boolean) {
        boolean = "sou";
    } else {
        boolean = "Não sou";
    }

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${boolean} estudante.`;
}
exibirBio("Edmilson", 20, "Lauro de Freitas", true);

// Exercício 5

// a.
function adicionarNumeros(num1, num2) {
    return num1 + num2;
}

console.log(adicionarNumeros(5, 10));

// b.
function checarMaiorOuIgual(num1, num2) {
    let resultado;

    if (num1 >= num2) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

checarMaiorOuIgual(5, 10);

// c.
function repetirString10x(string) {
    for (let i = 0; i < 10; i++) {
        console.log(string);
    }
}

repetirString10x("Erro no sistema");

// Exercício 6


// a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

function contarElementosArray(array) {
    let quantidade = array.length;

    return quantidade;
}

console.log(contarElementosArray(array));

// b.
function checarParOuImpar(num) {
    let par;
    
    if (num % 2 === 0) {
        par = true;
    } else {
        par = false;
    }

    return par;
}

console.log(checarParOuImpar(45));

// c.
function contarElementosPares(array) {
    let quantidade = 0;
    
    for (let num of array) {
        if (num % 2 === 0) {
            quantidade++;
        }
    }

    return quantidade;
}

console.log(contarElementosPares(array));

// d.
function contarElementosPares2(array) {
    let quantidade = 0;
    
    let par;
    
    for (let num of array) {
        if (num % 2 === 0) {
            par = true;
            quantidade++;
        } else {
            par = false;
        }
    }

    return quantidade;
}

console.log(contarElementosPares2(array));

// Desafio 1


calcularQuadrado = soma => {
    let quadrado = soma * soma;

    console.log(quadrado);
}

calcularSoma = (num1, num2) => {
    let soma = num1 + num2;

    calcularQuadrado(soma);
}

calcularSoma(4, 5);

// Desafio 2


const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

// a.
calcularSomaMulti = numeros => {
    let numerosNovos = [];

    for (let num of numeros) {
        if (num % 2 === 0) {
            numerosNovos.push(num * 2);
        }
    }

    return numerosNovos;
}

calcularSomaMulti(numeros);

// b.
buscarMaiorNumero = numeros => {
    let maiorNumero;
    let maiorQueQuantos = 0;
    
    for (let i = 0; i < numeros.length - 1; i++) {
        for (let num of numeros) {
            if (num > numeros[i]) {
                maiorQueQuantos++;
            }
        }

        if (maiorQueQuantos === numeros.length - 1) {
            maiorNumero = numeros[i];    
        }

        maiorQueQuantos = 0;
    }

    return maiorNumero;
}

// c.
buscarIndiceDoMaior = numeros => {
    let maiorNumero;
    let maiorQueQuantos = 0;
    
    for (let i = 0; i < numeros.length - 1; i++) {
        for (let num of numeros) {
            if (num > numeros[i]) {
                maiorQueQuantos++;
            }
        }

        if (maiorQueQuantos === numeros.length - 1) {
            maiorNumero = i;    
        }

        maiorQueQuantos = 0;
    }

    return maiorNumero;
}

// d.
exibirArrayInvertido = numeros => {
    let arrayInvertido = [];
    
    for (let i = numeros.length - 1; i >= 0; i--) {
        arrayInvertido.push(numeros[i]);
    }

    return arrayInvertido;
}

console.log(exibirArrayInvertido(numeros));