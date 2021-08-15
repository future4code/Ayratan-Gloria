// EXERCÍCIO 01
function inverteArray(array) {
  const novoArrayInvertido = array.map((item,indice,array) => {
      return array[array.length - indice - 1]
  })
  return novoArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const novoArrayParesElevados = array.filter((item) => {
      if(item % 2 === 0)  return item 
        }).map((item) => {
            return item * item
  })
  return novoArrayParesElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const novoArrayPares = array.filter((item) => {
      if(item % 2 === 0) return item 
  })
  return novoArrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = array[0]
  for(var i = 0; i < array.length; i++){
      if(array[i] > maior) maior = array[i]
  }
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
//armazenando os valores do calculo logico em variaveis para facilitar o acesso
  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const resposta = [a, b , c , d, e]
  return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayPares = []
  const numero = 0

  for(var i = 0; i < n;i++){
      arrayPares.push(numero + (2 * i)) 
  }
  return arrayPares
}


// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if(a !== b &&  a !== c && b !== c)  return 'Escaleno'
  else if(a === b && a === c) return 'Equilátero'
  else return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let menor = 0
  const objeto = {
    maiorNumero: '',
    maiorDivisivelPorMenor: '',
    diferenca: '',
  }
  
  if(num1 > num2){ 
    objeto.maiorNumero = num1
    menor = num2
  }
  else { 
    objeto.maiorNumero = num2
    menor = num1 
  }

  if(objeto.maiorNumero % menor === 0) objeto.maiorDivisivelPorMenor = true
  else objeto.maiorDivisivelPorMenor = false

  objeto.diferenca = objeto.maiorNumero - menor
 
 return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; i < array.length; i++){
      if(array[i] > array[j]){
        let primeiroTemporario = array[i]
        array[j] = array[j+1]
        array[j+1] = primeiroTemporario
       }
    }
  }
   return array
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
