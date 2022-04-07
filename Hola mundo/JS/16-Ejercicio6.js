'Use Strict'
/*Si un numero es par o impar, 
ventana prompt, si no es valido que nos pida de nuevo el
numero
*/

var number= parseInt(prompt("Introduce un numero",0));

//Si el numero no es valido que lo  vuelva a pedir de nuevo
while(isNaN(number)){
    number=parseInt(prompt('Introduce un numero',0));
}

if(number %2==0){
    alert("Es un numero par");
}
else{
    alert("Es impar");
}
