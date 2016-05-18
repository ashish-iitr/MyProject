'use strict';

angular.module('todoapp')
    .filter('dateFormatFilter', function() {
        return function(input) {
            // var result = input ? input.tostring() : null;
            var string = input.toDateString();
            return string;
            // if (!result) {
            //     return '-';
            // }
            //  result = result.split('T')[0];
            //   console.log(result);  
            // return result;
        }
    });