$(document).ready(function(){

    //Mover elemento por la pagina
    $('.elemento').draggable();

    //Redimensionar los elementos
    $('.elemento').resizable();

    //Seleccionar elementos
    //$('.lista-seleccionable').selectable();

    //Listar y ordenar los elementos
    $('.lista-seleccionable').sortable({
        update:function(event,ui){
            console.log("Ha cambiado la lista");
        }
    });

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake",4000);
    });

});