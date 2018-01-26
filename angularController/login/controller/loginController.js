////* <reference path="E:\WithHim\__Git\Repo_3_MH_AppServ\AppServ_Ver1_1\0301_WebApp\MyHealth.WebApp\Views/Appointment/Details.cshtml" />*/
'use strict';

(function () {

    var myApp_Login= angular.module('myApp');
    myApp_Login.controller('LoginCtrl', ['$rootScope', '$scope', '$log', 'LoginService',
        function ($rootScope, $scope, $log, LoginService) {
			
			debugger;
			
			//initializing model
			$scope.model = {};
			$scope.model.loginError = false;
			
			$scope.login = function(){
				
				debugger;
				
				//username and password object to send to server.
				var loginModel = {
					username : $scope.model.user_login,
					password : $scope.model.user_pass
				}
				
				LoginService.GetToken(loginModel)
				.then(function (success){
					
					debugger;
					
					//Getting the token after successfull login
					var token = success.data.token;
					
					if (typeof(Storage) !== "undefined") {
						// Storing the token
						sessionStorage.setItem("token", token);
						window.location = 'dashboard.html#/'
					
					}
					else{
						alert("your browser is not supported, please update your browser");
					}
					
				},function(error){
					
					debugger;
					$scope.model.loginError = true;
					$scope.model.user_pass = "";
					$("#user_login").focus();
				});
				
			}

        }]);
}());