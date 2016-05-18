System.register(['angular2/core', './todo_list', './todo_form'], function(exports_1, context_1) {
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
    var core_1, todo_list_1, todo_form_1;
    var TodoApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            },
            function (todo_form_1_1) {
                todo_form_1 = todo_form_1_1;
            }],
        execute: function() {
            TodoApp = (function () {
                function TodoApp() {
                    this.todos = [
                        { text: 'learn angular', done: true },
                        { text: 'build an angular app', done: false }
                    ];
                }
                Object.defineProperty(TodoApp.prototype, "remaining", {
                    get: function () {
                        return this.todos.filter(function (todo) { return !todo.done; }).length;
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoApp.prototype.archive = function () {
                    var _this = this;
                    var oldTodos = this.todos;
                    this.todos = [];
                    oldTodos.forEach(function (todo) {
                        if (!todo.done) {
                            _this.todos.push(todo);
                        }
                    });
                };
                TodoApp.prototype.addTask = function (task) {
                    this.todos.push(task);
                };
                TodoApp = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        template: "\n\t<div class=\"row\">\n\t\t<h2>ToDo</h2>\n\t\t<div class=\"col-lg-12\">\n\t\t\t<span>{{remaining}} of {{todos.length}} remaining</span>[ <a (click)=\"archive()\">archive</a> ]\n\t\t</div>\n\t\t<div class=\"col-lg-12\">\n\t\t\t<todo-list [todos]=\"todos\"></todo-list>\n\t\t</div>\n\t\t<div class=\"col-lg-12\">\n\t\t\t<todo-form (newTask)=\"addTask($event)\"></todo-form>\n\t\t</div>\n\t</div>\n    ",
                        styles: ['a { cursor: pointer; cursor: hand; }'],
                        directives: [todo_list_1.TodoList, todo_form_1.TodoForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoApp);
                return TodoApp;
            }());
            exports_1("TodoApp", TodoApp);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=todo_app.js.map