// Exercício 1

let nome;
let idade;
console.log(typeof(nome));
console.log(typeof(idade));
// Foi impresso undefined porque não há nenhum valor definido á essa variável
nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");
console.log(typeof(nome));
console.log(typeof(idade));
// A variável idade recebeu uma string, pois o prompt trata o dado inserido no campo como texto
console.log(`Olá ${nome}, você tem ${idade} anos.`);

// Exercício 2

let lugar;
let idiomas;
let serieFavorita;
let sonho;
let hobbyFavorito;

lugar = prompt("De onde você é?");
console.log(`1. De onde você é?`);
console.log(`Resposta: ${lugar}`);
idiomas = prompt("Que idiomas(s) você fala?");
console.log(`2. Que idiomas(s) você fala?`);
console.log(`Resposta: ${idiomas}`);
serieFavorita = prompt("Qual é a sua série favorita?");
console.log(`3. Qual é a sua série favorita?`);
console.log(`Resposta: ${serieFavorita}`);
sonho = prompt("Qual é o seu sonho?");
console.log(`4. Qual é o seu sonho?`);
console.log(`Resposta: ${sonho}`);
hobbyFavorito = prompt("Qual é o seu hobby favorito?");
console.log(`5. Qual é o seu hobby favorito?`);
console.log(`Resposta: ${hobbyFavorito}`);

// Exercício 3

let comidasFavoritas = ["Hamburguer", "Pizza", "Pastel", "Bolo", "Pudim"];
console.log(comidasFavoritas);
console.log(`Essas são as minhas comidas favoritas: `)
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);
comidasFavoritas[2] = prompt("Uma comida favorita");
console.log(comidasFavoritas);

// Exercício 4

let perguntas = ["Você dormiu bem hoje?", "Já bebeu água?", "Você já almoçou?"];
let respostas = [false, true, false];
console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);