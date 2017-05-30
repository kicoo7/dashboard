import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(private http: Http) {
  }

  getTodaysStatisticsData() {
    return this.http.get('http://localhost:8000/dashboard/statistics/todays-statistics')
      .map(res => res.json());
  }

  getTimeOfDayStatistics(fromDate: any, toDate: any) {
    return this.http.get(`http://localhost:8000/dashboard/statistics/time-of-day?from_date=${fromDate}&to_date=${toDate}`)
      .map(res => res.json());
  }

  getCountryStatisticsData(fromDate: any, toDate: any) {
    return this.http.get(`http://localhost:8000/dashboard/statistics/country?from_date=${fromDate}&to_date=${toDate}`)
      .map(res => res.json());
  }

  getAppStatisticsData() {
    return this.http.get(`http://localhost:8000/dashboard/statistics/app-id`)
      .map(res => res.json());
  }

  getTodaysDownloads() {
    return this.http.get(`http://localhost:8000/dashboard/statistics/downloads`)
      .map(res => res.json());
  }
}
