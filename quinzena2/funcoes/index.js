/* Interpretação de Código
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a) O que vai ser impresso no console?
Primeira chamada: saida -> 10
Segunda chamada : saida -> 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
A função seria realizada e seria calculado os valores e seria retornado o calculo,entretanto, nao teriamos acesso pois o valor nao foi armazenado em nenhuma variavel e também nao foi mostrada na tela


2)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

A função transforma a frase inserida pelo usuario em  minuscula e busca a existencia da palavra "cenoura" dentro da frase

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

b- i- true
ii - true
iii - false
*/


//Exercícios de escrita de código

//1- a)

const dadosPessoa = () => {
    const nome = "Ayratan Hirakawa"
    const idade = 23
    const cidade = "São Paulo"
    const profissao = "estudante"
    return console.log(`Eu sou ${nome}, tenho ${idade} anos,moro em ${cidade} e sou ${profissao}.`)
}

dadosPessoa()


//  1- b)


const inputdadosPessoas = (nome,idade,cidade,profissao) => {
    return console.log(`Eu sou ${nome}, tenho ${idade} anos,moro em ${cidade} e sou ${profissao}.`)
}

const inputNome = prompt("Digite o seu nome")
const inputIdade = Number(prompt("Digite a sua idade"))
const inputCidade = prompt("Digite a sua cidade")
const inputProfissao = prompt("Digite sua profissao")

inputdadosPessoas(inputNome,inputIdade,inputCidade,inputProfissao)

/*
    2) a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
    Invoque a função e imprima no console o resultado.
*/

const soma = (numeroA,numeroB) => {
    return numeroA + numeroB
}

console.log(soma(5,6))

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo. 

const maiorBooleano = (numeroA,numeroB) => {
    return numeroA >= numeroB
}
console.log(maiorBooleano(6,5))

//  c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

const numeroParBooleano = (numero) => {
    return (numero % 2 === 0)
}

console.log(numeroParBooleano(8))

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


const tamanhoMensagemMaiuscula = (mensagem) => {
    console.log(`${mensagem.toUpperCase()}, ${mensagem.length}`)
}
tamanhoMensagemMaiuscula("Labenu está com tudo")

/*

3)  Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas
    4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
 */


 const somatoria = (numeroA, numeroB) => {
     return numeroA + numeroB
 }

 const subtracao = (numeroA, numeroB) => {
    return numeroA - numeroB
}

const multiplicação = (numeroA, numeroB) => {
    return numeroA * numeroB
}

const divisao = (numeroA, numeroB) => {
    return numeroA / numeroB
}


const primeiroNumero = Number(prompt("Digite o primeiro número"))
const segundoNumero = Number(prompt("Digite o segundo número"))

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`)
console.log(`Soma: ${somatoria(primeiroNumero,segundoNumero)}`)
console.log(`Diferença: ${subtracao(primeiroNumero,segundoNumero)}`)
console.log(`Multiplicação: ${multiplicação(primeiroNumero,segundoNumero)}`)
console.log(`Divisão: ${divisao(primeiroNumero,segundoNumero)}`)


/*
   Desafios 
       1) 
        a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
   */

const primeiraArrow = (primeiroParametro) => {
 
    console.log(primeiroParametro)
}

/*
        b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
        Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
*/
const segundaArrow = (numeroA,numeroB) => {
  primeiraArrow(numeroA + numeroB)
}

segundaArrow(2,5)

/*
    Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
    Retorne este valor, invoque a função e imprima o resultado no console. 
*/

const pitagoras = (catetoA,catetoB) => {
    const hipotenusa = Math.sqrt(Math.pow(catetoA,2) + Math.pow(catetoB,2))
    return hipotenusa
}

console.log(pitagoras(3,4))