'Use Strict'
//Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucc


function porConsola(numero1,numero2){

    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log(mostrar);
    console.log("****************************");

}
function porPantalla(numero1,numero2){

    document.write("\n Suma: "+(numero1+numero2));
    document.write("\n Resta: "+(numero1-numero2));
    document.write("\n Multiplicacion: "+(numero1*numero2));
    document.write("\n Division: "+(numero1/numero2));
    document.write(mostrar);
    document.write("\n ****************************");  

}

function calculadora(numero1,numero2, mostrar=false){
    if(!mostrar){
        porConsola(numero1,numero2);
   
    }else{
   
        porPantalla(numero1,numero2);
    }

    return true;
}

calculadora(1,4);  
calculadora(2,5,true); 
/*
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,8);
}
*/
