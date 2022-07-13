import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ReportComponent } from './components/report/report.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'landingpage', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'landingpage', component:LandingpageComponent},
  {path:'project', component:ProjectComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'projectform', component:ProjectFormComponent},
  {path:'ratingform', component:RatingFormComponent},
  {path:'report', component:ReportComponent},
  {path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
