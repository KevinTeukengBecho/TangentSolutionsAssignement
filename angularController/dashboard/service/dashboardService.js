'use strict';

//debugger;

(function () {

    //debugger;

    var DashboardService = angular.module('myApp.Dashboard');
    DashboardService.factory('DashboardService', ['$rootScope', '$http', '$log', function ($rootScope, $http, $log) {

        debugger;
		
		var GetUserDetails = function () {
			
			debugger;
			
			var data;
            $.ajax({
                url: 'http://staging.tangent.tngnt.co/api/user/me/',
                type: "GET",
                data: {},
                async: false,
				headers: {"Authorization": "Token " + $rootScope.token},
                cache: false,
                dataType: "json",
                success: function (result) {
                    data = result;
                },
                error: function (err) {
                    //$log.log("failure message: " + err);
                }
            });
            return data;
        }


        return {
				
				GetUserDetails: GetUserDetails


        };
    }]);
}());