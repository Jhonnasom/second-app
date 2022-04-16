'Use Strict'
//Arrays, arreglos , matrices

var nombre="Victor Robles";
var nombres= ["Victor Robles","Juan Lopez","Manolo Garcia","Jose Martinez"];

var lenguajes=new Array("PHP","JS","GO","JAVA","C#");
/*
var elemento=parseInt(prompt("Que elemento del array quieres?",0));
alert(nombres[elemento]);

if(elemento>=nombres.length){
    alert("Introduce el numero correcto menor que "+nombres.length);
}
else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<H1>Lenguajes de programacion del 2018</H1>");
document.write("<ul>");
/*
for(var i=0;i<lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}*/

/*
lenguajes.forEach((elemento,indice,array)=>{
    console.log(Array);
    document.write("<li>"+indice+" - "+elemento+" </li");

});*/

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//Busquedas para corroborar si un elemento existe dentro de un array o no
//var busqueda=lenguajes.find(function(lenguaje){
//    return lenguaje="PHP";
//})

/*
//Se utiliza findIndex para encontrar el indice donde se encuentra el elemento buscado
*/
var precios=[10, 20, 50, 80, 12];
var busqueda=precios.some(precio=>precio<10);
console.log(busqueda);




