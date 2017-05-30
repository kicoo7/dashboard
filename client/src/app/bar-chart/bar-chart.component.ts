import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  providers: [DataServiceService]
})
export class BarChartComponent implements OnInit {
  options: any = {
    chart: {type: 'bar'},
    title: {text: 'Downloads by country'},
    subtitle: {text: 'Number of downloads for every country'},
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [],
    xAxis: {
      categories: [],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      labels: {
        overflow: 'justify'
      }
    }
  };
  today: any = new Date(Date.now());
  before: any = new Date(Date.now() - 864000000);
  fromDate: string = this.before.getFullYear() + "-" + (this.before.getMonth() + 1) + "-" + this.before.getDate();
  toDate: string = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
  chart: any;

  constructor(public  dataService: DataServiceService) {
    dataService.getCountryStatisticsData(this.fromDate, this.toDate).subscribe((res: any) => {
      this.chart.xAxis[0].setCategories(res.countries, true);
      this.chart.addSeries(res.data);
    }, (err: any) => {
      console.log(err);
    });

  }

  ngOnInit() {

  }


  onChange() {
    this.dataService.getCountryStatisticsData(this.fromDate, this.toDate).subscribe((res: any) => {
      this.chart.xAxis[0].setCategories(res.countries, true);
      this.chart.series[0].setData(res.data.data);
    }, (err: any) => {
      console.log(err);
    })
  }

  loadChart(chart: any) {
    this.chart = chart;
  }

}
