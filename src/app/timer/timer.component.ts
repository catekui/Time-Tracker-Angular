import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

@Input() InputtedTime: number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }
  myInterval:any = null;
  // InputtedTime  = 60;
  paused: boolean = false;
  activity = "run";
  // n = 40; 
  // pauseTime(){
  //  if ()

  //  }

  // }

  decrementn() {
    // this.n = this.n - 1
    this.InputtedTime = this.InputtedTime - 1
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      this.decrementn()

      if (this.InputtedTime <= 0) {
        this.stopTimer()
        alert("session is over. Time to take a break " + this.activity)
      }

    }, 60000);
  }

  pauseTimer(){
    clearInterval(this.myInterval) 

  }

  stopTimer(){
    clearInterval(this.myInterval)
    this.InputtedTime = 0;

  }


}
