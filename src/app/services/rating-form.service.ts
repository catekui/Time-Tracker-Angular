import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class RatingFormService {
  base_url = "http://127.0.0.1:8000";
  

  constructor(private http: HttpClient) { }
 
  addReview(user: any, efficiency: number, experience:number, productivity:number){
    console.log(user)
    return this.http.post(this.base_url+"api/add-review", {
      user:user,
      efficiency:efficiency,
      experience:experience,
      productivity:productivity,

    },
    )
  }
}
