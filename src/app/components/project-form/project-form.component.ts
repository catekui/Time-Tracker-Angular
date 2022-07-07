import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css',
  
]
})
export class ProjectFormComponent implements OnInit {
 project_form = new FormGroup({
  description: new FormControl(''),
  time_interval:new FormControl(''),
  break_interval:new FormControl(''),
  activity:new FormControl(''),

 })
 title = "Add Project"
 clearInput(){
  this.project_form.reset()
 }
  constructor() { 


  }

  ngOnInit(): void {
  }

  


  onSubmit = () => {
   console.log(this.project_form.value.activity)
   this.project_form.reset()
   
   
  }







}
