import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Component({
	selector: 'todo-form',
	template: `
    <form (ngSubmit)="addTodo()">
    <div class="row">
    	<div class="col-lg-12">
    		<div class="col-lg-6">
    			<input type="text" class="form-control" [(ngModel)]="task" placeholder="add new task here">
    		</div>
    		<div class="col-lg-6">
    			<button type="submit" class="btn btn-primary">Add Task</button>
    		</div>
    	</div>
    </div>
    </form>`
})
export class TodoForm {
	@Output() newTask = new EventEmitter<Todo>();
	task: string = '';

	addTodo() {
		if (this.task) {
			this.newTask.next({ text: this.task, done: false });
		}
		this.task = '';
	}
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/