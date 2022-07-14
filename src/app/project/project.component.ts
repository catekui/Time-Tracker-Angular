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

  constructor() { }

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
        clearInterval(this.breakInterval);
        this.stopBreak()
        

       
      }
    }, 1000); 
  }


  stopBreak(){
    clearInterval(this.breakInterval);
    this.timer = 0;


  }


}
 // stopTimer using project id
        // modal 
        // start break timer
        

