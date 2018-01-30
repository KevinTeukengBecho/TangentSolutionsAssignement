'use strict';

//debugger;

(function () {

    //debugger;

    var LoginService = angular.module('myApp');
    LoginService.factory('LoginService', ['$rootScope', '$http', '$log', function ($rootScope, $http, $log) {

        // Send  model composed of username and password to Server 
        var GetToken = function (model) {
            if (model !== undefined && model !== null) {
                return $http({
                    method: 'POST',
                    url: 'http://staging.tangent.tngnt.co/api-token-auth/',
                    data: model
                })
            }
            else {
                return null;
            }
        }

        return {
            GetToken: GetToken
        };
    }]);
}());