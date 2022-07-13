import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  user = 1
  BASE_URL = 'http://127.0.0.1:8000';
  
  //BASE_URL = 'https://boiling-lake-72809.herokuapp.com/api/'
  constructor(private http: HttpClient) { }
  
    addProject(description:string, time_interval:number, break_interval:number, date_added:any) {
      // console.log(this.user)
      return this.http.post(this.BASE_URL+"/project-create/", {
        user:this.user,
        description:description,
        time_interval:time_interval,
        break_interval:break_interval,
        date_added:date_added
        
      },
      )
      
    }






     
    editProject(projectId:number,description:string, time_interval:number, break_interval:number, activity:string) {
      
      return this.http.post(this.BASE_URL+"/api/project-update/"+{projectId}, {
        description:description,
        time_interval:time_interval,
        break_interval:break_interval,
        activity:activity,
        
      },
      )
      
    }


    deleteProject(projectId:number){
      console.log("project service User Id"+projectId)
      return this.http.delete(this.BASE_URL+"/project-delete/"+projectId)
    }



   
    getProjects():Observable<Project[]> {

      return this.http.get<Project[]>(this.BASE_URL+"/project-list/"+this.user)
    }
  

}
