import { Component,OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatillas";

@Component({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
    public titulo:string="Componente de zapatillas";
    public zapatillas:Array<Zapatilla>;
    
    constructor(){
        this.zapatillas=[
            new Zapatilla('Reebook Classic','Rebook','Blanco',80,true),
            new Zapatilla('Nike Runner','Nike','Negras',60,true),
            new Zapatilla('Adidas DC','Adidas','Gris',180,false)

        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);

    }
}
