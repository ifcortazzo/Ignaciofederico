
//Style.display = "None" , oculta secciones, block muestra. Con "block" se pueden mostrar

function  ocultarSeccionMain(){

document.querySelector("#seccionMain").style.display = "none"



}

function audio()
{

    var audio = new Audio('01 Hammer Revelation.mp3');
audio.play()
document.querySelector("#icarus").style.display = "none"
}




document.querySelector("#icarus").addEventListener("click",audio)