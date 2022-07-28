//Objeto JSON

var bicicleta={
    color:'Rojo',
    modelo:'BMX',
    frenos:'De disco',
    velocidad: '90km',
    cambiaColor:function(nuevo_color){
        //bicicleta.color=nueva_color
        this.color=nuevo_color;
        console.log(this);
        
    }
};

bicicleta.cambiaColor("Azul");

