import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RatingFormService } from 'src/app/services/rating-form.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {
  reviews = {
    efficiency:'',
    experience:'',
    productivity:'',
  
  };
  submitted = false;

  myForm = new FormGroup({
    efficiency: new FormControl(''),
    experience: new FormControl(''),
    productivity: new FormControl(''),
  });

  title = 'Rate'
  clearInput(){
    this.myForm.reset()
   }
    constructor(private ratingFormService: RatingFormService) {
    }
  
    ngOnInit(): void {}
    saveReview(){
      const data = {
        efficiency: this.reviews.efficiency,
        experience: this.reviews.experience,
        productivity: this.reviews.productivity,
      };
      this.ratingFormService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

    newReview(){
      this.submitted=false;
      this.reviews= {
        efficiency: '',
        experience: '',
        productivity: '',
      };
    }
    

    onSubmit = () => {
      console.log(this.myForm.value.activity)
      this.myForm.reset()
 
}
}

