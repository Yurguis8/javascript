function flagv() {
    return document.querySelector("#b2").value
}

let but = document.getElementById('b1').addEventListener('click', () => {
    let g = document.querySelector('#in1').value;
    let start = g.substring(0,3)
    let leg = g.length
    let end = g.substring(leg-3,leg)

    if (flagv() == 'Flag: start') {
        document.getElementById("resultado").innerText = `O resultado: ${start}`;
    } else {
        document.getElementById("resultado").innerText = `O resultado: ${end}`;
    }
    document.querySelector('#in1').value = '';
});

let but2 = document.getElementById('b2').addEventListener('click', () => {
    let flag = document.querySelector('#b2')
    if (flagv() == 'Flag: start') {
        flag.style.backgroundColor = 'red'
        flag.value = 'Flag: end'
    } else {
        flag.style.backgroundColor = 'chartreuse'
        flag.value = 'Flag: start'
    }
});


function expressao(text, flag) {
    
    document.getElementById("resultado").innerText = `O resultado: ${ex}`;
}