import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RatingFormService } from 'src/app/services/rating-form.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Reviews } from '../models/reviews';

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
    constructor(private http: HttpClient, private router: Router, private ratingFormService: RatingFormService) {
    }
  
    ngOnInit(): void {}

    newReview = new Reviews("",0,0,0)
 
     
    

    onSubmit = () => {
      //console.log(this.myForm.value.activity)
      this.newReview.efficiency = this.myForm.value.efficiency;
      this.newReview.experience = this.myForm.value.experience;
      this.newReview.productivity = this.myForm.value.productivity;

      this.newReview.user = 1;
      this.ratingFormService.addReview(this.newReview.user,this.newReview.efficiency, this.newReview.experience,this.newReview.productivity).subscribe(
        newReview => {
         
          newReview = newReview
          console.log(newReview)
        }
      )
    
      this.myForm.reset()
 
}
}

