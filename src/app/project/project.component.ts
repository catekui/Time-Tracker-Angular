import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  show = false;
  show2 = false;
  formTitle = "Add Project";
  timer: number = 0;
  @Input () lastProject = new Project("","",0,0,"",new Date());
  
  



  displayForm(){
    this.show = !this.show;
    console.log(this.show);
  }
  displayForm2(){
    this.show2 = !this.show2;
  }
  constructor() { }

  ngOnInit(): void {
  }
  getChildTime(t:number ){
    console.log(t)
    this.timer = t
  }
  childStartTimer(minutes:string){
    this.timer =  parseInt(minutes)

  }
  getLastProject(project:Project){
    this.lastProject = project
    console.log("last project: " + project)

  }

}
