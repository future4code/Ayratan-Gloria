/* Exercícios de interpretação de código

1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 

R - O programa incrementa o valor da variavel Valor até ser menor que 5 e depois imprime, a saida será 4

2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
a) O que vai ser impresso no console?
R -  A saida será 19, 21, 23, 25, 27, 30

b) Poderia ser usado indexOf() para informar qual o indice de cada um dos numero impressos

3)
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

A saida seria a impressão de 4 linhas,onde a cada linha adiciona,seria adicionado um asterisco a mais

Sendo assim,a saida será:
*
**
***
****

*/

/*
1)Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

c) Por fim, imprima o array com os nomes dos bichinhos no console


const numeroBichinhos = Number(prompt("Quantos bichinhos de estimação você possui?"))
const nomesBichinhos = []

if(numeroBichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}else if(numeroBichinhos > 0) {
    let contador = numeroBichinhos

    while(contador != 0){
        nomesBichinhos.push(prompt("Digite o nome do seu pet:"))
        contador --
    }
}
console.log(nomesBichinhos)

2)
a) Escreva um programa que **imprime** cada um dos valores do array original.

b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

*/

const arrayOriginal = [1,5,10,15,20,30]

const valoresOriginais = (array) => {
    for(let valor of array){
        console.log(valor)
    }
}

const valoresDivisiveisDez = (array) => {
    for(let valor of array){
        if(valor % 10 === 0){
            console.log(valor)
        }
    }
}

const arrayNovoPar = (array) => {
    const novoArray = []
    for(let valor of array){
        if(valor % 10 === 0){
         novoArray.push(valor)
        }
    }
    console.log(novoArray)
}

const arrayString = (array) =>{
    let stringArray = []
    let indice = 0

    for(let valor of array){    
        stringArray.push(`O elemento do índex ${indice} é : ${valor}`)
        indice += 1
    }
    console.log(stringArray)
}

const maiorValor = (array) => {
    let menor = array[0]
    let maior = array[0]
 
    for(let i=0;i < array.length;i++){
        if(maior < array[i]){
            if(menor > array[i]) {
                 menor = array[i]
        } maior = array[i]
       }
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`)
}


valoresOriginais(arrayOriginal)
valoresDivisiveisDez(arrayOriginal)
arrayNovoPar(arrayOriginal)
arrayString(arrayOriginal)
maiorValor(arrayOriginal)