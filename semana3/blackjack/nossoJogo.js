
let carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {

   let cartasUsuario = [];
   let cartasComputador = [];
   
   // for (let i = 0; i < 2; i++) {
      for (let i = 0; i < 2; i++) {
         carta = comprarCarta();
         cartasUsuario[i] = carta;
         carta = comprarCarta();
         cartasComputador[i] = carta;
      }

      let maoUsuario = `${cartasUsuario[0].texto}, ${cartasUsuario[1].texto}`; 
      let maoComputador = `${cartasComputador[0].texto}, ${cartasComputador[1].texto}`; 
      let pontuacaoUsuario = `${cartasUsuario[0].valor + cartasUsuario[1].valor}`; 
      let pontuacaoComputador = `${cartasComputador[0].valor + cartasComputador[1].valor}`;

      console.log(`Usuário - cartas: ${maoUsuario}  - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${maoComputador}  - pontuação ${pontuacaoComputador}`);

      if (pontuacaoUsuario === pontuacaoComputador) {
         console.log("Empate!");
      } else if (pontuacaoUsuario > pontuacaoComputador) {
         console.log("O usuário ganhou!");
      } else if (pontuacaoUsuario < pontuacaoComputador){
         console.log("O computador ganhou!");
      }
   // }

   // for (let i = 0; i < 2; i++) {
   //    cartasUsuario[i] = comprarCarta();
   //    console.log(cartasUsuario[i]);
   //    cartasComputador[i] = comprarCarta();
   //    console.log(cartasComputador[i]);
   // }

   // for (let i of cartasUsuario) {
   //    console.log(i.texto);
   //    console.log(i.valor);
   // }
   // for (let i of cartasComputador) {
   //    console.log(i.texto);
   //    console.log(i.valor);
   // }
} else {
   console.log("O jogo acabou");
}