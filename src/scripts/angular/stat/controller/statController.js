////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Stat= angular.module('myApp');
    myApp_Stat.controller('StatCtrl', ['$rootScope', '$scope', '$log','$http','$timeout',
        function ($rootScope, $scope, $log, $http, $timeout) {
			

            $scope.model = {};

            $http({
                method: 'GET',
                url: 'http://staging.tangent.tngnt.co/api/employee/',
                headers: { "Authorization": "Token " + $rootScope.token },
            })
            .then(function successCallback(response) {

                //getting data about all employees
                $scope.model.employees = response.data;

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

                //waiting for page to load before calling this script to load charts
                var timer = $timeout(function () {
                    
                    //Calculating and displaying gender statistics
                    var totalWoman = 0;
                    var totalMan = 0;
                    var others = 0;
                    for (var i = 0; i < $scope.model.NumEmployees; i++) {


                        if ($scope.model.employees[i].gender === "F")
                            totalWoman++;
                        else if ($scope.model.employees[i].gender === "M")
                            totalMan++;
                        else
                            others++
                    }
                    var percWoman = (totalWoman/$scope.model.NumEmployees) * 100;
                    var percMan = (totalMan / $scope.model.NumEmployees) * 100;
                    var percOthers = 100 - percWoman - percMan;

                    debugger;

                    Highcharts.chart('genderstats', {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: 'Percentage of Employees Per Gender'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                }
                            }
                        },
                        series: [{
                            name: 'PERCENTAGE',
                            colorByPoint: true,
                            data: [{
                                name: 'WOMAN',
                                y: percWoman
                            }, {
                                name: 'MAN',
                                y: percMan,
                                sliced: true,
                                selected: true
                            }, {
                                name: 'OTHERS',
                                y: percOthers
                            }]
                        }]
                    });
                    // END GENDER STATISTICS



                    //RACE STATISTICS
                    var totalBlack = 0;
                    var totalIndian = 0;
                    var totalColoured = 0;
                    var totalWhite = 0;
                    var totalNone = 0;
                    for (var i = 0; i < $scope.model.NumEmployees; i++) {

                        if ($scope.model.employees[i].race === "B")
                            totalBlack++;
                        else if ($scope.model.employees[i].race === "C")
                            totalColoured++;
                        else if ($scope.model.employees[i].race === "I")
                            totalIndian++;
                        else if ($scope.model.employees[i].race === "W")
                            totalWhite++;
                        else
                            totalNone++
                    }
                    var percBlack = (totalBlack / $scope.model.NumEmployees) * 100;
                    var percColoured = (totalColoured / $scope.model.NumEmployees) * 100;
                    var percIndian = (totalIndian / $scope.model.NumEmployees) * 100;
                    var percWhite = (totalWhite / $scope.model.NumEmployees) * 100;
                    var percNone = (totalNone / $scope.model.NumEmployees) * 100;


                    Highcharts.chart('racestats', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Percentage of employees per race'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            type: 'category',
                            labels: {
                                rotation: -45,
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'percentage'
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            pointFormat: 'percentage'
                        },
                        series: [{
                            name: 'Population',
                            data: [
                                ['Black African', percBlack],
                                ['Coloured', percColoured],
                                ['Indian or Asian', percIndian],
                                ['White', percWhite],
                                ['None Dominant', percNone]
                            ],
                            dataLabels: {
                                enabled: true,
                                rotation: -90,
                                color: '#FFFFFF',
                                align: 'right',
                                format: '{point.y:.1f}', // one decimal
                                y: 10, // 10 pixels down from the top
                                style: {
                                    fontSize: '13px',
                                    fontFamily: 'Verdana, sans-serif'
                                }
                            }
                        }]
                    });
                    //END RACE STATISTICS

                    $timeout.cancel(timer);
                }, 0);
               

            }, function errorCallback(response) {
                //in case of an error, we redirect to login page
                alert("An error occured.");
                window.location = 'index.html';
            });
        }]);
}());