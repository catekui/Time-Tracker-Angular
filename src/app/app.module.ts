import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { ReportComponent } from './components/report/report.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjComponent } from './components/proj/proj.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { TimerComponent } from './timer/timer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingFormComponent } from './rating-form/rating-form.component';

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

    NavComponent,

    ProjectComponent,
    TimerComponent,
    NavbarComponent,
    RatingFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
