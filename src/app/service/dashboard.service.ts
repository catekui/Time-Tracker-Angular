import { Injectable } from '@angular/core';
import { AllHours } from '../models/all-hours';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  BASE_URL = 'http://127.0.0.1:8000/Time_worked_get/user_id';

  constructor(private http: HttpClient) { }

  getHours(no_of_projects:any,daily_minutes:any, daily_hours:number){
    console.log(no_of_projects);
    
    return this.http.get(this.BASE_URL);
  }
}
