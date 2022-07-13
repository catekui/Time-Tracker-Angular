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
  paused: boolean = true;

  startTimer(){
    if (this.InputtedTime > 0){
      this.paused
    }
  }

 }
