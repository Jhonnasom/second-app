//Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Metodos (funciones o acciones del objeto)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
//Instanciar nuevas clases de los 
var camiseta = new Camiseta();
camiseta.setColor("Rojo");
var playera = new Camiseta();
playera.setColor("Azul");
console.log(camiseta.getColor(), playera);
