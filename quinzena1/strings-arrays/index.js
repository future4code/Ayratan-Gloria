/*
        Exercícios de interpretação de código
1)console.log('a. ', array) -> saida =  a. undefined
console.log('b. ', array) -> saida = b. null
console.log('c. ', array.length) -> saida = 11
console.log('d. ', array[i]) -> saida = 3
console.log('e. ', array) -> saida = [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('f. ', valor) -> saida = 10

2)
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Saida -> SUBI NUM ÔNIBUS EM MIRROCOS,27

*/

// 1 ) O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

let nome = prompt("Digite seu nome");
let email = prompt("Digite seu email");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)


/*2)
    Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima na tela o array completo

b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

*/

let comidasFavoritas = ["sushi","sashimi","takoyake","hamburguer","sorvete"]
//a
console.log(comidasFavoritas)
//b
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidasFavoritas[1] = prompt("Digite a sua comida preferida:")

console.log(comidasFavoritas)



/*3)Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array na tela

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array na tela 

*/

let listaDeTarefas = []

listaDeTarefas.push(prompt("Digite a primeira tarefa que você precisa realizar no dia:"))
listaDeTarefas.push(prompt("Digite a segunda tarefa que você precisa realizar no dia:"))
listaDeTarefas.push(prompt("Digite a terceira tarefa que você precisa realizar no dia:"))

console.log(listaDeTarefas)

let indice = Number(prompt("Digite um indice para uma tarefa que você realizou(0 a 2):"))

listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)


/*Desafio
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
*/

let frase = prompt("Digite uma frase:")

let separadorDaFrase = []

separadorDaFrase.push(frase.split(' '))

console.log(separadorDaFrase)

/*Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array */


let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf("Abacaxi"),frutas.length)