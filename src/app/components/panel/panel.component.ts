import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
//  projects?: Project[];
 projects?: any;
 hours: number = 0;


  constructor(private http: HttpClient, private projectservice: ProjectService) { }

  ngOnInit(): void {
    // this.projects = this.getProjects();

 
      
    
  }




  // Edit this to capture the id of the currentlty logged user not a number 1
  // getProjects = ()=> {
    
  //   this.projectservice.getUserProjects(1).subscribe(
  //      (data) => {
  //       this.projects = data;
    
  //     },
    
    
  //   )};

    
    

  


  }
