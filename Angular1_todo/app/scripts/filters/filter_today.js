'use strict';

angular.module('todoapp')
     .filter('todayFilter', function() {
        return function (input) {

        var todaytask = [];

      for (var i = 0; i < input.length; i++) {

          var current_date = new Date().getDate();
          var taskdate = new Date(input[i].date).getDate();
          var current_month = new Date().getMonth();
          var taskmonth = new Date(input[i].date).getMonth();
          //var tommorow = new Date().getTime() + 1*24*60*60*1000;
       if (current_date === taskdate &&  current_month === taskmonth) {
            todaytask.push(input[i]);
        }
            
    }
   return todaytask;
  }

});