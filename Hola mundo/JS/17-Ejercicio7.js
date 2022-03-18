'Use Strict'
//Tabla de multiplicar de un numero introducido por pantalla

var numero=parseInt(prompt("De que numero deseas la tabla?",1));

for(var i=1;i<=12;i++){
    document.write(i+" x "+numero+"= "+(i*numero)+"</br>");
}
