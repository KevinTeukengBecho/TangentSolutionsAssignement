////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Profile= angular.module('myApp');
    myApp_Profile.controller('ProfileCtrl', ['$rootScope', '$scope', '$log','$http',
        function ($rootScope, $scope, $log, $http) {

            $scope.model = {};
            $scope.model.profile = {};

            //Getting profile
            $http({
                method: 'GET',
                url: 'http://staging.tangent.tngnt.co/api/employee/me',
                headers: { "Authorization": "Token " + $rootScope.token },
            }).then(function successCallback(response) {

                $scope.model.profile = response.data;

                //evaluating some expressions so they can be more comprehensible to user and binding it to the view
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