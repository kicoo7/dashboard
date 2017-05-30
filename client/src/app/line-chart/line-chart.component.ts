import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service'


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers: [DataServiceService]

})
export class LineChartComponent implements OnInit {
  options: any = {
    chart: {
      type: 'line'
    },
    title: {text: 'Application downloads'},
    subtitle: {text: "Shows downloads based on app id"},
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [],
    xAxis: {
      categories: []
    }
  };
  chart: any;

  constructor(public  dataService: DataServiceService) {
    dataService.getAppStatisticsData().subscribe((res: any) => {
      this.chart.xAxis[0].setCategories(res.dates, true);
      for (let i = 0; i < res.data.length; ++i) {
        this.chart.addSeries(res.data[i]);
      }
    }, (err: any) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  onChange() {
    this.dataService.getAppStatisticsData().subscribe((res: any) => {
      this.chart.xAxis[0].setCategories(res.dates, true);
      for (let i = 0; i < res.data.length; ++i) {
        this.chart.series[i].setData(res.data[i].data);
      }
    }, (err: any) => {
      console.log(err);
    })
  }

  loadChart(chart: any) {
    this.chart = chart;
  }

}
