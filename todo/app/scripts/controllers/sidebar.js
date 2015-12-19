'use strict';

angular.module("todoapp")
    .controller("sidebarController", function($scope, $location) {
       $scope.addtask = function() {
        $location.path("/addtask");
                }
        $scope.today = function() {
        $location.path("/today");
                }
          $scope.next = function() {
        $location.path("/next");
                }                
        

    });