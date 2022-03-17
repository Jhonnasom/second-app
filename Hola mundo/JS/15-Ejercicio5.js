'Use Strict'
/*Programa que muestre todos los numeros divisores de un numero 
introducido por pantalla*/

var numero1=parseInt(prompt("Introduce un numero",1));

for(var i=1; i<=numero1;i++){
    if(numero1%i==0){
        console.log("Divisor: "+i);
    }
}
