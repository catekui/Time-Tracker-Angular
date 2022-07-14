import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  BASE_URL = 'https://magnificent-timetracker.herokuapp.com';
   user = 1
  constructor(private http: HttpClient) { }
  set_report( action_done: string,date_added: any,time_worked: number){
   
      return this.http.post(this.BASE_URL+"/time_worked_post/",{
      user: this.user,
      action_done: action_done,
      date_added: date_added,
      time_worked: time_worked
    },
    )
  }
  getUserProjects(){
   
    return this.http.get(this.BASE_URL+"/time_worked_get/"+this.user+"/")
  }
  
}