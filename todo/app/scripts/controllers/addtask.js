'use strict';

angular.module("todoapp")
    .controller("addtaskController", function($scope, TaskService) {
       $scope.dt = new Date();
       $scope.date = new Date();
       $scope.todos = [];
       $scope.start = function() {
        TaskService.savetask($scope.task,$scope.date);
        $scope.task = '';
        
      }
    });