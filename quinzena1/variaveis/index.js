/* Exercícios de interpretação de código
Exercicio 1 - Como a declaração é let, a variavel b será primeiramente mostrada no console.log com o valor 10 e no console.log seguinte, com o valor 5
Exercicio 2 - as variaveis a, b e c possuem no final do codigo o valor de 10 cada
Exercicio 3 - Utilizando os padrões camelCase, podemos ter a variavel p com o nome de horasTrabalhadasDia e  variavel t poderia ser salarioDia
*/ 

// Exercícios de interpretação de código
// Ex1

let nome 
let idade

/*Não sei se o imprimir do exercicio é o alert, o print em tela ou o console log,usarei alert(apenas comentado) e console.log, que foram visto em aula

alert(typeof(nome))
alert(typeof(idade))
*/

console.log(typeof(nome))
console.log(typeof(idade))

// O tipo impresso foi de undefined , isso ocorre defino a falta de atribuição do tipo de variavel(number,string,boolean) 

nome = prompt("Digite o seu nome:")
idade = prompt("Digite sua idade")

console.log(typeof(nome))
console.log(typeof(idade))

// O tipo impresso foi string, isso ocorre pois as entradas de console são consideradas strings,mesmo que sejam numeros

console.log("Olá",nome,",você tem",idade,"anos")

//Ex2

let questao1 = "Você já jantou hoje?"
let questao2 = "Você já assistiu o filme Como treinar seu dragão?"
let questao3 = "Você gosta de sorvete?"

let resposta1 = "Não"
let resposta2 = "Sim"
let resposta3 = "Sim"

console.log(questao1, "-",resposta1)
console.log(questao2, "-",resposta2)
console.log(questao3, "-",resposta3)

//Ex3

let a = 10
let b = 25
let c 
console.log("Valor da variavel a:",a,"Valor da variavel b:",b)
c = a
a = b
b = c
console.log("Valor da variavel a:",a,"Valor da variavel b:",b)

//Desafio

let numeroA = Number(prompt("Digite um numero"))
let numeroB = Number(prompt("Digite outro numero"))

console.log("Primeiro número digitado:",numeroA)
console.log("Segundo número digitado:",numeroB)

console.log("O primeiro número somado ao segundo número resulta em:",numeroA + numeroB)
console.log("O primeiro número multiplicado pelo segundo número resulta em",numeroA * numeroB)