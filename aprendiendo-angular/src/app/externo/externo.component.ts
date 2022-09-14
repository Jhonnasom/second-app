import { Component, OnInit } from '@angular/core';
import { PeticionesServices } from '../services/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesServices],
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userId:any;
  public fecha:any;

  constructor(
    private _peticionesServices:PeticionesServices
  ) { 
    this.userId=1;
  }

  ngOnInit(): void {
    this.fecha=new Date(2019,5,20);
    this.cargaUsuario();
  }
  cargaUsuario(){
    this.user=false;
    this._peticionesServices.getUser(this.userId).subscribe(
      result=>{
          this.user=result.data;
        },
        error =>{
          console.log(<any>error);
        }
        
    );
  }
}
