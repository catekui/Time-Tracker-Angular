import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  base_url = "http://127.0.0.1:8000";
  

  constructor(private http: HttpClient) { }
  addActivity(user:any, activity:string, date:number) {
    console.log(user)
    return this.http.post(this.base_url + "api/activity-create", {
      user: user,
      name: activity,
      date: date,
    }
      )
  }
}
