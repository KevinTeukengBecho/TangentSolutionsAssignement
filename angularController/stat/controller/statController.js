////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Stat= angular.module('myApp');
    myApp_Stat.controller('StatCtrl', ['$rootScope', '$scope', '$log', 'StatService','EmployeeService',
        function ($rootScope, $scope, $log, StatService, EmployeeService) {
			
            debugger;
            //functions to evaluate abbreviations================================
            $scope.model = {};
            $scope.model.employees = EmployeeService.GetEmployees();

            //calculating total number of employees
            $scope.model.NumEmployees = $scope.model.employees.length;

            //calculating number of birthdays this month
            $scope.model.NumBirthdays = 0;
            $scope.model.NumBirthdaysNext30 = 0;
            for (var i = 0 ; i < $scope.model.employees.length; i++) {
                if (parseInt($scope.model.employees[i].days_to_birthday) === 0)
                    $scope.model.NumBirthdays++;
                if (parseInt($scope.model.employees[i].days_to_birthday) <= 30)
                    $scope.model.NumBirthdaysNext30++;
            }




            Highcharts.chart('container', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Stacked column chart'
                },
                xAxis: {
                    categories: ['Black African', 'Coloured', 'Indian or Asian', 'White', 'Non Dominant']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total fruit consumption'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                legend: {
                    align: 'right',
                    x: -30,
                    verticalAlign: 'top',
                    y: 25,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                    borderColor: '#CCC',
                    borderWidth: 1,
                    shadow: false
                },
                tooltip: {
                    headerFormat: '<b>{point.x}</b><br/>',
                    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true,
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                        }
                    }
                },
                series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }, {
                    name: 'Jane',
                    data: [2, 2, 3, 2, 1]
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5]
                }]
            });



        }]);
}());