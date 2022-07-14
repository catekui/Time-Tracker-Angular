import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private reportservice: ReportService) { }

  projects: any
  ngOnInit(): void {
    
      this.reportservice.getUserProjects().subscribe(
         (data) => {
          this.projects = data; 
        },
      
      
      )};
  

}
