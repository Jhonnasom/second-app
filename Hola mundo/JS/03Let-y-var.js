'use strict'
//Definiendo variables con 'Let y var'

//Prueba con var
var numero=40;
console.log(numero); //Valor40

if(true){
    var numero=50;
    console.log(numero); //Valor50
}

console.log(numero); //Valor50

//Prueba con Let
var texto="Curso Js";
console.log(texto); //Valor

if(true){
    let texto="Curso Lavavel 5";
    console.log(texto); //valor Laravel5
}

console.log(texto); //Valor sera 'Curso JS'

//Diferencias entre let y var
//El valor de 'let' es solamente dentro de un bloque

//'Var'es universal 