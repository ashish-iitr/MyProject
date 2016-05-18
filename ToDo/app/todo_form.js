System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoForm = (function () {
                function TodoForm() {
                    this.newTask = new core_1.EventEmitter();
                    this.task = '';
                }
                TodoForm.prototype.addTodo = function () {
                    if (this.task) {
                        this.newTask.next({ text: this.task, done: false });
                    }
                    this.task = '';
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoForm.prototype, "newTask", void 0);
                TodoForm = __decorate([
                    core_1.Component({
                        selector: 'todo-form',
                        template: "\n    <form (ngSubmit)=\"addTodo()\">\n    <div class=\"row\">\n    \t<div class=\"col-lg-12\">\n    \t\t<div class=\"col-lg-6\">\n    \t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"task\" placeholder=\"add new task here\">\n    \t\t</div>\n    \t\t<div class=\"col-lg-6\">\n    \t\t\t<button type=\"submit\" class=\"btn btn-primary\">Add Task</button>\n    \t\t</div>\n    \t</div>\n    </div>\n    </form>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoForm);
                return TodoForm;
            }());
            exports_1("TodoForm", TodoForm);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=todo_form.js.map