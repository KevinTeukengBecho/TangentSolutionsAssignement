var myApp = angular.module('myApp', ["ui.router"]);

myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {


    $stateProvider
        .state('employees', {
			name:'employees',
            url: '/',
            templateUrl: 'employees.html'
        })
        .state('profile', {
            name: 'profile',
            url: '/profile',
            templateUrl: 'profile.html'
        })
}]);