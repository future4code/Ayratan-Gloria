/* 
    Exercícios de interpretação de código

1) console.log(filme.elenco[0]) => Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length-1]) =>Virginia Cavendish
console.log(filme.transmissoesHoje[2]) => Globo,14h

2)
a)
console.log(cachorro) => {Juca,3,SRD}
console.log(gato) => {Juba,3,SRD}
console.log(tartaruga) => {Jubo,3,SRD}

b) Os 3 pontos copiam os atributos do objeto,no exemplo, a idade e raca não são modificados,sendo apenas modificado o nome

3) a)
console.log(minhaFuncao(pessoa, "backender")) => false
console.log(minhaFuncao(pessoa,"altura")) => undefined

b) O valor da primeira saida é devido ao valor  booleano contido no backender (false) , já o valor undefined ocorre pois a altura não está definido no objeto pessoa

*/

//Exercícios de escrita de código

// 1)

const pessoa = {
    nome: "Amanda",
    apelido: ["Amandinha","Madinha", "Mandi"]
}

const exibir = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]} `)
}

exibir(pessoa)


const segundaPessoa = {
    ...pessoa,
    apelido: ["Amorzinho", "Amarula", "Dinha"]
}

exibir(segundaPessoa)

//2)

const objetoA = {
    nome: "Ademir",
    idade: 32,
    profissao: "Engenheiro Ambiental"
}

const objetoB = {
    nome: "Samara",
    idade: 18,
    profissao: "Atriz"
}

const exibirInformacoes = (objeto) => {
    const arrayMontado = [objeto.nome,objeto.nome.length, objeto.idade, objeto.profissao,objeto.profissao.length]
    console.log(arrayMontado)
}

exibirInformacoes(objetoA)
exibirInformacoes(objetoB)

let carrinho = []

const frutaA = {
    nome: "Banana",
    disponibilidade: true
}

const frutaB = {
    nome: "Maçã",
    disponibilidade: true
}

const frutaC = {
    nome: "Mamão",
    disponibilidade: true
}

//Função controle de estoque criada para o desafio 3
const controleEstoque = (objeto) => {
    return objeto.disponibilidade = !objeto.disponibilidade
}

const adicionarCarrinho = (objeto) => {
    carrinho.push(objeto)
//controle de estoque sendo chamada para utilização no desafio 3
    controleEstoque(objeto)
}

adicionarCarrinho(frutaA)
adicionarCarrinho(frutaB)
adicionarCarrinho(frutaC)

console.log(carrinho)


/*
1) Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com
 essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
*/

const dadosPessoais = () =>{
    const nome = prompt("Digite o seu nome")
    const idade = Number(prompt("Digite a sua idade"))
    const profissao = prompt("Digite a sua profissao")

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(pessoa,typeof(pessoa))
}

dadosPessoais()


/*
2) Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. 
A função deve retornar uma mensagem no seguinte modelo:
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true
*/

const comparandoLancamento = (filmeA,filmeB) => {
    console.log(`O primeiro filme foi lançado antes do segundo?${filmeA.lançamento < filmeB.lançamento}`)
    console.log(`O primeiro filme foi no mesmo ano que o segundo?${filmeA.lançamento === filmeB.lançamento}`)

}


const filmeA = {
    nome: "Como treinar seu Dragão",
    'ano de lançamento':  2010
}

const filmeB = {
    nome: "Big Hero",
    'ano de lançamento': 2014
}

comparandoLancamento(filmeA,filmeB)

/*
  3)  Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das 
    frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 
    Função criada e utilizada dentro do exercicio 3, linha:87
*/



console.log(frutaA,frutaB,frutaC)








