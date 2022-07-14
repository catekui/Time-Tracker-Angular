import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  formHeading = "Edit ACtivity Details";
  activities:any;
  actId!: number;

  constructor(private http: HttpClient, private activityService: ActivityService) { }

  ngOnInit(): void {
    this.getActivity();
  }
  getActivity = ()=> {
  this.activityService.getUserActivity(1).subscribe(
    (data) => {
     this.activities = data;
 
   },
 
 
 )};

 deleteActivity(anId:number){
  let conf =  confirm("Do You want to delete this Activity?");
  console.log(conf);
  if (conf){
    this.activityService.deleteActivity(anId).subscribe(
      (data) => {
       this.activities = data;
     },
    )};

  }
  show = false;
  show2 = false;
  displayForm(){
    this.show = !this.show;
  }
  displayForm2(){
    this.show2 = !this.show2;
  }
  editActivity(anId:number){
    
    this.show = !this.show;
    console.log(this.show)

  };

  deleteActivityNow( id:number){
        
    let confirmDelete = confirm("Are you sure you want to delete this Activity?");

    if(confirmDelete){

      this.activityService.deleteActivity(this.actId).subscribe(
      (data)=>{
        
      })  
  }
}


}
