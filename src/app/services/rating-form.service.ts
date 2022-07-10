import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
const base_url = "http://127.0.0.1:8000/add-review"
@Injectable({
  providedIn: 'root'
})
export class RatingFormService {
  

  constructor(private http: HttpClient) { }
  create(data: any) 
  { return this.http.post(base_url, data);
  }
}
