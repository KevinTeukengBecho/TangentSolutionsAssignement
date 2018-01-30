////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Dashboard= angular.module('myApp');
    myApp_Dashboard.controller('DashboardCtrl', ['$rootScope', '$scope', '$log', '$http',
        function ($rootScope, $scope, $log, $http) {

			//initializing model
			$scope.model = {};
			$rootScope.token = "";

			//checking if local storage is supported
			if (typeof(Storage) !== "undefined") {
				
				// Retrieving the token
				$rootScope.token  = sessionStorage.getItem("token");
				
				//if there is no token, redirect to login page
				if($rootScope.token === undefined || $rootScope.token === null || $rootScope.token === "")
				{
					window.location = 'index.html';
				}
					
			   //the token exists and we getting the basic details of the user
				else {
				   var userDetails
				    $http({
				        method: 'GET',
				        url: 'http://staging.tangent.tngnt.co/api/user/me/',
				        headers: { "Authorization": "Token " + $rootScope.token },
				    })
				    .then(function successCallback(response) {
				        userDetails = response.data;

				        //Checking if user is active
				        if(userDetails.is_active === true || userDetails.is_active === "true"){
				            $scope.model.fullname = userDetails.first_name + " " + userDetails.last_name;
				            $scope.model.email = userDetails.email;
				            $scope.model.username = userDetails.username;
				        }

				        //User is not active
				        else{
				            alert("Your profile is not active. Please Contact Administration.");
				            window.location = 'index.html';
				        }

				    }, function errorCallback(response) {

                        //in case of an error, we redirect to login page
				        alert("An error occured.");
				        window.location = 'index.html';
				    });;
			   }
			  
			}
				
			//local storage not supported	
			else{
				alert("your browser is not supported, please update your browser");
				window.location = 'index.html';
			}			
			

            //function when logging out
			$scope.logout = function () {
			    sessionStorage.removeItem("token");
			    window.location = 'index.html'
			}


        }]);
}());