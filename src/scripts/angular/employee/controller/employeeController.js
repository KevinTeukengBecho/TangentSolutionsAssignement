////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Employee= angular.module('myApp');
    myApp_Employee.controller('EmployeeCtrl', ['$rootScope', '$scope', '$log', '$http',
        function ($rootScope, $scope, $log, $http) {
			$scope.model = {};

            //Getting List of Employees

			$http({
			    method: 'GET',
			    url: 'http://staging.tangent.tngnt.co/api/employee/',
			    headers: { "Authorization": "Token " + $rootScope.token },
			})
            .then(function successCallback(response) {

                $scope.model.employees = response.data;

                for (var i = 0; i < $scope.model.employees.length; i++) {
                    //evaluating some expressions so they can be more comprehensible to user
                    $scope.model.employees[i].gender = evaluateGender($scope.model.employees[i].gender);
                    $scope.model.employees[i].race = evaluateRace($scope.model.employees[i].race);
                }
                
            }, function errorCallback(response) {
                //in case of an error, we redirect to login page
                alert("An error occured.");
                window.location = 'index.html';
            });

			debugger;

            //Static variables for filtering
			$scope.model.races = [ { value: 'All', code: 0 }, { value: 'Black African', code: 'B'}, { value: 'Coloured', code: 'C'}, { value: 'Indian or Asian', code: 'I'}, { value: 'White', code: 'W' }, { value: 'None Dominant', code: 'N'}];
			$scope.model.genders = [ { value: 'All', code: 0}, { value: 'Male', code: 'M' }, { value: 'Female', code:'F'}];
			$scope.model.positions = [{ value: 'All', code: 0 }, { value: 'Front-end Developer', code: 1 }, { value: 'Back-end Developer', code: 2 }, { value: 'Project Manager', code: 3 }];


            //filtering according to parameters
			$scope.filter = function () {
			    var alreadyOneParam = false;
			    var stringForRequest = "http://staging.tangent.tngnt.co/api/employee/?";
			    if ($scope.model.selectedGender !== undefined && $scope.model.selectedGender !== null && $scope.model.selectedGender !== "" && $scope.model.selectedGender.code !== undefined && $scope.model.selectedGender.code !== null && $scope.model.selectedGender.code !== "" && $scope.model.selectedGender.code !== 0 && $scope.model.selectedGender.code !=='0') {
			        stringForRequest = stringForRequest + "gender=" + $scope.model.selectedGender.code;
			        alreadyOneParam = true;
			    }
			    if ($scope.model.selectedRace !== undefined && $scope.model.selectedRace !== null && $scope.model.selectedRace !== "" && $scope.model.selectedRace.code !== undefined && $scope.model.selectedRace.code !== null && $scope.model.selectedRace.code !== "" && $scope.model.selectedRace.code !== 0 && $scope.model.selectedRace.code !== '0') {
			        if (alreadyOneParam)
			            stringForRequest = stringForRequest + "&race=" + $scope.model.selectedRace.code;
			        else
			            stringForRequest = stringForRequest + "race=" + $scope.model.selectedRace.code;
			        alreadyOneParam = true;
			    }
			   if ($scope.model.selectedPosition !== undefined && $scope.model.selectedPosition !== null && $scope.model.selectedPosition !== "" && $scope.model.selectedPosition.code !== undefined && $scope.model.selectedPosition.code !== null && $scope.model.selectedPosition.code !== "" && $scope.model.selectedPosition.code !== 0 && $scope.model.selectedPosition.code !== '0') {
			        if (alreadyOneParam)
			            stringForRequest = stringForRequest + "&position=" + $scope.model.selectedPosition.code;
			        else
			            stringForRequest = stringForRequest + "position=" + $scope.model.selectedPosition.code;
			        alreadyOneParam = true;
			    }

			    debugger;

			    $http({
			        method: 'GET',
			        url: stringForRequest,
			        headers: { "Authorization": "Token " + $rootScope.token },
			    })
                .then(function successCallback(response) {

                    $scope.model.employees = response.data;

                    for (var i = 0; i < $scope.model.employees.length; i++) {
                        //evaluating some expressions so they can be more comprehensible to user
                        $scope.model.employees[i].gender = evaluateGender($scope.model.employees[i].gender);
                        $scope.model.employees[i].race = evaluateRace($scope.model.employees[i].race);
                    }

                }, function errorCallback(response) {
                    //in case of an error, we redirect to login page
                    alert("An error occured.");
                    window.location = 'index.html';
                });
			}
        }]);
}());