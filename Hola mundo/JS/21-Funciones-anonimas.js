'Use Strict'
//Funciones anonimas
//Es una funcion que no tiene nombre

function sumame(numero1,numero2,sumaYmuestra,sumaPordos){
    var sumar=numero1+numero2;

    sumaYmuestra(sumar);
    sumaPordos(sumar);

    return(sumar); 
}

sumame(5,7,function(dato){
    console.log("La suma es: ",dato);
},
function(dato){
    console.log("La suma por 2 es: ",(dato*2));
});
