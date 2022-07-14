import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';
>>>>>>> 0e241306f37fffd2abcae2b5f0d813da385cf908
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
<<<<<<< HEAD
  @ViewChild('project_form')
  project_form!: NgForm;
=======
  minutesCount$: number = 5;
  myInterval: any = null;
  secondsCount$!:number;
  
>>>>>>> 0e241306f37fffd2abcae2b5f0d813da385cf908
  
  constructor(private http: HttpClient, private projectservice: ProjectService,) { }

  ngOnInit(): void {
    this.getProjects();
    this.secondsCount$ = 60;
  }
   
  getTimer(){
    return this.secondsCount$
  }

  decrementTimer(minutes: number) {
    this.minutesCount$ = minutes;
    // secondsCount$= parseInt(secondsCount$) 
    // minutesCount$ = Number(minutes);
    // console.log(minutes, minutesCount$, secondsCount$)
    this.myInterval = setInterval(this.updateTimer, 1000)
  }


  updateTimer(minutesCount$: number){
    const minutes = this.getTimer()
    // this.secondsCount$ -1;
    // this.minutesCount$ = minutes;
    console.log(minutes)
//     if (secondsCount$ == 0){
//       secondsCount$ = 60
//       minutesCount$ --;
//     }
//     if (minutesCount$ == 0 && secondsCount$ == 0) {
//       clearInterval(this.myInterval)

//   }
//  console.log(minutesCount$, secondsCount$)
 
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
