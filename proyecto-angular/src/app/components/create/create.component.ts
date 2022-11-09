import { Component, OnInit } from '@angular/core';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project: Project;

  constructor(
    private _projectService:ProjectService
  ) { 
      this.title="Crear Proyecto";
      this.project=new Project('','','','',2019,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.project);
  }

}
