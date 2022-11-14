
var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0
var indexId = 0

var menorPreco = 0
var supPreco = []
var suporteNome = []
var supID = []
var supAva = []
var indexSup = 0

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

var maiorId = 0

function OrdernarIds() {
    
    suporteNome = []
    supID = []
    supPreco = []
    supAva = []

    for (var index = 0; index < ids.length; index++) {
        maiorId = 0
        for (var index1 = 0; index1 < ids.length; index1++) {
            if (ids[index1] > maiorId) {
                maiorId = ids[index1]
            }
        }
        for (var index2 = 0; index2 < ids.length; index2++) {
            if (maiorId == ids[index2]) {
                supID[indexSup] = ids[index2]
                suporteNome[indexSup] = nomes[index2]
                supPreco[indexSup] = precos[index2]
                supAva[indexSup] = avaliacoes[index2]
                ids[index2] = 0
                indexSup++
            }
        }
    }
    precos = supPreco
    ids = supID
    nomes = supID
    avaliacoes = supAva
    indexSup = 0

    for (var index = 0; index < ids.length; index++) {
        console.log(ids[index], nomes[index], precos[index], avaliacoes[index])
    }
}

function OrdernarPreço() {
    
    suporteNome = []
    supID = []
    supPreco = []
    supAva = []

    for (var index = 0; index < precos.length; index++) {
        menorPreco = precos[index]
        for (var index1 = 0; index1 < precos.length; index1++) {
            if (precos[index1] < menorPreco) {
                menorPreco = precos[index1]
            }
        }
        for (var index2 = 0; index2 < precos.length; index2++) {
            if (menorPreco == precos[index2]) {
                supPreco[index] = precos[index2]
                supID[index] = ids[index2]
                suporteNome[index] = nomes[index2]
                supAva[index] = avaliacoes[index2]
                precos[index2] = 99999999
            }
        }
    }
    console.log(suporteNome, supID, supAva, supPreco)
    precos = supPreco
    ids = supID
    nomes = supID
    avaliacoes = supAva

    for (var contador = 0; contador < ids.length; contador++) {
        console.log(ids[contador], nomes[contador], precos[contador], avaliacoes[contador])
        
    }
}