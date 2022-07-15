import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ReportComponent } from './components/report/report.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { RegisterComponent } from './register/register.component';
import { BarchartComponent } from './components/barchart/barchart.component';


const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'project', component:ProjectComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'projectform', component:ProjectFormComponent},
  {path:'ratingform', component:RatingFormComponent},
  {path:'report', component:ReportComponent},

  {path:'activity', component:ActivityComponent},
  {path:'activityform', component:ActivityFormComponent},
  {path:'dashboard', component:BarchartComponent},
  {path: '', redirectTo:'landingpage', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
