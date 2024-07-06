
function horadodia(){
    var agr = new Date()
    var horas = agr.getHours()
    var divh = document.getElementById("divHD")
    var foto = document.getElementById(`foto`)

if(horas<12){
    divh.innerHTML=`Agora são ${horas} horas.`
    divh.innerHTML+=` Bom dia!`
    divh.innerHTML+=`<img src="HORARIOS/MANHA.png" alt="manha">`
    document.body.style.backgroundColor=`#4fa1ff`
} else if(horas==12 && horas<13){
    divh.innerHTML=`Agora é meio-dia!`
    divh.innerHTML+=` Tenha um bom almoço.`
    document.body
    } else if(horas>13 && horas<18){
        divh.innerHTML=`Agora são ${horas} horas.`
        divh.innerHTML+=`Tenha uma ótima tarde!`
        foto.innerHTML = `<img src='HORARIOS/pexels-pixabay-161963.png'></img>`
        document.body.style.backgroundColor= `#e4c22c`
        
    }   else{
        divh.innerHTML=`Agora são ${horas} horas.`
        divh.innerHTML+=`Tenha bons sonhos!`
        img.src =`HORARIOS/pexels-pixabay-33545.png`
        document.body.style.backgroundColor=`#00234b`
    }
}
