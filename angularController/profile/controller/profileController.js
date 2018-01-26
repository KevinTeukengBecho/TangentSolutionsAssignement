////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Profile= angular.module('myApp');
    myApp_Profile.controller('ProfileCtrl', ['$rootScope', '$scope', '$log', 'ProfileService','$http',
        function ($rootScope, $scope, $log, ProfileService, $http) {
			
            //helpful functions to evaluate abbreviations=====================================
            var evaluateReview = function (review) {
                if (review === "P")
                    return "Perfomance Increase";
                else if (review === "S")
                    return "Starting Salary";
                else if (review === "A")
                    return "Annual Increase";
                else if (review === "E")
                    return "Expectation Review";
            }

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
            //==================================================================================
            debugger;

            $scope.model = {};
            $scope.model.profile = {};

            //Getting profile
            $http({
                method: 'GET',
                url: 'http://staging.tangent.tngnt.co/api/employee/me',
                headers: { "Authorization": "Token " + $rootScope.token },
            }).then(function successCallback(response) {

                $scope.model.profile = response.data;

                //evaluating some expressions so they can be more comprehensible to user
                for (var i = 0 ; i < ($scope.model.profile.employee_review).length ; i++) {
               
                    $scope.model.profile.employee_review[i].type = evaluateReview($scope.model.profile.employee_review[i].type);
                }
                $scope.model.profile.gender = evaluateGender($scope.model.profile.gender);
                $scope.model.profile.race = evaluateRace($scope.model.profile.race);
                $scope.model.profile.is_employed === true ? $scope.model.profile.is_employed = "Yes" : $scope.model.profile.is_employed = "No";
                $scope.model.profile.is_foreigner === true ? $scope.model.profile.is_foreigner = "Yes" : $scope.model.profile.is_foreigner = "No";
            }, function errorCallback(response) {
            });



        }]);
}());