import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  show = false;
  show2 = false;
  formTitle = "Add Project";
  totalUsers: number = 1028;
  efficiency: number = 89;
  experience: number = 93;
  productivity: number = 86;

  displayForm(){
    this.show = !this.show;
    console.log(this.show);
  }
  displayForm2(){
    this.show2 = !this.show2;
  }

  constructor(){ }

  ngOnInit(): void {
  }

    
  }


