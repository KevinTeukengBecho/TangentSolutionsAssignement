/// <reference path="" />
/// <reference path="" />
/// <reference path="" />
/// <reference path="scripts/angular/employee/service/employeeService.js" />
//including important libraries
var $ = require('jquery');
window.$ = $;
global.jQuery = require('jquery');
window.jQuery = require('jquery');
require('bootstrap');
var angular = require('angular');
require('angular-ui-router');
require('jquery.easing');

//librarie for charts
var Highcharts = require('highcharts');
window.Highcharts = require('highcharts');
window.Highcharts = require('highcharts');
global.Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

//Additional scripts for responsiveness
require('./scripts/scripts');
require('./scripts/perfect-scrollbar.min');
require('./scripts/utilities');

//including angular controllers and services
require('./scripts/angular/app');

//dashboard controllers
require('./scripts/angular/dashboard/controller/dashboardController');

//employee controllers 
require('./scripts/angular/employee/controller/employeeController');

//login controllers and services
require('./scripts/angular/login/service/loginService');
require('./scripts/angular/login/controller/loginController');

//profile controllers
require('./scripts/angular/profile/controller/profileController');

//stat controllers
require('./scripts/angular/stat/controller/statController');


//importing CSS files

import styles from './assets/css/bootstrap.min.css';

import styles from './assets/css/style.css';

import styles from './assets/fonts/font-awesome/css/font-awesome.css';