function flagv() {
    return document.querySelector("#b2").value
}
let resultado = document.getElementById("resultado")


let but = document.getElementById('b1').addEventListener('click', () => {
    let recorte = document.querySelector('#in1').value.split(' ')
    let firstname = recorte[0]
    let lastname = recorte[recorte.length-1]
    if (flagv() == 'Flag: firstname') {
        resultado.innerText = `O resultado: ${firstname}`;
    } else {
        resultado.innerText = `O resultado: ${lastname}`;
    }
    document.getElementById('in1').value = '';
});

let but2 = document.getElementById('b2').addEventListener('click', () => {
    let flag = document.querySelector('#b2')
    if (flagv() == 'Flag: firstname') {
        flag.style.backgroundColor = 'red'
        flag.value = 'Flag: lastname'
    } else {
        flag.style.backgroundColor = 'chartreuse'
        flag.value = 'Flag: firstname'
    }
});


function expressao(text, flag) {
    
    document.getElementById("resultado").innerText = `O resultado: ${ex}`;
}