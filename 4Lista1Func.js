
var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var indexId = 0

function Cadastrar() {
    ids[index] = indexId + 1
    nomes[index] = prompt("Insira o nome do produto ")
    precos[index] =parseInt(prompt("Insira o preço do produto "))
    avaliacoes[index] = prompt("Insira uma avaliaçâo para o produto ")
    console.log("ID: ", ids[index], " Nome: ", nomes[index], " Preço: ", precos[index], " Avaliação: ", avaliacoes[index])
    index++
    indexId++
}

