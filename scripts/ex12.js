function Contar() {
    
    var num = document.getElementById("inputinicio");
    var areatab = document.getElementById("areatabuada");
    var num2 = 0;
    var valor = document.getElementById("inputvalor")
    areatab.value = ""

    for (let i = num2; i <= valor.value; i++) {
        var result = Number(num.value) * i;
        areatab.value += `${num.value} X ${i} = ${result}
`;
        let option = document.createElement('option');
        option.text = `${num.value} X ${i} = ${result}`;
        areatab.appendChild(option);
    }
    if (num.value == 0 || valor.value <= 0) {
        window.alert("[ERROR] Falta informação ou alguma informação está incorreta!")
        areatab.value = ""
        areatab2.value = ""
    }
}        