let but = document.getElementById('b1').addEventListener('click', () => {
    let g = document.querySelectorAll('.g');

    expressao(Number(g[0].value), Number(g[1].value), Number(g[2].value), Number(g[3].value), Number(g[4].value), Number(g[5].value));
});
function expressao(a, b, c, d, e, f) {
    let ex = ((((a + b)-c)*d)/e)**f;
    document.getElementById("resultado").innerText = `O resultado: ${ex}`;
}



/*   let b = Number(document.getElementById("b").value);
let c = Number(document.getElementById("c").value);
let d = Number(document.getElementById("d").value);
let e = Number(document.getElementById("e").value);
let f = Number(document.getElementById("f").value); */