
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

function ProcurarID(id) {
    for (var i = 0; i < ids.length; i++) {
        if(id == ids[i]){
            console.log("O produto de id " + id + " tem o nome " + nomes[i] + " tem o preço R$ " + precos[i] + " e tem a avaliação " + avaliacoes[i])
        }
    }   
}

function ProcurarNome(nome) {
    for (var i = 0; i < nomes.length; i++) {
        if(nome == nomes[i]){
            console.log("O produto com o nome ", nome, " tem ID: ", ids[i])
        }
    }   
}