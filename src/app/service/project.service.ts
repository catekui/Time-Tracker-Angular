import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
   
  BASE_URL = 'http://127.0.0.1:8000';
  //BASE_URL = 'https://boiling-lake-72809.herokuapp.com/api/'
  constructor(private http: HttpClient) { }
  
    addProject(user:any,description:string, time_interval:number, break_interval:number, activity:string, date_added:any) {
      console.log(user)
      return this.http.post(this.BASE_URL+"/api/project-create", {
        user:user,
        description:description,
        time_interval:time_interval,
        break_interval:break_interval,
        activity:activity,
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


    getUserProjects(userId:number){
      console.log("project service User Id"+userId)
      return this.http.get(this.BASE_URL+"/project-list/"+userId)
    }


    deleteProject(projectId:number){
      console.log("project service User Id"+projectId)
      return this.http.delete(this.BASE_URL+"/project-delete/"+projectId)
    }
  

}
