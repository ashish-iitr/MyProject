'use strict';

angular.module('todoapp')
     .filter('nextFilter', function() {
        return function (input) {

        var nexttask = [];

      for (var i = 0; i < input.length; i++) {

          var taskdate = new Date(input[i].date).getDate();
          var current_month = new Date().getMonth();
          var taskmonth = new Date(input[i].date).getMonth();
          var tomorrow = new Date().getDate()+1;
          var next = new Date().getDate()+7;
          console.log(tomorrow);
          console.log(taskdate);
          console.log(next);
          console.log(next-tomorrow);
          //var afternext = new Date().getDate()+8;
          //var tommorow = new Date().getTime() + 1*24*60*60*1000;
       if (((tomorrow <= taskdate &&  taskdate <= next) && (current_month === taskmonth)) ||
         (((tomorrow > taskdate &&  ((next-tomorrow) > taskdate))) && (current_month < taskmonth)))
         {
            nexttask.push(input[i]);
        }
            
    }
   return nexttask;
  }

});




// 'use strict';

// angular.module('todoapp')
//      .filter('nextFilter', function() {
//         return function (input) {

//         var nexttask = [];

//       for (var i = 0; i < input.length; i++) {

//           var current_day = new Date().getTime() - 1*24*60*60*1000;
//           var taskday = new Date(input[i].date).getTime();
//           var tommorow = new Date().getTime() + 1*24*60*60*1000;
//           console.log(current_day);
//        if (current_day <= taskday) {
//             todaytask.push(input[i]);
//         }
//         else if(taskday >= current_day){
//             todaytask.push('0');
//         } 
            
//     }
//    return todaytask;
//   }

// });