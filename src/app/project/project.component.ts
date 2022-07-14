import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { ReportService } from '../services/report.service';
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
  fixedTime!:number;
  
  myInterval:any = null;
  pausedTimer: boolean = true;
  break: number = 0;
  breakInterval: any = null;
  projectId: number = -1;
  description: string = "";
  activeProject: number = -1;
  
  startTimer() {
    this.myInterval = setInterval(() => {
      this.timer --;
      if (this.timer <= 0){
        clearInterval(this.myInterval)
        this.stopTimer()
        alert("Its time to take a break")
        
        this.timer = this.break
        this.startBreak()
      }
    }, 1000); 
  }
  pauseTimer(){
    clearInterval(this.myInterval)
  }
   
  stopTimer(){
    clearInterval(this.myInterval);
    this.timer = 0;
  }
  displayForm(){
    this.show = !this.show;
    console.log(this.show);
  }
  displayForm2(){
    this.show2 = !this.show2;
  }
  constructor(private reportservice: ReportService) { }
  ngOnInit(): void {
  }
  getChildTime(t:number ){
    console.log(t)
    this.timer = t
  }
  childStartTimer(data:Array < any >){
    this.timer =  data[0]
    this.break = data[1]
    this.projectId = data[2]
    this.description = data[3]
    
    this.fixedTime = data[0]
    console.log(this.description)
    
    clearInterval(this.myInterval);
    clearInterval(this.breakInterval);
   
    this.startTimer()
    // this.pausedTimer
  }
// 
  startBreak() {
    this.breakInterval = setInterval(() => {
      this.timer --;
      if (this.timer <= 0){
        this.reportservice.set_report(this.description,new Date(),this.fixedTime).subscribe(data =>{
          data = data
          console.log(this.breakInterval)
         
        })
        clearInterval(this.breakInterval);
        this.stopBreak()
        
       
      }
    }, 1000); 
  }
  getLastProject(project:Project){
    this.lastProject = project
    console.log("last project: " + project)
  }
  stopBreak(){
    clearInterval(this.breakInterval);
    this.timer = 0;
  }
}
 // stopTimer using project id
        // modal 
        // start break timer
        













