var verificar = document.getElementById("verificar")
var anodenas = document.getElementById("AnodeNas")
var sexmas = document.getElementById("Sexmas")
var sexfem = document.getElementById("Sexfem")
var resultado = document.getElementById("resultado")
var resultado2 = document.getElementById('resultado2')
var parag1 = document.getElementById('parag1')
var data = new Date()
var ano = data.getFullYear()
var divdores2 = document.getElementById("divdores2")
var resultado3 = document.getElementById("resultado3")
var fsex = document.getElementsByName("sex")

function clicar() {
    if (anodenas.value == 0 || anodenas.value  > ano)
    {
    resultado2.setAttribute("hidden", "hidden");
    parag1.setAttribute("hidden", "hidden");
    resultado.removeAttribute("hidden", "hidden");
    resultado.innerText=`[Erro] Alguma informação está incorreta ou faltando.`;
    } else{
        if (anodenas.value <= 1900){
            resultado.removeAttribute("hidden", "hidden");
            parag1.setAttribute("hidden", "hidden");
            resultado2.setAttribute("hidden", "hidden");
            resultado.innerText=`[Erro] Alguma informação está incorreta.`;
    } else {
        if (anodenas.value > 1900 &&fsex[0].checked && anodenas.value < ano) {

            var idade = ano - Number(anodenas.value)
        resultado.setAttribute("hidden", "hidden");
        parag1.setAttribute("hidden", "hidden");
        resultado2.removeAttribute("hidden");
        resultado2.innerText=`A sua idade é ${idade} e você é homem.`

        } else {
            if (anodenas.value > 1900 &&fsex[1].checked && anodenas.value < ano) {
                var idade = ano - Number(anodenas.value)
        resultado.setAttribute("hidden", "hidden");
        parag1.setAttribute("hidden", "hidden");
        resultado2.removeAttribute("hidden");
        resultado2.innerText=`A sua idade é ${idade} e você é mulher.`
            } else {
                var idade = ano - Number(anodenas.value)
        resultado.removeAttribute("hidden", "hidden");
        parag1.setAttribute("hidden", "hidden");
        resultado2.setAttribute("hidden", "hidden");
        resultado.innerText=`Faltou informação!`
            }
        
        }
        
        
        
    };
    
}}
