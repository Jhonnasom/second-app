import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatillas";

@Injectable()
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;


    constructor(){
        this.zapatillas=[
            new Zapatilla('Reebook Classic','Rebook','Rojas',80,true),
            new Zapatilla('Nike Runner','Nike','Negras',60,true),
            new Zapatilla('Adidas DC','Adidas','Gris',180,true),
            new Zapatilla('Reebok Spartan','Adidas','Gris',180,false)

        ];
    }
    getTexto(){
        return "Hola Mundo desde un servicio";
    }
    
    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }
}