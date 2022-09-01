import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private_route:ActivatedRoute,
    private_router:Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      console.log(params);
    });
  }

}
