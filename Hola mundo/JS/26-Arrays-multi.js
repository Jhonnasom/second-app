'Use Strict'
//Arrays multidimensionales son arrays dentro de otros arrays

var categorias=["Accion","Terror","Comedia"];
var peliculas=["La verdad duele","La vida es bella","Gran torino"];

var cine=[categorias,peliculas];

//console.log(cine[0][1]); //Primera dimension categorias,2da Terror//
//console.log(cine[1][2]);

/*
var elemento="";

do{
    elemento=prompt("Introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento!="ACABAR")  */

var indice=peliculas.indexOf("Gran torino");
if(indice>-1){
    peliculas.splice(indice,1);
}

peliculas.join();
console.log(peliculas);