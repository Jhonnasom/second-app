//$=equivale a poner jQuery
//()luego lo que va entre parentesis sera el selector


$(document).ready(function(){
    //Selector de ID
    $("#rojo").css("background","red")
                       .css("color","white");
    
    $("#amarillo").css("background","yellow")
                               .css("color","green");

    $("#verde").css("background","green")
                .css("color","white");

    //Selectores de clases
    var mi_clase= $('.zebra').css("padding","5px");

    $('.sin_borde').click(function(){
        console.log("Click dado!!!");
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta
    var parrafos=$('p').css("cursor","pointer");

    //Pasos para remover una clase con un click
    //hasClass busca si un elemento tiene una clase 
    parrafos.click(function(){
        var that= $(this);
        if(!that.hasClass('grande')){
            that.addClass("grande");
        }else{
            that.removeClass('grande');
        }
      
    });

    //Selectores de atributo nos permiten seleccionar la etiqueta que tiene 
    //ciertos atributos
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','blue');

    //Otros
    //$('p,a').addClass('margen_superior');

    var busqueda= $("#elemento2").parent().parent().find('.resaltado');
    console.log(busqueda);
});


           