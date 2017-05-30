import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ChartModule} from 'angular2-highcharts';
import {AppComponent} from './app.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {NguiDatetimePickerModule} from '@ngui/datetime-picker';
import {ColumnChartComponent} from './column-chart/column-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import {AgmCoreModule} from 'angular2-google-maps/core';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ColumnChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NguiDatetimePickerModule,
    ChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArRYqwdcL1xGkbk263rX1tsuPJvX57IRM'
    })
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
