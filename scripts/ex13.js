let escolha = document.getElementById("escolha")
let lista = document.getElementById("ilista")
let valores = []
let resposta = document.getElementById("respostas")

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
function inlist(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (isNumber(escolha.value) && !inlist(escolha.value, valores)) {
        valores.push(Number(escolha.value))
        let option = document.createElement("option")
        option.text = `Número ${escolha.value} adicionado!`
        lista.appendChild(option)
    } else {
        window.alert("[ERROR] O número é invalido ou já foi adicionado!")
    }
    escolha.value = ``
    escolha.focus()
}
function verificar() {
    Number(valores.sort())
    let maior = Number(valores.length) - 1
    let menor = valores[0]
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    let media = soma / valores.length
    resposta.innerHTML=`</p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    resposta.innerHTML+=`<p>O maior número cadastrado é ${valores[maior]}.</p>`
    resposta.innerHTML+=`<p>O menor número cadastrado é ${menor}</p>`
    resposta.innerHTML+=`<p>A soma dos números cadastrados é ${soma}.</p>`
    resposta.innerHTML+=`<p>A média dos números cadastrados é ${media}.</p>`
}
function refazer() {
    resposta.innerHTML=""
    lista.innerHTML=""
    valores=[]
}