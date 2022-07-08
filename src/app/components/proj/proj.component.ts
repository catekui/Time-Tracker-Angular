import { Component, OnInit } from '@angular/core';
import { Subscription,interval } from 'rxjs';


@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  private subscription!: Subscription;


  public dateNow = new Date();

  public dDay = new Date('Jan 01 2021 00:00:00');
    milliSecondsInASecond = 1000;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference: any;
    public secondsToDday: any;
    public minutesToDday: any;
  

    private getTimeDifference () {
      this.timeDifference = 100;
      // this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference:any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);

}



startTimer(){
  
}

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
 }
}
