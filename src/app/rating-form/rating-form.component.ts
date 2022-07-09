import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {
  myForm = new FormGroup({
    efficiency: new FormControl(''),
    experience: new FormControl(''),
    productivity: new FormControl(''),
  });

  title = 'Rate'
  clearInput(){
    this.myForm.reset()
   }
    constructor() { 
  
  
    }
  
    ngOnInit(): void {
    }

    onSubmit = () => {
      console.log(this.myForm.value.activity)
      this.myForm.reset()
 
}
}
