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


// const classificarTriangulo = (lado1, lado2, lado3) => {
    // const trianguloLado1 = prompt("Insira o tamanho do 1º lado do triângulo");
    // const trianguloLado2 = prompt("Insira o tamanho do 2º lado do triângulo");
    // const trianguloLado3 = prompt("Insira o tamanho do 3º lado do triângulo");

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

const diferencarDoisNumeros = (numero1, numero2) => {
    const numero1 = prompt("Insira o primeiro número");
    const numero2 = prompt("Insira o segundo número");

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

// Exercício 10

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosMaioresMenores = (numeros) => {
    let i = 0;

    for (let numero of numeros) {
        for (let numero2 of numeros) {
            if (numero > numero2) {
                i++;
            }
        }

        if (i === numeros.length - 1) {
            console.log(`O segundo maior número é ${numero}`);
        }
        
        i = 0;
    }
}

const alertar = () => {
    alert("Hello Future4");
}

alert();

// Exercício 11

// Nós utilizamos arrays quando precisamos apenas criar uma lista de dados em sequência. Arrays são justamente isso. Entretanto, objetos são necessários para o propósito de estabelecermos uma entidade independente, contendo um conjunto de propriedades, com dados relacionados e/ou métodos.

// Exercício 12

const criaRetangulo = (lado1, lado) => {
    const retanguloInfo = {
        'largura': lado1,
        'altura': lado2,
        'perímetro': 2 * (lado1 + lado2),
        'área': lado1 * lado2
    }
}

// Exercício 13

const filmeFavorito = {
    'título': 'Alita: Anjo de Combate',
    'ano': 2019,
    'diretor': 'Robert Rodriguez', 
    'atores': ['Rosa Salazar', 'Christoph Waltz']
}

console.log (`Venha assistir ao filme Alita: Anjo de Combate, de 2019, dirigido por Robert Rodriguez e estrelado por Rosa Salazar e Christoph Waltz.`);

// Exercício 14

const minhaPessoa = {
    'nome': 'Edmilson',
    'idade': 20,
    'endereco': 'Lauro de Freitas - BA'
}

const anonimizarPessoa = (minhaPessoa) => {
    const pessoaAnonima = {
        ...minhaPessoa,
        'nome': 'ANÔNIMO'
    }
}

// Exercício 15

// a. 
const pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 },
]

const buscarAdultos = (pessoas) =>{
        pessoas.filter((pessoa, index, pessoas) => {
            if (pessoa.idade >= 20) {
                return true;
            }
    })
};

// b.

const buscarMenores = (pessoas) =>{
        pessoas.filter((pessoa, index, pessoas) => {
            if (pessoa.idade < 20) {
                return true;
            }
    })
};