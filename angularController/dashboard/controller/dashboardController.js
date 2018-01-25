////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Dashboard= angular.module('myApp.Dashboard');
    myApp_Dashboard.controller('DashboardCtrl', ['$rootScope', '$scope', '$log', 'DashboardService',
        function ($rootScope, $scope, $log, DashboardService) {
			
			debugger;
			
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
					
			   //the token exists
			   else{
				   var userDetails = DashboardService.GetUserDetails();
				   
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
				   debugger;
			   }
			  
			}
				
			//local storage not supported	
			else{
				alert("your browser is not supported, please update your browser");
				window.location = 'index.html';
			}			
			
			


        }]);
}());