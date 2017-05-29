webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(110);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.morning_downloads = 0;
        this.evening_downloads = 0;
        this.afternoon_downloads = 0;
        this.night_downloads = 0;
        this.total_downloads = 0;
        dataService.getTodaysDownloads().subscribe(function (res) {
            _this.markers = res;
        }, function (err) {
            console.log(err);
        });
        dataService.getTodaysStatisticsData().subscribe(function (res) {
            _this.morning_downloads = res.morning;
            _this.afternoon_downloads = res.afternoon;
            _this.evening_downloads = res.evening;
            _this.night_downloads = res.night;
            _this.total_downloads = res.total;
        }, function (err) {
            console.log(err);
        });
    }
    AppComponent.prototype.onCenterChange = function () {
        console.log('Call function based on new lat & lng to get only nearby markers');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(183),
        styles: [__webpack_require__(178)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bar_chart_bar_chart_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_datetime_picker__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngui_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ngui_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__column_chart_column_chart_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__line_chart_line_chart_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__);
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function highchartsFactory() {
    return __webpack_require__(182);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__bar_chart_bar_chart_component__["a" /* BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_8__column_chart_column_chart_component__["a" /* ColumnChartComponent */],
            __WEBPACK_IMPORTED_MODULE_9__line_chart_line_chart_component__["a" /* LineChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngui_datetime_picker__["NguiDatetimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyArRYqwdcL1xGkbk263rX1tsuPJvX57IRM'
            })
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_10_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                useFactory: highchartsFactory
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarChartComponent = (function () {
    function BarChartComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.options = {
            chart: { type: 'bar' },
            title: { text: 'Downloads by country' },
            subtitle: { text: 'Number of downloads for every country' },
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
        this.today = new Date(Date.now());
        this.before = new Date(Date.now() - 864000000);
        this.fromDate = this.before.getFullYear() + "-" + (this.before.getMonth() + 1) + "-" + this.before.getDate();
        this.toDate = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
        dataService.getCountryStatisticsData(this.fromDate, this.toDate).subscribe(function (res) {
            _this.chart.xAxis[0].setCategories(res.countries, true);
            _this.chart.addSeries(res.data);
        }, function (err) {
            console.log(err);
        });
    }
    BarChartComponent.prototype.ngOnInit = function () {
    };
    BarChartComponent.prototype.onChange = function () {
        var _this = this;
        this.dataService.getCountryStatisticsData(this.fromDate, this.toDate).subscribe(function (res) {
            _this.chart.xAxis[0].setCategories(res.countries, true);
            _this.chart.series[0].setData(res.data.data);
        }, function (err) {
            console.log(err);
        });
    };
    BarChartComponent.prototype.loadChart = function (chart) {
        this.chart = chart;
    };
    return BarChartComponent;
}());
BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bar-chart',
        template: __webpack_require__(184),
        styles: [__webpack_require__(179)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]) === "function" && _a || Object])
], BarChartComponent);

var _a;
//# sourceMappingURL=bar-chart.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColumnChartComponent = (function () {
    function ColumnChartComponent(dateService) {
        var _this = this;
        this.dateService = dateService;
        this.options = {
            chart: {
                type: 'column'
            },
            title: { text: 'Downloads by time of day' },
            subtitle: { text: 'Morning, Afternoon, Evening, Night' },
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
        this.today = new Date(Date.now());
        this.before = new Date(Date.now() - 864000000);
        this.fromDate = this.before.getFullYear() + "-" + (this.before.getMonth() + 1) + "-" + this.before.getDate();
        this.toDate = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate();
        dateService.getTimeOfDayStatistics(this.fromDate, this.toDate).subscribe(function (res) {
            _this.chart.xAxis[0].setCategories(res.dates, true);
            for (var i = 0; i < res.data.length; ++i) {
                _this.chart.addSeries(res.data[i]);
            }
        }, function (err) {
            console.log(err);
        });
    }
    ColumnChartComponent.prototype.onChange = function () {
        var _this = this;
        this.dateService.getTimeOfDayStatistics(this.fromDate, this.toDate).subscribe(function (res) {
            _this.chart.xAxis[0].setCategories(res.dates, true);
            for (var i = 0; i < res.data.length; ++i) {
                _this.chart.series[i].setData(res.data[i].data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ColumnChartComponent.prototype.ngOnInit = function () {
    };
    ColumnChartComponent.prototype.loadChart = function (chart) {
        this.chart = chart;
        this.chart.reflow();
    };
    return ColumnChartComponent;
}());
ColumnChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-column-chart',
        template: __webpack_require__(185),
        styles: [__webpack_require__(180)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]) === "function" && _a || Object])
], ColumnChartComponent);

var _a;
//# sourceMappingURL=column-chart.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartComponent = (function () {
    function LineChartComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.options = {
            chart: {
                type: 'line'
            },
            title: { text: 'Application downloads' },
            subtitle: { text: "Shows downloads based on app id" },
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
        dataService.getAppStatisticsData().subscribe(function (res) {
            _this.chart.xAxis[0].setCategories(res.dates, true);
            for (var i = 0; i < res.data.length; ++i) {
                _this.chart.addSeries(res.data[i]);
            }
        }, function (err) {
            console.log(err);
        });
    }
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent.prototype.onChange = function () {
        var _this = this;
        this.dataService.getAppStatisticsData().subscribe(function (res) {
            _this.chart.xAxis[0].setCategories(res.dates, true);
            for (var i = 0; i < res.data.length; ++i) {
                _this.chart.series[i].setData(res.data[i].data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    LineChartComponent.prototype.loadChart = function (chart) {
        this.chart = chart;
    };
    return LineChartComponent;
}());
LineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-line-chart',
        template: __webpack_require__(186),
        styles: [__webpack_require__(181)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service_service__["a" /* DataServiceService */]) === "function" && _a || Object])
], LineChartComponent);

var _a;
//# sourceMappingURL=line-chart.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"tile is-ancestor\">\n  <div class=\"tile is-parent\">\n    <article class=\"tile is-child notification\">\n      <div class=\"content\">\n        <p class=\"title\">Empatica</p>\n        <p class=\"subtitle\">Welcome back</p>\n        <div class=\"content\">\n          <aside class=\"menu\">\n            <p class=\"menu-label\">\n              JUMP TO\n            </p>\n            <ul class=\"menu-list\">\n              <li><a href=\"#time-of-day\">Statistics by time of day</a></li>\n              <li><a href=\"#country\">Statistics by country</a></li>\n              <li><a href=\"#app-id\">Statistics by app id</a></li>\n            </ul>\n          </aside>\n        </div>\n      </div>\n    </article>\n  </div>\n  <div class=\"tile is-vertical is-8\">\n    <div class=\"tile is-parent\" style=\"padding-left: 0;\">\n      <article class=\"tile is-child notification is-danger\" style=\"background: #bc204b\">\n        <p class=\"title\">Dashboard</p>\n        <p class=\"subtitle\">Total downloads for today : {{total_downloads}}</p>\n        <div class=\"content\">\n          <nav class=\"level\">\n            <div class=\"level-item has-text-centered\">\n              <div>\n                <p class=\"heading\">Morning</p>\n                <p class=\"title\">{{morning_downloads}}</p>\n              </div>\n            </div>\n            <div class=\"level-item has-text-centered\">\n              <div>\n                <p class=\"heading\">Afternoon</p>\n                <p class=\"title\">{{afternoon_downloads}}</p>\n              </div>\n            </div>\n            <div class=\"level-item has-text-centered\">\n              <div>\n                <p class=\"heading\">Evening</p>\n                <p class=\"title\">{{evening_downloads}}</p>\n              </div>\n            </div>\n            <div class=\"level-item has-text-centered\">\n              <div>\n                <p class=\"heading\">Night</p>\n                <p class=\"title\">{{night_downloads}}</p>\n              </div>\n            </div>\n          </nav><!-- Content -->\n          <hr/>\n        </div>\n      </article>\n    </div>\n  </div>\n</div>\n<hr/>\n<div style=\"width:100%\">\n  <sebm-google-map style=\"height:400px\" [latitude]=\"45.4654\" [longitude]=\"9.1859\"\n                   (centerChange)=\"onCenterChange()\">\n    <sebm-google-map-marker *ngFor=\"let m of markers; let i = index\" [latitude]=\"(m ? m.lat : 45.4654) \"\n                            [longitude]=\"(m ? m.lng : 9.1859)\"></sebm-google-map-marker>\n\n  </sebm-google-map>\n  <app-column-chart id=\"time-of-day\"></app-column-chart>\n  <app-bar-chart id=\"country\"></app-bar-chart>\n  <app-line-chart id=\"app-id\"></app-line-chart>\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"columns\">\n    <div class=\"form-group column is-2\" *ngIf=\"fromDate\">\n      <label>From: </label>\n      <input\n        [(ngModel)]=\"fromDate\"\n        ngui-datetime-picker\n        date-only=\"true\"\n        (valueChanged)=\"onChange()\"/>\n    </div>\n\n    <div class=\"form-group column is-2\" *ngIf=\"toDate\">\n      <label>To: </label>\n      <input\n        [(ngModel)]=\"toDate\"\n        ngui-datetime-picker\n        date-only=\"true\"\n        (valueChanged)=\"onChange()\"/>\n    </div>\n  </div>\n  <chart [options]=\"options\" (load)=\"loadChart($event.context)\"></chart>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"columns\">\n    <div class=\"form-group column is-2\">\n      <label>From: </label>\n      <input\n        [(ngModel)]=\"fromDate\"\n        ngui-datetime-picker\n        date-only=\"true\"\n        (valueChanged)=\"onChange()\"/>\n    </div>\n\n    <div class=\"form-group column is-2\">\n      <label>To: </label>\n      <input\n        [(ngModel)]=\"toDate\"\n        ngui-datetime-picker\n        date-only=\"true\"\n        (valueChanged)=\"onChange()\"/>\n    </div>\n  </div>\n  <chart [options]=\"options\" (load)=\"loadChart($event.context)\"></chart>\n</div>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<hr/>\n<div>\n  <chart type=\"Chart\" [options]=\"options\" (load)=\"loadChart($event.context)\"></chart>\n</div>\n"

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceService = (function () {
    function DataServiceService(http) {
        this.http = http;
    }
    DataServiceService.prototype.getTodaysStatisticsData = function () {
        return this.http.get('http://localhost:8000/dashboard/statistics/todays-statistics')
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.getTimeOfDayStatistics = function (fromDate, toDate) {
        return this.http.get("http://localhost:8000/dashboard/statistics/time-of-day?from_date=" + fromDate + "&to_date=" + toDate)
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.getCountryStatisticsData = function (fromDate, toDate) {
        return this.http.get("http://localhost:8000/dashboard/statistics/country?from_date=" + fromDate + "&to_date=" + toDate)
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.getAppStatisticsData = function () {
        return this.http.get("http://localhost:8000/dashboard/statistics/app-id")
            .map(function (res) { return res.json(); });
    };
    DataServiceService.prototype.getTodaysDownloads = function () {
        return this.http.get("http://localhost:8000/dashboard/statistics/downloads")
            .map(function (res) { return res.json(); });
    };
    return DataServiceService;
}());
DataServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataServiceService);

var _a;
//# sourceMappingURL=data-service.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[211]);
//# sourceMappingURL=main.bundle.js.map