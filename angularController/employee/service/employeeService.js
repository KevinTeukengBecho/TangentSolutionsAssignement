'use strict';

//debugger;

(function () {

    //debugger;

    var EmployeeService = angular.module('myApp');
    EmployeeService.factory('EmployeeService', ['$rootScope', '$http', '$log', function ($rootScope, $http, $log) {

        debugger;
		
        var GetEmployees = function () {

            debugger;

            var data;
            $.ajax({
                url: 'http://staging.tangent.tngnt.co/api/employee/',
                type: "GET",
                data: {},
                async: false,
                headers: { "Authorization": "Token " + $rootScope.token },
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
				
            GetEmployees: GetEmployees,

        };
    }]);
}());