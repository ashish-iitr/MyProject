'use strict';

angular.module('todoapp')
    .service('TaskService', function TaskService() {
        var self = this;
        self.taskarray = [];
        self.savetask = function(task,date){
            self.taskarray.push({
            task: task,
            date: date,
            done: false
          });
          console.log(self.taskarray);
        }
        self.getTask = function() {
             
             return self.taskarray;
        }
    });