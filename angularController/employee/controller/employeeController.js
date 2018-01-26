////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Employee= angular.module('myApp');
    myApp_Employee.controller('EmployeeCtrl', ['$rootScope', '$scope', '$log', 'EmployeeService',
        function ($rootScope, $scope, $log, EmployeeService) {
			
            debugger;
            //functions to evaluate abbreviations================================
            var evaluateGender = function (gender) {
                if (gender === "M")
                    return "Male";
                else if (gender === "F")
                    return "Female";
            }

            var evaluateRace = function (race) {
                if (race === "B")
                    return "Black African";
                else if (race === "C")
                    return "Coloured";
                else if (race === "I")
                    return "Indian or Asian";
                else if (race === "W")
                    return "White";
                else if (race === "N")
                    return "None Dominant";
            }
            //===================================================================
			
			$scope.model = {};

            //Getting List of Employees
			$scope.model.employees = EmployeeService.GetEmployees();
			for (var i = 0; i < $scope.model.employees.length; i++) {
			    //evaluating some expressions so they can be more comprehensible to user
			    $scope.model.employees[i].gender = evaluateGender($scope.model.employees[i].gender);
			    $scope.model.employees[i].race = evaluateRace($scope.model.employees[i].race);
			}





        }]);
}());