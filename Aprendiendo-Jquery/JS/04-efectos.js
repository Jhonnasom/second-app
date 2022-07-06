//fadeIn and fadeOut para hacer un fundido

$(document).ready(function(){

        $("#mostrar").hide();

        $("#mostrar").click(function(){
            $(this).hide();
            $("#ocultar").show();

            $("#caja").slideDown('slow');    
        });

        $("#ocultar").click(function(){
            $(this).hide();
            $("#mostrar").show();

            $("#caja").slideUp('fslow',0);    
        });

        $("#todoenuno").click(function(){
            $("#caja").slideToggle('fast');
        });


});