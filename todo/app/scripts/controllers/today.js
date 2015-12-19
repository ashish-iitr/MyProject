'use strict';

angular.module("todoapp")
    .controller("todayController", function($scope, TaskService) {
        $scope.getTask = [];
        $scope.getTask = TaskService.getTask(); 
       });