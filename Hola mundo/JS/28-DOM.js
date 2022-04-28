'Use Strict'

//DOM Document Object Model

function cambiaColor(color){
    caja.style.background=color;
    }

// Conseguir elementos con ID concretos//

//var caja=document.getElementById("micaja");
var caja=document.querySelector("#micaja");

caja.innerHTML="!Texto en la caja desde JS";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className="Hola hola2";

//Conseguir elementos por su etiqueta//
var todosLosDivs=document.getElementsByTagName('div');

var seccion=document.querySelector("#miseccion");
var hr=document.createElement("hr");

var valor;
for(valor in todosLosDivs){

    if(typeof todosLosDivs[valor].textContent =='string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
    
}
seccion.prepend(hr);

//Conseguir elementos por su clase css
var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');

var div;
for(div in divsRojos){
    if(divsRojos[div].className=="rojo")
    divsRojos[div].style.background="red";

}

for(div in divsAmarillos){
    if(divsAmarillos[div].className=="amarillo")
    divsAmarillos[div].style.background="yellow";

}
//Query selector sirve para seleccionar  solo un elemento
var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelector("div.rojo");
console.log(claseRojo);





