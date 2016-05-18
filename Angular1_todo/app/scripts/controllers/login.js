
'use strict';

angular.module("todoapp", [])
    .controller("LoginController", function($scope) {
       $scope.start = function() {
            var uname = $scope.username,
                pwd = $scope.passwd;
                if(uname!=null && pwd!=null){
                    console.log(uname);
                }
            else
            console.log("error");
        }

    });