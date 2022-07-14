import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  formTitle = "Edit Project Details";
  projects: any;
  projId! :number;
  @ViewChild('project_form')
  project_form!: NgForm;
  
  constructor(private http: HttpClient, private projectservice: ProjectService,) { }

  ngOnInit(): void {
    this.getProjects();
  }


    // Edit this to capture the id of the currentlty logged user not a number 1
    getProjects = ()=> {
    
      this.projectservice.getUserProjects(1).subscribe(
         (data) => {
          this.projects = data;
      
        },
      
      
      )};



      deleteProject(anId:number){
        let conf =  confirm("Do You want to delete this project?");
        console.log(conf);
        if (conf){
          this.projectservice.deleteProject(anId).subscribe(
            (data) => {
             this.projects = data;
           },
          )};

        }
   
         
        show = false;
        show2 = false;
        displayForm(){
          this.show = !this.show;
        }
        displayForm2(){
          this.show2 = !this.show2;
        }
        editProject(id: string){
          
          this.show= !this.show;
          console.log(this.show)
          let currentProject = this.projects.find((p: { id: string; })=>{ return p.id === id })
          console.log(currentProject)
          // this.project_form.setValue({
          //   break_interval: currentProject.break_interval,
          //   description: currentProject.description,
          //   time_interval: currentProject.time_interval
          // })
        };

          








        deleteProjectNow( id:number){
        
            let confirmDelete = confirm("Are you sure you want to delete this project?");

            if(confirmDelete){

              this.projectservice.deleteProject(this.projId).subscribe(
              (data)=>{
                
              })  
          }
        }

}
