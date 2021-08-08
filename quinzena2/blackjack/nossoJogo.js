//mensagem inicial
console.log("Bem vindo ao jogo de Blackjack")
const usuario = []
const computador = []
let somaUsuario = 0
let somaComputador = 0
//Confirm para inciiar o jogo
if(confirm("Quer iniciar uma nova rodada?")) {
for(contador = 0; contador < 2;contador ++) {
   usuario[contador] = comprarCarta()
   computador[contador] = comprarCarta()
   somaUsuario = somaUsuario + usuario[contador].valor 
   somaComputador = somaComputador + computador[contador].valor
}

//console.log para mostrar o texto solicitado
console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação ${somaUsuario}`)
console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${somaComputador}`)

//Comparação para saber quem ganhou
if(somaUsuario === somaComputador) console.log("Empate")
else if(somaUsuario > somaComputador) console.log("O usuário ganhou!")
else console.log("O computador ganhou!")

}else {
   console.log("O jogo acabou")
}

