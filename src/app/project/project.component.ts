import { Component, OnInit } from '@angular/core';

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

}
