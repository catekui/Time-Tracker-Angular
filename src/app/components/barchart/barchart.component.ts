import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

import { dashboardService } from 'src/app/service/dashboard';
import { DashBoard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
​
  timeWasted: number = 0;
  // chart: any;
  // linchartData: any = [33,34,23,12,45];
  // getLatest$: any;
  recordins = []
  constructor(private dashboardService: dashboardService) { }
 
​
  ngOnInit(): void {
    this.createChart()
    this.get_statistics()
    
    this.recordins = this.get_statistics()
    console.log(this.recordins)
  }
​
  createChart(): void {
​
    Chart.register(...registerables);
​
    const data = {
      labels: ['Mon','Tue','Wed','Thu','Fri'],
      datasets: [{
        label: 'Daily Hours',
        backgroundColor: '#CDB4DB',
        borderColor: 'rgb(255, 99, 132)',
        data: this.recordins ,
        // borderWidth: 1,
      }]
    };
​
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          // display: false
        }
      }
    }
​
    const config: ChartConfiguration = {
      type: 'bar',
      // type:'line',
      data: data,
      options: options
    }
​
    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
    new Chart(chartItem, config)
  }
​
​
​
    
  data!:any
  get_statistics(){
     
    this.dashboardService.getStatistics().subscribe(data => 
     
    
    this.data = data
     
    );
    
    console.log(this.data)
    return this.data
  }
​
  // {no_of_projects: 5, daily_minutes: {…}, daily_hours: 128}
  // daily_hours: 128
  // daily_minutes: {day_1: 128, day_2: 0, day_3: 0, day_4: 0, day5: 0}
  // no_of_projects: 5
​
 
}