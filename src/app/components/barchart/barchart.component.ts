import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  show = false;
  show2 = false;
  formTitle = "Add Project";
  dailyHours: number = 113;
  averageHours: number = 113/5;
  projects: number = 13;
  timeWasted: number = 36;
  // chart: any;
  // linchartData: any = [33,34,23,12,45];
  // getLatest$: any;

  displayForm(){
    this.show = !this.show;
    console.log(this.show);
  }
  displayForm2(){
    this.show2 = !this.show2;
  }

  ngOnInit(): void {
    this.createChart()
  }

  createChart(): void {

    Chart.register(...registerables);

    const data = {
      labels: ['Mon','Tue','Wed','Thu','Fri'],
      datasets: [{
        label: 'Daily Hours',
        backgroundColor: '#CDB4DB',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 34],
        // borderWidth: 1,
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          // display: false
        }
      }
    }

    const config: ChartConfiguration = {
      type: 'bar',
      // type:'line',
      data: data,
      options: options
    }

    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem
    new Chart(chartItem, config)
  }

}