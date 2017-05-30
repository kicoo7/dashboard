import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service'


@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css'],
  providers: [DataServiceService]

})
export class ColumnChartComponent implements OnInit {
  options: any = {
    chart: {
      type: 'column'
    },
    title: {text: 'Downloads by time of day'},
    subtitle: {text: 'Morning, Afternoon, Evening, Night'},
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    series: [],
    xAxis: {
      categories: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5']
    }
  };
  today: any = new Date(Date.now());
  before: any = new Date(Date.now() - 864000000);
  fromDate: string = this.before.getFullYear() + "-" + (this.before.getMonth() + 1) + "-" + this.before.getDate();
  toDate: string = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
  chart: any;

  constructor(public dateService: DataServiceService) {

    dateService.getTimeOfDayStatistics(this.fromDate, this.toDate).subscribe((res: any) => {
      this.chart.xAxis[0].setCategories(res.dates, true);
      for (let i = 0; i < res.data.length; ++i) {
        this.chart.addSeries(res.data[i]);
      }
    }, (err: any) => {
      console.log(err);
    });

  }

  onChange() {
    this.dateService.getTimeOfDayStatistics(this.fromDate, this.toDate).subscribe((res: any) => {
      this.chart.xAxis[0].setCategories(res.dates, true);
      for (let i = 0; i < res.data.length; ++i) {
        this.chart.series[i].setData(res.data[i].data);
      }
    }, (err: any) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  loadChart(chart: any) {
    this.chart = chart;
    this.chart.reflow();
  }

}
