import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ReportService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  report(user: any, project: string,date_added: any,time_worked: number){
   
      return this.http.post(this.BASE_URL+"/time_worked/"+ user,{
      user: user,
      project: project,
      date_added: date_added,
      time_worked: time_worked
    },
    )
  }

  getUserProjects(userId:number){
    console.log("report service User Id"+userId)
    return this.http.get(this.BASE_URL+"/project-list/"+userId)
  }
  
}










