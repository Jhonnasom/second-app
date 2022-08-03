var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicacion JS cargada");
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta("Rojo", "fds", "gdfd", "fdssa", 12);
    };
    return Main;
}());
var main = new Main();
