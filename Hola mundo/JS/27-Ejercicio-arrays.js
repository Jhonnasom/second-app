'Use Strict'
/* 
1-Realizar un programa que pida 6 numeros por pantalla y los ingrese en un
    array
2-Mostral el array entero (todos sus elementos) en el cuerpo de la pagina 
    y la consola.
3-Ordenarlos y mostrarlo.
4-Invertir su orden y mostrarlo.
5-Mostrar cuantos elementos tiene el array
6-Busqueda de un valor introducido por el usuario que nos diga
    si lo encuentra y su indice.
*/

function mostrarArray(elementos, textoCustom){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento,index)=> {
    document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}
//Pedir 6 numeros 
var numeros=[];

for(var i=0; i<=5; i++){
    //numeros[i]= parseInt(prompt("Introduce un numero",0));
    numeros.push(parseInt(prompt("Introduce un numero",0)));

}
//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//1.-Mostrar el array por la consola
console.log(numeros);

//Ordenar y mostrarlo
numeros.sort(function(a,b){return a-b});
console.log(numeros);
mostrarArray(numeros," Ordenados");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,'revertido');

//Contar elementos 
document.write("<h1>El array tiene: "+numeros.length+" elementos");

//Busqueda 
var busqueda= parseInt(prompt("Busca un numero",0));

var posicion=numeros.findIndex(numero=>numero==busqueda);

if(posicion && posicion !=-1){

    document.write("<h1>Encontrado </h1>");
    document.write("<h1>Posicion de la busqueda"+posicion+"</h1>");
    
}else{
    document.write("<h1>No Encontrado </h1>");
}



