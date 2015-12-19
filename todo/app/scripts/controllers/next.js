'use strict';

angular.module("todoapp")
    .controller("nextController", function($scope, TaskService) {
        $scope.getTask = [];
        $scope.getTask = TaskService.getTask(); 
       });