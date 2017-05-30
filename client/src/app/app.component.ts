import {Component} from '@angular/core';
import {DataServiceService} from './data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService]
})
export class AppComponent {
  markers: any;
  morning_downloads: Number = 0;
  evening_downloads: Number = 0;
  afternoon_downloads: Number = 0;
  night_downloads: Number = 0;
  total_downloads: Number = 0;

  constructor(public dataService: DataServiceService) {

    dataService.getTodaysDownloads().subscribe((res) => {
      this.markers = res;
    }, (err) => {
      console.log(err);
    });
    dataService.getTodaysStatisticsData().subscribe((res) => {
      this.morning_downloads = res.morning;
      this.afternoon_downloads = res.afternoon;
      this.evening_downloads = res.evening;
      this.night_downloads = res.night;
      this.total_downloads = res.total;
    }, (err) => {
      console.log(err);
    })

  }

  onCenterChange() {
    console.log('Call function based on new lat & lng to get only nearby markers');
  }

}
