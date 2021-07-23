// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Digite a altura do seu retangulo:"))
  let largura = Number(prompt("Digite a largura do seu retangulo:"))
/* Criando uma variavel para armazenar o valor da area
  const area = altura * largura 
  console.log(area)
  */
 // Imprimindo direto os valores
  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNascimento = Number(prompt("Digite o ano em que você nasceu:"))

  console.log(anoAtual - anoNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Digite seu peso(Em KG):"))
  let altura = Number(prompt("Digite sua Altura(em metros):"))

  let imc = (peso / (altura * altura))

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Digite o seu nome:")
  let idade = prompt("Digite a sua idade:")
  let email = prompt("Digite seu endereço de email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let coresFavoritas = []

  coresFavoritas.push(prompt("Digite sua primeira cor favorita"))
  coresFavoritas.push(prompt("Digite sua segunda cor favorita"))
  coresFavoritas.push(prompt("Digite sua terceira cor favorita"))

  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let stringUsuario = prompt("Digite a sua string:")
  console.log(stringUsuario.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custo = Number(prompt("Digite o custo do espetaculo de teatro:"))
  let valorIngresso = Number(prompt("Digite o valor de cada ingresso"))
  
  console.log(custo / valorIngresso)  
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let palavraA = prompt("Digite sua primeira palavra:")
  let palavraB = prompt("Digite sua segunda palavra:")

  console.log(palavraA.length === palavraB.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let palavraA = prompt("Digite sua primeira palavra:")
  let palavraB = prompt("Digite sua segunda palavra:")

  console.log(palavraA.toUpperCase() === palavraB.toUpperCase())

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNascimento = Number(prompt("Digite o ano de nascimento:"))
  let anoEmitida = Number(prompt("Digite o ano que sua carteira de identidade foi emitida:"))

  let idade = anoAtual-anoNascimento
  let renovada = anoAtual-anoEmitida
  console.log((idade <= 20 && renovada >= 5) || ((idade > 20 && idade <= 50 ) && renovada >= 10) || (idade > 50 &&renovada >=15) )
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano = Number(prompt("Digite o ano"))

  console.log((ano % 400 === 0) || ((ano % 4 ===0) && (ano % 100 !== 0)))
 
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let maiorIdade = prompt("Você possui mais de 18 anos?")
  let medioCompleto = prompt("Você possui ensino médio Completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  

//toUpperCase adicionado para tornar a função sem problema com case sensitive
  console.log(maiorIdade.toUpperCase() === "SIM" && medioCompleto.toUpperCase() === "SIM" && disponibilidade.toUpperCase() == "SIM")
}