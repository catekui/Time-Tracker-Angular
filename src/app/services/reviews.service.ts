import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
const base_url = 'https://magnificent-timetracker.herokuapp.com/reviews/';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }
}
