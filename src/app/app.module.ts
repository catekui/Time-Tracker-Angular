import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { ReportComponent } from './components/report/report.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjComponent } from './components/proj/proj.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { ProjectComponent } from './project/project.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,

    ReviewsComponent,


    ReportComponent,
    ProjectFormComponent,
    ProjComponent,

    LoginComponent,
    RegisterComponent,
    LandingpageComponent,
    ProjectComponent,
    TimerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

   
 
    BrowserModule,
    AppRoutingModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
