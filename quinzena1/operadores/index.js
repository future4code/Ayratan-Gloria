/* 
Exercicios de interpretação de código 
Ex1


const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)  -> True && False = False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  -> True && False && !False(True) = False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) -> True || false = True

console.log("d. ", typeof resultado) -> resultado = boolean
 
-------------------------------------//--------------------------
Ex2 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 

R: A entrada via promp nos fornece um tipo de variavel string ,sendo portanto ao utilizar operações aritiméticas com string teremos : valor_PrimeiroNumeroValor_SegundoNumero

Ex3 
Para que a saida seja uma soma dos numeros digitados, deve-se utilizar a função Number() ,englobando o promp. Desta forma,ficamos com:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero

console.log(soma) 



    Exercícios de escrita de código

a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

let numeroPar = Number(prompt("Digite um número par:"))

console.log("",numeroPar % 2)   

//Numeros testados : 4 , 36, 128, 364 -> Percebemos que ao realizarmos a operação de resto de qualquer número par por 2 dará sempre resto 0

//Numeros Testados : 251, 51, 21, 37 -> Percebemos que ao realizarmos a operação de resto de qualquer número impar por 2 dará sempre resto 1


/* 
Ex3
    Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas
*/

const idade = Number(prompt("Digite sua idade em anos:"))

console.log("Sua idade em meses é de:",idade * 12, "meses") // Lógica utilizada : 1 ano = 12 meses, x anos = x * 12
console.log("Sua idade em dias é de:", idade * 365, "dias") //Logica utilizada : 1 ano = 365 dias, x anos = x * 365(logica adotada desconsidera anos bissexto e qual mês a pessoa se encontra)
console.log("Sua idade em horas é de:",idade * 8760,"horas") // Lógica utilizada : 1 ano = 8760 horas, x anos = x * 8760(a logica adotada desconsidera as horas que não completaram 1 ano)


/* 
Ex4
    Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens
        O primeiro numero é maior que segundo? true ou false
        O primeiro numero é igual ao segundo? true ou false
        O primeiro numero é divisível pelo segundo? true ou false
        O segundo numero é divisível pelo primeiro? true ou false

obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.

*/

const numeroA = Number(prompt("Digite o primeiro número:"))
const numeroB = Number(prompt("Digite o segundo número:"))

console.log("Primeiro Número digitado:",numeroA,"Segundo numero digitado:",numeroB)
console.log("O primeiro numero é maior que segundo?",numeroA > numeroB)
console.log("O primeiro numero é igual que segundo?",numeroA === numeroB)
console.log("O primeiro numero é divisivel pelo segundo?",numeroA % numeroB === 0)
console.log("O segundo numero é divisivel pelo primeiro?",numeroB % numeroA === 0)


/*Desafios
1)
a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

dados:
Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
Celsius para Kelvin
 K=C+273

 */

console.log("Calculo para mostrar conversão de 77ºF para K:",(77 - 32) * (5/9) + 273.15,"K")
console.log("Calculo para mostrar a conversão de 80ºC para ºF", 77 * (9/5) + 32,"ºF")

//Podemos utilizar a formula pega na internet para conversão de Celsius para Kelvin ou aplicar a formulas dadas apenas, para isso,iniciaremos 2 variaveis
let celsiusFah = 30 *(9/5) + 32
let kelvinFah = (celsiusFah - 32) * (5/9) + 273.15
console.log("Calculo para mostrar a conversão de 30ºC em ºF:",celsiusFah,"ºF"," e em K:",kelvinFah,"K")

//Para o exercicio D , iremos iniciar a variavel para que o usuario entre com a temperatura em Celsius

let temperaturaCelsius = Number(prompt("Digite a temperatura em Celsius a qual você deseja converter"))
console.log("Temperatura digitada:",temperaturaCelsius,"º")

celsiusFah = temperaturaCelsius * (9/5) + 32
kelvinFah = (celsiusFah - 32) * (5/9) + 273.15 

console.log("Calculo para mostrar a conversão de",temperaturaCelsius,"º em ºF:",celsiusFah,"ºF"," e em K:",kelvinFah,"K")

/*
2)
Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de 
energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

    b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
*/

let custoQuilowattHora = 0.05
let consumo = 280
//A
console.log("Calculo do valor a ser pago por uma residencia que consumiu 280 quilowatt-hora será de R$",consumo * custoQuilowattHora,"reais")
//B

let desconto = 0.15

console.log("Calculo do valor a ser pago por uma residencia que consumiu 280 quilowatt-hora e com desconto de 15 % será de R$",(consumo * custoQuilowattHora) -(consumo * custoQuilowattHora) * desconto,"reais")

//Podemos escrever também como:

let  calculo  = custoQuilowattHora * consumo
console.log("Valor a pagar com 15% desconto R$",calculo - (calculo*desconto),"Reais")


/*
Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). 
Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede

a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg`

b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
`10.5oz equivalem a X kg`

c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
`100mi equivalem a X m`

d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
`50ft equivalem a X m`

e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l`

f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
`450 xic equivalem a X l`

g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
*/
//a
let numero = 20
let converteLibraParaQuilo =  numero / 2.2046

console.log("20lb equivalem a",converteLibraParaQuilo,"Kg")

//b
numero = 10.5
let converteOncaParaQuilo = numero / 35.274

console.log("10.5oz equivalem a",converteOncaParaQuilo,"Kg")

//c
numero = 100
let converterMilhaParaMetro = numero / 0.00062137

console.log("100mi equivalem a",converterMilhaParaMetro,"m")
 
//d 
numero = 50
let converterPesParaMetro = numero / 3.2808

console.log("50ft equivalem a",converterPesParaMetro,"m")

//e
numero = 103.56
let converterGalaoParaLitro = numero / 0.26417

console.log("103.56gal equivalem a",converterGalaoParaLitro,"l")

//f
numero = 450 
let converterXicaraParaLitro = numero * 0.24

console.log("450 xic equivalem a",converterXicaraParaLitro,"l")

//g
numero = Number(prompt("Digite o valor em Xicaras que você deseja converter para Litros:"))
converterXicaraParaLitro = numero * 0.24
console.log("",numero,"xicaras convertidas em Litros da:",converterXicaraParaLitro,"l")



