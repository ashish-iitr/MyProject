import {Component} from 'angular2/core';
import {Todo}      from './todo';
import {TodoList}  from './todo_list';
import {TodoForm}  from './todo_form';

@Component({
	selector: 'todo-app',
	template: `
	<div class="row">
		<h2>ToDo</h2>
		<div class="col-lg-12">
			<span>{{remaining}} of {{todos.length}} remaining</span>[ <a (click)="archive()">archive</a> ]
		</div>
		<div class="col-lg-12">
			<todo-list [todos]="todos"></todo-list>
		</div>
		<div class="col-lg-12">
			<todo-form (newTask)="addTask($event)"></todo-form>
		</div>
	</div>
    `,
	styles: ['a { cursor: pointer; cursor: hand; }'],
	directives: [TodoList, TodoForm]
})
export class TodoApp {
	todos: Todo[] = [
		{ text: 'learn angular', done: true },
		{ text: 'build an angular app', done: false }
	];

	get remaining() {
		return this.todos.filter(todo => !todo.done).length;
	}

	archive(): void {
		let oldTodos = this.todos;
		this.todos = [];
		oldTodos.forEach(todo => {
			if (!todo.done) { this.todos.push(todo); }
		});
	}

	addTask(task: Todo) {
		this.todos.push(task);
	}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/