//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Clase (molde del objeto)
 class Camiseta implements CamisetaBase{

    //Propiedades (caracteristicas del objeto)
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;
    
    //Metodos (funciones o acciones del objeto)
    constructor(color,modelo,marca,talla,precio){
        this.color=color;
        this.modelo=modelo;
        this.marca=marca;
        this.talla=talla;
        this.precio=precio
    }
    public setColor(color){
        this.color=color;
        
    }

    public getColor(){
        return this.color
    }
}

// Clase hija
class Sudadera extends Camiseta{
    public capucha:boolean;

    setCapucha(capucha:boolean){
        this.capucha=capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta=new Camiseta("gfss","fds","ewwfg","fdsa",13);
console.log(camiseta);

var sudadera_nike=new Sudadera("Rojo","manga larga","nike","M",14);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");

console.log(sudadera_nike);




