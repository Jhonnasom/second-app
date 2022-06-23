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
});


           