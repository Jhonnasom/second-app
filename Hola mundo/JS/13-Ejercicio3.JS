'Use strict'
/*Hacer un programa que muestre todos los numeros que hay
introducido entre 2 # por el usuario*/

var numero1=parseInt(prompt("Introduce el primer numero",0));
var numero2=parseInt(prompt("Introduce el segundo numero",0));

document.write("<H1>De "+numero1+" a "+numero2+"están estos numeros: </H1>")
for(var i=numero1;i<=numero2;i++){
    document.write(i+"<br/>");
}