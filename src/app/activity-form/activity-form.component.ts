import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
  activity_form = new FormGroup({
    activity: new FormControl(''),
  
   })
   title = 'Add Activity'
  clearInput(){
    this.activity_form.reset()
   }

  constructor(private http: HttpClient, private router: Router, private activityService: ActivityService) { }

  ngOnInit(): void {}

  newActivity = new Activity("","", Date())

  onSubmit = () => {
    this.newActivity.name = this.activity_form.value.activity;
    this.newActivity.date = this.activity_form.value.date

    this.newActivity.user=1;
    this.activityService.addActivity(this.newActivity.user,this.newActivity.name,this.newActivity.date).subscribe(
      newActivity=> {
        newActivity= newActivity
        console.log(newActivity)
      }
    )
    this.activity_form.reset()
  }
}
