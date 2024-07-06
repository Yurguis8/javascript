var inicio = document.getElementById("inputinicio")
var fim = document.getElementById("inputfim")
var passo = document.getElementById("inputpasso")  
var res = document.getElementById("Resultado")

function Contar(){


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Alguma informação está incompleta")
} else {

res.innerHTML = ("Contando: ")
var i = Number(inicio.value)
var f = Number(fim.value)
var p = Number(passo.value)

if (i < f) 
{
    for (let c = i; c <= f; c += p) {
        res.innerHTML +=`${c}\uD83D\uDC63`
    }
} else
{
    for (let c = i; c >= f; c -= p) {
        res.innerHTML +=`${c}\uD83D\uDC63`
}

}
res.innerHTML += `\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F`



}
}