'use strict';

angular.module('todoapp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/addtask', {
                templateUrl: '../views/addtask.html',
                controller: 'addtaskController'
            })
            .when('/today', {
                templateUrl: '../views/today.html',
                controller: 'todayController'
            })
            .when('/next', {
                templateUrl: '../views/next.html',
                controller: 'nextController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });