import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
const base_url = '=http://127.0.0.1:8000/reviews/';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }
}
