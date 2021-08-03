/*
    Exercícios de interpretação de código
1)
        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero = Number(respostaDoUsuario)

        if (numero % 2 === 0) {
        console.log("Passou no teste.")
        } else {
        console.log("Não passou no teste.")
    }

    a)O codigo acima recebe atravez do console um numero digitado pelo usuario e faz um teste para verificar se o resto dele é 0 (portanto,um número par), caso seja
    ele retorna "Passou no teste", do contrario retorna "Não passou no teste"
    b)Para qualquer número par ,ele irá imprimir Passou no teste
    c)Para qualquer numero impar,ele irá imprimir Não Passou no teste


2)let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a)O codigo acima recebe uma entrada atraves do console ,contendo o nome de uma fruta e depois verifica em qual switch essa fruta se encaixa,modificando o valor de acordo com o case que ela pertence
Feito isso, o nome e o valor da fruta
b)A saida para Maçã será : O preço da fruta Maçã é R$ 2.25
c)O valor de preco seria o ultimo valor declarado(no caso , no default) pois ao retirar o break, o código abaixo da Pera seria executado,modificando o preco final

3)
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a)A primeira linha recebe através do promp uma string e a converte em um numero e armazena ela na variavel numero
b) Com valor 10 , a saida será  Esse número passou no teste, no caso de -10 ele não irá fazer nada exceto chamar o console.log(mensagem) - que não irá mostrar nada pois a mensagem esta declarada apenas de forma interna e nao globalmente
c) Sim , irá mostrar um erro pois a menssagem foi declarada apenas no bloco if e não em escopo global,sendo assim,quando é chamada,nao possui valor declarado.
*/


/*
    Exercícios de escrita de código
1)Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

*/

const idade = Number(prompt("Digite a sua idade"))

if(idade >= 18) console.log("Você pode dirigir")
else console.log("Você não pode dirigir")


/*
2)
Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/

const turno = prompt("Digite o turno a qual você estuda")


const funcaoTurno = (entradaTurno) => {
    if(entradaTurno === "M") {
        console.log("Bom dia!")
    }else if(entradaTurno === "V") {
        console.log("Boa tarde!")
    }else {
        console.log("Boa Noite!")
    }
}

funcaoTurno(turno)

/*
//3)aproveitando a declaração usada acima

*/
switch(turno) {
    case "M": {
        console.log("Bom dia!")
        break
    }
    case "V": {
        console.log("Boa tarde!")
        break
    }
    case "N": {
        console.log("Boa noite!")
        break
    }
    default: {alert
        console.log("Digite um valor de turno válido")
        break
    }
}

/*

4)Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre 
o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", 
caso contrário, imprima "Escolha outro filme :("
*/

/*
const generoFilme = prompt("Digite o gênero do filme que você quer assistir:")
const valorIngresso = Number(prompt("Digite o valor do ingresso:"))

const topa = (filme,preco) => {
    if(filme === "fantasia" && preco < 15) {
        console.log("Bom filme!")
    }else console.log("Escolha outro filme :(")
}
topa(generoFilme,valorIngresso)


/*
    Desafio
1)Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt
 qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens
  "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.
*/


const generoFilme = prompt("Digite o gênero do filme que você quer assistir:")
const valorIngressoCinema = Number(prompt("Digite o valor do ingresso:"))

const topa = (filme,preco) => {
    if(filme === "fantasia" && preco < 15) {
        const lanchinho = prompt("Qual lanchinho você irá comprar?")
        console.log(`Bom filme! e aproveite o seu ${lanchinho}`)
    }else console.log("Escolha outro filme :(")
}
topa(generoFilme,valorIngressoCinema)

/* 
2)Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que 
o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/

const nomeCompleto = prompt("Digite o seu nome completo:")
const tipoJogo = prompt("Digite o tipo de jogo( IN indica internacional; e DO indica doméstico):")
const etapaJogo = prompt("Digite a etapa de jogo a qual você irá assistir(SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)")
const categoria = Number(prompt("Digite a categoria(1,2,3 ou 4):"))
const quantidade = Number(prompt("Digite a quantidade de ingressos a qual deseja comprar:"))

let valorIngresso = 0
let valorTotal = 0
let nomeTipoJogo = ''
let nomeEtapaJogo = ''

const calculoIngresso = (tjogo,ejogo,cat,quant) => {

    if(ejogo === 'SF'){
        switch(cat){
            case 1: {
                if(tjogo === "IN"){
                    valorIngresso =  1320 * 4.1
                    valorTotal = 1320 * 4.1 * quant
                }else{
                    valorIngresso = 1320
                    valorTotal = 1320 * quant
                }
                break;
            }
            case 2: {
                if(tjogo === "IN"){
                    valorIngreso = 880 * 4.1
                    valorTotal = 880 * 4.1 * quant
                }else{
                    valorIngresso = 880
                    valorTotal = 880 * quant
                }
                break;
            }
            case 3: {
                if(tjogo === "IN"){
                    valorIngresso = 550 * 4.1
                    valorTotal = 550 * 4.1 * quant
                }else{
                    valorIngresso = 550
                    valorTotal = 550 * quant
                }
                break;
            }
            case 4: {
                if(tjogo === "IN"){
                    valorIngresso = 220 * 4.1
                    valorTotal = 220 * 4.1 * quant
                }else{
                    valorIngresso = 220
                    valorTotal = 220 * quant
                }
                break;
            }
        }
    }else if(ejogo === "DT"){
        switch(cat){
            case 1: {
                if(tjogo === "IN"){
                    valorIngresso = 660 * 4.1
                    valorTotal = 660 * 4.1 * quant
                }else{
                    valorIngresso = 660 
                    valorTotal = 660 * quant
                }
                break;
            }
            case 2: {
                if(tjogo === "IN"){
                    valorIngresso = 440 * 4.1
                    valorTotal = 440 * 4.1 * quant
                }else{
                    valorIngresso = 440
                    valorTotal = 440 * quant
                }
                break;
            }
            case 3: {
                if(tjogo === "IN"){
                    valorIngresso = 330 * 4.1
                    valorTotal = 330 * 4.1 * quant
                }else{
                    valorIngresso = 330
                    valorTotal = 330 * quant
                }
                break;
            }
            case 4: {
                if(tjogo === "IN"){
                    valorIngresso = 170 * 4.1
                    valorTotal = 170 * 4.1 * quant
                }else{
                    valorIngresso = 170
                    valorTotal = 170 * quant
                }
                break;
            }
        }
    }else{
        switch(cat){
            case 1: {
                if(tjogo === "IN"){
                    valorIngresso = 1980 * 4.1
                    valorTotal = 1980 * 4.1 * quant
                }else{
                    valorIngresso = 1980
                    valorTotal = 1980 * quant
                }
                break;
            }
            case 2: {
                if(tjogo === "IN"){
                    valorIngresso = 1320 * 4.1
                    valorTotal = 1320 * 4.1 * quant
                }else{
                    valorIngresso = 1320
                    valorTotal = 1320 * quant
                }
                break;
            }
            case 3: {
                if(tjogo === "IN"){
                    valorIngresso = 880 * 4.1
                    valorTotal = 880 * 4.1 * quant
                }else{
                    valorIngresso = 880 
                    valorTotal = 880 * quant
                }
                break;
            }
            case 4: {
                if(tjogo === "IN"){
                    valorIngresso = 330 * 4.1
                    valorTotal = 330 * 4.1 * quant
                }else{
                    valorIngresso = 330
                    valorTotal = 330 * quant
                }
                break;
            }
        }
    }
}

calculoIngresso(tipoJogo,etapaJogo,categoria,quantidade)




if(etapaJogo === "SF"){
    nomeEtapaJogo = "Semi-final"
}else if(etapaJogo === "DT"){
    nomeEtapaJogo ="Decisão terceiro lugar"
}else {
    nomeEtapaJogo = "Final"
}

if(tipoJogo === "IN"){
    nomeTipoJogo = "Internacional"
    console.log(`
                 ---Dados da  Compra---
            Nome do Cliente: ${nomeCompleto}
            Tipo do jogo: ${nomeTipoJogo}
            Etapa do jogo: ${nomeEtapaJogo}
            Categoria: ${categoria}
            Quantidade de Ingressos: ${quantidade}
            ---Valores---
            Valor do ingresso: U$ ${valorIngresso}
            Valor total : U$ ${valorTotal}`)
}else{
    nomeTipoJogo = "Nacional"
    console.log(`
                 ---Dados da  Compra---
            Nome do Cliente: ${nomeCompleto}
            Tipo do jogo: ${nomeTipoJogo}
            Etapa do jogo: ${nomeEtapaJogo}
            Categoria: ${categoria}
            Quantidade de Ingressos: ${quantidade}
            ---Valores---
            Valor do ingresso: R$ ${valorIngresso}
            Valor total : R$ ${valorTotal}`)
}


