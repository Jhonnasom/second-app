'Use Strict'
//Eventos de raton

var boton=document.querySelector("#boton");

function cambiarColor(){
    var bg=boton.style.background;
    if(bg=="green"){
        boton.style.background="red";
       
    }else{
        boton.style.background="green";
    }
    boton.style.padding="10px";
    boton.style.border="1px solid #ccc";
    return true;
}