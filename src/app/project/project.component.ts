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

  


  startTimer() {
    this.myInterval = setInterval(() => {
      this.timer --;
      if (this.timer <= 0){
        this.stopTimer()
        // stopTimer using project id
        // modal 
        // start break timer
        // stop, puase methods

      }
    }, 1000); 
  }

  pauseTimer(){
    clearInterval(this.timer)

  }
   
  stopTimer(){
    clearInterval(this.timer);

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

  childStartTimer(minutes:string){
    this.timer =  parseInt(minutes)
    this.startTimer()
    

  }

}
