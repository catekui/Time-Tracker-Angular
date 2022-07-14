import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
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
  activeProject: number = -1;
  // minutesCount$: number = 5;
  // myInterval: any = null;
  // secondsCount$!:number;
  
  
  constructor(private http: HttpClient, private projectservice: ProjectService,private router: Router) { }
  @Output() startTimer = new EventEmitter;
  @Input() lastProject!:Project;
  @Input() showRow = false
  checkIndex(id:number){
    if (this.activeProject == id){
      return "activeproject"
    } 
    return ""
  }
  changeButton(id:number){
    if (this.activeProject == id){
      return true
    }
    return false
  }
  ngOnInit(): void {
    this.getProjects();
    this.projects.push(this.lastProject);
    
  }
   
  startCountdown(id:number, minutes:string, break_interval:number, description:string){
    this.activeProject = id;
    this.startTimer.emit([minutes, break_interval, id, description])
    
  }
  
    // Edit this to capture the id of the currentlty logged user not a number 1
    getProjects = ()=> {
      this.projectservice.getProjects().subscribe(
         (data:any) => {
          console.log(data)
          this.projects = data;
      
          console.log(data)
        },
      )};
      deleteProject(anId:number){
        let conf =  confirm("Do You want to delete this project?");
        // console.log(conf);
        if (conf){
          this.projectservice.deleteProject(anId).subscribe(
            (data:any) => {
             this.projects = data;
             
             
             console.log(data);
           },
          )
          this.router.navigate(['/project'])
        };
        }
   
         
        show = false;
        show2 = false;
        displayForm(){
          this.show = !this.show;
        }
        displayForm2(){
          this.show2 = !this.show2;
        }
        editProject(anId:number){
          
          this.show = !this.show;
          console.log(this.show)
    
        };
          
        deleteProjectNow( id:number){
        
            let confirmDelete = confirm("Are you sure you want to delete this project?");
            if(confirmDelete){
              this.projectservice.deleteProject(this.projId).subscribe(
              (data:any)=>{
                
              }) 
              
              this.router.navigate(['/project'])
          }
        }
}
