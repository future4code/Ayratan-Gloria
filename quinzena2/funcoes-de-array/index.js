/*
Exercícios de interpretação de código
1) nome: "Amanda Rangel", apelido: "Mandi", 0, o Array usuarios inteiro
nome: "Laís Petra", apelido: "Laura"  , 1, array usuarios inteiro
nome: "Letícia Chijo", apelido: "Chijo", 2 , array usuarios inteiro


2)Amanda Rangel
Laís Petra 
Letícia Chijo


3)nome: "Amanda Rangel", apelido: "Mandi"
 nome: "Laís Petra", apelido: "Laura"
nome: "Letícia Chijo", apelido: "Chijo"

*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)Crie um novo array que contenha apenas o nome dos doguinhos(amei chamar de doguinhos)

 const arrayNomeDoguinhos = pets.map((doguinhos) => {
     return doguinhos.nome
 })

 console.log(arrayNomeDoguinhos)


 //b)Crie um novo array apenas com os cachorros salsicha

 const filtroCachorroSalsicha = pets.filter((doguinho) => {
     return doguinho.raca === "Salsicha"
 })

 console.log(filtroCachorroSalsicha)


 //c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const cupomDesconto = pets 
    .filter((doguinho) =>{
        return doguinho.raca ==="Poodle"
    })
    .map((doguinho) => { 
        return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${doguinho.nome}`)
    })

//2) 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item
 const novoArrayProdutos = produtos.map((produto) => {
     return produto.nome
 })

 console.log(novoArrayProdutos)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

/*  const novoArrayComDesconto = produtos.map((produto,indice,array) => {
   produto.preco = produto.preco + (produto.preco * 0.05)
   return 
 })

 console.log(novoArrayComDesconto) */

 //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const categoriaBebidas = produtos.filter((produto) => {
     return produto.categoria === "Bebidas"
 })

 console.log(categoriaBebidas)

//d)Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const filtroYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})

console.log(filtroYpe)

//e)Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const fraseComYpe = filtroYpe.map((produto) => {
    return console.log(`Compre ${produto.nome} por ${produto.preco}`)
})