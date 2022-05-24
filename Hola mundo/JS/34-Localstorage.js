'Use Strict'
//Local Storage podemos guardar informacion local
//App web desarrolladas en JavaScript


//Comprobar disponibilidad de local storage
if(typeof(Storage)!=='undefined'){
    console.log("Local Storage Disponible");
}else{
    console.log("Local Storage No Disponible");
}

//Guardar datos en el nav local storage
localStorage.setItem("titulo","Curso de js");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");

//Guardar objetos JSON
var usuario={
    nombre:"Victor Robles",
    email:"victor@victor.com",
    web:"victorroblesweb.es"
};

localStorage.setItem("usuario",JSON.stringify(usuario));//Convierte un objeto a un JSON STRING

//Recuperar objeto con JSON.parse pasa de JSONSTRING A JSON OBJETO
var userjs=JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web);

