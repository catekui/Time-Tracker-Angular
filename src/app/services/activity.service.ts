import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  base_url = "http://127.0.0.1:8000";
  

  constructor(private http: HttpClient) { }
  addActivity(user:any, activity:string, date:any) {
    console.log(user)
    return this.http.post(this.base_url + "/api/activity-create", {
      user: user,
      name: activity,
      date: date,
    }
      )
  }
  getUserActivity(userId:number) {
    console.log("activity service UserId: " + userId)
    return this.http.get(this.base_url + "/api/activity-list/" + userId)
  }
  editActivity(activityId:number, activity:string) {
    return this.http.post(this.base_url + "/api/activity-update/"+ {activityId}, 
    {
     name: activity
    }
    )
  }
  deleteActivity(activityId:number) {
    console.log( "activity service UserId"+ activityId)
    return this.http.delete(this.base_url+"/api/activity-delete/" + activityId)
  }
}