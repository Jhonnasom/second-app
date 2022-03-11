'use strict'
//Condicional IF//
//Si A es igual a B entonces haz algo

/*Ejemplo1
var edad1=30;
var edad2=12;

if(edad1>edad2){
    console.log("Edad1 es mayor que edad 2");
}
else {
    console.log("Edad 1 es inferior");
}*/


/*Operadores relacionales
Mayor:>
Menor:<
Mayor o igual:>=
Menor o igual:<=
Igual:==
Distinto:!=
*/

var edad=12;
var nombre= "David Suarez";

if(edad>=18){
    //Si es mayor de edad
    console.log(nombre+" tiene "+ edad +" años, es mayor de edad");
    
    if(edad<=33){
        console.log("Todavia eres Millenial");
        }
    else if(edad>=70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres millenial");
    }
    
}
else{
    console.log(nombre+" tiene "+ edad +" años, es menor de edad");

}

//Operadores lógicos
/*
AND(Y):&&
OR(O):||
Negacion:!
*/
var year=2028;
if(year!= 2016){
    console.log("El año no es 2016 realmente es: "+year);
}

//AND
if(year>=2000 && year<=2020 && year !=2018){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year==2008 || (year>=2018 && year==2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}


