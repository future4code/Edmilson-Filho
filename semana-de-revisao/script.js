// let texto = prompt("Digite o texto a reverter");

// const reversorTexto = (texto) => {
//     texto = texto.split("").reverse().join("");
//     return texto;
// }

// console.log(reversorTexto(texto));


// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     const textoRevertido = [...texto].reverse().join("");
//     let resultado;
    
//     if (texto === textoRevertido) {
//         resultado = "É um palíndromo";
//         return resultado;
//     } else {
//         resultado = "Não é um palíndromo";
//         return resultado;
//     }
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     const textoOrdem = [...texto].sort().join("");
//     return textoOrdem;
// }

// console.log(testePalindromo(texto));


// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     const textoOrdem = texto.capitalize();
//     return textoOrdem;
// }

// console.log(testePalindromo(texto));


// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     let textoOrdem = texto.split(" ");
//     textoTamanho = textoOrdem.sort((a, b) => {return b.length - a.length});

//     // console.log(texto.split(" ")[0].length);
//     return textoTamanho[0];
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     // let textoString = texto.split(" ");
//     let vogais = new RegExp('a|e|i|o|u', 'gi');
//     let textoVogais = texto.match(vogais);
//     // let textoVogais = textoString.filter(item => {
//     //     if (item === "a" || "e" || "i" || "o" || "u") {
//     //         return item;
//     //     }
//     // })

//     return textoVogais.length;
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     // let textoString = texto.split(" ");
//     let vogais = new RegExp('a|e|i|o|u', 'gi');
//     let textoVogais = texto.match(vogais);
//     // let textoVogais = textoString.filter(item => {
//     //     if (item === "a" || "e" || "i" || "o" || "u") {
//     //         return item;
//     //     }
//     // })

//     return textoVogais.length;
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     let textoArray = texto.split(", ");
//     console.log(textoArray);
//     // let segundoMaior = textoArray.reduce((a, b) => {return Math.max(a, b)});
//     // resultado = textoArray.map(item => {return item !== segundoMaior})
//     let resultado = textoArray.sort().reverse();
//     // textoArray = textoArray.splice()
//     return resultado[1] + ", " + resultado[resultado.length - 2];
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     // let textoString = texto.split(" ");
//     let textoVogais = texto.match(/\w/).join("");
//     // let textoVogais = textoString.filter(item => {
//     //     if (item === "a" || "e" || "i" || "o" || "u") {
//     //         return item;
//     //     }
//     // })

//     return textoVogais;
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     let textoArray = texto.split(", ");
//     let maiorNumero = textoArray.reduce((a, b) => Math.max(a, b));

//     return maiorNumero;
// }

// console.log(testePalindromo(texto));

// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     let textoArray = texto.split(", ");
//     let maiorNumero = textoArray.reduce((a, b) => {return Math.max(a.length, b.length)});

//     return maiorNumero;
// }

// console.log(testePalindromo(texto));


// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     let textoOrdem = texto.split(", ");
//     textoTamanho = textoOrdem.sort((a, b) => {return a - b});

//     // console.log(texto.split(" ")[0].length);
//     return textoTamanho;
// }

// console.log(testePalindromo(texto));


// let texto = prompt("Digite o texto a testar");

// const testePalindromo = (texto) => {
//     let textoOrdem = texto.split(", ");
//     textoTamanho = textoOrdem.sort((a, b) => {return a - b});
//     textoMaior = textoOrdem.reduce((a, b) => {return Math.max(a, b)});
//     alert(textoMaior)
//     // console.log(texto.split(" ")[0].length);
//     return textoTamanho;
// }

// console.log(testePalindromo(texto));


// const testePalindromo = () => {
//     for (let i = 0; i < 30; i++) {
//         if (i % 2 === 0 && i % 3 === 0) {
//             console.log(`${i} é par e divisível por 3`);
//         } else if (i % 2 === 0) {
//             console.log(`${i} é par`);
//         } else if (i % 3 === 0) {
//             console.log(`${i} é divisível por 3`);
//         }        
//     }
// }

// console.log(testePalindromo());


// const testePalindromo = () => {
//     let estrelas = "";
    
//     for (let i = 0; i < 5; i++) {
//         estrelas += "*";
//         console.log(estrelas);
//     }
// }

// console.log(testePalindromo());

const testePalindromo = () => {
    let alunosScores = {
        "Soter": 80,
        "Paula": 77,
        "Caio": 88,
        "Amanda": 95,
        "Mateus": 68,
    }

    let alunosNotas = [];

    for (let alunoScore in alunosScores) {
        console.log(alunosScores[alunoScore]);
        
        if (alunosScores[alunoScore] < 100 && alunosScores[alunoScore] > 90) {
            alunosNotas.push(`${alunoScore}: Nota A`);
        } else if (alunosScores[alunoScore] < 90 && alunosScores[alunoScore] > 80) {
            alunosNotas.push(`${alunoScore}: Nota B`);
        } else if (alunosScores[alunoScore] < 70 && alunosScores[alunoScore] > 60) {
            alunosNotas.push(`${alunoScore}: Nota C`);
        }
    }
    
    console.log(alunosNotas);
}

console.log(testePalindromo());