<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
=======
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
>>>>>>> 0e241306f37fffd2abcae2b5f0d813da385cf908
import {HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/models/project';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css',
  
]
})
export class ProjectFormComponent implements OnInit {
  AddProjectChoice!: boolean;
  project_form = new FormGroup({
  description: new FormControl(''),
  time_interval:new FormControl(''),
  break_interval:new FormControl(''),
  activity:new FormControl(''),

 })

 @Input() title = "";
 

 @Output() setTimer = new EventEmitter()
 @Output() project = new EventEmitter()

 


 
 clearInput(){
  this.project_form.reset()
 }

  constructor(private http: HttpClient,private router: Router, private projectservice: ProjectService) { 


  }
  
  
  ngOnInit(): void {
  }

  newProject = new Project("","",0,0,"",new Date())

  onSubmit = () => {
    // console.log(this.project_form.getRawValue());


    
    this.newProject.description = this.project_form.value.description;
    this.newProject.activity = this.project_form.value.activity;
    this.newProject.time_interval = this.project_form.value.time_interval;
    this.newProject.break_interval = this.project_form.value.break_interval;
    this.newProject.date_added = new Date()

    
    

    this.projectservice.addProject(this.newProject.description, this.newProject.time_interval,this.newProject.break_interval,this.newProject.date_added).subscribe(
      newProject => {
        console.log(newProject)
        this.project.emit(newProject)
        return newProject = newProject
        
      }
    )

    this.setTimer.emit(this.project_form.value.time_interval)
    
 
    // this.newProject = new Project(new Project("","",0,0,"",new Date()))
    this.project_form.reset()
    
    
    
  }
}
