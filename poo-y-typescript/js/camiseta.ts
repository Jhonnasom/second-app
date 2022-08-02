//Clase (molde del objeto)
class Camiseta{

    //Propiedades (caracteristicas del objeto)
    private color:string;
    private model:string;
    private marca:string;
    private talla:string;
    private precio:number;
    
    //Metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color=color;
        
    }

    public getColor(){
        return this.color
    }
}

//Instanciar nuevas clases de los 
var camiseta=new Camiseta();
camiseta.setColor("Rojo");

var playera=new Camiseta();
playera.setColor("Azul");




console.log(camiseta.getColor(),playera);




