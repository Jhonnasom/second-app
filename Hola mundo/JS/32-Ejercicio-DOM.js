'Use Strict'
window.addEventListener('load',function(){
    console.log("DOM CARGADO!");

    var formulario=this.document.querySelector("#formulario");
    var box_dashed=this.document.querySelector(".dashed");
    box_dashed.style.display="none";

    formulario.addEventListener('submit',function(){
        console.log("Evento submit capturado");

        //Obtener el valor en los campos del formulario
        var nombre=document.querySelector("#nombre").value;
        var apellidos=document.querySelector("#apellidos").value;
        var edad=parseInt(document.querySelector("#edad").value);

        //Validacion para ver si los campos estan llenos o vacios
        if(nombre.trim()==null||nombre.trim().lenght==0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML="El nombre no es valido";
            return false;
        }

        if(apellidos.trim()==null||apellidos.trim().lenght==0){
            alert("Los apellidos no son validos");
            return false;
        }

        if(edad==null||edad.lenght<=0||isNaN(edad)){
            alert("La edad no es valida");
            return false;
        }

        box_dashed.style.display="block";

        var p_nombre=document.querySelector("#p_nombre span");
        var p_apellidos=document.querySelector("#p_apellidos span");
        var p_edad=document.querySelector("#p_edad span");

        p_nombre.innerHTML=nombre;
        p_apellidos.innerHTML=apellidos;
        p_edad.innerHTML=edad;



        /*
        var datos_usuario=[nombre,apellidos,edad];

        var indice;
        for(indice in datos_usuario){
            var parrafo=document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }
        */
    });
});