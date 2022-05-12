'Use Strict'
//Eventos de raton


function cambiarColor(){
    console.log("Me has dado click");

    var bg=boton.style.background;

    if(bg=="green"){
        boton.style.background="red";
   
    }else{
        boton.style.background="green";
    }

    boton.style.paddig="10px";
    boton.style.border="1px solid #ccc";
    return true;
}

var boton=document.querySelector("#boton");
boton.addEventListener('click',cambiarColor());