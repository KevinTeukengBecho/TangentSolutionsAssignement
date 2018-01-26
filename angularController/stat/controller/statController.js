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




          



        }]);
}());