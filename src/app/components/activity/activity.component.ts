import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  show = false;
  show2 = false;
  formHeading = "Add Activity";

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

}
