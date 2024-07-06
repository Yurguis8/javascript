var ano = document.getElementById("inpano")
var resposta = document.getElementById("resposta")

function clicar() {
    var resposta1 = Number(ano.value) + ` <mark>não é um ano Bissexto!</mark> \u274C`
    var resposta2 = Number(ano.value) + ` <mark id='markv'>é um ano Bissexto!</mark> \u2714\uFE0F`
    if (Number.isInteger(Number(ano.value) / 4) && Number.isInteger(Number(ano.value) / 100) && Number.isInteger(Number(ano.value) / 400)) {
        resposta.innerHTML= resposta2
    } else{
    if (Number.isInteger(Number(ano.value) / 4) && Number.isInteger(Number(ano.value) / 100)){
        resposta.innerHTML= resposta2
    } else{
    if (Number.isInteger(Number(ano.value) / 4)) {
        resposta.innerHTML= resposta2
    } else{
        resposta.innerHTML= resposta1
    }
    }
    }
}