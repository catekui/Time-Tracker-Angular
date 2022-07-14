import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  user = 1
  BASE_URL = 'https://magnificent-timetracker.herokuapp.com';
  //BASE_URL = 'https://boiling-lake-72809.herokuapp.com/api/'
  constructor(private http: HttpClient) { }
  
  getStatistics() {
    return this.http.get(this.BASE_URL + "/get_statistics/" + this.user + "/")
  }
}