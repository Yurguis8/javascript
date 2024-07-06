var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var main = document.getElementById("main")
var resultado = document.getElementById("resultado")

function clicar() {
    var delta1 = Number(b.value) ** 2 - 4 * Number(a.value) * Number(c.value)
    var raizdelta = Math.sqrt(delta1)
    var duasxa = 2 * Number(a.value)
    var xm = -Number(b.value) + raizdelta
    var xm2 = -Number(b.value) - raizdelta
    var x1 = xm / duasxa
    var x2 = xm2 / duasxa
    if (delta1 >= 0) {
        resultado.innerText= `Δ = ${delta1}
    x' = ${x1} 
    X'' = ${x2} 
    √Δ = ${raizdelta}`
    } else {
        resultado.style.color="#ff0000"
        resultado.innerText=`Ocorreu algum erro. Não é possível resolver a equação pois Δ = ${delta1}.`
    }
    
}