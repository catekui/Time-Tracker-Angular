import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

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

import { PanelComponent } from './components/panel/panel.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';

import { RatingFormComponent } from './rating-form/rating-form.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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

    PanelComponent,
    ProjectListComponent,
    ProjectSummaryComponent,

    RatingFormComponent,
     ActivityComponent,
     ActivityFormComponent,
     ActivityListComponent,
     ActivitySummaryComponent,
     BarchartComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    DataTablesModule,
=======
>>>>>>> 0e241306f37fffd2abcae2b5f0d813da385cf908
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
